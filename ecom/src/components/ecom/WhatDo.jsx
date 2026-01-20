'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react';
import Image from 'next/image';

export default function VideoBanner() {
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
        <>
            <div className=" h-[280px] 2xl:h-[314px]   bg-gray-50 flex items-center justify-center p-4">
                {/* Banner Container */}
                <div className="w-full  bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="relative px-6 py-5">

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                            {/* Left Section - Text */}
                            <div className="lg:col-span-4 space-y-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                                    What We <span className="italic font-normal">Do</span>
                                </h1>
                                <p className="text-base flex gap-3 text-black uppercase tracking-wide">Watch Now <span><ArrowRight /></span></p>
                            </div>

                            {/* Center Section - Images */}
                            <div className="lg:col-span-4 flex justify-center items-center  h-64 md:h-80">
                                <Image width={700} height={300} src="/ecom/work1.png" alt="what we do" />
                            </div>

                            {/* Right Section - Play Button */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-6">
                                <button
                                    onClick={openVideo}
                                    className="group relative bg-gray-900 hover:bg-gray-800 text-white rounded-full p-8 shadow-2xl transition-all duration-300 hover:scale-110"
                                    aria-label="Play video"
                                >
                                    <Play className="w-10 h-10 fill-white" />
                                </button>
                                <span className="text-xs text-gray-600 font-medium">
                                    CLICK ME - 15 Mins
                                </span>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        {/* <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm">
                            <span className="text-gray-400 font-medium">CONNECT</span>
                            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-orange-600 transition-colors cursor-pointer">
                                LEVEL UP
                            </span>
                            <span className="text-gray-400 font-medium">SUCCEED!</span>
                        </div> */}
                    </div>
                </div>

                {/* Video Popup Modal */}
                {isVideoOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fadeIn"
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
                                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                        What We Actually Do - Company Overview
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base">
                                        Discover our mission, values, and how we help businesses succeed
                                    </p>
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

            
        </>
    );
}