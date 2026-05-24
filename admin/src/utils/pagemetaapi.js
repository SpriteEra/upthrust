import axiosInstance from "./axiosInstance";

// ─── Page Meta API ─────────────────────────────────────────────────────────────

export const getAllPageMetaAPI = async (search = "") => {
    const params = search ? { search } : {};
    const { data } = await axiosInstance.get("/page-meta/all", { params });
    return data;
};

export const getPageMetaAPI = async (idOrSlug) => {
    const { data } = await axiosInstance.get(`/page-meta/${idOrSlug}`);
    return data;
};

export const createPageMetaAPI = async (payload) => {
    const { data } = await axiosInstance.post("/page-meta/create", payload);
    return data;
};

export const updatePageMetaAPI = async (id, payload) => {
    const { data } = await axiosInstance.put(`/page-meta/${id}`, payload);
    return data;
};

export const deletePageMetaAPI = async (id) => {
    const { data } = await axiosInstance.delete(`/page-meta/${id}`);
    return data;
};