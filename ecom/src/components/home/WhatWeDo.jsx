'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { Curve1 } from '@/common/HandWritten';

export default function WhatWeDo() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
        setIsPlaying(false);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div id='about' className='scroll-mt-25'>
            <div className="flex items-center justify-center px-2 md:px-16 mt-20 relative">
                {/* Banner Container */}

                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "highlight", text: "Shark Tank", bgColor: '#FF4500' },
                                { type: "text", text: "winners." }
                            ]
                        },
                        {
                            parts: [
                                { type: "text", text: "₹50Cr brands." }
                            ]
                        }
                    ]}
                    parts={[
                        { type: 'text', text: 'From scroll to sold in ' },
                        { type: 'highlight', text: '5 seconds', bgColor: '#FF4500' },
                        // { type: 'text', text: 'engine' }
                    ]}
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={-10}
                    imageClassName='-right-5 top-5 3xl:top-6'
                    className="absolute -bottom-20 xl:-bottom-18 left-80 xl:left-100 max-w-[200px]"

                />
                <div className="w-full  bg-[#F4F4F4] rounded-2xl md:rounded-4xl overflow-hidden">
                    <div className="relative md:px-20 3xl:px-30 pt-2">

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 max-lg:pt-10 lg:grid-cols-6 gap-8 lg:gap-12 items-center max-md:pt-10">

                            {/* Left Section - Text */}
                            <div className="lg:col-span-2 space-y-1">
                                <p className="text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold leading-tight text-shadow-hard max-lg:text-center" >
                                    What We <span className="italic font-medium">Do</span>
                                </p>
                                <p className="text-sm 3xl:text-base flex gap-2 tracking-wide items-center max-lg:justify-center text-shadow-hard font-extrabold max-md:hidden" >Watch Now <span className='text-lg font-light'>→</span></p>
                            </div>

                            {/* Center Section - Images */}
                            <div className="lg:col-span-3 flex justify-end items-end h-64 md:h-65 3xl:h-70 max-lg:hidden md:pt-10 lg:pt-0">
                                <div className="relative w-full h-40 lg:h-55 xl:h-50 3xl:h-65">
                                    <Image
                                        src="/ecom/work1.webp"
                                        alt="what we do"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 700px"
                                        quality={65}
                                        loading="lazy"
                                    />
                                </div>
                            </div>


                            {/* Right Section - Play Button */}
                            <div className="flex justify-center items-center">
                                <div className="relative flex flex-col items-center">

                                    {/* WHITE PLAY CIRCLE */}
                                    <button
                                        onClick={openVideo}
                                        aria-label="Play video"
                                        className="
                                            relative z-10 rounded-full bg-transparent flex items-center justify-center size-20 md:size-25 3xl:size-30"
                                        style={{ boxShadow: "inset 0 0 5px #878787" }}
                                    >
                                        <span className="inline-block w-0 h-0 border-t-20 md:border-t-25 border-t-transparent border-b-20 md:border-b-25 border-b-transparent border-l-35 md:border-l-40 border-l-black" />
                                    </button>

                                    {/* BLACK PILL */}
                                    <div
                                        className=" absolute -bottom-4 md:-bottom-5 bg-black text-white px-3 py-2 md:py-3 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center gap-2 text-[8px] md:text-[10px] 3xl:text-xs tracking-wide whitespace-nowrap z-11"
                                    >
                                        <span className="opacity-80">TOTAL TIME</span>
                                        <span className="">1:15 MINS</span>
                                    </div>

                                </div>
                            </div>

                            <div className="lg:col-span-3 flex justify-end items-end h-50 md:h-60 lg:hidden">
                                <div className="relative w-full h-35 sm:h-45 md:h-40">
                                    <Image
                                        src="/ecom/work1.webp"
                                        alt="what we do"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 700px"
                                        quality={60}
                                        loading="lazy"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Video Popup Modal */}
                {isVideoOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-95 z-100 flex items-center justify-center p-4 animate-fadeIn"
                        onClick={closeVideo}
                    >
                        <div
                            className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeVideo}
                                className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 text-gray-900 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
                                aria-label="Close video"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Video Container */}
                            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                                {/* Placeholder Video Thumbnail */}
                                <Image
                                    width={200} height={300}
                                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop"
                                    alt="Video presentation"
                                    className="w-full h-full object-cover"
                                />

                                {/* Play/Pause Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                                    <button
                                        onClick={togglePlay}
                                        className="bg-white bg-opacity-95 hover:bg-opacity-100 rounded-full p-8 transition-all duration-300 hover:scale-110 shadow-2xl group"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? (
                                            <div className="w-10 h-10 flex gap-2 items-center justify-center">
                                                <div className="w-3 h-full bg-gray-900 rounded"></div>
                                                <div className="w-3 h-full bg-gray-900 rounded"></div>
                                            </div>
                                        ) : (
                                            <Play className="w-10 h-10 fill-gray-900 text-gray-900 translate-x-0.5" />
                                        )}
                                    </button>
                                </div>

                                {/* Video Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-8">
                                    <p className="text-white text-2xl md:text-3xl font-bold mb-2">
                                        What We Actually Do - Company Overview
                                    </p>
                                    <span className="text-gray-300 text-sm md:text-base">
                                        Discover our mission, values, and how we help businesses succeed
                                    </span>
                                </div>
                            </div>

                            {/* Video Details Section */}
                            <div className="bg-gray-950 text-white p-6 md:p-8 border-t border-gray-800">
                                <div className="flex items-start gap-4">
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            <strong className="text-white">Note:</strong> Replace this placeholder with your actual video.
                                            You can use an HTML5 {'<video>'} element, YouTube embed, or any video platform of your choice.
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            15:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}