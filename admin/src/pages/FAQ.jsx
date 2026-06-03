import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
    getAllFAQsAPI,
    createFAQAPI,
    updateFAQByPageIdAPI,
    deleteFAQByPageIdAPI,
    updateSpecificFAQAPI,
    deleteSpecificFAQAPI,
} from "../utils/faqapi";
import {
    Plus, X, Save, Loader2, AlertCircle,
    Pencil, Trash2, ChevronDown, ChevronUp,
    HelpCircle, FileText, CheckCircle2, Search,
    Eye, EyeOff
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════════════════
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
    <textarea {...props} rows={props.rows || 4}
        className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none font-mono" />
);

// ═══════════════════════════════════════════════════════════════════════════════
// FAQ ITEM ROW - inline edit + delete
// ═══════════════════════════════════════════════════════════════════════════════
const FAQItemRow = ({ faq, index, pageId, onUpdated, onDeleted, showPreview }) => {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState({ question: faq.question, answer: faq.answer });
    const [saving, setSaving] = useState(false);

    const handleSave = async () => {
        if (!form.question.trim() || !form.answer.trim()) { toast.error("Both question and answer are required"); return; }
        setSaving(true);
        try {
            const res = await updateSpecificFAQAPI(pageId, faq._id, form);
            if (res.success) {
                onUpdated(res.data);
                toast.success("FAQ updated");
                setEditing(false);
            }
        } catch (e) { toast.error(e.message || "Update failed"); }
        finally { setSaving(false); }
    };

    const handleDelete = async () => {
        if (!window.confirm("Delete this FAQ item?")) return;
        try {
            const res = await deleteSpecificFAQAPI(pageId, faq._id);
            if (res.success) { onDeleted(res.data); toast.success("FAQ item deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    return (
        <div className={`rounded-xl border transition-all ${editing ? "border-slate-800 shadow-sm" : "border-slate-200"} overflow-hidden`}>
            {/* Question row */}
            <div className="flex items-start gap-3 px-4 py-3 bg-white">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold shrink-0 mt-0.5">
                    {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                    {editing ? (
                        <Input
                            value={form.question}
                            onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
                            placeholder="FAQ Question"
                        />
                    ) : (
                        <p className="text-sm font-medium text-slate-800 leading-snug">{faq.question}</p>
                    )}
                </div>

                <div className="flex items-center gap-1 shrink-0">
                    {!editing && (
                        <button onClick={() => setOpen((o) => !o)}
                            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                            {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                    )}
                    {!editing && (
                        <button onClick={() => { setEditing(true); setOpen(true); }}
                            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-700">
                            <Pencil size={13} />
                        </button>
                    )}
                    {!editing && (
                        <button onClick={handleDelete}
                            className="p-1.5 hover:bg-rose-100 rounded-lg transition-colors text-slate-400 hover:text-rose-600">
                            <Trash2 size={13} />
                        </button>
                    )}
                </div>
            </div>

            {/* Answer panel */}
            {(open || editing) && (
                <div className="px-4 pb-4 bg-slate-50 border-t border-slate-100">
                    {editing ? (
                        <div className="pt-3 space-y-3">
                            <Field label="Answer (HTML supported)" hint="Use <b>, <ul>, <li>, <br/> tags for rich formatting">
                                <Textarea
                                    rows={6}
                                    value={form.answer}
                                    onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))}
                                    placeholder="<b>Answer here...</b>"
                                />
                            </Field>

                            {/* HTML Preview */}
                            {form.answer && (
                                <div className="p-3 bg-white rounded-lg border border-slate-200">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rendered Preview</p>
                                    <div className="text-xs text-slate-600 leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: form.answer }} />
                                </div>
                            )}

                            <div className="flex gap-2 justify-end">
                                <button onClick={() => { setEditing(false); setForm({ question: faq.question, answer: faq.answer }); }}
                                    className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">
                                    Cancel
                                </button>
                                <button onClick={handleSave} disabled={saving}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition-colors disabled:opacity-60">
                                    {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
                                    Save
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-3">
                            {showPreview ? (
                                <div className="text-xs text-slate-600 leading-relaxed prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            ) : (
                                <p className="text-xs font-mono text-slate-400 leading-relaxed line-clamp-4">{faq.answer}</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE FAQ BLOCK - one expandable block per page
// ═══════════════════════════════════════════════════════════════════════════════
const PageFAQBlock = ({ doc, pageTitle, onDocUpdated, onDocDeleted }) => {
    const [open, setOpen] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [addForm, setAddForm] = useState({ question: "", answer: "" });
    const [adding, setAdding] = useState(false);
    const [showPreview, setShowPreview] = useState(true);
    const [localDoc, setLocalDoc] = useState(doc);

    // Sync external updates (e.g. initial load)
    useEffect(() => { setLocalDoc(doc); }, [doc]);

    const handleFAQUpdated = (updatedDoc) => { setLocalDoc(updatedDoc); onDocUpdated(updatedDoc); };
    const handleFAQDeleted = (updatedDoc) => { setLocalDoc(updatedDoc); onDocUpdated(updatedDoc); };

    const handleAdd = async () => {
        if (!addForm.question.trim() || !addForm.answer.trim()) { toast.error("Both fields required"); return; }
        setAdding(true);
        try {
            // Append to existing array via full replace (upsert)
            const updatedFaqs = [...(localDoc.faqs || []), { question: addForm.question, answer: addForm.answer }];
            const res = await updateFAQByPageIdAPI(localDoc.pageId?._id || localDoc.pageId, { faqs: updatedFaqs });
            if (res.success) {
                setLocalDoc(res.data);
                onDocUpdated(res.data);
                toast.success("FAQ item added");
                setAddModal(false);
                setAddForm({ question: "", answer: "" });
            }
        } catch (e) { toast.error(e.message || "Add failed"); }
        finally { setAdding(false); }
    };

    const handleDeleteDoc = async () => {
        if (!window.confirm(`Delete ALL FAQs for "${pageTitle}"? This cannot be undone.`)) return;
        try {
            const res = await deleteFAQByPageIdAPI(localDoc.pageId?._id || localDoc.pageId);
            if (res.success) { onDocDeleted(localDoc._id); toast.success("FAQ document deleted"); }
        } catch (e) { toast.error(e.message || "Delete failed"); }
    };

    const faqCount = localDoc.faqs?.length || 0;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Block header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-white">
                <button onClick={() => setOpen((o) => !o)} className="flex items-center gap-3 flex-1 min-w-0 text-left">
                    <div className="p-2 rounded-lg bg-indigo-100 shrink-0">
                        <HelpCircle size={16} className="text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">{pageTitle}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{faqCount} FAQ{faqCount !== 1 ? "s" : ""}</p>
                    </div>
                    <div className="ml-auto shrink-0 text-slate-400">
                        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                </button>

                <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => { setAddModal(true); setOpen(true); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-lg transition-colors">
                        <Plus size={12} /> Add FAQ
                    </button>
                    <button onClick={handleDeleteDoc}
                        className="p-1.5 hover:bg-rose-100 rounded-lg text-slate-400 hover:text-rose-600 transition-colors ml-1">
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {/* FAQ list */}
            {open && (
                <div className="border-t border-slate-100 px-5 py-4 space-y-3 bg-slate-50/50">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {faqCount} item{faqCount !== 1 ? "s" : ""}
                        </p>
                        <button
                            onClick={() => setShowPreview((p) => !p)}
                            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors">
                            {showPreview ? <EyeOff size={12} /> : <Eye size={12} />}
                            {showPreview ? "Raw HTML" : "Rendered"}
                        </button>
                    </div>

                    {faqCount === 0 ? (
                        <div className="flex items-center justify-center h-16 text-sm text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                            No FAQs yet - click "Add FAQ" to get started
                        </div>
                    ) : (
                        localDoc.faqs.map((faq, i) => (
                            <FAQItemRow
                                key={faq._id || i}
                                faq={faq}
                                index={i}
                                pageId={localDoc.pageId?._id || localDoc.pageId}
                                onUpdated={handleFAQUpdated}
                                onDeleted={handleFAQDeleted}
                                showPreview={showPreview}
                            />
                        ))
                    )}
                </div>
            )}

            {/* Add FAQ Modal */}
            {addModal && (
                <Modal title={`Add FAQ to "${pageTitle}"`}
                    onClose={() => { setAddModal(false); setAddForm({ question: "", answer: "" }); }}
                    onSave={handleAdd}
                    saving={adding}
                    wide>
                    <Field label="Question *">
                        <Input
                            value={addForm.question}
                            onChange={(e) => setAddForm((f) => ({ ...f, question: e.target.value }))}
                            placeholder="How do you handle rising CAC?" />
                    </Field>
                    <Field label="Answer * (HTML supported)" hint="Use <b>, <ul>, <li>, <br/> tags for rich formatting">
                        <Textarea
                            rows={7}
                            value={addForm.answer}
                            onChange={(e) => setAddForm((f) => ({ ...f, answer: e.target.value }))}
                            placeholder="<b>Key point:</b><ul><li>Item one</li><li>Item two</li></ul>" />
                    </Field>
                    {addForm.answer && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rendered Preview</p>
                            <div className="text-xs text-slate-600 leading-relaxed prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: addForm.answer }} />
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CREATE FAQ DOCUMENT MODAL (for pages with no FAQ yet)
// ═══════════════════════════════════════════════════════════════════════════════
const CreateFAQModal = ({ pages, existingPageIds, onCreated, onClose }) => {
    const [pageId, setPageId] = useState("");
    const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
    const [saving, setSaving] = useState(false);

    const availablePages = pages.filter((p) => !existingPageIds.includes(p._id));

    const setFaq = (i, field, val) => setFaqs((prev) => {
        const updated = [...prev];
        updated[i] = { ...updated[i], [field]: val };
        return updated;
    });
    const addRow = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
    const removeRow = (i) => setFaqs((prev) => prev.filter((_, idx) => idx !== i));

    const handleCreate = async () => {
        if (!pageId) { toast.error("Select a page"); return; }
        const validFaqs = faqs.filter((f) => f.question.trim() && f.answer.trim());
        if (validFaqs.length === 0) { toast.error("Add at least one FAQ with question and answer"); return; }
        setSaving(true);
        try {
            const res = await createFAQAPI({ pageId, faqs: validFaqs });
            if (res.success) { onCreated(res.data); toast.success("FAQ document created"); onClose(); }
        } catch (e) { toast.error(e.message || "Create failed"); }
        finally { setSaving(false); }
    };

    return (
        <Modal title="Create FAQ Document" onClose={onClose} onSave={handleCreate} saving={saving} wide>
            <Field label="Select Page *">
                <select
                    value={pageId}
                    onChange={(e) => setPageId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50">
                    <option value="">- Choose a page -</option>
                    {availablePages.map((p) => (
                        <option key={p._id} value={p._id}>{p.title} ({p.url})</option>
                    ))}
                </select>
                {availablePages.length === 0 && (
                    <p className="text-[11px] text-amber-600 mt-1">All pages already have FAQ documents.</p>
                )}
            </Field>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">FAQ Items</p>
                    <button onClick={addRow}
                        className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-800 font-medium transition-colors">
                        <Plus size={12} /> Add row
                    </button>
                </div>

                {faqs.map((faq, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 relative">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-400">FAQ #{i + 1}</span>
                            {faqs.length > 1 && (
                                <button onClick={() => removeRow(i)}
                                    className="p-1 hover:bg-rose-100 rounded text-slate-400 hover:text-rose-600 transition-colors">
                                    <X size={13} />
                                </button>
                            )}
                        </div>
                        <Field label="Question *">
                            <Input value={faq.question} onChange={(e) => setFaq(i, "question", e.target.value)} placeholder="Enter question..." />
                        </Field>
                        <Field label="Answer * (HTML supported)">
                            <Textarea rows={3} value={faq.answer} onChange={(e) => setFaq(i, "answer", e.target.value)} placeholder="<b>Answer...</b>" />
                        </Field>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const FAQsPage = () => {
    const [faqDocs, setFaqDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);

    const getPageTitle = (doc) => {
        return doc.pageId?.title || "Untitled Page";
    };


    useEffect(() => {
        const load = async () => {
            try {
                console.log("Calling APIs...");

                const faqRes = await getAllFAQsAPI();
                console.log("FAQ Response:", faqRes);

                if (faqRes?.success) {
                    setFaqDocs(faqRes.data);
                }

            } catch (e) {
                console.error("FAQ API ERROR:", e);
                toast.error("Failed to load FAQ data");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);


    const handleDocUpdated = useCallback((updatedDoc) => {
        setFaqDocs((prev) => prev.map((d) => d._id === updatedDoc._id ? updatedDoc : d));
    }, []);

    const handleDocDeleted = useCallback((docId) => {
        setFaqDocs((prev) => prev.filter((d) => d._id !== docId));
    }, []);

    const handleDocCreated = useCallback((newDoc) => {
        setFaqDocs((prev) => [newDoc, ...prev]);
    }, []);

    // Filter by search
    const filtered = faqDocs.filter((doc) => {
        const q = search.toLowerCase();

        if (!q) return true;

        // ✅ Page title
        const title = doc.pageId?.title?.toLowerCase() || "";

        if (title.includes(q)) return true;

        // ✅ FAQs content
        return doc.faqs?.some((f) =>
            f.question.toLowerCase().includes(q) ||
            f.answer.toLowerCase().includes(q)
        );
    });

    // Stats
    const totalFAQs = faqDocs.reduce((sum, d) => sum + (d.faqs?.length || 0), 0);
    const existingPageIds = faqDocs.map((d) => d.pageId?._id || d.pageId);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="flex items-center gap-3 text-slate-500">
                    <Loader2 size={22} className="animate-spin" />
                    <span className="text-sm font-medium">Loading FAQ data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* ── Page Header ── */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6 py-5">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Admin Panel</span>
                            <span className="text-slate-200">›</span>
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">FAQs</span>
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">FAQ Manager</h1>
                        <p className="text-sm text-slate-400 mt-0.5">Manage questions & answers across all pages</p>
                    </div>

                    {/* Stats pills */}
                    <div className="flex items-center gap-2 flex-wrap">
                        {[
                            { label: "Pages with FAQs", val: faqDocs.length, color: "bg-indigo-50 text-indigo-700" },
                            { label: "Total FAQs", val: totalFAQs, color: "bg-emerald-50 text-emerald-700" },
                        ].map((s) => (
                            <div key={s.label} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${s.color}`}>
                                {s.val} {s.label}
                            </div>
                        ))}

                        {/* <button
                            onClick={() => setShowCreateModal(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors ml-2">
                            <Plus size={15} /> New FAQ Document
                        </button> */}
                    </div>
                </div>
            </div>

            {/* ── Search ── */}
            <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by page title, FAQ content..."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 placeholder-slate-400 shadow-sm" />
                {search && (
                    <button onClick={() => setSearch("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                        <X size={15} />
                    </button>
                )}
            </div>

            {/* ── Search results info ── */}
            {search && (
                <p className="text-xs text-slate-500 -mt-3 px-1">
                    {filtered.length} of {faqDocs.length} pages match "{search}"
                </p>
            )}

            {/* ── FAQ Blocks ── */}
            <div className="space-y-4">
                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                        <AlertCircle size={32} className="mb-3" />
                        <p className="text-sm font-medium">{search ? "No results found" : "No FAQ documents yet"}</p>
                        <p className="text-xs mt-1">
                            {search ? "Try a different search term" : 'Click "New FAQ Document" to create one'}
                        </p>
                    </div>
                ) : (
                    filtered.map((doc) => (
                        <PageFAQBlock
                            key={doc._id}
                            doc={doc}
                            pageTitle={`${getPageTitle(doc)}`}
                            onDocUpdated={handleDocUpdated}
                            onDocDeleted={handleDocDeleted}
                        />
                    ))
                )}
            </div>

            {/* ── Create Modal ── */}
            {showCreateModal && (
                <CreateFAQModal
                    pages={allPages}
                    existingPageIds={existingPageIds}
                    onCreated={handleDocCreated}
                    onClose={() => setShowCreateModal(false)}
                />
            )}
        </div>
    );
};

export default FAQsPage;