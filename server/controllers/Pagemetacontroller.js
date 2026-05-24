import PageMeta from "../models/pageMeta.js";

// ─── CREATE ───────────────────────────────────────────────────────────────────
export const createPageMeta = async (req, res) => {
    try {
        const { slug, label, title, description, keywords, canonical, robots, openGraph, twitter } = req.body;

        if (!slug || !label) {
            return res.status(400).json({ success: false, message: "slug and label are required" });
        }

        const existing = await PageMeta.findOne({ slug });
        if (existing) {
            return res.status(409).json({ success: false, message: "Metadata for this slug already exists" });
        }

        const meta = await PageMeta.create({
            slug, label,
            title:       title || "",
            description: description || "",
            keywords:    Array.isArray(keywords) ? keywords : [],
            canonical:   canonical || "",
            robots:      robots || { index: true, follow: true },
            openGraph:   openGraph || {},
            twitter:     twitter || {},
        });

        res.status(201).json({ success: true, message: "Page meta created", data: meta });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET ALL ──────────────────────────────────────────────────────────────────
export const getAllPageMeta = async (req, res) => {
    try {
        const { search } = req.query;
        const filter = search
            ? { $or: [{ slug: { $regex: search, $options: "i" } }, { label: { $regex: search, $options: "i" } }] }
            : {};

        const metas = await PageMeta.find(filter).sort({ updatedAt: -1 }).lean();
        res.status(200).json({ success: true, data: metas });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── GET SINGLE by ID or slug ─────────────────────────────────────────────────
export const getPageMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(id);
        const meta = await PageMeta.findOne(isObjectId ? { _id: id } : { slug: id }).lean();
        if (!meta) return res.status(404).json({ success: false, message: "Page meta not found" });
        res.status(200).json({ success: true, data: meta });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── UPDATE ───────────────────────────────────────────────────────────────────
export const updatePageMeta = async (req, res) => {
    try {
        const { id } = req.params;
        const { slug, label, title, description, keywords, canonical, robots, openGraph, twitter } = req.body;

        if (slug) {
            const conflict = await PageMeta.findOne({ slug, _id: { $ne: id } });
            if (conflict) {
                return res.status(409).json({ success: false, message: "Another entry already uses this slug" });
            }
        }

        const meta = await PageMeta.findByIdAndUpdate(
            id,
            {
                slug, label,
                title, description,
                keywords: Array.isArray(keywords) ? keywords : [],
                canonical, robots, openGraph, twitter,
            },
            { new: true, runValidators: true }
        );

        if (!meta) return res.status(404).json({ success: false, message: "Page meta not found" });
        res.status(200).json({ success: true, message: "Page meta updated", data: meta });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── DELETE ───────────────────────────────────────────────────────────────────
export const deletePageMeta = async (req, res) => {
    try {
        const meta = await PageMeta.findByIdAndDelete(req.params.id);
        if (!meta) return res.status(404).json({ success: false, message: "Page meta not found" });
        res.status(200).json({ success: true, message: "Page meta deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};