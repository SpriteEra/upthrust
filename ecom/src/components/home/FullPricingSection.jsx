"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Tooltip from '@/utils/Tooltip';
import LeadFormModal from '@/components/LeadModal';


const pricingPlans = [
    { name: 'Base', price: '₹39.5K', details: '12% OF AD SPEND' },
    { name: 'Starter', price: '₹55.5K', details: '+ 9% AD SPEND' },
    { name: 'Scale', price: '₹85.5K', details: '+3% AD SPEND' },
    { name: 'Dominate', price: '₹1.25L', details: '+5% AD SPEND' },
];

const COMPARISON_DATA = [
    {
        category: "Setup & Strategy",
        items: [
            { name: "Audience Research & ICP Building", values: ["check", "check", "check", "check"], hover: "We identify your highest-value customers and build targeting profiles that actually convert.", },
            { name: "Offer Creation & Scaling", values: ["-", "-", "check", "check"], hover: "We craft irresistible offers (bundles, discounts, AOV boosters) and test what sells best." },
            { name: "UGC Strategy & Production", values: ["-", "-", "-", "2 UGCs"], hover: "We plan, shoot, and produce scroll-stopping user-generated content that drives sales." },
            { name: "PR & Influencer Collaborations", values: ["-", "-", "Up to 3/qtr", "check"], hover: "We find, negotiate, and manage influencer partnerships that deliver measurable ROI." },
        ]
    },
    {
        category: "Execution",
        items: [
            { name: "Meta Ads", values: ["check", "check", "check", "check"], hover: "We run high-performing Facebook & Instagram campaigns optimized for ROAS, not vanity metrics." },
            { name: "Google Ads", values: ["-", "check", "check", "check"], hover: "We manage Search, Shopping, Display, and YouTube ads to capture high-intent buyers." },
            { name: "Landing Pages & CRO", values: ["-", "-", "-", "check"], hover: "We design, A/B test, and optimize landing pages to convert more visitors into customers." },
            { name: "Email Marketing", values: ["-", "-", "check", "check"], hover: "We build automated flows (welcome, cart recovery, post-purchase) that print money on autopilot." },
            { name: "Whatsapp Marketing", values: ["-", "-", "-", "check"], hover: "We run personalized broadcast campaigns and abandoned cart recovery via WhatsApp." },
            { name: "Amazon Account Management", values: ["-", "-", "-", "check"], hover: "We handle your Amazon storefront, ads, listings, and optimization to maximize marketplace sales." },
            { name: "Photography", values: ["-", "-", "-", "check"], hover: "We shoot professional product photos optimized for ads, Amazon, and your website." },
            { name: "Video Editing", values: ["-", "-", "check", "check"], hover: "We edit UGC, product demos, and ads with fast cuts, captions, and hooks that stop the scroll." },
        ]
    },
    {
        category: "Analytics & Tracking",
        items: [
            { name: "Analytics & Attribution Setup", values: ["Basic (Pixel + GA4)", "check", "check", "check"], hover: "We implement proper tracking (GA4, Facebook Pixel, UTMs) so you know exactly what's working." },
        ]
    },
    {
        category: "Optimization & Reporting",
        items: [
            { name: "Creative Iterations", values: ["1x / month", "2x / month", "Every 10 days", "Every 6 days"], hover: "We refresh ad creatives weekly based on performance data to beat creative fatigue." },
            { name: "Monthly Reporting", values: ["check", "-", "check", "check"], hover: "You get a comprehensive monthly report with insights, wins, learnings, and next steps." },
            { name: "Weekly Reporting", values: ["-", "-", "check", "check"], hover: "You get weekly performance snapshots with key metrics and quick action items." },
            { name: "Daily Updates", values: ["-", "check", "check", "check"], hover: "You get weekly performance snapshots with key metrics and quick action items." },
            { name: "Account Manager", values: ["-", "-", "check", "Dedicated"], hover: "You get a dedicated point of contact who knows your business and responds within 2 hours." },
        ]
    }
];






