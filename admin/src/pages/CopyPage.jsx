import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    Plus, Pencil, Trash2, X, Save, Loader2,
    EyeOff, Eye, Search, ChevronDown, AlertTriangle,
    Copy, Globe, Link2, ArrowLeft, MessageSquare,
    ChevronUp, Tag, FileText, HelpCircle,
} from "lucide-react";
import {
    getAllCopyPagesAPI,
    createCopyPageAPI,
    updateCopyPageAPI,
    toggleBlockAPI,
    deleteCopyPageAPI,
    upsertCopyAdditionalFieldAPI,
    bulkUpdateCopyAdditionalFieldsAPI,
} from "../utils/copypageapi";

// ═══════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ════
const Input = (props) => (
    <input
        {...props}
        className={`w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 ${props.className || ""}`}
    />
);

const Textarea = (props) => (
    <textarea
        {...props}
        rows={props.rows || 3}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none"
    />
);

const Field = ({ label, hint, children }) => (
    <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            {label}
        </label>
        {children}
        {hint && <p className="text-[11px] text-slate-400 mt-1">{hint}</p>}
    </div>
);

const Badge = ({ blocked }) =>
    blocked ? (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-100 text-red-600">
            <EyeOff size={10} /> Blocked
        </span>
    ) : (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700">
            <Eye size={10} /> Live
        </span>
    );

