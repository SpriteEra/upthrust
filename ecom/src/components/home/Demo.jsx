

"use client";
import StylishButton from "@/common/RocketButton";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
    {
        id: 1,
        title: "Tech & Development",
        subtitle:
            "Meta Ads • Google Ads • Multi-Channel Attribution\nAvg 3.8x ROAS | Scale to $500k+/Month | Lower CAC 30–50%",
        details: [
            "Full funnel tracking setup",
            "Server-side conversion tracking",
            "Performance-focused infra",
        ],
    },
    {
        id: 2,
        title: "Creative Production",
        subtitle:
            "UGC Video • Static Design • Performance Editing • Rapid Testing\n20–30 Fresh Ads Monthly | Winners in 3–5 Days",
        details: [
            "20–30 ecommerce creatives monthly",
            "Tested on $50M+ ad spend",
            "Fast iteration to beat fatigue",
        ],
        cta: true,
    },
    {
        id: 3,
        title: "Website Design",
        subtitle:
            "Shopify Stores • CRO & Landing Pages • A/B Testing • Mobile First",
        details: [
            "High converting layouts",
            "Mobile-first UX",
            "Speed & SEO optimized",
        ],
    },
];

export default function ServicesAccordion() {
    const [open, setOpen] = useState(null);

    return (
        <div className="space-y-6 px-16 mt-20">
            {services.map((item) => {
                const isOpen = open === item.id;

                return (
                    <div
                        key={item.id}
                        onMouseEnter={() => setOpen(item.id)}
                        onMouseLeave={() => setOpen(null)}
                        className="rounded-xl bg-gray-50 p-8 cursor-pointer"
                    >
                        {/* HEADER */}
                        <div className="flex items-start justify-between relative">
                            <div>
                                <h2 className="text-4xl 3xl:text-5xl font-semibold mb-6">
                                    {item.title}
                                </h2>
                                <p className="whitespace-pre-line max-w-xl text-sm 3xl:text-base">
                                    {item.subtitle}
                                </p>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ul className="">
                                        {item.details.map((d, i) => (
                                            <li key={i} className="flex items-center gap-1 text-sm 3xl:text-base"><ArrowRight size={16} /> {d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* PLUS */}
                            <div
                                className={`text-3xl font-bold absolute right-0 top-0 transition-transform duration-300 ${isOpen ? "-rotate-45" : "rotate-0"}`}
                            >
                                +
                            </div>
                        </div>

                        {/* STYLISH BUTTON (EXACT SAME PLACE) */}
                        <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                        `}
                        >
                            <div className="mt-5">
                                <StylishButton />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
