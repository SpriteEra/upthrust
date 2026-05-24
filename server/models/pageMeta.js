import mongoose from "mongoose";

const PageMetaSchema = new mongoose.Schema(
    {
        // URL slug this metadata belongs to
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        // Human-readable label shown in admin
        label: {
            type: String,
            required: true,
            trim: true,
        },

        // ── Basic SEO ───────────────────────────────────────────────────────
        title:       { type: String, default: "", trim: true },
        description: { type: String, default: "", trim: true },
        keywords:    { type: [String], default: [] },
        canonical:   { type: String, default: "", trim: true },
        robots: {
            index:  { type: Boolean, default: true },
            follow: { type: Boolean, default: true },
        },

        // ── Open Graph ──────────────────────────────────────────────────────
        openGraph: {
            title:       { type: String, default: "", trim: true },
            description: { type: String, default: "", trim: true },
            url:         { type: String, default: "", trim: true },
            siteName:    { type: String, default: "Upthrust", trim: true },
            image:       { type: String, default: "", trim: true },  // path e.g. /ogimage/google-og.png
            type:        { type: String, default: "website", trim: true },
        },

        // ── Twitter Card ────────────────────────────────────────────────────
        twitter: {
            card:        { type: String, default: "summary_large_image", trim: true },
            title:       { type: String, default: "", trim: true },
            description: { type: String, default: "", trim: true },
            image:       { type: String, default: "", trim: true },
        },
    },
    { timestamps: true }
);

const PageMeta = mongoose.model("PageMeta", PageMetaSchema);

export default PageMeta;