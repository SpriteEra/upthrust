
import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Tooltip from '@/utils/Tooltip';


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
    return (
        <div className="w-full bg-white md:py-10 px-3 md:px-16 flex flex-col items-center">
            {/* Container for Cards and Table to share the same Grid */}

            <div className='w-full grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-stretch md:p-5 md:bg-[#F4F4F4] md:sticky top-0 z-51'>
                <div className="md:col-start-1"></div> {/* Spacer for Label Column */}

                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-5 pb-3 3xl:p-6 m-2 rounded-md bg-white 3xl:rounded-2xl max-md:border border-gray-300 md:border-t-[3px] md:border-black max-w-80  md:max-w-48 3xl:max-w-55 w-full mx-auto`}
                    >
                        <p className="text-base 3xl:text-xl font-medium mb-0 md:mb-4 max-md:text-[#1D2127]">{plan.name} <span className='md:hidden'>Plan</span></p>
                        <div className="text-2xl 3xl:text-3xl font-semibold tracking-tight ">{plan.price}
                            <span className='text-[#464646] font-light text-xs md:hidden ml-2'>
                                {plan.details}
                            </span>
                        </div>
                        <span className="max-md:hidden text-[10px] 3xl:text-xs mb-8 uppercase">{plan.details}</span>

                        {/* Features */}
                        <ul className="space-y-1 md:hidden pt-4 pb-12">
                            {COMPARISON_DATA.map((group) =>
                                group.items.map((item, i) => {
                                    const value = item.values[index];

                                    if (value === "-") return null;

                                    return (
                                        <li
                                            key={group.category + i}
                                            className="flex gap-2 text-sm text-[#1D2127]"
                                        >

                                            <span className="mt-0.5 flex p-[3px] h-fit items-center justify-center rounded-full bg-[#64AE4B] text-white shrink-0">
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

                        <button className="w-full bg-black text-white py-2 3xl:py-3 rounded 3xl:rounded-md text-sm 3xl:text-lg font-semibold hover:bg-gray-800 transition-colors">
                            <span className='max-md:hidden'>Start Here</span>
                            <span className='md:hidden'>Get Started</span>
                        </button>
                    </div>
                ))}

            </div>
            <div className="max-md:hidden w-full grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-stretch  mt-4">
                {/* Row 2: Table Body */}
                {COMPARISON_DATA.map((section) => (
                    <React.Fragment key={section.category}>
                        {/* Category Subheader */}
                        <div className="col-span-5 bg-[#F4F4F4] py-2.5 3xl:py-3 px-2.5 3xl:px-3 rounded-md text-base 3xl:text-xl font-semibold capitalize tracking-tight">
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
        </div>
    );
};