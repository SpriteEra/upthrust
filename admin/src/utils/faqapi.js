import axiosInstance from "./axiosInstance";

// ─── FAQ API ───────────────────────────────────────────────────────────────────

// Get all FAQ documents (admin)
export const getAllFAQsAPI = async () => {
    const { data } = await axiosInstance.get("/faqs");
    console.log("All FAQs:", data);
    return data;
};

// Get FAQ by pageId
export const getFAQByPageIdAPI = async (pageId) => {
    const { data } = await axiosInstance.get(`/faqs/page/${pageId}`);
    return data;
};

// Create FAQ document for a page
// payload: { pageId, faqs: [{ question, answer }] }
export const createFAQAPI = async (payload) => {
    const { data } = await axiosInstance.post("/faqs/add", payload);
    return data;
};

// Full replace of faqs array for a page
// payload: { faqs: [{ question, answer }] }
export const updateFAQByPageIdAPI = async (pageId, payload) => {
    const { data } = await axiosInstance.put(`/faqs/page/${pageId}`, payload);
    return data;
};

// Delete entire FAQ document for a page
export const deleteFAQByPageIdAPI = async (pageId) => {
    const { data } = await axiosInstance.delete(`/faqs/page/${pageId}`);
    return data;
};

// Update a specific FAQ item inside a page's faqs array
// payload: { question?, answer? }
export const updateSpecificFAQAPI = async (pageId, faqId, payload) => {
    const { data } = await axiosInstance.put(`/faqs/page/${pageId}/faq/${faqId}`, payload);
    return data;
};

// Delete a specific FAQ item inside a page's faqs array
export const deleteSpecificFAQAPI = async (pageId, faqId) => {
    const { data } = await axiosInstance.delete(`/faqs/page/${pageId}/faq/${faqId}`);
    return data;
};