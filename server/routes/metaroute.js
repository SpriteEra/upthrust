// routes/pageMetaRoute.js
import express from "express";
import {
    createPageMeta,
    getAllPageMeta,
    getPageMeta,
    updatePageMeta,
    deletePageMeta,
} from "../controllers/Pagemetacontroller.js";
import authFlex from "../middleware/authFlex.js";

const router = express.Router();

router.post("/create", authFlex, createPageMeta);   // POST   /api/page-meta/create
router.get("/all", authFlex, getAllPageMeta);        // GET    /api/page-meta/all?search=<q>
router.get("/:id", getPageMeta);          // GET    /api/page-meta/:id  (id or slug)
router.put("/:id", authFlex, updatePageMeta);       // PUT    /api/page-meta/:id
router.delete("/:id", authFlex, deletePageMeta);    // DELETE /api/page-meta/:id

export default router;