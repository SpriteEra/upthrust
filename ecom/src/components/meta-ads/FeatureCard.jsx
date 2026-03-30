"use client"
import Image from "next/image";
import SmartSwiper from "../SmartSwiper";
import { useRef } from "react";





export default function FeatureCards({ datatitle }) {

    const cards = [
        {
            images: [
                { id: 1, alt: "Team", url: "/meta-ads/slidecard/team-1.webp" },
                { id: 2, alt: "Team", url: "/meta-ads/slidecard/team-2.webp" },
                { id: 3, alt: "Team", url: "/meta-ads/slidecard/team-3.webp" },
                { id: 4, alt: "Team", url: "/meta-ads/slidecard/team-4.webp" },
                { id: 5, alt: "Team", url: "/meta-ads/slidecard/team-5.webp" },
            ],
            title: (
                <>
                    Most talented <span className="font-instrument italic font-normal leading-[120%] tracking-[-0.02em]">{datatitle || "Meta"} teams</span>
                </>
            ),
        },
        {
            images: [
                { id: 1, alt: "Turnaround Times", url: "/meta-ads/slidecard/turnaround-times-1.webp" },
                { id: 2, alt: "Turnaround Times", url: "/meta-ads/slidecard/turnaround-times-2.webp" },
                { id: 3, alt: "Turnaround Times", url: "/meta-ads/slidecard/turnaround-times-3.webp" },
                { id: 4, alt: "Turnaround Times", url: "/meta-ads/slidecard/turnaround-times-4.webp" },
            ],
            title: (
                <>
                    <span className="font-instrument italic font-normal leading-[120%] tracking-[-0.02em]">Ultra-fast</span> turnaround times
                </>
            ),
        },
        {
            images: [
                { id: 1, alt: "Contract", url: "/meta-ads/slidecard/contract-1.webp" },
                { id: 2, alt: "contract", url: "/meta-ads/slidecard/contract-2.webp" },
                { id: 3, alt: "contract", url: "/meta-ads/slidecard/contract-3.webp" },
            ],
            title:
                <>
                    <span className="font-instrument italic font-normal leading-[120%] tracking-[-0.02em]">Flexible</span> contracts
                </>,
        },
    ];
    const swiperInstance = useRef(null);
    return (

        <div className="max-w-[88%]  1800:max-w-400 mx-auto grid md:grid-cols-3 gap-6 3xl:gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative rounded-xl overflow-hidden group h-full flex flex-col justify-between"
                >
                    {/* Image */}
                    <div className="relative w-full aspect-525/607">
                        <SmartSwiper
                            slides={card.images}
                            autoplay={true}
                            speed={700}
                            delay={500}
                            loop
                            hoverPlayDesktop={true}
                            swiperClass="single-image-swiper "
                            onSwiperReady={(swiper) => (swiperInstance.current = swiper)}
                            renderSlide={(image) => (
                                <div className="relative w-full max-lg:aspect-525/607  overflow-hidden bg-gray-100">
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
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



