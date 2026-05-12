import axiosInstance from "./axiosInstance";

// ─── Page API ──────────────────────────────────────────────────────────────────

// Get all pages
export const getAllPagesAPI = async () => {
    const { data } = await axiosInstance.get("/pages");
    return data;
};

// Get page by ID or URL slug
export const getPageAPI = async (idOrSlug) => {
    const { data } = await axiosInstance.get(`/pages/${idOrSlug}`);
    return data;
};

// Create page
export const createPageAPI = async (payload) => {
    const { data } = await axiosInstance.post("/pages", payload);
    return data;
};

// Update base fields (title, url, faq)
export const updatePageAPI = async (id, payload) => {
    const { data } = await axiosInstance.put(`/pages/${id}`, payload);
    return data;
};

// Upsert a single key in additionalFields
// payload: { key: "testimonials", value: [...] }
export const upsertAdditionalFieldAPI = async (id, payload) => {
    const { data } = await axiosInstance.patch(`/pages/${id}/field`, payload);
    return data;
};

// Bulk update multiple keys in additionalFields
// payload: { fields: { testimonials: [...], gallery: [...] } }
export const bulkUpdateAdditionalFieldsAPI = async (id, payload) => {
    const { data } = await axiosInstance.patch(`/pages/${id}/fields`, payload);
    return data;
};

// Remove a key from additionalFields
// payload: { key: "gallery" }
export const removeAdditionalFieldAPI = async (id, payload) => {
    const { data } = await axiosInstance.delete(`/pages/${id}/field`, { data: payload });
    return data;
};

// Delete page
export const deletePageAPI = async (id) => {
    const { data } = await axiosInstance.delete(`/pages/${id}`);
    return data;
};