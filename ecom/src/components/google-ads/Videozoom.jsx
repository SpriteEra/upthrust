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
        <div className="bg-white max-w-[85%] mx-auto">

            {/* Main Section */}
            <section
                ref={sectionRef}
                className=" flex items-center justify-center py-7 md:py-10  bg-white"
            >
                <div className=" w-full sticky top-0 h-full flex flex-col justify-center">

                    {/* Video Container with Zoom Effect */}
                    <div
                        ref={videoContainerRef}
                        className="relative w-full  px-4"
                        style={{
                            transform: `scale(${scale})`,
                            opacity: opacity,
                            transformOrigin: 'center center',
                            willChange: 'transform, opacity'
                        }}
                    >
                        {/* Video with Controls */}
                        <video
                            className="w-full h-full rounded-xl md:rounded-2xl"
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


        </div>
    );
};

export default VideoZoom;