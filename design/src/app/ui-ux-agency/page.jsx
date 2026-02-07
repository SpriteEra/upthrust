import { Curve1 } from "@/common/HandWritten";
import Heading from "@/common/Heading";
import StylishButton from "@/common/RocketButton";
import Navbar from "@/components/Navbar";
import AnimatedLogoCarousel from "@/components/uiux/AnimatedLogoCarousel";
import { CutCornerBackground } from "@/components/uiux/CutBox";
import FaqUiUx from "@/components/uiux/FaqUiUx";
import FinalProducts from "@/components/uiux/FinalProducts";
import GrowthStories from "@/components/uiux/GrowthStories";
// import { InvertedRadiusBox } from "@/components/uiux/InvertedRadiusBox";
import OurDesigns from "@/components/uiux/OurDesigns";
import ReadyToMoveUiUx from "@/components/uiux/ReadyToMoveUiUx";
import ProcessFlow from "@/components/uiux/SustainableSteps";
import TestimonialsWithVideo from "@/components/uiux/TestimonialsWithVideo";
import UIUXHero from "@/components/uiux/UIUXHero";
import WorkingWithUs from "@/components/uiux/WorkingWithUs";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "UX & Product Design Agency for B2B Products | Upthrust",
    description: "We design conversion-focused UX and product experiences for B2B companies—reducing friction, increasing clarity, and driving measurable growth.",

    keywords: [
        "UX design agency for B2B products",
    ],

    // authors: [{ name: "Upthrust" }],
    // creator: "Upthrust",
    // publisher: "Upthrust",

    metadataBase: new URL("https://www.upthrust.design/ui-ux-agency"),

    alternates: {
        canonical: "https://www.upthrust.design/ui-ux-agency",
    },

    openGraph: {
        title: "UX & Product Design Agency for B2B Products | Upthrust",
        description: "We design conversion-focused UX and product experiences for B2B companies—reducing friction, increasing clarity, and driving measurable growth.",

        url: "https://www.upthrust.design/ui-ux-agency",
        siteName: "Upthrust",
        images: [
            {
                url: "/ecom/ecom-opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "UX & Product Design Agency for B2B Products | Upthrust",
        description: "We design conversion-focused UX and product experiences for B2B companies—reducing friction, increasing clarity, and driving measurable growth.",
        images: ["/ecom/ecom-opengraph-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    }
};

const navLinks = [
    { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "Why Upthrust", href: "#why-upthrust" },
    { name: "Here From Them", href: "#here-from-them" },
    { name: "FAQs", href: "#faqs" },
];

const traficToRevenue = [
    {
        buttonText: "Low conversions?",
        title: "Users sign up… then disappear?",
        description:
            "High traffic means nothing if users leave before seeing value. Unclear messaging, and friction-heavy UX quietly kill conversions.",
        value: "+42%",
        valueText1: "average ",
        valueText2: "conversion growth",
    },
    {
        buttonText: "POOR USER EXPERIENCE?",
        title: "Your product works, your UX doesn’t.",
        description:
            "When navigation feels complex or actions aren’t obvious, users hesitate. Every extra step costs trust, time, and revenue.",
        value: "+47%",
        valueText1: "Reduction in user drop ",
        valueText2: "offs after redesign",
    },
    {
        buttonText: "Upthrust as the Solution",
        title: "That’s where Upthrust comes in.",
        description:
            "We design conversion-focused experiences The result? Users move faster, understand quicker, and convert more.",
        value: "5.13X",
        valueText1: "Average increase in ",
        valueText2: "conversion rate",
    },
];

const page = () => {
    return (
        <main>
            <Navbar items={navLinks} />
            <div className=" bg-black">
                <UIUXHero />
                <AnimatedLogoCarousel />
            </div>
            <div className="flex flex-col mt-26 3xl:mt-30 relative scroll-mt-30 3xl:scroll-mt-35" id='case-studies'>
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "This is what" },
                                {
                                    type: "highlight",
                                    text: "clarity + execution",
                                    bgColor: "#FF4500",
                                },
                            ],
                        },
                        {
                            parts: [{ type: "text", text: "looks like." }],
                        },
                    ]}
                    imageClassName="right-8 top-14 3xl:top-16"
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={-10}
                    className="absolute top-20 3xl:top-35 left-10 xl:left-35 3xl:left-25 max-w-[300px] 3xl:max-w-[350px]"
                />
                <Heading

                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "Growth Stories" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "Powered" },
                                { type: "italic", text: "By Design" },
                            ],
                        },
                    ]}
                    label="Case studies"
                    subtitle="Explore how our work helped companies improve conversions, retention, and revenue."
                    subTitleCss="max-w-lg 3xl:max-w-xl"
                />
                <div className="flex items-center justify-center w-full my-8 3xl:mb-20 3xl:mt-6">
                    <StylishButton text1="Book A" text2="Strategy Call" />
                </div>
                <GrowthStories />

                <div className="max-w-[90%] mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 md:gap-5 3xl:gap-10 mt-20 lg:mt-10 3xl:mt-26 relative">
                    {[
                        { value: "200%", text1: "Boost in", text2: "Organic Traffic" },
                        {
                            value: "5.13X",
                            text1: "Increase of",
                            text2: "Conversion Rate",
                        },
                        {
                            value: "260%",
                            text1: "Increase of User",
                            text2: "Retention Time",
                        },
                    ].map((item, index) => (
                        <CutCornerBackground bgColor="#F9F9F9" key={index}>
                            <div

                                className="shape-wrap p-4 lg:p-8 3xl:p-12.5 flex flex-col rounded-2xl lg:rounded-3xl 3xl:rounded-[30px]"
                            >
                                <p className="text-[2.625rem] lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-[#ff3b00] w-full border-b border-black/30 pb-1 sm:pb-4 3xl:pb-5 tracking-[-0.02em] 3xl:leading-[90px]">
                                    {item.value}
                                </p>
                                <span className="text-2xl lg:text-lg 3xl:text-2xl font-semibold mt-3 sm:mt-5 3xl:mt-7 tracking-[-0.02em]">
                                    {item.text1} <br /> {item.text2}
                                </span>

                            </div>
                        </CutCornerBackground>
                    ))}
                    <Curve1
                        lines={[
                            {
                                parts: [
                                    { type: "text", text: "The" },
                                    {
                                        type: "highlight",
                                        text: "numbers",
                                        bgColor: "#FF4500",
                                    },
                                    { type: "text", text: "we are" },
                                ],
                            },
                            {
                                parts: [{ type: "text", text: "proud of." }],
                            },
                        ]}
                        imageClassName="left-8 -top-15"
                        curvePosition="end"
                        imageIndex={3}
                        curveFlipHorizontal={true}
                        curveFlipVertical={false}
                        tiltAngle={5}
                        className="absolute -bottom-15 xl:-bottom-20 -right-5 xl:right-30 3xl:right-25 max-w-[300px] 3xl:max-w-[350px]"
                    />
                </div>
            </div>

            <div className="flex flex-col mt-26 3xl:mt-70 relative">
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "If" },
                                {
                                    type: "highlight",
                                    text: "users",
                                    bgColor: "#FF4500",
                                },
                                { type: "text", text: "hesitate," },
                            ],
                        },
                        {
                            parts: [{ type: "text", text: "you've already lost them." }],
                        },
                    ]}
                    imageClassName="right-8 top-14 3xl:top-16"
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={5}
                    imageIndex={2}
                    className="absolute -top-10 3xl:top-0 left-10 xl:left-40 2xl:left-60 3xl:left-10 max-w-[300px] 3xl:max-w-[350px]"
                />
                <Heading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "From Traffic to Revenue:" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "UX That " },
                                { type: "italic", text: "Actually Converts" },
                            ],
                        },
                    ]}
                    label="Growth stalls for predictable reasons"
                    subtitle="Most products don't fail because of traffic; thay fail because users get confused, stuck, or unconvinced. We fix that."
                />
                <div className="max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 2xl:gap-10 mt-16 3xl:mt-18">
                        {traficToRevenue?.map((item, index) => (
                            <CutCornerBackground bgColor="#F9F9F9" key={index} cutWidth={20} cutHeight={20} cutRadius={1}>
                                <div
                                    className="p-6 md:p-6 lg:p-8 3xl:p-12.5 flex flex-col rounded-xl md:rounded-2xl lg:rounded-3xl 3xl:rounded-[30px] justify-between"
                                >
                                    <div className="pb-4 3xl:pb-10">
                                        <span className="border border-[#ff3b00]/30 text-[#ff3b00] px-2 3xl:px-4 py-1 3xl:py-3 pb-0 rounded-full uppercase text-sm 3xl:text-base w-fit">
                                            {item.buttonText}
                                        </span>
                                        <h6 className="max-w-xs font-semibold text-3xl lg:text-2xl 3xl:text-3xl my-6 3xl:my-10 tracking-[-0.02em]">
                                            {item.title}
                                        </h6>
                                        <p className="text-xl lg:text-lg 3xl:text-xl tracking-[-0.02em] leading-[30px] ">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className=" border-t border-black/30 pt-4 3xl:pt-8 flex gap-2 lg:gap-3 3xl:gap-6">
                                        <div className="flex items-center ">
                                            <p className="text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold text-[#ff3b00]">
                                                {item.value}
                                            </p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm 2xl:text-base 3xl:text-lg uppercase">
                                                {item.valueText1}
                                            </p>
                                            <p className="text-sm 2xl:text-base 3xl:text-lg uppercase">
                                                {item.valueText2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CutCornerBackground>
                        ))}
                    </div>
                    <div className="mt-10 rounded-3xl 3xl:rounded-4xl bg-black p-8 flex justify-between flex-wrap gap-5">
                        <div className="flex gap-8 2xl:gap-10 items-center">
                            <div className="p-4 3xl:p-5 bg-white rounded-full w-fit max-lg:hidden">
                                <svg
                                    className="size-7 3xl:size-8"
                                    viewBox="0 0 34 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 36.6667V30H33.3333V36.6667H0ZM6.66667 23.3333H9L22 10.375L19.625 8L6.66667 21V23.3333ZM3.33333 26.6667V19.5833L22 0.958333C22.3056 0.652778 22.6597 0.416667 23.0625 0.25C23.4653 0.0833333 23.8889 0 24.3333 0C24.7778 0 25.2083 0.0833333 25.625 0.25C26.0417 0.416667 26.4167 0.666667 26.75 1L29.0417 3.33333C29.375 3.63889 29.6181 4 29.7708 4.41667C29.9236 4.83333 30 5.26389 30 5.70833C30 6.125 29.9236 6.53472 29.7708 6.9375C29.6181 7.34028 29.375 7.70833 29.0417 8.04167L10.4167 26.6667H3.33333Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold text-[2rem] 2xl:text-4xl 3xl:text-[2rem] text-white max-lg:text-center leading-tight">
                                Let's design an experience that converts.
                            </p>
                        </div>
                        <div className="flex items-center justify-center max-lg:w-full">
                            <StylishButton text1="Book A" text2="Strategy Call" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-30 lg:mt-50 3xl:mt-60 relative scroll-mt-30 3xl:scroll-mt-35" id='process'>
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "Pick" },
                                {
                                    type: "highlight",
                                    text: "what you need",
                                    bgColor: "#FF4500",
                                },
                                { type: "text", text: "or" },
                            ],
                        },
                        {
                            parts: [{ type: "text", text: "we'll help you figure it out." }],
                        },
                    ]}
                    imageClassName="left-30 top-20 3xl:top-16 scale-x-[-1] rotate-[20deg]"
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={5}
                    imageIndex={2}
                    className="absolute top-0 3xl:top-15 right-10 xl:right-40 max-w-[300px] 3xl:max-w-[350px]"
                />
                <Heading
                    tag="h3"
                    heading={[
                        {
                            line: [{ type: "normal", text: "What We Help" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "You " },
                                { type: "italic", text: "Design" },
                            ],
                        },
                    ]}
                    label="Our services"
                    subtitle="Everything you need to design, launch, and improve products, brands, and campaigns - under one roof."
                />
                <OurDesigns />
            </div>
            <div className="flex flex-col  mt-30 lg:mt-50 3xl:mt-60 relative">
                <Curve1
                    lines={[
                        {
                            parts: [{ type: "text", text: "You'll always know" }],
                        },
                        {
                            parts: [
                                { type: "text", text: "what's happening" },
                                {
                                    type: "highlight",
                                    text: "next",
                                    bgColor: "#FF4500",
                                },
                            ],
                        },
                    ]}
                    imageClassName="right-8 top-18 3xl:top-16 scale-y-[-1] scale-x-[-1] rotate-[30deg]"
                    curvePosition="end"
                    curveFlipHorizontal={false}
                    curveFlipVertical={false}
                    tiltAngle={-10}
                    imageIndex={3}
                    className="absolute top-40 3xl:top-55 left-10 lg:left-30 xl:left-55 3xl:left-25 max-w-[300px] 3xl:max-w-[350px]"
                />
                <Heading
                    tag="h3"
                    heading={[
                        {
                            line: [{ type: "normal", text: "A Clear System for" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "Sustainable " },
                                { type: "italic", text: "Growth" },
                            ],
                        },
                    ]}
                    label="Our approach"
                    subtitle="Clear steps. No confusion. Focused on results."
                />
                <div className="max-sm:w-full sm:max-w-[90%] sm:mx-auto max-sm:px-2 mt-10 3xl:mt-16">
                    <div className="grid grid-cols-3 max-lg:hidden">
                        <div>
                            <span className="border border-black/30 px-2 3xl:px-3 py-1 3xl:py-1.5 rounded-full uppercase text-sm 3xl:text-base w-fit">
                                Our process
                            </span>
                        </div>
                        <div className="col-span-2">
                            <p className="text-3xl 3xl:text-4xl tracking-[-0.02em] 3xl:leading-[44px] font-semibold">
                                Growth doesn’t come from random improvements. It comes from understanding what’s broken, what matters most, and fixing it in the right order, across product, brand, and performance.
                            </p>
                        </div>
                    </div>

                    <ProcessFlow />

                    <div className="w-full pb-10 lg:py-20 bg-white">
                        <div className="bg-black rounded-xl lg:rounded-[28px] px-3 sm:px-10 py-8 sm:py-10 2xl:py-12 3xl:px-16 3xl:py-16 text-white relative overflow-hidden">
                            {/* Top Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* LEFT */}
                                <div>
                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-2 text-base 3xl:text-lg tracking-[-0.02em] px-3 py-1 rounded-full border border-[#FF03034D] text-(--red) mb-8 3xl:mb-10">
                                        <svg
                                            className="fill-[#FF3B00] size-3"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.201 0.187188C7.31312 -0.0623959 7.68688 -0.0623959 7.799 0.187188C9.16944 3.33195 11.6736 5.82779 14.8131 7.2005C15.0623 7.31281 15.0623 7.68719 14.8131 7.7995C11.6736 9.15974 9.16944 11.668 7.799 14.8129C7.68688 15.0624 7.31312 15.0624 7.201 14.8129C5.83056 11.668 3.32641 9.17221 0.186877 7.7995C-0.0622925 7.68719 -0.0622925 7.31281 0.186877 7.2005C3.32641 5.84026 5.83056 3.33195 7.201 0.187188Z"
                                                fill="#FF3B00"
                                            />
                                        </svg>
                                        LIMITED AVAILABILITY
                                    </span>

                                    {/* Heading */}
                                    <h2 className="text-4xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-15 3xl:leading-18 mb-8 3xl:mb-10">
                                        See What Working With Us Looks Like; <br />
                                        Before Committing
                                    </h2>

                                    {/* CTA */}
                                    <div>
                                        <StylishButton text1="Book A" text2="Strategy Call" />
                                    </div>
                                </div>

                                {/* RIGHT IMAGE */}
                                <div className="flex justify-center lg:justify-end">
                                    <div className="bg-[#111] rounded-2xl">
                                        <Image
                                            src="/uiux/laptop.webp" // replace with your image path
                                            alt="Preview"
                                            width={420}
                                            height={260}
                                            className="rounded-xl 3xl:rounded-3xl h-full w-full 3xl:w-150 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-10 h-px w-full bg-white/30 max-md:hidden" />

                            {/* Bottom checklist */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 text-sm max-md:mt-10">
                                {[
                                    "Strategy alignment session",
                                    "High-impact design output",
                                    "UI/UX recommendations",
                                    "Polished, usable deliverables",
                                ].map((item, index) => (
                                    <div
                                        className="flex items-center gap-2 3xl:gap-4"
                                        key={index}
                                    >
                                        <span className="size-5 3xl:size-8 flex items-center justify-center rounded-full bg-green-500 text-black text-xs">
                                            <Check className="size-4 3xl:size-6" strokeWidth={3} />
                                        </span>
                                        <span className="text-white font-semibold text-xl lg:text-base 2xl:text-xl 3xl:text-2xl">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-50 3xl:mt-60 relative scroll-mt-30 3xl:scroll-mt-35" id='why-upthrust'>
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "This is what" },
                                {
                                    type: "highlight",
                                    text: "clients",
                                    bgColor: "#FF4500",
                                },
                                { type: "text", text: "or" },
                            ],
                        },
                        {
                            parts: [{ type: "text", text: "usually notice first." }],
                        },
                    ]}
                    imageClassName="left-20 top-20 3xl:top-16 scale-x-[-1] rotate-[20deg]"
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={5}
                    imageIndex={2}
                    className="absolute top-25 3xl:top-35 right-10 xl:right-40 3xl:right-25 max-w-[300px] 3xl:max-w-[350px]"
                />
                <Heading
                    tag="h3"
                    heading={[
                        {
                            line: [
                                { type: "normal", text: " What" },
                                { type: "italic", text: "Working With Us" },
                            ],
                        },
                        {
                            line: [{ type: "normal", text: "actually feels like  " }],
                        },
                    ]}
                    label="WHY UPTHRUST"
                    subtitle="Human, reassuring, trust-building - not salesy."
                />
                <div className="max-sm:w-full sm:max-w-[90%] sm:mx-auto max-sm:px-2 mt-20 3xl:mt-30">
                    <WorkingWithUs />
                </div>
            </div>
            <div className="flex flex-col mt-30 sm:mt-50 3xl:mt-60 scroll-mt-30 3xl:scroll-mt-35" id='here-from-them'>
                <Heading
                    tag="h3"
                    heading={[
                        {
                            line: [{ type: "normal", text: " Explorations That Shape" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "Final " },
                                { type: "italic", text: "Products " },
                            ],
                        },
                    ]}
                    label="Designed. Delivered. Visualized."
                    subtitle="A visual overview of the brands and products we’ve designed."
                />
                <div className="sm:max-w-[90%] max-sm:px-2 sm:mx-auto w-full mt-10 3xl:mt-16 relative">
                    <Curve1
                        lines={[
                            {
                                parts: [{ type: "text", text: "What you see is" }],
                            },
                            {
                                parts: [
                                    { type: "text", text: "what" },
                                    {
                                        type: "highlight",
                                        text: "clients received",
                                        bgColor: "#FF4500",
                                    },
                                ],
                            },
                        ]}
                        imageClassName="left-15 top-20 3xl:top-16 scale-x-[-1]"
                        curvePosition="end"
                        curveFlipHorizontal={true}
                        curveFlipVertical={false}
                        tiltAngle={5}
                        imageIndex={2}
                        className="absolute top-50 3xl:top-55 right-10 xl:right-10 3xl:-right-15  max-w-[300px] 3xl:max-w-[350px]"
                    />
                    <FinalProducts />

                    <div className="mt-10 rounded-3xl 3xl:rounded-4xl bg-black p-8 flex justify-between flex-wrap gap-5">
                        <div className="flex gap-5 2xl:gap-10 items-center">
                            <div className="p-4 3xl:p-5 bg-white rounded-full w-fit max-lg:hidden">
                                <svg
                                    className="size-7 3xl:size-8"
                                    viewBox="0 0 34 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 36.6667V30H33.3333V36.6667H0ZM6.66667 23.3333H9L22 10.375L19.625 8L6.66667 21V23.3333ZM3.33333 26.6667V19.5833L22 0.958333C22.3056 0.652778 22.6597 0.416667 23.0625 0.25C23.4653 0.0833333 23.8889 0 24.3333 0C24.7778 0 25.2083 0.0833333 25.625 0.25C26.0417 0.416667 26.4167 0.666667 26.75 1L29.0417 3.33333C29.375 3.63889 29.6181 4 29.7708 4.41667C29.9236 4.83333 30 5.26389 30 5.70833C30 6.125 29.9236 6.53472 29.7708 6.9375C29.6181 7.34028 29.375 7.70833 29.0417 8.04167L10.4167 26.6667H3.33333Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold text-3xl 2xl:text-4xl 3xl:text-3xl text-white max-lg:text-center leading-tight">
                                Let’s create a visual system your product deserves.
                            </p>
                        </div>

                        <div className="flex items-center justify-center max-lg:w-full">
                            <StylishButton text1="Book A" text2="Strategy Call" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-5 mt-25 3xl:mt-30 max-lg:px-2">
                        <div className="lg:col-span-2">
                            <Image
                                src={"/icons/clutch.webp"}
                                width={200}
                                height={130}
                                className="w-50 lg:w-35 3xl:w-50 h-auto object-contain"
                                alt="Clutch Logo"
                            />
                            <div className="max-w-[150px] text-sm text-center mt-4">
                                <p className="uppercase">4.6 Avg Score</p>
                                <span className="">Based on 80+ reviews</span>
                            </div>
                        </div>
                        <div className="lg:col-span-3 flex justify-end">
                            <p className="text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold leading-10 3xl:leading-15 text-justify max-w-3xl 3xl:max-w-5xl tracking-[-0.02em] max-lg:hidden">
                                <span className="block text-right ">Founders and leaders</span>
                                <span className="">
                                    share how our design process, clarity, and execution helped
                                    them move forward with
                                </span>
                                <span className="block text-left">confidence.</span>
                            </p>
                            <p className="lg:hidden text-4xl font-semibold leading-tight mt-5">
                                Founders and leaders share how our design process, clarity, and
                                execution helped them move forward with confidence.
                            </p>
                        </div>
                    </div>
                    <TestimonialsWithVideo />
                </div>
            </div>
            <div className="flex flex-col mt-30 lg:mt-50 3xl:mt-60 scroll-mt-30 3xl:scroll-mt-35" id='faqs'>
                <div className="sm:max-w-[90%] max-sm:px-2 sm:mx-auto relative">
                    <Curve1
                        lines={[
                            {
                                parts: [{ type: "text", text: "This usually come up" }],
                            },
                            {
                                parts: [
                                    { type: "text", text: "before" },
                                    {
                                        type: "highlight",
                                        text: "the call",
                                        bgColor: "#FF4500",
                                    },
                                ],
                            },
                        ]}
                        imageClassName="right-8 top-14 3xl:top-16 scale-y-[-1] scale-x-[-1]"
                        curvePosition="end"
                        curveFlipHorizontal={true}
                        curveFlipVertical={false}
                        tiltAngle={-10}
                        imageIndex={3}
                        className="absolute bottom-70 3xl:top-35 left-10 xl:left-35 3xl:left-25 max-w-[300px] 3xl:max-w-[350px]"
                    />
                    <FaqUiUx />
                </div>
            </div>

            <ReadyToMoveUiUx />
        </main>
    );
};

export default page;