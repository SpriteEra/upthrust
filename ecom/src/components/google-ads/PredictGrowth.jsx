'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import SmartSwiper from '@/components/SmartSwiper'; // adjust path as needed


const HEIGHTS = {
    blue: {
        base: '520px',   // mobile
        md: '55vh',    // tablet  (~768px+)
        xl: '60vh',    // desktop (~1280px+)
        '2xl': '65vh',   // large   (~1536px+)
    },
    white: {
        base: '420px',
        md: '45vh',
        xl: '48vh',
        '2xl': '52vh',
    },
};



const getResponsiveHeight = (type) => {
    if (typeof window === 'undefined') return HEIGHTS[type].base;
    const w = window.innerWidth;
    const h = HEIGHTS[type];
    if (w >= 1536) return h['2xl'];
    if (w >= 1280) return h.xl;
    if (w >= 768) return h.md;
    return h.base;
};

const PredictGrowth = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };


    const cardsData = [
        {
            id: 1,
            type: 'blue',
            bg: 'bg-[#0076F0]',
            text: 'text-white',
            category: 'Stop Guessing. Start With Data.',
            title: 'Discover, Research, and campaign build',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do.',
            images: [
                '/google-ads/predict1.png',
                '/google-ads/predict2.png',
            ],
        },
        {
            id: 2,
            bg: 'bg-[#E7F0FF]',
            text: 'text-black',
            category: 'SAFETY CHECK',
            title: 'Pre-Launch Review And Launch',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            images: [
                '/google-ads/predict2.png',
                '/google-ads/predict1.png',
            ],
        },
        {
            id: 3,
            type: 'blue',
            bg: 'bg-[#004FAC]',
            text: 'text-white',
            category: 'THE JOURNEY CONTINUES',
            title: 'Scale and Ascension',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do.',
            images: [
                '/google-ads/predict2.png',
                '/google-ads/predict1.png',
            ],
        },
        {
            id: 4,
            type: 'white',
            bg: 'bg-[#FFFFFF]',
            text: 'text-black',
            category: 'ITERATE',
            title: 'Learning And Optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            images: [
                '/google-ads/predict1.png',
                '/google-ads/predict2.png',
            ],
        },
    ];

    const renderCard = (card) => {
        const isExpanded = expandedCards[card.id];
        const isBlue = card.type === 'blue';
        const heightType = isBlue ? 'blue' : 'white';
        const h = HEIGHTS[heightType];

        return (
            <div
                key={card.id}
                className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out ${card.bg} ${card.text}`}
                style={{
                    height: h.base,
                    // These are overridden by the <style> tag below via CSS breakpoints
                    '--card-h-md': h.md,
                    '--card-h-xl': h.xl,
                    '--card-h-2xl': h['2xl'],
                }}
                data-card-responsive
                onClick={() => toggleCard(card.id)}
            >
                <div className="relative h-full p-8 flex flex-col">

                    {/* Category Label */}
                    {card.category && (
                        <div className={`text-xs lg:text-sm 2xl:text-lg tracking-[0.02em] mb-3 transition-opacity duration-300 leading-7 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                            {card.category}
                        </div>
                    )}

                    {/* Title - Hidden when expanded */}
                    {card.title && (
                        <h2 className={`text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl mb-6 leading-10 3xl:leading-15 transition-all duration-500 tracking-[0.02em] ${isExpanded ? 'opacity-0 h-0 mb-0 overflow-hidden' : 'opacity-100'}`}>
                            {card.title}
                        </h2>
                    )}


                    <div className={`relative rounded-lg overflow-hidden h-[300px] w-[400px] shadow-md transition-all duration-500 ease-in-out
                        ${isBlue
                            ? 'flex-grow min-h-0'
                            : (isExpanded ? 'flex-grow min-h-0' : 'h-0 opacity-0 mb-0')
                        }`}
                    >
                        {/* <SmartSwiper
                            slides={card.images}
                            effect="slide"
                            speed={800}
                            delay={3000}
                            swiperClass="h-full"
                            slideClass="h-full "
                            renderSlide={(item) => (
                                <div className="w-full h-full rounded-lg 3xl:rounded-2xl">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={600}
                                        height={400}
                                        fill
                                        quality={100}
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className="object-cover rounded-lg 3xl:rounded-2xl"
                                    />
                                </div>
                            )}
                        /> */}
                    </div>

                    {/* Description - Shows when expanded */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden flex-shrink-0 ${isExpanded ? 'opacity-100 max-h-60 mt-4' : 'opacity-0 max-h-0'}`}>
                        <p className={`text-sm leading-relaxed ${isBlue ? 'text-white' : 'text-gray-700'}`}>
                            {card.description}
                        </p>
                    </div>

                    {/* Toggle Button */}
                    <button
                        className={`absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${isBlue ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}
                        onClick={(e) => { e.stopPropagation(); toggleCard(card.id); }}
                    >
                        <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen max-w-[90%] mx-auto 3xl:max-w-[85%] py-10 lg:py-20">

            {/* Responsive height overrides via CSS breakpoints */}
            <style>{`
                @media (min-width: 768px) {
                    [data-card-responsive] { height: var(--card-h-md) !important; }
                }
                @media (min-width: 1280px) {
                    [data-card-responsive] { height: var(--card-h-xl) !important; }
                }
                @media (min-width: 1536px) {
                    [data-card-responsive] { height: var(--card-h-2xl) !important; }
                }
            `}</style>

            {/* Desktop: 2-column flex */}
            <div className="hidden md:flex gap-6">
                {/* Column 1: Blue top, White bottom */}
                <div className="flex flex-col gap-6 flex-1">
                    {renderCard(cardsData[0])}
                    {renderCard(cardsData[3])}
                </div>
                {/* Column 2: White top, Blue bottom */}
                <div className="flex flex-col gap-6 flex-1">
                    {renderCard(cardsData[1])}
                    {renderCard(cardsData[2])}
                </div>
            </div>

            {/* Mobile: single column */}
            <div className="flex flex-col md:hidden gap-6">
                {cardsData.map((card) => renderCard(card))}
            </div>

        </div>
    );
};

export default PredictGrowth;