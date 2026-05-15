// "use client";

// /**
//  * ┌─────────────────────────────────────────────────────────────────────────┐
//  * │  MosaicScrollSection  —  Upthrust                                       │
//  * │  Mirrors the exact scroll animation on brand.dropbox.com                │
//  * │                                                                         │
//  * │  SCROLL SEQUENCE:                                                       │
//  * │  1. Section pins to viewport                                            │
//  * │  2. 9 colored tiles fly IN from screen edges (different directions)     │
//  * │     and snap together to form the mosaic grid                           │
//  * │  3. A content card fades in at center:                                  │
//  * │       State A → Blue card, logo only (empty)                            │
//  * │       State B → Blue card, text + logo                                  │
//  * │       State C → White bg, blue text + logo                              │
//  * │  4. Cards fade out. Section unpins. Next section scrolls into view.     │
//  * │                                                                         │
//  * │  Each tile is clickable → opens its URL in a new tab.                  │
//  * │                                                                         │
//  * │  INSTALL:  npm install gsap                                             │
//  * │  IMPORT:   import MosaicScrollSection from "@/components/Mosaic"        │
//  * └─────────────────────────────────────────────────────────────────────────┘
//  */

// import { useEffect, useRef, useState, useCallback } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// /* ── Tile Definitions ────────────────────────────────────────────────────── */
// const TILES = [
//     { id: "meta", label: "Meta", sub: "Ads", icon: null, bg: "#2BC4DF", ink: "#000", col: 1, row: 1, cs: 1, rs: 2, from: "left", url: "https://upthrust.co/meta-ads" },
//     { id: "creative", label: "Creative", sub: "Ads Agency", icon: null, bg: "#F5C842", ink: "#000", col: 2, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/creative" },
//     { id: "design", label: "Design", sub: "Agency", icon: null, bg: "#2BC4DF", ink: "#000", col: 3, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/design" },
//     { id: "ppc", label: "PPC", sub: "", icon: null, bg: "#C8B0E8", ink: "#000", col: 4, row: 1, cs: 1, rs: 1, from: "right", url: "https://upthrust.co/ppc" },
//     { id: "video", label: "Video", sub: "Production", icon: null, bg: "#F07B25", ink: "#fff", col: 2, row: 2, cs: 1, rs: 2, from: "bottom", url: "https://upthrust.co/video" },
//     { id: "logo", label: "", sub: "", icon: "rocket", bg: "#000000", ink: "#fff", col: 3, row: 2, cs: 1, rs: 1, from: "bottom", url: "https://upthrust.co" },
//     { id: "seo", label: "SEO", sub: "Agency", icon: null, bg: "#E44B2A", ink: "#fff", col: 4, row: 2, cs: 1, rs: 2, from: "right", url: "https://upthrust.co/seo" },
//     { id: "b2b", label: "B2B &", sub: "SaaS", icon: null, bg: "#A9D84D", ink: "#000", col: 1, row: 3, cs: 1, rs: 1, from: "left", url: "https://upthrust.co/b2b-saas" },
//     { id: "performance", label: "Performance", sub: "Marketing Agency", icon: null, bg: "#7A2C8C", ink: "#fff", col: 3, row: 3, cs: 1, rs: 1, from: "bottom", url: "https://upthrust.co/performance" },
// ];

// /* ── Card states (3 phases matching your screenshots) ───────────────────── */
// const CARD_STATES = [
//     { bg: "#1464F4", ink: "#fff", showText: false, showLogo: true }, // Blue, empty
//     { bg: "#1464F4", ink: "#fff", showText: true, showLogo: true }, // Blue, text + logo
//     { bg: "#ffffff", ink: "#1464F4", showText: true, showLogo: true }, // White, blue text
// ];

// /* ── Utility ─────────────────────────────────────────────────────────────── */
// function offscreen(from) {
//     if (typeof window === "undefined") return { x: 0, y: 0 };
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
//     if (from === "left") return { x: -vw * 1.15, y: 0 };
//     if (from === "right") return { x: vw * 1.15, y: 0 };
//     if (from === "top") return { x: 0, y: -vh * 1.15 };
//     if (from === "bottom") return { x: 0, y: vh * 1.15 };
//     return { x: 0, y: 0 };
// }

// /* ── Main Component ──────────────────────────────────────────────────────── */
// export default function MosaicScrollSection() {
//     const wrapperRef = useRef(null);
//     const sectionRef = useRef(null);
//     const gridRef = useRef(null);

//     const [cardState, setCardState] = useState(0);
//     const [cardVisible, setCardVisible] = useState(false);
//     const isAssembled = useRef(false);

//     const handleTileClick = useCallback((url) => {
//         if (isAssembled.current) window.open(url, "_blank", "noopener,noreferrer");
//     }, []);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         // Refs for setState inside GSAP callbacks (avoids stale closure)
//         let setCS = setCardState;
//         let setCV = setCardVisible;

//         const ctx = gsap.context(() => {
//             const tileEls = gsap.utils.toArray(".ut-tile", gridRef.current);

//             // Set all tiles off-screen
//             tileEls.forEach((el) => {
//                 const { x, y } = offscreen(el.dataset.from);
//                 gsap.set(el, { x, y, opacity: 0 });
//             });

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top top",
//                     end: "+=380%",
//                     pin: true,
//                     scrub: 1.3,
//                     anticipatePin: 1,
//                     onUpdate(self) {
//                         // Enable tile clicks once grid is assembled (~38% through timeline)
//                         isAssembled.current = self.progress >= 0.36;
//                     },
//                     onLeaveBack() {
//                         isAssembled.current = false;
//                         setCV(false);
//                         setCS(0);
//                     },
//                 },
//             });

