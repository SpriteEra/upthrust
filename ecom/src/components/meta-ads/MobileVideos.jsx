"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import SmartSwiper from "../SmartSwiper";

const videos = [
    {
        label: "D2C",
        thumbnail: "/ecom/ugcs/cloth/cloth2.webp",
        frame: "/ecom/ugcs/cloth/cloth2.webp",
        video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MILOOUTFITCHECK02FINALmp4.mp4",
    },
    {
        label: "CONSUMER",
        thumbnail: "/ecom/ugcs/lifestyle/lifestyle5.webp",
        frame: "/ecom/ugcs/lifestyle/lifestyle5.webp",
        video: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/NEONATTACKmp4.mp4",
    },
    {
        label: "B2B",
        thumbnail: "/meta-ads/frames/creative.webp",
        frame: "/meta-ads/frame.png",
        video: "https://upthrustvideocdn.b-cdn.net/Meta%20ads/VEGA%20THE%206X_EN-HD.mp4",
    },
    {
        label: "SAAS",
        thumbnail: "/meta-ads/frames/class-management.webp",
        frame: "/meta-ads/frame.png",
        video: "https://upthrustvideocdn.b-cdn.net/Meta%20ads/WhatsApp%20Video%202026-03-06%20at%2023.57.06.mp4",
    },
];

export default function MobileVideos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const swiperInstance = useRef(null);
    return (
        <section className="pt-15 3xl:pt-24 max-w-[90%] 1600:max-w-350 1800:max-w-380 mx-auto">
            {/* Cards */}
            <div className="relative">

                <SmartSwiper
                    slides={videos}
                    autoplay={true}
                    speed={700}
                    delay={2000}
                    loop
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // small phones
                        },
                        480: {
                            slidesPerView: 1, // large phones
                        },
                        640: {
                            slidesPerView: 2, // tablets
                        },
                        768: {
                            slidesPerView: 3, // small tablets
                        },
                        1024: {
                            slidesPerView: 4, // just before lg
                        },
                    }}
                    hoverPlayDesktop={true}
                    swiperClass="single-image-swiper "
                    onSwiperReady={(swiper) => (swiperInstance.current = swiper)}
                    renderSlide={(item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="px-4 3xl:px-5 py-1 3xl:py-1.5 text-xs 3xl:text-base  bg-white text-black rounded-md 3xl:rounded-lg">
                                {item.label}
                            </span>
                            <div
                                onClick={() => setActiveVideo(item.video)}
                                className="relative h-120 md:h-100 lg:h-100 xl:h-120 2xl:h-130 1600:h-140 1800:h-165 aspect-331/645 top-10  overflow-hidden cursor-pointer rounded-4xl"
                            >
                                <Image
                                    fill
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-full h-full object-cover rounded-4xl "
                                />
                                <Image
                                    fill
                                    src={'/meta-ads/frame-without-buttons.webp'}
                                    alt=""
                                    className="w-full absolute top-10  h-full object-cover"
                                />
                            </div>
                        </div>
                    )}
                />
                {/* PREV */}
                <button
                    onClick={() => swiperInstance.current?.slidePrev()}
                    title="Previous"
                    className="absolute left-2 lg:left-[-60px] 3xl:-left-30 max-lg:-bottom-18 top-1/2 -translate-y-1/2 size-11 3xl:size-15 rounded-full bg-[#0457CB] flex items-center justify-center z-20 hover:bg-neutral-800 lg:hidden"
                >
                    <span className="size-2.5 3xl:size-3.5 border-l-2 border-b-2 border-white rotate-45 translate-x-[2px] lg:hidden" />
                </button>

                {/* NEXT */}
                <button
                    title="Next"
                    onClick={() => swiperInstance.current?.slideNext()}
                    className="absolute right-2 lg:right-[-60px] 3xl:-right-30 max-lg:-bottom-18 top-1/2 -translate-y-1/2 size-11 3xl:size-15 rounded-full bg-[#0457CB] flex items-center justify-center z-20 hover:bg-neutral-800 lg:hidden"
                >
                    <span className="size-2.5 3xl:size-3.5 border-l-2 border-b-2 border-white -rotate-[135deg] -translate-x-[2px]" />
                </button>
            </div>

            {/* Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-[9999] px-6"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)',
                        animation: 'fadeIn 0.25s ease',
                    }}
                    onClick={() => setActiveVideo(null)}
                >
                    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleUp {
        from { opacity: 0; transform: scale(0.94) translateY(16px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .video-modal-close:hover {
        background: rgba(255,255,255,0.15);
        transform: scale(1.08);
      }
    `}</style>

                    <div
                        className="relative w-full max-w-3xl 3xl:max-w-4xl"
                        style={{ animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="video-modal-close absolute -top-14 right-0 flex items-center gap-2 text-white/80 text-sm font-medium tracking-wide transition-all duration-200"
                            style={{
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '999px',
                                padding: '6px 14px 6px 10px',
                            }}
                        >
                            <X size={16} />
                            Close
                        </button>

                        {/* Glow behind video */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-2px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                                boxShadow: '0 0 80px 20px rgba(255, 255, 255, 0.06), 0 32px 80px rgba(0,0,0,0.6)',
                                zIndex: -1,
                            }}
                        />

                        {/* Video */}
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            style={{
                                width: '100%',
                                borderRadius: '16px',
                                aspectRatio: '16/9',
                                objectFit: 'contain',
                                display: 'block',
                                boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        />


                    </div>
                </div>
            )}
        </section>
    );
}
{/* <div key={index} className="flex flex-col items-center">

    <span className="px-4 3xl:px-5 py-1 3xl:py-1.5 text-xs 3xl:text-base  bg-white text-black rounded-md 3xl:rounded-lg">
        {item.label}
    </span>

    <div
        onClick={() => setActiveVideo(item.video)}
        className="relative h-[660px] aspect-331/645 top-10  overflow-hidden cursor-pointer"
    >
        <Image
            fill
            src={item.thumbnail}
            alt=""
            className="w-full h-full object-cover "
        />
        <Image
            fill
            src={item.frame}
            alt=""
            className="w-full absolute top-10  h-full object-cover"
        />
    </div>
</div> */}