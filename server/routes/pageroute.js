// routes/pageRoutes.js
import express from "express";
import {
    createPage,
    getAllPages,
    getPage,
    updatePage,
    upsertAdditionalField,
    bulkUpdateAdditionalFields,
    removeAdditionalField,
    deletePage,
} from "../controllers/pageController.js";
import authFlex from "../middleware/authFlex.js";

const router = express.Router();

router.post("/create-page", authFlex, createPage);
router.get("/all-pages", authFlex, getAllPages);
router.get("/:id", getPage);              // id or url slug
router.put("/:id", authFlex, updatePage);            // title, url, faq
router.patch("/:id/field", authFlex, upsertAdditionalField); // single key
router.patch("/:id/fields", authFlex, bulkUpdateAdditionalFields); // multiple keys
router.delete("/:id/field", authFlex, removeAdditionalField); // remove a key
router.delete("/:id", authFlex, deletePage);

export default router;