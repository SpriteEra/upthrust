// import bunny from "../services/BunnyService.js"

// // Image Part
// /**
//  * POST /api/media/images/upload
//  * multipart: image + category + subcategory?
//  */
// const uploadImage = async (req, res) => {
//     try {
//         if (!req.file) return res.status(400).json({ success: false, message: "No image file provided." });

//         const { buffer, mimetype, originalname, size } = req.file;

//         if (!mimetype.startsWith("image/")) return res.status(400).json({ success: false, message: "File must be an image." });
//         if (size > 25 * 1024 * 1024) return res.status(400).json({ success: false, message: "Image must be under 25 MB." });

//         const category = (req.body.category || "general").trim().toLowerCase().replace(/\s+/g, "-");
//         const subcategory = (req.body.subcategory || "").trim().toLowerCase().replace(/\s+/g, "-");

//         const result = await bunny.uploadImage(buffer, mimetype, originalname, { category, subcategory });

//         return res.status(200).json({ success: true, message: "Image uploaded.", data: result });
//     } catch (err) {
//         console.error("[uploadImage]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to upload image.", error: err.message });
//     }
// };

// /**
//  * GET /api/media/images/categories
//  * Returns all top-level folder names under images/
//  * Frontend merges these with its preset list
//  */
// const getImageCategories = async (req, res) => {
//     try {
//         const items = await bunny.listImages("images/");
//         const categories = items
//             .filter((i) => i.isDirectory)
//             .map((i) => i.name.replace(/\/$/, ""))
//             .filter(Boolean);

//         return res.status(200).json({ success: true, data: categories });
//     } catch (err) {
//         console.error("[getImageCategories]", err.message);
//         // return empty so frontend falls back to presets gracefully
//         return res.status(200).json({ success: true, data: [] });
//     }
// };

// /**
//  * GET /api/media/images
//  * ?folder=images/blog/
//  */
// const listImages = async (req, res) => {
//     try {
//         const folder = req.query.folder || "images/";
//         const images = await bunny.listImages(folder);
//         return res.status(200).json({ success: true, data: images, total: images.length });
//     } catch (err) {
//         console.error("[listImages]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to list images.", error: err.message });
//     }
// };

// /**
//  * DELETE /api/media/images/:fileName
//  * fileName is URL-encoded, e.g. images%2Fblog%2Fabc.jpg
//  */
// const deleteImage = async (req, res) => {
//     try {
//         const fileName = decodeURIComponent(req.params.fileName || "");
//         if (!fileName) return res.status(400).json({ success: false, message: "fileName is required." });

//         const result = await bunny.deleteImage(fileName);
//         return res.status(200).json({ success: true, message: "Image deleted.", data: result });
//     } catch (err) {
//         console.error("[deleteImage]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to delete image.", error: err.message });
//     }
// };

// // ═══════════════════════════════════════════════════════════════════════
// // VIDEO COLLECTIONS  (= folders for Bunny Stream)
// // ═══════════════════════════════════════════════════════════════════════

// /**
//  * GET /api/media/videos/collections
//  * Returns all collections from the Bunny Stream library
//  * Frontend uses this to populate the collection picker
//  */
// const listCollections = async (req, res) => {
//     try {
//         const collections = await bunny.listCollections();
//         return res.status(200).json({ success: true, data: collections });
//     } catch (err) {
//         console.error("[listCollections]", err.message);
//         // return empty so the frontend degrades gracefully
//         return res.status(200).json({ success: true, data: [] });
//     }
// };

// /**
//  * POST /api/media/videos/collections
//  * Body: { name: string }
//  * Creates a new collection and returns its GUID
//  */
// const createCollection = async (req, res) => {
//     try {
//         const name = (req.body.name || "").trim();
//         if (!name) return res.status(400).json({ success: false, message: "Collection name is required." });

//         const collection = await bunny.createCollection(name);
//         return res.status(201).json({ success: true, message: "Collection created.", data: collection });
//     } catch (err) {
//         console.error("[createCollection]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to create collection.", error: err.message });
//     }
// };

