import mongoose from "mongoose";

/**
 * Single unified schema for all media files (images + videos).
 * Both are stored on Bunny Storage and deleted the same way — by fileName.
 *
 * To delete from Bunny:  DELETE /{storageZone}/{fileName}
 * To serve publicly:     BUNNY_CDN_URL + "/" + fileName
 */
const mediaSchema = new mongoose.Schema(
    {
        // "images" | "videos"
        type: {
            type: String,
            enum: ["images", "videos"],
            required: true,
        },

        // Full storage path — e.g. "images/blog/1714000000-abc.jpg"
        //                     or  "videos/hero/1714000000-xyz.mp4"
        // This is the key you pass to the Bunny Storage DELETE API.
        fileName: {
            type: String,
            required: true,
            unique: true,
        },

        // Public CDN URL — BUNNY_CDN_URL + "/" + fileName
        cdnUrl: {
            type: String,
            required: true,
        },

        // Original file name the user uploaded (display only)
        originalName: {
            type: String,
            default: "",
        },

        mimeType: {
            type: String,
            default: "",
        },

        // Bytes
        size: {
            type: Number,
            default: 0,
        },

        // Folder organisation (optional, freeform)
        category: {
            type: String,
            default: "general",
            trim: true,
        },

        subcategory: {
            type: String,
            default: "",
            trim: true,
        },
    },
    { timestamps: true }
);

export const Media = mongoose.model("Media", mediaSchema);
