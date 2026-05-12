import jwt from "jsonwebtoken";

/**
 * authFlex — accepts JWT from either:
 *   1. httpOnly cookie  (set by login: res.cookie("token", ...))
 *   2. Authorization: Bearer <token>  header (sent by axiosInstance)
 *
 * Bunny routes must be protected because prepare endpoints return API keys.
 */
export const authFlex = (req, res, next) => {
    // 1. Try cookie first
    let token = req.cookies?.token;

    // 2. Fallback to Authorization header
    if (!token) {
        const authHeader = req.headers.authorization || "";
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.slice(7);
        }
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized – please log in." });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

export default authFlex;
