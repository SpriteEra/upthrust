import { useEffect, useState, useCallback } from "react";
import {
    Users, FileText, HelpCircle, Image, Link2,
    RefreshCw, TrendingUp, TrendingDown, CheckCircle, XCircle,
    Video, LayoutGrid,
} from "lucide-react";
import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area,
} from "recharts";
import StatCard from "./StatCard";
import WidgetCard from "./WidgetCard";
import { getDashboardStatsAPI } from "../../utils/dashboardapi";

// ─── Sub-components ───────────────────────────────────────────────────────────

const LoadingSkeleton = ({ className = "" }) => (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
);

const ChangeTag = ({ pct }) => {
    if (pct === null || pct === undefined) return null;
    const positive = pct >= 0;
    return (
        <span className={`inline-flex items-center gap-0.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${positive ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
            {positive ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
            {positive ? "+" : ""}{pct}%
        </span>
    );
};

// Formats bytes → "1.2 MB" / "340 KB" etc.
const fmtBytes = (bytes) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
};

const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

// ─── Recent Pages Table ───────────────────────────────────────────────────────

const RecentPagesWidget = ({ pages = [], loading }) => (
    <WidgetCard title="Recent Pages">
        <div className="overflow-x-auto">
            <table className="w-full text-[12.5px] border-collapse">
                <thead>
                    <tr className="border-b border-slate-100">
                        {["#", "Title", "URL", "Created", "Updated"].map((h) => (
                            <th key={h} className="text-left text-[11px] font-semibold text-slate-400 px-2.5 py-2 whitespace-nowrap">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading
                        ? Array.from({ length: 5 }).map((_, i) => (
                            <tr key={i} className="border-b border-slate-50">
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <td key={j} className="px-2.5 py-2.5"><LoadingSkeleton className="h-3 w-full" /></td>
                                ))}
                            </tr>
                        ))
                        : pages.map((p, idx) => (
                            <tr key={p._id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="px-2.5 py-2.5 text-slate-400 text-[11px]">{idx + 1}</td>
                                <td className="px-2.5 py-2.5 font-semibold text-slate-700 whitespace-nowrap max-w-[160px] truncate">{p.title || "—"}</td>
                                <td className="px-2.5 py-2.5 text-slate-500 whitespace-nowrap font-mono text-[11px]">/{p.url || "—"}</td>
                                <td className="px-2.5 py-2.5 text-slate-400 whitespace-nowrap">{fmtDate(p.createdAt)}</td>
                                <td className="px-2.5 py-2.5 text-slate-400 whitespace-nowrap">{fmtDate(p.updatedAt)}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {!loading && pages.length === 0 && (
                <p className="text-center text-slate-400 text-xs py-6">No pages yet.</p>
            )}
        </div>
    </WidgetCard>
);

// ─── Recent Users Widget ──────────────────────────────────────────────────────

const RecentUsersWidget = ({ users = [], loading }) => (
    <WidgetCard title="Recent Users">
        <div className="flex flex-col gap-2.5">
            {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <LoadingSkeleton className="w-8 h-8 rounded-full" />
                        <div className="flex-1 space-y-1.5">
                            <LoadingSkeleton className="h-2.5 w-32" />
                            <LoadingSkeleton className="h-2 w-48" />
                        </div>
                        <LoadingSkeleton className="h-4 w-14 rounded-full" />
                    </div>
                ))
                : users.map((u) => {
                    const initials = u.name?.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase() || "?";
                    const colors = ["bg-violet-500", "bg-emerald-400", "bg-blue-500", "bg-orange-400", "bg-pink-500"];
                    const color = colors[u.name?.charCodeAt(0) % colors.length] || "bg-slate-400";
                    return (
                        <div key={u._id} className="flex items-center gap-3 py-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${color}`}>
                                {initials}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[12.5px] font-semibold text-slate-700 truncate">{u.name}</p>
                                <p className="text-[10px] text-slate-400 truncate">{u.email}</p>
                            </div>
                            <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${u.isUserVerify ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-700"}`}>
                                {u.isUserVerify ? <CheckCircle size={9} /> : <XCircle size={9} />}
                                {u.isUserVerify ? "Verified" : "Pending"}
                            </span>
                        </div>
                    );
                })}
            {!loading && users.length === 0 && (
                <p className="text-center text-slate-400 text-xs py-4">No users yet.</p>
            )}
        </div>
    </WidgetCard>
);

// ─── Recent Media Widget ──────────────────────────────────────────────────────

