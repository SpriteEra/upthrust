"use client";
import React, { useState } from "react";
import { Plus, Rocket } from "lucide-react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const MomentumLeaderBadge = ({ width = 200, height = 240 }) => {
        return (
            <svg
                width={width}
                height={height}
                viewBox="0 0 200 240"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Shield Shape */}
                <path
                    d="M10 10 H190 V150 L100 220 L10 150 Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="4"
                />

                {/* Top Bar */}
                <rect
                    x="10"
                    y="10"
                    width="180"
                    height="40"
                    fill="white"
                    stroke="black"
                    strokeWidth="4"
                />

                {/* Right Corner Badge */}
                <rect x="150" y="10" width="40" height="40" fill="#F44336" />
                <text
                    x="170"
                    y="38"
                    fontSize="18"
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                >
                    G²
                </text>

                {/* Title Text */}
                <text
                    x="100"
                    y="38"
                    fontSize="16"
                    textAnchor="middle"
                    fontWeight="bold"
                >
                    SUMMER 2025
                </text>

                {/* Main Text */}
                <text
                    x="100"
                    y="110"
                    fontSize="28"
                    textAnchor="middle"
                    fontWeight="bold"
                >
                    Momentum
                </text>
                <text
                    x="100"
                    y="145"
                    fontSize="28"
                    textAnchor="middle"
                    fontWeight="bold"
                >
                    Leader
                </text>

                {/* Bottom Stripes */}
                <path
                    d="M10 150 L100 210 L190 150"
                    stroke="#FFC107"
                    strokeWidth="10"
                    fill="none"
                />
                <path
                    d="M20 145 L100 200 L180 145"
                    stroke="#FF5722"
                    strokeWidth="10"
                    fill="none"
                />
            </svg>
        );
    };

    const faqs = [
        { question: "What kind of companies do you usually work with?" },
        { question: "What services do you actually provide?" },
        { question: "How do we know which service is right for us?" },
        { question: "Do you work on existing products or only new ones?" },
        { question: "What does the first engagement usually look like?" },
        { question: "How involved do we need to be during the process?" },
        { question: "How long does a typical project take?" },
        { question: "Is there a minimum commitment?" },
        { question: "Do you offer development as well?" },
    ];

    const badges = [
        {
            category: "MARKETING",
            title: "Users Love Us",
            subtitle: "FALL 2023 LEADER",
        },
        {
            category: "SERVICE APPS",
            title: "Momentum Leader",
            subtitle: "FALL 2023 LEADER",
        },
        {
            category: "SUPPLIER",
            title: "Best Est. ROI",
            subtitle: "FALL 2023 LEADER",
        },
        {
            category: "SUPPLIER",
            title: "Easiest To Do Business With",
            subtitle: "FALL 2023 LEADER",
        },
        {
            category: "SUPPLIER",
            title: "High Performer",
            subtitle: "FALL 2023",
        },
        {
            category: "SUPPLIER",
            title: "Highest User Adoption",
            subtitle: "FALL 2023",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="min-h-screen bg-[#FFFEF9] px-6 md:px-16 py-12">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1 mr-20">
                        <div className="bg-[#F9F9F9] rounded-3xl px-8 md:p-10 border border-gray-100">
                            <div className="flex items-center gap-4 mb-8">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Akshay Gera"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Akshay Gera
                                    </h2>
                                    <p className="text-gray-600">CEO</p>
                                </div>
                            </div>
                            <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 leading-relaxed">
                                "Got more questions or curious about what's ahead? Let's connect
                                on LinkedIn!"
                            </p>
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-sm"></div>
                                <button className="relative bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-gray-900 transition-colors group">
                                    <span>Book A</span>
                                    <div className="bg-white p-1.5 rounded">
                                        <Rocket className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <span>Strategy Call</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-5xl md:text-6xl font-light mb-2">Frequently</h1>
                        <h2 className="text-5xl md:text-6xl italic font-light mb-12">
                            Asked <span className="font-serif">Questions</span>
                        </h2>

                        <div className="space-y-1">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-600">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg group"
                                    >
                                        <span className="text-lg md:text-xl text-black pr-4 font-medium">
                                            {faq.question}
                                        </span>
                                        <Plus
                                            className={`w-5 h-5 text-black flex-shrink-0 transition-transform group-hover:text-gray-600 ${openIndex === index ? "rotate-45" : ""
                                                }`}
                                        />
                                    </button>

                                    {openIndex === index && (
                                        <div className="px-4 pb-6 text-gray-600">
                                            <p>Answer content would go here for: {faq.question}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER SECTION */}
            <div className="bg-black pt-24 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* CTA CARD */}
                    <div className="bg-white rounded-[40px] px-8 md:px-16 py-14 text-center relative overflow-hidden mb-20">
                        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4 leading-tight">
                            Ready To Move Forward <br className="hidden md:block" />
                            With Clarity?
                        </h2>

                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Schedule a free 30-minute consultation. Tell us where you're
                            stuck. We'll tell you what to fix first, and what can wait.
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center mb-10">
                            <button className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-gray-900 transition group">
                                <span>Book A</span>
                                <span className="bg-white text-black p-1.5 rounded">
                                    <Rocket className="w-4 h-4 text-orange-500" />
                                </span>
                                <span>Strategy Call</span>
                            </button>
                        </div>

                        <hr className="border-t-2 border-gray-300 mx-10 my-8" />
                        <div className="flex items-center justify-around mx-10 text-gray-800">
                            <div className="flex items-center gap-2 font-bold">
                                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white">
                                    ✓
                                </span>
                                <span>30 Minutes</span>
                            </div>

                            <div className="flex items-center gap-2 font-bold">
                                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white">
                                    ✓
                                </span>
                                <span>Clear Direction</span>
                            </div>

                            <div className="flex items-center gap-2 font-bold">
                                <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white">
                                    ✓
                                </span>
                                <span>No Obligation</span>
                            </div>
                        </div>
                    </div>

                    {/* BADGES ROW */}
                    <div className="flex flex-wrap justify-center items-end gap-10">
                        <MomentumLeaderBadge width={120} height={144} />
                        <MomentumLeaderBadge width={120} height={144} />
                        <MomentumLeaderBadge width={120} height={144} />
                        <MomentumLeaderBadge width={120} height={144} />
                        <MomentumLeaderBadge width={120} height={144} />
                        <MomentumLeaderBadge width={120} height={144} />
                    </div>
                </div>
            </div>
        </>
    );
}