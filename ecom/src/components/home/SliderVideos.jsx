"use client";
import React, { useEffect, useRef, useState } from "react";

const reels = [
    { id: 1, image: "/ecom/banner/banner1.webp", video: "/reels/1.mp4" },
    { id: 2, image: "/ecom/banner/banner2.webp", video: "/reels/1.mp4" },
    { id: 3, image: "/ecom/banner/banner3.webp", video: "/reels/1.mp4" },
    { id: 4, image: "/ecom/banner/banner4.webp", video: "/reels/1.mp4" },
    { id: 5, image: "/ecom/banner/banner5.webp", video: "/reels/1.mp4" },
    { id: 6, image: "/ecom/banner/banner6.webp", video: "/reels/1.mp4" },
    { id: 7, image: "/ecom/banner/banner7.webp", video: "/reels/1.mp4" },
];

export default function SliderVideos() {
    const containerRef = useRef(null);
    const isPaused = useRef(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    /* AUTO SCROLL WITH SEAMLESS INFINITE LOOP */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // Calculate the width of one complete set
        const itemWidth = 220 + 16; // min-w-[220px] + gap-4
        const singleSetWidth = itemWidth * reels.length;

        // Set initial scroll position to middle set
        el.scrollLeft = singleSetWidth;

        let raf;
        const scroll = () => {
            if (!isPaused.current && !isDragging.current) {
                el.scrollLeft += 0.5;

                // When we reach the end of the second set, jump back to the middle set
                if (el.scrollLeft >= singleSetWidth * 2) {
                    el.scrollLeft = singleSetWidth;
                }

                // When we scroll back past the first set, jump to the middle set
                if (el.scrollLeft <= 0) {
                    el.scrollLeft = singleSetWidth;
                }
            }
            raf = requestAnimationFrame(scroll);
        };

        raf = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(raf);
    }, []);

    /* DRAG HANDLERS WITH INFINITE SCROLLING */
    const onMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX;
        scrollLeft.current = containerRef.current.scrollLeft;
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        const el = containerRef.current;
        el.scrollLeft = scrollLeft.current - (e.pageX - startX.current);

        const itemWidth = 220 + 16;
        const singleSetWidth = itemWidth * reels.length;

        // Reset position during drag for infinite effect
        if (el.scrollLeft >= singleSetWidth * 2) {
            el.scrollLeft = singleSetWidth;
            scrollLeft.current = singleSetWidth;
            startX.current = e.pageX;
        } else if (el.scrollLeft <= 0) {
            el.scrollLeft = singleSetWidth;
            scrollLeft.current = singleSetWidth;
            startX.current = e.pageX;
        }
    };

    const onMouseUp = () => {
        isDragging.current = false;
    };

    // Create three sets for truly seamless infinite scrolling
    const triplicatedReels = [...reels, ...reels, ...reels];

    return (
        <div
            ref={containerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar py-10 cursor-grab max-w-full mt-10"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
        >
            {triplicatedReels.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className="relative min-w-[220px] h-[400px] 3xl:min-w-[250px] 3xl:h-[400px] rounded-md overflow-hidden bg-black"
                    onMouseEnter={() => {
                        isPaused.current = true;
                        setActiveVideo(`${item.id}-${index}`);
                    }}
                    onMouseLeave={() => {
                        isPaused.current = false;
                        setActiveVideo(null);
                    }}
                >
                    {activeVideo === `${item.id}-${index}` ? (
                        <video
                            src={item.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    ) : (
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover pointer-events-none"
                        />
                    )}
                </div>
            ))}
        </div>
    );
}