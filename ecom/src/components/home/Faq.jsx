"use client"
import { Info } from 'lucide-react';
import { useState, useRef } from 'react';

export default function FAQ() {
    const [openIndexes, setOpenIndexes] = useState([0]);
    const [blinkIndex, setBlinkIndex] = useState(null);
    const faqRefs = useRef([]);

    const faqs = [
        {
            question: "How do you handle rising CAC (Customer Acquisition Costs)?",
            answer: "CAC is now ₹91,000+ in competitive categories. We combat this through creative diversification (testing 20+ variants monthly), multi-platform strategies (not just Meta), first-party data collection, and email/SMS for repeat purchases. Most brands see CAC drop 30-50% within 90 days through our testing framework."
        },
        {
            question: "How long does it take to see actual results?",
            answer: ""
        },
        {
            question: "How do you help D2C brands stand out in saturated markets?",
            answer: ""
        },
        {
            question: "What makes Upthrust different from other D2C agencies?",
            answer: ""
        },
        {
            question: "Do you handle both acquisition AND retention?",
            answer: ""
        },
        {
            question: "What's your minimum budget and pricing structure?",
            answer: ""
        },
        {
            question: "What results can we realistically expect?",
            answer: ""
        },
        {
            question: "How do you tackle iOS 14+ tracking and attribution challenges?",
            answer: ""
        },
        {
            question: "How do we get started with Upthrust?",
            answer: ""
        },
        {
            question: "Can you help scale while maintaining profitability?",
            answer: ""
        }
    ];

    const toggleFAQ = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
        setBlinkIndex(null);
    };

    const handleFAQClick = (e, index) => {
        // Check if click was on the button
        const button = e.currentTarget.querySelector('button');
        if (button && button.contains(e.target)) {
            return; // Let button handle it
        }

        // If FAQ is closed and click is on the div (not button), show blink
        if (!openIndexes.includes(index)) {
            setBlinkIndex(index);
            setTimeout(() => setBlinkIndex(null), 600);
        }
    };

    const renderFAQ = (faq, index) => (
        <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            onClick={(e) => handleFAQClick(e, index)}
            className="bg-white rounded-xl 3xl:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-[#e1e1e1] relative min-h-22.5"
        >
            <div className="p-4 md:p-6 md:px-8 max-w-[87%]">
                <div className="flex items-start justify-between gap-4 ">
                    <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1 flex-shrink-0 max-md:hidden">
                            <Info className='size-4.5 3xl:size-5' />
                        </div>
                        <h3 className="font-semibold text-base 3xl:text-xl leading-snug">
                            {faq.question}
                        </h3>
                    </div>

                    <button
                        onClick={() => toggleFAQ(index)}
                        className={`absolute top-5 3xl:top-7 right-5 3xl:right-7 size-7 3xl:size-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndexes.includes(index)
                            ? "bg-[#ff4d00] text-white"
                            : "bg-black/5 text-black/30"
                            } ${blinkIndex === index ? "animate-ripple" : ""}`}
                    >
                        {openIndexes.includes(index) ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M4 8H12"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M8 4V12M4 8H12"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndexes.includes(index)
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="md:pl-8 md:pr-10">
                        <p className="text-sm 3xl:text-base leading-relaxed">
                            {faq.answer || "Content coming soon..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center px-2 md:px-20">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-x-14 3xl:gap-x-18 gap-y-5 md:gap-y-7 3xl:gap-y-6">

                    {/* LEFT COLUMN */}
                    <div className="flex-1 space-y-5 md:space-y-7 3xl:space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 === 0)
                            .map((faq, index) => renderFAQ(faq, index * 2))}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1 space-y-5 md:space-y-7 3xl:space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 === 1)
                            .map((faq, index) => renderFAQ(faq, index * 2 + 1))}
                    </div>

                </div>
            </div>

        </div>
    );
}