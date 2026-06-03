"use client";

import { useEffect, useRef, useCallback, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { label } from "framer-motion/client";

// Module-level - never touched by React re-renders
let _gsapCtx = null;
let _styleEl = null;

const TILES = [
    {
        id: "meta-ads", label: "Meta",
        label2: "Ads",
        bg: "#3DD3EE", ink: "#000",
        col: 1, row: 1, cs: 1, rs: 2, from: "left",
        // render: () => (
        //     <svg style={{ position: "absolute", bottom: 20, left: 10 }} viewBox="0 0 165 220" width="70%" height="70%">
        //         <circle cx="24" cy="40" r="8" fill="none" stroke="#5a7080" strokeWidth="2" />
        //         <circle cx="138" cy="110" r="8" fill="none" stroke="#5a7080" strokeWidth="2" />
        //         <circle cx="24" cy="185" r="8" fill="none" stroke="#5a7080" strokeWidth="2" />
        //         <line x1="24" y1="40" x2="138" y2="110" stroke="#5a7080" strokeWidth="2" />
        //         <line x1="138" y1="110" x2="24" y2="185" stroke="#5a7080" strokeWidth="2" />
        //     </svg>
        // ),
    },
    {
        id: "creative", label: "Creative",
        label2: "Ads Agency",
        bg: "#FAD24B", ink: "#000",
        col: 2, row: 1, cs: 2, rs: 1, from: "top",
        // render: () => (
        //     <>
        //         <svg style={{ position: "absolute", left: 14, top: 48 }} viewBox="0 0 170 140" width={170} height={140}>
        //             <text x="4" y="134" fontSize="155" fontFamily="Georgia,serif" fill="none" stroke="white" strokeWidth="3">"</text>
        //         </svg>
        //         <svg style={{ position: "absolute", right: 36, bottom: 12 }} viewBox="0 0 170 140" width={170} height={140}>
        //             <text x="4" y="134" fontSize="155" fontFamily="Georgia,serif" fill="none" stroke="white" strokeWidth="3">"</text>
        //         </svg>
        //     </>
        // ),
    },
    {
        id: "design", label: "Design",
        label2: "Agency",
        bg: "#3DD3EE", ink: "#000",
        col: 4, row: 1, cs: 1, rs: 2, from: "right",
        // render: () => (
        //     <div style={{ position: "absolute", bottom: 16, right: 18 }}>
        //         <svg viewBox="0 0 80 68" width={80} height={68} fill="#0c5a6a">
        //             <polygon points="40,3 20,14 40,25 20,36 0,25 20,14" />
        //             <polygon points="40,3 60,14 40,25 60,36 80,25 60,14" />
        //             <polygon points="20,36 40,25 60,36 40,47" />
        //             <polygon points="20,43 40,32 60,43 40,54" />
        //         </svg>
        //     </div>
        // ),
    },
    {
        id: "ppc", label: "PPC",
        bg: "#C8AFF0", ink: "#000",
        col: 5, row: 1, cs: 1, rs: 1, from: "right",
        // render: () => (
        //     <div style={{ position: "absolute", bottom: 4, right: 4, fontSize: 110, fontWeight: 900, fontFamily: "'Arial Black',Arial,sans-serif", color: "#3a1000", lineHeight: 1 }}>Aa</div>
        // ),
    },
    {
        id: "video-production", label: "Video",
        label2: "Production",
        bg: "#FF8C19", ink: "#fff",
        col: 2, row: 2, cs: 1, rs: 2, from: "bottom",
        // render: () => (
        //     <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-55%)" }}>
        //         <div style={{ width: 80, height: 80, background: "#8b4400", display: "flex", alignItems: "center", justifyContent: "center" }}>
        //             <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#5a2c00" }} />
        //         </div>
        //         <div style={{ width: 80, height: 80, background: "#8b4400", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 5, marginLeft: 44 }}>
        //             <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#5a2c00" }} />
        //         </div>
        //     </div>
        // ),
    },
    {
        id: "b2b", label: "B2B &",
        label2: "SaaS",
        bg: "#B4DC19", ink: "#000",
        col: 1, row: 3, cs: 1, rs: 1, from: "left",
        // render: () => (
        //     <div style={{ position: "absolute", bottom: 16, left: 16 }}>
        //         <svg viewBox="0 0 60 66" width={60} height={66} fill="none">
        //             <rect x="4" y="29" width="52" height="35" rx="5" fill="#1a4a2a" />
        //             <path d="M16 29V19C16 6 44 6 44 19V29" stroke="#1a4a2a" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        //             <circle cx="30" cy="43" r="6.5" fill="#b5d800" />
        //             <rect x="27" y="43" width="6" height="10" rx="2" fill="#b5d800" />
        //         </svg>
        //     </div>
        // ),
    },
    {
        id: "performance", label: "Performance",
        label2: "Marketing Agency",
        bg: "#892055", ink: "#fff",
        col: 3, row: 3, cs: 2, rs: 1, from: "bottom",
        // render: () => (
        //     <div style={{ position: "absolute", bottom: 16, right: 16, width: 155, height: 108, background: "#c06080", borderRadius: 4, overflow: "hidden" }}>
        //         <div style={{ position: "absolute", bottom: 0, width: "100%", height: "65%", background: "#e0507a", clipPath: "ellipse(130% 100% at 50% 100%)" }} />
        //         <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 24, height: 24, borderRadius: "50%", background: "#f0a0b8" }} />
        //     </div>
        // ),
    },
    {
        id: "seo", label: "SEO",
        label2: "Agency",
        bg: "#FA551E", ink: "#fff",
        col: 5, row: 2, cs: 1, rs: 2, from: "right",
        // render: () => (
        //     <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} viewBox="0 0 185 348" preserveAspectRatio="xMidYMid meet">
        //         <circle cx="145" cy="52" r="8" fill="#3d1f8a" />
        //         <circle cx="170" cy="52" r="8" fill="#3d1f8a" />
        //         <path d="M152 52 C152 200, 36 200, 24 320" fill="none" stroke="#3d1f8a" strokeWidth="2" />
        //         <circle cx="11" cy="326" r="8" fill="#3d1f8a" />
        //         <circle cx="36" cy="326" r="8" fill="#3d1f8a" />
        //     </svg>
        // ),
    },
];

const BLUE_TILE = { bg: "#000", col: 3, row: 2 };

function getOffscreen(from) {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    const vw = window.innerWidth, vh = window.innerHeight;
    return {
        left: { x: -vw * 1.4, y: 0 },
        right: { x: vw * 1.4, y: 0 },
        top: { x: 0, y: -vh * 1.4 },
        bottom: { x: 0, y: vh * 1.4 },
    }[from] ?? { x: 0, y: 0 };
}



function initGSAP({ pinWrapEl, sectionEl, tilesEl, blueTileEl, cardEl, cardTextEl, logoRowEl, isAssembled }) {
    if (_gsapCtx) return;

    if (!_styleEl) {
        _styleEl = document.createElement("style");
        _styleEl.textContent = `
                [data-mosaic-root], [data-mosaic-root] *, [data-mosaic-root] *::before, [data-mosaic-root] *::after {
                    box-sizing: border-box; margin: 0; padding: 0;
                }
                [data-mosaic-root] { font-family: "Arial Black", "Helvetica Neue", Arial, sans-serif; }
                [data-mosaic-root] .m-tile { will-change: transform, opacity; cursor: pointer; }
                [data-mosaic-root] .m-tile:hover { filter: brightness(0.87); transition: filter 0.18s ease; }
            `;
        document.head.appendChild(_styleEl);
    }

    gsap.registerPlugin(ScrollTrigger);

    _gsapCtx = gsap.context(() => {
        const tileEls = gsap.utils.toArray(".m-tile", tilesEl);

        tileEls.forEach((el) => {
            const { x, y } = getOffscreen(el.dataset.from);
            gsap.set(el, { x, y, opacity: 0 });
        });

        gsap.set(blueTileEl, { opacity: 1, x: 0, y: 0 });
        gsap.set(cardEl, {
            opacity: 1, position: "absolute",
            left: "20vw", top: 0,
            width: "58vw", height: "100vh",
            background: "#ffffff",
        });
        gsap.set(cardTextEl, { opacity: 1, y: 0, color: "#000" });
        gsap.set(logoRowEl, { opacity: 1, color: "#000" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pinWrapEl,
                start: "top top",
                end: "+=500%",
                pin: sectionEl,
                scrub: 1.3,
                anticipatePin: 1,
                invalidateOnRefresh: false,
                refreshPriority: -1,

                onUpdate(self) {
                    isAssembled.current = self.progress >= 0.92;
                },
                onLeave() {
                    isAssembled.current = true;
                },
                onEnterBack() {
                    isAssembled.current = false;
                },
                onLeaveBack() {
                    isAssembled.current = false;
                },
            },
        });

        tl.to(cardEl, {
            background: "#000",
            color: "#fff",
            width: "20vw", height: "33.33vh",
            left: "40vw", top: "33.33vh",
            duration: 1.2, ease: "power2.inOut",
        }, 0);
        tl.to(cardTextEl, { color: "#ffffff", duration: 0.4, ease: "none" }, 0);
        tl.to(logoRowEl, { color: "#ffffff", duration: 0.4, ease: "none" }, 0);
        tl.to(cardTextEl, { opacity: 0, y: -14, duration: 0.45, ease: "power2.in" }, 0.4);
        tl.to(logoRowEl, { opacity: 0, duration: 0.4, ease: "power2.in" }, 0.45);
        tl.to(cardEl, { opacity: 0, duration: 0.3, ease: "power2.in" }, 1.05);

        tileEls.forEach((el, i) => {
            tl.to(el, { x: 0, y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }, 1.4 + i * 0.1);
        });

        tl.to({}, { duration: 0.8 }, ">");
    });
}

