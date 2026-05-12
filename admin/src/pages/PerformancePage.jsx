import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    getPageAPI,
    upsertAdditionalFieldAPI,
} from "../utils/pageapi";
import {
    Pencil, Trash2, Plus, X, Save, Loader2,
    AlertCircle, Image as ImageIcon, Link,
    ChevronDown, ChevronUp, Layers, Users,
    CreditCard, Columns, CheckSquare
} from "lucide-react";

// ─── PAGE SLUG ─────────────────────────────────────────────────────────────────
const PAGE_SLUG = "performance-marketing-agency";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════════════════
const SectionHeader = ({ icon: Icon, title, count, color, onAdd }) => (
    <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${color}`}><Icon size={18} className="text-white" /></div>
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

const Divider = ({ label }) => (
    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-1 border-t border-slate-100">{label}</p>
);

// ═══════════════════════════════════════════════════════════════════════════════
// 1. PANELS
// ═══════════════════════════════════════════════════════════════════════════════
const PANEL_DEFAULT = { label: "", tagline: "", checks: [""], cta: "", image: "" };

const PanelsSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const openAdd = () => setModal({ mode: "add", idx: null, form: JSON.parse(JSON.stringify(PANEL_DEFAULT)) });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: JSON.parse(JSON.stringify({ ...PANEL_DEFAULT, ...items[idx] })) });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    // checks array helpers
    const setCheck = (i, val) => setModal((m) => {
        const checks = [...m.form.checks];
        checks[i] = val;
        return { ...m, form: { ...m.form, checks } };
    });
    const addCheck = () => setModal((m) => ({ ...m, form: { ...m.form, checks: [...m.form.checks, ""] } }));
    const removeCheck = (i) => setModal((m) => ({
        ...m, form: { ...m.form, checks: m.form.checks.filter((_, ci) => ci !== i) }
    }));

    const handleSave = async () => {
        if (!modal.form.label) { toast.error("Label is required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form, checks: modal.form.checks.filter(Boolean) };
            if (modal.mode === "add") { entry.id = items.length + 1; updated.push(entry); }
            else { entry.id = items[modal.idx].id; updated[modal.idx] = entry; }

            const res = await upsertAdditionalFieldAPI(pageId, { key: "PANELS", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Panel added" : "Panel updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this panel?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx).map((p, i) => ({ ...p, id: i + 1 }));
            const res = await upsertAdditionalFieldAPI(pageId, { key: "PANELS", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Panel deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={Layers} title="Panels" count={items.length} color="bg-violet-600" onAdd={openAdd} />

            <div className="space-y-3">
                {items.map((panel, i) => {
                    const isOpen = expanded === i;
                    return (
                        <div key={panel.id || i} className="border border-slate-200 rounded-xl overflow-hidden">
                            {/* Row */}
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
                                <button onClick={() => setExpanded(isOpen ? null : i)}
                                    className="flex items-center gap-3 flex-1 min-w-0 text-left">
                                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                                        <span className="text-xs font-bold text-violet-600">P{panel.id}</span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-slate-800 truncate">{panel.label}</p>
                                        <p className="text-xs text-slate-400 truncate mt-0.5">{panel.tagline}</p>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-[10px] bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full font-semibold">
                                            {panel.checks?.length || 0} checks
                                        </span>
                                        {isOpen ? <ChevronUp size={15} className="text-slate-400" /> : <ChevronDown size={15} className="text-slate-400" />}
                                    </div>
                                </button>
                                <div className="flex gap-1 shrink-0">
                                    <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"><Pencil size={13} /></button>
                                    <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={13} /></button>
                                </div>
                            </div>

                            {/* Expanded */}
                            {isOpen && (
                                <div className="px-4 py-4 bg-white grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {/* Checks */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Checklist</p>
                                        <ul className="space-y-1">
                                            {(panel.checks || []).map((c, ci) => (
                                                <li key={ci} className="flex items-start gap-2 text-xs text-slate-600">
                                                    <CheckSquare size={12} className="text-violet-500 mt-0.5 shrink-0" />
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* CTA */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">CTA</p>
                                        <div className="p-3 bg-violet-50 rounded-lg">
                                            <p className="text-sm font-semibold text-violet-800">{panel.cta}</p>
                                        </div>
                                    </div>
                                    {/* Image */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Image</p>
                                        <div className="h-24 rounded-lg overflow-hidden border border-slate-100 bg-slate-50">
                                            {panel.image ? (
                                                <img src={panel.image} alt="" className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = "none"; }} />
                                            ) : (
                                                <div className="flex items-center justify-center h-full"><ImageIcon size={18} className="text-slate-300" /></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {items.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">No panels yet</div>
                )}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Panel" : "Edit Panel"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <Field label="Label *">
                        <Input value={modal.form.label} onChange={(e) => set("label", e.target.value)} placeholder="Panel 1: Audit & Roadmap" />
                    </Field>
                    <Field label="Tagline">
                        <Textarea value={modal.form.tagline} onChange={(e) => set("tagline", e.target.value)} placeholder="Find the holes in your ad account..." />
                    </Field>
                    <Field label="CTA">
                        <Input value={modal.form.cta} onChange={(e) => set("cta", e.target.value)} placeholder="Audit turnaround → 72 hrs." />
                    </Field>
                    <Field label="Image Path">
                        <Input value={modal.form.image} onChange={(e) => set("image", e.target.value)} placeholder="/performance-agency/panel/panel1.png" />
                        {modal.form.image && (
                            <div className="mt-2 w-full h-28 rounded-xl overflow-hidden border border-slate-200">
                                <img src={modal.form.image} alt="" className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                        )}
                    </Field>

                    <Divider label="Checklist Items" />
                    <div className="space-y-2">
                        {(modal.form.checks || []).map((c, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckSquare size={14} className="text-violet-400 shrink-0" />
                                <Input value={c} onChange={(e) => setCheck(i, e.target.value)} placeholder="e.g. Wasted spend identified" />
                                <button onClick={() => removeCheck(i)}
                                    className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 shrink-0 transition-colors">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                        <button onClick={addCheck}
                            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors mt-1">
                            <Plus size={13} /> Add check item
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 2. PROFILES
// ═══════════════════════════════════════════════════════════════════════════════
const PROFILE_DEFAULT = { name: "", img: "", text: "", person: "", role: "" };

const ProfilesSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...PROFILE_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...PROFILE_DEFAULT, ...items[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSave = async () => {
        if (!modal.form.name || !modal.form.person) { toast.error("Brand name and person are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            if (modal.mode === "add") updated.push(modal.form);
            else updated[modal.idx] = modal.form;

            const res = await upsertAdditionalFieldAPI(pageId, { key: "profiles", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Profile added" : "Profile updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this profile?")) return;
        try {
            const updated = items.filter((_, i) => i !== idx);
            const res = await upsertAdditionalFieldAPI(pageId, { key: "profiles", value: updated });
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Profile deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <SectionHeader icon={Users} title="Client Profiles" count={items.length} color="bg-teal-600" onAdd={openAdd} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((p, i) => (
                    <div key={i} className="group relative bg-slate-50 rounded-xl border border-slate-100 p-4">
                        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"><Pencil size={13} /></button>
                            <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={13} /></button>
                        </div>

                        <div className="flex items-center gap-3 mb-3 pr-14">
                            {p.img ? (
                                <img src={p.img} alt={p.name}
                                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            ) : (
                                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                                    <ImageIcon size={16} className="text-slate-400" />
                                </div>
                            )}
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-slate-800 truncate">{p.name}</p>
                                <p className="text-xs text-teal-600 font-medium truncate">{p.person}</p>
                                <p className="text-[11px] text-slate-400 truncate">{p.role}</p>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 italic">"{p.text}"</p>
                    </div>
                ))}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Profile" : "Edit Profile"}
                    onClose={closeModal} onSave={handleSave} saving={saving}>

                    <Field label="Brand Name *">
                        <Input value={modal.form.name} onChange={(e) => set("name", e.target.value)} placeholder="VEGA" />
                    </Field>
                    <Field label="Logo / Image Path">
                        <Input value={modal.form.img} onChange={(e) => set("img", e.target.value)} placeholder="/performance-agency/Profile.png" />
                        {modal.form.img && (
                            <div className="mt-2 w-16 h-16 rounded-xl overflow-hidden border border-slate-200">
                                <img src={modal.form.img} alt="" className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                        )}
                    </Field>
                    <Field label="Testimonial Text">
                        <Textarea value={modal.form.text} onChange={(e) => set("text", e.target.value)} placeholder="We've been consistently generating..." />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Person Name *">
                            <Input value={modal.form.person} onChange={(e) => set("person", e.target.value)} placeholder="Gaurav" />
                        </Field>
                        <Field label="Role">
                            <Input value={modal.form.role} onChange={(e) => set("role", e.target.value)} placeholder="Marketing Manager, Vega" />
                        </Field>
                    </div>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. CARDS DATA (Case study slider cards)
// ═══════════════════════════════════════════════════════════════════════════════
const CARD_DEFAULT = {
    img: "", category: "", title: "", price: "", text: "",
    problem: "",
    header1: "Revenue", header2: "Orders/month", header3: "Months",
    revenue: "", orders: "", months: "",
    quote: "", author: ""
};

const CardsDataSection = ({ items = [], pageId, onSaved }) => {
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const openAdd = () => setModal({ mode: "add", idx: null, form: { ...CARD_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", idx, form: { ...CARD_DEFAULT, ...items[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const handleSave = async () => {
        if (!modal.form.title || !modal.form.category) { toast.error("Category and Title are required"); return; }
        setSaving(true);
        try {
            const updated = [...items];
            const entry = { ...modal.form };
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
            <SectionHeader icon={CreditCard} title="Case Study Cards" count={items.length} color="bg-orange-500" onAdd={openAdd} />

            <div className="space-y-3">
                {items.map((card, i) => {
                    const isOpen = expanded === i;
                    return (
                        <div key={card.id || i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
                                <button onClick={() => setExpanded(isOpen ? null : i)}
                                    className="flex items-center gap-3 flex-1 min-w-0 text-left">
                                    {/* Thumbnail */}
                                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                                        {card.img ? (
                                            <img src={card.img} alt={card.title} className="w-full h-full object-cover"
                                                onError={(e) => { e.target.style.display = "none"; }} />
                                        ) : (
                                            <div className="flex items-center justify-center h-full"><ImageIcon size={14} className="text-slate-300" /></div>
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                                                {card.category}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-800 truncate">{card.title}</span>
                                        </div>
                                        <p className="text-xs text-emerald-600 font-semibold mt-0.5">{card.price}</p>
                                    </div>

                                    <div className="shrink-0 text-slate-400">{isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</div>
                                </button>
                                <div className="flex gap-1 shrink-0">
                                    <button onClick={() => openEdit(i)} className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"><Pencil size={13} /></button>
                                    <button onClick={() => handleDelete(i)} className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={13} /></button>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="px-4 py-4 bg-white grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {/* Metrics */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Metrics</p>
                                        <div className="space-y-2">
                                            {[
                                                { label: card.header1, val: card.revenue },
                                                { label: card.header2, val: card.orders },
                                                { label: card.header3, val: card.months },
                                            ].map((m, mi) => (
                                                <div key={mi} className="flex items-center justify-between bg-orange-50 rounded-lg px-3 py-2">
                                                    <span className="text-xs text-slate-500">{m.label}</span>
                                                    <span className="text-sm font-bold text-orange-700">{m.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Problem */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Problem</p>
                                        <p className="text-xs text-slate-600 leading-relaxed">{card.problem}</p>
                                    </div>
                                    {/* Quote */}
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Quote</p>
                                        <blockquote className="text-xs italic text-slate-600 leading-relaxed border-l-2 border-orange-300 pl-3">
                                            "{card.quote}"
                                            <footer className="text-[11px] text-slate-400 mt-1 not-italic">— {card.author}</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {items.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">No cards yet</div>
                )}
            </div>

            {modal && (
                <Modal title={modal.mode === "add" ? "Add Case Study Card" : "Edit Case Study Card"}
                    onClose={closeModal} onSave={handleSave} saving={saving} wide>

                    <Field label="Card Image Path">
                        <Input value={modal.form.img} onChange={(e) => set("img", e.target.value)} placeholder="/performance-agency/SliderImg (1).png" />
                        {modal.form.img && (
                            <div className="mt-2 w-20 h-16 rounded-lg overflow-hidden border border-slate-200">
                                <img src={modal.form.img} alt="" className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                        )}
                    </Field>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Category *">
                            <Input value={modal.form.category} onChange={(e) => set("category", e.target.value)} placeholder="PREMIUM FOOTWEAR" />
                        </Field>
                        <Field label="Title *">
                            <Input value={modal.form.title} onChange={(e) => set("title", e.target.value)} placeholder="Atlanta Mocassin" />
                        </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Price / Scale Label">
                            <Input value={modal.form.price} onChange={(e) => set("price", e.target.value)} placeholder="₹1.8L → ₹5.05L/mo" />
                        </Field>
                        <Field label="Tagline Text">
                            <Input value={modal.form.text} onChange={(e) => set("text", e.target.value)} placeholder=" You've hit your ceiling" />
                        </Field>
                    </div>

                    <Field label="Problem Statement">
                        <Textarea value={modal.form.problem} onChange={(e) => set("problem", e.target.value)} placeholder="Stuck at ₹1.8L/month. Previous agency said..." />
                    </Field>

                    <Divider label="Metric Headers & Values" />
                    <div className="grid grid-cols-3 gap-3">
                        <Field label="Header 1">
                            <Input value={modal.form.header1} onChange={(e) => set("header1", e.target.value)} placeholder="Revenue" />
                        </Field>
                        <Field label="Header 2">
                            <Input value={modal.form.header2} onChange={(e) => set("header2", e.target.value)} placeholder="Orders/month" />
                        </Field>
                        <Field label="Header 3">
                            <Input value={modal.form.header3} onChange={(e) => set("header3", e.target.value)} placeholder="Months" />
                        </Field>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <Field label="Value 1">
                            <Input value={modal.form.revenue} onChange={(e) => set("revenue", e.target.value)} placeholder="+181%" />
                        </Field>
                        <Field label="Value 2">
                            <Input value={modal.form.orders} onChange={(e) => set("orders", e.target.value)} placeholder="8,970" />
                        </Field>
                        <Field label="Value 3">
                            <Input value={modal.form.months} onChange={(e) => set("months", e.target.value)} placeholder="4" />
                        </Field>
                    </div>

                    <Divider label="Client Quote" />
                    <Field label="Quote">
                        <Textarea value={modal.form.quote} onChange={(e) => set("quote", e.target.value)} placeholder="Previous Agency Said 'You've Hit Your Ceiling.'..." />
                    </Field>
                    <Field label="Author">
                        <Input value={modal.form.author} onChange={(e) => set("author", e.target.value)} placeholder="Founder, Atlanta Mocassin" />
                    </Field>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. COLUMNS DATA (col1 + col2 Twitter/review style cards)
// ═══════════════════════════════════════════════════════════════════════════════
const COLUMN_ITEM_DEFAULT = { name: "", handle: "", avatar: "", brand: "", text: "" };

const ColumnCard = ({ item, onEdit, onDelete }) => (
    <div className="group relative bg-slate-50 rounded-xl border border-slate-100 p-3">
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={onEdit} className="p-1 hover:bg-slate-200 rounded-md text-slate-500 transition-colors"><Pencil size={11} /></button>
            <button onClick={onDelete} className="p-1 hover:bg-rose-100 rounded-md text-slate-400 hover:text-rose-600 transition-colors"><Trash2 size={11} /></button>
        </div>

        <div className="flex items-center gap-2 mb-2 pr-12">
            {item.avatar ? (
                <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0"
                    onError={(e) => { e.target.style.display = "none"; }} />
            ) : (
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <ImageIcon size={12} className="text-slate-400" />
                </div>
            )}
            <div className="min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">{item.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{item.handle}</p>
            </div>
            {item.brand && (
                <img src={item.brand} alt="" className="w-6 h-6 rounded object-contain ml-auto shrink-0 border border-slate-200"
                    onError={(e) => { e.target.style.display = "none"; }} />
            )}
        </div>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{item.text}</p>
    </div>
);

const ColumnsDataSection = ({ data = {}, pageId, onSaved }) => {
    const [activeCol, setActiveCol] = useState("col1");
    const [modal, setModal] = useState(null);
    const [saving, setSaving] = useState(false);

    const col1 = data.col1 || [];
    const col2 = data.col2 || [];
    const activeItems = activeCol === "col1" ? col1 : col2;

    const openAdd = () => setModal({ mode: "add", col: activeCol, idx: null, form: { ...COLUMN_ITEM_DEFAULT } });
    const openEdit = (idx) => setModal({ mode: "edit", col: activeCol, idx, form: { ...COLUMN_ITEM_DEFAULT, ...activeItems[idx] } });
    const closeModal = () => setModal(null);
    const set = (f, v) => setModal((m) => ({ ...m, form: { ...m.form, [f]: v } }));

    const persist = async (updatedData) => {
        const res = await upsertAdditionalFieldAPI(pageId, { key: "columnsData", value: updatedData });
        return res;
    };

    const handleSave = async () => {
        if (!modal.form.name) { toast.error("Name is required"); return; }
        setSaving(true);
        try {
            const targetList = modal.col === "col1" ? [...col1] : [...col2];
            if (modal.mode === "add") targetList.push(modal.form);
            else targetList[modal.idx] = modal.form;

            const updatedData = {
                col1: modal.col === "col1" ? targetList : col1,
                col2: modal.col === "col2" ? targetList : col2,
            };

            const res = await persist(updatedData);
            if (res.success) { onSaved(res.data.additionalFields); toast.success(modal.mode === "add" ? "Review added" : "Review updated"); closeModal(); }
        } catch (e) { toast.error(e.message || "Save failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async (col, idx) => {
        if (!window.confirm("Delete this review?")) return;
        try {
            const updatedData = {
                col1: col === "col1" ? col1.filter((_, i) => i !== idx) : col1,
                col2: col === "col2" ? col2.filter((_, i) => i !== idx) : col2,
            };
            const res = await persist(updatedData);
            if (res.success) { onSaved(res.data.additionalFields); toast.success("Review deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500"><Columns size={18} className="text-white" /></div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">Review Columns</h2>
                        <p className="text-xs text-slate-400">Col 1: {col1.length} · Col 2: {col2.length}</p>
                    </div>
                </div>
                <button onClick={openAdd}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Plus size={15} /> Add to {activeCol === "col1" ? "Column 1" : "Column 2"}
                </button>
            </div>

            {/* Column tabs */}
            <div className="flex gap-2 mb-4 border-b border-slate-100 pb-0">
                {[
                    { key: "col1", label: "Column 1", count: col1.length },
                    { key: "col2", label: "Column 2", count: col2.length },
                ].map((tab) => (
                    <button key={tab.key} onClick={() => setActiveCol(tab.key)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors border-b-2 -mb-px
                            ${activeCol === tab.key ? "border-slate-800 text-slate-800" : "border-transparent text-slate-400 hover:text-slate-600"}`}>
                        {tab.label}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold
                            ${activeCol === tab.key ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-500"}`}>
                            {tab.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeItems.map((item, i) => (
                    <ColumnCard
                        key={i}
                        item={item}
                        onEdit={() => openEdit(i)}
                        onDelete={() => handleDelete(activeCol, i)}
                    />
                ))}
                {activeItems.length === 0 && (
                    <div className="col-span-full flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No items in {activeCol === "col1" ? "Column 1" : "Column 2"} yet
                    </div>
                )}
            </div>

            {modal && (
                <Modal title={`${modal.mode === "add" ? "Add" : "Edit"} Review — ${modal.col === "col1" ? "Column 1" : "Column 2"}`}
                    onClose={closeModal} onSave={handleSave} saving={saving}>

                    <Field label="Name *">
                        <Input value={modal.form.name} onChange={(e) => set("name", e.target.value)} placeholder="Troy" />
                    </Field>
                    <Field label="Handle / Role">
                        <Input value={modal.form.handle} onChange={(e) => set("handle", e.target.value)} placeholder="MC.Overalls" />
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Avatar Path">
                            <Input value={modal.form.avatar} onChange={(e) => set("avatar", e.target.value)} placeholder="/performance-agency/logos/1.png" />
                            {modal.form.avatar && (
                                <div className="mt-2 w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                                    <img src={modal.form.avatar} alt="" className="w-full h-full object-cover"
                                        onError={(e) => { e.target.style.display = "none"; }} />
                                </div>
                            )}
                        </Field>
                        <Field label="Brand Logo Path">
                            <Input value={modal.form.brand} onChange={(e) => set("brand", e.target.value)} placeholder="/performance-agency/logos/logo1.png" />
                            {modal.form.brand && (
                                <div className="mt-2 w-10 h-10 rounded border border-slate-200 overflow-hidden">
                                    <img src={modal.form.brand} alt="" className="w-full h-full object-contain p-1"
                                        onError={(e) => { e.target.style.display = "none"; }} />
                                </div>
                            )}
                        </Field>
                    </div>
                    <Field label="Review Text">
                        <Textarea value={modal.form.text} onChange={(e) => set("text", e.target.value)} placeholder="Upthrust promised 90 days. We saw results in 47 days..." />
                    </Field>
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const PerformanceMarketingPage = () => {
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
                    <span className="text-sm font-medium">Loading Performance Marketing page...</span>
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
    const panels = af.PANELS || [];
    const profiles = af.profiles || [];
    const cardsData = af.cardsData || [];
    const columnsData = af.columnsData || {};

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
                            { label: "Panels", val: panels.length, color: "bg-violet-50 text-violet-700" },
                            { label: "Profiles", val: profiles.length, color: "bg-teal-50 text-teal-700" },
                            { label: "Case Cards", val: cardsData.length, color: "bg-orange-50 text-orange-700" },
                            { label: "Reviews", val: (columnsData.col1?.length || 0) + (columnsData.col2?.length || 0), color: "bg-indigo-50 text-indigo-700" },
                        ].map((s) => (
                            <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                {s.val} {s.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <PanelsSection items={panels} pageId={page._id} onSaved={handleSaved} />
            <ProfilesSection items={profiles} pageId={page._id} onSaved={handleSaved} />
            <CardsDataSection items={cardsData} pageId={page._id} onSaved={handleSaved} />
            <ColumnsDataSection data={columnsData} pageId={page._id} onSaved={handleSaved} />
        </div>
    );
};

export default PerformanceMarketingPage;