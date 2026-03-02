'use client'
import RatingStars from '@/common/Rating';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const brands = [
    { name: "brand1", src: "/google-ads/brandwhite/brand1.webp", alt: "", width: "h-8 xs:h-8 lg:h-12 w-13 sm:w-17 xl:w-18 3xl:h-15 3xl:w-32" },
    { name: "brand2", src: "/google-ads/brandwhite/brand2.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-13 sm:w-17 xl:w-20 3xl:h-15 3xl:w-32" },
    { name: "brand3", src: "/google-ads/brandwhite/brand3.webp", alt: "", width: "h-8 xs:h-8 lg:h-20 w-14 sm:w-17 xl:w-20 3xl:h-15 3xl:w-33" },
    { name: "brand4", src: "/google-ads/brandwhite/brand4.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-15 3xl:h-15 3xl:w-27" },
    { name: "brand5", src: "/google-ads/brandwhite/brand5.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-16 3xl:h-15 3xl:w-28" },
    { name: "brand6", src: "/google-ads/brandwhite/brand6.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-20 3xl:h-15 3xl:w-33" },
    { name: "brand7", src: "/google-ads/brandwhite/brand7.webp", alt: "", width: "h-9 xs:h-8 lg:h-12 w-14 sm:w-17 xl:w-20 3xl:h-15 3xl:w-33" },
    { name: "brand8", src: "/google-ads/brandwhite/brand8.webp", alt: "", width: "h-8 xs:h-8 lg:h-12 w-15 sm:w-17 xl:w-20 3xl:h-15 3xl:w-32" },
    { name: "brand9", src: "/google-ads/brandwhite/brand9.webp", alt: "", width: "h-8 xs:h-8 lg:h-12 w-13 sm:w-17 xl:w-20 3xl:h-15 3xl:w-32" },
    { name: "brand10", src: "/google-ads/brandwhite/brand10.webp", alt: "", width: "h-6 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-14 3xl:h-12 3xl:w-26" },

];

const GoogleAdsHero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const words = [
        { text: 'PPC', color: '#10B981' },
        { text: 'Google Ads', color: '#3B82F6' },
        { text: 'Bing Ads', color: '#F59E0B' }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="xl:min-h-screen bg-white max-w-[92%] mx-auto mt-15 3xl:mt-26 lg:flex items-start justify-between w-full py-12 lg:py-20">
            {/* Left Content */}
            <div className="flex-1 sm:pl-5">
                {/* Rating */}

                <div className="relative flex items-center mb-2 3xl:mb-3">
                    {/* First Circle */}
                    <Image
                        src="/google-ads/clutch.webp"
                        alt="Clutch Logo"
                        width={100}
                        height={100}
                        className="object-contain size-10 sm:size-10"
                    />

                    {/* Second Circle (Overlapping) */}
                    <Image
                        src="/google-ads/google.webp"
                        alt="google Logo"
                        width={100}
                        height={100}
                        className="object-contain size-10 size-10 -ml-3"
                    />
                </div>
                <div className="flex items-center gap-2 mb-3 md:mb-4 3xl:mb-5">
                    <span className="text-sm 2xl:text-[16px] 3xl:text-[17px] ">4.9</span>
                    <div className="flex gap-1">
                        <RatingStars rating={5} fillColor='#FFB900' size='size-4.75 3xl:size-5' />
                    </div>
                </div>
                <p className="text-lg 3xl:text-xl text-black  mb-3 xl:mb-4 font-normal leading-[150%] tracking-[-0.02em]">PPC Agency that kills competitors</p>

                {/* Main Heading */}
                <h1 className="text-[42px] lg:text-5xl 2xl:text-6xl 1600:text-[78px] 1800:text-[86px] tracking-[-0.04em] font-semibold leading-[120%] mb-8 3xl:mb-10 max-sm:max-w-75">
                    Turn Wasted Ad Spend<br />
                    Into Real Revenue with<br />
                    <span className="inline-block relative overflow-hidden align-bottom h-12 sm:h-14 2xl:h-15 w-70 sm:w-100 3xl:h-23 3xl:w-150">
                        <span
                            key={`current-${currentWord}`}
                            className="absolute whitespace-nowrap left-0 bottom-0 w-full animate-slideOut font-bold"
                            style={{ color: words[currentWord].color }}
                        >
                            {words[currentWord].text}
                        </span>
                        <span
                            key={`next-${currentWord}`}
                            className="absolute left-0 bottom-0 w-full animate-slideIn font-bold whitespace-nowrap"
                            style={{ color: words[(currentWord + 1) % words.length].color }}
                        >
                            {words[(currentWord + 1) % words.length].text}
                        </span>
                    </span>
                </h1>

                {/* CTA Button */}
                <button className="text-lg 3xl:text-xl py-4 3xl:py-5.5 px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white hover:bg-[#1550A9] transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em]">
                    Get a Free Google Ads Audit
                </button>

                {/* Trusted Brands */}
                <div className="mt-10 sm:mt-10 2xl:mt-8 3xl:mt-18 flex flex-col">
                    <p className="text-lg lg:text-base 3xl:text-lg tracking-[-0.02em]">Trusted By Popular Brands</p>
                    <div className="grid grid-cols-5 gap-y-2 3xl:gap-y-6 gap-x-2 3xl:gap-x-26 items-center py-5 md:py-5 3xl:py-10 max-w-xl 3xl:max-w-3xl pb-12 3xl:pb-20">
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className={`flex items-center justify-center ${brand.width}`}
                            >
                                <Image
                                    src={brand.src}
                                    alt={"Logos of google brands partnered with Upthrust"}
                                    width={200}
                                    height={60}
                                    className="max-h-full max-w-full object-contain select-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div className=" w-full max-w-lg">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 mb-6">
                        <h3 className="font-bold text-lg mb-2">See Where Your Budget Leaks</h3>
                        <p className="text-sm text-gray-600">
                            Most brands waste ₹2L-10L on fixable ad errors. We find yours in 48hrs.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Your Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone Number (optional)</label>
                            <input
                                type="text"
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Work Email Address*</label>
                            <input
                                type="email"
                                placeholder="Your answer"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Company Size*</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                                Next
                            </button>
                            <button className="text-green-700 hover:text-green-800 font-medium">
                                Clear form
                            </button>
                            <span className="text-sm text-gray-600">Page 1 of 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsHero;