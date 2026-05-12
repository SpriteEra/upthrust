import express from "express";
import {
    LoginUser, logoutUser, registerUser,
    resetPassword, resetPasswordOtp,
    senduserOtp, verifyOtp,
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";
import { loginLimiter, otpLimiter, passwordResetLimiter } from "../middleware/rateLimiter.js";
// import { activityLogger } from "../middleware/activityLogger.js";

const router = express.Router();

// router.post("/register", registerUser)
router.post("/login", loginLimiter, LoginUser);
router.get("/logout", logoutUser);

// OTP verification
router.post("/send-otp", userAuth, otpLimiter, senduserOtp);
router.post("/verify-otp", userAuth, verifyOtp);

// Password reset
router.post("/reset-password-otp", passwordResetLimiter, resetPasswordOtp);
router.post("/reset-password", passwordResetLimiter, resetPassword);

export default router;