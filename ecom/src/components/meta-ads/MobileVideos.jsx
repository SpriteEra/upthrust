"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import SmartSwiper from "../SmartSwiper";

const videos = [
    {
        label: "D2C",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "CONSUMER",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "B2B",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "SAAS",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
];

export default function MobileVideos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const swiperInstance = useRef(null);
    return (
        <section className="pt-15 3xl:pt-24 max-w-[90%] 3xl:max-w-380 mx-auto">
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
                                className="relative h-120 md:h-100 lg:h-100 xl:h-120 2xl:h-130 3xl:h-165 aspect-331/645 top-10  overflow-hidden cursor-pointer"
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
                        </div>
                    )}
                />
                {/* PREV */}
                <button
                    onClick={() => swiperInstance.current?.slidePrev()}
                    title="Previous"
                    className="
                    absolute left-0 lg:left-[-60px] 3xl:-left-30 max-lg:-bottom-18 lg:top-1/2 -translate-y-1/2
                    size-11 3xl:size-15 rounded-full bg-black
                    flex items-center justify-center
                    z-20 hover:bg-neutral-800
                    "
                >
                    <span className="size-2.5 3xl:size-3.5 border-l-2 border-b-2 border-white rotate-45 translate-x-[2px]" />
                </button>

                {/* NEXT */}
                <button
                    title="Next"
                    onClick={() => swiperInstance.current?.slideNext()}
                    className="
                        absolute right-0 top-1/2 translate-y-1/2
                         size-11 rounded-full bg-black
                        flex items-center justify-center
                        z-20 hover:bg-neutral-800 
                    "
                >
                    <span className="size-2.5 3xl:size-3.5 border-l-2 border-b-2 border-white -rotate-[135deg] -translate-x-[2px]" />
                </button>
            </div>

            {/* Modal */}
            {activeVideo && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

                    <div className="relative w-full max-w-3xl ">

                        {/* Close Button */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-12 right-0 text-white"
                        >
                            <X size={32} />
                        </button>

                        {/* Video */}
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full rounded-2xl aspect-video object-cover"
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