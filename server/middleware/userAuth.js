import jwt from "jsonwebtoken";

export const userAuth = async (req, res, next) => {
    const token = await req.cookies.token;
    console.log("Token from cookie:", token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);

        if (!decoded) {
            return res.status(401).json({
                message: "Not authorized, login again"
            });
        }
        // console.log("decoded user id", decoded)

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default userAuth;