function destroyGSAP() {
    if (_gsapCtx) { _gsapCtx.revert(); _gsapCtx = null; }
    ScrollTrigger.getAll().forEach((st) => st.kill());
    if (_styleEl) { _styleEl.remove(); _styleEl = null; }
}

// memo() - if parent re-renders, this component skips re-rendering entirely
// since it accepts no props. GSAP owns the DOM; React re-diffing would fight it.
const MosaicScrollSection = memo(function MosaicScrollSection() {
    const pinWrapRef = useRef(null);
    const sectionRef = useRef(null);
    const tilesRef = useRef(null);
    const blueTileRef = useRef(null);
    const cardRef = useRef(null);
    const cardTextRef = useRef(null);
    const logoRowRef = useRef(null);
    const isAssembled = useRef(false);

    const handleTileClick = useCallback((url) => {
        if (isAssembled.current) window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    useEffect(() => {
        initGSAP({
            pinWrapEl: pinWrapRef.current,
            sectionEl: sectionRef.current,
            tilesEl: tilesRef.current,
            blueTileEl: blueTileRef.current,
            cardEl: cardRef.current,
            cardTextEl: cardTextRef.current,
            logoRowEl: logoRowRef.current,
            isAssembled,
        });
        return () => destroyGSAP();
    }, []);

    return (
        <div data-mosaic-root>
            <div ref={pinWrapRef} style={{ height: "600vh", position: "relative" }}>
                <section
                    ref={sectionRef}
                    style={{
                        height: "100vh", width: "100%",
                        position: "relative", overflow: "hidden",
                        background: "#ffffff",
                    }}
                >
                    {/* Grid lines - matching the screenshot exactly */}
                    <div aria-hidden style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        pointerEvents: "none",
                    }}>
                        {/* Vertical lines */}
                        <svg style={{ position: "absolute", width: "100%", height: "100%" }} preserveAspectRatio="none">
                            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
                        </svg>
                        {/* Horizontal lines */}
                        <svg style={{ position: "absolute", width: "100%", height: "100%" }} preserveAspectRatio="none">
                            <line x1="0" y1="33.33%" x2="100%" y2="33.33%" stroke="#e5e5e5" strokeWidth="1" />
                            <line x1="0" y1="66.66%" x2="100%" y2="66.66%" stroke="#e5e5e5" strokeWidth="1" />
                        </svg>
                    </div>

                    {/* Tile grid */}
                    <div ref={tilesRef} style={{
                        position: "absolute", inset: 0, zIndex: 2,
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gridTemplateRows: "repeat(3, 1fr)",
                        gap: "0px",
                    }}>
                        <div ref={blueTileRef} style={{
                            gridColumn: `${BLUE_TILE.col} / span 1`,
                            gridRow: `${BLUE_TILE.row} / span 1`,
                            background: BLUE_TILE.bg,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            zIndex: 3,
                        }}>
                            <Image src="/rocket-white.png" alt="rocket" width={24} height={24} className="size-14" />
                        </div>

                        {TILES.map((t) => (
                            <div
                                key={t.id}
                                className="m-tile"
                                data-from={t.from}
                                onClick={() => handleTileClick(`https://brand.dropbox.com/${t.id}`)}
                                style={{
                                    gridColumn: `${t.col} / span ${t.cs}`,
                                    gridRow: `${t.row} / span ${t.rs}`,
                                    background: t.bg, color: t.ink,
                                    display: "flex", flexDirection: "column", justifyContent: "flex-start",
                                    padding: "18px 20px", overflow: "hidden", position: "relative",
                                    willChange: "transform, opacity",
                                }}
                            >
                                <span className="text-3xl lg:text-[40px] 3xl:text-[48px]" style={{
                                    fontWeight: 600,
                                    lineHeight: 1.3, letterSpacing: "-0.02em",
                                    position: "relative", zIndex: 2,
                                }}>
                                    {t.label} <span className="font-normal font-instrument italic text-4xl lg:text-[44px] 3xl:text-[55px] ">{t.label2}</span>
                                </span>
                                {t.render?.()}
                            </div>
                        ))}
                    </div>

                    {/* Animated card */}
                    <div ref={cardRef} style={{
                        zIndex: 10,
                        display: "flex", flexDirection: "column", justifyContent: "space-between",
                        padding: "clamp(20px, 3vw, 48px)", overflow: "hidden",
                        willChange: "background, width, height, left, top, opacity",
                    }}>
                        <p ref={cardTextRef} className="text-5xl lg:text-[55px] 3xl:text-[72px] font-semibold text-black! " style={{
                            willChange: "opacity, transform",
                        }}>
                            scroll to reveal <span className="italic font-instrument font-normal text-[50px] lg:text-[65px] 3xl:text-[80px]">the magic</span> at Upthrust
                        </p>
                        <div ref={logoRowRef} style={{
                            display: "flex", alignItems: "center", gap: 8,
                            willChange: "opacity",
                        }}>
                            <Image width={100} height={60} src="/logo.png" alt="upthrust logo" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
});

export default MosaicScrollSection;