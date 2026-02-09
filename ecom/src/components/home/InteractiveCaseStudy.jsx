'use client'
import SmartVideo from '@/common/SmartVideo';
import React, { useState, useRef } from 'react';

const InteractiveCaseStudy = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    const sections = [
        {
            id: 0,
            title: "₹45 Lakh Sales from ₹15 Lakh Spend in December",
            description: "Watch the live dashboard: How we scaled an FMCG brand to ₹3 crore while maintaining 2.17x ROAS through creative testing.",
            videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/How%20we%20did%20looms/ScalingFMCGBrandsProfitablyThroughCreativeStrategiesmp4.mp4",
            imageUrl: "/ecom/casestudy/casestudy1.webp",
            alt: "Case Study",
        },
        {
            id: 1,
            title: "10-15% of Monthly Revenue from Email & WhatsApp Alone",
            description: "See how we built retention flows generating ₹5+ lakh monthly through abandoned carts, welcome sequences, and customer journeys.",
            videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/How%20we%20did%20looms/MaximizingCustomerRetentionThroughEffectiveMarketingStrategiesmp4.mp4",
            imageUrl: "/ecom/casestudy/casestudy2.webp",
            alt: "Case Study",
        },
        {
            id: 2,
            title: "From ₹42K to ₹6.37 Lakh Monthly in 5 Months",
            description: "Watch how we took a stuck edible oils brand from 0.85x ROAS to 3.5x while scaling spend 4x (some campaigns hit 5.25x).",
            videoUrl: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/How%20we%20did%20looms/TransformingBrandPerformanceintheOilIndustry.mp4",
            imageUrl: "/ecom/casestudy/casestudy3.webp",
            alt: "Case Study",
        },
        {
            id: 3,
            title: "Why Your Checkout Is Costing You 30-40% of Sales  ",
            description: "Live CRO audit: See how broken checkout flows, poor payment positioning, and COD defaults kill conversions and create fake orders.",
            videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/How%20we%20did%20looms/ImprovingCheckoutFlowandReducingFakeOrdersmp4.mp4 ",
            imageUrl: "/ecom/casestudy/casestudy4.webp",
            alt: "Case Study",
        }
    ];

    const handleSectionClick = (e, index) => {
        e.stopPropagation();

        if (activeSection === index) {
            setActiveSection(index);
        } else {
            setActiveSection(index);
        }
    };


    return (
        <div className="w-full px-1 md:px-6 h-full">
            <div className="  bg-black/6 p-1.5 xs:p-4 md:p-6 rounded-3xl md:rounded-2xl lg:rounded-3xl lg:max-w-[88%] mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-stretch gap-2 xs:gap-4 md:gap-6 lg:gap-5">

                    {/* Left Section*/}
                    <div className="w-full h-full lg:w-1/3 space-y-2 md:space-y-4 my-auto">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className={`rounded-2xl 3xl:rounded-2xl overflow-hidden transition-all duration-300 border relative ${activeSection === index ? 'bg-black text-white shadow-2xl border-black'
                                    : 'bg-white text-gray-900 hover:shadow-lg border-gray-200'}`}
                            >
                                {/* Header */}
                                <div
                                    className="p-4 3xl:p-6 cursor-pointer"
                                    onClick={(e) => handleSectionClick(e, index)}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <p className={`text-xl lg:text-base 3xl:text-xl font-semibold pr-4 flex-1 max-lg:leading-[30px] 3xl:leading-[30px] tracking-[-0.02em] ${activeSection === index ? 'text-white' : 'text-black/60'}`}>
                                            {section.title}
                                        </p>
                                    </div>

                                    {/* Dropdown Content - Animated */}
                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${activeSection === index ? 'grid-rows-[1fr] opacity-100 mt-1.5' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden pr-10">
                                            <p className="text-base  lg:text-sm 3xl:text-base font-light">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Section - Video */}
                    <div className="w-full lg:w-2/3 flex items-center">

                        <SmartVideo
                            key={activeSection}
                            imageUrl={sections[activeSection].imageUrl}
                            videoUrl={sections[activeSection].videoUrl}
                            alt={sections[activeSection].alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCaseStudy;