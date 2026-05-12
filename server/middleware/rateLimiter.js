import rateLimit from "express-rate-limit";

// ─── Helper: standard response when limit is hit ─────────────────────────────
const rateLimitHandler = (req, res) => {
    return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again later.",
        retryAfter: Math.ceil(req.rateLimit.resetTime / 1000 - Date.now() / 1000),
    });
};

// ─── Global API limiter ───────────────────────────────────────────────────────
// 200 requests per IP per 15 minutes for all routes
export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
    standardHeaders: true,    // sends RateLimit-* headers
    legacyHeaders: false,
    handler: rateLimitHandler,
    keyGenerator: (req) => req.ip,
});

// ─── Strict limiter for login ─────────────────────────────────────────────────
// 10 attempts per IP per 15 minutes
export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        return res.status(429).json({
            success: false,
            message: "Too many login attempts. Please wait 15 minutes before trying again.",
        });
    },
    keyGenerator: (req) => req.ip,
});

// ─── OTP send limiter ─────────────────────────────────────────────────────────
// 5 OTP sends per IP per hour (prevents OTP spam / email abuse)
export const otpLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        return res.status(429).json({
            success: false,
            message: "Too many OTP requests. Please wait 1 hour before requesting again.",
        });
    },
    keyGenerator: (req) => req.ip,
});

// ─── Password reset limiter ───────────────────────────────────────────────────
// 5 reset attempts per IP per hour
export const passwordResetLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        return res.status(429).json({
            success: false,
            message: "Too many password reset attempts. Please wait 1 hour.",
        });
    },
    keyGenerator: (req) => req.ip,
});