const Modal = ({ title, onClose, onSave, saving, wide = false, children, saveLabel = "Save" }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <div className={`bg-white rounded-2xl shadow-2xl w-full ${wide ? "max-w-2xl" : "max-w-md"} max-h-[90vh] flex flex-col`}>
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
                <button
                    onClick={onSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
                >
                    {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                    {saveLabel}
                </button>
            </div>
        </div>
    </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// CREATE / EDIT COPY PAGE MODAL  (title, slug, parentPage)
// ═══════════════════════════════════════════════════════════════════════════
const CopyPageModal = ({ mode, initial, parentPages, onClose, onSaved }) => {
    const [form, setForm] = useState({
        title: initial?.title || "",
        slug: initial?.slug || "",
        parentPage: initial?.parentPage?._id || initial?.parentPage || "",
    });
    const [saving, setSaving] = useState(false);

    const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

    const handleTitleChange = (v) => {
        set("title", v);
        if (mode === "create") {
            set("slug", v.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-"));
        }
    };

    const handleSave = async () => {
        if (!form.title.trim() || !form.slug.trim() || !form.parentPage) {
            toast.error("Title, slug and parent page are required");
            return;
        }
        setSaving(true);
        try {
            const result = mode === "create"
                ? await createCopyPageAPI(form)
                : await updateCopyPageAPI(initial._id, form);
            toast.success(result.message);
            onSaved(result.data);
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setSaving(false);
        }
    };

    return (
        <Modal
            title={mode === "create" ? "New Copy Page" : "Edit Copy Page"}
            onClose={onClose}
            onSave={handleSave}
            saving={saving}
            saveLabel={mode === "create" ? "Create" : "Save Changes"}
        >
            <Field label="Title" hint="Displayed in admin panel">
                <Input
                    placeholder="e.g. Shopify SEO Agency"
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                />
            </Field>

            <Field label="Slug" hint="Used as the URL path in the frontend">
                <div className="relative">
                    <Link2 size={14} className="absolute left-3 top-3 text-slate-400" />
                    <Input
                        className="pl-8"
                        placeholder="shopify-seo-agency"
                        value={form.slug}
                        onChange={(e) =>
                            set("slug", e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""))
                        }
                    />
                </div>
            </Field>

            <Field label="Parent Page" hint="Which main page this copy belongs to">
                <div className="relative">
                    <select
                        value={form.parentPage}
                        onChange={(e) => set("parentPage", e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50 appearance-none"
                    >
                        <option value="">- Select parent page -</option>
                        {parentPages.map((p) => (
                            <option key={p._id} value={p._id}>
                                {p.title} ({p.url})
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                </div>
            </Field>
        </Modal>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// DELETE CONFIRM MODAL
// ═══════════════════════════════════════════════════════════════════════════
const DeleteModal = ({ page, onClose, onDeleted }) => {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);
        try {
            await deleteCopyPageAPI(page._id);
            toast.success("Copy page deleted");
            onDeleted(page._id);
        } catch (err) {
            toast.error(err.message || "Delete failed");
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
                <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-full bg-red-100 flex-shrink-0">
                        <AlertTriangle size={20} className="text-red-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Delete Copy Page</h3>
                        <p className="text-sm text-slate-500">
                            Are you sure you want to delete{" "}
                            <span className="font-medium text-slate-700">"{page.title}"</span>?
                            This cannot be undone.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
                    >
                        {deleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// FAQS SECTION  (inside the detail view)
// ═══════════════════════════════════════════════════════════════════════════
const FaqModal = ({ mode, initial, onClose, onSave, saving }) => {
    const [form, setForm] = useState({
        question: initial?.question || "",
        answer: initial?.answer || "",
    });

    return (
        <Modal
            title={mode === "add" ? "Add FAQ" : "Edit FAQ"}
            onClose={onClose}
            onSave={() => onSave(form)}
            saving={saving}
            wide
        >
            <Field label="Question *">
                <Input
                    placeholder="e.g. How does Google Ads work?"
                    value={form.question}
                    onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
                />
            </Field>
            <Field label="Answer *">
                <Textarea
                    rows={6}
                    placeholder="Write the answer here..."
                    value={form.answer}
                    onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))}
                />
            </Field>
        </Modal>
    );
};

const FaqsSection = ({ faqs = [], copyPageId, onSaved }) => {
    const [modal, setModal] = useState(null); // null | { mode: "add"|"edit", idx? }
    const [saving, setSaving] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const handleSave = async (form) => {
        if (!form.question.trim() || !form.answer.trim()) {
            toast.error("Question and answer are required");
            return;
        }
        setSaving(true);
        try {
            const updated = [...faqs];
            if (modal.mode === "add") {
                updated.push({ question: form.question, answer: form.answer });
            } else {
                updated[modal.idx] = { question: form.question, answer: form.answer };
            }
            const res = await upsertCopyAdditionalFieldAPI(copyPageId, { key: "faqs", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                toast.success(modal.mode === "add" ? "FAQ added" : "FAQ updated");
                setModal(null);
            }
        } catch (e) {
            toast.error(e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (idx) => {
        if (!window.confirm("Delete this FAQ?")) return;
        try {
            const updated = faqs.filter((_, i) => i !== idx);
            const res = await upsertCopyAdditionalFieldAPI(copyPageId, { key: "faqs", value: updated });
            if (res.success) {
                onSaved(res.data.additionalFields);
                toast.success("FAQ deleted");
            }
        } catch (e) {
            toast.error(e.message || "Delete failed");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-600">
                        <HelpCircle size={18} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">FAQs</h2>
                        <p className="text-xs text-slate-400">{faqs.length} question{faqs.length !== 1 ? "s" : ""}</p>
                    </div>
                </div>
                <button
                    onClick={() => setModal({ mode: "add" })}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <Plus size={15} /> Add FAQ
                </button>
            </div>

            {/* List */}
            <div className="space-y-2">
                {faqs.map((faq, i) => {
                    const isOpen = expanded === i;
                    return (
                        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
                                <button
                                    onClick={() => setExpanded(isOpen ? null : i)}
                                    className="flex items-center gap-3 flex-1 min-w-0 text-left"
                                >
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-[11px] font-bold flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm font-medium text-slate-700 truncate">{faq.question}</span>
                                    <span className="ml-auto shrink-0 text-slate-400">
                                        {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                                    </span>
                                </button>
                                <div className="flex gap-1 shrink-0">
                                    <button
                                        onClick={() => setModal({ mode: "edit", idx: i, initial: faq })}
                                        className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"
                                    >
                                        <Pencil size={13} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(i)}
                                        className="p-1.5 hover:bg-red-100 rounded-lg text-slate-400 hover:text-red-600 transition-colors"
                                    >
                                        <Trash2 size={13} />
                                    </button>
                                </div>
                            </div>
                            {isOpen && (
                                <div className="px-4 py-3 bg-white border-t border-slate-100">
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}

                {faqs.length === 0 && (
                    <div className="flex items-center justify-center h-20 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                        No FAQs yet - click "Add FAQ" to create one
                    </div>
                )}
            </div>

            {modal && (
                <FaqModal
                    mode={modal.mode}
                    initial={modal.initial}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                    saving={saving}
                />
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// FIELD SCHEMA  - determines which extra fields appear based on parent URL
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Given the parent page's URL, return the list of meta fields to show.
 * All copy pages always have: title, brand, faqs.
 * Agency pages (d2c / ecommerce / shopify / b2b-ecommerce) also have: brand2
 * Meta pages (meta / facebook / instagram / paid-social) also have: footerhead
 */
const getExtraFields = (parentUrl = "") => {
    const url = parentUrl.toLowerCase();
    // Agency / D2C / Ecommerce pages
    if (
        url.includes("d2c") ||
        url.includes("ecommerce") ||
        url.includes("shopify-agency") ||
        url.includes("b2b-ecommerce") ||
        url.includes("ecom")
    ) {
        return [
            {
                key: "brand2",
                label: "Brand 2",
                hint: "Secondary brand label (e.g. D2C, Ecommerce, Shopify)",
                placeholder: "e.g. D2C",
            },
        ];
    }
    // Meta / Facebook / Instagram / Paid Social pages
    if (
        url.includes("meta") ||
        url.includes("facebook") ||
        url.includes("instagram") ||
        url.includes("paid-social")
    ) {
        return [
            {
                key: "footerhead",
                label: "Footer Heading",
                hint: "Text used in the footer section for this page (e.g. Meta Agency)",
                placeholder: "e.g. Meta Agency",
            },
        ];
    }
    return [];
};

// ═══════════════════════════════════════════════════════════════════════════
// META FIELDS SECTION  (title + brand + dynamic extras)
// ═══════════════════════════════════════════════════════════════════════════
const MetaFieldsSection = ({ additionalFields = {}, parentUrl = "", copyPageId, onSaved }) => {
    const extraFields = getExtraFields(parentUrl);

    // Build initial form from all known fields
    const buildForm = (af) => {
        const base = { title: af.title || "", brand: af.brand || "" };
        extraFields.forEach(({ key }) => { base[key] = af[key] || ""; });
        return base;
    };

    const [form, setForm] = useState(() => buildForm(additionalFields));
    const [saving, setSaving] = useState(false);
    const [dirty, setDirty] = useState(false);

    // Sync when parent updates
    useEffect(() => { setForm(buildForm(additionalFields)); setDirty(false); }, [additionalFields]);

    const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setDirty(true); };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await bulkUpdateCopyAdditionalFieldsAPI(copyPageId, { fields: form });
            if (res.success) {
                onSaved(res.data.additionalFields);
                toast.success("Meta fields saved");
                setDirty(false);
            }
        } catch (e) {
            toast.error(e.message || "Save failed");
        } finally {
            setSaving(false);
        }
    };

    // Badge showing which extra fields this page type has
    const typeLabel = extraFields.length > 0
        ? extraFields.map((f) => f.label).join(", ")
        : null;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-600">
                        <Tag size={18} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">Page Meta</h2>
                        <p className="text-xs text-slate-400">
                            Title, brand{typeLabel ? `, ${typeLabel}` : ""} for this copy page
                        </p>
                    </div>
                </div>
                {dirty && (
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
                    >
                        {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                        Save Changes
                    </button>
                )}
            </div>

            {/* Base fields - always shown */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${extraFields.length > 0 ? "mb-4" : ""}`}>
                <Field label="Page Title" hint="Hero / H1 title shown on the frontend">
                    <Input
                        placeholder="e.g. Google Ads Agency that kills competitors"
                        value={form.title}
                        onChange={(e) => set("title", e.target.value)}
                    />
                </Field>
                <Field label="Brand" hint="Brand name used in copy (e.g. Google, Meta, Shopify)">
                    <Input
                        placeholder="e.g. Google"
                        value={form.brand}
                        onChange={(e) => set("brand", e.target.value)}
                    />
                </Field>
            </div>

            {/* Extra fields - shown conditionally based on parent page type */}
            {extraFields.length > 0 && (
                <>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                            {parentUrl.toLowerCase().includes("meta") || parentUrl.toLowerCase().includes("facebook") || parentUrl.toLowerCase().includes("instagram") || parentUrl.toLowerCase().includes("paid-social")
                                ? "Meta / Social fields"
                                : "Agency / Ecommerce fields"}
                        </span>
                        <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(extraFields.length, 2)} gap-4`}>
                        {extraFields.map(({ key, label, hint, placeholder }) => (
                            <Field key={key} label={label} hint={hint}>
                                <Input
                                    placeholder={placeholder}
                                    value={form[key]}
                                    onChange={(e) => set(key, e.target.value)}
                                />
                            </Field>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// COPY PAGE DETAIL VIEW  (full additionalFields editor)
// ═══════════════════════════════════════════════════════════════════════════
const CopyPageDetail = ({ page, onBack, onUpdated }) => {
    const [data, setData] = useState(page);
    const [editingMeta, setEditingMeta] = useState(false);

    const af = data.additionalFields || {};

    const handleFieldsSaved = (updatedFields) => {
        const updated = { ...data, additionalFields: updatedFields };
        setData(updated);
        onUpdated(updated);
    };

    const parentTitle =
        typeof data.parentPage === "object"
            ? `${data.parentPage.title}`
            : data.parentPage;

    return (
        <div className="space-y-5">
            {/* Top bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
                        >
                            <ArrowLeft size={17} />
                        </button>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs text-slate-400">{parentTitle}</span>
                                <span className="text-slate-300">›</span>
                                <h1 className="text-lg font-bold text-slate-800">{data.title}</h1>
                                <Badge blocked={data.isBlocked} />
                            </div>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">/{data.slug}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <div className="px-3 py-1.5 rounded-lg bg-violet-50 text-violet-700 text-xs font-semibold">
                            {af.faqs?.length || 0} FAQs
                        </div>
                        {af.brand2 !== undefined && (
                            <div className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold">
                                brand2: {af.brand2 || "-"}
                            </div>
                        )}
                        {af.footerhead !== undefined && (
                            <div className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 text-xs font-semibold">
                                footer: {af.footerhead || "-"}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Meta (title + brand + dynamic extras: brand2 / footerhead) */}
            <MetaFieldsSection
                additionalFields={af}
                parentUrl={typeof data.parentPage === "object" ? data.parentPage.url : ""}
                copyPageId={data._id}
                onSaved={handleFieldsSaved}
            />

            {/* FAQs */}
            <FaqsSection
                faqs={af.faqs || []}
                copyPageId={data._id}
                onSaved={handleFieldsSaved}
            />
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// ROW in the list table
// ═══════════════════════════════════════════════════════════════════════════
const CopyPageRow = ({ page, onEdit, onDelete, onToggleBlock, onOpen }) => {
    const [toggling, setToggling] = useState(false);

    const handleToggle = async () => {
        setToggling(true);
        try {
            const res = await toggleBlockAPI(page._id);
            toast.success(res.message);
            onToggleBlock(res.data);
        } catch (err) {
            toast.error(err.message || "Toggle failed");
        } finally {
            setToggling(false);
        }
    };

    const parentTitle =
        typeof page.parentPage === "object"
            ? `${page.parentPage.title} (${page.parentPage.url})`
            : page.parentPage;

    const faqCount = page.additionalFields?.faqs?.length || 0;

    return (
        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
            <td className="px-4 py-3">
                <button onClick={() => onOpen(page)} className="text-left">
                    <p className="text-sm font-medium text-slate-800 group-hover:text-slate-900 group-hover:underline underline-offset-2">
                        {page.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{parentTitle}</p>
                </button>
            </td>
            <td className="px-4 py-3">
                <code onClick={() => window.open(`http://upthrust.agency/${page.slug}`, "_blank")} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md cursor-pointer hover:bg-slate-200">
                    /{page.slug}
                </code>
            </td>
            <td className="px-4 py-3">
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <MessageSquare size={11} /> {faqCount} FAQs
                </span>
            </td>
            <td className="px-4 py-3">
                <Badge blocked={page.isBlocked} />
            </td>
            <td className="px-4 py-3 text-xs text-slate-400">
                {new Date(page.updatedAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center gap-2 justify-end">
                    {/* Block / Unblock */}
                    <button
                        onClick={handleToggle}
                        disabled={toggling}
                        title={page.isBlocked ? "Unblock page" : "Block page"}
                        className={`p-1.5 rounded-lg transition-colors disabled:opacity-50 ${page.isBlocked
                            ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
                            : "bg-red-50 hover:bg-red-100 text-red-500"
                            }`}
                    >
                        {toggling ? <Loader2 size={14} className="animate-spin" /> : page.isBlocked ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>

                    {/* Edit meta */}
                    <button
                        onClick={() => onEdit(page)}
                        title="Edit slug / parent"
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    >
                        <Pencil size={14} />
                    </button>

                    {/* Open detail */}
                    <button
                        onClick={() => onOpen(page)}
                        title="Edit content"
                        className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors"
                    >
                        <FileText size={14} />
                    </button>

                    {/* Delete */}
                    <button
                        onClick={() => onDelete(page)}
                        title="Delete"
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

// ═══════════════════════════════════════════════════════════════════════════
// GROUP HEADER  - one per parent page
// ═══════════════════════════════════════════════════════════════════════════
const GroupHeader = ({ parentTitle, parentUrl, count, collapsed, onToggle }) => (
    <tr
        onClick={onToggle}
        className="cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors select-none"
    >
        <td colSpan={6} className="px-4 py-2.5">
            <div className="flex items-center gap-3">
                <span className="text-slate-400">
                    {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                </span>
                <Globe size={14} className="text-slate-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{parentTitle}</span>
                <code className="text-[11px] text-slate-400 font-mono">/{parentUrl}</code>
                <span className="ml-auto text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {count} page{count !== 1 ? "s" : ""}
                </span>
            </div>
        </td>
    </tr>
);

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function CopyPagesManager() {
    const [copyPages, setCopyPages] = useState([]);
    const [parentPages, setParentPages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Navigation
    const [detailPage, setDetailPage] = useState(null); // null = list view

    // Filters
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    // Collapsed groups
    const [collapsedGroups, setCollapsedGroups] = useState({});

    // Modals
    const [modal, setModal] = useState(null); // null | { type: "create" | "edit" | "delete", page? }

    // ── Load ──────────────────────────────────────────────────────────────
    const load = useCallback(async () => {
        setLoading(true);
        try {
            const cpRes = await getAllCopyPagesAPI();
            const pages = Array.isArray(cpRes?.data) ? cpRes.data : [];
            setCopyPages(pages);
            // Derive unique parent pages from the populated parentPage field
            // (backend populates parentPage with title + url, so no separate API needed)
            const parentMap = {};
            pages.forEach((p) => {
                if (p.parentPage && typeof p.parentPage === "object") {
                    parentMap[p.parentPage._id] = p.parentPage;
                }
            });
            setParentPages(Object.values(parentMap));
        } catch (err) {
            toast.error("Failed to load data");
            setCopyPages([]);
            setParentPages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    // ── Mutations ─────────────────────────────────────────────────────────
    const handleCreated = (newPage) => {
        setCopyPages((prev) => [newPage, ...prev]);
        setModal(null);
    };

    const handleUpdated = (updated) => {
        setCopyPages((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
        // Also refresh detail view if open
        if (detailPage?._id === updated._id) setDetailPage(updated);
        setModal(null);
    };

    const handleDeleted = (id) => {
        setCopyPages((prev) => prev.filter((p) => p._id !== id));
        if (detailPage?._id === id) setDetailPage(null);
        setModal(null);
    };

    const handleToggleBlock = (updated) => {
        setCopyPages((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
        if (detailPage?._id === updated._id) setDetailPage(updated);
    };

    const handleDetailUpdated = (updated) => {
        setCopyPages((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
        setDetailPage(updated);
    };

    // ── Filtered + grouped ─────────────────────────────────────────────────
    const safePages = Array.isArray(copyPages) ? copyPages : [];
    const filtered = safePages.filter((p) => {
        const q = search.toLowerCase();
        const matchSearch = !q || p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q);
        const matchStatus = filterStatus === "all" || (filterStatus === "live" && !p.isBlocked) || (filterStatus === "blocked" && p.isBlocked);
        return matchSearch && matchStatus;
    });

    // Group by parentPage
    const groups = filtered.reduce((acc, page) => {
        const parentId = typeof page.parentPage === "object" ? page.parentPage._id || page.parentPage.id : page.parentPage;
        const parentTitle = typeof page.parentPage === "object" ? page.parentPage.title : parentId;
        const parentUrl = typeof page.parentPage === "object" ? page.parentPage.url : "";
        if (!acc[parentId]) acc[parentId] = { parentId, parentTitle, parentUrl, pages: [] };
        acc[parentId].pages.push(page);
        return acc;
    }, {});

    const liveCount = safePages.filter((p) => !p.isBlocked).length;
    const blockedCount = safePages.filter((p) => p.isBlocked).length;

    const toggleGroup = (id) => setCollapsedGroups((prev) => ({ ...prev, [id]: !prev[id] }));

    // ── Detail view ────────────────────────────────────────────────────────
    if (detailPage) {
        return (
            <div className="p-6 max-w-5xl mx-auto">
                <CopyPageDetail
                    page={detailPage}
                    onBack={() => setDetailPage(null)}
                    onUpdated={handleDetailUpdated}
                />
            </div>
        );
    }

    // ── List view ──────────────────────────────────────────────────────────
    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Page header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Copy size={20} className="text-slate-600" />
                        Copy Pages
                    </h1>
                    <p className="text-sm text-slate-400 mt-0.5">
                        Manage copy / variant pages - click a row to edit its content
                    </p>
                </div>
                <button
                    onClick={() => setModal({ type: "create" })}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <Plus size={15} /> New Copy Page
                </button>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    { label: "Total", value: safePages.length, color: "bg-slate-100 text-slate-700" },
                    { label: "Live", value: liveCount, color: "bg-emerald-50 text-emerald-700" },
                    { label: "Blocked", value: blockedCount, color: "bg-red-50 text-red-600" },
                ].map((s) => (
                    <div key={s.label} className={`rounded-xl px-5 py-4 ${s.color}`}>
                        <p className="text-2xl font-bold">{s.value}</p>
                        <p className="text-xs font-semibold mt-0.5 opacity-70">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-5">
                <div className="relative flex-1 min-w-[200px]">
                    <Search size={14} className="absolute left-3 top-3 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by title or slug…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                </div>
                <div className="flex rounded-lg border border-slate-200 overflow-hidden text-sm">
                    {["all", "live", "blocked"].map((s) => (
                        <button
                            key={s}
                            onClick={() => setFilterStatus(s)}
                            className={`px-4 py-2.5 font-medium capitalize transition-colors ${filterStatus === s
                                ? "bg-slate-800 text-white"
                                : "bg-white text-slate-500 hover:bg-slate-50"
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                {loading ? (
                    <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
                        <Loader2 size={20} className="animate-spin" />
                        <span className="text-sm">Loading copy pages…</span>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <Globe size={36} className="mb-3 opacity-30" />
                        <p className="text-sm font-medium">No copy pages found</p>
                        <p className="text-xs mt-1">
                            {safePages.length > 0 ? "Try adjusting your filters" : 'Click "New Copy Page" to create one'}
                        </p>
                    </div>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Title / Parent</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Slug</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Content</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Updated</th>
                                <th className="px-4 py-3" />
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(groups).map((group) => (
                                <>
                                    <GroupHeader
                                        key={`gh-${group.parentId}`}
                                        parentTitle={group.parentTitle}
                                        parentUrl={group.parentUrl}
                                        count={group.pages.length}
                                        collapsed={!!collapsedGroups[group.parentId]}
                                        onToggle={() => toggleGroup(group.parentId)}
                                    />
                                    {!collapsedGroups[group.parentId] &&
                                        group.pages.map((page) => (
                                            <CopyPageRow
                                                key={page._id}
                                                page={page}
                                                onEdit={(p) => setModal({ type: "edit", page: p })}
                                                onDelete={(p) => setModal({ type: "delete", page: p })}
                                                onToggleBlock={handleToggleBlock}
                                                onOpen={setDetailPage}
                                            />
                                        ))
                                    }
                                </>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {!loading && filtered.length > 0 && (
                <p className="text-xs text-slate-400 mt-3">
                    Showing {filtered.length} of {safePages.length} copy pages
                </p>
            )}

            {/* Modals */}
            {modal?.type === "create" && (
                <CopyPageModal
                    mode="create"
                    parentPages={parentPages}
                    onClose={() => setModal(null)}
                    onSaved={handleCreated}
                />
            )}
            {modal?.type === "edit" && (
                <CopyPageModal
                    mode="edit"
                    initial={modal.page}
                    parentPages={parentPages}
                    onClose={() => setModal(null)}
                    onSaved={handleUpdated}
                />
            )}
            {modal?.type === "delete" && (
                <DeleteModal
                    page={modal.page}
                    onClose={() => setModal(null)}
                    onDeleted={handleDeleted}
                />
            )}
        </div>
    );
}