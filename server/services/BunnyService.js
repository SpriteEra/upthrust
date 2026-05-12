import axios from "axios";

/**
 * BunnyService — Bunny Storage HTTP API (correct endpoints per docs)
 *
 * Docs: https://docs.bunny.net/storage/http
 *
 * Upload URL format:  PUT https://{hostname}/{storageZone}/{path}/{fileName}
 * List URL format:    GET https://{hostname}/{storageZone}/{folderPath}/   ← trailing slash required
 * Delete URL format:  DELETE https://{hostname}/{storageZone}/{fileName}
 *
 * CORS for direct browser uploads: enable in Bunny Dashboard
 *   → Storage → your zone → Security → CORS → Allow All Origins
 */

function cfg() {
    return {
        host: process.env.BUNNY_STORAGE_HOSTNAME, // e.g. storage.bunnycdn.com
        zone: process.env.BUNNY_STORAGE_ZONE,     // e.g. upthrust-videos
        key: process.env.BUNNY_STORAGE_API_KEY,  // storage zone password
        cdn: process.env.BUNNY_CDN_URL,          // e.g. https://cdn.upthrust.agency
    };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Base URL: https://{hostname}/{storageZone} */
const base = () => {
    const { host, zone } = cfg();
    return `https://${host}/${zone}`;
};

/** Headers for every Bunny Storage API request */
const headers = (extra = {}) => ({
    AccessKey: cfg().key,
    accept: "application/json",
    ...extra,
});

// ─── Folder listing ───────────────────────────────────────────────────────────

/**
 * List ONE level of a Bunny Storage folder.
 * Bunny requires a trailing slash on the folder path.
 *
 * @param {string} folderPath  — e.g. "" (root), "images/", "images/blog/"
 * @returns {Array<{ name, path, isDirectory, size, lastModified }>}
 */
async function listFolder(folderPath = "") {
    const { cdn } = cfg();

    // Normalise: strip leading slash, ensure trailing slash
    const clean = folderPath.replace(/^\/+/, "").replace(/\/*$/, "/");

    // For root listing use just the base URL (no extra slash)
    const url = clean === "/"
        ? `${base()}/`
        : `${base()}/${clean}`;

    const { data } = await axios.get(url, { headers: headers() });

    return data.map((item) => ({
        name: item.ObjectName,
        path: clean === "/" ? item.ObjectName : `${clean}${item.ObjectName}`,
        isDirectory: item.IsDirectory,
        size: item.Length || 0,
        lastModified: item.LastChanged,
        cdnUrl: item.IsDirectory ? null : `${cdn}/${clean === "/" ? "" : clean}${item.ObjectName}`,
    }));
}

/**
 * List the top-level "images" and "videos" folders,
 * then list one level deep inside each — used by the frontend folder picker.
 *
 * Returns: {
 *   images: [{ name, path }],
 *   videos: [{ name, path }],
 * }
 */
async function listMediaFolders() {
    const tryList = async (path) => {
        try {
            const items = await listFolder(path);
            return items.filter((i) => i.isDirectory);
        } catch {
            return [];
        }
    };

    const [imagesRoot, videosRoot] = await Promise.all([
        tryList("images/"),
        tryList("videos/"),
    ]);

    return {
        images: imagesRoot.map((f) => ({
            name: f.name.replace(/\/$/, ""),
            path: `images/${f.name.replace(/\/$/, "")}`,
        })),
        videos: videosRoot.map((f) => ({
            name: f.name.replace(/\/$/, ""),
            path: `videos/${f.name.replace(/\/$/, "")}`,
        })),
    };
}

/**
 * List subfolders inside a given folder — used when user selects a category
 * to show available sub-folders.
 *
 * @param {"images"|"videos"} type
 * @param {string}            category   — e.g. "blog"
 */
async function listSubFolders(type, category) {
    const path = `${type}/${category}/`;
    try {
        const items = await listFolder(path);
        return items
            .filter((i) => i.isDirectory)
            .map((f) => ({
                name: f.name.replace(/\/$/, ""),
                path: `${path}${f.name.replace(/\/$/, "")}`,
            }));
    } catch {
        return [];
    }
}

// ─── Folder creation ──────────────────────────────────────────────────────────

/**
 * Bunny Storage has no "create folder" API.
 * Folders are created implicitly when you upload a file inside them.
 * We upload a tiny invisible placeholder file (.keep) to create the folder.
 *
 * @param {string} folderPath  — e.g. "images/blog" or "videos/hero/behind-scenes"
 * @returns {{ created: true, path: string, cdnUrl: string }}
 */
async function createFolder(folderPath) {
    const clean = folderPath.replace(/^\/+/, "").replace(/\/+$/, "");
    const keepPath = `${clean}/.keep`;
    const url = `${base()}/${keepPath}`;

    await axios.put(url, Buffer.from(""), {
        headers: headers({
            "Content-Type": "text/plain",
            "Content-Length": "0",
        }),
    });

    return {
        created: true,
        path: clean,
        cdnUrl: `${cfg().cdn}/${clean}`,
    };
}

// ─── Upload prepare ───────────────────────────────────────────────────────────

/**
 * Generate the upload URL + credentials for the BROWSER to PUT a file
 * directly to Bunny Storage.  The server never sees the file bytes.
 *
 * Correct upload URL: PUT https://{hostname}/{storageZone}/{path}/{fileName}
 *
 * @param {"images"|"videos"} type
 * @param {string} originalName      — e.g. "clip.mp4"
 * @param {string} mimeType          — e.g. "video/mp4"
 * @param {string} category          — folder, e.g. "hero"
 * @param {string} subcategory       — optional sub-folder, e.g. "behind-scenes"
 *
 * @returns {{
 *   uploadUrl  : string,   // browser PUTs to this URL
 *   accessKey  : string,   // browser sends as "AccessKey" header
 *   fileName   : string,   // full storage path (save in DB — needed for deletion)
 *   cdnUrl     : string,   // public CDN URL after upload
 * }}
 */
async function prepareUpload(type, originalName, mimeType, category = "general", subcategory = "") {
    const { cdn } = cfg();

    const ext = originalName.split(".").pop().toLowerCase();
    const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    // Build storage path:  images/blog/behind-scenes/1714000000-abc123.jpg
    const parts = [type, category, subcategory, `${unique}.${ext}`].filter(Boolean);
    const fileName = parts.join("/");

    // Correct Bunny Storage upload URL
    const uploadUrl = `${base()}/${fileName}`;
    const cdnUrl = `${cdn}/${fileName}`;

    return {
        uploadUrl,               // PUT this URL from the browser
        accessKey: cfg().key,    // send as "AccessKey" header
        fileName,                // store in DB — used for deletion
        cdnUrl,                  // public URL once uploaded
    };
}

// ─── Delete ───────────────────────────────────────────────────────────────────

/**
 * Delete a file from Bunny Storage.
 * @param {string} fileName  — storage path, e.g. "images/blog/1714-abc.jpg"
 */
async function deleteFile(fileName) {
    const url = `${base()}/${fileName.replace(/^\/+/, "")}`;
    await axios.delete(url, { headers: headers() });
    return { deleted: true, fileName };
}

export default {
    prepareUpload,
    deleteFile,
    listMediaFolders,
    listSubFolders,
    createFolder,
    listFolder,
};
