import User from "../models/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginValidate, registerValidate } from "../validations/RegisterValidation.js";
import { sendEmail } from "../sendmail/Mail.js";


// generate token 

const generateToken = (payload, expiresIn = "7d") => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

// Set cookie options
const cookieOption = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    try {

        const { error, value } = registerValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.details.map((err) => err.message),
            });
        }

        const existingUser = await User.findOne({ email }).select("+password");

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();


        const token = generateToken({ id: newUser._id });

        cookieOption(res, token);

        // send mail to user 
        await sendEmail({
            to: newUser.email,
            subject: "Welcome to Upthrust",
            html: `<h1>Welcome, ${newUser.name}!</h1><p>Thank you for registering at our Upthrust. We're excited to have you on board!</p><p>Best regards,<br/>The Upthrust Team</p>`,
        })

        return res.status(201).json({ success: true, message: "User registered successfully", user: newUser.name, email: newUser.email });

    } catch (error) {
        return res.status(500).json({ message: "Error occurred while registering user" });
    }
}

export const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    try {
        const { error, value } = loginValidate.validate(req.body, {
            abortEarly: false,
        });

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.details.map((err) => err.message),
            });
        }
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        if (!user.isUserVerify) {
            return res.json({
                success: false,
                message: "Please verify your email first"
            });
        }


        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = generateToken({ id: user._id });

        cookieOption(res, token);
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                id: user._id,
                token: token,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Error occurred while logging in" });
    }
}


export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",

        });
        return res.status(200).json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error occurred while logging out" });
    }
}


export const senduserOtp = async (req, res) => {
    try {

        // const { userId } = req.body;
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
        const { id } = req.user;
        // console.log("User ID :", id);

        const user = await User.findById(id);
        if (user.isUserVerify) {
            return res.status(200).json({ success: true, message: "User already verified" });
        }

        const otpvalue = String(Math.floor(Math.random() * 900000 + 100000));
        user.otp = otpvalue;
        // console.log("OTP for user verification:", otpvalue);
        user.otpExpire = Date.now() + 10 * 60 * 1000;

        await user.save();

        await sendEmail({
            to: user.email,
            subject: "Verify your account",
            html: `<h1>OTP for account verification</h1><p>Your OTP for account verification is <b>${otpvalue}</b>. It will expire in 10 minutes.</p><p>Best regards,<br/>The Upthrust Team</p>`,
        });
        return res.status(200).json({ success: true, message: "OTP sent to email for verification" });

    } catch (error) {
        return res.status(500).json({ message: "Error occurred while verifying user" });
    }
}

export const verifyOtp = async (req, res) => {
    try {
        const { otp } = req.body;
        const { id: userId } = req.user;
        if (!userId || !otp) {
            return res.status(400).json({ message: "Please provide userId and otp" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        if (user.otp !== otp || user.otpExpire < Date.now()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }
        user.isUserVerify = true;
        user.otp = undefined;
        user.otpExpire = undefined;
        await user.save();

        return res.status(200).json({ success: true, message: "OTP verified successfully" });


    } catch (error) {
        return res.status(500).json({ message: "Error occurred while verifying OTP" });
    }
}

// password reset otp send

export const resetPasswordOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Please provide email" })
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const otpvalue = String(Math.floor(Math.random() * 900000 + 100000));
        user.resetOtp = otpvalue;
        // console.log("OTP for user verification:", otpvalue);
        user.resetOtpExpire = Date.now() + 10 * 60 * 1000;

        await user.save();

        await sendEmail({
            to: user.email,
            subject: "Password Reset OTP",
            html: `<h1>OTP for password reset</h1><p>Your OTP for password reset is <b>${otpvalue}</b>. It will expire in 10 minutes.</p><p>Best regards,<br/>The Upthrust Team</p>`,
        });
        return res.status(200).json({ success: true, message: "OTP sent to email for verification" });

    } catch (error) {
        return res.status(500).json({ message: "Error occurred while resending OTP", error: error.message });
    }
}

// verify and reset password 

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Please provide email, otp and new password" })
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        if (user.resetOtp !== otp || user.resetOtpExpire < Date.now()) {
            return res.status(400).json({ message: "Invalid or expired OTP" })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetOtp = undefined;
        user.resetOtpExpire = undefined;
        await user.save();

        await sendEmail({
            to: user.email,
            subject: "Password Reset Successful",
            html: `<h1>Password Reset Successful</h1><p>Your password has been reset successfully. You can now log in with your new password ${newPassword}.</p><p>Best regards,<br/>The Upthrust Team</p>`,
        });
        return res.status(200).json({ success: true, message: "Password reset successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Error occurred while verifying reset OTP", error: error.message });
    }
}