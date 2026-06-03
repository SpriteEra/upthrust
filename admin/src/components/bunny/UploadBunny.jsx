// import { useState, useRef, useCallback, useEffect } from "react";
// import {
//     uploadImageAPI,
//     uploadVideoAPI,
//     getImageCategoriesAPI,
//     getVideoCollectionsAPI,
//     createVideoCollectionAPI,
// } from "../../utils/mediaapi";

// // ─────────────────────────────────────────────────────────────────────────────
// // DESIGN TOKENS
// // ─────────────────────────────────────────────────────────────────────────────
// const T = {
//     img: { accent: "#f472b6", glow: "#f472b622", dark: "#9d174d", ring: "#f472b644" },
//     vid: { accent: "#818cf8", glow: "#818cf822", dark: "#3730a3", ring: "#818cf844" },
//     bg: "#0d1117",
//     surface: "#0f172a",
//     surfaceHigh: "#162032",
//     border: "#1e293b",
//     muted: "#475569",
//     subtle: "#334155",
//     text: "#f1f5f9",
//     textDim: "#94a3b8",
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // SHARED ATOMS
// // ─────────────────────────────────────────────────────────────────────────────

// function CopyRow({ label, value }) {
//     const [copied, setCopied] = useState(false);
//     const copy = () => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1800); };
//     return (
//         <div style={{ marginBottom: 10 }}>
//             <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: T.textDim, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
//             <div style={{ display: "flex", gap: 6 }}>
//                 <input readOnly value={value} onClick={(e) => e.target.select()} style={{
//                     flex: 1, fontSize: 12, fontFamily: "monospace", background: "#060a10",
//                     border: `1px solid ${T.border}`, borderRadius: 6, padding: "7px 10px",
//                     color: "#7dd3fc", overflow: "hidden", textOverflow: "ellipsis", outline: "none",
//                 }} />
//                 <button onClick={copy} style={{
//                     fontSize: 11, padding: "7px 14px", borderRadius: 6, border: "none",
//                     background: copied ? "#052e16" : T.border, color: copied ? "#86efac" : T.textDim,
//                     cursor: "pointer", fontWeight: 600, transition: "all 0.2s", whiteSpace: "nowrap",
//                 }}>{copied ? "✓ Copied" : "Copy"}</button>
//             </div>
//         </div>
//     );
// }

// function ProgressBar({ value, color }) {
//     return (
//         <div style={{ background: T.border, borderRadius: 99, height: 5, overflow: "hidden", margin: "10px 0 4px" }}>
//             <div style={{ width: `${value}%`, height: "100%", borderRadius: 99, background: color, transition: "width 0.25s ease", boxShadow: `0 0 8px ${color}66` }} />
//         </div>
//     );
// }

// // Pill toggle button used in both pickers
// function Pill({ active, onClick, disabled, children, accent }) {
//     return (
//         <button onClick={onClick} disabled={disabled} style={{
//             fontSize: 10, padding: "3px 9px", borderRadius: 99,
//             border: `1px solid ${active ? accent + "88" : T.border}`,
//             background: active ? accent + "22" : "transparent",
//             color: active ? accent : T.muted,
//             cursor: disabled ? "not-allowed" : "pointer",
//             fontWeight: 600, transition: "all 0.15s",
//         }}>{children}</button>
//     );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // DROP ZONE
// // ─────────────────────────────────────────────────────────────────────────────
// function DropZone({ mode, file, onFile, disabled }) {
//     const [dragging, setDragging] = useState(false);
//     const inputRef = useRef();
//     const isImage = mode === "image";
//     const tok = isImage ? T.img : T.vid;

//     const validate = (f) => {
//         if (!f) return null;
//         return (isImage ? f.type.startsWith("image/") : f.type.startsWith("video/")) ? f : null;
//     };

//     const handleDrop = useCallback((e) => {
//         e.preventDefault(); setDragging(false);
//         const f = validate(e.dataTransfer.files[0]);
//         if (f) onFile(f);
//     }, [mode, onFile]);

//     const preview = file && isImage ? URL.createObjectURL(file) : null;

//     return (
//         <div
//             onDrop={handleDrop}
//             onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragging(true); }}
//             onDragLeave={() => setDragging(false)}
//             onClick={() => !disabled && inputRef.current?.click()}
//             style={{
//                 border: `2px dashed ${dragging ? tok.accent : file ? tok.accent + "88" : T.subtle}`,
//                 borderRadius: 14, background: dragging ? tok.glow : T.surface,
//                 minHeight: 155, display: "flex", flexDirection: "column",
//                 alignItems: "center", justifyContent: "center",
//                 cursor: disabled ? "default" : "pointer", transition: "all 0.2s",
//                 padding: 20, textAlign: "center", position: "relative",
//                 overflow: "hidden", userSelect: "none",
//             }}
//         >
//             <input ref={inputRef} type="file" accept={isImage ? "image/*" : "video/*"} style={{ display: "none" }}
//                 onChange={(e) => { const f = validate(e.target.files[0]); if (f) onFile(f); }} />

//             {preview && <img src={preview} alt="" style={{
//                 position: "absolute", inset: 0, width: "100%", height: "100%",
//                 objectFit: "cover", opacity: 0.2, borderRadius: 12, pointerEvents: "none",
//             }} />}

