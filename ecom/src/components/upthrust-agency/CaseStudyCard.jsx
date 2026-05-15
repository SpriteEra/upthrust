// "use client";

// import { div } from "framer-motion/client";
// import { useRef, useState } from "react";

// // ─── Types ─────────────────────────────────────────────────────────────────────
// // media array shape:
// // [
// //   { type: "image", src: "/..." },
// //   { type: "image", src: "/..." },
// //   { type: "video", src: "/..." },   ← center slot (index 2) — always video
// //   { type: "image", src: "/..." },
// //   { type: "image", src: "/..." },
// // ]

// // ─── Video cell with play/pause toggle ────────────────────────────────────────
// function VideoCell({ src, className = "" }) {
//     const ref = useRef(null);
//     const [playing, setPlaying] = useState(false);

//     const toggle = () => {
//         if (!ref.current) return;
//         if (playing) {
//             ref.current.pause();
//         } else {
//             ref.current.play().catch(() => { });
//         }
//         setPlaying(!playing);
//     };

//     return (
//         <div className={`relative group cursor-pointer ${className}`} onClick={toggle}>
//             <video
//                 ref={ref}
//                 src={src}
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//             />

//             {/* Play / pause overlay */}
//             <div
//                 className={`
//           absolute inset-0 flex items-center justify-center
//           transition-opacity duration-300
//           ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
//         `}
//             >
//                 {/* Dark scrim */}
//                 <div className="absolute inset-0 bg-black/30" />

//                 {/* Button */}
//                 <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
//                     {playing ? (
//                         /* Pause icon */
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
//                             <rect x="5" y="3" width="4" height="18" rx="1" />
//                             <rect x="15" y="3" width="4" height="18" rx="1" />
//                         </svg>
//                     ) : (
//                         /* Play icon */
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "3px" }}>
//                             <path d="M5 3l14 9-14 9V3z" />
//                         </svg>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // ─── CaseStudyCard ─────────────────────────────────────────────────────────────
// function CaseStudyCard({
//     // Header
//     brandName = "Mini Cooper",
//     tag = "Automotive",
//     description = "From £190K/month (pause) → £2M/month in 4 months (+949%). Strategic precision-led creative and performance scales.",

//     // Media — 5 items: img, img, video (center), img, img
//     media = [
//         { type: "image", src: "/case-studies/mini/img-1.webp" },
//         { type: "image", src: "/case-studies/mini/img-2.webp" },
//         { type: "video", src: "/case-studies/mini/video.mp4" },
//         { type: "image", src: "/case-studies/mini/img-3.webp" },
//         { type: "image", src: "/case-studies/mini/img-4.webp" },
//     ],
// }) {
//     // Split into left pair, center, right pair
//     const leftPair = media.slice(0, 2);
//     const centerItem = media[2];
//     const rightPair = media.slice(3, 5);

//     return (
//         <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-8">

//             {/* ── Header ─────────────────────────────────────────────────────────── */}
//             <div className="flex items-start justify-between gap-8 px-0">

//                 {/* Left — brand name + tag */}
//                 <div className="flex flex-col gap-2">
//                     <h2 className="text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-semibold tracking-tight text-black leading-tight">
//                         {brandName}
//                     </h2>
//                     <span className="flex items-center gap-1.5 text-sm md:text-base text-black/50">
//                         <span className="w-1.5 h-1.5 rounded-full bg-black/40 inline-block" />
//                         {tag}
//                     </span>
//                 </div>

//                 {/* Right — description */}
//                 <p className="max-w-xs md:max-w-sm lg:max-w-md text-sm md:text-base text-black/60 leading-relaxed text-right">
//                     {description}
//                 </p>
//             </div>

//             {/* ── Media row ──────────────────────────────────────────────────────── */}
//             {/*
//         Layout:
//           [img][img]   [VIDEO — taller]   [img][img]
//         Side images align to the bottom of the video so tops reveal more.
//         Center video is ~20% taller than side images.
//       */}
//             <div className="flex items-end gap-2 md:gap-3 w-full">

//                 {/* Left pair */}
//                 {leftPair.map((item, i) => (
//                     <div
//                         key={`l-${i}`}
//                         className="
//               flex-1 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200
//               h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] 3xl:h-[360px]
//             "
//                     >
//                         <img
//                             src={item.src}
//                             alt=""
//                             className="w-full h-full object-cover"
//                             draggable={false}
//                         />
//                     </div>
//                 ))}

//                 {/* Center — video, taller */}
//                 <div
//                     className="
//             flex-[1.35] rounded-xl md:rounded-2xl overflow-hidden bg-black
//             h-[220px] sm:h-[270px] md:h-[320px] lg:h-[370px] 3xl:h-[440px]
//           "
//                 >
//                     {centerItem?.type === "video" ? (
//                         <VideoCell src={centerItem.src} className="w-full h-full" />
//                     ) : (
//                         <img
//                             src={centerItem?.src}
//                             alt=""
//                             className="w-full h-full object-cover"
//                             draggable={false}
//                         />
//                     )}
//                 </div>

//                 {/* Right pair */}
//                 {rightPair.map((item, i) => (
//                     <div
//                         key={`r-${i}`}
//                         className="
//               flex-1 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200
//               h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] 3xl:h-[360px]
//             "
//                     >
//                         <img
//                             src={item.src}
//                             alt=""
//                             className="w-full h-full object-cover"
//                             draggable={false}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// export const CaseStudy = () => {
//     return (
//         <div>
//             <CaseStudyCard />
//             <CaseStudyCard />
//             <CaseStudyCard />
//             <CaseStudyCard />
//             <CaseStudyCard />
//             <CaseStudyCard />
//         </div>
//     )

// }


"use client";

