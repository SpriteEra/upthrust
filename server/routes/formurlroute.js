import express from "express";

import {
    getAllFormUrls,
    getFormUrlMap,
    getFormUrlById,
    getFormUrlByKey,
    createFormUrl,
    bulkUpsertFormUrls,
    updateFormUrl,
    patchFormUrl,
    toggleFormUrl,
    deleteFormUrl,
    bulkDeleteFormUrls
} from "../controllers/formController.js";

const router = express.Router();
// ─── Public Route ─────────────────────────────────────────────────────────────
// Frontend uses this to replace the hardcoded FORM_URLS constant
router.get("/map", getFormUrlMap);

// ─── Admin / CRUD Routes ──────────────────────────────────────────────────────

// READ
router.get("/all-urls", getAllFormUrls);
router.get("/key/:key", getFormUrlByKey);
router.get("/:id", getFormUrlById);

// CREATE
router.post("/", createFormUrl);             // POST /api/form-urls           → create one
router.post("/bulk", bulkUpsertFormUrls);    // POST /api/form-urls/bulk      → seed/import from FORM_URLS map

// UPDATE
router.put("/:id", updateFormUrl);           // PUT  /api/form-urls/:id       → full replace
router.patch("/:id", patchFormUrl);          // PATCH /api/form-urls/:id      → partial update
router.patch("/:id/toggle", toggleFormUrl);  // PATCH /api/form-urls/:id/toggle → toggle active

// DELETE
router.delete("/bulk", bulkDeleteFormUrls);  // DELETE /api/form-urls (body: { ids }) → bulk delete
router.delete("/:id", deleteFormUrl);        // DELETE /api/form-urls/:id     → delete one

export default router;