//             <div style={{ position: "relative", zIndex: 1 }}>
//                 {file ? (
//                     <>
//                         <div style={{ fontSize: 32, marginBottom: 8, filter: `drop-shadow(0 0 10px ${tok.accent})` }}>
//                             {isImage ? "🖼️" : "🎬"}
//                         </div>
//                         <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 3, maxWidth: 280, wordBreak: "break-all" }}>
//                             {file.name.length > 42 ? file.name.slice(0, 39) + "…" : file.name}
//                         </div>
//                         <div style={{ fontSize: 11, color: T.muted }}>
//                             {(file.size / 1024 / 1024).toFixed(2)} MB
//                             {!disabled && <span style={{ color: tok.accent }}> · click to change</span>}
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <div style={{
//                             width: 50, height: 50, borderRadius: "50%",
//                             background: tok.glow, border: `1.5px solid ${tok.accent}44`,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                             fontSize: 20, margin: "0 auto 12px",
//                         }}>{isImage ? "🖼️" : "🎬"}</div>
//                         <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 4 }}>
//                             Drop your {isImage ? "image" : "video"} here
//                         </div>
//                         <div style={{ fontSize: 12, color: T.muted }}>
//                             or <span style={{ color: tok.accent, fontWeight: 600 }}>browse files</span>
//                         </div>
//                         <div style={{ fontSize: 10, color: T.subtle, marginTop: 8 }}>
//                             {isImage ? "PNG · JPG · GIF · WebP · SVG · max 25 MB" : "MP4 · MOV · AVI · MKV · WebM · max 2 GB"}
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // IMAGE FOLDER PICKER
// // category + optional subcategory → "images/category/subcategory/"
// // ─────────────────────────────────────────────────────────────────────────────
// const IMAGE_PRESETS = [];

// function ImageFolderPicker({ category, subcategory, onCategoryChange, onSubcategoryChange, disabled }) {
//     const accent = T.img.accent;
//     const [cats, setCats] = useState([]);
//     const [catMode, setCatMode] = useState("pick"); // "pick" | "new"
//     const [subMode, setSubMode] = useState("none"); // "none" | "new"
//     const [newCat, setNewCat] = useState("");
//     const [newSub, setNewSub] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getImageCategoriesAPI()
//             .then((res) => {
//                 const srv = Array.isArray(res?.data) ? res.data : [];
//                 const merged = [...new Set([...IMAGE_PRESETS, ...srv])].sort();
//                 setCats(merged);
//             })
//             .catch(() => setCats(IMAGE_PRESETS))
//             .finally(() => setLoading(false));
//     }, []);

//     const commitCat = () => {
//         const v = newCat.trim().toLowerCase().replace(/\s+/g, "-");
//         if (!v) return;
//         setCats((prev) => [...new Set([...prev, v])].sort());
//         onCategoryChange(v);
//         setCatMode("pick");
//         setNewCat("");
//     };

//     const commitSub = () => {
//         const v = newSub.trim().toLowerCase().replace(/\s+/g, "-");
//         onSubcategoryChange(v);
//         setNewSub("");
//     };

//     const folderPreview = subcategory ? `images/${category}/${subcategory}/` : `images/${category}/`;

//     const inputSty = {
//         width: "100%", fontSize: 12, padding: "8px 10px",
//         background: T.surface, border: `1px solid ${T.border}`,
//         borderRadius: 7, color: T.text, outline: "none",
//         boxSizing: "border-box", fontFamily: "inherit",
//     };
//     const selSty = {
//         ...inputSty, cursor: "pointer", appearance: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23475569'/%3E%3C/svg%3E")`,
//         backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", paddingRight: 28,
//     };
//     const lbl = { fontSize: 10, fontWeight: 600, letterSpacing: "0.07em", color: T.textDim, textTransform: "uppercase", display: "block", marginBottom: 5 };

//     return (
//         <div style={{ background: T.surfaceHigh, border: `1px solid ${T.border}`, borderRadius: 10, padding: "14px 14px 12px", marginTop: 14 }}>
//             {/* Path preview */}
//             <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
//                 <span style={{ fontSize: 12 }}>📁</span>
//                 <code style={{ fontSize: 11, color: accent, background: accent + "15", padding: "2px 8px", borderRadius: 5 }}>
//                     {folderPreview}
//                 </code>
//             </div>

//             {/* CATEGORY */}
//             <div style={{ marginBottom: 12 }}>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
//                     <label style={lbl}>Category *</label>
//                     <div style={{ display: "flex", gap: 4 }}>
//                         <Pill active={catMode === "pick"} onClick={() => setCatMode("pick")} disabled={disabled} accent={accent}>Pick existing</Pill>
//                         <Pill active={catMode === "new"} onClick={() => setCatMode("new")} disabled={disabled} accent={accent}>+ Create new</Pill>
//                     </div>
//                 </div>
//                 {catMode === "pick" ? (
//                     <select value={category} onChange={(e) => onCategoryChange(e.target.value)} disabled={disabled || loading} style={selSty}>
//                         {loading ? <option>Loading…</option> : cats.map((c) => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                 ) : (
//                     <div style={{ display: "flex", gap: 6 }}>
//                         <input value={newCat} onChange={(e) => setNewCat(e.target.value)} onKeyDown={(e) => e.key === "Enter" && commitCat()}
//                             placeholder="e.g. portfolio" disabled={disabled} style={{ ...inputSty, flex: 1 }} />
//                         <button onClick={commitCat} disabled={!newCat.trim() || disabled} style={{
//                             fontSize: 11, padding: "8px 12px", borderRadius: 7, border: "none",
//                             background: accent, color: "#fff", fontWeight: 600,
//                             cursor: !newCat.trim() ? "not-allowed" : "pointer", opacity: !newCat.trim() ? 0.5 : 1,
//                         }}>Add</button>
//                     </div>
//                 )}
//             </div>

//             {/* SUBCATEGORY */}
//             <div>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
//                     <label style={lbl}>Subcategory <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span></label>
//                     <div style={{ display: "flex", gap: 4 }}>
//                         <Pill active={subMode === "none"} onClick={() => { setSubMode("none"); onSubcategoryChange(""); }} disabled={disabled} accent={accent}>None</Pill>
//                         <Pill active={subMode === "new"} onClick={() => setSubMode("new")} disabled={disabled} accent={accent}>+ Add folder</Pill>
//                     </div>
//                 </div>
//                 {subMode === "none" ? (
//                     <div style={{ fontSize: 11, color: T.muted, padding: "8px 10px", background: T.surface, borderRadius: 7, border: `1px solid ${T.border}` }}>
//                         Files go directly into <code style={{ color: accent }}>{`images/${category}/`}</code>
//                     </div>
//                 ) : (
//                     <div style={{ display: "flex", gap: 6 }}>
//                         <input value={newSub} onChange={(e) => setNewSub(e.target.value)} onKeyDown={(e) => e.key === "Enter" && commitSub()}
//                             placeholder="e.g. thumbnails" disabled={disabled} style={{ ...inputSty, flex: 1 }} />
//                         <button onClick={commitSub} disabled={disabled} style={{
//                             fontSize: 11, padding: "8px 12px", borderRadius: 7, border: "none",
//                             background: T.border, color: T.textDim, cursor: "pointer", fontWeight: 600,
//                         }}>Set</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // VIDEO COLLECTION PICKER
// // Bunny Stream collections = folders (Ecom page assets, Google ads, Meta ads, UI…)
// // ─────────────────────────────────────────────────────────────────────────────
// function VideoCollectionPicker({ collectionId, onCollectionChange, disabled }) {
//     const accent = T.vid.accent;

//     // collections: Array<{ guid, name, videoCount }>
//     const [collections, setCollections] = useState([]);
//     const [mode, setMode] = useState("pick");  // "pick" | "none" | "new"
//     const [newName, setNewName] = useState("");
//     const [loading, setLoading] = useState(true);
//     const [creating, setCreating] = useState(false);
//     const [createErr, setCreateErr] = useState("");

//     // Fetch real collections from Bunny Stream on mount
//     useEffect(() => {
//         getVideoCollectionsAPI()
//             .then((res) => {
//                 const cols = Array.isArray(res?.data) ? res.data : [];
//                 setCollections(cols);
//                 // auto-select first if available
//                 if (cols.length > 0 && !collectionId) onCollectionChange(cols[0].guid);
//             })
//             .catch(() => setCollections([]))
//             .finally(() => setLoading(false));
//     }, []);

//     const createNew = async () => {
//         const name = newName.trim();
//         if (!name) return;
//         setCreating(true); setCreateErr("");
//         try {
//             const res = await createVideoCollectionAPI(name);
//             const newCol = res.data; // { guid, name }
//             setCollections((prev) => [...prev, newCol]);
//             onCollectionChange(newCol.guid);
//             setMode("pick");
//             setNewName("");
//         } catch (e) {
//             setCreateErr(e?.response?.data?.message || e.message || "Failed to create collection");
//         } finally {
//             setCreating(false);
//         }
//     };

//     const selectedCol = collections.find((c) => c.guid === collectionId);

//     const inputSty = {
//         width: "100%", fontSize: 12, padding: "8px 10px",
//         background: T.surface, border: `1px solid ${T.border}`,
//         borderRadius: 7, color: T.text, outline: "none",
//         boxSizing: "border-box", fontFamily: "inherit",
//     };
//     const selSty = {
//         ...inputSty, cursor: "pointer", appearance: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23475569'/%3E%3C/svg%3E")`,
//         backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", paddingRight: 28,
//     };
//     const lbl = { fontSize: 10, fontWeight: 600, letterSpacing: "0.07em", color: T.textDim, textTransform: "uppercase", display: "block", marginBottom: 5 };

//     return (
//         <div style={{ background: T.surfaceHigh, border: `1px solid ${T.border}`, borderRadius: 10, padding: "14px 14px 12px", marginTop: 14 }}>
//             {/* Collection preview badge */}
//             <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
//                 <span style={{ fontSize: 12 }}>📂</span>
//                 <code style={{ fontSize: 11, color: accent, background: accent + "15", padding: "2px 8px", borderRadius: 5 }}>
//                     {mode === "none" || !selectedCol
//                         ? "No collection (root)"
//                         : selectedCol.name}
//                 </code>
//                 {selectedCol && (
//                     <span style={{ fontSize: 10, color: T.muted, marginLeft: 2 }}>
//                         {selectedCol.videoCount} video{selectedCol.videoCount !== 1 ? "s" : ""}
//                     </span>
//                 )}
//             </div>

//             {/* Mode toggles */}
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
//                 <label style={lbl}>Collection (folder)</label>
//                 <div style={{ display: "flex", gap: 4 }}>
//                     <Pill active={mode === "pick"} onClick={() => setMode("pick")} disabled={disabled} accent={accent}>Pick existing</Pill>
//                     <Pill active={mode === "none"} onClick={() => { setMode("none"); onCollectionChange(""); }} disabled={disabled} accent={accent}>None</Pill>
//                     <Pill active={mode === "new"} onClick={() => setMode("new")} disabled={disabled} accent={accent}>+ Create new</Pill>
//                 </div>
//             </div>

//             {/* PICK existing */}
//             {mode === "pick" && (
//                 loading ? (
//                     <div style={{ fontSize: 12, color: T.muted, padding: "8px 10px", background: T.surface, borderRadius: 7, border: `1px solid ${T.border}` }}>
//                         Loading collections from Bunny Stream…
//                     </div>
//                 ) : collections.length === 0 ? (
//                     <div style={{ fontSize: 12, color: T.muted, padding: "8px 10px", background: T.surface, borderRadius: 7, border: `1px solid ${T.border}` }}>
//                         No collections yet -{" "}
//                         <button onClick={() => setMode("new")} style={{ background: "none", border: "none", color: accent, cursor: "pointer", fontSize: 12, fontWeight: 600, padding: 0 }}>
//                             create one
//                         </button>
//                     </div>
//                 ) : (
//                     <select value={collectionId} onChange={(e) => onCollectionChange(e.target.value)} disabled={disabled} style={selSty}>
//                         {collections.map((c) => (
//                             <option key={c.guid} value={c.guid}>
//                                 {c.name}  ({c.videoCount} video{c.videoCount !== 1 ? "s" : ""})
//                             </option>
//                         ))}
//                     </select>
//                 )
//             )}

//             {/* NONE */}
//             {mode === "none" && (
//                 <div style={{ fontSize: 11, color: T.muted, padding: "8px 10px", background: T.surface, borderRadius: 7, border: `1px solid ${T.border}` }}>
//                     Video will be uploaded to the root of your library with no collection.
//                 </div>
//             )}

//             {/* CREATE NEW */}
//             {mode === "new" && (
//                 <>
//                     <div style={{ display: "flex", gap: 6 }}>
//                         <input
//                             value={newName}
//                             onChange={(e) => setNewName(e.target.value)}
//                             onKeyDown={(e) => e.key === "Enter" && createNew()}
//                             placeholder="e.g. Product demos"
//                             disabled={disabled || creating}
//                             style={{ ...inputSty, flex: 1 }}
//                         />
//                         <button onClick={createNew} disabled={!newName.trim() || creating || disabled} style={{
//                             fontSize: 11, padding: "8px 14px", borderRadius: 7, border: "none",
//                             background: creating ? T.border : accent, color: creating ? T.muted : "#fff",
//                             cursor: !newName.trim() || creating ? "not-allowed" : "pointer",
//                             fontWeight: 600, transition: "all 0.15s", whiteSpace: "nowrap",
//                         }}>
//                             {creating ? "Creating…" : "Create"}
//                         </button>
//                     </div>
//                     {createErr && (
//                         <div style={{ fontSize: 11, color: "#fca5a5", marginTop: 6, padding: "6px 10px", background: "#1a0a0a", borderRadius: 6, border: "1px solid #7f1d1d" }}>
//                             {createErr}
//                         </div>
//                     )}
//                     <div style={{ fontSize: 10, color: T.subtle, marginTop: 6 }}>
//                         This will create a real collection in your Bunny Stream library immediately.
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // UPLOAD MODAL
// // ─────────────────────────────────────────────────────────────────────────────
// function UploadModal({ mode, onClose }) {
//     const isImage = mode === "image";
//     const tok = isImage ? T.img : T.vid;

//     const [file, setFile] = useState(null);
//     const [title, setTitle] = useState("");
//     const [category, setCategory] = useState("general");
//     const [subcategory, setSubcategory] = useState("");
//     const [collectionId, setCollectionId] = useState("");
//     const [progress, setProgress] = useState(0);
//     const [uploading, setUploading] = useState(false);
//     const [result, setResult] = useState(null);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fn = (e) => { if (e.key === "Escape" && !uploading) onClose(); };
//         window.addEventListener("keydown", fn);
//         return () => window.removeEventListener("keydown", fn);
//     }, [onClose, uploading]);

//     useEffect(() => {
//         if (file && !title) setTitle(file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
//     }, [file]);

//     const reset = () => {
//         setFile(null); setTitle(""); setProgress(0); setUploading(false);
//         setResult(null); setError(""); setCategory("general");
//         setSubcategory(""); setCollectionId("");
//     };

//     const handleUpload = async () => {
//         if (!file) { setError("Please select a file."); return; }
//         if (!isImage && !title.trim()) { setError("Please enter a video title."); return; }

//         setUploading(true); setError(""); setProgress(0);
//         try {
//             const data = isImage
//                 ? await uploadImageAPI(file, { category, subcategory }, setProgress)
//                 : await uploadVideoAPI(file, title.trim(), collectionId, setProgress);
//             setResult(data);
//         } catch (e) {
//             setError(e.message);
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <div onClick={(e) => { if (e.target === e.currentTarget && !uploading) onClose(); }} style={{
//             position: "fixed", inset: 0, zIndex: 9999,
//             background: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: 16, animation: "umFadeIn 0.15s ease",
//             fontFamily: "'DM Sans', system-ui, sans-serif",
//         }}>
//             <style>{`
//                 @keyframes umFadeIn  { from{opacity:0} to{opacity:1} }
//                 @keyframes umSlideUp { from{opacity:0;transform:translateY(16px) scale(0.98)} to{opacity:1;transform:none} }
//                 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
//                 .um-cancel:hover { background:#1e3a52!important; color:#cbd5e1!important; }
//                 .um-field:focus  { border-color:${tok.accent}!important; outline:none; }
//             `}</style>

//             <div style={{
//                 width: "100%", maxWidth: 500, background: T.bg, borderRadius: 20,
//                 border: `1px solid ${tok.accent}2a`,
//                 boxShadow: `0 0 0 1px #ffffff06, 0 32px 80px rgba(0,0,0,0.7), 0 0 60px ${tok.glow}`,
//                 animation: "umSlideUp 0.22s ease", overflow: "hidden",
//                 maxHeight: "94vh", display: "flex", flexDirection: "column",
//             }}>
//                 {/* Header */}
//                 <div style={{
//                     display: "flex", alignItems: "center", justifyContent: "space-between",
//                     padding: "16px 20px", flexShrink: 0,
//                     borderBottom: `1px solid ${T.border}`,
//                     background: `linear-gradient(135deg, ${tok.glow} 0%, transparent 65%)`,
//                 }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                         <div style={{
//                             width: 36, height: 36, borderRadius: 10, background: tok.glow,
//                             border: `1px solid ${tok.accent}44`, display: "flex",
//                             alignItems: "center", justifyContent: "center", fontSize: 17,
//                         }}>{isImage ? "🖼️" : "🎬"}</div>
//                         <div>
//                             <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>Upload {isImage ? "Image" : "Video"}</div>
//                             <div style={{ fontSize: 11, color: T.muted }}>
//                                 {isImage ? "Bunny Storage → CDN URL" : "Bunny Stream → HLS + Embed"}
//                             </div>
//                         </div>
//                     </div>
//                     {!uploading && (
//                         <button onClick={onClose} style={{
//                             width: 28, height: 28, borderRadius: 7, border: `1px solid ${T.border}`,
//                             background: T.border, color: T.muted, cursor: "pointer", fontSize: 17,
//                             display: "flex", alignItems: "center", justifyContent: "center",
//                         }}>×</button>
//                     )}
//                 </div>

//                 {/* Scrollable body */}
//                 <div style={{ padding: "20px 20px 22px", overflowY: "auto", flex: 1 }}>
//                     {!result ? (
//                         <>
//                             <DropZone mode={mode} file={file} onFile={setFile} disabled={uploading} />

//                             {/* IMAGE: folder picker */}
//                             {isImage && (
//                                 <ImageFolderPicker
//                                     category={category} subcategory={subcategory}
//                                     onCategoryChange={setCategory} onSubcategoryChange={setSubcategory}
//                                     disabled={uploading}
//                                 />
//                             )}

//                             {/* VIDEO: title + collection picker */}
//                             {!isImage && (
//                                 <>
//                                     <div style={{ marginTop: 14 }}>
//                                         <label style={{
//                                             fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
//                                             color: T.textDim, textTransform: "uppercase", display: "block", marginBottom: 5,
//                                         }}>Video Title *</label>
//                                         <input className="um-field" value={title} onChange={(e) => setTitle(e.target.value)}
//                                             placeholder="My awesome video" disabled={uploading} style={{
//                                                 width: "100%", fontSize: 13, padding: "10px 12px",
//                                                 background: T.surface, border: `1px solid ${T.border}`,
//                                                 borderRadius: 8, color: T.text, boxSizing: "border-box",
//                                                 outline: "none", transition: "border-color 0.15s", fontFamily: "inherit",
//                                             }} />
//                                     </div>

//                                     <VideoCollectionPicker
//                                         collectionId={collectionId}
//                                         onCollectionChange={setCollectionId}
//                                         disabled={uploading}
//                                     />
//                                 </>
//                             )}

//                             {/* Progress */}
//                             {uploading && (
//                                 <div style={{ marginTop: 16 }}>
//                                     <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: T.textDim, marginBottom: 2 }}>
//                                         <span style={{ color: tok.accent, fontWeight: 600 }}>
//                                             {progress < 100 ? "Uploading…" : "Finalising…"}
//                                         </span>
//                                         <span style={{ fontWeight: 700, color: T.text }}>{progress}%</span>
//                                     </div>
//                                     <ProgressBar value={progress} color={tok.accent} />
//                                     <div style={{ fontSize: 10, color: T.subtle, marginTop: 4 }}>
//                                         {isImage
//                                             ? `Uploading to images/${category}${subcategory ? "/" + subcategory : ""}/…`
//                                             : "Uploading to Bunny Stream - encoding starts automatically."}
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Error */}
//                             {error && (
//                                 <div style={{
//                                     marginTop: 12, padding: "10px 14px", borderRadius: 8,
//                                     background: "#1a0a0a", border: "1px solid #7f1d1d",
//                                     fontSize: 12, color: "#fca5a5",
//                                 }}>{error}</div>
//                             )}

//                             {/* Actions */}
//                             <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
//                                 <button className="um-cancel" onClick={onClose} disabled={uploading} style={{
//                                     padding: "10px 18px", borderRadius: 8,
//                                     border: `1px solid ${T.border}`, background: T.border,
//                                     color: T.muted, fontSize: 13, fontWeight: 500,
//                                     cursor: uploading ? "not-allowed" : "pointer",
//                                     transition: "all 0.15s", fontFamily: "inherit", opacity: uploading ? 0.5 : 1,
//                                 }}>Cancel</button>

//                                 <button onClick={handleUpload} disabled={uploading || !file} style={{
//                                     flex: 1, padding: "10px", borderRadius: 8, border: "none",
//                                     background: uploading || !file ? T.border : `linear-gradient(135deg, ${tok.accent}, ${tok.dark})`,
//                                     color: uploading || !file ? T.subtle : "#fff",
//                                     fontSize: 13, fontWeight: 700,
//                                     cursor: uploading || !file ? "not-allowed" : "pointer",
//                                     transition: "all 0.2s", fontFamily: "inherit",
//                                     boxShadow: uploading || !file ? "none" : `0 4px 20px ${tok.glow}`,
//                                 }}>
//                                     {uploading
//                                         ? progress < 100 ? `Uploading ${progress}%…` : "Finalising…"
//                                         : `Upload ${isImage ? "Image" : "Video"}`}
//                                 </button>
//                             </div>
//                         </>
//                     ) : (
//                         /* SUCCESS */
//                         <>
//                             <div style={{ textAlign: "center", padding: "12px 0 18px", borderBottom: `1px solid ${T.border}`, marginBottom: 18 }}>
//                                 <div style={{
//                                     width: 50, height: 50, borderRadius: "50%", background: "#052e16",
//                                     border: "2px solid #16a34a", display: "flex", alignItems: "center",
//                                     justifyContent: "center", fontSize: 20, margin: "0 auto 10px",
//                                     boxShadow: "0 0 20px #16a34a44",
//                                 }}>✓</div>
//                                 <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>
//                                     {isImage ? "Image live on CDN!" : "Video uploaded!"}
//                                 </div>
//                                 <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
//                                     {isImage ? "Your image is immediately accessible." : "Bunny Stream is now encoding your video."}
//                                 </div>
//                             </div>

//                             {isImage && (
//                                 <>
//                                     {result.cdnUrl && (
//                                         <div style={{
//                                             borderRadius: 10, overflow: "hidden", marginBottom: 14,
//                                             border: `1px solid ${T.border}`, maxHeight: 150,
//                                             display: "flex", alignItems: "center", justifyContent: "center",
//                                             background: T.surface,
//                                         }}>
//                                             <img src={result.cdnUrl} alt="uploaded" style={{ maxWidth: "100%", maxHeight: 150, display: "block" }} />
//                                         </div>
//                                     )}
//                                     {result.cdnUrl && <CopyRow label="CDN URL" value={result.cdnUrl} />}
//                                     {result.fileName && <CopyRow label="Storage Path" value={result.fileName} />}
//                                 </>
//                             )}

//                             {!isImage && (
//                                 <>
//                                     {result.streamUrl && <CopyRow label="Stream URL (HLS)" value={result.streamUrl} />}
//                                     {result.embedUrl && <CopyRow label="Embed URL (iframe)" value={result.embedUrl} />}
//                                     {result.thumbnailUrl && <CopyRow label="Thumbnail URL" value={result.thumbnailUrl} />}
//                                     {result.guid && <CopyRow label="Video GUID" value={result.guid} />}
//                                 </>
//                             )}

//                             <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
//                                 <button onClick={reset} style={{
//                                     flex: 1, padding: "10px", borderRadius: 8,
//                                     border: `1px solid ${T.border}`, background: T.border,
//                                     color: T.textDim, fontSize: 13, fontWeight: 600,
//                                     cursor: "pointer", fontFamily: "inherit",
//                                 }}>Upload Another</button>
//                                 <button onClick={onClose} style={{
//                                     flex: 1, padding: "10px", borderRadius: 8, border: "none",
//                                     background: `linear-gradient(135deg, ${tok.accent}, ${tok.dark})`,
//                                     color: "#fff", fontSize: 13, fontWeight: 700,
//                                     cursor: "pointer", fontFamily: "inherit",
//                                     boxShadow: `0 4px 20px ${tok.glow}`,
//                                 }}>Done</button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // NAVBAR UPLOAD BUTTONS - drop <UploadButtons /> into your existing navbar
// // ─────────────────────────────────────────────────────────────────────────────
// export function UploadButtons() {
//     const [modal, setModal] = useState(null);

//     const btn = {
//         display: "flex", alignItems: "center", gap: 7,
//         padding: "8px 16px", borderRadius: 8, fontSize: 13,
//         fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
//         whiteSpace: "nowrap", fontFamily: "'DM Sans', system-ui, sans-serif", border: "none",
//     };

//     return (
//         <>
//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                 <button onClick={() => setModal("image")} style={{
//                     ...btn, border: `1px solid ${T.img.ring}`,
//                     background: "linear-gradient(135deg, #831843, #9d174d)",
//                     color: "#fce7f3", boxShadow: `0 0 16px ${T.img.glow}`,
//                 }}
//                     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 28px ${T.img.ring}`; e.currentTarget.style.transform = "translateY(-1px)"; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 16px ${T.img.glow}`; e.currentTarget.style.transform = ""; }}
//                 >
//                     <span style={{ fontSize: 15 }}>🖼️</span> Upload Image
//                 </button>

//                 <button onClick={() => setModal("video")} style={{
//                     ...btn, border: `1px solid ${T.vid.ring}`,
//                     background: "linear-gradient(135deg, #1e1b4b, #312e81)",
//                     color: "#e0e7ff", boxShadow: `0 0 16px ${T.vid.glow}`,
//                 }}
//                     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 28px ${T.vid.ring}`; e.currentTarget.style.transform = "translateY(-1px)"; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 16px ${T.vid.glow}`; e.currentTarget.style.transform = ""; }}
//                 >
//                     <span style={{ fontSize: 15 }}>🎬</span> Upload Video
//                 </button>
//             </div>

//             {modal && <UploadModal mode={modal} onClose={() => setModal(null)} />}
//         </>
//     );
// }

// export default UploadButtons;



import { useState, useRef, useCallback, useEffect } from "react";
import {
    uploadImageAPI,
    uploadVideoAPI,
    getFoldersAPI,
    getSubFoldersAPI,
    createFolderAPI,
} from "../../utils/mediaapi";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
    bg: "#0d1117", surface: "#0f172a", high: "#131f32",
    border: "#1e293b", muted: "#475569", subtle: "#334155",
    text: "#f1f5f9", dim: "#94a3b8",
    img: { a: "#f472b6", g: "#f472b618", d: "#9d174d", r: "#f472b640" },
    vid: { a: "#818cf8", g: "#818cf818", d: "#3730a3", r: "#818cf840" },
    ok: "#16a34a", okBg: "#052e16",
    err: "#fca5a5", errBg: "#1a0808",
};

// ─── Atoms ────────────────────────────────────────────────────────────────────
const lbl = { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: C.dim, textTransform: "uppercase", display: "block", marginBottom: 5 };
const inputSty = { width: "100%", fontSize: 12, padding: "8px 10px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 7, color: C.text, outline: "none", boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.15s" };
const selSty = { ...inputSty, cursor: "pointer", appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23475569'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", paddingRight: 28 };

function Tag({ active, onClick, disabled, accent, children }) {
    return (
        <button onClick={onClick} disabled={disabled} style={{
            fontSize: 10, padding: "3px 10px", borderRadius: 99, border: `1px solid ${active ? accent + "80" : C.border}`,
            background: active ? accent + "20" : "transparent", color: active ? accent : C.muted,
            cursor: disabled ? "not-allowed" : "pointer", fontWeight: 600, transition: "all 0.15s",
        }}>{children}</button>
    );
}

function CopyField({ label, value }) {
    const [ok, setOk] = useState(false);
    const copy = () => { navigator.clipboard.writeText(value); setOk(true); setTimeout(() => setOk(false), 1800); };
    return (
        <div style={{ marginBottom: 9 }}>
            <div style={lbl}>{label}</div>
            <div style={{ display: "flex", gap: 6 }}>
                <input readOnly value={value} onClick={(e) => e.target.select()} style={{ ...inputSty, flex: 1, fontFamily: "monospace", color: "#7dd3fc", background: "#060a10" }} />
                <button onClick={copy} style={{ fontSize: 11, padding: "7px 13px", borderRadius: 6, border: "none", background: ok ? C.okBg : C.border, color: ok ? "#86efac" : C.dim, cursor: "pointer", fontWeight: 700, whiteSpace: "nowrap" }}>{ok ? "✓" : "Copy"}</button>
            </div>
        </div>
    );
}

// ─── Drop zone ────────────────────────────────────────────────────────────────
function DropZone({ mode, file, onFile, disabled }) {
    const [drag, setDrag] = useState(false);
    const ref = useRef();
    const isImg = mode === "image";
    const tok = isImg ? C.img : C.vid;
    const valid = (f) => f && (isImg ? f.type.startsWith("image/") : f.type.startsWith("video/")) ? f : null;
    const preview = file && isImg ? URL.createObjectURL(file) : null;

    return (
        <div
            onDrop={(e) => { e.preventDefault(); setDrag(false); const f = valid(e.dataTransfer.files[0]); if (f) onFile(f); }}
            onDragOver={(e) => { e.preventDefault(); if (!disabled) setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onClick={() => !disabled && ref.current?.click()}
            style={{
                border: `2px dashed ${drag ? tok.a : file ? tok.a + "90" : C.subtle}`,
                borderRadius: 14, background: drag ? tok.g : C.surface,
                minHeight: 148, display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", cursor: disabled ? "default" : "pointer",
                padding: 20, textAlign: "center", position: "relative", overflow: "hidden",
                userSelect: "none", transition: "all 0.2s",
            }}
        >
            <input ref={ref} type="file" accept={isImg ? "image/*" : "video/*"} style={{ display: "none" }}
                onChange={(e) => { const f = valid(e.target.files[0]); if (f) onFile(f); }} />

            {preview && <img src={preview} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15, pointerEvents: "none" }} />}

            <div style={{ position: "relative", zIndex: 1 }}>
                {file ? (
                    <>
                        <div style={{ fontSize: 28, marginBottom: 7, filter: `drop-shadow(0 0 8px ${tok.a})` }}>{isImg ? "🖼️" : "🎬"}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: C.text, maxWidth: 280, wordBreak: "break-all", marginBottom: 3 }}>
                            {file.name.length > 44 ? file.name.slice(0, 41) + "…" : file.name}
                        </div>
                        <div style={{ fontSize: 11, color: C.muted }}>
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                            {!disabled && <span style={{ color: tok.a }}> · click to change</span>}
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ width: 46, height: 46, borderRadius: "50%", background: tok.g, border: `1.5px solid ${tok.a}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19, margin: "0 auto 11px" }}>{isImg ? "🖼️" : "🎬"}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 4 }}>Drop {isImg ? "image" : "video"} here</div>
                        <div style={{ fontSize: 12, color: C.muted }}>or <span style={{ color: tok.a, fontWeight: 600 }}>browse files</span></div>
                        <div style={{ fontSize: 10, color: C.subtle, marginTop: 7 }}>{isImg ? "PNG · JPG · GIF · WebP · SVG · max 25 MB" : "MP4 · MOV · AVI · MKV · WebM · any size"}</div>
                    </>
                )}
            </div>
        </div>
    );
}

// ─── Folder picker (fetches real folders from Bunny) ─────────────────────────
function FolderPicker({ mode, category, subcategory, onCategoryChange, onSubcategoryChange, disabled }) {
    const isImg = mode === "image";
    const type = isImg ? "images" : "videos";
    const acc = isImg ? C.img.a : C.vid.a;

    // Folders from Bunny Storage
    const [folders, setFolders] = useState([]);  // [{name, path}]
    const [subFolders, setSubFolders] = useState([]);  // [{name, path}]
    const [loading, setLoading] = useState(true);
    const [subLoading, setSubLoading] = useState(false);

    // UI modes
    const [catMode, setCatMode] = useState("pick");    // "pick" | "new"
    const [subMode, setSubMode] = useState("none");    // "none" | "pick" | "new"

    // New folder inputs
    const [newCat, setNewCat] = useState("");
    const [newSub, setNewSub] = useState("");
    const [creating, setCreating] = useState(false);
    const [createErr, setCreateErr] = useState("");

    // Load top-level folders from Bunny on mount
    useEffect(() => {
        setLoading(true);
        getFoldersAPI(type)
            .then((res) => {
                // res.data is an array when type is specified
                const list = Array.isArray(res.data) ? res.data : [];
                // Always include "general" as fallback
                const merged = list.some((f) => f.name === "general")
                    ? list
                    : [{ name: "general", path: `${type}/general` }, ...list];
                setFolders(merged);
                if (!category && merged.length > 0) onCategoryChange(merged[0].name);
            })
            .catch(() => {
                setFolders([{ name: "general", path: `${type}/general` }]);
            })
            .finally(() => setLoading(false));
    }, [type]);

    // Load sub-folders when category changes
    useEffect(() => {
        if (!category || subMode === "new" || subMode === "none") return;
        setSubLoading(true);
        getSubFoldersAPI(type, category)
            .then((res) => setSubFolders(Array.isArray(res.data) ? res.data : []))
            .catch(() => setSubFolders([]))
            .finally(() => setSubLoading(false));
    }, [category, type]);

    const doCreateFolder = async (isSubFolder) => {
        const name = isSubFolder ? newSub.trim() : newCat.trim();
        const parent = isSubFolder ? category : "";
        if (!name) return;
        setCreating(true); setCreateErr("");
        try {
            const res = await createFolderAPI(type, name, parent);
            const slug = res.data?.slug || name.toLowerCase().replace(/[^a-z0-9-_]/g, "-");
            if (isSubFolder) {
                setSubFolders((p) => [...p, { name: slug, path: `${type}/${category}/${slug}` }]);
                onSubcategoryChange(slug);
                setNewSub("");
                setSubMode("pick");
            } else {
                setFolders((p) => [...p, { name: slug, path: `${type}/${slug}` }]);
                onCategoryChange(slug);
                setNewCat("");
                setCatMode("pick");
            }
        } catch (e) {
            setCreateErr(e?.response?.data?.message || e.message || "Failed to create folder");
        } finally {
            setCreating(false);
        }
    };

    const pathPreview = [type, category, subMode !== "none" ? subcategory : ""].filter(Boolean).join("/") + "/";

    return (
        <div style={{ background: C.high, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 14px 12px", marginTop: 14 }}>
            {/* Path preview */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 13 }}>
                <span style={{ fontSize: 13 }}>📁</span>
                <code style={{ fontSize: 11, color: acc, background: acc + "18", padding: "2px 9px", borderRadius: 5, fontFamily: "monospace" }}>
                    {pathPreview}
                </code>
                <span style={{ fontSize: 10, color: C.subtle }}>storage path</span>
            </div>

            {/* ── Category / folder ── */}
            <div style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                    <label style={lbl}>Folder *</label>
                    <div style={{ display: "flex", gap: 4 }}>
                        <Tag active={catMode === "pick"} onClick={() => setCatMode("pick")} disabled={disabled} accent={acc}>Existing</Tag>
                        <Tag active={catMode === "new"} onClick={() => setCatMode("new")} disabled={disabled} accent={acc}>+ New</Tag>
                    </div>
                </div>

                {catMode === "pick" ? (
                    loading ? (
                        <div style={{ ...inputSty, color: C.muted }}>Loading folders from Bunny…</div>
                    ) : (
                        <select value={category} onChange={(e) => { onCategoryChange(e.target.value); onSubcategoryChange(""); setSubMode("none"); }} disabled={disabled} style={selSty}>
                            {folders.map((f) => <option key={f.path} value={f.name}>{f.name}</option>)}
                        </select>
                    )
                ) : (
                    <>
                        <div style={{ display: "flex", gap: 6 }}>
                            <input
                                value={newCat} onChange={(e) => setNewCat(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && doCreateFolder(false)}
                                placeholder="e.g. hero, blog, portfolio" disabled={disabled || creating}
                                style={{ ...inputSty, flex: 1 }}
                            />
                            <button onClick={() => doCreateFolder(false)} disabled={!newCat.trim() || creating || disabled} style={{
                                fontSize: 11, padding: "8px 13px", borderRadius: 7, border: "none",
                                background: !newCat.trim() || creating ? C.border : acc,
                                color: !newCat.trim() || creating ? C.muted : "#fff",
                                cursor: !newCat.trim() || creating ? "not-allowed" : "pointer", fontWeight: 700,
                            }}>{creating ? "…" : "Create"}</button>
                        </div>
                        <div style={{ fontSize: 10, color: C.subtle, marginTop: 4 }}>
                            Creates a real folder on Bunny Storage immediately.
                        </div>
                        {createErr && <div style={{ fontSize: 11, color: C.err, marginTop: 5 }}>⚠ {createErr}</div>}
                    </>
                )}
            </div>

            {/* ── Sub-folder ── */}
            <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                    <label style={lbl}>Sub-folder <span style={{ opacity: 0.4, fontWeight: 400 }}>(optional)</span></label>
                    <div style={{ display: "flex", gap: 4 }}>
                        <Tag active={subMode === "none"} onClick={() => { setSubMode("none"); onSubcategoryChange(""); }} disabled={disabled} accent={acc}>None</Tag>
                        <Tag active={subMode === "pick"} onClick={() => setSubMode("pick")} disabled={disabled} accent={acc}>Existing</Tag>
                        <Tag active={subMode === "new"} onClick={() => setSubMode("new")} disabled={disabled} accent={acc}>+ New</Tag>
                    </div>
                </div>

                {subMode === "none" && (
                    <div style={{ fontSize: 11, color: C.muted, padding: "7px 10px", background: C.surface, borderRadius: 7, border: `1px solid ${C.border}` }}>
                        Files go into <code style={{ color: acc }}>{type}/{category}/</code>
                    </div>
                )}

                {subMode === "pick" && (
                    subLoading ? (
                        <div style={{ ...inputSty, color: C.muted }}>Loading sub-folders…</div>
                    ) : subFolders.length === 0 ? (
                        <div style={{ fontSize: 11, color: C.muted, padding: "7px 10px", background: C.surface, borderRadius: 7, border: `1px solid ${C.border}` }}>
                            No sub-folders yet -{" "}
                            <button onClick={() => setSubMode("new")} style={{ background: "none", border: "none", color: acc, cursor: "pointer", fontSize: 11, fontWeight: 600, padding: 0 }}>create one</button>
                        </div>
                    ) : (
                        <select value={subcategory} onChange={(e) => onSubcategoryChange(e.target.value)} disabled={disabled} style={selSty}>
                            <option value="">- none -</option>
                            {subFolders.map((f) => <option key={f.path} value={f.name}>{f.name}</option>)}
                        </select>
                    )
                )}

                {subMode === "new" && (
                    <>
                        <div style={{ display: "flex", gap: 6 }}>
                            <input
                                value={newSub} onChange={(e) => setNewSub(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && doCreateFolder(true)}
                                placeholder={`e.g. thumbnails, raw, processed`} disabled={disabled || creating}
                                style={{ ...inputSty, flex: 1 }}
                            />
                            <button onClick={() => doCreateFolder(true)} disabled={!newSub.trim() || creating || disabled} style={{
                                fontSize: 11, padding: "8px 13px", borderRadius: 7, border: "none",
                                background: !newSub.trim() || creating ? C.border : acc,
                                color: !newSub.trim() || creating ? C.muted : "#fff",
                                cursor: !newSub.trim() || creating ? "not-allowed" : "pointer", fontWeight: 700,
                            }}>{creating ? "…" : "Create"}</button>
                        </div>
                        {createErr && <div style={{ fontSize: 11, color: C.err, marginTop: 5 }}>⚠ {createErr}</div>}
                    </>
                )}
            </div>
        </div>
    );
}

// ─── Phase progress bar ───────────────────────────────────────────────────────
function PhaseBar({ phase, progress, tok }) {
    const steps = [
        { key: "prepare", icon: "⚙️", label: "Prepare" },
        { key: "uploading", icon: "🚀", label: "Upload" },
        { key: "saving", icon: "💾", label: "Save" },
    ];
    const cur = steps.findIndex((s) => s.key === phase);

    return (
        <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                {steps.map((s, i) => {
                    const done = i < cur, active = s.key === phase;
                    return (
                        <div key={s.key} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                            <div style={{
                                width: 30, height: 30, borderRadius: "50%", fontSize: 14,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: done ? C.okBg : active ? tok.g : C.surface,
                                border: `1.5px solid ${done ? C.ok : active ? tok.a : C.border}`,
                                transition: "all 0.3s",
                            }}>{done ? "✓" : s.icon}</div>
                            <div style={{ fontSize: 9, color: active ? tok.a : done ? "#86efac" : C.muted, fontWeight: active ? 700 : 400 }}>
                                {s.label}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ background: C.border, borderRadius: 99, height: 5, overflow: "hidden" }}>
                {phase === "uploading" ? (
                    <div style={{ width: `${progress}%`, height: "100%", borderRadius: 99, background: tok.a, transition: "width 0.2s", boxShadow: `0 0 8px ${tok.a}80` }} />
                ) : (
                    <div style={{ width: "40%", height: "100%", borderRadius: 99, background: tok.a, animation: "bpulse 1.1s ease-in-out infinite", boxShadow: `0 0 8px ${tok.a}80` }} />
                )}
            </div>

            <div style={{ fontSize: 10, color: C.subtle, marginTop: 5, textAlign: "center" }}>
                {phase === "prepare" && "Getting upload URL from Bunny…"}
                {phase === "uploading" && `${progress}% · uploading directly to Bunny Storage (server = 0 memory)`}
                {phase === "saving" && "Upload complete! Saving URL to database…"}
            </div>
        </div>
    );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function UploadModal({ mode, onClose }) {
    const isImg = mode === "image";
    const tok = isImg ? C.img : C.vid;

    const [file, setFile] = useState(null);
    const [category, setCategory] = useState("general");
    const [subcat, setSubcat] = useState("");
    const [phase, setPhase] = useState(null);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const busy = phase !== null;

    useEffect(() => {
        const fn = (e) => { if (e.key === "Escape" && !busy) onClose(); };
        window.addEventListener("keydown", fn);
        return () => window.removeEventListener("keydown", fn);
    }, [busy]);

    const reset = () => { setFile(null); setCategory("general"); setSubcat(""); setPhase(null); setProgress(0); setResult(null); setError(""); };

    const handleUpload = async () => {
        if (!file) return setError("Please select a file.");
        setError(""); setProgress(0);
        try {
            const fn = isImg ? uploadImageAPI : uploadVideoAPI;
            const data = await fn(file, { category, subcategory: subcat }, (pct) => setProgress(pct), (p) => setPhase(p));
            setResult(data);
            setPhase(null);
        } catch (e) {
            setError(e?.message || "Upload failed.");
            setPhase(null);
        }
    };

    return (
        <div
            onClick={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(7px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, fontFamily: "'DM Sans',system-ui,sans-serif", animation: "bfade .15s ease" }}
        >
            <style>{`
                @keyframes bfade  { from{opacity:0} to{opacity:1} }
                @keyframes bslide { from{opacity:0;transform:translateY(14px) scale(.98)} to{opacity:1;transform:none} }
                @keyframes bpulse { 0%,100%{opacity:.35} 50%{opacity:1} }
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
            `}</style>

            <div style={{
                width: "100%", maxWidth: 490, background: C.bg, borderRadius: 20,
                border: `1px solid ${tok.a}25`, boxShadow: `0 0 0 1px #fff4, 0 28px 70px rgba(0,0,0,.8), 0 0 50px ${tok.g}`,
                animation: "bslide .2s ease", maxHeight: "93vh", display: "flex", flexDirection: "column",
            }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", borderBottom: `1px solid ${C.border}`, background: `linear-gradient(135deg,${tok.g},transparent 60%)`, borderRadius: "20px 20px 0 0", flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 9, background: tok.g, border: `1px solid ${tok.a}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                            {isImg ? "🖼️" : "🎬"}
                        </div>
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Upload {isImg ? "Image" : "Video"}</div>
                            <div style={{ fontSize: 11, color: C.muted }}>Direct → Bunny Storage → CDN</div>
                        </div>
                    </div>
                    {!busy && (
                        <button onClick={onClose} style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${C.border}`, background: C.border, color: C.muted, cursor: "pointer", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
                    )}
                </div>

                {/* Body */}
                <div style={{ padding: "18px 20px 22px", overflowY: "auto", flex: 1 }}>
                    {!result ? (
                        <>
                            <DropZone mode={mode} file={file} onFile={setFile} disabled={busy} />

                            <FolderPicker
                                mode={mode} category={category} subcategory={subcat}
                                onCategoryChange={setCategory} onSubcategoryChange={setSubcat}
                                disabled={busy}
                            />

                            {busy && <PhaseBar phase={phase} progress={progress} tok={tok} />}

                            {error && (
                                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: C.errBg, border: "1px solid #7f1d1d", fontSize: 12, color: C.err, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                                    ⚠️ {error}
                                </div>
                            )}

                            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                                <button onClick={onClose} disabled={busy} style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.border, color: C.muted, fontSize: 13, fontWeight: 500, cursor: busy ? "not-allowed" : "pointer", opacity: busy ? 0.45 : 1, fontFamily: "inherit" }}>Cancel</button>
                                <button onClick={handleUpload} disabled={busy || !file} style={{
                                    flex: 1, padding: "10px", borderRadius: 8, border: "none",
                                    background: busy || !file ? C.border : `linear-gradient(135deg,${tok.a},${tok.d})`,
                                    color: busy || !file ? C.subtle : "#fff",
                                    fontSize: 13, fontWeight: 700, cursor: busy || !file ? "not-allowed" : "pointer",
                                    transition: "all .2s", fontFamily: "inherit",
                                    boxShadow: busy || !file ? "none" : `0 4px 18px ${tok.g}`,
                                }}>
                                    {busy
                                        ? phase === "uploading" ? `Uploading ${progress}%…`
                                            : phase === "prepare" ? "Preparing…" : "Saving…"
                                        : `Upload ${isImg ? "Image" : "Video"}`}
                                </button>
                            </div>
                        </>
                    ) : (
                        /* ── Success ── */
                        <>
                            <div style={{ textAlign: "center", padding: "10px 0 16px", borderBottom: `1px solid ${C.border}`, marginBottom: 16 }}>
                                <div style={{ width: 48, height: 48, borderRadius: "50%", background: C.okBg, border: `2px solid ${C.ok}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, margin: "0 auto 10px", boxShadow: `0 0 18px ${C.ok}40` }}>✓</div>
                                <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
                                    {isImg ? "Image live on CDN!" : "Video live on CDN!"}
                                </div>
                                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Stored at Bunny Storage · publicly accessible via CDN</div>
                            </div>

                            {isImg && result.cdnUrl && (
                                <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: 14, border: `1px solid ${C.border}`, maxHeight: 140, display: "flex", alignItems: "center", justifyContent: "center", background: C.surface }}>
                                    <img src={result.cdnUrl} alt="uploaded" style={{ maxWidth: "100%", maxHeight: 140, display: "block" }} />
                                </div>
                            )}

                            {result.cdnUrl && <CopyField label="CDN URL (public link)" value={result.cdnUrl} />}
                            {result.fileName && <CopyField label="Storage path (used to delete)" value={result.fileName} />}

                            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                                <button onClick={reset} style={{ flex: 1, padding: "10px", borderRadius: 8, border: `1px solid ${C.border}`, background: C.border, color: C.dim, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Upload Another</button>
                                <button onClick={onClose} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", background: `linear-gradient(135deg,${tok.a},${tok.d})`, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 18px ${tok.g}` }}>Done</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Exported upload buttons (drop into Navbar) ───────────────────────────────
export function UploadButtons() {
    const [modal, setModal] = useState(null);

    const btnBase = { display: "flex", alignItems: "center", gap: 7, padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s", whiteSpace: "nowrap", border: "none", fontFamily: "'DM Sans',system-ui,sans-serif" };

    const hover = (e, tok, on) => {
        e.currentTarget.style.transform = on ? "translateY(-1px)" : "";
        e.currentTarget.style.boxShadow = on ? `0 0 28px ${tok.r}` : `0 0 16px ${tok.g}`;
    };

    return (
        <>
            <div style={{ display: "flex", gap: 8 }}>
                <button
                    onClick={() => setModal("image")}
                    style={{ ...btnBase, border: `1px solid ${C.img.r}`, background: "linear-gradient(135deg,#831843,#9d174d)", color: "#fce7f3", boxShadow: `0 0 16px ${C.img.g}` }}
                    onMouseEnter={(e) => hover(e, C.img, true)}
                    onMouseLeave={(e) => hover(e, C.img, false)}
                >
                    <span style={{ fontSize: 15 }}>🖼️</span> Upload Image
                </button>

                <button
                    onClick={() => setModal("video")}
                    style={{ ...btnBase, border: `1px solid ${C.vid.r}`, background: "linear-gradient(135deg,#1e1b4b,#312e81)", color: "#e0e7ff", boxShadow: `0 0 16px ${C.vid.g}` }}
                    onMouseEnter={(e) => hover(e, C.vid, true)}
                    onMouseLeave={(e) => hover(e, C.vid, false)}
                >
                    <span style={{ fontSize: 15 }}>🎬</span> Upload Video
                </button>
            </div>

            {modal && <UploadModal mode={modal} onClose={() => setModal(null)} />}
        </>
    );
}

export default UploadButtons;