// /**
//  * GET /api/media/videos/collections/:guid
//  */
// const getCollection = async (req, res) => {
//     try {
//         const collection = await bunny.getCollection(req.params.guid);
//         return res.status(200).json({ success: true, data: collection });
//     } catch (err) {
//         console.error("[getCollection]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to get collection.", error: err.message });
//     }
// };

// // ═══════════════════════════════════════════════════════════════════════
// // VIDEOS
// // ═══════════════════════════════════════════════════════════════════════

// /**
//  * POST /api/media/videos/upload
//  * multipart: video + title + collectionId?
//  */
// const uploadVideo = async (req, res) => {
//     try {
//         if (!req.file) return res.status(400).json({ success: false, message: "No video file provided." });

//         const { buffer, mimetype, originalname, size } = req.file;
//         const title = (req.body.title || originalname.replace(/\.[^.]+$/, "")).trim();
//         const collectionId = req.body.collectionId || null;   // Bunny Stream collection GUID

//         if (!mimetype.startsWith("video/")) return res.status(400).json({ success: false, message: "File must be a video." });
//         if (size > 4 * 1024 * 1024 * 1024) return res.status(400).json({ success: false, message: "Video must be under 4 GB." });

//         const videoObject = await bunny.createVideoObject(title, collectionId);
//         const urls = await bunny.uploadVideoBuffer(videoObject.guid, buffer, mimetype);

//         return res.status(200).json({
//             success: true,
//             message: "Video uploaded. Encoding will begin shortly.",
//             data: {
//                 guid: videoObject.guid,
//                 title,
//                 status: videoObject.status,
//                 collectionId: collectionId || null,
//                 ...urls,
//             },
//         });
//     } catch (err) {
//         console.error("[uploadVideo]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to upload video.", error: err.message });
//     }
// };

// /**
//  * GET /api/media/videos
//  * ?page=1&perPage=20&search=&collectionId=
//  */
// const listVideos = async (req, res) => {
//     try {
//         const page = parseInt(req.query.page) || 1;
//         const perPage = parseInt(req.query.perPage) || 20;
//         const search = req.query.search || "";
//         const collectionId = req.query.collectionId || "";

//         const result = await bunny.listVideos(page, perPage, search, collectionId);

//         return res.status(200).json({
//             success: true,
//             data: result.items,
//             pagination: {
//                 currentPage: result.currentPage,
//                 perPage,
//                 total: result.totalItems,
//                 totalPages: Math.ceil(result.totalItems / perPage),
//             },
//         });
//     } catch (err) {
//         console.error("[listVideos]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to list videos.", error: err.message });
//     }
// };

// /**
//  * GET /api/media/videos/:guid
//  */
// const getVideo = async (req, res) => {
//     try {
//         const video = await bunny.getVideo(req.params.guid);
//         return res.status(200).json({ success: true, data: video });
//     } catch (err) {
//         console.error("[getVideo]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to get video.", error: err.message });
//     }
// };

// /**
//  * PATCH /api/media/videos/:guid
//  * Body: { title?, collectionId?, tags?, ... }
//  */
// const updateVideo = async (req, res) => {
//     try {
//         const updates = req.body;
//         if (!updates || Object.keys(updates).length === 0)
//             return res.status(400).json({ success: false, message: "No update fields provided." });

//         const result = await bunny.updateVideo(req.params.guid, updates);
//         return res.status(200).json({ success: true, message: "Video updated.", data: result });
//     } catch (err) {
//         console.error("[updateVideo]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to update video.", error: err.message });
//     }
// };

// /**
//  * DELETE /api/media/videos/:guid
//  */
// const deleteVideo = async (req, res) => {
//     try {
//         const result = await bunny.deleteVideo(req.params.guid);
//         return res.status(200).json({ success: true, message: "Video deleted.", data: result });
//     } catch (err) {
//         console.error("[deleteVideo]", err.message);
//         return res.status(500).json({ success: false, message: "Failed to delete video.", error: err.message });
//     }
// };

