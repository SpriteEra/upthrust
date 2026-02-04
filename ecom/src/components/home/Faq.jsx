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
            answer: "CAC is now ₹31,000+ in competitive categories. We combat this through creative diversification (testing 20+ variants monthly), multi-platform strategies (not just Meta), first-party data collection, and email/SMS for repeat purchases. Most brands see CAC drop 30-50% within 90 days through our testing framework."
        },
        {
            question: "What makes Upthrust different from other D2C agencies?",
            answer: "We don't just run ads—we build growth systems. Our approach: relentless testing, radical transparency (no vanity metrics), and revenue obsession. We've scaled D2C brands across 7+ countries and bring learnings from ₹100Cr+ in managed ad spend. Every campaign is built to boost your bottom line, not impressions."
        },
        {
            question: "What's your minimum budget and pricing structure?",
            answer: `
                <b>Packages:</b>
                <ul>
                    <li><b>Base:</b> ₹39.5K/month (fixed)</li>
                    <li><b>Starter:</b> ₹55.5K/month + 9% ad spend</li>
                    <li><b>Scale:</b> ₹85.5K/month + 3% ad spend</li>
                    <li><b>Dominate:</b> ₹1.25L/month + 5% ad spend</li>
                </ul>
                <p></br/>For meaningful results, we recommend <b>₹8-12L+ monthly ad spend</b> to generate enough data for optimization .</p>
                `
        },
        {
            question: "How do you tackle iOS 14+ tracking and attribution challenges?",
            answer: "We've cracked this for dozens of brands. Our solution: server-side tracking (CAPI), multi-touch attribution platforms (Triple Whale, Northbeam), first-party data strategies, creative volume testing, and blended ROAS analysis. We focus on true business impact, not just platform-reported numbers."
        },
        {
            question: "Can you help scale while maintaining profitability?",
            answer: "Absolutely. Scaling without burning cash is our specialty. We balance new customer acquisition with retention (email/SMS driving 25-40% of revenue), optimize unit economics at every stage, implement cohort analysis for LTV prediction, and kill unprofitable channels fast. Growth means nothing if margins disappear."
        },
        {
            question: "How long does it take to see actual results?",
            answer: `
                <b>Realistic timeline:</b>
                <ul>
                    <li><b>0-30 days:</b> Testing phase, baseline establishment</li>
                    <li><b>30-90 days:</b> Optimization, visible improvements in ROAS/CAC</li>
                    <li><b>90-180 days:</b> Fully optimized growth engine, predictable scaling</li>
                </ul>
                <p></br/>Brands with strong product-market fit often see positive ROAS by day 30-45. But sustainable growth takes 3-6 months of continuous optimization.</p>
                `
        },
        {
            question: "How do you help D2C brands stand out in saturated markets?",
            answer: "Competition is brutal—we get it. Our differentiation playbook: competitor creative analysis, unique positioning angles, creator-led content (UGC/influencer), platform diversification (Meta + Google + TikTok), conversion rate optimization, and obsessive A/B testing. We find what makes you different and amplify it."
        },
        {
            question: "Do you handle both acquisition AND retention?",
            answer: "Yes—both are critical. <b>Acquisition</b>: Paid media across Meta, Google, TikTok, Pinterest. <br/><b>Retention:</b> Email/SMS automation (welcome, cart abandonment, win-back), loyalty programs, referral systems, and post-purchase optimization. Winning D2C brands master both."
        },
        {
            question: "What results can we realistically expect?",
            answer: `
                Based on our D2C portfolio:
                <ul>
                    <li><b>29-78% reduction in CAC</b> (creative + targeting optimization)</li>
                    <li><b>2-4x increase in ROAS</b> within 90 days</li>
                    <li><b>15-50% conversion rate improvements</b> (landing page optimization)</li>
                    <li><b>25-40% revenue from email/SMS </b> (retention)</li>
                </ul>
                <p></br/>Results depend on product-market fit, competitive landscape, and budget.</p>
                `
        },
        {
            question: "How do we get started with Upthrust?",
            answer: `
                <b>Simple 3-step process: </b>
                <ul>
                    <li><b>Free Strategy Call:</b> (creative + targeting optimization)</li>
                    <li><b>Choose your package:</b> within 90 days</li>
                    <li><b>Launch in 2-3 Weeks:</b> (landing page optimization)</li>
                </ul>
                `
        }
    ];

    const toggleFAQ = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
        // setBlinkIndex(null);
    };

    const handleFAQClick = (e, index) => {


        // If FAQ is closed and click is on the div (not button), show blink
        if (!openIndexes.includes(index)) {
            // setBlinkIndex(index);
            setTimeout(() => setBlinkIndex(null), 600);
        }
    };

    const renderFAQ = (faq, index) => (
        <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            onClick={(e) => toggleFAQ(index)}
            className="bg-white rounded-xl 3xl:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-[#e1e1e1] relative min-h-22.5"
        >
            <div className="p-4 md:p-6 md:px-8 max-w-[87%]">
                <div className="flex items-start justify-between gap-4 ">
                    <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1 flex-shrink-0 max-md:hidden">
                            <Info className='size-4.5 3xl:size-5' />
                        </div>
                        <p className="font-semibold text-base 3xl:text-xl tracking-[-0.02em]">
                            {faq.question}
                        </p>
                    </div>

                    <button
                        title='Show/Hide'
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
                        <p className="text-sm 3xl:text-base leading-relaxed" dangerouslySetInnerHTML={{
                            __html: faq.answer || "Content coming soon..."
                        }}>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex items-center justify-center px-2 md:px-20 3xl:mt-16">
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