//             /* ── Phase 1: tiles assemble (staggered) ── 0 → ~1.6 progress units */
//             tileEls.forEach((el, i) => {
//                 tl.to(el, {
//                     x: 0,
//                     y: 0,
//                     opacity: 1,
//                     duration: 1.3,
//                     ease: "power4.out",
//                 }, i * 0.07);  // 0.07 gap × 9 tiles = ~0.63 total stagger
//             });

//             /* Brief assembled hold */
//             tl.to({}, { duration: 0.5 }, ">");

//             /* ── Phase 2: card appears (blue, empty) */
//             tl.call(() => { setCV(true); setCS(0); }, [], ">");
//             tl.to({}, { duration: 0.6 }, ">");

//             /* ── Phase 3: text slides in on blue card */
//             tl.call(() => setCS(1), [], ">");
//             tl.to({}, { duration: 0.8 }, ">");

//             /* ── Phase 4: card goes white, text turns blue */
//             tl.call(() => setCS(2), [], ">");
//             tl.to({}, { duration: 1.0 }, ">");

//             /* ── Phase 5: card fades out */
//             tl.call(() => setCV(false), [], ">");
//             tl.to({}, { duration: 0.4 }, ">");

//         }, wrapperRef);

//         return () => ctx.revert();
//     }, []);

//     const cs = CARD_STATES[cardState];

//     return (
//         <div ref={wrapperRef} className="ut-root">
//             <style>{`
//         .ut-root {
//           font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
//           background: #fff;
//         }
//         .ut-tile { will-change: transform, opacity; }
//         .ut-tile:hover { filter: brightness(0.87) !important; }
//         @media (max-width: 600px) {
//           .ut-card-text { font-size: 0.8rem !important; }
//         }
//       `}</style>

//             {/* ── Intro ──────────────────────────────────────────────────────────── */}
//             <section style={S.intro}>
//                 <p style={S.eyebrow}>Scroll to explore</p>
//                 <h1 style={S.h1}>
//                     We make brands<br />
//                     <em style={S.h1Em}>unforgettable</em>
//                 </h1>
//                 <svg style={{ marginTop: "3rem", opacity: 0.25 }} width="24" height="36" viewBox="0 0 24 36" fill="none">
//                     <path d="M12 2v28M2 24l10 10 10-10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             </section>

//             {/* ── Pinned mosaic section ─────────────────────────────────────────── */}
//             <section ref={sectionRef} style={S.pinSection}>

//                 {/* Subtle grid lines background */}
//                 <div aria-hidden style={S.bgLines}>
//                     {Array.from({ length: 20 }).map((_, i) => (
//                         <div key={i} style={{ border: "0.5px solid rgba(0,0,0,0.065)" }} />
//                     ))}
//                 </div>

//                 {/* Tile grid */}
//                 <div ref={gridRef} style={S.grid}>
//                     {TILES.map((t) => (
//                         <div
//                             key={t.id}
//                             className="ut-tile"
//                             data-from={t.from}
//                             role="link"
//                             tabIndex={0}
//                             aria-label={`${t.label} ${t.sub} — visit page`}
//                             onClick={() => handleTileClick(t.url)}
//                             onKeyDown={(e) => e.key === "Enter" && handleTileClick(t.url)}
//                             style={{
//                                 gridColumn: `${t.col} / span ${t.cs}`,
//                                 gridRow: `${t.row} / span ${t.rs}`,
//                                 background: t.bg,
//                                 color: t.ink,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "space-between",
//                                 padding: "clamp(10px, 1.6vw, 22px)",
//                                 cursor: "pointer",
//                                 overflow: "hidden",
//                                 transition: "filter 0.18s ease",
//                             }}
//                         >
//                             {t.icon === "rocket" ? (
//                                 <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                                     <RocketSVG size="42%" color="#fff" />
//                                 </div>
//                             ) : (
//                                 <>
//                                     <span />
//                                     <p style={S.tileLabel}>
//                                         {t.label}{" "}
//                                         {t.sub && <em style={S.tileItalic}>{t.sub}</em>}
//                                     </p>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* ── Card overlay ─────────────────────────────────────────────────── */}
//                 <div style={S.cardOverlay}>
//                     <div
//                         style={{
//                             ...S.card,
//                             background: cs.bg,
//                             color: cs.ink,
//                             opacity: cardVisible ? 1 : 0,
//                             transform: cardVisible
//                                 ? "translateY(0px) scale(1)"
//                                 : "translateY(32px) scale(0.95)",
//                             transition: [
//                                 "opacity 0.55s cubic-bezier(.4,0,.2,1)",
//                                 "transform 0.55s cubic-bezier(.4,0,.2,1)",
//                                 "background 0.5s ease",
//                                 "color 0.5s ease",
//                             ].join(","),
//                         }}
//                     >
//                         <p
//                             className="ut-card-text"
//                             style={{
//                                 ...S.cardText,
//                                 opacity: cs.showText ? 1 : 0,
//                                 transform: cs.showText ? "translateY(0)" : "translateY(14px)",
//                                 transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
//                             }}
//                         >
//                             From icons to illustration, logos to language, this collection is the foundation for how{" "}
//                             <em style={S.cardItalic}>Upthrust</em>{" "}
//                             looks, feels, and sounds.
//                         </p>

