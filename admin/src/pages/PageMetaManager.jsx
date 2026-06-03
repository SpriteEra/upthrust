import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Save,
  Loader2,
  Search,
  AlertTriangle,
  Globe,
  Link2,
  Image,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  FileSearch,
  Tag,
  Share2,
  TextWrap,
} from "lucide-react";
import {
  getAllPageMetaAPI,
  createPageMetaAPI,
  updatePageMetaAPI,
  deletePageMetaAPI,
} from "../utils/pagemetaapi";

// ═══════════════════════════════════════════════════════════════════════════
// SHARED UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════════════

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 ${className}`}
  />
);

const Textarea = ({ rows = 3, ...props }) => (
  <textarea
    {...props}
    rows={rows}
    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none"
  />
);

const Field = ({ label, hint, children, charCount }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
      {label}
    </label>
    {children}
    <div className="flex justify-between items-center mt-1">
      {hint && <p className="text-[11px] text-slate-400">{hint}</p>}
      {charCount !== undefined && (
        <p
          className={`text-[11px] ml-auto font-medium ${charCount > 160 ? "text-red-400" : charCount > 120 ? "text-amber-400" : "text-slate-400"}`}
        >
          {charCount} chars
        </p>
      )}
    </div>
  </div>
);

const Divider = ({ label, icon: Icon, color = "text-slate-400" }) => (
  <div className="flex items-center gap-2 my-2">
    <div className="h-px flex-1 bg-slate-100" />
    <span
      className={`text-[10px] font-bold uppercase tracking-widest px-2 flex items-center gap-1.5 ${color}`}
    >
      {Icon && <Icon size={10} />}
      {label}
    </span>
    <div className="h-px flex-1 bg-slate-100" />
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// EMPTY FORM FACTORY
// ═══════════════════════════════════════════════════════════════════════════
const emptyForm = () => ({
  // Identity
  slug: "",
  label: "",
  // SEO
  title: "",
  description: "",
  keywords: "", // comma string in form → array on save
  canonical: "",
  robots_index: true,
  robots_follow: true,
  // Open Graph
  og_title: "",
  og_description: "",
  og_url: "",
  og_siteName: "Upthrust",
  og_image: "",
  og_type: "website",
  // Twitter
  tw_card: "summary_large_image",
  tw_title: "",
  tw_description: "",
  tw_image: "",
});

const docToForm = (doc) => ({
  slug: doc.slug || "",
  label: doc.label || "",
  title: doc.title || "",
  description: doc.description || "",
  keywords: Array.isArray(doc.keywords) ? doc.keywords.join(", ") : "",
  canonical: doc.canonical || "",
  robots_index: doc.robots?.index !== false,
  robots_follow: doc.robots?.follow !== false,
  og_title: doc.openGraph?.title || "",
  og_description: doc.openGraph?.description || "",
  og_url: doc.openGraph?.url || "",
  og_siteName: doc.openGraph?.siteName || "Upthrust",
  og_image: doc.openGraph?.image || "",
  og_type: doc.openGraph?.type || "website",
  tw_card: doc.twitter?.card || "summary_large_image",
  tw_title: doc.twitter?.title || "",
  tw_description: doc.twitter?.description || "",
  tw_image: doc.twitter?.image || "",
});

const formToPayload = (form) => ({
  slug: form.slug,
  label: form.label,
  title: form.title,
  description: form.description,
  keywords: form.keywords
    ? form.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : [],
  canonical: form.canonical,
  robots: {
    index: form.robots_index,
    follow: form.robots_follow,
  },
  openGraph: {
    title: form.og_title,
    description: form.og_description,
    url: form.og_url,
    siteName: form.og_siteName,
    image: form.og_image,
    type: form.og_type,
  },
  twitter: {
    card: form.tw_card,
    title: form.tw_title,
    description: form.tw_description,
    image: form.tw_image,
  },
});

// ═══════════════════════════════════════════════════════════════════════════
// CREATE / EDIT MODAL
// ═══════════════════════════════════════════════════════════════════════════
const MetaModal = ({ mode, initial, onClose, onSaved }) => {
  const [form, setForm] = useState(initial ? docToForm(initial) : emptyForm());
  const [saving, setSaving] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleLabelChange = (v) => {
    set("label", v);
    if (mode === "create") {
      set(
        "slug",
        v
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-"),
      );
    }
  };

  const handleSave = async () => {
    if (!form.slug.trim() || !form.label.trim()) {
      toast.error("Slug and label are required");
      return;
    }
    setSaving(true);
    try {
      const payload = formToPayload(form);
      const res =
        mode === "create"
          ? await createPageMetaAPI(payload)
          : await updatePageMetaAPI(initial._id, payload);
      toast.success(res.message);
      onSaved(res.data);
    } catch (err) {
      toast.error(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-slate-800">
              <Globe size={15} className="text-white" />
            </div>
            <h3 className="font-semibold text-slate-800">
              {mode === "create" ? "New Page Metadata" : `Edit - /${form.slug}`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={18} className="text-slate-500" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {/* ── Identity ── */}
          <Divider label="Identity" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Label *" hint="Internal name shown in admin">
              <Input
                placeholder="e.g. Google Ads Agency"
                value={form.label}
                onChange={(e) => handleLabelChange(e.target.value)}
              />
            </Field>
            <Field label="URL Slug *" hint="Exact URL path (no leading slash)">
              <div className="relative">
                <Link2
                  size={14}
                  className="absolute left-3 top-3 text-slate-400"
                />
                <Input
                  className="pl-8"
                  placeholder="google-ad-agency"
                  value={form.slug}
                  onChange={(e) =>
                    set(
                      "slug",
                      e.target.value
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, ""),
                    )
                  }
                />
              </div>
            </Field>
          </div>

          {/* ── SEO ── */}
          <Divider label="SEO" icon={FileSearch} color="text-emerald-600" />
          <Field
            label="Meta Title"
            hint="Browser tab + Google result title"
            charCount={form.title.length}
          >
            <Input
              placeholder="e.g. Google Ads Agency for Predictable Growth | Upthrust"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
            />
          </Field>
          <Field
            label="Meta Description"
            hint="Google snippet - aim for 140–160 chars"
            charCount={form.description.length}
          >
            <Textarea
              rows={3}
              placeholder="e.g. Scale your brand with proven ads, CRO and retention systems..."
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </Field>
          <Field label="Keywords" hint="Comma-separated">
            <Input
              placeholder="Google Ads Agency, PPC Agency, Ecommerce Ads"
              value={form.keywords}
              onChange={(e) => set("keywords", e.target.value)}
            />
          </Field>
          <Field
            label="Canonical URL"
            hint="Leave empty to use slug automatically"
          >
            <div className="relative">
              <Link2
                size={14}
                className="absolute left-3 top-3 text-slate-400"
              />
              <Input
                className="pl-8"
                placeholder="https://upthrust.agency/google-ad-agency"
                value={form.canonical}
                onChange={(e) => set("canonical", e.target.value)}
              />
            </div>
          </Field>
          <div className="flex gap-6">
            {[
              {
                key: "robots_index",
                label: "index",
                hint: "Allow Google to index",
              },
              {
                key: "robots_follow",
                label: "follow",
                hint: "Follow links on page",
              },
            ].map(({ key, label, hint }) => (
              <label
                key={key}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={form[key]}
                  onChange={(e) => set(key, e.target.checked)}
                  className="w-4 h-4 rounded accent-slate-800"
                />
                <span className="text-sm text-slate-700 font-medium">
                  {label}
                </span>
                <span className="text-[11px] text-slate-400">({hint})</span>
              </label>
            ))}
          </div>

          {/* ── Open Graph ── */}
          <Divider label="Open Graph" icon={Share2} color="text-sky-600" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="OG Title" charCount={form.og_title.length}>
              <Input
                placeholder="e.g. Google Ads Agency That Scales Profitably"
                value={form.og_title}
                onChange={(e) => set("og_title", e.target.value)}
              />
            </Field>
            <Field label="OG Site Name">
              <Input
                placeholder="Upthrust"
                value={form.og_siteName}
                onChange={(e) => set("og_siteName", e.target.value)}
              />
            </Field>
          </div>
          <Field label="OG Description" charCount={form.og_description.length}>
            <Textarea
              rows={2}
              placeholder="e.g. We manage $12M+ in Google Ads spend with structured PPC systems..."
              value={form.og_description}
              onChange={(e) => set("og_description", e.target.value)}
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="OG URL" hint="Full URL for this page">
              <div className="relative">
                <Globe
                  size={14}
                  className="absolute left-3 top-3 text-slate-400"
                />
                <Input
                  className="pl-8"
                  placeholder="https://upthrust.agency/google-ad-agency"
                  value={form.og_url}
                  onChange={(e) => set("og_url", e.target.value)}
                />
              </div>
            </Field>
            <Field label="OG Type" hint="Usually 'website'">
              <div className="relative">
                <select
                  value={form.og_type}
                  onChange={(e) => set("og_type", e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50 appearance-none"
                >
                  <option value="website">website</option>
                  <option value="article">article</option>
                  <option value="product">product</option>
                </select>
                <ChevronDown
                  size={13}
                  className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                />
              </div>
            </Field>
          </div>
          <Field
            label="OG Image Path"
            hint="e.g. /ogimage/google-og.png  (1200×630)"
          >
            <div className="relative">
              <Image
                size={14}
                className="absolute left-3 top-3 text-slate-400"
              />
              <Input
                className="pl-8"
                placeholder="/ogimage/google-og.png"
                value={form.og_image}
                onChange={(e) => set("og_image", e.target.value)}
              />
            </div>
          </Field>

          {/* ── Twitter ── */}
          <Divider
            label="Twitter / X Card"
            icon={TextWrap}
            color="text-slate-600"
          />
          <Field label="Card Type">
            <div className="relative">
              <select
                value={form.tw_card}
                onChange={(e) => set("tw_card", e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 bg-slate-50 appearance-none"
              >
                <option value="summary_large_image">summary_large_image</option>
                <option value="summary">summary</option>
                <option value="app">app</option>
                <option value="player">player</option>
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-3 text-slate-400 pointer-events-none"
              />
            </div>
          </Field>
          <Field label="Twitter Title" charCount={form.tw_title.length}>
            <Input
              placeholder="e.g. Google Ads Agency That Scales Profitably"
              value={form.tw_title}
              onChange={(e) => set("tw_title", e.target.value)}
            />
          </Field>
          <Field
            label="Twitter Description"
            charCount={form.tw_description.length}
          >
            <Textarea
              rows={2}
              placeholder="e.g. We manage $12M+ in Google Ads spend..."
              value={form.tw_description}
              onChange={(e) => set("tw_description", e.target.value)}
            />
          </Field>
          <Field label="Twitter Image Path" hint="e.g. /ogimage/google-og.png">
            <div className="relative">
              <Image
                size={14}
                className="absolute left-3 top-3 text-slate-400"
              />
              <Input
                className="pl-8"
                placeholder="/ogimage/google-og.png"
                value={form.tw_image}
                onChange={(e) => set("tw_image", e.target.value)}
              />
            </div>
          </Field>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
          >
            {saving ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Save size={15} />
            )}
            {mode === "create" ? "Create" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// DELETE CONFIRM MODAL
// ═══════════════════════════════════════════════════════════════════════════
const DeleteModal = ({ meta, onClose, onDeleted }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deletePageMetaAPI(meta._id);
      toast.success("Metadata deleted");
      onDeleted(meta._id);
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
            <h3 className="font-semibold text-slate-800 mb-1">
              Delete Metadata
            </h3>
            <p className="text-sm text-slate-500">
              Delete metadata for{" "}
              <span className="font-medium text-slate-700">"{meta.label}"</span>
              ? This cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
          >
            {deleting ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Trash2 size={15} />
            )}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// TABLE ROW with expandable preview
// ═══════════════════════════════════════════════════════════════════════════
const MetaRow = ({ meta, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const robotsLabel = `${meta.robots?.index !== false ? "index" : "noindex"}, ${meta.robots?.follow !== false ? "follow" : "nofollow"}`;

  return (
    <>
      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
        <td className="px-4 py-3">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-left w-full"
          >
            <p className="text-sm font-medium text-slate-800 group-hover:underline underline-offset-2">
              {meta.label}
            </p>
            <code className="text-[11px] text-slate-400 font-mono">
              /{meta.slug}
            </code>
          </button>
        </td>
        <td className="px-4 py-3 max-w-[220px]">
          <p className="text-sm text-slate-600 truncate">
            {meta.title || (
              <span className="text-slate-300 italic text-xs">-</span>
            )}
          </p>
        </td>
        <td className="px-4 py-3">
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
              <Tag size={9} />{" "}
              {Array.isArray(meta.keywords) ? meta.keywords.length : 0} kw
            </span>
            {meta.openGraph?.image && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-600">
                <Share2 size={9} /> OG
              </span>
            )}
            {meta.twitter?.image && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
                <TextWrap size={9} /> TW
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${meta.robots?.index !== false ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}
            >
              {meta.robots?.index !== false ? (
                <Eye size={9} />
              ) : (
                <EyeOff size={9} />
              )}
              {robotsLabel}
            </span>
          </div>
        </td>
        <td className="px-4 py-3 text-xs text-slate-400 whitespace-nowrap">
          {new Date(meta.updatedAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <button
              onClick={() => onEdit(meta)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <Pencil size={14} />
            </button>
            <button
              onClick={() => onDelete(meta)}
              className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </td>
      </tr>

      {expanded && (
        <tr className="border-b border-slate-100 bg-slate-50">
          <td colSpan={5} className="px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Google preview */}
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <FileSearch size={10} /> Google Preview
                </p>
                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <p className="text-[13px] text-blue-600 font-medium truncate">
                    {meta.title || (
                      <span className="text-slate-300 italic">No title</span>
                    )}
                  </p>
                  <p className="text-[11px] text-green-700 mt-0.5">
                    upthrust.agency/{meta.slug}
                  </p>
                  <p className="text-[12px] text-slate-500 mt-1 line-clamp-2">
                    {meta.description || (
                      <span className="italic text-slate-300">
                        No description
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* OG preview */}
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Share2 size={10} /> Open Graph
                </p>
                <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1.5 text-[12px]">
                  <div>
                    <span className="font-semibold text-slate-500">
                      title:{" "}
                    </span>
                    <span className="text-slate-700">
                      {meta.openGraph?.title || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">desc: </span>
                    <span className="text-slate-700 line-clamp-2">
                      {meta.openGraph?.description || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">url: </span>
                    <span className="text-slate-700 truncate block">
                      {meta.openGraph?.url || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">
                      siteName:{" "}
                    </span>
                    <span className="text-slate-700">
                      {meta.openGraph?.siteName || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">
                      image:{" "}
                    </span>
                    <code className="text-slate-600 text-[11px]">
                      {meta.openGraph?.image || "-"}
                    </code>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">type: </span>
                    <span className="text-slate-700">
                      {meta.openGraph?.type || "-"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Twitter preview */}
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <TextWrap size={10} /> Twitter / X
                </p>
                <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-1.5 text-[12px]">
                  <div>
                    <span className="font-semibold text-slate-500">card: </span>
                    <span className="text-slate-700">
                      {meta.twitter?.card || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">
                      title:{" "}
                    </span>
                    <span className="text-slate-700">
                      {meta.twitter?.title || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">desc: </span>
                    <span className="text-slate-700 line-clamp-2">
                      {meta.twitter?.description || "-"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500">
                      image:{" "}
                    </span>
                    <code className="text-slate-600 text-[11px]">
                      {meta.twitter?.image || "-"}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords */}
            {meta.keywords?.length > 0 && (
              <div className="mt-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Keywords
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {meta.keywords.map((k, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 text-[11px] rounded-full"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function PageMetaManager() {
  const [metas, setMetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllPageMetaAPI();
      setMetas(Array.isArray(res?.data) ? res.data : []);
    } catch {
      toast.error("Failed to load metadata");
      setMetas([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleSaved = (saved) => {
    setMetas((prev) => {
      const exists = prev.find((m) => m._id === saved._id);
      return exists
        ? prev.map((m) => (m._id === saved._id ? saved : m))
        : [saved, ...prev];
    });
    setModal(null);
  };

  const handleDeleted = (id) => {
    setMetas((prev) => prev.filter((m) => m._id !== id));
    setModal(null);
  };

  const filtered = metas.filter((m) => {
    const q = search.toLowerCase();
    return (
      !q ||
      m.slug.includes(q) ||
      m.label.toLowerCase().includes(q) ||
      m.title?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FileSearch size={20} className="text-slate-600" /> SEO Metadata
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">
            Manage meta, Open Graph and Twitter card per URL slug
          </p>
        </div>
        <button
          onClick={() => setModal({ type: "create" })}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus size={15} /> New Metadata
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "Total Pages",
            value: metas.length,
            color: "bg-slate-100 text-slate-700",
          },
          {
            label: "With OG Image",
            value: metas.filter((m) => !!m.openGraph?.image).length,
            color: "bg-sky-50 text-sky-700",
          },
          {
            label: "noindex",
            value: metas.filter((m) => m.robots?.index === false).length,
            color: "bg-red-50 text-red-600",
          },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl px-5 py-4 ${s.color}`}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs font-semibold mt-0.5 opacity-70">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search size={14} className="absolute left-3 top-3 text-slate-400" />
        <input
          type="text"
          placeholder="Search by slug, label or title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm">Loading metadata…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Globe size={36} className="mb-3 opacity-30" />
            <p className="text-sm font-medium">No metadata found</p>
            <p className="text-xs mt-1">
              {metas.length > 0
                ? "Try adjusting your search"
                : 'Click "New Metadata" to add your first entry'}
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Label / Slug
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Meta Title
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Details
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Updated
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((meta) => (
                <MetaRow
                  key={meta._id}
                  meta={meta}
                  onEdit={(m) => setModal({ type: "edit", meta: m })}
                  onDelete={(m) => setModal({ type: "delete", meta: m })}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!loading && filtered.length > 0 && (
        <p className="text-xs text-slate-400 mt-3">
          Showing {filtered.length} of {metas.length} entries
        </p>
      )}

      {modal?.type === "create" && (
        <MetaModal
          mode="create"
          onClose={() => setModal(null)}
          onSaved={handleSaved}
        />
      )}
      {modal?.type === "edit" && (
        <MetaModal
          mode="edit"
          initial={modal.meta}
          onClose={() => setModal(null)}
          onSaved={handleSaved}
        />
      )}
      {modal?.type === "delete" && (
        <DeleteModal
          meta={modal.meta}
          onClose={() => setModal(null)}
          onDeleted={handleDeleted}
        />
      )}
    </div>
  );
}
