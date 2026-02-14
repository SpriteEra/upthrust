'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnimatedLogoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const logoSets = [
        [
            { name: 'Zomato', image: '/uiux/brand/zomato.webp', alt: 'Zomato Logo' },
            { name: 'Bosch', image: '/uiux/brand/bosch.webp', alt: 'Bosch Logo' },
            { name: "L'Oréal", image: '/uiux/brand/loreal.webp', alt: "L'Oréal Logo" },
            { name: 'Vega', image: '/uiux/brand/vega.webp', alt: 'Vega Logo' },
            { name: 'Harley Davidson', image: '/uiux/brand/harley-davidson.webp', alt: 'Harley Davidson Logo' },
            { name: 'Dell', image: '/uiux/brand/dell.webp', alt: 'Del Logol' },
        ],
        [
            { name: 'Zomato', image: '/uiux/brand/acadly.webp', alt: 'Acadly Logo' },
            { name: 'Bosch', image: '/uiux/brand/neatlogs.webp', alt: 'Neatlogs Logo' },
            { name: "L'Oréal", image: '/uiux/brand/beyond.webp', alt: "Beyond Logo" },
            { name: 'Vega', image: '/uiux/brand/ok.webp', alt: 'Ok Logo' },
            { name: 'Harley Davidson', image: '/uiux/brand/audio-art.webp', alt: 'Audio Art Logo' },
            { name: 'Dell', image: '/uiux/brand/housr.webp', alt: 'Housr Logo' },
        ],
        [
            { name: 'Zomato', image: '/uiux/brand/vwo.webp', alt: 'Vwo Logo' },
            { name: 'Bosch', image: '/uiux/brand/cyble.webp', alt: 'Cyble Logo' },
            { name: "L'Oréal", image: '/uiux/brand/qpiai.webp', alt: "Q Pi Ai Logo" },
            { name: 'Vega', image: '/uiux/brand/mc-overalls.webp', alt: 'MC Overalls Logo' },
            { name: 'Harley Davidson', image: '/uiux/brand/tescribe.webp', alt: 'Teascrube Logo' },
            { name: 'Dell', image: '/uiux/brand/tiggle.webp', alt: 'Tiggle Logo' },
        ],
        // [
        //     { name: 'Google', image: '/logos/google.svg', alt: 'Google' },
        //     { name: 'Apple', image: '/logos/apple.svg', alt: 'Apple' },
        //     { name: 'Microsoft', image: '/logos/microsoft.svg', alt: 'Microsoft' },
        //     { name: 'Amazon', image: '/logos/amazon.svg', alt: 'Amazon' },
        //     { name: 'Meta', image: '/logos/meta.svg', alt: 'Meta' },
        //     { name: 'Netflix', image: '/logos/netflix.svg', alt: 'Netflix' },
        // ],
        // [
        //     { name: 'Nike', image: '/logos/nike.svg', alt: 'Nike' },
        //     { name: 'Adidas', image: '/logos/adidas.svg', alt: 'Adidas' },
        //     { name: 'Puma', image: '/logos/puma.svg', alt: 'Puma' },
        //     { name: 'Samsung', image: '/logos/samsung.svg', alt: 'Samsung' },
        //     { name: 'Sony', image: '/logos/sony.svg', alt: 'Sony' },
        //     { name: 'LG', image: '/logos/lg.svg', alt: 'LG' },
        // ],
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className=" bg-black flex items-center justify-center px-2  md:py-8 3xl:pb-12 ">
            <div className="w-full sm:max-w-[90%] 3xl:max-w-[90%]  pt-2 lg:pt-10 ">
                {/* Logo Carousel Container */}
                <div className="relative  sm:border sm:border-white/20  sm:rounded-2xl 3xl:rounded-3xl ">
                    <div className="hidden sm:block absolute -top-2 2xl:-top-3  left-1/2 -translate-x-1/2 z-10">
                        <p className="text-white/50 text-lg sm:text-xs md:text-sm 3xl:text-lg font-light tracking-wide bg-black px-2 ">
                            Trusted by startups, scaleups, and global brands across the India & US
                        </p>
                    </div>
                    <div className="hidden md:block relative h-24 md:h-32 overflow-hidden p-5 rounded-2xl">

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
                                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center h-full px-4 md:px-12">
                                            {logos.map((logo, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-center w-20 3xl:w-26 "
                                                >
                                                    <Image width={64} height={64} src={logo.image} alt={logo.alt} className="w-full h-full object-contain" />

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    {/* for mobile  */}
                    {/* <div className="md:hidden overflow-hidden py-4">
                        <p className="text-white/50 text-lg text-center font-light p-3">Trusted by startups, scaleups, and global brands across the India & US</p>
                        <div className="flex whitespace-nowrap">

                            <marquee className="marquee gap-6">
                                {[...logoSets.flat(), ...logoSets.flat()].map((logo, index) => (
                                    <span
                                        key={index}
                                        className="text-white "
                                    >
                                        <Image width={64} height={64} src={logo.image} alt={logo.alt} className="w-16 h-16 object-contain inline-block mx-4" />
                                    </span>
                                ))}
                            </marquee>
                        </div>
                    </div> */}

                    <div className="md:hidden overflow-hidden py-4 bg-black">
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
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 object-contain"
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