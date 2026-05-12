// import ActivityLog from "../models/ActivityLog.js";
// import User from "../models/user.js";

// /**
//  * Maps method + route pattern → human-readable action label.
//  */
// const buildActionLabel = (method, route) => {
//     const r = route.toLowerCase();

//     if (r.includes("/auth/login")) return "User Login";
//     if (r.includes("/auth/logout")) return "User Logout";
//     if (r.includes("/auth/send-otp")) return "OTP Sent";
//     if (r.includes("/auth/verify-otp")) return "OTP Verified";
//     if (r.includes("/auth/reset-password-otp")) return "Password Reset OTP Sent";
//     if (r.includes("/auth/reset-password")) return "Password Reset";

//     if (r.includes("/pages")) {
//         if (method === "POST") return "Page Created";
//         if (method === "PUT" || method === "PATCH") return "Page Updated";
//         if (method === "DELETE") return "Page Deleted";
//         return "Pages Viewed";
//     }
//     if (r.includes("/faqs")) {
//         if (method === "POST") return "FAQ Created";
//         if (method === "PUT" || method === "PATCH") return "FAQ Updated";
//         if (method === "DELETE") return "FAQ Deleted";
//         return "FAQs Viewed";
//     }
//     if (r.includes("/media")) {
//         if (method === "POST") return "Media Uploaded";
//         if (method === "DELETE") return "Media Deleted";
//         return "Media Viewed";
//     }
//     if (r.includes("/form-urls")) {
//         if (method === "POST") return "CTA URL Created";
//         if (method === "PUT" || method === "PATCH") return "CTA URL Updated";
//         if (method === "DELETE") return "CTA URL Deleted";
//         return "CTA URLs Viewed";
//     }
//     if (r.includes("/dashboard")) return "Dashboard Viewed";

//     // Fallback
//     return `${method} ${route}`;
// };

// /**
//  * activityLogger — attach AFTER userAuth/authFlex so req.user is populated.
//  *
//  * Usage:
//  *   router.get("/", authFlex, activityLogger, getDashboardStats);
//  *
//  * Or apply globally after auth middleware in server.js for catch-all logging.
//  */
// export const activityLogger = async (req, res, next) => {
//     // Capture the original end so we can read statusCode after response
//     const originalEnd = res.end.bind(res);

//     res.end = async function (...args) {
//         // Call the real end first
//         originalEnd(...args);

//         try {
//             const userId = req.user?.id || null;
//             let userName = "Anonymous";
//             let userEmail = null;

//             if (userId) {
//                 const user = await User.findById(userId).select("name email").lean();
//                 if (user) {
//                     userName = user.name;
//                     userEmail = user.email;
//                 }
//             }

//             const route = req.originalUrl || req.url;
//             const method = req.method;
//             const action = buildActionLabel(method, route);

//             await ActivityLog.create({
//                 userId,
//                 userName,
//                 userEmail,
//                 action,
//                 method,
//                 route,
//                 statusCode: res.statusCode,
//                 ipAddress:
//                     req.headers["x-forwarded-for"]?.split(",")[0] ||
//                     req.socket?.remoteAddress ||
//                     null,
//                 userAgent: req.headers["user-agent"] || null,
//                 meta: {},
//             });
//         } catch (err) {
//             // Never crash the request due to logging failure
//             console.error("[ActivityLogger] Failed to save log:", err.message);
//         }
//     };

//     next();
// };

// export default activityLogger;


import ActivityLog from "../models/ActivityLog.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

// Resolve user from either cookie or Authorization header
const resolveUser = (req) => {
    try {
        let token = req.cookies?.token;
        if (!token) {
            const auth = req.headers.authorization || "";
            if (auth.startsWith("Bearer ")) token = auth.slice(7);
        }
        if (!token) return null;
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return null;
    }
};

const buildActionLabel = (method, route) => {
    const r = route.toLowerCase().split("?")[0]; // strip query params

    // Auth
    if (r.includes("/auth/login")) return "User Login";
    if (r.includes("/auth/logout")) return "User Logout";
    if (r.includes("/auth/send-otp")) return "OTP Sent";
    if (r.includes("/auth/verify-otp")) return "OTP Verified";
    if (r.includes("/auth/reset-password-otp")) return "Password Reset OTP Sent";
    if (r.includes("/auth/reset-password")) return "Password Reset";

    // Pages
    if (r.includes("/pages")) {
        if (method === "POST") return "Page Created";
        if (method === "PUT" || method === "PATCH") return "Page Updated";
        if (method === "DELETE") return "Page Deleted";
        return "Pages Viewed";
    }

    // FAQs
    if (r.includes("/faqs")) {
        if (method === "POST") return "FAQ Created";
        if (method === "PUT" || method === "PATCH") return "FAQ Updated";
        if (method === "DELETE") return "FAQ Deleted";
        return "FAQs Viewed";
    }

    // Media
    if (r.includes("/media")) {
        if (method === "POST") return "Media Uploaded";
        if (method === "DELETE") return "Media Deleted";
        if (method === "PUT" || method === "PATCH") return "Media Updated";
        return "Media Viewed";
    }

    // CTA / Form URLs
    if (r.includes("/form-urls")) {
        if (method === "POST") return "CTA URL Created";
        if (method === "PUT" || method === "PATCH") return "CTA URL Updated";
        if (method === "DELETE") return "CTA URL Deleted";
        return "CTA URLs Viewed";
    }

    // Dashboard
    if (r.includes("/dashboard")) return "Dashboard Viewed";

    // Activity (skip logging the logger itself)
    if (r.includes("/activity")) return null;

    return `${method} ${route}`;
};

export const activityLogger = async (req, res, next) => {
    const originalEnd = res.end.bind(res);

    res.end = async function (...args) {
        originalEnd(...args);

        try {
            const route = req.originalUrl || req.url;
            const method = req.method;
            const action = buildActionLabel(method, route);

            // Skip logging activity routes and health check
            if (!action || route === "/") return;

            // Resolve user from token (works even without prior auth middleware)
            const decoded = req.user || resolveUser(req);
            let userName = "Anonymous";
            let userEmail = null;
            let userId = null;

            if (decoded?.id) {
                userId = decoded.id;
                const user = await User.findById(userId).select("name email").lean();
                if (user) {
                    userName = user.name;
                    userEmail = user.email;
                }
            }

            await ActivityLog.create({
                userId,
                userName,
                userEmail,
                action,
                method,
                route,
                statusCode: res.statusCode,
                ipAddress:
                    req.headers["x-forwarded-for"]?.split(",")[0] ||
                    req.socket?.remoteAddress ||
                    null,
                userAgent: req.headers["user-agent"] || null,
            });
        } catch (err) {
            console.error("[ActivityLogger] Failed to save log:", err.message);
        }
    };

    next();
};

export default activityLogger;