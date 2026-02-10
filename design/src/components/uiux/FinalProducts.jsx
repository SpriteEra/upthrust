"use client";

import React, { useRef } from "react";
import SmartSwiper from "../SmartSwiper";
import Image from "next/image";
import { Curve1 } from "@/common/HandWritten";

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
        <div className="lg:bg-[#F9F9F9] rounded-3xl p-1 sm:p-6 3xl:p-10 flex flex-col lg:mt-20 max-lg:mb-70 relative">
            <Curve1
                lines={[
                    {
                        parts: [{ type: "text", text: "What you see is" }],
                    },
                    {
                        parts: [
                            { type: "text", text: "what" },
                            {
                                type: "highlight",
                                text: "clients received",
                                bgColor: "#FF4500",
                            },
                        ],
                    },
                ]}
                imageClassName="-left-16 lg:left-15 top-1 lg:top-20 3xl:top-22 max-lg:size-16! 3xl:size-20! scale-x-[-1] max-lg:rotate-110"
                curvePosition="end"
                curveFlipHorizontal={true}
                curveFlipVertical={false}
                tiltAngle={5}
                imageIndex={2}
                hiddenInSmall={false}
                className="absolute -bottom-45 max-lg:right-1/2 max-sm:translate-x-2/3 max-sm:translate-x-1/2  lg:top-40 3xl:top-50 h-fit lg:right-15 xl:right-20 3xl:right-3  max-w-[300px] 3xl:max-w-[350px]"
            />
            <h4 className="text-xl 3xl:text-2xl 3xl:leading-8 tracking-[-0.02em] font-semibold text-center max-lg:hidden ">
                Where Strategy Takes Visual Form
            </h4>
            <h5 className="text-base mt-2 text-center 3xl:text-lg 3xl:leading-7 max-lg:hidden">
                Final design expressions from projects across different industries and formats.
            </h5>

            <div className="w-full lg:max-w-4xl 3xl:max-w-7xl mx-auto lg:px-6 relative lg:mt-16">
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
                                className=" w-full h-full object-cover"
                            />
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
