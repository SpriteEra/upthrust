import axiosInstance from "./axiosInstance";

// ─── Form URL API ──────────────────────────────────────────────────────────────

// GET /api/form-urls — all docs (admin, supports ?isActive=true|false)
export const getAllFormUrlsAPI = async (isActive) => {
    const params = isActive !== undefined ? { isActive } : {};
    const { data } = await axiosInstance.get("/form-urls/all-urls", { params });
    return data;
};

// GET /api/form-urls/map — { key: url } flat map (public, for frontend)
export const getFormUrlMapAPI = async () => {
    const { data } = await axiosInstance.get("/form-urls/map");
    return data;
};

// GET /api/form-urls/:id — single by MongoDB _id
export const getFormUrlByIdAPI = async (id) => {
    const { data } = await axiosInstance.get(`/form-urls/${id}`);
    return data;
};

// GET /api/form-urls/key/:key — single by key
export const getFormUrlByKeyAPI = async (key) => {
    const { data } = await axiosInstance.get(`/form-urls/key/${key}`);
    return data;
};

// POST /api/form-urls — create one
// payload: { key, label, url, isActive?, description? }
export const createFormUrlAPI = async (payload) => {
    const { data } = await axiosInstance.post("/form-urls", payload);
    return data;
};

// POST /api/form-urls/bulk — seed / bulk upsert from key-value map
// payload: { urls: { ecom: "https://...", seo: "https://..." }, overwrite?: boolean }
export const bulkUpsertFormUrlsAPI = async (payload) => {
    const { data } = await axiosInstance.post("/form-urls/bulk", payload);
    return data;
};

// PUT /api/form-urls/:id — full replace
// payload: { key, label, url, isActive, description }
export const updateFormUrlAPI = async (id, payload) => {
    const { data } = await axiosInstance.put(`/form-urls/${id}`, payload);
    return data;
};

// PATCH /api/form-urls/:id — partial update (any subset of fields)
export const patchFormUrlAPI = async (id, payload) => {
    const { data } = await axiosInstance.patch(`/form-urls/${id}`, payload);
    return data;
};

// PATCH /api/form-urls/:id/toggle — flip isActive
export const toggleFormUrlAPI = async (id) => {
    const { data } = await axiosInstance.patch(`/form-urls/${id}/toggle`);
    return data;
};

// DELETE /api/form-urls/:id — delete one
export const deleteFormUrlAPI = async (id) => {
    const { data } = await axiosInstance.delete(`/form-urls/${id}`);
    return data;
};

// DELETE /api/form-urls — bulk delete
// payload: { ids: ["id1", "id2"] }
export const bulkDeleteFormUrlsAPI = async (ids) => {
    const { data } = await axiosInstance.delete("/form-urls", { data: { ids } });
    return data;
};