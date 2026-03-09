'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
const defaultSets = [
    [
        { name: 'Zomato', image: '/uiux/brand/zomato.webp', alt: 'Zomato Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Bosch', image: '/uiux/brand/bosch.webp', alt: 'Bosch Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: "L'Oréal", image: '/uiux/brand/loreal.webp', alt: "L'Oréal Logo", size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Vega', image: '/uiux/brand/vega.webp', alt: 'Vega Logo', size: 'w-20 md:w-24 3xl:w-32 h-9 3xl:h-12 ' },
        { name: 'Harley Davidson', image: '/uiux/brand/harley-davidson.webp', alt: 'Harley Davidson Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Dell', image: '/uiux/brand/dell.webp', alt: 'Dell Logo', size: 'w-20 h-8  3xl:w-28 3xl:h-10' },
    ],
    [
        { name: 'Zomato', image: '/uiux/brand/acadly.webp', alt: 'Acadly Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Bosch', image: '/uiux/brand/neatlogs.webp', alt: 'Neatlogs Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: "L'Oréal", image: '/uiux/brand/beyond.webp', alt: "Beyond Logo", size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Vega', image: '/uiux/brand/ok.webp', alt: 'Ok Logo', size: 'w-20 md:w-24 3xl:w-32 h-11 3xl:h-15' },
        { name: 'Harley Davidson', image: '/uiux/brand/audio-art.webp', alt: 'Audio Art Logo', size: 'w-20 md:w-24 3xl:w-32 h-11 3xl:h-15' },
        { name: 'Dell', image: '/uiux/brand/housr.webp', alt: 'Housr Logo', size: 'w-20 h-7 md:h-8  3xl:w-28 3xl:h-10' },
    ],
    [
        { name: 'Zomato', image: '/uiux/brand/vwo.webp', alt: 'Vwo Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Bosch', image: '/uiux/brand/cyble.webp', alt: 'Cyble Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: "L'Oréal", image: '/uiux/brand/qpiai.webp', alt: "Q Pi Ai Logo", size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Vega', image: '/uiux/brand/mc-overalls.webp', alt: 'MC Overalls Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Harley Davidson', image: '/uiux/brand/tescribe.webp', alt: 'Teascrube Logo', size: 'w-20 md:w-24 3xl:w-32' },
        { name: 'Dell', image: '/uiux/brand/tiggle.webp', alt: 'Tiggle Logo', size: 'w-20 md:h-10  3xl:w-28 3xl:h-12' },
    ],
];
export default function AnimatedLogoCarousel({ logoSets = defaultSets, theme = "dark" }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={`${theme === 'dark' ? 'bg-black' : "bg-white"} flex items-center justify-center px-2 pb-4 md:py-8 lg:pb-12 3xl:pb-14 `}>
            <div className="w-full sm:max-w-[90%] 3xl:max-w-[90%]  pt-2 lg:pt-14 3xl:pt-20">
                {/* Logo Carousel Container */}
                <div className={`relative ${theme === 'dark' ? "sm:border-white/20" : "sm:border-black/20"} sm:border   sm:rounded-2xl 3xl:rounded-3xl`}>
                    <div className="hidden sm:block absolute -top-2 2xl:-top-3  left-1/2 -translate-x-1/2 z-10">
                        <p className={` text-lg sm:text-xs md:text-sm 3xl:text-lg font-normal tracking-[-0.02em] bg-black px-2 ${theme === 'dark' ? 'bg-black text-white/50' : "bg-white text-black"} `}>
                            Trusted by startups, scaleups, and global brands across the India & US
                        </p>
                    </div>
                    <div className="hidden md:block relative h-24 md:h-32 3xl:h-40 overflow-hidden p-5 3xl:py-10 rounded-2xl">

                        {logoSets.map((logos, setIndex) => {
                            const activeIndex = currentIndex % logoSets.length;

                            let position = 'translate-y-full opacity-0';

                            if (setIndex === activeIndex) {
                                position = 'translate-y-0 opacity-100';
                            } else if (
                                setIndex === (activeIndex - 1 + logoSets.length) % logoSets.length
                            ) {
                                position = '-translate-y-full opacity-0';
                            }

                            return (
                                <div
                                    key={setIndex}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${position}`}
                                >
                                    <div className="h-full">
                                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center justify-center h-full">
                                            {logos.map((logo, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex items-center justify-center w-24 md:w-26 xl:w-28 3xl:w-36 mx-auto ${logo.size}`}
                                                >
                                                    <Image
                                                        width={128}
                                                        height={80}
                                                        src={logo.image}
                                                        alt={logo.alt}
                                                        className="w-full h-full object-contain "
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    {/* for mobile  */}
                    <div className={`md:hidden overflow-hidden py-4 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
                        <p className="text-white/50 text-lg text-center font-light p-3">
                            Trusted by startups, scaleups, and global brands across India & US
                        </p>

                        <div className="relative w-full overflow-hidden">
                            <div className="flex w-max animate-marquee">
                                {[...logoSets.flat(), ...logoSets.flat()].map((logo, index) => (
                                    <div key={index} className="mx-4 flex-shrink-0">
                                        <Image
                                            src={logo.image}
                                            alt={logo.alt}
                                            width={128}
                                            height={80}
                                            className={`w-20 h-16 object-contain ${logo.size}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}