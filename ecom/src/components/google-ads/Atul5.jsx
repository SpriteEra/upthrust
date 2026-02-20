"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function VideoTestimonialCard({ testimonial }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"; // prevent scroll
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* Card */}
            <div className="bg-[#0076F0] text-white rounded-3xl px-8 py-4 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                <h3 className="text-[30px] 3xl:text-[36px] leading-[130%] tracking-[-0.02em] font-semibold max-w-md">
                    {testimonial.title}
                </h3>

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
                    >
                        <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </button>
                </div>

                {/* Avatar */}

                {/* <Image width={100} height={50} src="/google-ads/review/arrow.png" alt="arrow" className="absolute w-fit top-70 left-15 z-10" /> */}
                {testimonial.avatar && (
                    <Image
                        width={600}
                        height={500}
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="absolute bottom-0 right-0 w-40 h-40 mb-10 md:w-56 object-contain z-10"
                    />
                )}


                <div className="mt-10">
                    <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-semibold">
                        {testimonial.author}
                    </p>
                    <p className="text-[12px] leading-[150%] text-white/80">
                        {testimonial.position}
                    </p>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-8 text-white/90 font-semibold">
                    <Image width={50} height={33} src={testimonial.company} alt="company logo" className="h-5 2xl:h-7 object-contain" />
                    <Image width={24} height={24} src="/google-ads/review/cross.png" alt="cross" className="h-4 object-contain" />
                    <Image width={80} height={43} src="/google-ads/review/upthrust.png" alt="upthrust" className="h-5 2xl:h-7 object-contain" />
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
                        >
                            <X size={24} />
                        </button>

                        {/* Video */}
                        <video
                            src={testimonial.video}
                            controls
                            autoPlay
                            className="w-full h-[300px] md:h-[500px] object-cover"
                        />
                    </div>
                </div>
            )}
        </>
    );
}