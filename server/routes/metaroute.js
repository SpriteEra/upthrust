// routes/pageMetaRoute.js
import express from "express";
import {
    createPageMeta,
    getAllPageMeta,
    getPageMeta,
    updatePageMeta,
    deletePageMeta,
} from "../controllers/Pagemetacontroller.js";

const router = express.Router();

router.post("/create", createPageMeta);   // POST   /api/page-meta/create
router.get("/all", getAllPageMeta);        // GET    /api/page-meta/all?search=<q>
router.get("/:id", getPageMeta);          // GET    /api/page-meta/:id  (id or slug)
router.put("/:id", updatePageMeta);       // PUT    /api/page-meta/:id
router.delete("/:id", deletePageMeta);    // DELETE /api/page-meta/:id

export default router;