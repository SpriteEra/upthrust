

"use client";

import { useRef, useState } from "react";
import SmartSwiper from "@/components/SmartSwiper"; // ← adjust path if needed
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// ─── Case Study Data — 6 entries 

const CASE_STUDIES = [
    {
        id: 1,
        brandName: "Mini Cooper",
        tag: "Automotive",
        description:
            "From £180K/month (stuck) → £505K/month in 4 months (+181%) through precision-led creative and performance scaling.",
        media: [
            { type: "image", src: "/main-agency/case-studies/mini/1.png" },
            { type: "image", src: "/main-agency/case-studies/mini/2.png" },
            { type: "video", src: "/main-agency/case-studies/mini/3.png" },
            { type: "image", src: "/main-agency/case-studies/mini/4.png" },
            { type: "image", src: "/main-agency/case-studies/mini/5.png" },
        ],
    },
    {
        id: 2,
        brandName: "Urban Pitara",
        tag: "Indian Apparel Brand",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur.",
        media: [
            { type: "image", src: "/main-agency/case-studies/urban-pitara/img-1.webp" },
            { type: "image", src: "/main-agency/case-studies/urban-pitara/img-2.webp" },
            { type: "video", src: "/main-agency/case-studies/urban-pitara/video.mp4" },
            { type: "image", src: "/main-agency/case-studies/urban-pitara/img-3.webp" },
            { type: "image", src: "/main-agency/case-studies/urban-pitara/img-4.webp" },
        ],
    },
    {
        id: 3,
        brandName: "Smokey Cocktail",
        tag: "Beverage Brand",
        description:
            "From zero to viral — a beverage brand that scaled through precision creative and social-first strategy across Meta and Instagram.",
        media: [
            { type: "image", src: "/main-agency/case-studies/smokey-cocktail/img-1.webp" },
            { type: "image", src: "/main-agency/case-studies/smokey-cocktail/img-2.webp" },
            { type: "video", src: "/main-agency/case-studies/smokey-cocktail/video.mp4" },
            { type: "image", src: "/main-agency/case-studies/smokey-cocktail/img-3.webp" },
            { type: "image", src: "/main-agency/case-studies/smokey-cocktail/img-4.webp" },
        ],
    },
    {
        id: 4,
        brandName: "Tiggle",
        tag: "D2C Food Brand",
        description:
            `443% organic growth and a phone call that started with "we just crossed $1M". One client. One team. Full stack execution.`,
        media: [
            { type: "image", src: "/main-agency/case-studies/tiggle/img-1.webp" },
            { type: "image", src: "/main-agency/case-studies/tiggle/img-2.webp" },
            { type: "video", src: "/main-agency/case-studies/tiggle/video.mp4" },
            { type: "image", src: "/main-agency/case-studies/tiggle/img-3.webp" },
            { type: "image", src: "/main-agency/case-studies/tiggle/img-4.webp" },
        ],
    },
    {
        id: 5,
        brandName: "Coca Cola",
        tag: "FMCG / Beverage",
        description:
            "Campaign-led performance that moved the needle at scale. A global brand trusting an agency that thinks local and executes globally.",
        media: [
            { type: "image", src: "/main-agency/case-studies/coca-cola/img-1.webp" },
            { type: "image", src: "/main-agency/case-studies/coca-cola/img-2.webp" },
            { type: "video", src: "/main-agency/case-studies/coca-cola/video.mp4" },
            { type: "image", src: "/main-agency/case-studies/coca-cola/img-3.webp" },
            { type: "image", src: "/main-agency/case-studies/coca-cola/img-4.webp" },
        ],
    },
    {
        id: 6,
        brandName: "Biba",
        tag: "Fashion Retail",
        description:
            "Repositioned a heritage fashion brand for a younger audience. Performance creative meets cultural relevance.",
        media: [
            { type: "image", src: "/main-agency/case-studies/biba/img-1.webp" },
            { type: "image", src: "/main-agency/case-studies/biba/img-2.webp" },
            { type: "video", src: "/main-agency/case-studies/biba/video.mp4" },
            { type: "image", src: "/main-agency/case-studies/biba/img-3.webp" },
            { type: "image", src: "/main-agency/case-studies/biba/img-4.webp" },
        ],
    },

];

