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

const router = express.Router();

router.post("/create-page", createPage);
router.get("/all-pages", getAllPages);
router.get("/:id", getPage);              // id or url slug
router.put("/:id", updatePage);            // title, url, faq
router.patch("/:id/field", upsertAdditionalField); // single key
router.patch("/:id/fields", bulkUpdateAdditionalFields); // multiple keys
router.delete("/:id/field", removeAdditionalField); // remove a key
router.delete("/:id", deletePage);

export default router;