//                         <div
//                             style={{
//                                 ...S.cardLogoRow,
//                                 opacity: cs.showLogo ? 1 : 0,
//                                 transition: "opacity 0.35s ease",
//                             }}
//                         >
//                             <RocketSVG size={20} color={cs.ink} />
//                             <span style={S.cardLogoText}>Upthrust</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ── Outro ────────────────────────────────────────────────────────── */}
//             <section style={S.outro}>
//                 <h2 style={S.h2}>
//                     Let&apos;s build something<br />
//                     <em style={{ fontStyle: "italic", fontWeight: 300, color: "#bbb" }}>remarkable</em>
//                 </h2>
//             </section>
//         </div>
//     );
// }

// /* ── Rocket SVG ──────────────────────────────────────────────────────────── */
// function RocketSVG({ size = 24, color = "#fff" }) {
//     const isStr = typeof size === "string";
//     const dim = isStr ? size : `${size}px`;
//     return (
//         <svg
//             width={dim} height={dim}
//             viewBox="0 0 48 56"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ display: "block", flexShrink: 0 }}
//         >
//             {/* Body */}
//             <path d="M24 2C24 2 11 13 11 31H37C37 13 24 2 24 2Z" fill={color} />
//             {/* Left fin */}
//             <path d="M11 31C11 31 5.5 35 5 42C9 40.5 12.5 37.5 14 34L11 31Z" fill={color} />
//             {/* Right fin */}
//             <path d="M37 31C37 31 42.5 35 43 42C39 40.5 35.5 37.5 34 34L37 31Z" fill={color} />
//             {/* Porthole */}
//             <circle cx="24" cy="24" r="5" fill={color === "#fff" ? "#111" : "#fff"} />
//             {/* Exhaust */}
//             <path d="M20.5 33L22 46H26L27.5 33H20.5Z" fill={color} />
//         </svg>
//     );
// }

// /* ── Static style objects ────────────────────────────────────────────────── */
// const S = {
//     intro: {
//         height: "100vh", display: "flex", alignItems: "center",
//         justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "0 2rem",
//     },
//     eyebrow: {
//         fontSize: "0.7rem", letterSpacing: "0.32em", textTransform: "uppercase",
//         color: "#bbb", margin: "0 0 1.2rem",
//     },
//     h1: {
//         fontSize: "clamp(2.2rem, 7vw, 5.5rem)", fontWeight: 900,
//         lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0,
//     },
//     h1Em: { fontStyle: "italic", fontWeight: 300, color: "#bbb" },
//     pinSection: { height: "100vh", position: "relative", overflow: "hidden", background: "#fff" },
//     bgLines: {
//         position: "absolute", inset: 0, display: "grid",
//         gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "repeat(4, 1fr)",
//         pointerEvents: "none", zIndex: 0,
//     },
//     grid: {
//         position: "absolute", inset: 0, display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(3, 1fr)",
//         zIndex: 2,
//     },
//     tileLabel: {
//         margin: 0, fontSize: "clamp(0.65rem, 1.5vw, 1.2rem)",
//         fontWeight: 900, lineHeight: 1.25, letterSpacing: "-0.01em",
//     },
//     tileItalic: { fontStyle: "italic", fontWeight: 300, fontFamily: "Georgia, serif" },
//     cardOverlay: {
//         position: "absolute", inset: 0, display: "flex",
//         alignItems: "center", justifyContent: "center",
//         zIndex: 30, pointerEvents: "none",
//     },
//     card: {
//         width: "calc(100vw / 4)", aspectRatio: "3 / 4.5",
//         padding: "clamp(14px, 2.2vw, 34px)",
//         display: "flex", flexDirection: "column", justifyContent: "space-between",
//         boxShadow: "0 16px 56px rgba(0,0,0,0.2)",
//     },
//     cardText: {
//         margin: 0, fontSize: "clamp(0.82rem, 1.5vw, 1.35rem)",
//         fontWeight: 900, lineHeight: 1.32, letterSpacing: "-0.01em",
//     },
//     cardItalic: { fontStyle: "italic", fontWeight: 300, fontFamily: "Georgia, serif" },
//     cardLogoRow: { display: "flex", alignItems: "center", gap: "7px", marginTop: "1rem" },
//     cardLogoText: { fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.07em" },
//     outro: {
//         height: "100vh", display: "flex", alignItems: "center",
//         justifyContent: "center", textAlign: "center", padding: "0 2rem",
//     },
//     h2: {
//         fontSize: "clamp(1.8rem, 5.5vw, 4rem)", fontWeight: 900,
//         lineHeight: 1.1, letterSpacing: "-0.03em", margin: 0,
//     },
// };



// "use client";



