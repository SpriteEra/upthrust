import { useState, useEffect, useCallback } from "react";
import {
    getPageAPI,
    upsertAdditionalFieldAPI,
} from "../utils/pageapi";
import {
    Pencil, Trash2, Plus, X, Save, Loader2,
    Quote, Video, Star, ChevronDown, ChevronUp,
    Image as ImageIcon, Link, CheckCircle, AlertCircle
} from "lucide-react";
import Img from "../components/test/Default";

// ─── PAGE SLUG ─────────────────────────────────────────────────────────────────
const PAGE_SLUG = "d2c-marketing-agency";

// ─── TOAST ─────────────────────────────────────────────────────────────────────
const Toast = ({ toast, onClose }) => {
    useEffect(() => {
        const t = setTimeout(onClose, 3500);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-white text-sm font-medium transition-all
            ${toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"}`}>
            {toast.type === "success"
                ? <CheckCircle size={18} />
                : <AlertCircle size={18} />}
            {toast.message}
        </div>
    );
};

// ─── SECTION HEADER ────────────────────────────────────────────────────────────
const SectionHeader = ({ icon: Icon, title, count, color, onAdd }) => (
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
        <button
            onClick={onAdd}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
            <Plus size={15} />
            Add New
        </button>
    </div>
);

// ─── MODAL ─────────────────────────────────────────────────────────────────────
const Modal = ({ title, onClose, onSave, saving, children }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
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
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
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

// ─── FIELD ─────────────────────────────────────────────────────────────────────
const Field = ({ label, children }) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            {label}
        </label>
        {children}
    </div>
);

const Input = ({ ...props }) => (
    <input
        {...props}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400"
    />
);

const Textarea = ({ ...props }) => (
    <textarea
        {...props}
        rows={3}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none"
    />
);

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const TESTIMONIAL_DEFAULT = { text: "", name: "", company: "", image: "", color: "bg-[#FFF0F0]" };

const TestimonialsSection = ({ items = [], pageId, onSaved, showToast }) => {
    const [modal, setModal] = useState(null); // { mode: "add"|"edit", idx: number|null, form: {} }
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...TESTIMONIAL_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...items[idx] } });
    const closeModal = () => setModal(null);

    const handleChange = (field, val) =>
        setModal((m) => ({ ...m, form: { ...m.form, [field]: val } }));

    const handleSave = async () => {
        if (!modal.form.name || !modal.form.text) {
            showToast("error", "Name and text are required");
            return;
        }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") updated.push(modal.form);
            else updated[modal.idx] = modal.form;

            const res = await upsertAdditionalFieldAPI(pageId, { key: "testimonials", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", modal.mode === "add" ? "Testimonial added" : "Testimonial updated");
                closeModal();
            }
        } catch (e) {
            showToast("error", e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this testimonial?")) return;
        const updated = items.filter((_, i) => i !== idx);
        try {
            const res = await upsertAdditionalFieldAPI(pageId, { key: "testimonials", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", "Testimonial deleted");
            }
        } catch (e) {
            showToast("error", e.message || "Delete failed");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader
                icon={Quote}
                title="Testimonials"
                count={items.length}
                color="bg-violet-500"
                onAdd={openAdd}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((t, i) => (
                    <div key={i} className={`relative rounded-xl p-4 border border-slate-100 ${t.color || "bg-slate-50"}`}>
                        <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5">
                                {t.image && (
                                    <div>
                                        <Img src={t.image} alt={t.name}
                                            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                                            onError={(e) => { e.target.style.display = "none"; }}
                                        />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                                    <p className="text-xs text-slate-500">{t.company}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 shrink-0">
                                <button onClick={() => openEdit(i)}
                                    className="p-1.5 hover:bg-white/80 rounded-lg transition-colors text-slate-500 hover:text-slate-800">
                                    <Pencil size={14} />
                                </button>
                                <button onClick={() => handleDelete(i)}
                                    className="p-1.5 hover:bg-rose-100 rounded-lg transition-colors text-slate-400 hover:text-rose-600">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{t.text}</p>
                        <div className="mt-2">
                            <span className="text-[10px] font-mono text-slate-400 bg-white/70 px-2 py-0.5 rounded-full">
                                {t.color}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal
                    title={modal.mode === "add" ? "Add Testimonial" : "Edit Testimonial"}
                    onClose={closeModal}
                    onSave={handleSave}
                    saving={saving}
                >
                    <Field label="Name *">
                        <Input value={modal.form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="e.g. John Doe" />
                    </Field>
                    <Field label="Company">
                        <Input value={modal.form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="e.g. Acme Corp" />
                    </Field>
                    <Field label="Text *">
                        <Textarea value={modal.form.text} onChange={(e) => handleChange("text", e.target.value)} placeholder="Testimonial text..." />
                    </Field>
                    <Field label="Image Path">
                        <Input value={modal.form.image} onChange={(e) => handleChange("image", e.target.value)} placeholder="/ecom/profile/profile1.png" />
                    </Field>
                    <Field label="Background Color (Tailwind)">
                        <Input value={modal.form.color} onChange={(e) => handleChange("color", e.target.value)} placeholder="bg-[#FFF0F0]" />
                        {modal.form.color && (
                            <div className={`mt-2 h-6 rounded-lg ${modal.form.color} border border-slate-200`} />
                        )}
                    </Field>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDER VIDEOS SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const SLIDER_DEFAULT = { image: "", video: "" };

const SliderVideosSection = ({ items = [], pageId, onSaved, showToast }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const display = expanded ? items : items.slice(0, 6);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...SLIDER_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...items[idx] } });
    const closeModal = () => setModal(null);

    const handleChange = (field, val) =>
        setModal((m) => ({ ...m, form: { ...m.form, [field]: val } }));

    const handleSave = async () => {
        if (!modal.form.video) {
            showToast("error", "Video URL is required");
            return;
        }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") {
                updated.push({ ...modal.form, id: (items.length + 1) });
            } else {
                updated[modal.idx] = { ...modal.form, id: items[modal.idx].id };
            }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "sliderVideos", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", modal.mode === "add" ? "Slider video added" : "Slider video updated");
                closeModal();
            }
        } catch (e) {
            showToast("error", e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this slider video?")) return;
        const updated = items
            .filter((_, i) => i !== idx)
            .map((item, i) => ({ ...item, id: i + 1 }));
        try {
            const res = await upsertAdditionalFieldAPI(pageId, { key: "sliderVideos", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", "Slider video deleted");
            }
        } catch (e) {
            showToast("error", e.message || "Delete failed");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader
                icon={Video}
                title="Slider Videos"
                count={items.length}
                color="bg-sky-500"
                onAdd={openAdd}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {display.map((v, i) => (
                    <div key={v.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[9/16]">
                        {v.image ? (
                            <Img src={v.image} alt={`Slide ${v.id}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = "none"; }}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ImageIcon size={20} className="text-slate-300" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <button onClick={() => openEdit(i)}
                                className="p-2 bg-white rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">
                                <Pencil size={13} />
                            </button>
                            <button onClick={() => handleDelete(i)}
                                className="p-2 bg-white rounded-lg text-rose-600 hover:bg-rose-50 transition-colors">
                                <Trash2 size={13} />
                            </button>
                        </div>
                        <div className="absolute top-2 left-2">
                            <span className="text-[10px] font-bold bg-black/60 text-white px-1.5 py-0.5 rounded-md">
                                #{v.id}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {items.length > 6 && (
                <button
                    onClick={() => setExpanded((e) => !e)}
                    className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mx-auto"
                >
                    {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    {expanded ? "Show less" : `Show ${items.length - 6} more`}
                </button>
            )}

            {modal && (
                <Modal
                    title={modal.mode === "add" ? "Add Slider Video" : "Edit Slider Video"}
                    onClose={closeModal}
                    onSave={handleSave}
                    saving={saving}
                >
                    <Field label="Thumbnail Image Path">
                        <Input value={modal.form.image} onChange={(e) => handleChange("image", e.target.value)} placeholder="/ecom/ugcs/cloth/cloth1.webp" />
                        {modal.form.image && (
                            <div className="mt-2 w-16 aspect-[9/16] rounded-lg overflow-hidden border border-slate-200">
                                <Img src={modal.form.image} className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} alt="preview" />
                            </div>
                        )}
                    </Field>
                    <Field label="Video URL *">
                        <Textarea value={modal.form.video} onChange={(e) => handleChange("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
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
// SUCCESS STORIES SECTION
// ═══════════════════════════════════════════════════════════════════════════════
const STORY_DEFAULT = { tag: "SUCCESS STORY", text: "", image: "", alt: "", videoUrl: "", duration: "", durationAt1_2x: "" };

const SuccessStoriesSection = ({ items = [], pageId, onSaved, showToast }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...STORY_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...items[idx] } });
    const closeModal = () => setModal(null);

    const handleChange = (field, val) =>
        setModal((m) => ({ ...m, form: { ...m.form, [field]: val } }));

    const handleSave = async () => {
        if (!modal.form.text || !modal.form.videoUrl) {
            showToast("error", "Text and video URL are required");
            return;
        }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") {
                updated.push({ ...modal.form, id: items.length + 1 });
            } else {
                updated[modal.idx] = { ...modal.form, id: items[modal.idx].id };
            }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "successStories", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", modal.mode === "add" ? "Story added" : "Story updated");
                closeModal();
            }
        } catch (e) {
            showToast("error", e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this success story?")) return;
        const updated = items
            .filter((_, i) => i !== idx)
            .map((s, i) => ({ ...s, id: i + 1 }));
        try {
            const res = await upsertAdditionalFieldAPI(pageId, { key: "successStories", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                showToast("success", "Story deleted");
            }
        } catch (e) {
            showToast("error", e.message || "Delete failed");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader
                icon={Star}
                title="Success Stories"
                count={items.length}
                color="bg-amber-500"
                onAdd={openAdd}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((s, i) => (
                    <div key={s.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100">
                        <div className="relative h-44 bg-slate-100">
                            {s.image ? (
                                <Img src={s.image} alt={s.alt || "Story"}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <ImageIcon size={24} className="text-slate-300" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute top-3 left-3">
                                <span className="text-[10px] font-bold tracking-widest text-amber-400 bg-black/60 px-2 py-1 rounded-full">
                                    {s.tag}
                                </span>
                            </div>
                            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => openEdit(i)}
                                    className="p-1.5 bg-white rounded-lg text-slate-700 hover:bg-slate-100">
                                    <Pencil size={13} />
                                </button>
                                <button onClick={() => handleDelete(i)}
                                    className="p-1.5 bg-white rounded-lg text-rose-600 hover:bg-rose-50">
                                    <Trash2 size={13} />
                                </button>
                            </div>
                            {s.duration && (
                                <div className="absolute bottom-3 right-3">
                                    <span className="text-[10px] font-semibold bg-black/60 text-white px-2 py-0.5 rounded">
                                        {s.duration}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{s.text}</p>
                            {s.videoUrl && (
                                <a href={s.videoUrl} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-sky-600 hover:text-sky-800">
                                    <Link size={11} /> Watch video
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal
                    title={modal.mode === "add" ? "Add Success Story" : "Edit Success Story"}
                    onClose={closeModal}
                    onSave={handleSave}
                    saving={saving}
                >
                    <Field label="Tag">
                        <Input value={modal.form.tag} onChange={(e) => handleChange("tag", e.target.value)} placeholder="SUCCESS STORY" />
                    </Field>
                    <Field label="Text *">
                        <Textarea value={modal.form.text} onChange={(e) => handleChange("text", e.target.value)} placeholder="Story description..." />
                    </Field>
                    <Field label="Thumbnail Image Path">
                        <Input value={modal.form.image} onChange={(e) => handleChange("image", e.target.value)} placeholder="/ecom/testimonials/1.png" />
                    </Field>
                    <Field label="Image Alt Text">
                        <Input value={modal.form.alt} onChange={(e) => handleChange("alt", e.target.value)} placeholder="Descriptive alt text..." />
                    </Field>
                    <Field label="Video URL *">
                        <Textarea value={modal.form.videoUrl} onChange={(e) => handleChange("videoUrl", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Duration">
                            <Input value={modal.form.duration} onChange={(e) => handleChange("duration", e.target.value)} placeholder="4:27" />
                        </Field>
                        <Field label="Duration at 1.2x">
                            <Input value={modal.form.durationAt1_2x} onChange={(e) => handleChange("durationAt1_2x", e.target.value)} placeholder="3:43" />
                        </Field>
                    </div>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const D2CPage = () => {
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState(null);

    const showToast = useCallback((type, message) => {
        setToast({ type, message });
    }, []);

    const handleSaved = useCallback((updatedFields) => {
        setPage((prev) => ({
            ...prev,
            additionalFields: updatedFields,
        }));
    }, []);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await getPageAPI(PAGE_SLUG);
                if (res.success) setPage(res.data);
                else showToast("error", res.message || "Failed to load page");
            } catch (e) {
                showToast("error", e.message || "Failed to load page");
            } finally {
                setLoading(false);
            }
        };
        fetchPage();
    }, [showToast]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex items-center gap-3 text-slate-500">
                    <Loader2 size={22} className="animate-spin" />
                    <span className="text-sm font-medium">Loading D2C page data...</span>
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

    const { testimonials = [], sliderVideos = [], successStories = [] } = page.additionalFields || {};

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-5">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Admin Panel</span>
                            <span className="text-slate-200">›</span>
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Pages</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">{page.title}</h1>
                        <p className="text-sm text-slate-400 mt-0.5 font-mono">/{page.url}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                        {[
                            { label: "Testimonials", val: testimonials.length, color: "bg-violet-50 text-violet-700" },
                            { label: "Videos", val: sliderVideos.length, color: "bg-sky-50 text-sky-700" },
                            { label: "Stories", val: successStories.length, color: "bg-amber-50 text-amber-700" },
                        ].map((s) => (
                            <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                {s.val} {s.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sections */}
            <TestimonialsSection
                items={testimonials}
                pageId={page._id}
                onSaved={handleSaved}
                showToast={showToast}
            />
            <SliderVideosSection
                items={sliderVideos}
                pageId={page._id}
                onSaved={handleSaved}
                showToast={showToast}
            />
            <SuccessStoriesSection
                items={successStories}
                pageId={page._id}
                onSaved={handleSaved}
                showToast={showToast}
            />

            {/* Toast */}
            {toast && <Toast toast={toast} onClose={() => setToast(null)} />}
        </div>
    );
};

export default D2CPage;