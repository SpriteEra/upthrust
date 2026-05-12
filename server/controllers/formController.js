import FormUrl from "../models/formurl.js";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const sendSuccess = (res, data, message = "Success", statusCode = 200) =>
    res.status(statusCode).json({ success: true, message, data });

const sendError = (res, message = "Something went wrong", statusCode = 500) =>
    res.status(statusCode).json({ success: false, message });

// ─── Controllers ─────────────────────────────────────────────────────────────

/**
 * GET /api/form-urls
 * Returns all form URLs (admin view with full details)
 */
export const getAllFormUrls = async (req, res) => {
    try {
        const { isActive } = req.query;

        const filter = {};
        if (isActive !== undefined) {
            filter.isActive = isActive === "true";
        }

        const formUrls = await FormUrl.find(filter).sort({ createdAt: -1 });

        sendSuccess(res, formUrls, "Form URLs fetched successfully");
    } catch (error) {
        sendError(res, error.message);
    }
};

/**
 * GET /api/form-urls/map
 * Returns a flat key→url map for direct frontend use
 * e.g. { ecom: "https://...", seo: "https://..." }
 */
export const getFormUrlMap = async (req, res) => {
    try {
        const map = await FormUrl.toFrontendMap();
        sendSuccess(res, map, "Form URL map fetched successfully");
    } catch (error) {
        sendError(res, error.message);
    }
};

/**
 * GET /api/form-urls/:id
 * Returns a single form URL by MongoDB _id
 */
export const getFormUrlById = async (req, res) => {
    try {
        const formUrl = await FormUrl.findById(req.params.id);

        if (!formUrl) {
            return sendError(res, "Form URL not found", 404);
        }

        sendSuccess(res, formUrl, "Form URL fetched successfully");
    } catch (error) {
        if (error.kind === "ObjectId") {
            return sendError(res, "Invalid ID format", 400);
        }
        sendError(res, error.message);
    }
};

/**
 * GET /api/form-urls/key/:key
 * Returns a single form URL by its key (e.g. "ecom", "seo")
 */
export const getFormUrlByKey = async (req, res) => {
    try {
        const formUrl = await FormUrl.findOne({
            key: req.params.key.toLowerCase()
        });

        if (!formUrl) {
            return sendError(res, `Form URL with key "${req.params.key}" not found`, 404);
        }

        sendSuccess(res, formUrl, "Form URL fetched successfully");
    } catch (error) {
        sendError(res, error.message);
    }
};

/**
 * POST /api/form-urls
 * Creates a new form URL entry
 * Body: { key, label, url, isActive?, description? }
 */
export const createFormUrl = async (req, res) => {
    try {
        const { key, label, url, isActive, description } = req.body;

        if (!key || !label || !url) {
            return sendError(res, "key, label, and url are required fields", 400);
        }

        const formUrl = await FormUrl.create({
            key,
            label,
            url,
            isActive,
            description
        });

        sendSuccess(res, formUrl, "Form URL created successfully", 201);
    } catch (error) {
        if (error.code === 11000) {
            return sendError(
                res,
                `A form URL with key "${error.keyValue?.key}" already exists`,
                409
            );
        }
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return sendError(res, messages.join(", "), 400);
        }
        sendError(res, error.message);
    }
};

/**
 * POST /api/form-urls/bulk
 * Bulk-create or overwrite from the legacy FORM_URLS constant
 * Body: { urls: { ecom: "https://...", seo: "https://..." }, overwrite?: boolean }
 */
export const bulkUpsertFormUrls = async (req, res) => {
    try {
        const { urls, overwrite = false } = req.body;

        if (!urls || typeof urls !== "object") {
            return sendError(res, "urls must be a key-value object", 400);
        }

        const results = [];

        for (const [key, url] of Object.entries(urls)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1); // auto-label

            if (overwrite) {
                const doc = await FormUrl.findOneAndUpdate(
                    { key },
                    { url, label, isActive: true },
                    { upsert: true, new: true, runValidators: true }
                );
                results.push(doc);
            } else {
                // Only insert if key doesn't exist
                const existing = await FormUrl.findOne({ key });
                if (!existing) {
                    const doc = await FormUrl.create({ key, label, url });
                    results.push(doc);
                }
            }
        }

        sendSuccess(
            res,
            results,
            `${results.length} form URL(s) processed successfully`,
            201
        );
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return sendError(res, messages.join(", "), 400);
        }
        sendError(res, error.message);
    }
};

