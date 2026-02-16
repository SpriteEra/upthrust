'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const ScreenShot = () => {
    const scrollContainerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const imageData = [
        {
            id: 1,
            src: '/google-ads/screenshot/1.png',
            alt: 'Google Ads Analytics Dashboard',
            title: '$20K monthly spend | $185/demo',
            description: 'WLNC needed qualified demos, not just clicks. Their cost per demo hit $250. Traffic was high, but conversions lagged.'
        },
        {
            id: 2,
            src: '/google-ads/screenshot/2.png',
            alt: 'Campaign Performance Metrics',
            title: 'Results That Drive Growth',
            description: 'We rebuilt their entire acquisition system. SKADS for Google. Segmented audiences on LinkedIn. Multi-step forms that converted. Three months later: $189 per demo. 9+ qualified bookings monthly.'
        },
        {
            id: 3,
            src: '/google-ads/screenshot/3.png',
            alt: 'Marketing Analytics',
            title: 'Data-Driven Optimization',
            description: 'Advanced tracking and analytics setup to monitor every touchpoint in the customer journey.'
        },
        {
            id: 4,
            src: '/google-ads/screenshot/4.png',
            alt: 'Conversion Tracking',
            title: 'Conversion Rate Excellence',
            description: 'Implemented conversion tracking and optimization strategies that doubled qualified lead generation.'
        },
        {
            id: 5,
            src: '/google-ads/screenshot/5.png',
            alt: 'Conversion Tracking',
            title: 'Conversion Rate Excellence',
            description: 'Implemented conversion tracking and optimization strategies that doubled qualified lead generation.'
        },
        {
            id: 6,
            src: '/google-ads/screenshot/6.png',
            alt: 'Conversion Tracking',
            title: 'Conversion Rate Excellence',
            description: 'Implemented conversion tracking and optimization strategies that doubled qualified lead generation.'
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollPosition =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleMouseDown = (e) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        // Disable text selection while dragging
        document.body.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
        document.body.style.userSelect = '';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
        document.body.style.userSelect = '';
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full max-w-[90%] lg:max-w-[85%] mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="relative">
                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className={`flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {imageData.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative flex-shrink-0 group max-h-[600px] overflow-hidden"
                            onMouseEnter={() => !isDragging && setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === index && (
                                <div
                                    className=" mb-4 w-[280px] sm:w-[400px] md:w-[450px] lg:w-[800px]  bg-white rounded-lg  p-4 sm:p-6 z-50 pointer-events-none text-black flex justify-between items-center gap-10 "
                                >
                                    <h3 className="text-base sm:text-lg font-bold min-w-[30%]  mb-2">
                                        {image.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm  leading-relaxed">
                                        {image.description}
                                    </p>

                                </div>
                            )}

                            <div className="relative w-[280px] sm:w-[400px] md:w-[450px] lg:w-[800px] h-[168px] sm:h-[240px] md:h-[270px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-gray-200 transition-transform duration-700 ease-out group-hover:lg:translate-y-6"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover pointer-events-none select-none"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* button  */}
                <div className="flex gap-3 justify-start mt-6">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 z-10 group border border-gray-200"
                        aria-label="Scroll left"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 z-10 group border border-gray-200"
                        aria-label="Scroll right"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default ScreenShot;



