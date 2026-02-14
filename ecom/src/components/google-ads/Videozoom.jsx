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

            // Calculate progress based on section position in viewport
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Start progress when section enters viewport from bottom
            // Complete when section is fully visible
            const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log("scroll value:", scrollProgress);

    // Start at 0.6 scale (small), zoom to 1.0 (full size)
    const scale = 0.6 + (scrollProgress * 0.4);
    const opacity = Math.min(1, scrollProgress * 1.5);

    return (
        <div className="bg-white">
            {/* Spacer to allow scrolling before */}
            <div className="h-[30vh] bg-gradient-to-b from-gray-50 to-white"></div>

            {/* Main Section */}
            <section
                ref={sectionRef}
                className="min-h-[150vh] flex items-center justify-center py-12 md:py-20 px-4 bg-white"
            >
                <div className="max-w-7xl w-full sticky top-0 h-screen flex flex-col justify-center">
                    {/* Heading */}
                    <div
                        className="mb-8 md:mb-16"
                        style={{
                            opacity: opacity,
                            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
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
                            transform: `scale(${scale})`,
                            opacity: opacity,
                            transformOrigin: 'center center',
                            willChange: 'transform, opacity'
                        }}
                    >
                        {/* Video with Controls */}
                        <video
                            className="w-full rounded-xl md:rounded-2xl shadow-2xl"
                            controls
                            playsInline
                        >
                            <source
                                src="https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/How%20we%20did%20looms/TransformingBrandPerformanceintheOilIndustry.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                        {/* Subtle Glow Effect */}
                        <div
                            className="absolute inset-0 bg-blue-500 rounded-xl md:rounded-2xl blur-3xl -z-10 pointer-events-none"
                            style={{
                                opacity: scrollProgress * 0.15
                            }}
                        ></div>
                    </div>
                </div>
            </section>

            {/* Spacer to allow scrolling after */}
            <div className="h-[30vh] bg-gradient-to-b from-white to-gray-50"></div>
        </div>
    );
};

export default VideoZoom;