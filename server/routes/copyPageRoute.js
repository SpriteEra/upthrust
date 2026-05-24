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

const router = express.Router();

router.post("/create", createCopyPage);                      // POST   /api/copy-pages/create
router.get("/all", getAllCopyPages);                          // GET    /api/copy-pages/all?parentPage=<id>
router.get("/:id", getCopyPage);                             // GET    /api/copy-pages/:id  (id or slug)
router.put("/:id", updateCopyPage);                          // PUT    /api/copy-pages/:id
router.patch("/:id/toggle-block", toggleBlock);              // PATCH  /api/copy-pages/:id/toggle-block
router.patch("/:id/field", upsertAdditionalField);           // PATCH  /api/copy-pages/:id/field
router.patch("/:id/fields", bulkUpdateAdditionalFields);     // PATCH  /api/copy-pages/:id/fields
router.delete("/:id", deleteCopyPage);                     // DELETE /api/copy-pages/:id

export default router;