export const FullPricingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-full bg-white lg:py-10 px-3 lg:px-16 flex flex-col items-center">
            {/* Container for Cards and Table to share the same Grid */}

            <div className='w-full grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-stretch lg:p-5 lg:bg-[#F4F4F4] lg:sticky top-18 3xl:top-33.5 z-51'>
                <div className="lg:col-start-1"></div> {/* Spacer for Label Column */}

                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-5 pb-3 3xl:p-6 m-2 rounded-xl bg-white 3xl:rounded-lg max-lg:border border-gray-300 lg:border-t-[3px] lg:border-black max-w-100  lg:max-w-48 3xl:max-w-60 w-full mx-auto`}
                    >
                        <p className="text-lg lg:text-base 3xl:text-xl font-semibold lg:font-medium mb-0 lg:mb-4 max-lg:text-[#1D2127] tracking-[-0.02em]  leading-7.5">{plan.name} <span className='lg:hidden'>Plan</span></p>
                        <div className="text-[32px] xl:text-2xl 3xl:text-[32px] font-semibold 3xl:tracking-[-0.02em] leading-9.5 text-[#1d2127]">{plan.price}
                            <span className='text-[#464646] font-light text-xs lg:hidden ml-2  leading-4.5 '>
                                {plan.details}
                            </span>
                        </div>
                        <span className="max-lg:hidden text-[#464646] text-xs mb-8 uppercase leading-4.5 ">{plan.details}</span>

                        {/* Features */}
                        <ul className="space-y-1 lg:hidden pt-4 pb-12">
                            {COMPARISON_DATA.map((group) =>
                                group.items.map((item, i) => {
                                    const value = item.values[index];

                                    if (value === "-") return null;

                                    return (
                                        <li
                                            key={group.category + i}
                                            className="flex gap-2 text-base text-[#1D2127]"
                                        >

                                            <span className="mt-1 flex p-[3px] h-fit items-center justify-center rounded-full bg-[#64AE4B] text-white shrink-0">
                                                <Check className='size-2' strokeWidth={4} />
                                            </span>


                                            <span>
                                                {item.name}
                                                {value !== "check" && ` - ${value}`}
                                            </span>
                                        </li>
                                    );
                                })
                            )}
                        </ul>

                        <button className="w-full bg-black text-white py-3 3xl:py-3 rounded-lg 3xl:rounded-md text-base xl:text-sm 3xl:text-base font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <span className='max-lg:hidden'>Start Here</span>
                            <span className='lg:hidden'>Get Started</span>
                        </button>
                    </div>
                ))}

            </div>
            <div className="max-lg:hidden w-full grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-stretch  mt-4">
                {/* Row 2: Table Body */}
                {COMPARISON_DATA.map((section) => (
                    <React.Fragment key={section.category}>
                        {/* Category Subheader */}
                        <div className="col-span-5 bg-[#F4F4F4] py-2.5 3xl:py-3 px-2.5 3xl:px-3 rounded-md text-base 3xl:text-xl font-semibold capitalize 3xl:tracking-[-0.02em] 3xl:leading-7.5">
                            {section.category}
                        </div>

                        {section.items.map((item, iIndex) => (
                            <React.Fragment key={item.name}>
                                <div className={`py-3.5 3xl:py-4 px-2.5 3xl:px-3 flex items-center gap-2 ${iIndex !== section.items.length - 1 ? "border-b" : ""} border-gray-200 font-medium text-sm 3xl:text-base`}>
                                    {item.name}

                                    <Tooltip content={item.hover} maxWidth='w-[200px]' multiline={true} delay={200} position='right'>
                                        <span className="text-white bg-[#b7b7b7] rounded-full size-4 3xl:size-4.5 font-light text-xs 3xl:text-base flex items-center justify-center" >?</span>
                                    </Tooltip>
                                </div>
                                {item.values.map((val, vIndex) => (
                                    <div
                                        key={vIndex}
                                        className={`py-3.5 3xl:py-4 px-2.5 3xl:px-3 flex justify-center items-center ${iIndex !== section.items.length - 1 ? "border-b" : ""} border-gray-200 `}
                                    >
                                        {val === "check" ? (
                                            <div className="bg-[#78B478] rounded-full p-0.5 3xl:p-1"><Check className="text-white size-3.5 3xl:size-4.5" strokeWidth={3} /></div>
                                        ) : (
                                            <span className="text-sm 3xl:text-base text-back-400">{val}</span>
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            {isModalOpen && (
                <LeadFormModal handleClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};