// import { useEffect, useRef, useState, useCallback } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// /* ─── Tile definitions ─────────────────────────────────────────────────────── */
// const TILES = [
//     { id: "meta", label: "Meta", sub: "Ads", icon: null, bg: "#2BC4DF", ink: "#000", col: 1, row: 1, cs: 1, rs: 2, from: "left", url: "https://upthrust.co/meta-ads" },
//     { id: "creative", label: "Creative", sub: "Ads Agency", icon: null, bg: "#F5C842", ink: "#000", col: 2, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/creative" },
//     { id: "design", label: "Design", sub: "Agency", icon: null, bg: "#2BC4DF", ink: "#000", col: 3, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/design" },
//     { id: "ppc", label: "PPC", sub: "", icon: null, bg: "#C8B0E8", ink: "#000", col: 4, row: 1, cs: 1, rs: 1, from: "right", url: "https://upthrust.co/ppc" },
//     { id: "video", label: "Video", sub: "Production", icon: null, bg: "#F07B25", ink: "#fff", col: 2, row: 2, cs: 1, rs: 2, from: "bottom", url: "https://upthrust.co/video" },
//     { id: "logo", label: "", sub: "", icon: "rocket", bg: "#000000", ink: "#fff", col: 3, row: 2, cs: 1, rs: 1, from: "bottom", url: "https://upthrust.co" },
//     { id: "seo", label: "SEO", sub: "Agency", icon: null, bg: "#E44B2A", ink: "#fff", col: 4, row: 2, cs: 1, rs: 2, from: "right", url: "https://upthrust.co/seo" },
//     { id: "b2b", label: "B2B &", sub: "SaaS", icon: null, bg: "#A9D84D", ink: "#000", col: 1, row: 3, cs: 1, rs: 1, from: "left", url: "https://upthrust.co/b2b-saas" },
//     { id: "performance", label: "Performance", sub: "Marketing Agency", icon: null, bg: "#7A2C8C", ink: "#fff", col: 3, row: 3, cs: 1, rs: 1, from: "bottom", url: "https://upthrust.co/performance" },
// ];

// /* ─── Off-screen starting positions for each tile ─────────────────────────── */
// function getOffscreen(from) {
//     if (typeof window === "undefined") return { x: 0, y: 0 };
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
//     return {
//         left: { x: -vw * 1.2, y: 0 },
//         right: { x: vw * 1.2, y: 0 },
//         top: { x: 0, y: -vh * 1.2 },
//         bottom: { x: 0, y: vh * 1.2 },
//     }[from] ?? { x: 0, y: 0 };
// }

// /* ─── Component ────────────────────────────────────────────────────────────── */
// export default function DropBoxScroll() {
//     const wrapperRef = useRef(null);
//     const sectionRef = useRef(null);
//     const gridRef = useRef(null);
//     const cardRef = useRef(null);
//     const cardInnerRef = useRef(null);
//     const logoBoxRef = useRef(null);
//     const textRef = useRef(null);
//     const isAssembled = useRef(false);

//     const handleTileClick = useCallback((url) => {
//         if (isAssembled.current) window.open(url, "_blank", "noopener,noreferrer");
//     }, []);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const ctx = gsap.context(() => {
//             const tileEls = gsap.utils.toArray(".ut-tile", gridRef.current);

//             /* ── Initial state: all tiles are off-screen ───────────────────────── */
//             tileEls.forEach((el) => {
//                 const { x, y } = getOffscreen(el.dataset.from);
//                 gsap.set(el, { x, y, opacity: 0 });
//             });

//             /* ── Initial card state: white bg, blue text, full size ────────────── */
//             gsap.set(cardRef.current, {
//                 width: "25vw",           // 1 column of 4
//                 height: "100%",
//                 background: "#fff",
//             });
//             gsap.set(textRef.current, { opacity: 1, y: 0 });
//             gsap.set(logoBoxRef.current, { scale: 1 });

//             /* ── Master scroll timeline ─────────────────────────────────────────── */
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top top",
//                     end: "+=450%",
//                     pin: true,
//                     scrub: 1.4,
//                     anticipatePin: 1,
//                     onUpdate(self) {
//                         // Tiles clickable only after fully assembled
//                         isAssembled.current = self.progress >= 0.85;
//                     },
//                     onLeaveBack() {
//                         isAssembled.current = false;
//                     },
//                 },
//             });

//             /* ── STEP 1: White → Black card (bg + text color) ──────────────────── */
//             // scrub 0 → 0.5  (first quarter of scroll)
//             tl.to(cardRef.current, {
//                 backgroundColor: "#000",
//                 duration: 1,
//                 ease: "none",
//             }, 0);

//             tl.to(textRef.current, {
//                 color: "#ffffff",
//                 duration: 1,
//                 ease: "none",
//             }, 0);

//             tl.to(".ut-logo-icon", {
//                 // inline SVG color handled via CSS custom prop trick
//                 opacity: 0.85,
//                 duration: 0.5,
//             }, 0);

//             /* ── STEP 2: Text disappears + card shrinks to small logo box ──────── */
//             // scrub 0.5 → 1.5
//             tl.to(textRef.current, {
//                 opacity: 0,
//                 y: -20,
//                 duration: 0.6,
//                 ease: "power2.in",
//             }, 1);

//             // Card shrinks: from full column-height card → small square centered
//             tl.to(cardRef.current, {
//                 width: "15vmin",
//                 height: "15vmin",
//                 duration: 1.2,
//                 ease: "power3.inOut",
//             }, 1.1);

//             // Logo row (bottom) fades and re-centers as the card shrinks
//             tl.to(".ut-card-logo-row", {
//                 opacity: 0,
//                 duration: 0.4,
//                 ease: "power2.in",
//             }, 1);

//             // Logo icon in center appears
//             tl.to(logoBoxRef.current, {
//                 opacity: 1,
//                 duration: 0.5,
//                 ease: "power2.out",
//             }, 1.6);

//             /* ── STEP 3: Small logo box fades, tiles fly in from edges ─────────── */
//             // scrub 1.8 → 3.2
//             tl.to(cardRef.current, {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "power2.in",
//             }, 2.2);

