"use client"
import Image from "next/image";
import SmartSwiper from "../SmartSwiper";
import { useRef } from "react";

const cards = [
    {
        image: "/meta-ads/slidecard/one1.png",
        title: (
            <>
                Most talented <span className="font-instrument italic font-normal leading-[120%]">Meta teams</span>
            </>
        ),
    },
    {
        image: "/meta-ads/slidecard/one.png",
        title: (
            <>
                <span className="font-instrument italic font-normal leading-[120%]">Ultra-fast</span> turnaround times
            </>
        ),
    },
    {
        image: "/meta-ads/slidecard/two.png",
        title:
            <>
                <span className="font-instrument italic font-normal leading-[120%]">Flexible</span> contracts
            </>,
    },
];
const images = [
    "/uiux/design/1.webp",
    "/uiux/design/2.webp",
    "/uiux/design/3.webp",
    "/uiux/design/4.webp",
    "/uiux/design/5.webp",
    "/uiux/design/6.webp",
    "/uiux/design/7.webp",
    "/uiux/design/8.webp",
    "/uiux/design/9.webp",
    "/uiux/design/10.webp",
];


export default function FeatureCards() {
    const swiperInstance = useRef(null);
    return (

        <div className="max-w-[88%] 3xl:max-w-400 mx-auto grid md:grid-cols-3 gap-6 3xl:gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative rounded-xl overflow-hidden group h-full flex flex-col justify-between"
                >
                    {/* Image */}
                    <div className="relative w-full aspect-525/607">
                        <SmartSwiper
                            slides={images}
                            autoplay={true}
                            speed={700}
                            delay={1000}
                            loop
                            hoverPlayDesktop={true}
                            swiperClass="single-image-swiper "
                            onSwiperReady={(swiper) => (swiperInstance.current = swiper)}
                            renderSlide={(src) => (
                                <div className="relative w-full max-lg:aspect-525/607  overflow-hidden bg-gray-100">
                                    <Image
                                        src={src}
                                        alt="Slide image"
                                        width={525}
                                        height={607}
                                        quality={100}
                                        className=" w-full h-full object-cover "
                                    />
                                </div>
                            )}
                        />
                    </div>

                    {/* Bottom Overlay */}
                    <div className=" w-full bg-black text-white px-6 py-6 h-full">
                        <h3 className="text-lg md:text-xl 3xl:text-4xl leading-[130%] tracking-[-0.02em] font-semibold">
                            {card.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>

    );
}



