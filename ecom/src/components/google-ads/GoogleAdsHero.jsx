'use client'
import React, { useState, useEffect } from 'react';

const GoogleAdsHero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const words = [
        { text: 'PPC', color: '#10B981' }, // Green
        { text: 'Google Ads', color: '#3B82F6' }, // Blue
        { text: 'Bing Ads', color: '#F59E0B' } // Orange
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <style jsx>{`
                @keyframes slideOut {
                    0% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }

                @keyframes slideIn {
                    0% {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animate-slideOut {
                    animation: slideOut 0.5s ease-in-out forwards;
                }

                .animate-slideIn {
                    animation: slideIn 0.5s ease-in-out forwards;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-start justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                <span className="text-2xl font-bold">CG</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-semibold">4.9</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-8">PPC Agency that kills competitors</p>

                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                            Turn Wasted Ad Spend<br />
                            Into Real Revenue with<br />
                            <span className="inline-block relative overflow-hidden align-bottom h-20 w-64">
                                <span
                                    key={`current-${currentWord}`}
                                    className="absolute whitespace-nowrap left-0 bottom-0 w-full animate-slideOut font-bold"
                                    style={{ color: words[currentWord].color }}
                                >
                                    {words[currentWord].text}
                                </span>
                                <span
                                    key={`next-${currentWord}`}
                                    className="absolute left-0 bottom-0 w-full animate-slideIn font-bold whitespace-nowrap"
                                    style={{ color: words[(currentWord + 1) % words.length].color }}
                                >
                                    {words[(currentWord + 1) % words.length].text}
                                </span>
                            </span>
                        </h1>

                        {/* CTA Button */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
                            Get a Free Google Ads Audit
                        </button>

                        {/* Trusted Brands */}
                        <div className="mt-12">
                            <p className="text-sm text-gray-600 mb-6">Trusted By Popular Brands</p>
                            <div className="grid grid-cols-5 gap-6 items-center">
                                <div className="text-gray-400 font-bold text-xl">HARLEY</div>
                                <div className="text-gray-400 font-bold text-xl">L'OREAL</div>
                                <div className="text-gray-400 font-bold text-xl">zomato</div>
                                <div className="text-gray-400 font-bold text-xl">DELL</div>
                                <div className="text-gray-400 font-bold text-xl">VWO</div>
                            </div>
                            <div className="grid grid-cols-5 gap-6 items-center mt-4">
                                <div className="text-gray-400 text-2xl">⚡</div>
                                <div className="text-gray-400 font-bold text-xl">BOSCH</div>
                                <div className="text-gray-400 font-bold text-xl">CYBLE</div>
                                <div className="text-gray-400 font-bold text-xl">Welspun</div>
                                <div className="text-gray-400 font-bold text-xl">OK</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="flex-shrink-0 w-full max-w-md">
                        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                            <div className="bg-white rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-lg mb-2">See Where Your Budget Leaks</h3>
                                <p className="text-sm text-gray-600">
                                    Most brands waste ₹2L-10L on fixable ad errors. We find yours in 48hrs.
                                </p>
                            </div>

                            {/* Form Fields Placeholder */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone Number (optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Your answer"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Work Email Address*</label>
                                    <input
                                        type="email"
                                        placeholder="Your answer"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Company Size*</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                                        Next
                                    </button>
                                    <button className="text-green-700 hover:text-green-800 font-medium">
                                        Clear form
                                    </button>
                                    <span className="text-sm text-gray-600">Page 1 of 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Top Section */}
                    <div>
                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                                <span className="text-xl font-bold">CG</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold">4.9</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">PPC Agency that kills competitors</p>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                            Turn Wasted<br />
                            Ad Spend<br />
                            Into Real<br />
                            Revenue with<br />
                            <span className="inline-block relative overflow-hidden align-bottom h-12 w-48">
                                <span
                                    key={`current-mobile-${currentWord}`}
                                    className="absolute left-0 bottom-0 w-full animate-slideOut font-bold"
                                    style={{ color: words[currentWord].color }}
                                >
                                    {words[currentWord].text}
                                </span>
                                <span
                                    key={`next-mobile-${currentWord}`}
                                    className="absolute left-0 bottom-0 w-full animate-slideIn font-bold"
                                    style={{ color: words[(currentWord + 1) % words.length].color }}
                                >
                                    {words[(currentWord + 1) % words.length].text}
                                </span>
                            </span>
                        </h1>

                        {/* CTA Button */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-base transition-colors mb-8 w-full sm:w-auto">
                            Get a Free Google Ads Audit
                        </button>

                        {/* Trusted Brands */}
                        <div className="mb-8">
                            <p className="text-xs text-gray-600 mb-4">Trusted By Popular Brands</p>
                            <div className="grid grid-cols-5 gap-3 items-center text-xs">
                                <div className="text-gray-400 font-bold">HARLEY</div>
                                <div className="text-gray-400 font-bold">L'OREAL</div>
                                <div className="text-gray-400 font-bold">zomato</div>
                                <div className="text-gray-400 font-bold">DELL</div>
                                <div className="text-gray-400 font-bold">VWO</div>
                            </div>
                            <div className="grid grid-cols-5 gap-3 items-center mt-2 text-xs">
                                <div className="text-gray-400">⚡</div>
                                <div className="text-gray-400 font-bold">BOSCH</div>
                                <div className="text-gray-400 font-bold">CYBLE</div>
                                <div className="text-gray-400 font-bold">Welspun</div>
                                <div className="text-gray-400 font-bold">OK</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6">
                        <div className="bg-white rounded-xl p-5 mb-5">
                            <h3 className="font-bold text-base mb-2">Find Your Wasted Ad Spend</h3>
                            <p className="text-sm text-gray-600">
                                Average business loses 2L-10L on fixable mistakes. Book your free audit below.
                            </p>
                        </div>

                        {/* Form Fields Placeholder */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Your Name*</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsHero;