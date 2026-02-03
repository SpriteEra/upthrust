'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SmartSwiper from '../SmartSwiper';

const images = [
    { id: 1, src: '/uiux/stories/story3/1.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story2/5.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story2/1.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story1/1.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story4/2.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story3/6.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story1/4.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story3/11.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story1/10.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story2/2.webp', alt: 'Hero Image 1' },
    { id: 1, src: '/uiux/stories/story3/7.webp', alt: 'Hero Image 1' },

]

export default function UIUXHero() {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['PRODUCTS', 'WEBSITES', 'APPS', 'BRANDS'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" bg-black min-h-screen pt-30 2xl:pt-45 3xl:pt-60 flex items-center justify-center px-2 pb-2 lg:pb-6 ">
            <div className="relative w-full inverted-radius sm:max-w-[90%] 3xl:max-w-[85%] ">
                {/* Card with Folder Tab */}
                <div className="">
                    {/* Main Card */}
                    <div className="relative bg-white rounded-[40px] overflow-hidden pt-20 2xl:pt-24 3xl:pt-28 lg:pb-2 3xl:pb-10  px-4 sm:px-8 md:px-12 lg:px-10 3xl:px-15">
                        <div className="flex flex-col max-lg:mb-10 lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-10">
                            {/* Left Content */}
                            <div className="flex-1">
                                <div className="mb-3 3xl:mb-5">
                                    <span className="inline-block bg-black text-white text-sm 3xl:text-base px-5 py-2.5 rounded-full">
                                        A Design Agency
                                    </span>
                                </div>
                                {/* Main Heading */}
                                <h1 className="text-[2.625rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-semibold leading-[1.15] tracking-tight mb-6 2xl:mb-14 3xl:mb-10">
                                    WE DESIGN{' '}
                                    <span
                                        className="inline-block relative overflow-hidden align-bottom w-full h-12 lg:h-15 2xl:h-18 3xl:h-24 max-w-110 3xl:max-w-130"
                                    >
                                        <span
                                            key={`current-${currentWord}`}
                                            className="absolute left-0 bottom-0 w-full text-[#FF5722] animate-slideOut font-semibold  "
                                        >
                                            {words[currentWord]}
                                        </span>
                                        <span
                                            key={`next-${currentWord}`}
                                            className="absolute left-0 bottom-0 w-full text-[#FF5722]  animate-slideIn  font-semibold  "
                                        >
                                            {words[(currentWord + 1) % words.length]}
                                        </span>
                                    </span>
                                    <br />
                                    PEOPLE SHOW THEIR
                                    <br className="hidden lg:block" />
                                    {' '}
                                    FRIENDS
                                </h1>
                            </div>

                            {/* Right Content - Phone Mockup */}
                            <div className="flex-shrink-0 self-center lg:self-start aspect-square size-80 2xl:size-80 3xl:size-95">
                                <SmartSwiper
                                    slides={images}
                                    effect="slide"
                                    speed={800}
                                    delay={3000}
                                    swiperClass="h-full"
                                    slideClass="h-full "
                                    renderSlide={(item) => (
                                        <div className="w-full h-full rounded-lg 3xl:rounded-2xl">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                quality={100}
                                                sizes="(max-width: 768px) 100vw, 60vw"
                                                className="object-cover rounded-lg 3xl:rounded-2xl"
                                            />
                                        </div>
                                    )}
                                />


                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mb-8 3xl:mb-0 border-t border-gray-400 pt-8">
                            {/* Feature 1 */}
                            <div className="flex items-center gap-3 3xl:gap-6 flex-1 w-full sm:w-auto">
                                <div className="size-12 lg:size-13 3xl:size-18 bg-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className='size-5 3xl:size-8' viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5314 0H16.2965V12.4915L29.1407 8.375L30 11.045L17.2394 15.1688L25.1099 25.8501L22.8619 27.5L14.9051 16.8455L7.14237 27.4192L4.83887 25.8211L12.5717 15.2881L0 11.0507L0.815125 8.29513L13.5314 12.5099V0Z" fill="white" />
                                    </svg>

                                </div>
                                <div>
                                    <p className=" text-[15px] lg:text-xl 3xl:text-2xl">
                                        Built from real-world
                                        <br />
                                        product experience
                                    </p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex items-center gap-3 3xl:gap-6 flex-1 w-full sm:w-auto">
                                <div className="size-12 lg:size-13 3xl:size-18 bg-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className='size-5 3xl:size-8' viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5314 0H16.2965V12.4915L29.1407 8.375L30 11.045L17.2394 15.1688L25.1099 25.8501L22.8619 27.5L14.9051 16.8455L7.14237 27.4192L4.83887 25.8211L12.5717 15.2881L0 11.0507L0.815125 8.29513L13.5314 12.5099V0Z" fill="white" />
                                    </svg>

                                </div>
                                <div>
                                    <p className=" text-[15px] lg:text-xl 3xl:text-2xl">
                                        Shaped by years of building
                                        <br />
                                        and scaling B2B products
                                    </p>
                                </div>
                            </div>
                            {/* CTA Section */}
                            <div className="flex items-center w-full sm:w-auto  sm:justify-start">
                                <div className="size-12 lg:size-14 3xl:size-15 bg-black rounded-full flex items-center justify-center">
                                    <Image src="/icons/phone.webp" width={40} height={40} className="size-5 3xl:size-10" alt="Call Icon" />
                                </div>
                                <button className="bg-[#FF3B00] text-white px-8 py-3 lg:py-3.5 3xl:py-4 rounded-full transition-all duration-200 text-lg text-shadow-hard  text-outline">
                                    Book A Strategy Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}