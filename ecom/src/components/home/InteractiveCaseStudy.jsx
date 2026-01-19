'use client'
import React, { useState, useRef } from 'react';

const InteractiveCaseStudy = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [blinkIndex, setBlinkIndex] = useState(null);
    const sectionRefs = useRef([]);

    const sections = [
        {
            id: 0,
            title: "₹45 Lakh Sales from ₹15 Lakh Spend in December",
            description: "How we helped dashboard how we scaled to 3X revenue maintaining 2.7x ROAS through creative testing.",
            videoUrl: "https://www.loom.com/embed/2dfe3bf3c957415fa6f9efa331d2045c?autoplay=1&hideEmbedTopBar=true"
        },
        {
            id: 1,
            title: "10-15% of Monthly Revenue from Email & WhatsApp Alone",
            description: "See how we built retention flows generating ₹5+ lakh monthly through abandoned carts, welcome sequences, and customer journeys.",
            videoUrl: "https://www.loom.com/embed/2dfe3bf3c957415fa6f9efa331d2045c?autoplay=1&hideEmbedTopBar=true"
        },
        {
            id: 2,
            title: "From ₹42K to ₹6.37 Lakh Monthly in 5 Months",
            description: "Watch how we took a stuck edible oils brand from 0.85x ROAS to 3.5x while scaling spend 4x (some campaigns hit 5.25x).",
            videoUrl: "https://www.loom.com/embed/45c6c8d781cf41158de84dcd1e5ae5f8?autoplay=1&hideEmbedTopBar=true"
        },
        {
            id: 3,
            title: "Why Your Checkout Is Costing You 30-40% of Sales  ",
            description: "Live CRO audit: See how broken checkout flows, poor payment positioning, and COD defaults kill conversions and create fake orders.",
            videoUrl: "https://www.loom.com/embed/597fedd5fe814c9aafe82cdbdf509ea1?autoplay=1&hideEmbedTopBar=true"
        }
    ];

    const toggleSection = (index) => {
        if (activeSection === index) {
            setActiveSection(null);
        } else {
            setActiveSection(index);
        }
        setBlinkIndex(null);
    };

    const handleSectionClick = (e, index) => {
        e.stopPropagation();

        if (activeSection === index) {
            setActiveSection(index);
        } else {
            setActiveSection(index);
        }
    };


    return (
        <div className="w-full px-1 md:px-6">
            <div className="  bg-black/6 p-1.5 xs:p-4 md:p-6 rounded-xl md:rounded-3xl xs:max-w-[88%] mx-auto">
                <div className="flex flex-col-reverse lg:flex-row gap-2 xs:gap-4 md:gap-6 lg:gap-5">
                    {/* Left Section*/}
                    <div className="w-full h-full lg:w-1/3 space-y-2 md:space-y-4">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className={` rounded-lg md:rounded-2xl  3xl:rounded-2xl overflow-hidden transition-all duration-300 border relative ${activeSection === index ? 'bg-black text-white shadow-2xl border-black'
                                    : 'bg-white text-gray-900 hover:shadow-lg border-gray-200'} ${blinkIndex === index ? 'animate-pulse' : ''}`}
                            >
                                {/* Header */}
                                <div
                                    className="p-4 3xl:p-6 cursor-pointer"
                                    onClick={(e) => handleSectionClick(e, index)}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className={`text-base 3xl:text-xl font-semibold pr-4 flex-1 ${activeSection === index ? 'text-white' : 'text-black/60'}`}>
                                            {section.title}
                                        </h3>
                                    </div>

                                    {/* Dropdown Content - Animated */}
                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${activeSection === index ? 'grid-rows-[1fr] opacity-100 mt-1.5' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden pr-10">
                                            <p className="text-sm 3xl:text-base font-light">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Section - Video */}
                    <div className="w-full h-full lg:w-2/3">
                        <div className="sticky top-6">
                            <div className="relative bg-white rounded-lg md:rounded-2xl shadow-2xl overflow-hidden transition-all duration-500">
                                {/* Video Container */}
                                <div className="relative aspect-video bg-gray-900">
                                    <iframe
                                        key={activeSection >= 0 ? activeSection : 0}
                                        src={sections[activeSection >= 0 ? activeSection : 0]?.videoUrl}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        muted
                                        allowFullScreen
                                        allow="autoplay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCaseStudy;