import mongoose from "mongoose";

const CopyPageSchema = new mongoose.Schema(
    {
        // Human-readable name shown in admin
        title: {
            type: String,
            required: true,
            trim: true,
        },

        // URL slug used in Next.js frontend  e.g. "shopify-seo-agency"
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        // Which main page this copy belongs to  (references Page._id)
        parentPage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Page",
            required: true,
        },

        // false = live on frontend, true = hidden/blocked
        isBlocked: {
            type: Boolean,
            default: false,
        },

        // Same flexible schema as Page.additionalFields
        additionalFields: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    { timestamps: true }
);

const CopyPage = mongoose.model("CopyPage", CopyPageSchema);

export default CopyPage;