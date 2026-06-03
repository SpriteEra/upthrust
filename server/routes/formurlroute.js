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
import authFlex from "../middleware/authFlex.js";

const router = express.Router();
// ─── Public Route ─────────────────────────────────────────────────────────────
// Frontend uses this to replace the hardcoded FORM_URLS constant
router.get("/map", authFlex, getFormUrlMap);

// ─── Admin / CRUD Routes ──────────────────────────────────────────────────────

// READ
router.get("/all-urls", getAllFormUrls);
router.get("/key/:key", authFlex, getFormUrlByKey);
router.get("/:id", authFlex, getFormUrlById);

// CREATE
router.post("/", authFlex, createFormUrl);             // POST /api/form-urls           → create one
router.post("/bulk", authFlex, bulkUpsertFormUrls);    // POST /api/form-urls/bulk      → seed/import from FORM_URLS map

// UPDATE
router.put("/:id", authFlex, updateFormUrl);           // PUT  /api/form-urls/:id       → full replace
router.patch("/:id", authFlex, patchFormUrl);          // PATCH /api/form-urls/:id      → partial update
router.patch("/:id/toggle", authFlex, toggleFormUrl);  // PATCH /api/form-urls/:id/toggle → toggle active

// DELETE
router.delete("/bulk", authFlex, bulkDeleteFormUrls);  // DELETE /api/form-urls (body: { ids }) → bulk delete
router.delete("/:id", authFlex, deleteFormUrl);        // DELETE /api/form-urls/:id     → delete one

export default router;