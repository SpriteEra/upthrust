import mongoose from "mongoose";

const formUrlSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: [true, "Key is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^[a-zA-Z0-9_-]+$/,
                "Key can only contain letters, numbers, hyphens, and underscores"
            ]
        },
        label: {
            type: String,
            required: [true, "Label is required"],
            trim: true
        },
        url: {
            type: String,
            required: [true, "URL is required"],
            trim: true,
            match: [
                /^https?:\/\/.+/,
                "URL must start with http:// or https://"
            ]
        },
        isActive: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            trim: true,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

// Static method to get all URLs as key-value map (for frontend consumption)
formUrlSchema.statics.toFrontendMap = async function () {
    const docs = await this.find({ isActive: true }).select("key url -_id");
    return docs.reduce((acc, doc) => {
        acc[doc.key] = doc.url;
        return acc;
    }, {});
};

const FormUrl = mongoose.models.FormUrl || mongoose.model("FormUrl", formUrlSchema);
export default FormUrl;