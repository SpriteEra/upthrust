"use client";

import { X } from "lucide-react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const brands = [
    { name: "Brand 1", src: "/ecom/banner/bottom-banner/b-banner1.webp" },
    { name: "Brand 2", src: "/ecom/banner/bottom-banner/b-banner2.webp" },
    { name: "Brand 3", src: "/ecom/banner/bottom-banner/b-banner3.webp" },
    { name: "Brand 4", src: "/ecom/banner/bottom-banner/b-banner4.webp" },
    { name: "Brand 5", src: "/ecom/banner/bottom-banner/b-banner5.webp" },
];

const brands2 = [
    { name: "Brand 6", src: "/ecom/banner/bottom-banner/b-banner6.webp" },
    { name: "Brand 7", src: "/ecom/banner/bottom-banner/b-banner7.webp" },
    { name: "Brand 8", src: "/ecom/banner/bottom-banner/b-banner8.webp" },
    { name: "Brand 9", src: "/ecom/banner/bottom-banner/b-banner9.webp" },
    { name: "Brand 10", src: "/ecom/banner/bottom-banner/b-banner10.webp" },
];

/* ---------------- AUTO COLUMN ---------------- */

function Column({ direction = -1, data }) {
    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);

    const ITEM_HEIGHT = 320;
    const speed = 0.8 * direction;
    const totalHeight = data.length * ITEM_HEIGHT;

    useEffect(() => {
        const animate = () => {
            setOffset((prev) => {
                let next = prev + speed;

                if (next <= -totalHeight) next += totalHeight;
                if (next >= 0) next -= totalHeight;

                return next;
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [speed, totalHeight]);

    return (
        <div className="overflow-hidden h-full select-none pointer-events-none">
            <div className="relative h-full">
                {[...data, ...data].map((b, i) => (
                    <div
                        key={i}
                        className="absolute left-0 w-full h-25 md:h-[320px] rounded-md md:rounded-lg"
                        style={{ top: i * ITEM_HEIGHT + offset }}
                    >
                        <Image
                            src={b.src}
                            alt={b.name}
                            width={200}
                            height={300}
                            className="h-[96%] w-full object-cover rounded-lg"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- PAGE ---------------- */

const UGCAdsPlaybook = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
        setIsPlaying(false);
    };
    return (
        <div className="px-2 xs:px-10 mb-20">
            <div className="bg-[#4E8679] text-white grid grid-cols-7 rounded-md xs:rounded-xl max-h-60 xs:max-h-80 md:max-h-120 lg:max-h-[110vh] overflow-hidden">
                {/* LEFT COLUMN → UP */}
                <div className="col-span-1">
                    <Column direction={-1} data={brands} />
                </div>

                {/* CENTER CONTENT */}
                <div className="col-span-5 p-1 xs:p-6 flex flex-col justify-evenly gap-2 xs:gap-2 max-h-60 xs:max-h-80 md:max-h-120 lg:max-h-[110vh]">
                    <div className="font-medium text-[28px] md:text-8xl xl:text-[100px] italic 3xl:text-[140px] leading-tight capitalize">
                        <p>A Step-by-step</p>
                        <p>Guide to</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <button onClick={openVideo} title="Play Video" className="bg-white/40 rounded-md xs:rounded-[10px] px-5 xs:px-12 py-2.5 xs:py-6 cursor-pointer">
                            <Play className="size-6 xs:size-11 3xl:size-12" fill="#ffffff" />
                        </button>
                    </div>

                    <div className="font-medium text-[32px] md:text-[100px] xl:text-[120px] italic 3xl:text-[160px] font-instrument self-end w-full max-w-[82%] xs:max-w-[70%] leading-tight">
                        <p>Scale</p>
                        <p>Your Brand</p>
                    </div>
                </div>

                {/* RIGHT COLUMN → DOWN */}
                <div className="col-span-1">
                    <Column direction={1} data={brands2} />
                </div>

                {isVideoOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-[100] flex items-center justify-center p-4"
                        onClick={closeVideo}
                    >
                        <div
                            className="relative w-full max-w-6xl 3xl:max-w-[80%]  aspect-video bg-black max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeVideo}
                                className="absolute top-4 right-4 z-20 bg-black/90 text-white rounded-full px-4  py-2 transition hover:scale-110"
                                aria-label="Close video"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Video */}
                            <video
                                src="https://cdn.upthrust.agency/Ecom%20page%20assets/upthrustbrandvideomp4.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                controls
                                controlsList="nodownload"
                                playsInline
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UGCAdsPlaybook;