//             // Stagger each tile flying in
//             tileEls.forEach((el, i) => {
//                 tl.to(el, {
//                     x: 0,
//                     y: 0,
//                     opacity: 1,
//                     duration: 1.3,
//                     ease: "power4.out",
//                 }, 2.5 + i * 0.07);
//             });

//             /* Hold after mosaic assembled */
//             tl.to({}, { duration: 0.6 }, ">");

//         }, wrapperRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <div ref={wrapperRef} className="ut-root">
//             <style>{`
//         .ut-tile {
//           will-change: transform, opacity;
//           transition: filter 0.18s ease;
//         }
//         .ut-tile:hover { filter: brightness(0.86); }
//       `}</style>

//             <section ref={sectionRef} style={S.pinSection}>

//                 {/* Background grid lines (decorative, like Dropbox site) */}
//                 <BgGridLines />

//                 {/* ── Content card (center, visible from start) ───────────────────── */}
//                 <div style={S.cardOverlay}>
//                     <div
//                         ref={cardRef}
//                         style={{
//                             ...S.card,
//                             /* width/height/background animated by GSAP */
//                             width: "25vw",
//                             height: "100%",
//                             background: "#fff",
//                         }}
//                     >
//                         {/* Center logo (only visible in step 2 small-box state) */}
//                         <div
//                             ref={logoBoxRef}
//                             style={{
//                                 ...S.centerLogo,
//                                 opacity: 0,   // hidden initially, GSAP shows in step 2
//                             }}
//                         >
//                             <RocketSVG size="55%" color="#fff" />
//                         </div>

//                         {/* Card text (step 0 = blue text, step 1 = white text) */}
//                         <p
//                             ref={textRef}
//                             style={{
//                                 ...S.cardText,
//                                 color: "#1464F4",  // starts blue, GSAP transitions to white
//                             }}
//                         >
//                             At Upthrust, our Brand Guidelines help us infuse everything we make with identity.
//                         </p>

//                         {/* Logo row — bottom left */}
//                         <div className="ut-card-logo-row" style={S.cardLogoRow}>
//                             <RocketSVG size={18} color="#1464F4" />
//                             <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", color: "#1464F4" }}>
//                                 Upthrust
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ── Mosaic tile grid (all off-screen initially) ──────────────────── */}
//                 <div ref={gridRef} style={S.grid}>
//                     {TILES.map((t) => (
//                         <div
//                             key={t.id}
//                             className="ut-tile"
//                             data-from={t.from}
//                             role="link"
//                             tabIndex={0}
//                             aria-label={`${t.label} ${t.sub}`}
//                             onClick={() => handleTileClick(t.url)}
//                             onKeyDown={(e) => e.key === "Enter" && handleTileClick(t.url)}
//                             style={{
//                                 gridColumn: `${t.col} / span ${t.cs}`,
//                                 gridRow: `${t.row} / span ${t.rs}`,
//                                 background: t.bg,
//                                 color: t.ink,
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "space-between",
//                                 padding: "clamp(10px, 1.6vw, 22px)",
//                                 cursor: "pointer",
//                                 overflow: "hidden",
//                             }}
//                         >
//                             {t.icon === "rocket" ? (
//                                 <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                                     <RocketSVG size="42%" color="#fff" />
//                                 </div>
//                             ) : (
//                                 <>
//                                     <span />
//                                     <p style={S.tileLabel}>
//                                         {t.label}{" "}
//                                         {t.sub && <em style={S.tileItalic}>{t.sub}</em>}
//                                     </p>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </section>


//         </div>
//     );
// }

// /* ─── Background grid lines (decorative, exactly like Dropbox) ─────────────── */
// function BgGridLines() {
//     return (
//         <div
//             aria-hidden
//             style={{
//                 position: "absolute",
//                 inset: 0,
//                 display: "grid",
//                 gridTemplateColumns: "repeat(5, 1fr)",
//                 gridTemplateRows: "repeat(4, 1fr)",
//                 pointerEvents: "none",
//                 zIndex: 0,
//             }}
//         >
//             {Array.from({ length: 20 }).map((_, i) => (
//                 <div key={i} style={{ border: "0.5px solid rgba(100,149,237,0.15)" }} />
//             ))}
//         </div>
//     );
// }

// /* ─── Rocket SVG ────────────────────────────────────────────────────────────── */
// function RocketSVG({ size = 24, color = "#fff" }) {
//     const isStr = typeof size === "string";
//     const dim = isStr ? size : `${size}px`;
//     return (
//         <svg
//             width={dim} height={dim}
//             viewBox="0 0 48 56"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ display: "block", flexShrink: 0 }}
//         >
//             <path d="M24 2C24 2 11 13 11 31H37C37 13 24 2 24 2Z" fill={color} />
//             <path d="M11 31C11 31 5.5 35 5 42C9 40.5 12.5 37.5 14 34L11 31Z" fill={color} />
//             <path d="M37 31C37 31 42.5 35 43 42C39 40.5 35.5 37.5 34 34L37 31Z" fill={color} />
//             <circle cx="24" cy="24" r="5" fill={color === "#fff" ? "#111" : "#fff"} />
//             <path d="M20.5 33L22 46H26L27.5 33H20.5Z" fill={color} />
//         </svg>
//     );
// }

// /* ─── Static styles ─────────────────────────────────────────────────────────── */
// const S = {
//     intro: {
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         textAlign: "center",
//         padding: "0 2rem",
//     },
//     eyebrow: {
//         fontSize: "0.7rem",
//         letterSpacing: "0.32em",
//         textTransform: "uppercase",
//         color: "#bbb",
//         marginBottom: "1.2rem",
//     },
//     h1: {
//         fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
//         fontWeight: 900,
//         lineHeight: 1.05,
//         letterSpacing: "-0.03em",
//     },
//     h1Em: { fontStyle: "italic", fontWeight: 300, color: "#bbb" },

