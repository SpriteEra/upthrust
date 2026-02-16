'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const brands = [
    { name: "brand1", src: "/google-ads/brandwhite/brand1.png" },
    { name: "brand2", src: "/google-ads/brandwhite/brand2.png" },
    { name: "brand3", src: "/google-ads/brandwhite/brand3.png" },
    { name: "brand4", src: "/google-ads/brandwhite/brand4.png" },
    { name: "brand5", src: "/google-ads/brandwhite/brand5.png" },
    { name: "brand6", src: "/google-ads/brandwhite/brand6.png" },
    { name: "brand7", src: "/google-ads/brandwhite/brand7.png" },
    { name: "brand8", src: "/google-ads/brandwhite/brand8.png" },
    { name: "brand9", src: "/google-ads/brandwhite/brand9.png" },
    { name: "brand10", src: "/google-ads/brandwhite/brand10.png" },

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
        <div className="min-h-screen bg-white max-w-[90%] mx-auto mt-15">

            <div className=" py-12 lg:py-20">
                {/* Desktop Layout */}
                <div className=" lg:flex items-start justify-between w-full">
                    {/* Left Content */}
                    <div className="flex-1">
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">

                            <div className="relative flex items-center">
                                {/* First Circle */}
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center ">
                                    <Image
                                        src="/google-ads/Cric.png"
                                        alt="crc"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Second Circle (Overlapping) */}
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center -ml-4 z-10">
                                    <Image
                                        src="/google-ads/Google.png"
                                        alt="google"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>

                            </div>

                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm 2xl:text-[16px] 3xl:text-[17px] ">4.9</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg width="19" height="18" key={i} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29034 0L11.4835 6.74982H18.5807L12.839 10.9215L15.0321 17.6712L9.29034 13.4996L3.5486 17.6712L5.74175 10.9215L0 6.74982H7.09719L9.29034 0Z" fill="#FFB900" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-lg 3xl:text-xl text-black mb-8 font-normal leading-[150%] tracking-[-0.02em]">PPC Agency that kills competitors</p>

                        {/* Main Heading */}
                        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-[86px] tracking-[-0.04em] font-semibold leading-[120%] mb-8">
                            Turn Wasted Ad Spend<br />
                            Into Real Revenue with<br />
                            <span className="inline-block relative overflow-hidden align-bottom h-14 w-100 3xl:h-23 3xl:w-150">
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
                        <button className="bg-[#0076F0] text-white font-normal text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] px-7 3xl:px-9  py-5 3xl:py-6 rounded-full  transition-colors">
                            Get a Free Google Ads Audit
                        </button>

                        {/* Trusted Brands */}
                        <div className="mt-10 sm:mt-10 3xl:mt-20 flex flex-col">
                            <p className="text-lg lg:text-base 3xl:text-lg max-md:text-center tracking-[-0.02em]">Trusted By Popular Brands</p>
                            <div className="grid grid-cols-5 gap-y-5 xs:gap-y-6 gap-x-2 3xl:gap-x-16 items-center py-5 md:py-5 3xl:py-8 max-w-xl 3xl:max-w-3xl pb-12 3xl:pb-20">
                                {brands.map((brand) => (
                                    <div
                                        key={brand.name}
                                        className="flex items-center justify-center h-7 xs:h-8 lg:h-10 w-12 3xl:h-15 xs:w-13 3xl:w-20"
                                    >
                                        <Image
                                            src={brand.src}
                                            alt={"Logos of google brands partnered with Upthrust"}
                                            width={160}
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

            </div>
        </div>
    );
};

export default GoogleAdsHero;