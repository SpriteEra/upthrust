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

/* ─── Tile data (8 tiles — logo is handled separately) ────────────────────── */
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

/* ─── Off-screen positions ─────────────────────────────────────────────────── */
function getOffscreen(from) {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return { left: { x: -vw * 1.3, y: 0 }, right: { x: vw * 1.3, y: 0 }, top: { x: 0, y: -vh * 1.3 }, bottom: { x: 0, y: vh * 1.3 } }[from] ?? { x: 0, y: 0 };
}

/* ─── Main Component ───────────────────────────────────────────────────────── */
export default function DropBoxScroll() {
    const wrapperRef = useRef(null);
    const sectionRef = useRef(null);
    const tilesRef = useRef(null);
    const cardRef = useRef(null);   // the card that shrinks into logo box
    const cardTextRef = useRef(null);   // text paragraph
    const logoRowRef = useRef(null);   // bottom "Upthrust" branding row
    const logoIconRef = useRef(null);   // centered rocket icon (hidden until phase 2)
    const isAssembled = useRef(false);

    const handleTileClick = useCallback((url) => {
        if (isAssembled.current) window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Kill any previous ScrollTriggers to prevent double-render
        ScrollTrigger.getAll().forEach(st => st.kill());

        const ctx = gsap.context(() => {
            const tileEls = gsap.utils.toArray(".ut-tile", tilesRef.current);

            /* ── Set all tiles off-screen ─────────────────────────────────────── */
            tileEls.forEach((el) => {
                const { x, y } = getOffscreen(el.dataset.from);
                gsap.set(el, { x, y, opacity: 0 });
            });

            /* ── Card initial state ───────────────────────────────────────────── */
            // Card is full-height, white, centered in col-3 position
            gsap.set(cardRef.current, {
                background: "#ffffff",
                width: "25vw",
                height: "100vh",
                opacity: 1,
            });
            gsap.set(cardTextRef.current, { opacity: 1, y: 0, color: "#1464F4" });
            gsap.set(logoRowRef.current, { opacity: 1 });
            // Logo icon (centered inside card) hidden initially — shows when card shrinks
            gsap.set(logoIconRef.current, { opacity: 0 });

            /* ── Master timeline ──────────────────────────────────────────────── */
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=450%",          // total scroll distance
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    // NO toggleActions — scrub handles everything, no re-trigger
                    onUpdate(self) {
                        isAssembled.current = self.progress >= 0.9;
                    },
                    onLeaveBack() {
                        isAssembled.current = false;
                    },
                },
            });

            /* ════════════════════════════════════════════════════════════════════
               PHASE 1  (tl 0 → 1.0)
               White card  →  Black card
               Text color blue → white
            ════════════════════════════════════════════════════════════════════ */
            tl.to(cardRef.current, {
                backgroundColor: "#000000",
                duration: 1,
                ease: "none",
            }, 0);

            tl.to(cardTextRef.current, {
                color: "#ffffff",
                duration: 1,
                ease: "none",
            }, 0);

            tl.to(".ut-brand-row", {
                color: "#ffffff",
                duration: 1,
                ease: "none",
            }, 0);

            /* ════════════════════════════════════════════════════════════════════
               PHASE 2  (tl 1.0 → 2.5)
               Text + brand row fade out
               Card shrinks to one-cell size  (25vw × 33.33vh)
               Centered rocket icon fades in
               Card stays black — it IS the logo box now
            ════════════════════════════════════════════════════════════════════ */

            // Text fades out
            tl.to(cardTextRef.current, {
                opacity: 0,
                y: -16,
                duration: 0.7,
                ease: "power2.in",
            }, 1.0);

            // Brand row fades out
            tl.to(logoRowRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
            }, 1.0);

            // Card shrinks — height collapses to one cell, width stays
            tl.to(cardRef.current, {
                height: "33.33vh",   // one row of 3
                duration: 1.2,
                ease: "power3.inOut",
            }, 1.2);

            // Centered rocket appears as card becomes logo box
            tl.to(logoIconRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            }, 1.8);

            /* ════════════════════════════════════════════════════════════════════
               PHASE 3  (tl 2.5 → 4.2)
               8 tiles fly in from their edges toward their grid positions
               Logo box (card) stays perfectly in place — it's already at col3 row2
               because the card is centered horizontally and the card height = 1 row
               which sits at the middle row vertically
            ════════════════════════════════════════════════════════════════════ */
            tileEls.forEach((el, i) => {
                tl.to(el, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power4.out",
                }, 2.5 + i * 0.09);
            });

            // Hold assembled state
            tl.to({}, { duration: 0.8 }, ">");

        }, wrapperRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={wrapperRef}>
            <style>{`
       
        .ut-tile {
          will-change: transform, opacity;
          cursor: pointer;
          transition: filter 0.18s ease;
        }
        .ut-tile:hover { filter: brightness(0.85); }
      `}</style>

            {/* ════════════════════════════════════════════════════════════════════
          PINNED SECTION
          Structure:
            Layer 0 — grid lines (decorative)
            Layer 1 — 8 colored tiles grid (all off-screen at start)
            Layer 2 — the card/logo-box (always centered, never unmounts)
      ════════════════════════════════════════════════════════════════════ */}
            <section ref={sectionRef} style={styles.section}>

                {/* ── Layer 0: decorative grid lines ───────────────────────────── */}
                <div aria-hidden style={styles.gridLines}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} style={{ border: "0.5px solid rgba(100,149,237,0.12)" }} />
                    ))}
                </div>

                {/* ── Layer 1: 8 colored tiles ─────────────────────────────────── */}
                <div ref={tilesRef} style={styles.tileGrid}>
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
                                willChange: "transform, opacity",
                            }}
                        >
                            <span />
                            <p style={styles.tileLabel}>
                                {t.label}{" "}
                                {t.sub && <em style={styles.tileItalic}>{t.sub}</em>}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Layer 2: Card / Logo-box ──────────────────────────────────────
            This single element does triple duty:
            1. Full-height white card (phase 0) with text
            2. Full-height black card (phase 1) with text
            3. Small black logo box (phase 2+) after shrinking
            It is absolutely centered horizontally and vertically.
            After shrinking to 33.33vh height, it lands exactly on row 2
            (middle row) because it's vertically centered in the viewport.
        ─────────────────────────────────────────────────────────────────── */}
                <div style={styles.cardWrap}>
                    <div
                        ref={cardRef}
                        style={styles.card}
                        role="link"
                        tabIndex={0}
                        onClick={() => handleTileClick("https://upthrust.co")}
                        onKeyDown={(e) => e.key === "Enter" && handleTileClick("https://upthrust.co")}
                        aria-label="Upthrust"
                    >
                        {/* ── Centered rocket icon: hidden at first, shown in logo-box phase */}
                        <div ref={logoIconRef} style={styles.centerIcon}>
                            <RocketSVG size="48%" color="#fff" />
                        </div>

                        {/* ── Body text: visible in phases 0 & 1, fades in phase 2 */}
                        <p ref={cardTextRef} style={styles.cardText}>
                            At Upthrust, our Brand Guidelines help us infuse everything we make with identity.
                        </p>

                        {/* ── Bottom brand row: "🚀 Upthrust" */}
                        <div ref={logoRowRef} className="ut-brand-row" style={styles.brandRow}>
                            <RocketSVG size={18} color="currentColor" />
                            <span style={styles.brandLabel}>Upthrust</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