//     pinSection: {
//         height: "100vh",
//         position: "relative",
//         overflow: "hidden",
//         background: "#fff",
//     },

//     // Card is absolutely centered over grid, z-index above tiles
//     cardOverlay: {
//         position: "absolute",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 20,
//         pointerEvents: "none",
//     },
//     card: {
//         // width + height + background all animated by GSAP
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         padding: "clamp(16px, 2.5vw, 36px)",
//         overflow: "hidden",
//         position: "relative",
//         // NO transition here — GSAP scrub handles all interpolation
//     },

//     // Hidden center logo (shown during shrink phase)
//     centerLogo: {
//         position: "absolute",
//         inset: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },

//     cardText: {
//         fontSize: "clamp(1rem, 2vw, 1.6rem)",
//         fontWeight: 900,
//         lineHeight: 1.3,
//         letterSpacing: "-0.015em",
//         // color animated by GSAP
//     },
//     cardLogoRow: {
//         display: "flex",
//         alignItems: "center",
//         gap: "7px",
//         marginTop: "auto",
//         paddingTop: "1.5rem",
//     },

//     // Tile grid — sits behind card overlay
//     grid: {
//         position: "absolute",
//         inset: 0,
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         gridTemplateRows: "repeat(3, 1fr)",
//         zIndex: 2,
//     },
//     tileLabel: {
//         fontSize: "clamp(0.65rem, 1.5vw, 1.15rem)",
//         fontWeight: 900,
//         lineHeight: 1.25,
//         letterSpacing: "-0.01em",
//     },
//     tileItalic: {
//         fontStyle: "italic",
//         fontWeight: 300,
//         fontFamily: "Georgia, serif",
//     },

//     outro: {
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         padding: "0 2rem",
//     },
//     h2: {
//         fontSize: "clamp(1.8rem, 5.5vw, 4rem)",
//         fontWeight: 900,
//         lineHeight: 1.1,
//         letterSpacing: "-0.03em",
//     },
// };