/**
 * PUT /api/form-urls/:id
 * Full update of a form URL by _id
 * Body: { key?, label?, url?, isActive?, description? }
 */
export const updateFormUrl = async (req, res) => {
    try {
        const { key, label, url, isActive, description } = req.body;

        const formUrl = await FormUrl.findByIdAndUpdate(
            req.params.id,
            { key, label, url, isActive, description },
            { new: true, runValidators: true }
        );

        if (!formUrl) {
            return sendError(res, "Form URL not found", 404);
        }

        sendSuccess(res, formUrl, "Form URL updated successfully");
    } catch (error) {
        if (error.kind === "ObjectId") {
            return sendError(res, "Invalid ID format", 400);
        }
        if (error.code === 11000) {
            return sendError(
                res,
                `A form URL with key "${error.keyValue?.key}" already exists`,
                409
            );
        }
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return sendError(res, messages.join(", "), 400);
        }
        sendError(res, error.message);
    }
};

/**
 * PATCH /api/form-urls/:id
 * Partial update — only updates fields provided in body
 */
export const patchFormUrl = async (req, res) => {
    try {
        const allowedFields = ["key", "label", "url", "isActive", "description"];
        const updates = {};

        allowedFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        });

        if (Object.keys(updates).length === 0) {
            return sendError(res, "No valid fields provided for update", 400);
        }

        const formUrl = await FormUrl.findByIdAndUpdate(
            req.params.id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!formUrl) {
            return sendError(res, "Form URL not found", 404);
        }

        sendSuccess(res, formUrl, "Form URL patched successfully");
    } catch (error) {
        if (error.kind === "ObjectId") {
            return sendError(res, "Invalid ID format", 400);
        }
        if (error.code === 11000) {
            return sendError(
                res,
                `A form URL with key "${error.keyValue?.key}" already exists`,
                409
            );
        }
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return sendError(res, messages.join(", "), 400);
        }
        sendError(res, error.message);
    }
};

/**
 * PATCH /api/form-urls/:id/toggle
 * Toggle isActive status
 */
export const toggleFormUrl = async (req, res) => {
    try {
        const formUrl = await FormUrl.findById(req.params.id);

        if (!formUrl) {
            return sendError(res, "Form URL not found", 404);
        }

        formUrl.isActive = !formUrl.isActive;
        await formUrl.save();

        sendSuccess(
            res,
            formUrl,
            `Form URL ${formUrl.isActive ? "activated" : "deactivated"} successfully`
        );
    } catch (error) {
        if (error.kind === "ObjectId") {
            return sendError(res, "Invalid ID format", 400);
        }
        sendError(res, error.message);
    }
};

/**
 * DELETE /api/form-urls/:id
 * Permanently deletes a form URL
 */
export const deleteFormUrl = async (req, res) => {
    try {
        const formUrl = await FormUrl.findByIdAndDelete(req.params.id);

        if (!formUrl) {
            return sendError(res, "Form URL not found", 404);
        }

        sendSuccess(res, { id: req.params.id }, "Form URL deleted successfully");
    } catch (error) {
        if (error.kind === "ObjectId") {
            return sendError(res, "Invalid ID format", 400);
        }
        sendError(res, error.message);
    }
};

/**
 * DELETE /api/form-urls
 * Deletes multiple form URLs by array of IDs
 * Body: { ids: ["id1", "id2"] }
 */
export const bulkDeleteFormUrls = async (req, res) => {
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return sendError(res, "ids must be a non-empty array", 400);
        }

        const result = await FormUrl.deleteMany({ _id: { $in: ids } });

        sendSuccess(
            res,
            { deletedCount: result.deletedCount },
            `${result.deletedCount} form URL(s) deleted successfully`
        );
    } catch (error) {
        sendError(res, error.message);
    }
};