/* ─── Rocket SVG ────────────────────────────────────────────────────────────── */
function RocketSVG({ size = 24, color = "#fff" }) {
    const dim = typeof size === "string" ? size : `${size}px`;
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

/* ─── Styles ─────────────────────────────────────────────────────────────────── */
const styles = {
    section: {
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
    },

    /* Decorative bg lines */
    gridLines: {
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
    },

    /* 8-tile grid layer */
    tileGrid: {
        position: "absolute", inset: 0, zIndex: 2,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
    },

    tileLabel: {
        fontSize: "clamp(0.65rem, 1.5vw, 1.15rem)",
        fontWeight: 900,
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
    },
    tileItalic: {
        fontStyle: "italic",
        fontWeight: 300,
        fontFamily: "Georgia, serif",
    },

    /* Card wrapper: centers the card on screen */
    cardWrap: {
        position: "absolute",
        inset: 0,
        zIndex: 10,            // above tiles so it overlaps during text phases
        display: "flex",
        alignItems: "center",      // vertical center → middle of viewport
        justifyContent: "center",      // horizontal center → col 2.5 of 4
        pointerEvents: "none",        // clicks pass through wrapper to card
    },

    /* The card itself — GSAP animates bg, height, opacity */
    card: {
        /*
          Width = 25vw = exactly 1 column of 4.
          Initial height = 100vh (full section height).
          After phase 2 shrink: height = 33.33vh = exactly 1 row of 3.
          Because it's flex-centered vertically, after shrink it sits in the
          vertical middle — which IS row 2 (33.33vh → 66.66vh range).
          Horizontal center = 37.5% → 62.5% of viewport which is cols 2→3 border,
          so we shift it slightly: we want col 3 = 50% → 75%.
          Fix: use marginLeft to offset to col 3 center.
        */
        width: "25vw",
        height: "100vh",       // GSAP will shrink to 33.33vh
        background: "#fff",        // GSAP will change to #000
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(14px, 2.2vw, 32px)",
        overflow: "hidden",
        position: "relative",
        willChange: "background, height, opacity",
        pointerEvents: "auto",        // card itself is clickable
        cursor: "pointer",
        /*
          Offset to align with col 3 (index 2, 0-based).
          Col 3 starts at 50vw. Card is 25vw wide, so center of col 3 = 62.5vw.
          Viewport center = 50vw. Difference = 12.5vw → shift right.
        */
        marginLeft: "25vw",
    },

    /* Centered rocket icon inside card (hidden until phase 2) */
    centerIcon: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        pointerEvents: "none",
    },

    cardText: {
        position: "relative",
        zIndex: 2,
        fontSize: "clamp(0.95rem, 1.7vw, 1.45rem)",
        fontWeight: 900,
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
        color: "#1464F4",      // GSAP changes to #fff
        willChange: "opacity, transform, color",
    },

    brandRow: {
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        gap: "7px",
        color: "#1464F4",         // GSAP changes to #fff
        willChange: "opacity, color",
    },
    brandLabel: {
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.07em",
    },
};

