// routes/copyPageRoute.js
import express from "express";
import {
    createCopyPage,
    getAllCopyPages,
    getCopyPage,
    updateCopyPage,
    toggleBlock,
    upsertAdditionalField,
    bulkUpdateAdditionalFields,
    deleteCopyPage,
} from "../controllers/copyPageController.js";
import authFlex from "../middleware/authFlex.js";

const router = express.Router();

router.post("/create", authFlex, createCopyPage);                      // POST   /api/copy-pages/create
router.get("/all", authFlex, getAllCopyPages);                          // GET    /api/copy-pages/all?parentPage=<id>
router.get("/:id", getCopyPage);                             // GET    /api/copy-pages/:id  (id or slug)
router.put("/:id", authFlex, updateCopyPage);                          // PUT    /api/copy-pages/:id
router.patch("/:id/toggle-block", authFlex, toggleBlock);              // PATCH  /api/copy-pages/:id/toggle-block 
router.patch("/:id/field", authFlex, upsertAdditionalField);           // PATCH  /api/copy-pages/:id/field
router.patch("/:id/fields", authFlex, bulkUpdateAdditionalFields);     // PATCH  /api/copy-pages/:id/fields
router.delete("/:id", authFlex, deleteCopyPage);                     // DELETE /api/copy-pages/:id

export default router;