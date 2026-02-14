'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SmartSwiper from '../SmartSwiper';
import { NotchedBackground } from './NotchedBackground';

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
        <div className="  bg-black pt-45  lg:pt-50 2xl:pt-60 3xl:pt-70 flex  items-center justify-center px-2 pb-2 lg:pb-6 ">
            <div className="relative w-full inverted-radius sm:max-w-[90%] 3xl:max-w-[90%] ">
                {/* Card with Folder Tab */}
                <div className="relative bg-white max-sm:rounded-tl-[20px] rounded-bl-[20px] sm:rounded-tr-[20px] rounded-br-[20px]">
                    <svg width="131" height="35" viewBox="0 0 131 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute sm:hidden -top-8 -right-[0.5px]">
                        <path d="M29.0564 0.492754C30.3874 0.165448 31.7531 0 33.1237 0H110.863C112.424 0 113.995 0.229471 115.492 0.671286C117.287 1.20109 118.997 2.04673 120.504 3.15801C121.652 4.00541 122.683 5.00211 123.568 6.12179L124.234 6.96349C125.234 8.22847 126.06 9.62213 126.689 11.1071L127.59 13.2352C128.026 14.2646 128.365 15.3323 128.603 16.4246L129.749 21.6812L130.25 27.5942L130.5 33.5082L0 34.5L3.31017 33.5186C4.43514 33.1851 5.49345 32.6582 6.43769 31.9616C6.82164 31.6784 7.18506 31.3683 7.52521 31.0337L7.62142 30.9391C8.54647 30.0292 9.31798 28.9754 9.90595 27.8187L10.0201 27.5942L13.0258 21.6812L16.5325 14.7826L19.5382 8.86957L20.3635 7.65194C21.8096 5.51837 23.5563 3.60495 25.5497 1.97101C26.5444 1.31876 27.6427 0.840388 28.7978 0.556355L29.0564 0.492754Z" fill="white" />
                    </svg>
                    <svg width="303" height="40" viewBox="0 0 303 40" fill="none" xmlns="http://www.w3.org/2000/svg" className=" hidden sm:block absolute -top-10 left-0">
                        <path d="M237.574 0C245.53 0.000121235 253.161 3.16112 258.786 8.78711L281.214 31.2129C286.839 36.8388 294.47 39.9999 302.426 40H0V30C0 13.4315 13.4315 0 30 0H237.574Z" fill="white" />
                    </svg>
                    {/* Main Card */}
                    <div className="relative rounded-[40px] overflow-hidden pt-20 2xl:pt-24 3xl:pt-28 lg:pb-2 3xl:pb-10  px-4 sm:px-8 md:px-12 lg:px-10 3xl:px-12">
                        <div className="flex flex-col max-lg:mb-10 lg:flex-row items-start justify-between gap-4 md:gap-8 lg:gap-10">
                            {/* Left Content */}
                            <div className="flex-1 3xl:leading-27">
                                <div className="mb-3 3xl:mb-5">
                                    <span className="inline-block bg-black text-white text-sm 3xl:text-base px-5 py-2.5 rounded-full">
                                        A Design Agency
                                    </span>
                                </div>
                                {/* Main Heading */}
                                <h1 className="text-[2.625rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl 2xl:text-7xl  font-semibold leading-[1.15] tracking-[-0.02em] 3xl:text-[96px] 3xl:leading-27 mb-6 2xl:mb-14 3xl:mb-10">
                                    WE DESIGN{' '}
                                    <span
                                        className="inline-block relative overflow-hidden align-bottom w-full h-12 lg:h-15 2xl:h-18 3xl:h-24 max-w-90 2xl:max-w-100 3xl:max-w-130"
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
                            <div className="flex-shrink-0 self-center lg:self-start aspect-square size-80 2xl:size-80 3xl:size-93">
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