import { useRef, useState } from "react";
import SmartSwiper from "@/components/SmartSwiper"; // ← adjust path if needed
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// ─── Case Study Data — 6 entries ───────────────────────────────────────────────
// media: exactly 5 items → [img, img, video (center), img, img]
const CASE_STUDIES = [
    {
        id: 1,
        brandName: "Urban Pitara",
        tag: "Indian Apparel Brand",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem ipsum dolor sit amet, consectetur.",
        media: [
            { type: "image", src: "/case-studies/urban-pitara/img-1.webp" },
            { type: "image", src: "/case-studies/urban-pitara/img-2.webp" },
            { type: "video", src: "/case-studies/urban-pitara/video.mp4" },
            { type: "image", src: "/case-studies/urban-pitara/img-3.webp" },
            { type: "image", src: "/case-studies/urban-pitara/img-4.webp" },
        ],
    },
    {
        id: 2,
        brandName: "Smokey Cocktail",
        tag: "Beverage Brand",
        description:
            "From zero to viral — a beverage brand that scaled through precision creative and social-first strategy across Meta and Instagram.",
        media: [
            { type: "image", src: "/case-studies/smokey-cocktail/img-1.webp" },
            { type: "image", src: "/case-studies/smokey-cocktail/img-2.webp" },
            { type: "video", src: "/case-studies/smokey-cocktail/video.mp4" },
            { type: "image", src: "/case-studies/smokey-cocktail/img-3.webp" },
            { type: "image", src: "/case-studies/smokey-cocktail/img-4.webp" },
        ],
    },
    {
        id: 3,
        brandName: "Tiggle",
        tag: "D2C Food Brand",
        description:
            `443% organic growth and a phone call that started with "we just crossed $1M". One client. One team. Full stack execution.`,
        media: [
            { type: "image", src: "/case-studies/tiggle/img-1.webp" },
            { type: "image", src: "/case-studies/tiggle/img-2.webp" },
            { type: "video", src: "/case-studies/tiggle/video.mp4" },
            { type: "image", src: "/case-studies/tiggle/img-3.webp" },
            { type: "image", src: "/case-studies/tiggle/img-4.webp" },
        ],
    },
    {
        id: 4,
        brandName: "Coca Cola",
        tag: "FMCG / Beverage",
        description:
            "Campaign-led performance that moved the needle at scale. A global brand trusting an agency that thinks local and executes globally.",
        media: [
            { type: "image", src: "/case-studies/coca-cola/img-1.webp" },
            { type: "image", src: "/case-studies/coca-cola/img-2.webp" },
            { type: "video", src: "/case-studies/coca-cola/video.mp4" },
            { type: "image", src: "/case-studies/coca-cola/img-3.webp" },
            { type: "image", src: "/case-studies/coca-cola/img-4.webp" },
        ],
    },
    {
        id: 5,
        brandName: "Biba",
        tag: "Fashion Retail",
        description:
            "Repositioned a heritage fashion brand for a younger audience. Performance creative meets cultural relevance.",
        media: [
            { type: "image", src: "/case-studies/biba/img-1.webp" },
            { type: "image", src: "/case-studies/biba/img-2.webp" },
            { type: "video", src: "/case-studies/biba/video.mp4" },
            { type: "image", src: "/case-studies/biba/img-3.webp" },
            { type: "image", src: "/case-studies/biba/img-4.webp" },
        ],
    },
    {
        id: 6,
        brandName: "Mini Cooper",
        tag: "Automotive",
        description:
            "From £190K/month (pause) → £2M/month in 4 months (+949%). Strategic precision-led creative and performance scales.",
        media: [
            { type: "image", src: "/case-studies/mini/img-1.webp" },
            { type: "image", src: "/case-studies/mini/img-2.webp" },
            { type: "video", src: "/case-studies/mini/video.mp4" },
            { type: "image", src: "/case-studies/mini/img-3.webp" },
            { type: "image", src: "/case-studies/mini/img-4.webp" },
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
            <div className="flex items-start justify-between gap-6">
                {/* Left */}
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-semibold tracking-tight text-black leading-tight">
                        {brandName}
                    </h2>
                    <span className="flex items-center gap-1.5 text-sm text-black/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/40 inline-block" />
                        {tag}
                    </span>
                </div>

                {/* Right — hidden on mobile, shows md+ */}
                <p className="hidden md:block max-w-xs md:max-w-sm lg:max-w-md text-sm md:text-base text-black/60 leading-relaxed text-right">
                    {description}
                </p>
            </div>

            {/* Description below header on mobile */}
            <p className="block md:hidden text-sm text-black/60 leading-relaxed">
                {description}
            </p>

            {/* ── Desktop media row (hidden on mobile) ── */}
            <div className="hidden md:flex items-end gap-2 md:gap-3 w-full">
                {/* Left pair */}
                {leftPair.map((item, i) => (
                    <div
                        key={`l-${i}`}
                        className="flex-1 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200
              h-[220px] md:h-[260px] lg:h-[300px] 3xl:h-[360px]"
                    >
                        <img
                            src={item.src}
                            alt=""
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}

                {/* Center — video, taller */}
                <div
                    className="flex-[1.35] rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900
            h-[270px] md:h-[320px] lg:h-[370px] 3xl:h-[440px]"
                >
                    {centerItem?.type === "video" ? (
                        <VideoCell src={centerItem.src} className="w-full h-full" />
                    ) : (
                        <img
                            src={centerItem?.src}
                            alt=""
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    )}
                </div>

                {/* Right pair */}
                {rightPair.map((item, i) => (
                    <div
                        key={`r-${i}`}
                        className="flex-1 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200
              h-[220px] md:h-[260px] lg:h-[300px] 3xl:h-[360px]"
                    >
                        <img
                            src={item.src}
                            alt=""
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}
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