const RecentMediaWidget = ({ media = [], loading }) => (
    <WidgetCard title="Recent Media Uploads">
        <div className="flex flex-col gap-2.5">
            {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <LoadingSkeleton className="w-8 h-8 rounded-lg" />
                        <div className="flex-1 space-y-1.5">
                            <LoadingSkeleton className="h-2.5 w-36" />
                            <LoadingSkeleton className="h-2 w-20" />
                        </div>
                        <LoadingSkeleton className="h-4 w-12 rounded-full" />
                    </div>
                ))
                : media.map((m) => (
                    <div key={m._id} className="flex items-center gap-3 py-0.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${m.type === "images" ? "bg-blue-100" : "bg-purple-100"}`}>
                            {m.type === "images"
                                ? <Image size={14} className="text-blue-500" />
                                : <Video size={14} className="text-purple-500" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[12px] font-semibold text-slate-700 truncate">{m.originalName || m.fileName}</p>
                            <p className="text-[10px] text-slate-400">{fmtBytes(m.size)} · {m.category}</p>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${m.type === "images" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                            {m.type === "images" ? "Image" : "Video"}
                        </span>
                    </div>
                ))}
            {!loading && media.length === 0 && (
                <p className="text-center text-slate-400 text-xs py-4">No media uploads yet.</p>
            )}
        </div>
    </WidgetCard>
);

// ─── Main DashboardPage ───────────────────────────────────────────────────────

const DashboardPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const fetchStats = useCallback(async (isRefresh = false) => {
        try {
            if (isRefresh) setRefreshing(true);
            else setLoading(true);
            setError(null);

            const res = await getDashboardStatsAPI();
            if (res.success) setData(res.data);
            else throw new Error(res.message || "Failed to load dashboard");
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => { fetchStats(); }, [fetchStats]);

    const s = data?.stats;
    const charts = data?.charts;
    const recent = data?.recent;

    // Stat cards config — derived from live data
    const statCards = [
        {
            title: "Total Users",
            value: loading ? "—" : s?.users.total.toLocaleString(),
            change: loading ? null : `${s?.users.changePercent >= 0 ? "+" : ""}${s?.users.changePercent}%`,
            label: "vs last month",
            icon: Users,
            gradient: "bg-gradient-to-br from-violet-500 to-indigo-500",
            positive: (s?.users.changePercent ?? 0) >= 0,
        },
        {
            title: "Total Pages",
            value: loading ? "—" : s?.pages.total.toLocaleString(),
            change: loading ? null : `${s?.pages.changePercent >= 0 ? "+" : ""}${s?.pages.changePercent}%`,
            label: "vs last month",
            icon: FileText,
            gradient: "bg-gradient-to-br from-pink-500 to-orange-400",
            positive: (s?.pages.changePercent ?? 0) >= 0,
        },
        {
            title: "Media Files",
            value: loading ? "—" : s?.media.total.toLocaleString(),
            change: loading ? null : `${s?.media.changePercent >= 0 ? "+" : ""}${s?.media.changePercent}%`,
            label: "vs last month",
            icon: Image,
            gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
            positive: (s?.media.changePercent ?? 0) >= 0,
        },
        {
            title: "FAQ Items",
            value: loading ? "—" : s?.faqs.totalItems.toLocaleString(),
            change: loading ? null : `${s?.faqs.changePercent >= 0 ? "+" : ""}${s?.faqs.changePercent}%`,
            label: "vs last month",
            icon: HelpCircle,
            gradient: "bg-gradient-to-br from-emerald-400 to-teal-500",
            positive: (s?.faqs.changePercent ?? 0) >= 0,
        },
    ];

    // Pie chart for media types
    const mediaPieData = s
        ? [
            { name: "Images", value: s.media.images, color: "#3b82f6" },
            { name: "Videos", value: s.media.videos, color: "#8b5cf6" },
        ]
        : [{ name: "Images", value: 1, color: "#e2e8f0" }];

    // Pie chart for user verification
    const userPieData = s
        ? [
            { name: "Verified", value: s.users.verified, color: "#10b981" },
            { name: "Unverified", value: s.users.unverified, color: "#e2e8f0" },
        ]
        : [{ name: "Verified", value: 1, color: "#e2e8f0" }];

    return (
        <div className="p-5 lg:p-6 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-lg font-bold text-slate-800">Welcome!</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Upthrust Admin › Dashboard</p>
                </div>
                <button
                    onClick={() => fetchStats(true)}
                    disabled={refreshing}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:shadow-sm transition-all disabled:opacity-50"
                >
                    <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
                    Refresh
                </button>
            </div>

            {/* Error banner */}
            {error && (
                <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 flex items-center gap-2">
                    <XCircle size={15} />
                    {error}
                    <button onClick={() => fetchStats()} className="ml-auto text-red-500 underline text-xs">Retry</button>
                </div>
            )}

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
                {statCards.map((card) => (
                    <StatCard
                        key={card.title}
                        title={card.title}
                        value={card.value}
                        change={card.change}
                        label={card.label}
                        icon={card.icon}
                        gradient={card.gradient}
                    />
                ))}
            </div>

            {/* Charts Row 1: Users over 7 days + Pages per month */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4 mb-4">

                {/* Users by day — area chart */}
                <WidgetCard title="New Users (Last 7 Days)">
                    {loading ? (
                        <LoadingSkeleton className="h-[200px] w-full" />
                    ) : (
                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart data={charts?.usersByDay || []}>
                                <defs>
                                    <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                                <YAxis allowDecimals={false} tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e2e8f0" }} />
                                <Area type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#userGrad)" name="New Users" dot={{ fill: "#8b5cf6", r: 3 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                    <div className="grid grid-cols-3 gap-3 mt-4">
                        {loading
                            ? Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="text-center space-y-1">
                                    <LoadingSkeleton className="h-2 w-16 mx-auto" />
                                    <LoadingSkeleton className="h-4 w-10 mx-auto" />
                                </div>
                            ))
                            : [
                                { label: "Total Users", val: s?.users.total?.toLocaleString() ?? "—" },
                                { label: "Verified", val: s?.users.verified?.toLocaleString() ?? "—" },
                                { label: "This Month", val: `+${s?.users.thisMonth ?? 0}` },
                            ].map((item) => (
                                <div key={item.label} className="text-center">
                                    <p className="text-[10px] text-slate-400 mb-0.5">{item.label}</p>
                                    <p className="text-sm font-bold text-slate-800">{item.val}</p>
                                </div>
                            ))}
                    </div>
                </WidgetCard>

                {/* Right column: pages bar chart + user verification donut */}
                <div className="flex flex-col gap-4">
                    <WidgetCard title="Pages by Month">
                        {loading ? (
                            <LoadingSkeleton className="h-[130px] w-full" />
                        ) : (
                            <ResponsiveContainer width="100%" height={130}>
                                <BarChart data={charts?.pagesByMonth || []} barSize={10}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                    <XAxis dataKey="month" tick={{ fontSize: 8, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                                    <YAxis allowDecimals={false} hide />
                                    <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e2e8f0" }} />
                                    <Bar dataKey="pages" fill="#20d9b0" radius={[3, 3, 0, 0]} name="Pages" />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {loading
                                ? Array.from({ length: 2 }).map((_, i) => (
                                    <div key={i} className="text-center space-y-1">
                                        <LoadingSkeleton className="h-2 w-12 mx-auto" />
                                        <LoadingSkeleton className="h-4 w-8 mx-auto" />
                                    </div>
                                ))
                                : [
                                    { label: "Total Pages", val: s?.pages.total ?? "—" },
                                    { label: "This Month", val: `+${s?.pages.thisMonth ?? 0}` },
                                ].map((item) => (
                                    <div key={item.label} className="text-center">
                                        <p className="text-[9px] text-slate-400 mb-0.5">{item.label}</p>
                                        <p className="text-xs font-bold text-slate-800">{item.val}</p>
                                    </div>
                                ))}
                        </div>
                    </WidgetCard>

                    {/* User verification donut */}
                    <div className="bg-white rounded-xl border border-slate-200 px-5 py-4 flex items-center gap-4">
                        <div>
                            {loading ? (
                                <div className="space-y-1">
                                    <LoadingSkeleton className="h-7 w-16" />
                                    <LoadingSkeleton className="h-2 w-24 mt-1" />
                                </div>
                            ) : (
                                <>
                                    <p className="text-2xl font-extrabold text-slate-800 mb-0.5">
                                        {s?.users.total > 0 ? Math.round((s.users.verified / s.users.total) * 100) : 0}%
                                    </p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Users</p>
                                </>
                            )}
                        </div>
                        <div className="ml-auto">
                            <PieChart width={60} height={60}>
                                <Pie data={userPieData} dataKey="value" cx={28} cy={28} innerRadius={16} outerRadius={28} startAngle={90} endAngle={-270} strokeWidth={0}>
                                    {userPieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Row 2: Media uploads + Media type split */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-4 mb-4">

                {/* Media uploads by day */}
                <WidgetCard title="Media Uploads (Last 7 Days)">
                    {loading ? (
                        <LoadingSkeleton className="h-[200px] w-full" />
                    ) : (
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={charts?.mediaByDay || []} barSize={9} barGap={2}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                                <YAxis allowDecimals={false} tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e2e8f0" }} />
                                <Legend iconType="square" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                                <Bar dataKey="uploads" fill="#3b82f6" radius={[3, 3, 0, 0]} name="Uploads" />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {loading
                            ? Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="text-center space-y-1">
                                    <LoadingSkeleton className="h-2 w-full" />
                                    <LoadingSkeleton className="h-4 w-10 mx-auto" />
                                </div>
                            ))
                            : [
                                { label: "Total Media", val: s?.media.total?.toLocaleString() ?? "—" },
                                { label: "Images", val: s?.media.images?.toLocaleString() ?? "—" },
                                { label: "Videos", val: s?.media.videos?.toLocaleString() ?? "—" },
                                { label: "This Month", val: `+${s?.media.thisMonth ?? 0}` },
                            ].map((item) => (
                                <div key={item.label} className="text-center">
                                    <p className="text-[10px] text-slate-400 mb-0.5">{item.label}</p>
                                    <p className="text-sm font-bold text-slate-800">{item.val}</p>
                                </div>
                            ))}
                    </div>
                </WidgetCard>

                {/* Right: media type donut + form URLs */}
                <div className="flex flex-col gap-4">
                    <WidgetCard title="Media Breakdown">
                        <div className="flex items-center justify-center gap-6 py-2">
                            <PieChart width={100} height={100}>
                                <Pie data={mediaPieData} dataKey="value" cx={48} cy={48} innerRadius={28} outerRadius={46} strokeWidth={0}>
                                    {mediaPieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                                </Pie>
                            </PieChart>
                            <div className="flex flex-col gap-2">
                                {mediaPieData.map((entry) => (
                                    <div key={entry.name} className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: entry.color }} />
                                        <span className="text-[11px] text-slate-600">{entry.name}</span>
                                        <span className="text-[11px] font-bold text-slate-800 ml-auto">{entry.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </WidgetCard>

                    {/* Form URLs mini card */}
                    <div className="bg-white rounded-xl border border-slate-200 px-5 py-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Link2 size={14} className="text-slate-400" />
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Form URLs</p>
                        </div>
                        {loading ? (
                            <div className="space-y-2">
                                <LoadingSkeleton className="h-3 w-24" />
                                <LoadingSkeleton className="h-2 w-32" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: "Total", val: s?.formUrls.total ?? 0 },
                                    { label: "Active", val: s?.formUrls.active ?? 0 },
                                    { label: "Inactive", val: s?.formUrls.inactive ?? 0 },
                                ].map((item) => (
                                    <div key={item.label} className="text-center">
                                        <p className="text-[9px] text-slate-400 mb-0.5">{item.label}</p>
                                        <p className="text-sm font-bold text-slate-800">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Row: Recent Pages table + Recent Users + Recent Media */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4 mb-4">
                <RecentPagesWidget pages={recent?.pages || []} loading={loading} />
                <RecentUsersWidget users={recent?.users || []} loading={loading} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4">
                <RecentMediaWidget media={recent?.media || []} loading={loading} />

                {/* Summary card */}
                <WidgetCard title="Quick Summary">
                    <div className="flex flex-col gap-3">
                        {loading
                            ? Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <LoadingSkeleton className="w-8 h-8 rounded-lg" />
                                    <div className="flex-1 space-y-1.5">
                                        <LoadingSkeleton className="h-2.5 w-24" />
                                        <LoadingSkeleton className="h-2 w-16" />
                                    </div>
                                    <LoadingSkeleton className="h-4 w-10 rounded-full" />
                                </div>
                            ))
                            : [
                                { label: "Users", sub: `${s?.users.verified} verified`, val: s?.users.total, color: "bg-violet-100", icon: Users, iconColor: "text-violet-500", pct: s?.users.changePercent },
                                { label: "Pages", sub: `${s?.pages.thisMonth} this month`, val: s?.pages.total, color: "bg-pink-100", icon: FileText, iconColor: "text-pink-500", pct: s?.pages.changePercent },
                                { label: "Media", sub: `${s?.media.images} img · ${s?.media.videos} vid`, val: s?.media.total, color: "bg-blue-100", icon: LayoutGrid, iconColor: "text-blue-500", pct: s?.media.changePercent },
                                { label: "FAQ Items", sub: `${s?.faqs.totalDocs} doc(s)`, val: s?.faqs.totalItems, color: "bg-emerald-100", icon: HelpCircle, iconColor: "text-emerald-500", pct: s?.faqs.changePercent },
                                { label: "Form URLs", sub: `${s?.formUrls.active} active`, val: s?.formUrls.total, color: "bg-orange-100", icon: Link2, iconColor: "text-orange-500", pct: null },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                            <Icon size={14} className={item.iconColor} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[12px] font-semibold text-slate-700">{item.label}</p>
                                            <p className="text-[10px] text-slate-400">{item.sub}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-0.5">
                                            <span className="text-sm font-bold text-slate-800">{item.val?.toLocaleString()}</span>
                                            <ChangeTag pct={item.pct} />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </WidgetCard>
            </div>
        </div>
    );
};

export default DashboardPage;