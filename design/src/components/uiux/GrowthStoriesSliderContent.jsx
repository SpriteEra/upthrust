"use client";

import React from "react";
import SmartSwiper from "../SmartSwiper";
import Image from "next/image";

export const GrowthStoriesSliderContent = ({ images = [] }) => {
    return (
        <div className="w-full h-full flex-1 bg-white rounded-xl sm:rounded-3xl overflow-hidden max-h-full">
            <SmartSwiper
                slides={images}
                effect="slide"
                speed={800}
                delay={3000}
                swiperClass="h-full"
                slideClass="h-full"
                renderSlide={(item) => (
                    <div className="w-full h-full">
                        <Image
                            src={item}
                            alt="Client success story"
                            width={862}
                            height={640}
                            quality={100}
                            className="object-fill w-full h-full"
                        />
                    </div>
                )}
            />
        </div>
    );
};

