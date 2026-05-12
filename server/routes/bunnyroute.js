// import express from "express";
// import multer from "multer";
// import ctrl from "../controllers/BunnyController.js";

// // ─────────────────────────────────────────────────────────────────────────────
// // MULTER — memory storage
// // ─────────────────────────────────────────────────────────────────────────────

// const mem = multer.memoryStorage();

// const imageUpload = multer({
//     storage: mem,
//     limits: { fileSize: 25 * 1024 * 1024 },
//     fileFilter: (_, f, cb) =>
//         f.mimetype.startsWith("image/") ? cb(null, true) : cb(new Error("Only image files allowed.")),
// }).single("image");

// const videoUpload = multer({
//     storage: mem,
//     limits: { fileSize: 2 * 1024 * 1024 * 1024 },
//     fileFilter: (_, f, cb) =>
//         f.mimetype.startsWith("video/") ? cb(null, true) : cb(new Error("Only video files allowed.")),
// }).single("video");

// const wrap = (mw) => (req, res, next) =>
//     mw(req, res, (err) => {
//         if (err instanceof multer.MulterError) return res.status(400).json({ success: false, message: err.message });
//         if (err) return res.status(400).json({ success: false, message: err.message });
//         next();
//     });

// // ─────────────────────────────────────────────────────────────────────────────
// // ROUTES
// // ─────────────────────────────────────────────────────────────────────────────

// const router = express.Router();

// // ── Images ──────────────────────────────────────────────────────────────────
// // IMPORTANT: specific paths (/categories, /upload) must come BEFORE /:fileName
// router.get("/images/categories", ctrl.getImageCategories);
// router.post("/images/upload", wrap(imageUpload), ctrl.uploadImage);
// router.get("/images", ctrl.listImages);
// router.delete("/images/:fileName", ctrl.deleteImage);

// // ── Video Collections (= folders for Bunny Stream) ──────────────────────────
// // IMPORTANT: /collections routes before /videos/:guid so "collections" isn't
// // parsed as a guid param
// router.get("/videos/collections", ctrl.listCollections);   // GET  all collections → for picker
// router.post("/videos/collections", ctrl.createCollection);  // POST create new collection
// router.get("/videos/collections/:guid", ctrl.getCollection);     // GET  single collection

// // ── Videos ──────────────────────────────────────────────────────────────────
// router.post("/videos/upload", wrap(videoUpload), ctrl.uploadVideo);
// router.get("/videos", ctrl.listVideos);
// router.get("/videos/:guid", ctrl.getVideo);
// router.patch("/videos/:guid", ctrl.updateVideo);
// router.delete("/videos/:guid", ctrl.deleteVideo);





// export default router;
import express from "express";
import authFlex from "../middleware/authFlex.js";
import {
    getFolders,
    getSubFolders,
    createFolder,
    prepareUpload,
    saveMeta,
    listMedia,
    deleteMedia,
} from "../controllers/BunnyController.js";

/**
 * /api/media — Bunny Storage for images + videos.
 * No multer. File bytes never pass through this server.
 *
 * IMPORTANT: specific paths (/folders, /prepare, /save) must come
 * BEFORE /:id so Express does not treat them as an id param.
 */
const router = express.Router();

// ── Folder management ─────────────────────────────────────────────────────────
// GET  /api/media/folders?type=images|videos          → list top-level folders from Bunny
// GET  /api/media/folders/sub?type=...&category=...   → list sub-folders from Bunny
// POST /api/media/folders                             → create folder (uploads .keep to Bunny)

router.get("/folders/sub", authFlex, getSubFolders);   // /sub BEFORE /folders to avoid conflict
router.get("/folders", authFlex, getFolders);
router.post("/folders", authFlex, createFolder);

// ── Upload ────────────────────────────────────────────────────────────────────
// POST /api/media/prepare  → returns Bunny upload URL + accessKey (browser PUTs directly)
// POST /api/media/save     → save metadata to MongoDB after browser upload succeeds

router.post("/prepare", authFlex, prepareUpload);
router.post("/save", authFlex, saveMeta);

// ── List ──────────────────────────────────────────────────────────────────────
// GET /api/media?type=images|videos&category=...&page=...&limit=...

router.get("/", authFlex, listMedia);

// ── Delete ────────────────────────────────────────────────────────────────────
// DELETE /api/media/:id  → :id is MongoDB _id

router.delete("/:id", authFlex, deleteMedia);

export default router;
