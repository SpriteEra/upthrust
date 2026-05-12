import ActivityLog from "../models/ActivityLog.js";

/**
 * GET /api/activity
 * Query params:
 *   page      (default 1)
 *   limit     (default 20, max 100)
 *   method    (GET | POST | PUT | PATCH | DELETE)
 *   userId    (filter by user)
 *   search    (search action / route / userName / userEmail)
 *   from      (ISO date string)
 *   to        (ISO date string)
 */
export const getActivityLogs = async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
        const skip = (page - 1) * limit;

        const filter = {};

        if (req.query.method) filter.method = req.query.method.toUpperCase();
        if (req.query.userId) filter.userId = req.query.userId;

        if (req.query.from || req.query.to) {
            filter.createdAt = {};
            if (req.query.from) filter.createdAt.$gte = new Date(req.query.from);
            if (req.query.to) filter.createdAt.$lte = new Date(req.query.to);
        }

        if (req.query.search) {
            const regex = { $regex: req.query.search, $options: "i" };
            filter.$or = [
                { action: regex },
                { route: regex },
                { userName: regex },
                { userEmail: regex },
            ];
        }

        const [logs, total] = await Promise.all([
            ActivityLog.find(filter)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            ActivityLog.countDocuments(filter),
        ]);

        return res.status(200).json({
            success: true,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            logs,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch activity logs",
            error: error.message,
        });
    }
};

/**
 * GET /api/activity/stats
 * Returns counts grouped by action and method for the last 30 days.
 */
export const getActivityStats = async (req, res) => {
    try {
        const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        const [byMethod, byAction, recentCount] = await Promise.all([
            ActivityLog.aggregate([
                { $match: { createdAt: { $gte: since } } },
                { $group: { _id: "$method", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),
            ActivityLog.aggregate([
                { $match: { createdAt: { $gte: since } } },
                { $group: { _id: "$action", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
                { $limit: 10 },
            ]),
            ActivityLog.countDocuments({ createdAt: { $gte: since } }),
        ]);

        return res.status(200).json({
            success: true,
            recentCount,
            byMethod,
            byAction,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch activity stats",
            error: error.message,
        });
    }
};

/**
 * DELETE /api/activity
 * Clears all activity logs (admin only).
 */
export const clearActivityLogs = async (req, res) => {
    try {
        const result = await ActivityLog.deleteMany({});
        return res.status(200).json({
            success: true,
            message: `Cleared ${result.deletedCount} activity log(s)`,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to clear activity logs",
            error: error.message,
        });
    }
};
