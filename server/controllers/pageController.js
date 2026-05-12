// controllers/pageController.js
import Page from "../models/page.js";

// ─── CREATE PAGE ───────────────
export const createPage = async (req, res) => {
    try {
        const { title, url, additionalFields } = req.body;

        const existingPage = await Page.findOne({ url });
        if (existingPage) {
            return res.status(409).json({ success: false, message: "Page with this URL already exists" });
        }

        const page = await Page.create({
            title,
            url,
            additionalFields: additionalFields || {},
        });

        res.status(201).json({ success: true, message: "Page created successfully", data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET ALL PAGES ───────────────────────────────────────────────────────────────
export const getAllPages = async (req, res) => {
    try {
        const pages = await Page.find().populate("faq").lean();
        res.status(200).json({ success: true, data: pages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET PAGE BY URL OR ID ────────────────────────────────────────────────────
export const getPage = async (req, res) => {
    try {
        const { id } = req.params; // can be _id or url slug
        const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);

        const page = await Page.findOne(
            isObjectId ? { _id: id } : { url: id }
        ).populate("faq").lean();

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── UPDATE BASE FIELDS (title, url, faq) ────────────────────────────────────
export const updatePage = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, url, faq } = req.body;

        const page = await Page.findByIdAndUpdate(
            id,
            { title, url, faq },
            { new: true, runValidators: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: "Page updated", data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── ADD / UPDATE A SPECIFIC KEY IN additionalFields ─────────────────────────
/**
 * Body: { key: "testimonials", value: [ {...}, {...} ] }
 * This MERGES the key into additionalFields without touching other keys.
 */
export const upsertAdditionalField = async (req, res) => {
    try {
        const { id } = req.params;
        const { key, value } = req.body;

        if (!key) return res.status(400).json({ success: false, message: "'key' is required" });

        const page = await Page.findByIdAndUpdate(
            id,
            { $set: { [`additionalFields.${key}`]: value } },
            { new: true, runValidators: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({
            success: true,
            message: `'${key}' updated in additionalFields`,
            data: page,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── BULK UPDATE additionalFields (replace multiple keys at once) ─────────────
/**
 * Body: { fields: { testimonials: [...], hero: {...}, gallery: [...] } }
 * Each key is dot-notation set, so existing unrelated keys are preserved.
 */
export const bulkUpdateAdditionalFields = async (req, res) => {
    try {
        const { id } = req.params;
        const { fields } = req.body; // { testimonials: [...], gallery: [...] }

        if (!fields || typeof fields !== "object") {
            return res.status(400).json({ success: false, message: "'fields' must be an object" });
        }

        // Build $set payload: { "additionalFields.testimonials": [...], ... }
        const setPayload = Object.entries(fields).reduce((acc, [key, val]) => {
            acc[`additionalFields.${key}`] = val;
            return acc;
        }, {});

        const page = await Page.findByIdAndUpdate(
            id,
            { $set: setPayload },
            { new: true, runValidators: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: "additionalFields updated", data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── REMOVE A KEY FROM additionalFields ──────────────────────────────────────
export const removeAdditionalField = async (req, res) => {
    try {
        const { id } = req.params;
        const { key } = req.body;

        if (!key) return res.status(400).json({ success: false, message: "'key' is required" });

        const page = await Page.findByIdAndUpdate(
            id,
            { $unset: { [`additionalFields.${key}`]: "" } },
            { new: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: `'${key}' removed from additionalFields`, data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── DELETE PAGE ──────────────────────────────────────────────────────────────
export const deletePage = async (req, res) => {
    try {
        const page = await Page.findByIdAndDelete(req.params.id);
        if (!page) return res.status(404).json({ success: false, message: "Page not found" });

        res.status(200).json({ success: true, message: "Page deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};