import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    getAllFormUrlsAPI,
    createFormUrlAPI,
    updateFormUrlAPI,
    patchFormUrlAPI,
    toggleFormUrlAPI,
    deleteFormUrlAPI,
    bulkDeleteFormUrlsAPI,
} from "../utils/formurlapi";
import {
    Plus, X, Save, Loader2, Pencil, Trash2,
    Link, AlertCircle, Search, ToggleLeft,
    ToggleRight, Eye, Copy, CheckCheck,
    ExternalLink, Filter, ShieldCheck,
    ShieldOff, Tag, FileText
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════════════════
const Modal = ({ title, onClose, onSave, saving, children }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800">{title}</h3>
                <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                    <X size={18} className="text-slate-500" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">{children}</div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
                <button onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                    Cancel
                </button>
                <button onClick={onSave} disabled={saving}
                    className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60">
                    {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                    Save
                </button>
            </div>
        </div>
    </div>
);

const Field = ({ label, required, hint, children }) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            {label}{required && <span className="text-rose-400 ml-0.5">*</span>}
        </label>
        {children}
        {hint && <p className="text-[11px] text-slate-400 mt-1">{hint}</p>}
    </div>
);

const Input = (props) => (
    <input {...props}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400" />
);

const Toggle = ({ checked, onChange, disabled }) => (
    <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative w-11 h-6 rounded-full transition-colors focus:outline-none ${checked ? "bg-emerald-500" : "bg-slate-300"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
        <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
    </button>
);

// ── Copy to clipboard helper ──────────────────────────────────────────────────
const CopyBtn = ({ text }) => {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button onClick={copy} title="Copy URL"
            className="p-1.5 hover:bg-slate-100 rounded-md transition-colors text-slate-400 hover:text-slate-700 shrink-0">
            {copied ? <CheckCheck size={13} className="text-emerald-500" /> : <Copy size={13} />}
        </button>
    );
};

// ── Status badge ──────────────────────────────────────────────────────────────
const StatusBadge = ({ isActive }) => (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full
        ${isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-500" : "bg-slate-400"}`} />
        {isActive ? "Active" : "Inactive"}
    </span>
);

// ── Confirm delete dialog ─────────────────────────────────────────────────────
const ConfirmModal = ({ message, onConfirm, onCancel, loading }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-rose-100 rounded-xl">
                    <AlertCircle size={20} className="text-rose-600" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-800">Confirm Delete</p>
                    <p className="text-xs text-slate-500 mt-0.5">{message}</p>
                </div>
            </div>
            <div className="flex gap-3 justify-end">
                <button onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                    Cancel
                </button>
                <button onClick={onConfirm} disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60">
                    {loading ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                    Delete
                </button>
            </div>
        </div>
    </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// FORM URL CARD - single row in the table
// ═══════════════════════════════════════════════════════════════════════════════
const FormUrlCard = ({ item, selected, onSelect, onEdit, onDelete, onToggle, toggling }) => (
    <div className={`group relative bg-white rounded-xl border transition-all ${selected ? "border-slate-800 shadow-sm" : "border-slate-200 hover:border-slate-300 hover:shadow-sm"}`}>
        <div className="flex items-start gap-3 p-4">
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={selected}
                onChange={() => onSelect(item._id)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-slate-800 focus:ring-slate-800 shrink-0 cursor-pointer" />

            {/* Key badge */}
            <div className="flex items-center justify-center min-w-[64px] h-8 px-2 bg-slate-800 rounded-lg shrink-0">
                <span className="text-[11px] font-bold text-white tracking-wide font-mono">{item.key}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <StatusBadge isActive={item.isActive} />
                </div>

                {item.description && (
                    <p className="text-xs text-slate-400 mb-2">{item.description}</p>
                )}

                {/* URL */}
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                    <Link size={11} className="text-slate-400 shrink-0" />
                    <span className="text-[11px] font-mono text-slate-500 flex-1 truncate">{item.url}</span>
                    <CopyBtn text={item.url} />
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                        className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition-colors shrink-0">
                        <ExternalLink size={11} />
                    </a>
                </div>

                {/* Meta */}
                <p className="text-[10px] text-slate-300 mt-2 font-mono">
                    ID: {item._id} · Updated: {new Date(item.updatedAt).toLocaleDateString()}
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
                {/* Toggle active */}
                <button
                    onClick={() => onToggle(item)}
                    disabled={toggling === item._id}
                    title={item.isActive ? "Deactivate" : "Activate"}
                    className={`p-2 rounded-lg transition-colors ${toggling === item._id ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-100"}`}>
                    {toggling === item._id
                        ? <Loader2 size={16} className="animate-spin text-slate-400" />
                        : item.isActive
                            ? <ToggleRight size={18} className="text-emerald-500" />
                            : <ToggleLeft size={18} className="text-slate-300" />}
                </button>

                <button onClick={() => onEdit(item)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-700">
                    <Pencil size={15} />
                </button>

                <button onClick={() => onDelete(item)}
                    className="p-2 hover:bg-rose-100 rounded-lg transition-colors text-slate-400 hover:text-rose-600">
                    <Trash2 size={15} />
                </button>
            </div>
        </div>
    </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// FORM DEFAULTS
// ═══════════════════════════════════════════════════════════════════════════════
const EMPTY_FORM = { key: "", label: "", url: "", description: "", isActive: true };

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const FormUrlsPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Modal state
    const [modal, setModal] = useState(null); // { mode: "add"|"edit", data?: item }
    const [form, setForm] = useState({ ...EMPTY_FORM });
    const [saving, setSaving] = useState(false);

    // Delete confirm
    const [deleteTarget, setDeleteTarget] = useState(null); // single item or null
    const [deleting, setDeleting] = useState(false);

    // Bulk actions
    const [selected, setSelected] = useState(new Set());
    const [bulkDeleting, setBulkDeleting] = useState(false);
    const [showBulkConfirm, setShowBulkConfirm] = useState(false);

    // Toggle loading state per item
    const [toggling, setToggling] = useState(null);

    // Filter state
    const [search, setSearch] = useState("");
    const [filterActive, setFilterActive] = useState("all"); // "all" | "active" | "inactive"

    // ── Load ──────────────────────────────────────────────────────────────────
    const loadItems = useCallback(async () => {
        try {
            const res = await getAllFormUrlsAPI();
            if (res.success) setItems(res.data);
        } catch (e) {
            toast.error(e.message || "Failed to load form URLs");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { loadItems(); }, [loadItems]);

    // ── Filter ────────────────────────────────────────────────────────────────
    const filtered = items.filter((item) => {
        const q = search.toLowerCase();
        const matchSearch = !q || [item.key, item.label, item.url, item.description]
            .some((v) => v?.toLowerCase().includes(q));
        const matchActive =
            filterActive === "all" ? true :
                filterActive === "active" ? item.isActive :
                    !item.isActive;
        return matchSearch && matchActive;
    });

    // ── Selection helpers ─────────────────────────────────────────────────────
    const toggleSelect = (id) => setSelected((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
    });

    const toggleSelectAll = () => {
        if (selected.size === filtered.length) {
            setSelected(new Set());
        } else {
            setSelected(new Set(filtered.map((i) => i._id)));
        }
    };

    const clearSelection = () => setSelected(new Set());

    // ── Modal helpers ─────────────────────────────────────────────────────────
    const openAdd = () => {
        setForm({ ...EMPTY_FORM });
        setModal({ mode: "add" });
    };

    const openEdit = (item) => {
        setForm({
            key: item.key,
            label: item.label,
            url: item.url,
            description: item.description || "",
            isActive: item.isActive,
        });
        setModal({ mode: "edit", data: item });
    };

    const closeModal = () => { setModal(null); setForm({ ...EMPTY_FORM }); };

    const setField = (f, v) => setForm((prev) => ({ ...prev, [f]: v }));

    // ── Validate form ─────────────────────────────────────────────────────────
    const validate = () => {
        if (!form.key.trim()) { toast.error("Key is required"); return false; }
        if (!/^[a-zA-Z0-9_-]+$/.test(form.key)) { toast.error("Key: only letters, numbers, hyphens, underscores"); return false; }
        if (!form.label.trim()) { toast.error("Label is required"); return false; }
        if (!form.url.trim()) { toast.error("URL is required"); return false; }
        if (!/^https?:\/\/.+/.test(form.url)) { toast.error("URL must start with http:// or https://"); return false; }
        return true;
    };

    // ── Save (create / update) ────────────────────────────────────────────────
    const handleSave = async () => {
        if (!validate()) return;
        setSaving(true);
        try {
            if (modal.mode === "add") {
                const res = await createFormUrlAPI(form);
                if (res.success) {
                    setItems((prev) => [res.data, ...prev]);
                    toast.success("Form URL created");
                    closeModal();
                }
            } else {
                const res = await updateFormUrlAPI(modal.data._id, form);
                if (res.success) {
                    setItems((prev) => prev.map((i) => i._id === res.data._id ? res.data : i));
                    toast.success("Form URL updated");
                    closeModal();
                }
            }
        } catch (e) {
            toast.error(e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    // ── Toggle active ─────────────────────────────────────────────────────────
    const handleToggle = async (item) => {
        setToggling(item._id);
        try {
            const res = await toggleFormUrlAPI(item._id);
            if (res.success) {
                setItems((prev) => prev.map((i) => i._id === res.data._id ? res.data : i));
                toast.success(`"${item.label}" ${res.data.isActive ? "activated" : "deactivated"}`);
            }
        } catch (e) {
            toast.error(e.message || "Toggle failed");
        } finally {
            setToggling(null);
        }
    };

    // ── Delete single ─────────────────────────────────────────────────────────
    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            const res = await deleteFormUrlAPI(deleteTarget._id);
            if (res.success) {
                setItems((prev) => prev.filter((i) => i._id !== deleteTarget._id));
                setSelected((prev) => { const s = new Set(prev); s.delete(deleteTarget._id); return s; });
                toast.success(`"${deleteTarget.label}" deleted`);
                setDeleteTarget(null);
            }
        } catch (e) {
            toast.error(e.message || "Delete failed");
        } finally {
            setDeleting(false);
        }
    };

    // ── Bulk delete ───────────────────────────────────────────────────────────
    const handleBulkDelete = async () => {
        setBulkDeleting(true);
        try {
            const ids = Array.from(selected);
            const res = await bulkDeleteFormUrlsAPI(ids);
            if (res.success) {
                setItems((prev) => prev.filter((i) => !selected.has(i._id)));
                toast.success(`${res.data.deletedCount} form URL(s) deleted`);
                setSelected(new Set());
                setShowBulkConfirm(false);
            }
        } catch (e) {
            toast.error(e.message || "Bulk delete failed");
        } finally {
            setBulkDeleting(false);
        }
    };

    // ── Stats ─────────────────────────────────────────────────────────────────
    const activeCount = items.filter((i) => i.isActive).length;
    const inactiveCount = items.length - activeCount;

    // ── Render ────────────────────────────────────────────────────────────────
    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex items-center gap-3 text-slate-500">
                    <Loader2 size={22} className="animate-spin" />
                    <span className="text-sm font-medium">Loading form URLs...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            {/* ── Page Header ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-5">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Admin Panel</span>
                            <span className="text-slate-200">›</span>
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Form URLs</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">Form URL Manager</h1>
                        <p className="text-sm text-slate-400 mt-0.5">
                            Manage calendar / booking embed URLs used across your pages
                        </p>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        {/* Stats */}
                        <div className="flex gap-2">
                            {[
                                { label: "Total", val: items.length, color: "bg-slate-100 text-slate-700" },
                                { label: "Active", val: activeCount, color: "bg-emerald-50 text-emerald-700" },
                                { label: "Inactive", val: inactiveCount, color: "bg-rose-50 text-rose-600" },
                            ].map((s) => (
                                <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                    {s.val} {s.label}
                                </div>
                            ))}
                        </div>

                        <button onClick={openAdd}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors ml-1">
                            <Plus size={15} /> Add Form URL
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Search + Filter bar ── */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by key, label, URL, or description..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 placeholder-slate-400 shadow-sm" />
                    {search && (
                        <button onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Active filter */}
                <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm shrink-0">
                    {[
                        { key: "all", label: "All", icon: Filter },
                        { key: "active", label: "Active", icon: ShieldCheck },
                        { key: "inactive", label: "Inactive", icon: ShieldOff },
                    ].map((f) => (
                        <button key={f.key}
                            onClick={() => setFilterActive(f.key)}
                            className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold transition-colors
                                ${filterActive === f.key ? "bg-slate-800 text-white" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`}>
                            <f.icon size={12} />
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Bulk action bar ── */}
            {selected.size > 0 && (
                <div className="flex items-center justify-between bg-slate-800 text-white rounded-xl px-5 py-3">
                    <div className="flex items-center gap-3">
                        <CheckCheck size={16} className="text-emerald-400" />
                        <span className="text-sm font-medium">{selected.size} item{selected.size > 1 ? "s" : ""} selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={clearSelection}
                            className="px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                            Clear
                        </button>
                        <button onClick={() => setShowBulkConfirm(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors">
                            <Trash2 size={12} /> Delete Selected
                        </button>
                    </div>
                </div>
            )}

            {/* ── Select-all header ── */}
            {filtered.length > 0 && (
                <div className="flex items-center gap-3 px-2">
                    <input
                        type="checkbox"
                        checked={selected.size === filtered.length && filtered.length > 0}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 rounded border-slate-300 text-slate-800 cursor-pointer" />
                    <span className="text-xs text-slate-500 font-medium">
                        {selected.size === filtered.length ? "Deselect all" : `Select all ${filtered.length}`}
                    </span>
                    <span className="ml-auto text-xs text-slate-400">
                        {filtered.length} of {items.length} shown
                    </span>
                </div>
            )}

            {/* ── Card list ── */}
            <div className="space-y-3">
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-100">
                        <AlertCircle size={32} className="text-slate-300 mb-3" />
                        <p className="text-sm font-medium text-slate-500">
                            {search || filterActive !== "all" ? "No results match your filters" : "No form URLs yet"}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            {!search && filterActive === "all" && 'Click "Add Form URL" to create the first one'}
                        </p>
                    </div>
                ) : (
                    filtered.map((item) => (
                        <FormUrlCard
                            key={item._id}
                            item={item}
                            selected={selected.has(item._id)}
                            onSelect={toggleSelect}
                            onEdit={openEdit}
                            onDelete={(it) => setDeleteTarget(it)}
                            onToggle={handleToggle}
                            toggling={toggling}
                        />
                    ))
                )}
            </div>

            {/* ─────────────────────────────────────────────────────────────── */}
            {/* ADD / EDIT MODAL                                                */}
            {/* ─────────────────────────────────────────────────────────────── */}
            {modal && (
                <Modal
                    title={modal.mode === "add" ? "Add Form URL" : `Edit - ${modal.data?.label}`}
                    onClose={closeModal}
                    onSave={handleSave}
                    saving={saving}>

                    {/* Key */}
                    <Field label="Key" required hint="Lowercase letters, numbers, hyphens, underscores only. Used in code as FORM_URLS.key">
                        <div className="relative">
                            <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <Input
                                value={form.key}
                                onChange={(e) => setField("key", e.target.value.toLowerCase())}
                                placeholder="e.g. ecom  ·  googleads  ·  seo"
                                className="pl-9"
                                disabled={modal.mode === "edit"} // key is the unique identifier - avoid changing
                            />
                        </div>
                        {modal.mode === "edit" && (
                            <p className="text-[11px] text-amber-600 mt-1">
                                Key cannot be changed after creation. Create a new entry if needed.
                            </p>
                        )}
                    </Field>

                    {/* Label */}
                    <Field label="Label" required hint="Human-readable display name shown in admin and frontend selectors">
                        <Input value={form.label} onChange={(e) => setField("label", e.target.value)} placeholder="e.g. Google Ads · SEO · Ecom" />
                    </Field>

                    {/* URL */}
                    <Field label="Embed URL" required hint="Full Neetocal or any embed calendar URL starting with https://">
                        <div className="relative">
                            <Link size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <Input
                                value={form.url}
                                onChange={(e) => setField("url", e.target.value)}
                                placeholder="https://upthrust-us.neetocal.com/embed/..."
                                className="pl-9 font-mono text-xs"
                            />
                        </div>
                        {/* Live preview */}
                        {form.url && /^https?:\/\/.+/.test(form.url) && (
                            <a href={form.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-1.5 text-xs text-sky-600 hover:text-sky-800 transition-colors">
                                <ExternalLink size={11} /> Open URL in new tab
                            </a>
                        )}
                    </Field>

                    {/* Description */}
                    <Field label="Description" hint="Optional note about which page or use case this URL belongs to">
                        <div className="relative">
                            <FileText size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                            <textarea
                                rows={2}
                                value={form.description}
                                onChange={(e) => setField("description", e.target.value)}
                                placeholder="e.g. Used on the D2C landing page hero section"
                                className="w-full pl-9 pr-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50 placeholder-slate-400 resize-none" />
                        </div>
                    </Field>

                    {/* isActive */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div>
                            <p className="text-sm font-semibold text-slate-700">Active Status</p>
                            <p className="text-xs text-slate-400 mt-0.5">
                                Inactive URLs are excluded from the public <code className="text-[11px] bg-slate-200 px-1 rounded">/map</code> endpoint
                            </p>
                        </div>
                        <Toggle checked={form.isActive} onChange={(v) => setField("isActive", v)} />
                    </div>

                    {/* Preview card */}
                    {form.key && form.label && (
                        <div className="p-3 bg-slate-800 rounded-xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Preview</p>
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold bg-white/20 text-white px-2 py-0.5 rounded font-mono">{form.key}</span>
                                <span className="text-sm font-semibold text-white">{form.label}</span>
                                <StatusBadge isActive={form.isActive} />
                            </div>
                            {form.url && (
                                <p className="text-[10px] font-mono text-slate-400 mt-1.5 truncate">{form.url}</p>
                            )}
                        </div>
                    )}
                </Modal>
            )}

            {/* ─────────────────────────────────────────────────────────────── */}
            {/* SINGLE DELETE CONFIRM                                          */}
            {/* ─────────────────────────────────────────────────────────────── */}
            {deleteTarget && (
                <ConfirmModal
                    message={`Delete "${deleteTarget.label}" (key: ${deleteTarget.key})? This cannot be undone.`}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                    loading={deleting}
                />
            )}

            {/* ─────────────────────────────────────────────────────────────── */}
            {/* BULK DELETE CONFIRM                                             */}
            {/* ─────────────────────────────────────────────────────────────── */}
            {showBulkConfirm && (
                <ConfirmModal
                    message={`Permanently delete ${selected.size} selected form URL${selected.size > 1 ? "s" : ""}?`}
                    onConfirm={handleBulkDelete}
                    onCancel={() => setShowBulkConfirm(false)}
                    loading={bulkDeleting}
                />
            )}
        </div>
    );
};

export default FormUrlsPage;