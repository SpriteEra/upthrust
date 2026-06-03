import { useState, useEffect, useCallback } from "react";
import {
    Activity, Search, RefreshCw, Trash2, ChevronLeft,
    ChevronRight, Filter, User, Globe, Clock, ArrowUpDown,
    AlertCircle,
} from "lucide-react";
import { fetchActivityLogs, fetchActivityStats, clearAllActivityLogs } from "../utils/activityapi.js";
import { toast } from "react-toastify";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const METHOD_COLORS = {
    GET: "bg-blue-100 text-blue-700",
    POST: "bg-green-100 text-green-700",
    PUT: "bg-amber-100 text-amber-700",
    PATCH: "bg-orange-100 text-orange-700",
    DELETE: "bg-red-100 text-red-700",
};

const STATUS_COLOR = (code) => {
    if (!code) return "text-slate-400";
    if (code < 300) return "text-emerald-600";
    if (code < 400) return "text-blue-600";
    if (code < 500) return "text-amber-600";
    return "text-red-600";
};

const formatDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
        day: "2-digit", month: "short", year: "numeric",
        hour: "2-digit", minute: "2-digit",
    });
};

const METHODS = ["", "GET", "POST", "PUT", "PATCH", "DELETE"];

// ─── Stat Card ────────────────────────────────────────────────────────────────

const StatCard = ({ label, value, color = "text-slate-800" }) => (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-1">
        <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{label}</p>
        <p className={`text-2xl font-bold ${color}`}>{value ?? "-"}</p>
    </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ActivityLogPage() {
    const [logs, setLogs] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);
    const [statsLoading, setStatsLoading] = useState(false);
    const [clearing, setClearing] = useState(false);

    const [search, setSearch] = useState("");
    const [method, setMethod] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const LIMIT = 15;

    // ── Fetch logs ────────────────────────────────────────────────────────────
    const loadLogs = useCallback(async () => {
        setLoading(true);
        try {
            const params = { page, limit: LIMIT };
            if (search) params.search = search;
            if (method) params.method = method;
            const data = await fetchActivityLogs(params);
            setLogs(data.logs || []);
            setTotalPages(data.totalPages || 1);
            setTotal(data.total || 0);
        } catch (err) {
            toast.error(err?.message || "Failed to load activity logs");
        } finally {
            setLoading(false);
        }
    }, [page, search, method]);

    // ── Fetch stats ───────────────────────────────────────────────────────────
    const loadStats = useCallback(async () => {
        setStatsLoading(true);
        try {
            const data = await fetchActivityStats();
            setStats(data);
        } catch {
            // non-critical
        } finally {
            setStatsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadLogs();
    }, [loadLogs]);

    useEffect(() => {
        loadStats();
    }, [loadStats]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setPage(1);
    }, [search, method]);

    // ── Clear logs ────────────────────────────────────────────────────────────
    const handleClear = async () => {
        if (!window.confirm("Are you sure you want to clear ALL activity logs? This cannot be undone.")) return;
        setClearing(true);
        try {
            const data = await clearAllActivityLogs();
            toast.success(data.message || "Logs cleared");
            setLogs([]);
            setTotal(0);
            setStats(null);
            loadStats();
        } catch (err) {
            toast.error(err?.message || "Failed to clear logs");
        } finally {
            setClearing(false);
        }
    };

    // ─────────────────────────────────────────────────────────────────────────
    return (
        <div className="p-4 md:p-6 space-y-6 min-h-screen bg-slate-50">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Activity size={18} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">Activity Log</h1>
                        <p className="text-xs text-slate-500">{total.toLocaleString()} total events recorded</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => { loadLogs(); loadStats(); }}
                        disabled={loading}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-white transition bg-slate-50 disabled:opacity-50"
                    >
                        <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                        Refresh
                    </button>
                    <button
                        onClick={handleClear}
                        disabled={clearing || loading}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600 hover:bg-red-100 transition disabled:opacity-50"
                    >
                        <Trash2 size={14} />
                        Clear All
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            {!statsLoading && stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatCard label="Events (30d)" value={stats.recentCount?.toLocaleString()} color="text-emerald-600" />
                    {stats.byMethod?.slice(0, 3).map((m) => (
                        <StatCard key={m._id} label={`${m._id} requests`} value={m.count?.toLocaleString()} />
                    ))}
                </div>
            )}

            {/* Top actions */}
            {!statsLoading && stats?.byAction?.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Top Actions (last 30 days)</p>
                    <div className="flex flex-wrap gap-2">
                        {stats.byAction.map((a) => (
                            <span key={a._id} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-xs text-slate-700 font-medium">
                                {a._id}
                                <span className="bg-emerald-100 text-emerald-700 rounded-full px-1.5 font-bold">{a.count}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search action, route, user..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                    />
                </div>
                <div className="relative">
                    <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="pl-8 pr-8 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 appearance-none"
                    >
                        {METHODS.map((m) => (
                            <option key={m} value={m}>{m || "All Methods"}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="flex items-center justify-center py-20 text-slate-400">
                        <RefreshCw size={22} className="animate-spin mr-2" />
                        Loading logs...
                    </div>
                ) : logs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-2">
                        <AlertCircle size={32} className="text-slate-300" />
                        <p className="text-sm">No activity logs found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-100 text-left">
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">
                                        <span className="flex items-center gap-1"><Clock size={12} /> Time</span>
                                    </th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">
                                        <span className="flex items-center gap-1"><User size={12} /> User</span>
                                    </th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Action</th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                        <span className="flex items-center gap-1"><ArrowUpDown size={12} /> Method</span>
                                    </th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Route</th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide whitespace-nowrap">
                                        <span className="flex items-center gap-1"><Globe size={12} /> IP</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {logs.map((log) => (
                                    <tr key={log._id} className="hover:bg-slate-50/60 transition-colors">
                                        <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">
                                            {formatDate(log.createdAt)}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="font-medium text-slate-700 text-xs">{log.userName || "-"}</div>
                                            {log.userEmail && (
                                                <div className="text-[11px] text-slate-400">{log.userEmail}</div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-slate-700 font-medium text-xs">{log.action}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${METHOD_COLORS[log.method] || "bg-slate-100 text-slate-600"}`}>
                                                {log.method}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-xs text-slate-400 font-mono max-w-[200px] truncate" title={log.route}>
                                            {log.route}
                                        </td>
                                        <td className={`px-4 py-3 text-xs font-bold ${STATUS_COLOR(log.statusCode)}`}>
                                            {log.statusCode || "-"}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-slate-400 font-mono whitespace-nowrap">
                                            {log.ipAddress || "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500">
                            Page {page} of {totalPages}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="flex items-center gap-1 px-3 py-1.5 rounded border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                            >
                                <ChevronLeft size={12} /> Prev
                            </button>
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="flex items-center gap-1 px-3 py-1.5 rounded border border-slate-200 text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                            >
                                Next <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
