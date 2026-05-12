// import axiosInstance from "./axiosInstance";

// // ─────────────────────────────────────────────────────────────────────────────
// // MEDIA API — Images (Bunny Storage) + Videos (Bunny Stream)
// // Matches the pattern of authapi.js / pageapi.js
// // ─────────────────────────────────────────────────────────────────────────────

// // ═══════════════════════════════════════════════════════════════════════════
// // IMAGES
// // ═══════════════════════════════════════════════════════════════════════════

// /**
//  * Upload an image with dynamic folder support + live progress
//  * @param {File}     file
//  * @param {object}   options      { category: string, subcategory?: string }
//  * @param {Function} onProgress   (percent: number) => void
//  */
// export const uploadImageAPI = (file, options = {}, onProgress = () => { }) => {
//     const { category = "general", subcategory = "" } = options;

//     return new Promise((resolve, reject) => {
//         const form = new FormData();
//         form.append("image", file);
//         form.append("category", category);
//         if (subcategory) form.append("subcategory", subcategory);

//         const token = localStorage.getItem("token");
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", `${axiosInstance.defaults.baseURL}/media/images/upload`);
//         if (token) xhr.setRequestHeader("Authorization", `Bearer ${token}`);

//         xhr.upload.onprogress = (e) => {
//             if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
//         };
//         xhr.onload = () => {
//             try {
//                 const res = JSON.parse(xhr.responseText);
//                 if ((xhr.status === 200 || xhr.status === 201) && res.success) resolve(res.data);
//                 else reject(new Error(res.message || "Image upload failed"));
//             } catch { reject(new Error("Invalid server response")); }
//         };
//         xhr.onerror = () => reject(new Error("Network error during image upload"));
//         xhr.send(form);
//     });
// };

// /**
//  * Get all image folder names (categories) from Bunny Storage
//  * Backend reads the real images/ directory and returns folder names.
//  * Frontend merges these with its preset list.
//  * @returns {Promise<{ success, data: string[] }>}
//  */
// export const getImageCategoriesAPI = async () => {
//     const { data } = await axiosInstance.get("/media/images/categories");
//     return data;
// };

// /**
//  * List images in a storage folder
//  * @param {object} params  { folder?: string }
//  */
// export const getImagesAPI = async (params = {}) => {
//     const query = new URLSearchParams();
//     if (params.folder) query.append("folder", params.folder);
//     const { data } = await axiosInstance.get(`/media/images?${query}`);
//     return data;
// };

// /**
//  * Delete an image by its storage path
//  * @param {string} fileName  e.g. "images/blog/1234-abc.jpg"
//  */
// export const deleteImageAPI = async (fileName) => {
//     const { data } = await axiosInstance.delete(`/media/images/${encodeURIComponent(fileName)}`);
//     return data;
// };

// // ═══════════════════════════════════════════════════════════════════════════
// // VIDEO COLLECTIONS  (Bunny Stream's equivalent of folders)
// // ═══════════════════════════════════════════════════════════════════════════

// /**
//  * Get all collections from the Bunny Stream library.
//  * Backend fetches real collections — these are the actual folder names
//  * you see in the Bunny dashboard (Ecom page assets, Google ads, Meta ads, UI …)
//  * @returns {Promise<{ success, data: Array<{ guid, name, videoCount }> }>}
//  */
// export const getVideoCollectionsAPI = async () => {
//     const { data } = await axiosInstance.get("/media/videos/collections");
//     return data;
// };

// /**
//  * Create a new collection (folder) in Bunny Stream
//  * Called when the user clicks "+ Create new" and submits a name.
//  * @param {string} name
//  * @returns {Promise<{ success, data: { guid, name } }>}
//  */
// export const createVideoCollectionAPI = async (name) => {
//     const { data } = await axiosInstance.post("/media/videos/collections", { name });
//     return data;
// };

// // ═══════════════════════════════════════════════════════════════════════════
// // VIDEOS
// // ═══════════════════════════════════════════════════════════════════════════

// /**
//  * Upload a video with live progress
//  * @param {File}     file
//  * @param {string}   title
//  * @param {string}   collectionId   — Bunny Stream collection GUID (or "")
//  * @param {Function} onProgress
//  */
// export const uploadVideoAPI = (file, title, collectionId = "", onProgress = () => { }) => {
//     return new Promise((resolve, reject) => {
//         const form = new FormData();
//         form.append("video", file);
//         form.append("title", title);
//         if (collectionId) form.append("collectionId", collectionId);