// export default {
//     // images
//     uploadImage, getImageCategories, listImages, deleteImage,
//     // collections
//     listCollections, createCollection, getCollection,
//     // videos
//     uploadVideo, listVideos, getVideo, updateVideo, deleteVideo,
// };

import bunny from "../services/BunnyService.js";
import { Media } from "../models/Media.js";

// ─────────────────────────────────────────────────────────────────────────────
// FOLDER ENDPOINTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/media/folders?type=images|videos
 *
 * Returns top-level folders inside /images/ and /videos/ on Bunny Storage.
 * These are fetched live from Bunny so the frontend always shows real folders.
 *
 * Response:
 *   { success, data: { images: [{name,path}], videos: [{name,path}] } }
 *   OR if ?type=images:
 *   { success, data: [{name,path}] }
 */
export const getFolders = async (req, res) => {
    try {
        const { type } = req.query;

        if (type && !["images", "videos"].includes(type))
            return res.status(400).json({ success: false, message: 'type must be "images" or "videos".' });

        const all = await bunny.listMediaFolders();

        const data = type ? all[type] : all;
        return res.status(200).json({ success: true, data });
    } catch (err) {
        console.error("[getFolders]", err.response?.data || err.message);
        // Return empty rather than crashing — folders might not exist yet
        const empty = req.query.type ? [] : { images: [], videos: [] };
        return res.status(200).json({ success: true, data: empty, warning: "Could not reach Bunny Storage." });
    }
};

/**
 * GET /api/media/folders/sub?type=images|videos&category=blog
 *
 * Returns sub-folders inside /images/blog/ or /videos/hero/ etc.
 */
export const getSubFolders = async (req, res) => {
    try {
        const { type, category } = req.query;

        if (!type || !category)
            return res.status(400).json({ success: false, message: "type and category are required." });

        const subs = await bunny.listSubFolders(type, category);
        return res.status(200).json({ success: true, data: subs });
    } catch (err) {
        console.error("[getSubFolders]", err.response?.data || err.message);
        return res.status(200).json({ success: true, data: [] });
    }
};

/**
 * POST /api/media/folders
 * Body: { type: "images"|"videos", name: "blog", parent?: "parentFolder" }
 *
 * Creates a folder on Bunny Storage by uploading a tiny .keep placeholder.
 * Bunny has no "mkdir" API — folders exist only when they contain files.
 *
 * Response: { success, data: { created, path, message } }
 */
