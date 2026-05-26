import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    getPageAPI,
    upsertAdditionalFieldAPI,
} from "../utils/pageapi";
import {
    Pencil, Trash2, Plus, X, Save, Loader2,
    Video, Star, Image as ImageIcon, Link,
    Smartphone, Grid3X3, ChevronDown, ChevronUp,
    AlertCircle, Tag, Folder, FolderOpen, GripVertical
} from "lucide-react";

// ─── PAGE SLUG ─────────────────────────────────────────────────────────────────
const PAGE_SLUG = "meta-ad-agency";

// ─── SHARED UI ─────────────────────────────────────────────────────────────────
const SectionHeader = ({ icon: Icon, title, count, color, onAdd, addLabel = "Add New" }) => (
    <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${color}`}>
                <Icon size={18} className="text-white" />
            </div>
            <div>
                <h2 className="text-base font-semibold text-slate-800">{title}</h2>
                <p className="text-xs text-slate-400">{count} item{count !== 1 ? "s" : ""}</p>
            </div>
        </div>
        {onAdd && (
            <button
                onClick={onAdd}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
                <Plus size={15} />
                {addLabel}
            </button>
        )}
    </div>
);

const Modal = ({ title, onClose, onSave, saving, wide = false, children }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className={`bg-white rounded-2xl shadow-2xl w-full ${wide ? "max-w-2xl" : "max-w-lg"} max-h-[90vh] flex flex-col`}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800">{title}</h3>
                <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                    <X size={18} className="text-slate-500" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                {children}
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                    Cancel
                </button>
                <button
                    onClick={onSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
                >
                    {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                    Save
                </button>
            </div>
        </div>
    </div>
);

const Field = ({ label, children }) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{label}</label>
        {children}
    </div>
);

const Input = (props) => (
    <input {...props} className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400" />
);

const Textarea = (props) => (
    <textarea {...props} rows={3} className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none" />
);

const Toggle = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer select-none">
        <div
            onClick={() => onChange(!checked)}
            className={`relative w-10 h-5 rounded-full transition-colors ${checked ? "bg-slate-800" : "bg-slate-200"}`}
        >
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
        </div>
        <span className="text-sm text-slate-700">{label}</span>
    </label>
);

// ═══════════════════════════════════════════════════════════════════════════════
// 1. HERO VIDEOS
// ═══════════════════════════════════════════════════════════════════════════════
const HeroVideoSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { url: "" } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...items[idx] } });
    const closeModal = () => setModal(null);

    const handleSave = async () => {
        if (!modal.form.url.trim()) { toast.error("Video URL is required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") updated.push({ url: modal.form.url });
            else updated[modal.idx] = { url: modal.form.url };
            const res = await upsertAdditionalFieldAPI(pageId, { key: "hero-video", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Hero video added" : "Hero video updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this hero video?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx);
            const res = await upsertAdditionalFieldAPI(pageId, { key: "hero-video", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Hero video deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={Video} title="Hero Videos" count={items.length} color="bg-rose-500" onAdd={openAdd} />
            <div className="space-y-2">
                {items.map((v, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 group">
                        <div className="flex items-center justify-center w-8 h-8 bg-rose-100 rounded-lg shrink-0">
                            <Video size={14} className="text-rose-600" />
                        </div>
                        <a href={v.url} target="_blank" rel="noopener noreferrer"
                            className="flex-1 text-xs font-mono text-slate-500 hover:text-rose-600 truncate transition-colors">
                            {v.url}
                        </a>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                            <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500">
                                <Pencil size={13} />
                            </button>
                            <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg transition-colors text-slate-400 hover:text-rose-600">
                                <Trash2 size={13} />
                            </button>
                        </div>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="flex items-center justify-center h-16 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No hero videos yet
                    </div>
                )}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Hero Video" : "Edit Hero Video"} onClose={closeModal} onSave={handleSave} saving={saving}>
                    <Field label="Video URL *">
                        <Textarea
                            value={modal.form.url}
                            onChange={(e) => setModal((m) => ({ ...m, form: { url: e.target.value } }))}
                            placeholder="https://cdn.example.com/video.mp4"
                        />
                    </Field>
                    {modal.form.url && (
                        <a href={modal.form.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800">
                            <Link size={12} /> Preview video
                        </a>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════
const TESTIMONIAL_DEFAULT = {
    rating: 5, title: "", quote: "", author: "", position: "",
    avatar: "", bgColor: "bg-white", borderColor: "", textColor: "",
    hasVideo: false, video: "", company: "",
    hasAvatar: false, hasHighlight: false, textLarge: false, isPaddngMore: false,
};

const TestimonialsSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...TESTIMONIAL_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...TESTIMONIAL_DEFAULT, ...items[idx] } });
    const closeModal = () => setModal(null);

    const set = (field, val) => setModal((m) => ({ ...m, form: { ...m.form, [field]: val } }));

    const handleSave = async () => {
        if (!modal.form.author || !modal.form.title) { toast.error("Author and Title are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form };
            // Remove empty optional fields to keep DB clean
            Object.keys(entry).forEach((k) => { if (entry[k] === "" || entry[k] === false) delete entry[k]; });
            if (modal.mode === "add") { entry.id = items.length + 1; updated.push(entry); }
            else { entry.id = items[modal.idx].id; updated[modal.idx] = entry; }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "testimonials", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Testimonial added" : "Testimonial updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this testimonial?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx).map((t, i) => ({ ...t, id: i + 1 }));
            const res = await upsertAdditionalFieldAPI(pageId, { key: "testimonials", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Testimonial deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={Star} title="Testimonials" count={items.length} color="bg-amber-500" onAdd={openAdd} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((t, i) => (
                    <div key={t.id || i} className={`relative rounded-xl border p-4 group ${t.borderColor || "border-slate-200"} ${t.bgColor || "bg-white"}`}>
                        <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5">
                                {t.avatar && (
                                    <img src={t.avatar} alt={t.author}
                                        className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                                        onError={(e) => { e.target.style.display = "none"; }} />
                                )}
                                <div>
                                    <p className={`text-sm font-semibold ${t.textColor || "text-slate-800"}`}>{t.author}</p>
                                    <p className={`text-xs ${t.textColor === "text-white" ? "text-white/70" : "text-slate-400"}`}>{t.position}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-black/10 rounded-lg transition-colors">
                                    <Pencil size={13} className={t.textColor === "text-white" ? "text-white" : "text-slate-500"} />
                                </button>
                                <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg transition-colors">
                                    <Trash2 size={13} className="text-rose-500" />
                                </button>
                            </div>
                        </div>
                        <p className={`text-xs font-semibold mb-1 line-clamp-2 ${t.textColor || "text-slate-700"}`}>{t.title}</p>
                        {t.quote && <p className={`text-xs leading-relaxed line-clamp-2 ${t.textColor === "text-white" ? "text-white/70" : "text-slate-500"}`}>{t.quote}</p>}
                        <div className="flex items-center gap-2 mt-3">
                            {[...Array(t.rating || 5)].map((_, j) => (
                                <Star key={j} size={10} className="text-amber-400 fill-amber-400" />
                            ))}
                            {t.hasVideo && <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold ml-auto">VIDEO</span>}
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Testimonial" : "Edit Testimonial"} onClose={closeModal} onSave={handleSave} saving={saving} wide>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Author *">
                            <Input value={modal.form.author} onChange={(e) => set("author", e.target.value)} placeholder="John Doe, CEO" />
                        </Field>
                        <Field label="Position">
                            <Input value={modal.form.position} onChange={(e) => set("position", e.target.value)} placeholder="Co-founder at Acme" />
                        </Field>
                    </div>
                    <Field label="Title *">
                        <Input value={modal.form.title} onChange={(e) => set("title", e.target.value)} placeholder="How Upthrust helped..." />
                    </Field>
                    <Field label="Quote">
                        <Textarea value={modal.form.quote} onChange={(e) => set("quote", e.target.value)} placeholder="Optional longer quote..." />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Avatar Path">
                            <Input value={modal.form.avatar} onChange={(e) => set("avatar", e.target.value)} placeholder="/google-ads/review/img1.webp" />
                        </Field>
                        <Field label="Company Logo Path">
                            <Input value={modal.form.company} onChange={(e) => set("company", e.target.value)} placeholder="/google-ads/review/clogo1.webp" />
                        </Field>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Field label="Rating (1-5)">
                            <Input type="number" min="1" max="5" value={modal.form.rating} onChange={(e) => set("rating", Number(e.target.value))} />
                        </Field>
                        <Field label="BG Color (Tailwind)">
                            <Input value={modal.form.bgColor} onChange={(e) => set("bgColor", e.target.value)} placeholder="bg-white" />
                        </Field>
                        <Field label="Border Color">
                            <Input value={modal.form.borderColor} onChange={(e) => set("borderColor", e.target.value)} placeholder="border-[#0457CB]" />
                        </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Text Color">
                            <Input value={modal.form.textColor} onChange={(e) => set("textColor", e.target.value)} placeholder="text-white" />
                        </Field>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-1">
                        <Toggle label="Has Video" checked={!!modal.form.hasVideo} onChange={(v) => set("hasVideo", v)} />
                        <Toggle label="Has Avatar" checked={!!modal.form.hasAvatar} onChange={(v) => set("hasAvatar", v)} />
                        <Toggle label="Has Highlight" checked={!!modal.form.hasHighlight} onChange={(v) => set("hasHighlight", v)} />
                        <Toggle label="Large Text" checked={!!modal.form.textLarge} onChange={(v) => set("textLarge", v)} />
                        <Toggle label="More Padding" checked={!!modal.form.isPaddngMore} onChange={(v) => set("isPaddngMore", v)} />
                    </div>
                    {modal.form.hasVideo && (
                        <Field label="Video URL">
                            <Textarea value={modal.form.video} onChange={(e) => set("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
                        </Field>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. MOBILE VIDEOS
// ═══════════════════════════════════════════════════════════════════════════════
const MOBILE_VIDEO_DEFAULT = { label: "", thumbnail: "", frame: "", video: "" };

const MobileVideosSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...MOBILE_VIDEO_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...items[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSave = async () => {
        if (!modal.form.video) { toast.error("Video URL is required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") updated.push({ ...modal.form, id: items.length + 1 });
            else updated[modal.idx] = { ...modal.form, id: items[modal.idx].id };
            const res = await upsertAdditionalFieldAPI(pageId, { key: "mobileVideos", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Mobile video added" : "Mobile video updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this mobile video?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx).map((v, i) => ({ ...v, id: i + 1 }));
            const res = await upsertAdditionalFieldAPI(pageId, { key: "mobileVideos", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Mobile video deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={Smartphone} title="Mobile Videos" count={items.length} color="bg-indigo-500" onAdd={openAdd} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {items.map((v, i) => (
                    <div key={v.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100 aspect-[9/16] bg-slate-100">
                        {v.thumbnail ? (
                            <img src={v.thumbnail} alt={v.label}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = "none"; }} />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ImageIcon size={20} className="text-slate-300" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <button onClick={() => openEdit(i)} className="p-2 bg-white rounded-lg text-slate-700 hover:bg-slate-100">
                                <Pencil size={13} />
                            </button>
                            <button onClick={() => handleDelete(i)} className="p-2 bg-white rounded-lg text-rose-600 hover:bg-rose-50">
                                <Trash2 size={13} />
                            </button>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <span className="text-[11px] font-bold tracking-widest text-white">{v.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Mobile Video" : "Edit Mobile Video"} onClose={closeModal} onSave={handleSave} saving={saving}>
                    <Field label="Label">
                        <Input value={modal.form.label} onChange={(e) => set("label", e.target.value)} placeholder="D2C / CONSUMER / B2B / SAAS" />
                    </Field>
                    <Field label="Thumbnail Path">
                        <Input value={modal.form.thumbnail} onChange={(e) => set("thumbnail", e.target.value)} placeholder="/ecom/ugcs/cloth/cloth2.webp" />
                    </Field>
                    <Field label="Frame Path">
                        <Input value={modal.form.frame} onChange={(e) => set("frame", e.target.value)} placeholder="/meta-ads/frame.png" />
                    </Field>
                    <Field label="Video URL *">
                        <Textarea value={modal.form.video} onChange={(e) => set("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
                    </Field>
                    {modal.form.video && (
                        <a href={modal.form.video} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800">
                            <Link size={12} /> Preview video
                        </a>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. UGC VIDEOS — has 2 sub-sections: "videos" + "ugcCategories"
// ═══════════════════════════════════════════════════════════════════════════════

// ── 4a. UGC Videos tab (same shape as mobileVideos) ──────────────────────────
const UGC_VIDEO_DEFAULT = { label: "", thumbnail: "", frame: "", video: "" };

const UGCVideosTab = ({ videos = [], allData, pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...UGC_VIDEO_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...videos[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const save = async (updatedVideos) => {
        const updated = allData.map((block) =>
            block.type === "videos" ? { ...block, data: updatedVideos } : block
        );
        return upsertAdditionalFieldAPI(pageId, { key: "ugc-video", value: updated });
    };

    const handleSave = async () => {
        if (!modal.form.video) { toast.error("Video URL is required"); return; }
        setSaving(true);
        try {
            const updated = [...videos];
            if (modal.mode === "add") updated.push({ ...modal.form, id: videos.length + 1 });
            else updated[modal.idx] = { ...modal.form, id: videos[modal.idx].id };
            const res = await save(updated);
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "UGC video added" : "UGC video updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this UGC video?")) return;
        try {
            const updated = videos.filter((_, i) => i !== idx).map((v, i) => ({ ...v, id: i + 1 }));
            const res = await save(updated);
            if (res.success) { onSaved(res.data.additionalFields); toast.success("UGC video deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Plus size={15} /> Add Video
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {videos.map((v, i) => (
                    <div key={v.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100 aspect-[9/16] bg-slate-100">
                        {v.thumbnail ? (
                            <img src={v.thumbnail} alt={v.label} className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center"><ImageIcon size={18} className="text-slate-300" /></div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <button onClick={() => openEdit(i)} className="p-1.5 bg-white rounded-lg text-slate-700"><Pencil size={12} /></button>
                            <button onClick={() => handleDelete(i)} className="p-1.5 bg-white rounded-lg text-rose-600"><Trash2 size={12} /></button>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <span className="text-[10px] font-bold tracking-widest text-white">{v.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add UGC Video" : "Edit UGC Video"} onClose={closeModal} onSave={handleSave} saving={saving}>
                    <Field label="Label"><Input value={modal.form.label} onChange={(e) => set("label", e.target.value)} placeholder="D2C / B2B / SAAS" /></Field>
                    <Field label="Thumbnail Path"><Input value={modal.form.thumbnail} onChange={(e) => set("thumbnail", e.target.value)} placeholder="/ecom/ugcs/cloth/cloth2.webp" /></Field>
                    <Field label="Frame Path"><Input value={modal.form.frame} onChange={(e) => set("frame", e.target.value)} placeholder="/meta-ads/frame.png" /></Field>
                    <Field label="Video URL *"><Textarea value={modal.form.video} onChange={(e) => set("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" /></Field>
                </Modal>
            )}
        </div>
    );
};

// ── 4b. UGC Categories tab ────────────────────────────────────────────────────
const CATEGORY_DEFAULT = { id: "", name: "", alt: "", items: [] };
const CATEGORY_ITEM_DEFAULT = { image: "", video: "" };

const UGCCategoriesTab = ({ categories = [], allData, pageId, onSaved }) => {
    const [catModal, setCatModal] = useState(null);    // add/edit category
    const [itemModal, setItemModal] = useState(null);  // add/edit item inside a category
    const [expandedCat, setExpandedCat] = useState(null);
    const [savingCat, setSavingCat] = useState(false);
    const [savingItem, setSavingItem] = useState(false);

    const saveCategories = async (updatedCats) => {
        const updated = allData.map((block) =>
            block.type === "ugcCategories" ? { ...block, data: updatedCats } : block
        );
        return upsertAdditionalFieldAPI(pageId, { key: "ugc-video", value: updated });
    };

    // ── Category CRUD ──
    const openAddCat = () => setCatModal({ mode: "add", idx: null, form: { ...CATEGORY_DEFAULT, items: [] } });
    const openEditCat = (idx) => setCatModal({ mode: "edit", idx, form: { ...categories[idx] } });
    const closeCatModal = () => setCatModal(null);
    const setCat = (f, v) => setCatModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSaveCat = async () => {
        if (!catModal.form.name.trim()) { toast.error("Category name is required"); return; }
        setSavingCat(true);
        try {
            const updated = [...categories];
            if (catModal.mode === "add") updated.push({ ...catModal.form, id: catModal.form.id || catModal.form.name.toLowerCase().replace(/\s+/g, "-") });
            else updated[catModal.idx] = catModal.form;
            const res = await saveCategories(updated);
            if (res.success) { onSaved(res.data.additionalFields); toast.success(catModal.mode === "add" ? "Category added" : "Category updated"); closeCatModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSavingCat(false); }
    };

    const handleDeleteCat = async (idx) => {
        if (!window.confirm(`Delete "${categories[idx].name}" and all its items?`)) return;
        try {
            const updated = categories.filter((_, i) => i !== idx);
            const res = await saveCategories(updated);
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Category deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    // ── Item CRUD ──
    const openAddItem = (catIdx) => setItemModal({ catIdx, mode: "add", itemIdx: null, form: { ...CATEGORY_ITEM_DEFAULT } });
    const openEditItem = (catIdx, itemIdx) => setItemModal({ catIdx, mode: "edit", itemIdx, form: { ...categories[catIdx].items[itemIdx] } });
    const closeItemModal = () => setItemModal(null);
    const setItem = (f, v) => setItemModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSaveItem = async () => {
        if (!itemModal.form.video) { toast.error("Video URL is required"); return; }
        setSavingItem(true);
        try {
            const updatedCats = categories.map((cat, ci) => {
                if (ci !== itemModal.catIdx) return cat;
                const updatedItems = [...cat.items];
                if (itemModal.mode === "add") updatedItems.push({ ...itemModal.form, id: cat.items.length + 1 });
                else updatedItems[itemModal.itemIdx] = { ...itemModal.form, id: cat.items[itemModal.itemIdx].id };
                return { ...cat, items: updatedItems };
            });
            const res = await saveCategories(updatedCats);
            if (res.success) { onSaved(res.data.additionalFields); toast.success(itemModal.mode === "add" ? "Item added" : "Item updated"); closeItemModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSavingItem(false); }
    };

    const handleDeleteItem = async (catIdx, itemIdx) => {
        if (!window.confirm("Delete this item?")) return;
        try {
            const updatedCats = categories.map((cat, ci) => {
                if (ci !== catIdx) return cat;
                return { ...cat, items: cat.items.filter((_, ii) => ii !== itemIdx).map((it, i) => ({ ...it, id: i + 1 })) };
            });
            const res = await saveCategories(updatedCats);
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Item deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <button onClick={openAddCat} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Plus size={15} /> Add Category
                </button>
            </div>

            <div className="space-y-3">
                {categories.map((cat, ci) => (
                    <div key={cat.id || ci} className="border border-slate-200 rounded-xl overflow-hidden">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                            <button onClick={() => setExpandedCat(expandedCat === ci ? null : ci)} className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="p-1.5 bg-indigo-100 rounded-lg">
                                    {expandedCat === ci ? <FolderOpen size={14} className="text-indigo-600" /> : <Folder size={14} className="text-indigo-600" />}
                                </div>
                                <div className="text-left min-w-0">
                                    <p className="text-sm font-semibold text-slate-800">{cat.name}</p>
                                    <p className="text-xs text-slate-400">{cat.items?.length || 0} items · ID: {cat.id}</p>
                                </div>
                                <div className="ml-auto mr-2 text-slate-400">
                                    {expandedCat === ci ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                </div>
                            </button>
                            <div className="flex items-center gap-1 shrink-0">
                                <button onClick={() => openAddItem(ci)} className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors">
                                    <Plus size={12} /> Add
                                </button>
                                <button onClick={() => openEditCat(ci)} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-500">
                                    <Pencil size={13} />
                                </button>
                                <button onClick={() => handleDeleteCat(ci)} className="p-1.5 hover:bg-rose-100 rounded-lg transition-colors text-slate-400 hover:text-rose-600">
                                    <Trash2 size={13} />
                                </button>
                            </div>
                        </div>

                        {/* Category Items */}
                        {expandedCat === ci && (
                            <div className="p-4">
                                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-2">
                                    {(cat.items || []).map((item, ii) => (
                                        <div key={item.id || ii} className="group relative rounded-lg overflow-hidden border border-slate-100 aspect-[9/16] bg-slate-100">
                                            {item.image ? (
                                                <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center"><ImageIcon size={14} className="text-slate-300" /></div>
                                            )}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                                                <button onClick={() => openEditItem(ci, ii)} className="p-1 bg-white rounded text-slate-700"><Pencil size={11} /></button>
                                                <button onClick={() => handleDeleteItem(ci, ii)} className="p-1 bg-white rounded text-rose-600"><Trash2 size={11} /></button>
                                            </div>
                                            <div className="absolute top-1 left-1">
                                                <span className="text-[9px] font-bold bg-black/60 text-white px-1 py-0.5 rounded">#{item.id}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {(cat.items || []).length === 0 && (
                                        <div className="col-span-full flex items-center justify-center h-12 text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
                                            No items yet
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {categories.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No categories yet
                    </div>
                )}
            </div>

            {/* Category Modal */}
            {catModal && (
                <Modal title={catModal.mode === "add" ? "Add Category" : "Edit Category"} onClose={closeCatModal} onSave={handleSaveCat} saving={savingCat}>
                    <Field label="Category ID">
                        <Input value={catModal.form.id} onChange={(e) => setCat("id", e.target.value)} placeholder="c&f / lifestyle / b&s" />
                        <p className="text-[11px] text-slate-400 mt-1">Leave blank to auto-generate from name</p>
                    </Field>
                    <Field label="Name *">
                        <Input value={catModal.form.name} onChange={(e) => setCat("name", e.target.value)} placeholder="Clothing & Footwear" />
                    </Field>
                    <Field label="Alt Text">
                        <Input value={catModal.form.alt} onChange={(e) => setCat("alt", e.target.value)} placeholder="Descriptive alt for SEO..." />
                    </Field>
                </Modal>
            )}

            {/* Item Modal */}
            {itemModal && (
                <Modal
                    title={itemModal.mode === "add" ? `Add Item to "${categories[itemModal.catIdx]?.name}"` : "Edit Item"}
                    onClose={closeItemModal}
                    onSave={handleSaveItem}
                    saving={savingItem}
                >
                    <Field label="Image Path">
                        <Input value={itemModal.form.image} onChange={(e) => setItem("image", e.target.value)} placeholder="/ecom/ugcs/cloth/cloth1.webp" />
                        {itemModal.form.image && (
                            <div className="mt-2 w-12 aspect-[9/16] rounded overflow-hidden border border-slate-200">
                                <img src={itemModal.form.image} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} alt="" />
                            </div>
                        )}
                    </Field>
                    <Field label="Video URL *">
                        <Textarea value={itemModal.form.video} onChange={(e) => setItem("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
                    </Field>
                    {itemModal.form.video && (
                        <a href={itemModal.form.video} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800">
                            <Link size={12} /> Preview video
                        </a>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ── 4. UGC VIDEO (wrapper with tabs) ─────────────────────────────────────────
const UGCVideoSection = ({ ugcData = [], pageId, onSaved }) => {
    const [activeTab, setActiveTab] = useState("categories");

    const categoriesBlock = ugcData.find((b) => b.type === "ugcCategories");
    const categories = categoriesBlock?.data || [];

    const tabs = [
        { key: "categories", label: "UGC Categories", icon: Grid3X3, count: categories.length },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-emerald-500">
                    <Grid3X3 size={18} className="text-white" />
                </div>
                <div>
                    <h2 className="text-base font-semibold text-slate-800">UGC Videos</h2>
                    <p className="text-xs text-slate-400"> {categories.length} categories</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-5 border-b border-slate-100 pb-0">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors border-b-2 -mb-px
                            ${activeTab === tab.key
                                ? "border-slate-800 text-slate-800"
                                : "border-transparent text-slate-400 hover:text-slate-600"}`}
                    >
                        <tab.icon size={14} />
                        {tab.label}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold
                            ${activeTab === tab.key ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500"}`}>
                            {tab.count}
                        </span>
                    </button>
                ))}
            </div>
            {activeTab === "categories" && (
                <UGCCategoriesTab categories={categories} allData={ugcData} pageId={pageId} onSaved={onSaved} />
            )}

        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const MetaAdAgencyPage = () => {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSaved = useCallback((updatedFields) => {
        setPage((prev) => ({ ...prev, additionalFields: updatedFields }));
    }, []);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await getPageAPI(PAGE_SLUG);
                if (res.success) setPage(res.data);
                else toast.error(res.message || "Failed to load page");
            } catch (e) {
                toast.error(e.message || "Failed to load page");
            } finally {
                setLoading(false);
            }
        };
        fetchPage();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex items-center gap-3 text-slate-500">
                    <Loader2 size={22} className="animate-spin" />
                    <span className="text-sm font-medium">Loading Meta Ad Agency page...</span>
                </div>
            </div>
        );
    }

    if (!page) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center">
                    <AlertCircle size={32} className="text-rose-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-slate-600">Page not found</p>
                    <p className="text-xs text-slate-400 mt-1">Slug: {PAGE_SLUG}</p>
                </div>
            </div>
        );
    }

    const af = page.additionalFields || {};
    const heroVideos = af["hero-video"] || [];
    const testimonials = af["testimonials"] || [];
    const mobileVideos = af["mobileVideos"] || [];
    const ugcVideo = af["ugc-video"] || [];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-5">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Admin Panel</span>
                            <span className="text-slate-200">›</span>
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Pages</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">{page.title}</h1>
                        <p className="text-sm text-slate-400 mt-0.5 font-mono">/{page.url}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {[
                            { label: "Hero Videos", val: heroVideos.length, color: "bg-rose-50 text-rose-700" },
                            { label: "Testimonials", val: testimonials.length, color: "bg-amber-50 text-amber-700" },
                            { label: "Mobile Videos", val: mobileVideos.length, color: "bg-indigo-50 text-indigo-700" },
                            {
                                label: "UGC Categories",
                                val: (ugcVideo.find((b) => b.type === "ugcCategories")?.data || []).length,
                                color: "bg-emerald-50 text-emerald-700"
                            },
                        ].map((s) => (
                            <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                {s.val} {s.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <HeroVideoSection heroVideos={heroVideos} items={heroVideos} pageId={page._id} onSaved={handleSaved} />
            <TestimonialsSection items={testimonials} pageId={page._id} onSaved={handleSaved} />
            <MobileVideosSection items={mobileVideos} pageId={page._id} onSaved={handleSaved} />
            <UGCVideoSection ugcData={ugcVideo} pageId={page._id} onSaved={handleSaved} />
        </div>
    );
};

export default MetaAdAgencyPage;