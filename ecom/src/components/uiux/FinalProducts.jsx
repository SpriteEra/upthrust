"use client";

import React, { useRef } from "react";
import SmartSwiper from "../SmartSwiper";
import Image from "next/image";

const FinalProducts = () => {
    const swiperInstance = useRef(null);

    const images = [
        "/uiux/design/project1.webp",
        "/uiux/design/project2.webp",
        "/uiux/design/project3.webp",
        "/uiux/design/project4.webp",
        "/uiux/design/project5.webp",
        "/uiux/design/project6.webp",
        "/uiux/design/project7.webp",
        "/uiux/design/project8.webp",
        "/uiux/design/project9.webp",
        "/uiux/design/project10.webp",
    ];

    return (
        <div className="bg-[#F9F9F9] rounded-3xl p-1 sm:p-6 3xl:p-10 flex flex-col mt-20 max-lg:mb-20">
            <h5 className="text-xl font-semibold text-center">
                Where Strategy Takes Visual Form
            </h5>
            <h5 className="text-base mt-2 text-center">
                Final design expressions from projects across different industries and formats.
            </h5>

            <div className="w-full lg:max-w-4xl 3xl:max-w-7xl mx-auto lg:px-6 relative mt-16">
                <SmartSwiper
                    slides={images}
                    autoplay={true}
                    speed={700}
                    delay={2000}
                    loop
                    swiperClass="single-image-swiper"
                    onSwiperReady={(swiper) => (swiperInstance.current = swiper)}
                    renderSlide={(src) => (
                        <div className="relative w-full max-lg:aspect-1128/737  rounded-md sm:rounded-2xl overflow-hidden bg-gray-100">
                            <Image
                                src={src}
                                alt="Slide image"
                                width={800}
                                height={600}
                                className="object-cover w-full h-full object-cover"
                            />
                        </div>
                    )}
                />

                {/* PREV */}
                <button
                    onClick={() => swiperInstance.current?.slidePrev()}
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
                    onClick={() => swiperInstance.current?.slideNext()}
                    className="
                        absolute max-lg:left-12 lg:right-[-60px] 3xl:-right-30 max-lg:-bottom-18 lg:top-1/2 -translate-y-1/2
                         size-11 3xl:size-15 rounded-full bg-black
                        flex items-center justify-center
                        z-20 hover:bg-neutral-800 
                    "
                >
                    <span className="size-2.5 3xl:size-3.5 border-l-2 border-b-2 border-white -rotate-[135deg] -translate-x-[2px]" />
                </button>
            </div>
        </div>
    );
};

export default FinalProducts;
