"use client";
import { Curve1 } from "@/common/HandWritten";
import StylishButton from "@/common/RocketButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const services = [
    {
        id: 1,
        title: "Tech & Development",
        subtitle:
            "Meta Ads • Google Ads • Multi-Channel Attribution \nAvg 3.8x ROAS | Scale to $500K+/Month | Lower CAC 30-50%",
        details: [
            {
                before: "Ecommerce ad campaigns averaging",
                bold: "3.8x ROAS",
                after: "",
            },
            {
                before: "Daily optimization by ecommerce specialists",
                bold: "",
                after: "",
            },
            {
                before: "Performance creative testing",
                bold: "(20–30 new ads/month)",
                after: "",
            },
        ],
        tagText1: "Ecommerce brands speding",
        tagText2: "$30K+/month",
    },

    {
        id: 2,
        title: "Creative Production",
        subtitle:
            "UGC Video • Static Design • Performance Editing • Rapid Testing\n20–30 Fresh Ads Monthly | Winners in 3–5 Days | Beat Ad Fatigue",
        details: [
            {
                before: "",
                bold: "20–30",
                after: " ecommerce-focused creatives monthly",
            },
            {
                before: "Tested on",
                bold: "$50M+",
                after: "in ecommerce ad spend",
            },
            {
                before: "Fast iteration for ecommerce brands",
                bold: "",
                after: "",
            },
        ],
        tagText1: "Ecommerce brands tried of",
        tagText2: "creative fatique",
    },

    {
        id: 3,
        title: "Website Design",
        subtitle:
            "Shopify Stores • CRO & Landing Pages • A/B Testing • Mobile-First\n10–15% Revenue Lifts | Sub-2 Second Speed | Conversion-Focused",
        details: [
            {
                before: "High-converting ecommerce",
                bold: "websites",
                after: "",
            },
            {
                before: "Ecommerce",
                bold: "brand identity",
                after: "development",
            },
            {
                before: "",
                bold: "Shopify",
                after: "design for online stores",
            },
        ],
        tagText1: "New ecommerce brands",
        tagText2: "or rebranding",
    },

    {
        id: 4,
        title: "Marketplace Management",
        subtitle:
            "Shopify Stores • CRO & Landing Pages • A/B Testing • Mobile-First \n10-15% Revenue Lifts | Sub-2 Second Speed | Conversion-Focused",
        details: [
            {
                before: "Ecommerce for",
                bold: "PPC management ",
                after: "marketplaces",
            },
            {
                before: "Listing optimization for ",
                bold: "online sales",
                after: "",
            },
            {
                before: "",
                bold: "Full ecommerce",
                after: "account management",
            },
        ],
        tagText1: "Ecommerce brands expanding",
        tagText2: "to market place",
    },
];



export default function ServicesAccordion() {
    const [open, setOpen] = useState(null);


    return (
        <div className="space-y-4 xs:space-y-8 3xl:space-y-10 px-3 xs:px-8 lg:px-16 xs:mt-20 relative">

            <Curve1
                lines={[
                    {
                        parts: [
                            { type: "text", text: "Here's how your" },
                        ]
                    },
                    {
                        parts: [
                            { type: 'highlight', text: 'ROAS', bgColor: '#FF4500' },
                            { type: "text", text: "doubles up !!" },
                        ]
                    },

                ]}
                imageClassName='left-14 top-18 3xl:top-20 !h-16 3xl:!h-20 w-full -rotate-10'
                curvePosition="end"
                curveFlipHorizontal={true}
                curveFlipVertical={false}
                tiltAngle={7}
                imageIndex={2}
                className="absolute right-25 -top-34 3xl:-top-35 "

            />
            {services.map((item, index) => {
                const isOpen = open === item.id;

                return (
                    <div
                        key={item.id}
                        onMouseEnter={() => setOpen(item.id)}
                        onMouseLeave={() => setOpen(null)}
                        onClick={() => {
                            if (isOpen) {
                                setOpen(null)
                            }
                            else {
                                setOpen(item.id)
                            }
                        }}
                        className={`rounded-xl p-3 xs:p-8 border cursor-pointer transition-colors duration-300 ease-in-out ${isOpen ? 'border-black/10 bg-white' : 'border-[#F9F9F9] bg-[#F9F9F9]'}`}           >
                        {/* HEADER */}
                        <div className="flex items-start  relative">
                            <div className="max-xs:min-w-full xs:w-1/2">
                                <p className="text-4xl 3xl:text-5xl font-semibold mb-3 xs:mb-6 max-xs:pr-10">
                                    {item.title}
                                </p>
                                <span className="whitespace-pre-line max-w-xl text-sm 3xl:text-base">
                                    {item.subtitle}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} relative`}
                            >
                                <div className=" ">
                                    <ul className="flex flex-col">
                                        {item.details.map((d, i) => (
                                            <li key={i} className="inline-flex items-center gap-1 text-sm 3xl:text-base whitespace-nowrap">

                                                <ArrowRight size={16} />
                                                <span>{d.before} </span>

                                                <span className="font-semibold">{d.bold}</span>

                                                <span> {d.after}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <Curve1
                                    lines={[
                                        {
                                            parts: [
                                                { type: 'highlight', text: 'perfect for', bgColor: '#FF4500' },
                                            ]
                                        },
                                        {
                                            parts: [
                                                { type: "text", text: item.tagText1 },
                                            ]
                                        },
                                        {
                                            parts: [
                                                { type: "text", text: item.tagText2 },
                                            ]
                                        },

                                    ]}
                                    imageClassName='-left-30 top-10 3xl:top-12 !h-16 3xl:!h-20 w-full rotate-75 scale-x-[-1]'
                                    curvePosition="end"
                                    curveFlipHorizontal={true}
                                    curveFlipVertical={false}
                                    tiltAngle={7}
                                    imageIndex={2}
                                    className="absolute right-10 -bottom-12 3xl:-bottom-14 3xl:-bottom-14 "

                                />
                            </div>

                            {/* <div
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <ul className="">
                                        {item.details.map((d, i) => (
                                            <li key={i} className="flex items-center gap-1 text-sm 3xl:text-base">
                                                <ArrowRight size={16} /> {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div> */}


                            {/* PLUS */}
                            {
                                index === 0 &&
                                <div className="absolute -right-3 -top-1 3xl:-top-2 max-lg:hidden">

                                    <Image className="size-12 3xl:size-14 shrink-0 " src={'/ecom/curves/circle.webp'} alt="circle image" width={100} height={100} />

                                </div>
                            }
                            <div
                                className={`text-3xl font-bold absolute right-0 top-0 transition-transform duration-300 ${isOpen ? "-rotate-45" : "rotate-0"}`}
                            >
                                +
                            </div>
                        </div>

                        {/* EXPANDABLE CONTENT - Now below header */}

                        {/* STYLISH BUTTON */}
                        <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <div className="mt-4 xs:mt-8">
                                <StylishButton />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}