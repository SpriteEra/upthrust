'use client'
import React, { useEffect, useRef, useState } from 'react';

const VideoZoom = () => {
    const sectionRef = useRef(null);
    const videoContainerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate when section is in viewport
            const sectionMiddle = rect.top + rect.height / 2;
            const viewportMiddle = windowHeight / 2;

            // Progress based on distance from center
            const distanceFromCenter = Math.abs(sectionMiddle - viewportMiddle);
            const maxDistance = windowHeight / 2 + rect.height / 2;

            // 0 = far away, 1 = centered
            const progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate transform values based on scroll progress
    const scale = 0.5 + (scrollProgress * 0.5); // 0.5 to 1
    const opacity = Math.min(1, scrollProgress * 1.5); // Fade in faster
    const translateY = (1 - scrollProgress) * 100; // Move up from bottom

    return (
        <div className="bg-white">
            {/* Spacer to allow scrolling before */}
            <div className="h-[50vh] md:h-screen bg-gradient-to-b from-gray-50 to-white"></div>

            {/* Main Section */}
            <section
                ref={sectionRef}
                className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 bg-white"
            >
                <div className="max-w-7xl w-full">
                    {/* Heading */}
                    <div
                        className="mb-8 md:mb-16"
                        style={{
                            opacity: opacity,
                            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
                            transition: 'all 0.1s ease-out'
                        }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight">
                            Watch Us Manage{' '}
                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                                <span className="inline-flex items-center gap-1 md:gap-2 text-blue-500">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="10" />
                                        <text x="12" y="16.5" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">$</text>
                                    </svg>
                                    <span className="font-bold">1.2M</span>
                                </span>
                            </span>{' '}
                            In
                            <br className="hidden sm:block" />
                            <span className="block sm:inline"> Monthly Ad Spend</span>
                        </h2>
                    </div>

                    {/* Video Container with Zoom Effect */}
                    <div
                        ref={videoContainerRef}
                        className="relative w-full max-w-5xl mx-auto px-4"
                        style={{
                            transform: `scale(${scale}) translateY(${translateY}px)`,
                            opacity: opacity,
                            transition: 'transform 0.05s linear, opacity 0.05s linear',
                            transformOrigin: 'center bottom'
                        }}
                    >
                        {/* Tablet Frame */}
                        <div className="relative bg-black rounded-2xl md:rounded-3xl p-2 md:p-3 lg:p-4 shadow-2xl">
                            {/* Screen */}
                            <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden aspect-video">
                                {/* Dashboard Content */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
                                    {/* Simulated Dashboard Interface */}
                                    <div className="p-3 md:p-6 h-full">
                                        {/* Header Bar */}
                                        <div className="bg-white rounded-lg p-2 md:p-3 mb-3 md:mb-4 shadow-sm">
                                            <div className="flex gap-2">
                                                <div className="h-2 md:h-3 bg-blue-500 rounded w-1/4"></div>
                                                <div className="h-2 md:h-3 bg-gray-200 rounded w-1/4"></div>
                                                <div className="h-2 md:h-3 bg-gray-200 rounded w-1/4"></div>
                                                <div className="h-2 md:h-3 bg-gray-200 rounded w-1/4"></div>
                                            </div>
                                        </div>

                                        {/* Charts */}
                                        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-4">
                                            <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm">
                                                {/* Line Chart Simulation */}
                                                <div className="flex items-end gap-1 h-12 md:h-20">
                                                    <div className="bg-blue-300 rounded-t w-full" style={{ height: '40%' }}></div>
                                                    <div className="bg-blue-400 rounded-t w-full" style={{ height: '60%' }}></div>
                                                    <div className="bg-blue-500 rounded-t w-full" style={{ height: '80%' }}></div>
                                                    <div className="bg-blue-400 rounded-t w-full" style={{ height: '65%' }}></div>
                                                    <div className="bg-red-400 rounded-t w-full" style={{ height: '50%' }}></div>
                                                    <div className="bg-red-500 rounded-t w-full" style={{ height: '70%' }}></div>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm">
                                                {/* Stats */}
                                                <div className="space-y-1 md:space-y-2">
                                                    <div className="h-2 md:h-3 bg-gray-200 rounded w-3/4"></div>
                                                    <div className="h-2 md:h-3 bg-gray-200 rounded w-1/2"></div>
                                                    <div className="h-2 md:h-3 bg-gray-200 rounded w-2/3"></div>
                                                    <div className="h-2 md:h-3 bg-gray-200 rounded w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Data Table */}
                                        <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
                                            <div className="space-y-1 md:space-y-2">
                                                {[...Array(4)].map((_, i) => (
                                                    <div key={i} className="flex gap-2">
                                                        <div className="h-1.5 md:h-2 bg-gray-200 rounded flex-1"></div>
                                                        <div className="h-1.5 md:h-2 bg-gray-200 rounded flex-1"></div>
                                                        <div className="h-1.5 md:h-2 bg-gray-200 rounded flex-1"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Person Overlay (Bottom Right) */}
                                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 md:border-3 border-white">
                                    <div className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 flex items-center justify-center">
                                        {/* Simulated person - you can replace with actual image */}
                                        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <button className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-xl hover:bg-opacity-100 hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 ml-0.5 sm:ml-1 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Tablet Camera Notch (Top Center) */}
                            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-12 md:w-16 h-1 md:h-1.5 bg-gray-900 rounded-full"></div>
                        </div>

                        {/* Subtle Glow Effect */}
                        <div
                            className="absolute inset-0 bg-blue-500 rounded-2xl md:rounded-3xl blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
                            style={{
                                opacity: scrollProgress * 0.15
                            }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* Spacer to allow scrolling after */}
            <div className="h-[50vh] md:h-screen bg-gradient-to-b from-white to-gray-50"></div>
        </div>
    );
};

export default VideoZoom;