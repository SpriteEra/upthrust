import axiosInstance from "./axiosInstance.jsx";

/**
 * Fetch paginated activity logs.
 * @param {Object} params - { page, limit, method, search, from, to, userId }
 */
export const fetchActivityLogs = async (params = {}) => {
    const response = await axiosInstance.get("/activity", { params });
    return response.data;
};

/**
 * Fetch activity stats (byMethod, byAction counts).
 */
export const fetchActivityStats = async () => {
    const response = await axiosInstance.get("/activity/stats");
    return response.data;
};

/**
 * Clear all activity logs.
 */
export const clearAllActivityLogs = async () => {
    const response = await axiosInstance.delete("/activity");
    return response.data;
};