export const createFolder = async (req, res) => {
    try {
        const { type, name, parent = "" } = req.body;

        if (!type || !["images", "videos"].includes(type))
            return res.status(400).json({ success: false, message: 'type must be "images" or "videos".' });

        if (!name?.trim())
            return res.status(400).json({ success: false, message: "Folder name is required." });

        // Sanitise: lowercase, replace spaces/special chars with hyphens
        const slug = name.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-");

        // Build full path: images/blog  OR  images/blog/thumbnails
        const parts = [type, parent?.trim(), slug].filter(Boolean);
        const folderPath = parts.join("/");

        const result = await bunny.createFolder(folderPath);

        return res.status(201).json({
            success: true,
            message: `Folder "${folderPath}" created.`,
            data: { ...result, slug },
        });
    } catch (err) {
        console.error("[createFolder]", err.response?.data || err.message);
        return res.status(500).json({ success: false, message: "Failed to create folder.", error: err.message });
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// UPLOAD ENDPOINTS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * POST /api/media/prepare
 * Body: { type, fileName, mimeType, size?, category?, subcategory? }
 *
 * Returns credentials for the browser to PUT directly to Bunny Storage.
 * The accessKey (storage password) is returned here — route is protected.
 *
 * Correct Bunny upload URL:
 *   PUT https://{hostname}/{storageZone}/{path}/{fileName}
 *   Header: AccessKey: {storage-zone-password}
 *   Body:   raw binary file bytes (no encoding)
 *   Response: 201 on success
 */
export const prepareUpload = async (req, res) => {
    try {
        const { type, fileName, mimeType, size, category = "general", subcategory = "" } = req.body;

        if (!type || !["images", "videos"].includes(type))
            return res.status(400).json({ success: false, message: 'type must be "images" or "videos".' });

        if (!fileName || !mimeType)
            return res.status(400).json({ success: false, message: "fileName and mimeType are required." });

        if (type === "images" && !mimeType.startsWith("image/"))
            return res.status(400).json({ success: false, message: "File must be an image." });

        if (type === "videos" && !mimeType.startsWith("video/"))
            return res.status(400).json({ success: false, message: "File must be a video." });

        if (type === "images" && size && size > 25 * 1024 * 1024)
            return res.status(400).json({ success: false, message: "Image must be under 25 MB." });

        const catSlug = (category || "general").trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-");
        const subSlug = (subcategory || "").trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-");

        const creds = await bunny.prepareUpload(type, fileName, mimeType, catSlug, subSlug || "");

        return res.status(200).json({
            success: true,
            data: {
                ...creds,
                category: catSlug,
                subcategory: subSlug,
                // Instructions for the browser:
                // 1. PUT {uploadUrl} with raw file bytes
                // 2. Header: AccessKey: {accessKey}
                // 3. Header: Content-Type: {mimeType}
                // 4. Expect HTTP 201 on success
            },
        });
    } catch (err) {
        console.error("[prepareUpload]", err.message);
        return res.status(500).json({ success: false, message: "Failed to prepare upload.", error: err.message });
    }
};

/**
 * POST /api/media/save
 * Body: { type, fileName, cdnUrl, originalName?, mimeType?, size?, category?, subcategory? }
 *
 * Called by the browser AFTER the XHR PUT to Bunny returns HTTP 201.
 * Saves metadata to MongoDB.
 */
export const saveMeta = async (req, res) => {
    try {
        const { type, fileName, cdnUrl, originalName = "", mimeType = "", size = 0, category = "general", subcategory = "" } = req.body;

        if (!type || !fileName || !cdnUrl)
            return res.status(400).json({ success: false, message: "type, fileName and cdnUrl are required." });

        // Idempotent — prevent duplicates if browser calls twice
        const existing = await Media.findOne({ fileName });
        if (existing)
            return res.status(200).json({ success: true, message: "Already saved.", data: existing });

        const media = await Media.create({ type, fileName, cdnUrl, originalName, mimeType, size, category, subcategory });
        return res.status(201).json({ success: true, message: "Saved.", data: media });
    } catch (err) {
        console.error("[saveMeta]", err.message);
        return res.status(500).json({ success: false, message: "Failed to save metadata.", error: err.message });
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// LIST & DELETE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * GET /api/media
 * Query: { type?, category?, subcategory?, page?, limit? }
 */
export const listMedia = async (req, res) => {
    try {
        const { type, category, subcategory, page = 1, limit = 20 } = req.query;

        const filter = {};
        if (type) filter.type = type;
        if (category) filter.category = category;
        if (subcategory) filter.subcategory = subcategory;

        const skip = (Number(page) - 1) * Number(limit);

        const [items, total] = await Promise.all([
            Media.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
            Media.countDocuments(filter),
        ]);

        return res.status(200).json({ success: true, data: items, total, page: Number(page), totalPages: Math.ceil(total / Number(limit)) });
    } catch (err) {
        console.error("[listMedia]", err.message);
        return res.status(500).json({ success: false, message: "Failed to list media.", error: err.message });
    }
};

/**
 * DELETE /api/media/:id
 * :id = MongoDB _id
 *
 * Deletes file from Bunny Storage using stored fileName, then removes DB doc.
 */
export const deleteMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media)
            return res.status(404).json({ success: false, message: "Media not found." });

        await bunny.deleteFile(media.fileName);
        await media.deleteOne();

        return res.status(200).json({ success: true, message: "Deleted." });
    } catch (err) {
        console.error("[deleteMedia]", err.response?.data || err.message);
        return res.status(500).json({ success: false, message: "Failed to delete.", error: err.message });
    }
};
