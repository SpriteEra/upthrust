'use client';

import { useState } from 'react';
import Image from 'next/image';
import SmartSwiper from '@/components/SmartSwiper';

const HEIGHTS = {
    blue: {
        base: '74vh',
        lg: '85vh',
        xl: '85vh',
        '2xl': '82vh',
        '3xl': '88vh',
    },
    white: {
        base: '72vh',
        lg: '75vh',
        xl: '75vh',
        '2xl': '73vh',
        '3xl': '80vh',
    },
};

const PredictGrowth = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (id) => {
        setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const cardsData = [
        {
            id: 1,
            type: 'blue',
            bg: 'bg-[#0076F0]',
            text: 'text-white',
            border: 'border border-[#0076F0]',
            category: 'Stop Guessing. Start With Data.',
            title: 'Discover, Research, and campaign build',
            description: (
                <>
                    Most agencies pick obvious keywords. We analyze thousands of search terms to find what your competitors miss keywords with buyer intent, not just traffic. We build tight ad groups around them. <strong>Quality Score 9+. Lower CPCs. Campaigns That Profit From Day One.</strong>
                </>
            ),
            images: ['/google-ads/sliderimg/Discover1.webp', '/google-ads/sliderimg/Discover2.webp', '/google-ads/sliderimg/Discover3.webp'],
        },
        {
            id: 2,
            type: 'white',
            bg: 'bg-[#E7F0FF]',
            text: 'text-black',
            border: 'border border-black/30',
            category: 'SAFETY CHECK',
            title: 'Pre-Launch Review And Launch',
            description: (
                <>
                    We've seen it happen: an agency launches a campaign, realizes three days later the tracking pixel never fired. Or the keywords don't match the landing page. Or the bids are way too high. We don't do that. <strong>We Review Everything First, Catch The Mistakes Before They Cost You Money, Then Launch When It's Actually Ready.</strong>
                </>
            ),
            images: ['/google-ads/sliderimg/Prelaunch1.webp', '/google-ads/sliderimg/Prelaunch2.webp', '/google-ads/sliderimg/Prelaunch3.webp'],
        },
        {
            id: 3,
            type: 'blue',
            bg: 'bg-[#004FAC]',
            text: 'text-white',
            border: 'border border-[#004FAC]',
            category: 'THE JOURNEY CONTINUES',
            title: 'Scale and Ascension',
            description: (
                <>
                    We analyze your search impression share to identify traffic loss due to budget limits—not competition. Budgets are increased by 20%, monitored for three days, and scaled further if CPC and conversion rates remain stable. If costs rise, bids are adjusted before adding spend. <strong>We Scale Winners First And Expand only When The Data Supports It. </strong>
                </>
            ),
            images: ['/google-ads/sliderimg/Scale1.webp', '/google-ads/sliderimg/Scale2.webp', '/google-ads/sliderimg/Scale3.webp'],
        },
        {
            id: 4,
            type: 'white',
            bg: 'bg-[#FFFFFF]',
            text: 'text-black',
            border: 'border border-black/30',
            category: 'ITERATE',
            title: 'Learning And Optimization',
            description: (
                <>
                    This is where we actually figure out what works. Test everything ad copy, audiences, bids. <strong>Track Quality Score Daily. Kill What Doesn't Perform. Scale What Does. No Assumptions, Just Data.</strong>
                </>
            ),
            images: ['/google-ads/sliderimg/Learning1.webp', '/google-ads/sliderimg/Learning2.webp', '/google-ads/sliderimg/Learning3.webp'],
        },
    ];
    const mobileOrder = [
        cardsData[0], // blue
        cardsData[1], // white
        cardsData[3], // white
        cardsData[2], // blue
    ];

    const renderCard = (card) => {
        const isExpanded = expandedCards[card.id];
        const isBlue = card.type === 'blue';
        const h = HEIGHTS[isBlue ? 'blue' : 'white'];

        return (
            <div
                key={card.id}
                className={`relative rounded-2xl 3xl:rounded-[30px] overflow-hidden cursor-pointer ${card.bg} ${card.text} ${card.border}`}
                style={{
                    height: h.base,
                    '--card-h-lg': h.lg,
                    '--card-h-xl': h.xl,
                    '--card-h-2xl': h['2xl'],
                    '--card-h-3xl': h['3xl'],
                }}
                data-card-responsive
                onClick={() => toggleCard(card.id)}
            >
                <div className="relative py-8 px-4 lg:p-8 2xl:p-8 3xl:p-20 flex flex-col gap-0">

                    {/* Category */}
                    <div
                        className={`
                            text-lg lg:text-base 3xl:text-lg tracking-[0.02em] leading-[150%] overflow-hidden
                            ${isExpanded ? 'opacity-0 max-h-0 mb-0' : 'opacity-100 max-h-[40px] mb-3'}
                        `}
                        style={{ transition: 'opacity 300ms ease-in-out, max-height 400ms ease-in-out, margin-bottom 400ms ease-in-out' }}
                    >
                        {card.category}
                    </div>

                    {/* Title */}
                    <div
                        className={`
                            overflow-hidden
                            ${isExpanded ? 'opacity-0 max-h-0 mb-0' : 'opacity-100 max-h-[160px] mb-6 xl:mb-10 3xl:mb-20'}
                        `}
                        style={{ transition: 'opacity 300ms ease-in-out, max-height 450ms ease-in-out, margin-bottom 450ms ease-in-out' }}
                    >
                        <h2 className="text-[32px] lg:text-2xl xl:text-3xl 3xl:text-5xl font-semibold leading-[130%] tracking-[0.02em]">
                            {card.title}
                        </h2>
                    </div>

                    {/* Image — always visible for blue, slides in for white */}
                    <div
                        className={`
                            relative rounded-lg overflow-hidden aspect-7/5 max-h-50 xl:max-h-70 3xl:max-h-[360px]
                            ${isBlue
                                ? ` opacity-100 mt-0 ${isExpanded ? "xl:mt-10 3xl:mt-10" : ""}`
                                : isExpanded ? ' opacity-100 xl:mt-4' : 'max-h-0 opacity-0 mt-0'
                            }
                        `}
                        style={{ transition: 'max-height 500ms ease-in-out, opacity 400ms ease-in-out, margin-top 400ms ease-in-out' }}
                    >
                        <SmartSwiper
                            slides={card.images}
                            effect="slide"
                            speed={800}
                            delay={3000}
                            swiperClass="h-full"
                            slideClass="h-full"
                            renderSlide={(item) => (
                                <div className="w-full h-full rounded-lg 3xl:rounded-2xl min-h-[200px]">
                                    <Image
                                        src={item}
                                        alt={item}
                                        fill
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-cover rounded-lg 3xl:rounded-2xl"
                                    />
                                </div>
                            )}
                        />
                    </div>

                    {/* Description */}
                    <div
                        className={`
                            overflow-hidden
                            ${isExpanded ? 'max-h-[300px] opacity-100 mt-5 xl:mt-10 3xl:mt-14' : 'max-h-0 opacity-0 mt-0'}
                        `}
                        style={{ transition: 'max-height 500ms ease-in-out, opacity 400ms ease-in-out, margin-top 400ms ease-in-out' }}
                    >
                        <p className={`text-lg lg:text-base xl:text-lg 3xl:text-2xl leading-[150%] tracking-[-0.02em] ${isBlue ? 'text-white' : 'text-gray-700'}`}>
                            {card.description}
                        </p>
                    </div>

                    {/* Spacer */}
                    <div className="h-14 3xl:h-20 flex-shrink-0" />
                </div>

                {/* Toggle Button */}
                <button
                    className={`absolute bottom-2 lg:bottom-6 3xl:bottom-7 right-2 lg:right-6 3xl:right-7 size-10 3xl:size-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${isBlue ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}
                    onClick={(e) => { e.stopPropagation(); toggleCard(card.id); }}
                >
                    <svg
                        className={`size-5 3xl:size-10 transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen max-w-[90%] mx-auto 3xl:max-w-[85%] py-10 lg:py-20">

            <style>{`
                @media (min-width: 768px) {
                    [data-card-responsive] { height: var(--card-h-lg) !important; }
                }
                @media (min-width: 1280px) {
                    [data-card-responsive] { height: var(--card-h-xl) !important; }
                }
                @media (min-width: 1536px) {
                    [data-card-responsive] { height: var(--card-h-2xl) !important; }
                }
                @media (min-width: 1820px) {
                    [data-card-responsive] { height: var(--card-h-3xl) !important; }
                }
            `}</style>

            {/* Desktop: 2-column */}
            <div className="hidden lg:flex gap-6 3xl:gap-10">
                <div className="flex flex-col gap-6 3xl:gap-10 flex-1">
                    {renderCard(cardsData[0])}
                    {renderCard(cardsData[3])}
                </div>
                <div className="flex flex-col gap-6 3xl:gap-10 flex-1">
                    {renderCard(cardsData[1])}
                    {renderCard(cardsData[2])}
                </div>
            </div>

            {/* Mobile: single column */}
            <div className="flex flex-col lg:hidden gap-6 3xl:gap-10">
                {mobileOrder.map((card) => renderCard(card))}
            </div>

        </div>
    );
};

export default PredictGrowth;