// ─── Video cell (desktop) ──────────────────────────────────────────────────────
function VideoCell({ src, className = "" }) {
    const ref = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        if (!ref.current) return;
        if (playing) {
            ref.current.pause();
        } else {
            ref.current.play().catch(() => { });
        }
        setPlaying(!playing);
    };

    return (
        <div className={`relative group cursor-pointer ${className}`} onClick={toggle}>
            <video
                ref={ref}
                src={src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />

            {/* Play / pause overlay */}
            <div
                className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-300
          ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
        `}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    {playing ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <rect x="5" y="3" width="4" height="18" rx="1" />
                            <rect x="15" y="3" width="4" height="18" rx="1" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
                            <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Mobile slide item ─────────────────────────────────────────────────────────
function MobileSlide({ item }) {
    const ref = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        if (!ref.current) return;
        if (playing) { ref.current.pause(); } else { ref.current.play().catch(() => { }); }
        setPlaying(!playing);
    };

    if (item.type === "video") {
        return (
            <div
                className="relative w-full h-full rounded-xl overflow-hidden bg-black cursor-pointer group"
                onClick={toggle}
            >
                <video
                    ref={ref}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        {playing ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <rect x="5" y="3" width="4" height="18" rx="1" />
                                <rect x="15" y="3" width="4" height="18" rx="1" />
                            </svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
                                <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-200">
            <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
            />
        </div>
    );
}

// ─── Single CaseStudyCard ──────────────────────────────────────────────────────
function CaseStudyCard({ brandName, tag, description, media }) {
    const leftPair = media.slice(0, 2);
    const centerItem = media[2];
    const rightPair = media.slice(3, 5);

    return (
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">

            {/* ── Header ── */}
            <div className="flex items-start justify-between px-10 3xl:px-20 ">
                {/* Left */}
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl 3xl:text-6xl font-semibold tracking-[-0.02em] leading-[130%] text-black ">
                        {brandName}
                    </h2>
                    <span className="flex items-center gap-1.5 text-sm xl:text-base text-black">
                        <span className="w-1.5 h-1.5 tracking-[-0.02em] leading-[130%] rounded-full bg-black/40 inline-block" />
                        {tag}
                    </span>
                </div>

                {/* Right — hidden on mobile, shows md+ */}
                <p className="hidden md:block max-w-xs md:max-w-sm lg:max-w-md text-sm md:text-base tracking-[-0.02em] leading-[150%] 3xl:text-lg text-black/60  text-start">
                    {description}
                </p>
            </div>

            {/* Description below header on mobile */}
            <p className="block md:hidden text-sm text-black/60 leading-relaxed">
                {description}
            </p>

            {/* ── Desktop media row ── */}
            <div className="hidden md:flex items-stretch gap-2 md:gap-3 w-full
    h-[270px] md:h-[320px] lg:h-[370px] 3xl:h-[440px]">

                {[...leftPair, centerItem, ...rightPair].map((item, i) => {
                    const isCenter = i === 2;
                    const isTall = i === 0 || i === 2 || i === 4; // 1st, center, last = full height

                    return (
                        <div
                            key={i}
                            className={`flex-1  overflow-hidden
                    ${isCenter ? "bg-neutral-900" : "bg-neutral-200"}
                    ${isTall ? "h-full" : "h-[200px] md:h-[240px] lg:h-[280px] 3xl:h-[340px] self-end"}`}
                        >
                            {item?.type === "video" ? (
                                <VideoCell src={item.src} className="w-full h-full" />
                            ) : (
                                <img
                                    src={item?.src}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            )}
                        </div>
                    );
                })}

            </div>

            {/* ── Mobile media slider (hidden on md+) ── */}
            {/*
        Shows 1.15 slides so user can see there's more.
        All 5 items (4 images + 1 video) are slides.
        Uses SmartSwiper with autoplay off — user drags through.
      */}
            <div className="block md:hidden mobile-case-swiper">
                <SmartSwiper
                    slides={media}
                    renderSlide={(item) => <MobileSlide item={item} />}
                    autoplay={false}
                    loop={false}
                    effect="slide"
                    slideClass="!h-[240px]"
                    swiperClass="!pb-8"
                    breakpoints={{
                        0: { slidesPerView: 1.15, spaceBetween: 10 },
                        480: { slidesPerView: 1.6, spaceBetween: 12 },
                    }}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                />
            </div>
        </div>
    );
}

// ─── CaseStudy — full section with dividers ────────────────────────────────────
export const AgencyCaseStudy = ({ studies = CASE_STUDIES }) => {
    return (
        <section className="w-full flex flex-col">
            {studies.map((study, index) => (
                <div key={study.id}>
                    {/* Divider — top rule on first, between all */}
                    <div className="w-full h-px bg-black/10" />

                    <div className="py-8 md:py-12 lg:py-16">
                        <CaseStudyCard
                            brandName={study.brandName}
                            tag={study.tag}
                            description={study.description}
                            media={study.media}
                        />
                    </div>
                </div>
            ))}

            {/* Bottom rule */}
            <div className="w-full h-px bg-black/10" />

            {/* Scoped pagination dot styles */}
            <style>{`
        .mobile-case-swiper .swiper-pagination {
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .mobile-case-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 9999px;
          transition: width 0.3s ease, background 0.3s ease;
          margin: 0 !important;
        }
        .mobile-case-swiper .swiper-pagination-bullet-active {
          width: 20px;
          background: #111827;
        }
      `}</style>
        </section>
    );
};

export default AgencyCaseStudy;