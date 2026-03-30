'use client'
import RatingStars from '@/common/Rating';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AnimatedWord from '../common/AnimatedWord';

const brands = [
    { name: "brand1", src: "/brands/brand-black/harley-davidson.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-13 sm:w-17 xl:w-17 3xl:h-15 3xl:w-30" },
    { name: "brand2", src: "/brands/brand-black/loreal.webp", alt: "", width: "h-7 xs:h-8 lg:h-13 w-13 sm:w-17 xl:w-25 3xl:h-16 3xl:w-40" },
    { name: "brand3", src: "/brands/brand-black/zomato.webp", alt: "", width: "h-8 xs:h-6 lg:h-13 w-15 sm:w-17 xl:w-20 3xl:h-15 3xl:w-40" },
    { name: "brand4", src: "/brands/brand-black/dell.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-15 3xl:h-15 3xl:w-27" },
    { name: "brand5", src: "/brands/brand-black/vwo.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-16 3xl:h-15 3xl:w-28" },
    { name: "brand7", src: "/brands/brand-black/qpi-ai.webp", alt: "", width: "h-6 xs:h-8 lg:h-9 w-14 sm:w-17 xl:w-20 3xl:h-12 3xl:w-30" },
    { name: "brand6", src: "/brands/brand-black/poker-baazi.webp", alt: "", width: "h-7 xs:h-8 lg:h-12 w-12 sm:w-20 xl:w-24 3xl:h-15 3xl:w-40" },
    { name: "brand8", src: "/brands/brand-black/bosch.webp", alt: "", width: "h-8 xs:h-8 lg:h-12 w-15 sm:w-17 xl:w-20 3xl:h-15 3xl:w-40" },
    { name: "brand9", src: "/brands/brand-black/cyble.webp", alt: "", width: "h-8 xs:h-8 lg:h-12 w-13 sm:w-17 xl:w-20 3xl:h-15 3xl:w-40" },
    { name: "brand10", src: "/brands/brand-black/welspun.webp", alt: "", width: "h-6 xs:h-8 lg:h-12 w-12 sm:w-17 xl:w-20 3xl:h-15 3xl:w-40" },

];

const SeoAgencyHero = ({ title }) => {

    const words2 = [
        { text: 'Ranked', color: '#FE2B27' },
        { text: 'Discovered', color: '#FE2B27' },
        { text: 'Mentioned', color: '#FE2B27' },
        { text: 'Cited', color: '#FE2B27' },
        { text: 'Conversions', color: '#FE2B27' },
    ];
    const images = [
        { src: '/social/google-black.webp', width: 80, height: 80 },
        { src: '/social/chatgpt.webp', width: 80, height: 80 },
        { src: '/social/claude.webp', width: 80, height: 80 },
        { src: '/social/google-ai.webp', width: 80, height: 80 },
        { src: '/social/grok.webp', width: 80, height: 80 },
        { src: '/social/perplexity.webp', width: 80, height: 80 },
        { src: '/social/bing.webp', width: 80, height: 80 },
    ];




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
                        src="/google-ads/Googleone.webp"
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
                <h1 className="text-lg 3xl:text-xl text-black  mb-3 xl:mb-4 font-normal leading-[150%] tracking-[-0.02em]">{title}  <AnimatedWord words={words2} className="h-5.5 3xl:h-6.5 w-28 3xl:w-36 text-[#FE2B27] mx-auto font-normal" textCss='font-normal justify-start!' /></h1>

                {/* Main Heading */}
                <h1 className="text-[42px] lg:text-5xl 2xl:text-6xl 1600:text-[78px] 1800:text-[86px] tracking-[-0.04em] font-semibold leading-[120%] mb-1 xl:mb-2 max-sm:max-w-100">
                    Get Found Everywhere <br className='max-md:hidden' />
                    Your {" "} <span className='text-[#FE2B27]'>Customers</span><br />
                    Search  <AnimatedWord images={images} className="size-7 xl:size-9 2xl:size-12 1600:size-15 1800:size-17 mb-3" />
                </h1>
                <p className="text-lg 3xl:text-xl text-black mb-8 3xl:mb-10 font-normal leading-[150%] tracking-[-0.02em]">Most agencies chase rankings. We chase revenue. <br className='max-md:hidden' />Our 'Triple Algorithm' method see 3X more conversions in 120 days.</p>
                {/* CTA Button */}
                <button className="text-lg 3xl:text-xl py-4 3xl:py-5.5 px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white hover:bg-[#1550A9] transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em]">
                    Get a Free SEO/AEO Audit
                </button>

                {/* Trusted Brands */}
                <div className="mt-10 sm:mt-10 2xl:mt-8 3xl:mt-18 flex flex-col">
                    <p className="text-lg lg:text-base 3xl:text-lg tracking-[-0.02em]">Trusted By Popular Brands</p>
                    <div className="flex flex-col gap-y-2 3xl:gap-y-6 py-5 md:py-5 3xl:py-10 max-w-xl 1600:max-w-4xl 1800:max-w-[950px] pb-12 3xl:pb-20">

                        {/* First row (5 items) */}
                        <div className="flex justify-between gap-x-2 3xl:gap-x-5">
                            {brands?.slice(0, 5).map((brand) => (
                                <div
                                    key={brand.name}
                                    className={`flex items-center justify-center ${brand.width}`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt="Logos of google brands partnered with Upthrust"
                                        width={250}
                                        height={100}
                                        className="max-h-full max-w-full object-contain select-none"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Second row (6 items) */}
                        <div className="flex justify-between gap-x-2 3xl:gap-x-10">
                            {brands?.slice(5, 11).map((brand) => (
                                <div
                                    key={brand.name}
                                    className={`flex items-center justify-center ${brand.width}`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt="Logos of google brands partnered with Upthrust"
                                        width={200}
                                        height={60}
                                        className="max-h-full max-w-full object-contain select-none"
                                    />
                                </div>
                            ))}
                        </div>

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

export default SeoAgencyHero;