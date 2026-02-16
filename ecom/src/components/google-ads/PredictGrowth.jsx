'use client';

import { useState } from 'react';
import Image from 'next/image';

const PredictGrowth = () => {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const cardsData = [
        // Left column - Blue card (top)
        {
            id: 1,
            type: 'blue',
            bg: 'bg-[#0076F0]',
            text: 'text-white',
            category: 'Stop Guessing. Start With Data.',
            title: 'Discover, Research, and campaign build',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do.',
            image: '/google-ads/predict1.png',
            height: 'tall'
        },
        // Right column - White card (top, short)
        {
            id: 2,
            // type: '[#828282]',
            bg: 'bg-[#E7F0FF]',
            text: 'text-black',
            category: 'SAFETY CHECK',
            title: 'Pre-Launch Review And Launch',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            image: '/google-ads/predict2.png',
            height: 'short'
        },

        // Right column - Blue card (bottom)
        {
            id: 3,
            type: 'blue',
            bg: 'bg-[#004FAC]',
            text: 'text-white',
            category: 'THE JOURNEY CONTINUES',
            title: 'Scale and Ascension',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do.',
            image: '/google-ads/predict2.png',
            height: 'tall'
        },
        // Left column - White card (bottom)
        {
            id: 4,
            type: 'white',
            bg: 'bg-[#FFFFFF]',
            text: 'text-black',
            category: 'ITERATE',
            title: 'Learning And Optimization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            image: '/google-ads/predict1.png',
            height: 'short'
        },
    ];

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[300px]">
                    {cardsData.map((card) => {
                        const isExpanded = expandedCards[card.id] || card.alwaysExpanded;
                        const isBlue = card.type === 'blue';

                        return (
                            <div
                                key={card.id}
                                className={`
         relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
         transition-all duration-500 ease-in-out
        ${card.bg} ${card.text}
          ${card.id === 1 ? 'md:row-span-2' : ''}
          ${card.id === 3 ? 'md:row-span-2' : ''}
        `}
                                onClick={() => toggleCard(card.id)}
                            >
                                <div className="relative h-full p-8 flex flex-col">
                                    {/* Category Label */}
                                    {card.category && (
                                        <div
                                            className={`
                        text-xs lg:text-sm 2xl:text-lg  tracking-[0.02em] mb-3 
                        transition-opacity duration-300  leading-7
                        ${isExpanded ? 'opacity-0' : 'opacity-100'}
                      `}
                                        >
                                            {card.category}
                                        </div>
                                    )}

                                    {/* Title - Hidden when expanded */}
                                    {card.title && (
                                        <h2
                                            className={`
                        text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl mb-6 leading-10 3xl:leading-15
                        transition-all duration-500 tracking-[0.02em]
                        ${isExpanded ? 'opacity-0 h-0 mb-0 overflow-hidden' : 'opacity-100'}
                      `}
                                        >
                                            {card.title}
                                        </h2>
                                    )}

                                    {/* Image - Blue cards: always visible small */}
                                    <div
                                        className={`
                      relative bg-white rounded-lg overflow-hidden shadow-md mb-4 transition-all duration-800 ease-in-out
                      ${isBlue
                                                ? (isExpanded ? 'flex-grow' : 'h-32 xl:h-70 2xl:h-80 3xl:h-90')
                                                : (isExpanded ? 'flex-grow' : 'h-0 opacity-0 mb-0')
                                            }
                    `}
                                    >
                                        <Image src={card.image} alt={card.title}
                                            width={630} height={360} objectFit="cover"
                                            className="rounded-lg w-full h-full xl:h-70 2xl:h-80 3xl:h-90" />
                                    </div>

                                    {/* Description - Shows when expanded */}
                                    <div
                                        className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}
                    `}
                                    >
                                        <p className={`text-sm leading-relaxed ${isBlue ? 'text-white' : 'text-gray-700'}`}>
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Toggle Button */}
                                    {!card.alwaysExpanded && (
                                        <button
                                            className={`
                        absolute bottom-6 right-6 w-10 h-10 rounded-full 
                        flex items-center justify-center shadow-lg
                        transition-all duration-300 hover:scale-110
                        ${isBlue ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}
                      `}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleCard(card.id);
                                            }}
                                        >
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </button>
                                    )}

                                    {/* Close Button for always expanded cards */}
                                    {card.alwaysExpanded && (
                                        <button
                                            className={`
                        absolute bottom-6 right-6 w-10 h-10 rounded-full 
                        flex items-center justify-center shadow-lg
                        ${isBlue ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}
                      `}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PredictGrowth;