"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Tile data (excludes logo — logo is separate persistent element) ──────── */
const TILES = [
    { id: "meta", label: "Meta", sub: "Ads", bg: "#2BC4DF", ink: "#000", col: 1, row: 1, cs: 1, rs: 2, from: "left", url: "https://upthrust.co/meta-ads" },
    { id: "creative", label: "Creative", sub: "Ads Agency", bg: "#F5C842", ink: "#000", col: 2, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/creative" },
    { id: "design", label: "Design", sub: "Agency", bg: "#2BC4DF", ink: "#000", col: 3, row: 1, cs: 1, rs: 1, from: "top", url: "https://upthrust.co/design" },
    { id: "ppc", label: "PPC", sub: "", bg: "#C8B0E8", ink: "#000", col: 4, row: 1, cs: 1, rs: 1, from: "right", url: "https://upthrust.co/ppc" },
    { id: "video", label: "Video", sub: "Production", bg: "#F07B25", ink: "#fff", col: 2, row: 2, cs: 1, rs: 2, from: "left", url: "https://upthrust.co/video" },
    { id: "seo", label: "SEO", sub: "Agency", bg: "#E44B2A", ink: "#fff", col: 4, row: 2, cs: 1, rs: 2, from: "right", url: "https://upthrust.co/seo" },
    { id: "b2b", label: "B2B &", sub: "SaaS", bg: "#A9D84D", ink: "#000", col: 1, row: 3, cs: 1, rs: 1, from: "left", url: "https://upthrust.co/b2b-saas" },
    { id: "performance", label: "Performance", sub: "Marketing Agency", bg: "#7A2C8C", ink: "#fff", col: 3, row: 3, cs: 1, rs: 1, from: "bottom", url: "https://upthrust.co/performance" },
];

/* ─── Logo tile (stays centered throughout, then locks into grid) ─────────── */
const LOGO_TILE = {
    id: "logo", bg: "#000", col: 3, row: 2, cs: 1, rs: 1, url: "https://upthrust.co",
};

/* ─── Off-screen helpers ───────────────────────────────────────────────────── */
function getOffscreen(from) {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const map = {
        left: { x: -vw * 1.3, y: 0 },
        right: { x: vw * 1.3, y: 0 },
        top: { x: 0, y: -vh * 1.3 },
        bottom: { x: 0, y: vh * 1.3 },
    };
    return map[from] ?? { x: 0, y: 0 };
}

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function DropBoxScroll() {
    const wrapperRef = useRef(null);
    const sectionRef = useRef(null);
    const tilesRef = useRef(null);   // the 8 colored tiles (grid layer)
    const cardRef = useRef(null);   // the full white/black card
    const cardTextRef = useRef(null);   // text inside card
    const logoRowRef = useRef(null);   // bottom logo row inside card
    const logoBoxRef = useRef(null);   // the persistent small black logo square
    const isAssembled = useRef(false);

    const handleTileClick = useCallback((url) => {
        if (isAssembled.current) window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tileEls = gsap.utils.toArray(".ut-tile", tilesRef.current);

            /* ─── Initial positions ──────────────────────────────────────────────── */

            // All 8 colored tiles start off-screen
            tileEls.forEach((el) => {
                const { x, y } = getOffscreen(el.dataset.from);
                gsap.set(el, { x, y, opacity: 0 });
            });

            // Card: full-height, white, visible from start
            gsap.set(cardRef.current, {
                background: "#ffffff",
                width: "25vw",
                height: "100%",
                opacity: 1,
            });

            // Text: blue, visible
            gsap.set(cardTextRef.current, { color: "#1464F4", opacity: 1, y: 0 });

            // Logo row: blue icon+text, visible
            gsap.set(logoRowRef.current, { opacity: 1, color: "#1464F4" });

            // Logo box: starts as overlay centered on screen at card-width size,
            // then stays visible and moves to grid position
            gsap.set(logoBoxRef.current, {
                opacity: 0,      // hidden initially (card covers it)
                scale: 1,
            });

            /* ─── Master timeline ────────────────────────────────────────────────── */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=500%",
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1,
                    onUpdate(self) {
                        isAssembled.current = self.progress >= 0.88;
                    },
                    onLeaveBack() {
                        isAssembled.current = false;
                    },
                },
            });

            /* ══ PHASE 1: White → Black card (0 → 1.0) ══════════════════════════ */
            tl.to(cardRef.current, {
                backgroundColor: "#000000",
                duration: 1,
                ease: "power1.inOut",
            }, 0);

            tl.to(cardTextRef.current, {
                color: "#ffffff",
                duration: 1,
                ease: "power1.inOut",
            }, 0);

            tl.to(".ut-logo-label", {
                color: "#ffffff",
                duration: 1,
                ease: "power1.inOut",
            }, 0);

            /* ══ PHASE 2: Text fades out, card shrinks to logo box (1.0 → 2.2) ══ */

            // Text disappears
            tl.to(cardTextRef.current, {
                opacity: 0,
                y: -18,
                duration: 0.6,
                ease: "power2.in",
            }, 1.0);

            // Bottom logo row fades
            tl.to(logoRowRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            }, 1.0);

            // Card shrinks to small square (same size as one grid cell)
            // One grid cell = 25vw wide × 33.33vh tall
            tl.to(cardRef.current, {
                width: "25vw",
                height: "33.33vh",
                duration: 1.2,
                ease: "power3.inOut",
            }, 1.2);

            // Logo box appears inside shrinking card
            tl.to(logoBoxRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            }, 1.6);

            /* ══ PHASE 3: Card facade fades, logo box is now fully standalone (2.2) */
            // Card bg/padding fades but logo-box (separate DOM layer) persists
            tl.to(cardRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
            }, 2.2);

            /* ══ PHASE 4: Tiles fly in from edges (2.4 → 3.8) ═══════════════════ */
            tileEls.forEach((el, i) => {
                tl.to(el, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.3,
                    ease: "power4.out",
                }, 2.4 + i * 0.08);
            });

            // Logo box stays perfectly in its grid position (no animation needed —
            // it's already absolutely centered = col3 row2)
            // Just make sure it's above the grid tiles during fly-in
            // then settles to same z-level

            /* Hold fully assembled */
            tl.to({}, { duration: 0.6 }, ">");

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="ut-root">
            <style>{`

        .ut-root {
          font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif;
          background: #f5f5f5;
        }
        .ut-tile {
          will-change: transform, opacity;
          transition: filter 0.18s ease;
          cursor: pointer;
        }
        .ut-tile:hover { filter: brightness(0.85); }
      `}</style>

            {/* ── INTRO ─────────────────────────────────────────────────────────── */}
            <section style={S.intro}>
                <p style={S.eyebrow}>Scroll to explore</p>
                <h1 style={S.h1}>
                    We make brands<br />
                    <em style={S.h1em}>unforgettable</em>
                </h1>
                <DownArrow />
            </section>

            {/* ── PINNED SECTION ───────────────────────────────────────────────── */}
            <section ref={sectionRef} style={S.pin}>

                {/* Subtle blue-tinted grid lines (like Dropbox brand site) */}
                <GridLines />

                {/* ── LAYER 1: 8 colored tiles (off-screen initially) ────────────── */}
                <div ref={tilesRef} style={S.gridLayer}>
                    {TILES.map((t) => (
                        <div
                            key={t.id}
                            className="ut-tile"
                            data-from={t.from}
                            role="link"
                            tabIndex={0}
                            aria-label={`${t.label} ${t.sub}`}
                            onClick={() => handleTileClick(t.url)}
                            onKeyDown={(e) => e.key === "Enter" && handleTileClick(t.url)}
                            style={{
                                gridColumn: `${t.col} / span ${t.cs}`,
                                gridRow: `${t.row} / span ${t.rs}`,
                                background: t.bg,
                                color: t.ink,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "clamp(10px, 1.6vw, 22px)",
                                overflow: "hidden",
                            }}
                        >
                            <span />
                            <p style={S.tileLabel}>
                                {t.label}{" "}
                                {t.sub && <em style={S.tileItalic}>{t.sub}</em>}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── LAYER 2: Logo box — sits in exact center (col3,row2 position)
                       NEVER disappears, stays as anchor throughout ─────── */}
                <div
                    ref={logoBoxRef}
                    style={S.logoBox}
                    role="link"
                    tabIndex={0}
                    onClick={() => handleTileClick(LOGO_TILE.url)}
                    onKeyDown={(e) => e.key === "Enter" && handleTileClick(LOGO_TILE.url)}
                    aria-label="Upthrust home"
                >
                    <RocketSVG size="44%" color="#fff" />
                </div>

                {/* ── LAYER 3: Content card — full-height, fades away after step 2 ─ */}
                <div style={S.cardOverlay}>
                    <div ref={cardRef} style={S.card}>

                        {/* Card body text */}
                        <p ref={cardTextRef} style={S.cardText}>
                            At Upthrust, our Brand Guidelines help us infuse everything we make with identity.
                        </p>

                        {/* Logo row — bottom left of card */}
                        <div ref={logoRowRef} style={S.logoRow}>
                            <RocketSVG size={18} color="currentColor" />
                            <span className="ut-logo-label" style={S.logoLabel}>Upthrust</span>
                        </div>
                    </div>
                </div>

            </section>

            {/* ── OUTRO ─────────────────────────────────────────────────────────── */}
            <section style={S.outro}>
                <h2 style={S.h2}>
                    Let&apos;s build something<br />
                    <em style={{ fontStyle: "italic", fontWeight: 300, color: "#bbb" }}>remarkable</em>
                </h2>
            </section>
        </div>
    );
}

