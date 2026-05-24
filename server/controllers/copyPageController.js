import CopyPage from "../models/copyPage.js";
import Page from "../models/page.js";

// ─── CREATE COPY PAGE ─────────────────────────────────────────────────────────
export const createCopyPage = async (req, res) => {
    try {
        const { title, slug, parentPage, additionalFields } = req.body;

        if (!title || !slug || !parentPage) {
            return res.status(400).json({ success: false, message: "title, slug and parentPage are required" });
        }

        // Verify parent exists
        const parent = await Page.findById(parentPage);
        if (!parent) return res.status(404).json({ success: false, message: "Parent page not found" });

        const existing = await CopyPage.findOne({ slug });
        if (existing) return res.status(409).json({ success: false, message: "A copy page with this slug already exists" });

        const copyPage = await CopyPage.create({
            title,
            slug,
            parentPage,
            additionalFields: additionalFields || {},
        });

        res.status(201).json({ success: true, message: "Copy page created", data: copyPage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET ALL COPY PAGES (optionally filter by parentPage) ─────────────────────
export const getAllCopyPages = async (req, res) => {
    try {
        const filter = {};
        if (req.query.parentPage) filter.parentPage = req.query.parentPage;

        const pages = await CopyPage.find(filter).populate("parentPage", "title url").lean();
        res.status(200).json({ success: true, data: pages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET SINGLE COPY PAGE by ID or slug ──────────────────────────────────────
export const getCopyPage = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);

        const page = await CopyPage.findOne(
            isObjectId ? { _id: id } : { slug: id }
        ).populate("parentPage", "title url").lean();

        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        // If blocked and accessed via slug (i.e. from frontend), reject
        if (page.isBlocked && !isObjectId) {
            return res.status(403).json({ success: false, message: "This page is currently unavailable" });
        }

        res.status(200).json({ success: true, data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── UPDATE base fields (title, slug, parentPage) ────────────────────────────
export const updateCopyPage = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, slug, parentPage } = req.body;

        // Check slug conflict (exclude current doc)
        if (slug) {
            const conflict = await CopyPage.findOne({ slug, _id: { $ne: id } });
            if (conflict) return res.status(409).json({ success: false, message: "Slug already used by another copy page" });
        }

        const page = await CopyPage.findByIdAndUpdate(
            id,
            { title, slug, parentPage },
            { new: true, runValidators: true }
        ).populate("parentPage", "title url");

        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        res.status(200).json({ success: true, message: "Copy page updated", data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── TOGGLE BLOCKED STATUS ────────────────────────────────────────────────────
export const toggleBlock = async (req, res) => {
    try {
        const { id } = req.params;
        const page = await CopyPage.findById(id);
        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        page.isBlocked = !page.isBlocked;
        await page.save();

        res.status(200).json({
            success: true,
            message: `Copy page ${page.isBlocked ? "blocked" : "unblocked"}`,
            data: page,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── UPSERT A SINGLE KEY in additionalFields ─────────────────────────────────
export const upsertAdditionalField = async (req, res) => {
    try {
        const { id } = req.params;
        const { key, value } = req.body;
        if (!key) return res.status(400).json({ success: false, message: "'key' is required" });

        const page = await CopyPage.findByIdAndUpdate(
            id,
            { $set: { [`additionalFields.${key}`]: value } },
            { new: true }
        );

        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        res.status(200).json({ success: true, message: `'${key}' updated`, data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── BULK UPDATE additionalFields ────────────────────────────────────────────
export const bulkUpdateAdditionalFields = async (req, res) => {
    try {
        const { id } = req.params;
        const { fields } = req.body;

        if (!fields || typeof fields !== "object") {
            return res.status(400).json({ success: false, message: "'fields' must be an object" });
        }

        const setPayload = Object.entries(fields).reduce((acc, [k, v]) => {
            acc[`additionalFields.${k}`] = v;
            return acc;
        }, {});

        const page = await CopyPage.findByIdAndUpdate(id, { $set: setPayload }, { new: true });
        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        res.status(200).json({ success: true, message: "additionalFields updated", data: page });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── DELETE COPY PAGE ─────────────────────────────────────────────────────────
export const deleteCopyPage = async (req, res) => {
    try {
        const page = await CopyPage.findByIdAndDelete(req.params.id);
        if (!page) return res.status(404).json({ success: false, message: "Copy page not found" });

        res.status(200).json({ success: true, message: "Copy page deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};