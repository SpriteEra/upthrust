"use client";

import { useEffect, useRef } from "react";

// ─── Card data ─────────────────────────────────────────────────────────────────
// Replace src paths with your actual assets.
// type: "gif" | "image" | "video"

const CARDS = [
    {
        id: 1,
        type: "gif",
        src: "/main-agency/grid/first.gif",

        title: "Creative Performance",
        stats: "200+ UGC videos",
        description:
            "200+ UGC videos. Average CTR: 8.2%. Ads people actually watch till the end.",
    },
    {
        id: 2,
        type: "image",
        src: "/main-agency/grid/laptop.png",

        title: "Meta Ads",
        description:
            "3.8x ROAS across 60+ brands. The dashboard here says more than we ever could.",
    },
    {
        id: 3,
        type: "gif",
        src: "/main-agency/grid/third.gif",

        title: "Google Ads",
        description:
            "$50M managed profitably. Not a typo. Not a range. An actual number.",
    },
    {
        id: 4,
        type: "video",
        src: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Carorbis%20testimonial.mp4",

        title: "Full Stack Win",
        description:
            `One client. One team. 463% organic growth and a phone call that started with "we just crossed $3M."`,
    },
];

// ─── Individual card ───────────────────────────────────────────────────────────
function MediaCard({ card }) {
    const videoRef = useRef(null);

    // Muted autoplay for video cards
    useEffect(() => {
        if (card.type !== "video" || !videoRef.current) return;
        videoRef.current.play().catch(() => { });
    }, [card.type]);

    const media = (() => {
        if (card.type === "video") {
            return (
                <video
                    ref={videoRef}
                    src={card.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                />
            );
        }
        // gif or image - both use <img>
        return (
            <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                draggable={false}
            />
        );
    })();

    return (
        <div className="relative group rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer h-full">
            {/* Media layer */}
            {media}

            {/* Gradient overlay - stronger at top-left for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/80" />

            {/* Text content - top-left */}
            <div className="absolute top-0 left-0 p-5 md:p-6 flex flex-col gap-1.5 max-w-[70%]">


                {/* Title */}
                <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-tight tracking-tight mt-0.5">
                    {card.title}
                </h3>

                {/* Optional stat line */}
                {card.stats && (
                    <p className="text-white/70 text-xs md:text-sm font-medium">
                        {card.stats}
                    </p>
                )}

                {/* Description */}
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    {card.description}
                </p>
            </div>

            {/* Media-type badge - bottom-right */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 opacity-60">
                {card.type === "video" && (
                    <span className="text-[10px] text-white tracking-widest uppercase font-medium">

                    </span>
                )}
                {card.type === "gif" && (
                    <span className="text-[10px] text-white tracking-widest uppercase font-medium bg-white/10 px-2 py-0.5 rounded">
                        GIF
                    </span>
                )}
            </div>
        </div>
    );
}

// ─── Grid component ────────────────────────────────────────────────────────────
// Layout (desktop):  col-1 [wider]  | col-2
//                    card-1 [tall]  | card-2 [short]
//                    card-3 [short] | card-4 [tall]
//
// On mobile all four stack vertically at equal height.

export default function MediaGrid({ cards = CARDS }) {
    return (
        <section className="w-full px-4 md:px-8 lg:px-12 py-10">
            <div
                className="
          grid
          grid-cols-1
          md:grid-cols-6
          gap-3 md:gap-4
          md:grid-rows-[minmax(280px,1fr)_minmax(280px,1fr)]
          lg:grid-rows-[minmax(340px,1fr)_minmax(340px,1fr)]
          3xl:grid-rows-[minmax(420px,1fr)_minmax(420px,1fr)]
        "
            >
                {/* Card 1 - GIF, top-left, row-span-1 but slightly taller via aspect */}
                <div className="aspect-[4/3] md:aspect-auto md:row-span-1 col-span-2">
                    <MediaCard card={cards[0]} />
                </div>

                {/* Card 2 - Image, top-right */}
                <div className="aspect-[4/3] md:aspect-auto md:row-span-1 col-span-4">
                    <MediaCard card={cards[1]} />
                </div>

                {/* Card 3 - GIF, bottom-left */}
                <div className="aspect-[4/3] md:aspect-auto md:row-span-1 col-span-4">
                    <MediaCard card={cards[2]} />
                </div>

                {/* Card 4 - Video, bottom-right */}
                <div className="aspect-[4/3] md:aspect-auto md:row-span-1 col-span-2">
                    <MediaCard card={cards[3]} />
                </div>
            </div>
        </section>
    );
}