//         const token = localStorage.getItem("token");
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", `${axiosInstance.defaults.baseURL}/media/videos/upload`);
//         if (token) xhr.setRequestHeader("Authorization", `Bearer ${token}`);

//         xhr.upload.onprogress = (e) => {
//             if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
//         };
//         xhr.onload = () => {
//             try {
//                 const res = JSON.parse(xhr.responseText);
//                 if (xhr.status === 200 || xhr.status === 201 && res.success) resolve(res.data);
//                 else reject(new Error(res.message || "Video upload failed"));
//             } catch { reject(new Error("Invalid server response")); }
//         };
//         xhr.onerror = () => reject(new Error("Network error during video upload"));
//         xhr.send(form);
//     });
// };

// /**
//  * List videos (paginated + optional filters)
//  * @param {object} params  { page?, perPage?, search?, collectionId? }
//  */
// export const getVideosAPI = async (params = {}) => {
//     const query = new URLSearchParams();
//     if (params.page) query.append("page", params.page);
//     if (params.perPage) query.append("perPage", params.perPage);
//     if (params.search) query.append("search", params.search);
//     if (params.collectionId) query.append("collectionId", params.collectionId);
//     const { data } = await axiosInstance.get(`/media/videos?${query}`);
//     return data;
// };

// /**
//  * Get a single video by GUID
//  */
// export const getVideoAPI = async (guid) => {
//     const { data } = await axiosInstance.get(`/media/videos/${guid}`);
//     return data;
// };

// /**
//  * Update video metadata (title, collectionId, tags, etc.)
//  */
// export const updateVideoAPI = async (guid, payload) => {
//     const { data } = await axiosInstance.patch(`/media/videos/${guid}`, payload);
//     return data;
// };

// /**
//  * Permanently delete a video from Bunny Stream
//  */
// export const deleteVideoAPI = async (guid) => {
//     const { data } = await axiosInstance.delete(`/media/videos/${guid}`);
//     return data;
// };




import axiosInstance from "./axiosInstance";

/**
 * MEDIA API — direct upload to Bunny Storage (images + videos).
 *
 * Upload flow (file bytes NEVER pass through your server):
 *  1. GET  /media/folders            → load real Bunny folders for the picker
 *  2. POST /media/prepare            → backend returns { uploadUrl, accessKey, fileName, cdnUrl }
 *  3. Browser XHR PUT → Bunny Storage (server memory = 0, works for any file size)
 *     Method:  PUT
 *     URL:     uploadUrl  (https://{hostname}/{zone}/{path}/{file})
 *     Headers: AccessKey: {accessKey}   Content-Type: {mimeType}
 *     Body:    raw binary file bytes
 *     Expect:  HTTP 201 on success
 *  4. POST /media/save               → saves { fileName, cdnUrl, ... } to MongoDB
 */

// ─────────────────────────────────────────────────────────────────────────────
// XHR PUT with real progress — browser uploads directly to Bunny
// ─────────────────────────────────────────────────────────────────────────────
export function bunnyXhrUpload(uploadUrl, file, accessKey, onProgress = () => { }) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", uploadUrl);

        // These two headers are required by Bunny Storage
        xhr.setRequestHeader("AccessKey", accessKey);
        xhr.setRequestHeader("Content-Type", file.type || "application/octet-stream");

        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100));
        };

        xhr.onload = () => {
            // Bunny Storage returns 201 Created on success
            if (xhr.status === 201) {
                resolve(xhr);
            } else {
                reject(new Error(
                    `Bunny upload failed — HTTP ${xhr.status}.\n` +
                    `Check: (1) AccessKey is correct, (2) Hostname matches your storage zone region, ` +
                    `(3) CORS is enabled on your storage zone.\nResponse: ${xhr.responseText}`
                ));
            }
        };

        xhr.onerror = () => reject(new Error(
            "Network error during upload.\n" +
            "Check: CORS is enabled on your Bunny Storage zone (Dashboard → Storage → your zone → Security → CORS)."
        ));
        xhr.onabort = () => reject(new Error("Upload cancelled."));

        // Send raw binary — no FormData, no encoding
        xhr.send(file);
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// Folder management
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Get top-level folders from Bunny Storage for images and videos.
 * @param {"images"|"videos"|""} type — omit for both
 * @returns {Promise<{ images: [{name,path}], videos: [{name,path}] }|Array>}
 */
