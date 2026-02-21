'use client'
import React, { useEffect, useRef, useState } from 'react';

const VideoZoom = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Section center
            const sectionCenter = rect.top + rect.height / 2;

            // Viewport center
            const viewportCenter = windowHeight / 2;

            // Distance from center
            const distance = viewportCenter - sectionCenter;

            // Normalize progress
            const progress = 1 - Math.abs(distance) / windowHeight;

            setScrollProgress(Math.max(0, Math.min(1, progress)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Start at 0.5 scale → End at 1
    const scale = 0.5 + scrollProgress * 0.5;
    const opacity = 0.5 + scrollProgress * 0.5;

    return (
        <div className="bg-white w-full my-20 md:my-0">

            <section
                ref={sectionRef}
                className="min-h-100vh flex items-center justify-center bg-white"
            >
                <div className="sticky top-0 flex items-center justify-center w-full ">

                    <div
                        className="w-full  lg:max-w-[80%] px-4 transition-transform duration-200 ease-out"
                        style={{
                            transform: `scale(${scale})`,
                            opacity: opacity,
                            transformOrigin: 'center center',
                            willChange: 'transform, opacity'
                        }}
                    >
                        {/* Aspect Ratio Container */}
                        <div className="relative w-full  aspect-video">

                            <video
                                className="absolute inset-0 w-full h-full object-cover  md:rounded-2xl"
                                controls
                                playsInline
                            >
                                <source
                                    src="https://cdn.upthrust.agency/Google%20ads/LawyerNYC.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 bg-blue-500  md:rounded-2xl blur-3xl -z-10 pointer-events-none"
                                style={{
                                    opacity: scrollProgress * 0.2
                                }}
                            />
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default VideoZoom;