/* ─── Decorative grid lines ─────────────────────────────────────────────────── */
function GridLines() {
    return (
        <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
        }}>
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ border: "0.5px solid rgba(100,149,237,0.13)" }} />
            ))}
        </div>
    );
}

/* ─── Scroll arrow ──────────────────────────────────────────────────────────── */
function DownArrow() {
    return (
        <svg style={{ marginTop: "2.5rem", opacity: 0.2 }} width="22" height="34" viewBox="0 0 22 34" fill="none">
            <path d="M11 1v26M2 21l9 10 9-10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/* ─── Rocket SVG ────────────────────────────────────────────────────────────── */
function RocketSVG({ size = 24, color = "#fff" }) {
    const isStr = typeof size === "string";
    const dim = isStr ? size : `${size}px`;
    return (
        <svg width={dim} height={dim} viewBox="0 0 48 56" fill="none"
            xmlns="http://www.w3.org/2000/svg" style={{ display: "block", flexShrink: 0 }}>
            <path d="M24 2C24 2 11 13 11 31H37C37 13 24 2 24 2Z" fill={color} />
            <path d="M11 31C11 31 5.5 35 5 42C9 40.5 12.5 37.5 14 34L11 31Z" fill={color} />
            <path d="M37 31C37 31 42.5 35 43 42C39 40.5 35.5 37.5 34 34L37 31Z" fill={color} />
            <circle cx="24" cy="24" r="5" fill={color === "#fff" ? "#111" : "#fff"} />
            <path d="M20.5 33L22 46H26L27.5 33H20.5Z" fill={color} />
        </svg>
    );
}

/* ─── Static styles ─────────────────────────────────────────────────────────── */
const S = {
    intro: {
        height: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", flexDirection: "column",
        textAlign: "center", padding: "0 2rem",
    },
    eyebrow: {
        fontSize: "0.7rem", letterSpacing: "0.32em",
        textTransform: "uppercase", color: "#bbb", marginBottom: "1.2rem",
    },
    h1: {
        fontSize: "clamp(2.2rem, 7vw, 5.5rem)", fontWeight: 900,
        lineHeight: 1.05, letterSpacing: "-0.03em",
    },
    h1em: { fontStyle: "italic", fontWeight: 300, color: "#bbb" },

    pin: {
        height: "100vh", position: "relative",
        overflow: "hidden", background: "#fff",
    },

    // Grid layer — 8 colored tiles, all start off-screen
    gridLayer: {
        position: "absolute", inset: 0, zIndex: 2,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
    },

    // Logo box — absolutely positioned at exact center (col3,row2 = 50%→75% x, 33%→66% y)
    // This maps to: left = 2/4 = 50%, top = 1/3 = 33.33%, w = 25%, h = 33.33%
    logoBox: {
        position: "absolute",
        left: "50%",          // col 3 of 4 starts at 2/4
        top: "33.333%",      // row 2 of 3 starts at 1/3
        width: "25%",          // 1 of 4 columns
        height: "33.333%",      // 1 of 3 rows
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,             // above tiles during fly-in
        cursor: "pointer",
        willChange: "opacity",
        transition: "filter 0.18s ease",
    },

    // Card overlay — centered, sits above logo box during text phases
    cardOverlay: {
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 20, pointerEvents: "none",
    },

    // Card itself — starts white full-height, GSAP animates bg + size
    card: {
        width: "25vw",
        height: "100%",
        background: "#fff",         // GSAP animates to #000
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(16px, 2.5vw, 36px)",
        overflow: "hidden",
        willChange: "background, width, height, opacity",
    },

    cardText: {
        fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
        fontWeight: 900,
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
        color: "#1464F4",       // GSAP animates to #fff
        willChange: "opacity, transform, color",
    },

    logoRow: {
        display: "flex", alignItems: "center", gap: "7px",
        color: "#1464F4",               // GSAP animates to #fff
        willChange: "opacity, color",
    },
    logoLabel: {
        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em",
    },

    tileLabel: {
        fontSize: "clamp(0.65rem, 1.5vw, 1.15rem)",
        fontWeight: 900, lineHeight: 1.25, letterSpacing: "-0.01em",
    },
    tileItalic: {
        fontStyle: "italic", fontWeight: 300, fontFamily: "Georgia, serif",
    },

    outro: {
        height: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "0 2rem",
    },
    h2: {
        fontSize: "clamp(1.8rem, 5.5vw, 4rem)", fontWeight: 900,
        lineHeight: 1.1, letterSpacing: "-0.03em",
    },
};

