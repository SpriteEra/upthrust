import React from 'react'
import Image from 'next/image';
import StylishButton from '@/common/RocketButton';
const businesses = [
    {
        badge: "£505K MONTHLY REVENUE | 8.97K ORDERS",
        title: "ATLANTA MOCASSIN",
        subtitle: "Premium Footwear",
        pricing: {
            original: "£180K/Month (Stuck)",
            current: "£505K/Month (↑181%)"
        },
        metrics: {
            badge: "7.6",
            value: "↑181%"
        },
        description: "Previous Agency Said: 'You've Hit Your Ceiling.' We Proved Them Wrong in 6 Months.",
        bgColor: "bg-[#E1EFD7]",
        accentColor: "bg-[#6FAB42]",
        accentColor2: "#6FAB42",
        textAccent: "text-[#6FAB42]",
        rightImage: "/ecom/buss1.webp",
        growthMetric: {
            value: "8.97K",
            label: "Orders"
        }
    },
    {
        badge: "₹3.52 LAKH IN DAILY SALES | 75 ORDERS",
        title: "URBAN PITARA",
        subtitle: "Indian Apparel Brand",
        pricing: {
            original: "₹70K/Month (Stuck)",
            current: "₹3.5L+/Day (Scaling)"
        },
        metrics: {
            badge: "9.4",
            value: "5x Revenue"
        },
        description: "Growth Through Creative Testing & Strategic Offers",
        bgColor: "bg-orange-100",
        accentColor: "bg-orange-600",
        accentColor2: "#CF7F3C",
        textAccent: "text-orange-600",
        rightImage: "/ecom/buss2.webp",
        growthMetric: {
            value: "₹3.52 Lakh",
            label: "in Daily Sales"
        }
    },
    {
        badge: "₹7L+ BILL MONTHLY IN 6 MONTHS",
        title: "SMOKEY COCKTAIL",
        subtitle: "Beverage",
        pricing: {
            original: "25L/Month",
            current: "₹6.3Lm in 6 Months"
        },
        metrics: {
            badge: "9.4",
            value: "↑152% Revenue"
        },
        description: "Scaled Revenue AND Efficiency (Meta Can Do Both)",
        bgColor: "bg-red-100",
        accentColor: "bg-red-600",
        accentColor2: "#B30100",
        textAccent: "text-red-600",
        rightImage: "/ecom/buss3.webp",
        growthMetric: {
            value: "+50%",
            label: "ROAS"
        }
    },
    {
        badge: "70.02K ORDERS | 3.88% CONVERSION RATE",
        title: "AUDIOART",
        subtitle: "Premium Audio Equipment",
        pricing: {
            original: "$54.3K",
            current: "$453.73K in 3 Months"
        },
        metrics: {
            badge: "9.3",
            value: "↑59% Revenue"
        },
        description: "High-End Audio Studio Without Discounting",
        bgColor: "bg-purple-100",
        accentColor: "bg-purple-600",
        accentColor2: "#9479E7",
        textAccent: "text-purple-600",
        rightImage: "/ecom/buss4.webp",
        growthMetric: {
            value: "+111%",
            label: "Order Volume Growth"
        }
    }
];
const BusinessCard = ({
    badge,
    title,
    subtitle,
    pricing,
    metrics,
    description,
    bgColor = 'bg-green-100',
    accentColor = 'bg-green-600',
    accentColor2,
    textAccent = 'text-green-600',
    rightImage,
    growthMetric
}) => {
    return (
        <div className={`${bgColor} rounded-xl md:rounded-2xl md:p-4 w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto md:sticky top-36`}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-md:p-2">
                {/* Left Section */}
                <div className="w-full lg:w-[60%] flex flex-col">
                    {/* Header */}
                    <div className='p-2 md:p-10 py-4 md:py-16'>
                        <p className="text-xs md:text-sm 2xl:text-[15px] 3xl:text-base text-[#0A211F] mb-3 md:mb-4 uppercase tracking-wide border-b pb-2">
                            {badge}
                        </p>

                        <h4 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px] 3xl:text-6xl font-bold text-black mb-2 max-md:mt-10">
                            {title}
                        </h4>
                        <p className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[54px] 3xl:text-[64px] text-black italic mb-6 md:mb-8 font-instrument">
                            {subtitle}
                        </p>

                        {/* Pricing */}
                        <div className="space-y-3 mb-6 pr-3">
                            <div className="flex flex-col  gap-3">
                                <div className="flex gap-2">
                                    <span className={`${accentColor} text-white text-xs md:text-sm capitalize px-3 py-1 rounded-full h-fit`}>
                                        from
                                    </span>
                                    <div className="text-(--grayd) text-xl xs:text-2xl 3xl:text-3xl">
                                        {pricing.original}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className={`${accentColor} text-white text-xs md:text-sm capitalize px-3 py-1 rounded-full h-fit`}>
                                        to
                                    </span>
                                    <div className="text-xl xs:text-2xl  3xl:text-3xl text-(--grayd)">
                                        {pricing.current}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base font-normal 3xl:text-lg text-(--grayd)  mb-6 md:mb-8 tracking-tight">
                            {description}
                        </p>
                        <div className="mt-16 md:mt-20 max-md:flex justify-center w-full">
                            <StylishButton color={`${accentColor2}`} />
                        </div>
                    </div>
                </div>

                {/* Right Section - Dashboard Image */}
                <div className="flex-shrink-0 flex justify-end items-end w-full lg:w-[40%]">
                    <div className="relative xl:w-[400px] 2xl:w-[450px] w-full h-full flex flex-col rounded-lg overflow-hidden">

                        {/* Image takes remaining height */}
                        <div className="flex-1">
                            <Image
                                width={600}
                                height={500}
                                src={rightImage}
                                alt="Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Growth Metric takes only its own height */}
                        {growthMetric && (
                            <div className={`${accentColor} text-white px-6 py-6`}>
                                <p className="text-2xl md:text-3xl font-bold">
                                    {growthMetric.value} <span className='font-instrument italic font-normal'>{growthMetric.label}</span>
                                </p>

                            </div>
                        )}
                    </div>
                </div>



            </div>
        </div>
    );
};

const WhatWeDid = () => {
    return (
        <div className='max-md:px-2 max-md:space-y-4.5'>
            {businesses.map((business, index) => (
                <BusinessCard key={index} {...business} />
            ))}
        </div>
    )
}

export default WhatWeDid