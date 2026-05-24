import axiosInstance from "./axiosInstance";

// ─── List & single ─────────────────────────────────────────────────────────
export const getAllCopyPagesAPI = async (parentPageId) => {
    const params = parentPageId ? { parentPage: parentPageId } : {};
    const { data } = await axiosInstance.get("/copy-pages/all", { params });
    return data;
};

export const getCopyPageAPI = async (idOrSlug) => {
    const { data } = await axiosInstance.get(`/copy-pages/${idOrSlug}`);
    return data;
};

// ─── Create / Update / Delete ───────────────────────────────────────────────
export const createCopyPageAPI = async (payload) => {
    const { data } = await axiosInstance.post("/copy-pages/create", payload);
    return data;
};

export const updateCopyPageAPI = async (id, payload) => {
    const { data } = await axiosInstance.put(`/copy-pages/${id}`, payload);
    return data;
};

export const deleteCopyPageAPI = async (id) => {
    const { data } = await axiosInstance.delete(`/copy-pages/${id}`);
    return data;
};

// ─── Block toggle ───────────────────────────────────────────────────────────
export const toggleBlockAPI = async (id) => {
    const { data } = await axiosInstance.patch(`/copy-pages/${id}/toggle-block`);
    return data;
};

// ─── additionalFields — single key ─────────────────────────────────────────
// PATCH /copy-pages/:id/field  { key, value }
export const upsertCopyAdditionalFieldAPI = async (id, { key, value }) => {
    const { data } = await axiosInstance.patch(`/copy-pages/${id}/field`, { key, value });
    return data;
};

// ─── additionalFields — bulk ────────────────────────────────────────────────
// PATCH /copy-pages/:id/fields  { fields: { key: value, ... } }
export const bulkUpdateCopyAdditionalFieldsAPI = async (id, { fields }) => {
    const { data } = await axiosInstance.patch(`/copy-pages/${id}/fields`, { fields });
    return data;
};