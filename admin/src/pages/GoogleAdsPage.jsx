import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    getPageAPI,
    upsertAdditionalFieldAPI,
} from "../utils/pageapi";
import {
    Pencil, Trash2, Plus, X, Save, Loader2,
    Star, BarChart2, AlertCircle, Link,
    Image as ImageIcon, ChevronDown, ChevronUp,
    TrendingUp, LayoutGrid, GalleryHorizontal,
    Layers, Tag
} from "lucide-react";

// ─── PAGE SLUG ─────────────────────────────────────────────────────────────────
const PAGE_SLUG = "google-ad-agency";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════════════════
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
        {onAdd && (
            <button onClick={onAdd}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors">
                <Plus size={15} /> Add New
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
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">{children}</div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
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

const Field = ({ label, hint, children }) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">{label}</label>
        {children}
        {hint && <p className="text-[11px] text-slate-400 mt-1">{hint}</p>}
    </div>
);

const Input = (props) => (
    <input {...props}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400" />
);

const Textarea = (props) => (
    <textarea {...props} rows={props.rows || 3}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none" />
);

const Toggle = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer select-none">
        <div onClick={() => onChange(!checked)}
            className={`relative w-10 h-5 rounded-full transition-colors ${checked ? "bg-slate-800" : "bg-slate-200"}`}>
            <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? "translate-x-5" : ""}`} />
        </div>
        <span className="text-sm text-slate-700">{label}</span>
    </label>
);

const ColorSwatch = ({ hex }) =>
    hex ? <span className="inline-block w-4 h-4 rounded border border-slate-200 align-middle ml-2" style={{ background: hex }} /> : null;

const SectionDivider = ({ label }) => (
    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-1">{label}</p>
);

// ═══════════════════════════════════════════════════════════════════════════════
// 1. CARDS DATA
// ═══════════════════════════════════════════════════════════════════════════════
const CARD_DEFAULT = {
    type: "blue",
    bg: "bg-[#0076F0]",
    text: "text-white",
    border: "border border-[#0076F0]",
    category: "",
    title: "",
    description: "",
    images: ["", "", ""],
};

const CardsDataSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: JSON.parse(JSON.stringify(CARD_DEFAULT)) });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: JSON.parse(JSON.stringify({ ...CARD_DEFAULT, ...items[idx] })) });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    // Image array helpers
    const setImage = (i, val) =>
        setModal((m) => {
            const imgs = [...(m.form.images || ["", "", ""])];
            imgs[i] = val;
            return { ...m, form: { ...m.form, images: imgs } };
        });

    const addImage = () =>
        setModal((m) => ({ ...m, form: { ...m.form, images: [...(m.form.images || []), ""] } }));

    const removeImage = (i) =>
        setModal((m) => {
            const imgs = (m.form.images || []).filter((_, idx) => idx !== i);
            return { ...m, form: { ...m.form, images: imgs } };
        });

    const handleSave = async () => {
        if (!modal.form.title || !modal.form.category) { toast.error("Category and Title are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form, images: modal.form.images.filter(Boolean) };
            if (modal.mode === "add") { entry.id = items.length + 1; updated.push(entry); }
            else { entry.id = items[modal.idx].id; updated[modal.idx] = entry; }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "cardsData", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Card added" : "Card updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this card?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx).map((c, i) => ({ ...c, id: i + 1 }));
            const res = await upsertAdditionalFieldAPI(pageId, { key: "cardsData", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Card deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={LayoutGrid} title="Process Cards" count={items.length} color="bg-blue-600" onAdd={openAdd} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((card, i) => (
                    <div key={card.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100">
                        {/* Colored header strip */}
                        <div className={`px-4 py-3 flex items-center justify-between ${card.bg}`}>
                            <div>
                                <p className={`text-[10px] font-bold tracking-widest uppercase opacity-70 ${card.text}`}>
                                    {card.category}
                                </p>
                                <p className={`text-sm font-bold mt-0.5 ${card.text}`}>{card.title}</p>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => openEdit(i)}
                                    className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg transition-colors">
                                    <Pencil size={13} className="text-white" />
                                </button>
                                <button onClick={() => handleDelete(i)}
                                    className="p-1.5 bg-white/20 hover:bg-rose-500 rounded-lg transition-colors">
                                    <Trash2 size={13} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-slate-50">
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: card.description }} />

                            {/* Image previews */}
                            {card.images?.length > 0 && (
                                <div className="flex gap-1.5 mt-3">
                                    {card.images.slice(0, 3).map((img, ii) => (
                                        <div key={ii} className="w-14 h-10 rounded border border-slate-200 overflow-hidden bg-white">
                                            {img ? (
                                                <img src={img} alt="" className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = "none"; }} />
                                            ) : (
                                                <div className="flex items-center justify-center h-full">
                                                    <ImageIcon size={12} className="text-slate-300" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {card.images.length > 3 && (
                                        <div className="w-14 h-10 rounded border border-slate-200 bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-500">
                                            +{card.images.length - 3}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-[9px] font-mono bg-white border border-slate-200 text-slate-400 px-1.5 py-0.5 rounded">
                                    {card.type}
                                </span>
                                <span className="text-[9px] font-mono text-slate-400">#{card.id}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Process Card" : "Edit Process Card"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Category *">
                            <Input value={modal.form.category} onChange={(e) => set("category", e.target.value)}
                                placeholder="SAFETY CHECK" />
                        </Field>
                        <Field label="Type">
                            <select value={modal.form.type} onChange={(e) => set("type", e.target.value)}
                                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50">
                                <option value="blue">Blue</option>
                                <option value="white">White</option>
                            </select>
                        </Field>
                    </div>

                    <Field label="Title *">
                        <Input value={modal.form.title} onChange={(e) => set("title", e.target.value)}
                            placeholder="Pre-Launch Review And Launch" />
                    </Field>

                    <Field label="Description (HTML supported)" hint="Use &lt;strong&gt; tags for bold text">
                        <Textarea rows={5} value={modal.form.description} onChange={(e) => set("description", e.target.value)}
                            placeholder="Most agencies... <strong>We Do This.</strong>" />
                    </Field>

                    <SectionDivider label="Styling (Tailwind Classes)" />
                    <div className="grid grid-cols-3 gap-3">
                        <Field label="BG Class">
                            <Input value={modal.form.bg} onChange={(e) => set("bg", e.target.value)}
                                placeholder="bg-[#0076F0]" />
                        </Field>
                        <Field label="Text Class">
                            <Input value={modal.form.text} onChange={(e) => set("text", e.target.value)}
                                placeholder="text-white" />
                        </Field>
                        <Field label="Border Class">
                            <Input value={modal.form.border} onChange={(e) => set("border", e.target.value)}
                                placeholder="border border-[#0076F0]" />
                        </Field>
                    </div>

                    {/* Live preview strip */}
                    <div className={`rounded-lg px-4 py-3 ${modal.form.bg} ${modal.form.border}`}>
                        <p className={`text-[10px] font-bold tracking-widest uppercase opacity-70 ${modal.form.text}`}>
                            {modal.form.category || "CATEGORY"}
                        </p>
                        <p className={`text-sm font-bold ${modal.form.text}`}>{modal.form.title || "Title Preview"}</p>
                    </div>

                    <SectionDivider label="Images" />
                    <div className="space-y-2">
                        {(modal.form.images || []).map((img, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-10 h-8 rounded border border-slate-200 overflow-hidden bg-slate-100 shrink-0">
                                    {img ? (
                                        <img src={img} alt="" className="w-full h-full object-cover"
                                            onError={(e) => { e.target.style.display = "none"; }} />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <ImageIcon size={10} className="text-slate-300" />
                                        </div>
                                    )}
                                </div>
                                <Input value={img} onChange={(e) => setImage(i, e.target.value)}
                                    placeholder={`/google-ads/sliderimg/Image${i + 1}.webp`} />
                                <button onClick={() => removeImage(i)}
                                    className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 shrink-0 transition-colors">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                        <button onClick={addImage}
                            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors mt-1">
                            <Plus size={13} /> Add image
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. TESTIMONIALS (shared across SEO / Google / Meta)
// ═══════════════════════════════════════════════════════════════════════════════
const TESTIMONIAL_DEFAULT = {
    rating: 5, title: "", quote: "", author: "", position: "",
    avatar: "", company: "", bgColor: "bg-white", borderColor: "",
    textColor: "", hasVideo: false, video: "", hasAvatar: false,
    hasHighlight: false, highlightCss: "", textLarge: false,
    isPaddngMore: false, arrowcss: "",
};

const TestimonialsSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const display = showAll ? items : items.slice(0, 6);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...TESTIMONIAL_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...TESTIMONIAL_DEFAULT, ...items[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSave = async () => {
        if (!modal.form.author || !modal.form.title) { toast.error("Author and Title are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form };
            Object.keys(entry).forEach((k) => { if (entry[k] === "" || entry[k] === false || entry[k] === null) delete entry[k]; });

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
                {display.map((t, i) => (
                    <div key={t.id || i}
                        className={`relative rounded-xl border p-4 group ${t.borderColor || "border-slate-200"} ${t.bgColor || "bg-white"}`}>
                        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-black/10 rounded-lg">
                                <Pencil size={13} className={t.textColor === "text-white" ? "text-white" : "text-slate-500"} />
                            </button>
                            <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg">
                                <Trash2 size={13} className="text-rose-500" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2.5 mb-3 pr-16">
                            {t.avatar && (
                                <img src={t.avatar} alt={t.author}
                                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            )}
                            <div className="min-w-0">
                                <p className={`text-sm font-semibold truncate ${t.textColor || "text-slate-800"}`}>{t.author}</p>
                                <p className={`text-xs truncate ${t.textColor === "text-white" ? "text-white/70" : "text-slate-400"}`}>{t.position}</p>
                            </div>
                        </div>

                        <p className={`text-xs font-semibold mb-1 line-clamp-2 ${t.textColor || "text-slate-700"}`}>{t.title}</p>
                        {t.quote && (
                            <p className={`text-xs leading-relaxed line-clamp-2 mt-1 ${t.textColor === "text-white" ? "text-white/70" : "text-slate-500"}`}>
                                {t.quote}
                            </p>
                        )}

                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                            <div className="flex gap-0.5">
                                {[...Array(t.rating || 5)].map((_, j) => (
                                    <Star key={j} size={10} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <div className="flex gap-1 ml-auto flex-wrap">
                                {t.hasVideo && <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">VIDEO</span>}
                                {t.hasHighlight && <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">HIGHLIGHT</span>}
                                {t.textLarge && <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">LARGE</span>}
                            </div>
                        </div>
                        <span className="text-[9px] font-mono text-slate-400 bg-white/60 px-1.5 py-0.5 rounded mt-2 inline-block">{t.bgColor}</span>
                    </div>
                ))}
            </div>

            {items.length > 6 && (
                <button onClick={() => setShowAll((s) => !s)}
                    className="mt-4 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors mx-auto">
                    {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    {showAll ? "Show less" : `Show ${items.length - 6} more`}
                </button>
            )}

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Testimonial" : "Edit Testimonial"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Author *"><Input value={modal.form.author} onChange={(e) => set("author", e.target.value)} placeholder="John Doe, CEO" /></Field>
                        <Field label="Position"><Input value={modal.form.position} onChange={(e) => set("position", e.target.value)} placeholder="Co-Founder at Acme" /></Field>
                    </div>
                    <Field label="Title *"><Input value={modal.form.title} onChange={(e) => set("title", e.target.value)} placeholder="How Upthrust helped..." /></Field>
                    <Field label="Quote"><Textarea value={modal.form.quote} onChange={(e) => set("quote", e.target.value)} placeholder="Longer optional quote..." /></Field>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Avatar Path"><Input value={modal.form.avatar} onChange={(e) => set("avatar", e.target.value)} placeholder="/google-ads/review/img1.webp" /></Field>
                        <Field label="Company Logo Path"><Input value={modal.form.company} onChange={(e) => set("company", e.target.value)} placeholder="/google-ads/review/clogo1.webp" /></Field>
                    </div>

                    <SectionDivider label="Styling" />
                    <div className="grid grid-cols-3 gap-3">
                        <Field label="Rating"><Input type="number" min="1" max="5" value={modal.form.rating} onChange={(e) => set("rating", Number(e.target.value))} /></Field>
                        <Field label="BG Color"><Input value={modal.form.bgColor} onChange={(e) => set("bgColor", e.target.value)} placeholder="bg-white" /></Field>
                        <Field label="Text Color"><Input value={modal.form.textColor} onChange={(e) => set("textColor", e.target.value)} placeholder="text-white" /></Field>
                    </div>
                    <Field label="Border Color"><Input value={modal.form.borderColor} onChange={(e) => set("borderColor", e.target.value)} placeholder="border-[#FE2B27]" /></Field>

                    <SectionDivider label="Flags" />
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        <Toggle label="Has Video" checked={!!modal.form.hasVideo} onChange={(v) => set("hasVideo", v)} />
                        <Toggle label="Has Avatar" checked={!!modal.form.hasAvatar} onChange={(v) => set("hasAvatar", v)} />
                        <Toggle label="Has Highlight" checked={!!modal.form.hasHighlight} onChange={(v) => set("hasHighlight", v)} />
                        <Toggle label="Large Text" checked={!!modal.form.textLarge} onChange={(v) => set("textLarge", v)} />
                        <Toggle label="More Padding" checked={!!modal.form.isPaddngMore} onChange={(v) => set("isPaddngMore", v)} />
                    </div>

                    {modal.form.hasVideo && (
                        <Field label="Video URL">
                            <Textarea value={modal.form.video} onChange={(e) => set("video", e.target.value)} placeholder="https://cdn.example.com/video.mp4" />
                            {modal.form.video && (
                                <a href={modal.form.video} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 mt-1 text-xs text-sky-600 hover:text-sky-800">
                                    <Link size={12} /> Preview video
                                </a>
                            )}
                        </Field>
                    )}
                    {modal.form.hasHighlight && (
                        <Field label="Highlight CSS" hint="Tailwind classes for the underline element">
                            <Input value={modal.form.highlightCss} onChange={(e) => set("highlightCss", e.target.value)} placeholder="absolute -bottom-2 w-45 h-2 left-1" />
                        </Field>
                    )}

                    <SectionDivider label="Advanced (optional)" />
                    <Field label="Arrow CSS" hint="Tailwind classes for the decorative arrow element">
                        <Input value={modal.form.arrowcss} onChange={(e) => set("arrowcss", e.target.value)} placeholder="absolute -right-4 top-15 size-19 ..." />
                    </Field>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. DEFAULT CASE STUDIES (same structure as SEO page)
// ═══════════════════════════════════════════════════════════════════════════════
const CASE_STUDY_DEFAULT = {
    badge: "", title: "", description: "",
    metrics: { metric1: { label: "", value: "" }, metric2: { label: "", value: "" } },
    testimonial: { name: "", role: "", avatar: "" },
    accentColor: "#0076F0", bgColor: "#E7F0FF",
    rightImage: "", imageAlt: "", showArrow: true,
};

const CaseStudiesSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const openAdd = () => setModal({ mode: "add", idx: null, form: JSON.parse(JSON.stringify(CASE_STUDY_DEFAULT)) });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: JSON.parse(JSON.stringify({ ...CASE_STUDY_DEFAULT, ...items[idx] })) });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));
    const setMetric = (key, field, val) =>
        setModal((m) => ({ ...m, form: { ...m.form, metrics: { ...m.form.metrics, [key]: { ...m.form.metrics[key], [field]: val } } } }));
    const setTestimonial = (field, val) =>
        setModal((m) => ({ ...m, form: { ...m.form, testimonial: { ...m.form.testimonial, [field]: val } } }));

    const handleSave = async () => {
        if (!modal.form.title || !modal.form.badge) { toast.error("Badge and Title are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") updated.push(modal.form);
            else updated[modal.idx] = modal.form;
            const res = await upsertAdditionalFieldAPI(pageId, { key: "defaultCaseStudies", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Case study added" : "Case study updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this case study?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx);
            const res = await upsertAdditionalFieldAPI(pageId, { key: "defaultCaseStudies", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Case study deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={BarChart2} title="Case Studies" count={items.length} color="bg-sky-600" onAdd={openAdd} />

            <div className="space-y-3">
                {items.map((cs, i) => {
                    const isOpen = expanded === i;
                    return (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden"
                            style={{ borderLeftColor: cs.accentColor, borderLeftWidth: 4 }}>
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
                                <button onClick={() => setExpanded(isOpen ? null : i)}
                                    className="flex items-center gap-3 flex-1 min-w-0 text-left">
                                    <div className="w-8 h-8 rounded-lg shrink-0 border border-slate-200 flex items-center justify-center"
                                        style={{ background: cs.bgColor }}>
                                        <TrendingUp size={13} style={{ color: cs.accentColor }} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                                                style={{ background: cs.accentColor }}>{cs.badge}</span>
                                            <span className="text-sm font-semibold text-slate-800 truncate">{cs.title}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 truncate mt-0.5">{cs.description}</p>
                                    </div>
                                    <div className="shrink-0 text-slate-400">{isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</div>
                                </button>
                                <div className="flex gap-1 shrink-0">
                                    <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"><Pencil size={13} /></button>
                                    <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={13} /></button>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Metrics</p>
                                        {[cs.metrics?.metric1, cs.metrics?.metric2].map((m, mi) => m && (
                                            <div key={mi} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: cs.bgColor }}>
                                                <span className="text-lg font-bold" style={{ color: cs.accentColor }}>{m.value}</span>
                                                <span className="text-xs text-slate-600">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client</p>
                                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                                            {cs.testimonial?.avatar && (
                                                <img src={cs.testimonial.avatar} alt={cs.testimonial.name}
                                                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                                                    onError={(e) => { e.target.style.display = "none"; }} />
                                            )}
                                            <div>
                                                <p className="text-sm font-semibold text-slate-700">{cs.testimonial?.name}</p>
                                                <p className="text-xs text-slate-400">{cs.testimonial?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Image</p>
                                        <div className="h-24 rounded-lg border border-slate-100 overflow-hidden bg-slate-50">
                                            {cs.rightImage ? (
                                                <img src={cs.rightImage} alt={cs.imageAlt || ""} className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = "none"; }} />
                                            ) : (
                                                <div className="flex items-center justify-center h-full"><ImageIcon size={18} className="text-slate-300" /></div>
                                            )}
                                        </div>
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${cs.showArrow ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                            Arrow: {cs.showArrow ? "on" : "off"}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {items.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No case studies yet
                    </div>
                )}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Case Study" : "Edit Case Study"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Badge *"><Input value={modal.form.badge} onChange={(e) => set("badge", e.target.value)} placeholder="SaaS / B2B / Ecommerce" /></Field>
                        <Field label="Title *"><Input value={modal.form.title} onChange={(e) => set("title", e.target.value)} placeholder="Company Name" /></Field>
                    </div>
                    <Field label="Description"><Textarea value={modal.form.description} onChange={(e) => set("description", e.target.value)} placeholder="What was done and achieved..." /></Field>

                    <SectionDivider label="Metrics" />
                    <div className="grid grid-cols-2 gap-4">
                        {["metric1", "metric2"].map((key, ki) => (
                            <div key={key} className="space-y-2 p-3 bg-slate-50 rounded-xl">
                                <p className="text-xs font-semibold text-slate-600">Metric {ki + 1}</p>
                                <Field label="Value"><Input value={modal.form.metrics[key].value} onChange={(e) => setMetric(key, "value", e.target.value)} placeholder="48%" /></Field>
                                <Field label="Label"><Input value={modal.form.metrics[key].label} onChange={(e) => setMetric(key, "label", e.target.value)} placeholder="Number of Demos" /></Field>
                            </div>
                        ))}
                    </div>

                    <SectionDivider label="Client" />
                    <div className="grid grid-cols-3 gap-3">
                        <Field label="Name"><Input value={modal.form.testimonial.name} onChange={(e) => setTestimonial("name", e.target.value)} placeholder="Nik" /></Field>
                        <Field label="Role"><Input value={modal.form.testimonial.role} onChange={(e) => setTestimonial("role", e.target.value)} placeholder="CEO, WLNC" /></Field>
                        <Field label="Avatar"><Input value={modal.form.testimonial.avatar} onChange={(e) => setTestimonial("avatar", e.target.value)} placeholder="/compaigns/1.webp" /></Field>
                    </div>

                    <SectionDivider label="Colors" />
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Accent Color (hex)">
                            <div className="flex items-center gap-2">
                                <Input value={modal.form.accentColor} onChange={(e) => set("accentColor", e.target.value)} placeholder="#0076F0" />
                                <ColorSwatch hex={modal.form.accentColor} />
                            </div>
                        </Field>
                        <Field label="BG Color (hex)">
                            <div className="flex items-center gap-2">
                                <Input value={modal.form.bgColor} onChange={(e) => set("bgColor", e.target.value)} placeholder="#E7F0FF" />
                                <ColorSwatch hex={modal.form.bgColor} />
                            </div>
                        </Field>
                    </div>

                    <SectionDivider label="Card Image" />
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Right Image Path"><Input value={modal.form.rightImage} onChange={(e) => set("rightImage", e.target.value)} placeholder="/google-ads/compaigns/card1.webp" /></Field>
                        <Field label="Alt Text"><Input value={modal.form.imageAlt} onChange={(e) => set("imageAlt", e.target.value)} placeholder="Dashboard screenshot" /></Field>
                    </div>
                    {modal.form.rightImage && (
                        <div className="w-full h-28 rounded-xl overflow-hidden border border-slate-200">
                            <img src={modal.form.rightImage} alt="" className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = "none"; }} />
                        </div>
                    )}
                    <Toggle label="Show Arrow" checked={!!modal.form.showArrow} onChange={(v) => set("showArrow", v)} />
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. IMAGE DATA (screenshots with title + HTML description)
// ═══════════════════════════════════════════════════════════════════════════════
const IMAGE_DATA_DEFAULT = { src: "", alt: "", title: "", description: "" };

const ImageDataSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...IMAGE_DATA_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...IMAGE_DATA_DEFAULT, ...items[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSave = async () => {
        if (!modal.form.title) { toast.error("Title is required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form };
            if (modal.mode === "add") { entry.id = items.length + 1; updated.push(entry); }
            else { entry.id = items[modal.idx].id; updated[modal.idx] = entry; }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "imageData", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Screenshot added" : "Screenshot updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this screenshot entry?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx).map((d, i) => ({ ...d, id: i + 1 }));
            const res = await upsertAdditionalFieldAPI(pageId, { key: "imageData", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Screenshot deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={GalleryHorizontal} title="Screenshot Gallery" count={items.length} color="bg-emerald-600" onAdd={openAdd} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((img, i) => (
                    <div key={img.id || i} className="group relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                        {/* Screenshot preview */}
                        <div className="relative h-40 bg-slate-100">
                            {img.src ? (
                                <img src={img.src} alt={img.alt || ""}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <ImageIcon size={24} className="text-slate-300" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                                <button onClick={() => openEdit(i)} className="p-2 bg-white rounded-lg text-slate-700 hover:bg-slate-100">
                                    <Pencil size={14} />
                                </button>
                                <button onClick={() => handleDelete(i)} className="p-2 bg-white rounded-lg text-rose-600 hover:bg-rose-50">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                            <div className="absolute top-2 left-2">
                                <span className="text-[10px] font-bold bg-black/60 text-white px-1.5 py-0.5 rounded-md">#{img.id}</span>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-3">
                            <p className="text-sm font-semibold text-slate-800 line-clamp-1">{img.title}</p>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: img.description?.replace(/<br\/><br\/>/g, " ") }} />
                            {img.alt && (
                                <p className="text-[10px] font-mono text-slate-300 mt-2 truncate">{img.alt}</p>
                            )}
                        </div>
                    </div>
                ))}

                {items.length === 0 && (
                    <div className="col-span-full flex items-center justify-center h-24 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No screenshots yet
                    </div>
                )}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Screenshot" : "Edit Screenshot"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <Field label="Image Path (src)">
                        <Input value={modal.form.src} onChange={(e) => set("src", e.target.value)}
                            placeholder="/google-ads/screenshot/1.png" />
                        {modal.form.src && (
                            <div className="mt-2 w-full h-32 rounded-xl overflow-hidden border border-slate-200">
                                <img src={modal.form.src} alt="" className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                        )}
                    </Field>

                    <Field label="Alt Text">
                        <Input value={modal.form.alt} onChange={(e) => set("alt", e.target.value)}
                            placeholder="Google Ads Analytics Dashboard" />
                    </Field>

                    <Field label="Title *">
                        <Input value={modal.form.title} onChange={(e) => set("title", e.target.value)}
                            placeholder="$20K monthly spend | $185/demo" />
                    </Field>

                    <Field label="Description (HTML supported)" hint="Use &lt;br/&gt;&lt;br/&gt; for paragraph breaks">
                        <Textarea rows={6} value={modal.form.description} onChange={(e) => set("description", e.target.value)}
                            placeholder={`WLNC needed qualified demos...<br/><br/>We rebuilt their system...`} />
                    </Field>

                    {/* Live HTML preview */}
                    {modal.form.description && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Preview</p>
                            <p className="text-xs text-slate-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: modal.form.description }} />
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const GoogleAdAgencyPage = () => {
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
                    <span className="text-sm font-medium">Loading Google Ad Agency page...</span>
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
    const cardsData = af.cardsData || [];
    const testimonials = af.testimonials || [];
    const caseStudies = af.defaultCaseStudies || [];
    const imageData = af.imageData || [];

    return (
        <div className="space-y-6">
            {/* ── Page Header ── */}
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
                            { label: "Process Cards", val: cardsData.length, color: "bg-blue-50 text-blue-700" },
                            { label: "Testimonials", val: testimonials.length, color: "bg-amber-50 text-amber-700" },
                            { label: "Case Studies", val: caseStudies.length, color: "bg-sky-50 text-sky-700" },
                            { label: "Screenshots", val: imageData.length, color: "bg-emerald-50 text-emerald-700" },
                        ].map((s) => (
                            <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                {s.val} {s.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Sections ── */}
            <CardsDataSection items={cardsData} pageId={page._id} onSaved={handleSaved} />
            <TestimonialsSection items={testimonials} pageId={page._id} onSaved={handleSaved} />
            <CaseStudiesSection items={caseStudies} pageId={page._id} onSaved={handleSaved} />
            <ImageDataSection items={imageData} pageId={page._id} onSaved={handleSaved} />
        </div>
    );
};

export default GoogleAdAgencyPage;