export const getFoldersAPI = async (type = "") => {
    const q = type ? `?type=${type}` : "";
    const { data } = await axiosInstance.get(`/media/folders${q}`);
    return data; // { success, data: { images:[...], videos:[...] } }
};

/**
 * Get sub-folders inside a specific folder.
 * @param {"images"|"videos"} type
 * @param {string}            category  — e.g. "blog"
 * @returns {Promise<[{name,path}]>}
 */
export const getSubFoldersAPI = async (type, category) => {
    const { data } = await axiosInstance.get(`/media/folders/sub?type=${type}&category=${encodeURIComponent(category)}`);
    return data; // { success, data: [{name,path}] }
};

/**
 * Create a new folder on Bunny Storage.
 * (Uploads a tiny .keep placeholder — Bunny has no mkdir API)
 *
 * @param {"images"|"videos"} type
 * @param {string}            name     — folder name, e.g. "my-project"
 * @param {string}            parent   — optional parent folder, e.g. "blog"
 */
export const createFolderAPI = async (type, name, parent = "") => {
    const { data } = await axiosInstance.post("/media/folders", { type, name, parent });
    return data; // { success, data: { created, path, slug } }
};

// ─────────────────────────────────────────────────────────────────────────────
// Upload
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Upload a file directly from the browser to Bunny Storage.
 *
 * @param {"images"|"videos"} type
 * @param {File}     file
 * @param {object}   opts         { category?, subcategory? }
 * @param {Function} onProgress   (0–100) => void
 * @param {Function} onPhase      ("prepare"|"uploading"|"saving"|"done") => void
 *
 * @returns {Promise<{ _id, type, fileName, cdnUrl, category, subcategory, ... }>}
 */
export const uploadMedia = async (type, file, opts = {}, onProgress = () => { }, onPhase = () => { }) => {
    const { category = "general", subcategory = "" } = opts;

    // Step 1 — get upload credentials from backend
    onPhase("prepare");
    const { data: prep } = await axiosInstance.post("/media/prepare", {
        type,
        fileName: file.name,
        mimeType: file.type,
        size: file.size,
        category,
        subcategory,
    });
    const creds = prep.data;
    // creds = { uploadUrl, accessKey, fileName, cdnUrl, category, subcategory }

    // Step 2 — browser XHR PUT directly to Bunny Storage (server not involved)
    onPhase("uploading");
    onProgress(0);
    await bunnyXhrUpload(creds.uploadUrl, file, creds.accessKey, (pct) => {
        onProgress(pct);
    });

    // Step 3 — save metadata to MongoDB
    onPhase("saving");
    const { data: saved } = await axiosInstance.post("/media/save", {
        type,
        fileName: creds.fileName,
        cdnUrl: creds.cdnUrl,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        category: creds.category,
        subcategory: creds.subcategory,
    });

    onPhase("done");
    return { ...saved.data, cdnUrl: creds.cdnUrl, fileName: creds.fileName };
};

export const uploadImageAPI = (file, opts, onProgress, onPhase) =>
    uploadMedia("images", file, opts, onProgress, onPhase);

export const uploadVideoAPI = (file, opts, onProgress, onPhase) =>
    uploadMedia("videos", file, opts, onProgress, onPhase);

// ─────────────────────────────────────────────────────────────────────────────
// List & Delete
// ─────────────────────────────────────────────────────────────────────────────

export const getMediaAPI = async (params = {}) => {
    const q = new URLSearchParams();
    if (params.type) q.append("type", params.type);
    if (params.category) q.append("category", params.category);
    if (params.subcategory) q.append("subcategory", params.subcategory);
    if (params.page) q.append("page", params.page);
    if (params.limit) q.append("limit", params.limit);
    const { data } = await axiosInstance.get(`/media?${q}`);
    return data;
};

export const getImagesAPI = (p = {}) => getMediaAPI({ ...p, type: "images" });
export const getVideosAPI = (p = {}) => getMediaAPI({ ...p, type: "videos" });

/**
 * Delete a media file.
 * Backend deletes from Bunny Storage (via fileName) and removes MongoDB doc.
 * @param {string} id  — MongoDB _id
 */
export const deleteMediaAPI = async (id) => {
    const { data } = await axiosInstance.delete(`/media/${id}`);
    return data;
};
