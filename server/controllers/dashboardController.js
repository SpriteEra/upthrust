import User from "../models/user.js";
import Page from "../models/page.js";
import FAQ from "../models/faq.js";
import { Media } from "../models/Media.js";
import FormUrl from "../models/formurl.js";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const startOfWeek = (d) => {
    const day = d.getDay(); // 0=Sun
    const diff = d.getDate() - day;
    return new Date(d.getFullYear(), d.getMonth(), diff);
};

/**
 * GET /api/dashboard
 * Returns aggregated counts and time-series data built from real MongoDB data.
 */
export const getDashboardStats = async (req, res) => {
    try {
        const now = new Date();

        // ── Time boundaries ────────────────────────────────────────────────
        const thisMonthStart = startOfMonth(now);
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const thisWeekStart = startOfWeek(now);

        // ── Parallel queries ───────────────────────────────────────────────
        const [
            totalUsers,
            usersThisMonth,
            usersLastMonth,
            verifiedUsers,

            totalPages,
            pagesThisMonth,
            pagesLastMonth,

            totalFAQDocs,
            faqsThisMonth,
            faqsLastMonth,

            totalMedia,
            mediaThisMonth,
            mediaLastMonth,
            imageMedia,
            videoMedia,

            totalFormUrls,
            activeFormUrls,

            // Time-series: users created per day for last 7 days
            recentUsers,
            // Media created per day for last 7 days
            recentMedia,
            // Pages created per month for last 7 months
            recentPages,
        ] = await Promise.all([
            User.countDocuments(),
            User.countDocuments({ createdAt: { $gte: thisMonthStart } }),
            User.countDocuments({ createdAt: { $gte: lastMonthStart, $lt: thisMonthStart } }),
            User.countDocuments({ isUserVerify: true }),

            Page.countDocuments(),
            Page.countDocuments({ createdAt: { $gte: thisMonthStart } }),
            Page.countDocuments({ createdAt: { $gte: lastMonthStart, $lt: thisMonthStart } }),

            FAQ.countDocuments(),
            FAQ.countDocuments({ createdAt: { $gte: thisMonthStart } }),
            FAQ.countDocuments({ createdAt: { $gte: lastMonthStart, $lt: thisMonthStart } }),

            Media.countDocuments(),
            Media.countDocuments({ createdAt: { $gte: thisMonthStart } }),
            Media.countDocuments({ createdAt: { $gte: lastMonthStart, $lt: thisMonthStart } }),
            Media.countDocuments({ type: "images" }),
            Media.countDocuments({ type: "videos" }),

            FormUrl.countDocuments(),
            FormUrl.countDocuments({ isActive: true }),

            // Users joined in last 7 days
            User.aggregate([
                { $match: { createdAt: { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) } } },
                {
                    $group: {
                        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        count: { $sum: 1 },
                    },
                },
                { $sort: { _id: 1 } },
            ]),

            // Media uploads in last 7 days grouped by day
            Media.aggregate([
                { $match: { createdAt: { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) } } },
                {
                    $group: {
                        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        count: { $sum: 1 },
                        totalSize: { $sum: "$size" },
                    },
                },
                { $sort: { _id: 1 } },
            ]),

            // Pages created per month for last 7 months
            Page.aggregate([
                { $match: { createdAt: { $gte: new Date(now.getFullYear(), now.getMonth() - 6, 1) } } },
                {
                    $group: {
                        _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
                        count: { $sum: 1 },
                    },
                },
                { $sort: { _id: 1 } },
            ]),
        ]);

        // ── Most recent pages (for the "Projects" widget) ──────────────────
        const recentPagesList = await Page.find()
            .sort({ createdAt: -1 })
            .limit(8)
            .select("title url createdAt updatedAt")
            .lean();

        // ── Most recent media ──────────────────────────────────────────────
        const recentMediaList = await Media.find()
            .sort({ createdAt: -1 })
            .limit(6)
            .select("type originalName cdnUrl size category createdAt")
            .lean();

        // ── Most recent users ──────────────────────────────────────────────
        const recentUsersList = await User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email isUserVerify createdAt")
            .lean();

        // ── FAQ stats ──────────────────────────────────────────────────────
        const faqItemCounts = await FAQ.aggregate([
            { $project: { count: { $size: "$faqs" } } },
            { $group: { _id: null, total: { $sum: "$count" } } },
        ]);
        const totalFAQItems = faqItemCounts[0]?.total ?? 0;

        // ── Percentage change helper ───────────────────────────────────────
        const pct = (curr, prev) => {
            if (prev === 0) return curr > 0 ? 100 : 0;
            return Math.round(((curr - prev) / prev) * 100);
        };

        // ── Build 7-day labels ─────────────────────────────────────────────
        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const d = new Date(now);
            d.setDate(d.getDate() - (6 - i));
            return d.toISOString().slice(0, 10);
        });

        const usersByDay = last7Days.map((date) => {
            const found = recentUsers.find((r) => r._id === date);
            return {
                day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
                date,
                users: found?.count ?? 0,
            };
        });

        const mediaByDay = last7Days.map((date) => {
            const found = recentMedia.find((r) => r._id === date);
            return {
                day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
                date,
                uploads: found?.count ?? 0,
                size: found?.totalSize ?? 0,
            };
        });

        // ── Build 7-month labels ───────────────────────────────────────────
        const last7Months = Array.from({ length: 7 }, (_, i) => {
            const d = new Date(now.getFullYear(), now.getMonth() - (6 - i), 1);
            return d.toISOString().slice(0, 7); // "YYYY-MM"
        });

        const pagesByMonth = last7Months.map((month) => {
            const found = recentPages.find((r) => r._id === month);
            return {
                month: new Date(month + "-01").toLocaleDateString("en-US", { month: "short", year: "2-digit" }),
                pages: found?.count ?? 0,
            };
        });

        // ── Media type split for pie ───────────────────────────────────────
        const imagePct = totalMedia > 0 ? Math.round((imageMedia / totalMedia) * 100) : 0;

        // ── Response ───────────────────────────────────────────────────────
        res.status(200).json({
            success: true,
            data: {
                stats: {
                    users: {
                        total: totalUsers,
                        thisMonth: usersThisMonth,
                        changePercent: pct(usersThisMonth, usersLastMonth),
                        verified: verifiedUsers,
                        unverified: totalUsers - verifiedUsers,
                    },
                    pages: {
                        total: totalPages,
                        thisMonth: pagesThisMonth,
                        changePercent: pct(pagesThisMonth, pagesLastMonth),
                    },
                    faqs: {
                        totalDocs: totalFAQDocs,
                        totalItems: totalFAQItems,
                        thisMonth: faqsThisMonth,
                        changePercent: pct(faqsThisMonth, faqsLastMonth),
                    },
                    media: {
                        total: totalMedia,
                        images: imageMedia,
                        videos: videoMedia,
                        thisMonth: mediaThisMonth,
                        changePercent: pct(mediaThisMonth, mediaLastMonth),
                        imagePct,
                    },
                    formUrls: {
                        total: totalFormUrls,
                        active: activeFormUrls,
                        inactive: totalFormUrls - activeFormUrls,
                    },
                },
                charts: {
                    usersByDay,      // [{day, date, users}] × 7
                    mediaByDay,      // [{day, date, uploads, size}] × 7
                    pagesByMonth,    // [{month, pages}] × 7
                },
                recent: {
                    pages: recentPagesList,
                    media: recentMediaList,
                    users: recentUsersList,
                },
            },
        });
    } catch (error) {
        console.error("[dashboard]", error);
        res.status(500).json({ success: false, message: "Failed to load dashboard stats", error: error.message });
    }
};