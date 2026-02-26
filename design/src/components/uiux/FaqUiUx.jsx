"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import UiUxRocketButton from "./UiUxRocketButton";
import UiUxHeading from "@/common/UiUxHeading";

export default function FaqUiUx() {
    const [openIndexes, setOpenIndexes] = useState(null);

    const faqs = [
        { question: "What kind of companies do you usually work with?", answer: "We primarily work with startups, scaleups, and growing businesses that are serious about improving their product, brand, or digital presence. Most of our clients are B2B, SaaS, D2C, or tech-enabled companies looking to grow with clarity, not guesswork." },
        { question: "What services do you actually provide?", answer: "We help companies design, build, and improve digital experiences. This includes UI/UX design, web design, branding, and web development. Depending on the engagement, we can support everything from strategy and design to build-ready or production-ready delivery." },
        { question: "How do we know which service is right for us?", answer: "You don’t need to decide that upfront. During our initial strategy call, we understand your goals, challenges, and current setup, then recommend what will have the biggest impact first. In many cases, the right solution is clearer after that conversation." },
        { question: "Do you work on existing products or only new ones?", answer: "Both. We often work on existing websites, products, or brands that need improvement, optimization, or a redesign. We also partner with teams building something new from scratch. The process adapts based on where you’re starting from." },
        { question: "What does the first engagement usually look like?", answer: "We start with a strategy and alignment phase. This includes understanding your goals, reviewing what currently exists, and identifying opportunities. From there, we define scope, timelines, and next steps before moving into execution." },
        { question: "How involved do we need to be during the process?", answer: "We keep involvement focused and efficient. You’ll be involved during key decision points-such as strategy alignment, reviews, and feedback but we handle the day-to-day execution. Most clients spend a few hours per week, not more." },
        { question: "How long does a typical project take?", answer: "Timelines vary depending on scope and complexity. Most projects range from 3 to 8 weeks, while larger or more complex engagements may take longer. We’ll give you a clear timeline before starting." },
        { question: "Is there a minimum commitment?", answer: "We don’t lock clients into long-term commitments by default. Most engagements are project-based, with clear deliverables. Ongoing or retainer work is optional and only recommended when it makes sense." },
        { question: "Do you offer development as well?", answer: "Yes. We offer web development and can deliver production-ready builds or work closely with your internal developers. If development isn’t required, we provide clean, well-documented designs that are easy to implement." },
    ];



    const toggleFAQ = (index) => {
        if (openIndexes?.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };


    return (
        <>
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 max-w-[22rem] 3xl:max-w-[28rem] max-lg:mx-auto">
                    <div className="bg-[#F9F9F9] rounded-[30px] lg:rounded-3xl 3xl:rounded-[30px] py-5 px-4.5 md:p-8 3xl:px-8 3xl:p-12.5">
                        <div className="flex items-center gap-3 3xl:gap-4 mb-6 3xl:mb-8">
                            <Image
                                src="/uiux/profile/akshay-gera.webp"
                                alt="Akshay Gera"
                                width={100}
                                height={100}
                                className="size-25 lg:size-18 3xl:size-25 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-2xl lg:text-xl 3xl:text-2xl font-semibold">
                                    Akshay Gera
                                </h2>
                                <p className="text-xl lg:text-lg 2xl:text-xl text-black/70">CEO</p>
                            </div>
                        </div>
                        <p className="text-2xl lg:text-lg md:text-xl 3xl:text-2xl font-semibold tracking-[-0.02em] mb-8">
                            "Got more questions or curious about what's ahead? Let's connect
                            on LinkedIn!"
                        </p>
                        <div className="relative inline-block">
                            <UiUxRocketButton text1="Book A" text2="Strategy Call" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <UiUxHeading
                        tag="h3"
                        heading={[{
                            line: [
                                { type: "normal", text: " Frequently" },
                            ],
                        },
                        {
                            line: [
                                { type: "normal", text: "Asked " },
                                { type: "italic", text: "Questions " },
                            ],
                        }]}
                        label=''
                        align="left"
                        subtitle=""
                    />

                    <div className="space-y-1 mt-16 lg:mt-10 max-lg:px-2">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`border-b border-black/80 ${index === 0 ? "border-t border-black/80" : ""}`}>
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full items-center justify-between py-4 md:py-8 3xl:py-10 flex flex-col cursor-pointer overflow-hidden transition-all duration-300"
                                >
                                    <div className="flex justify-between gap-2 w-full items-center">
                                        <p className="lg:text-2xl 3xl:text-3xl pr-4 md:font-semibold 3xl:leading-[38px] tracking-[-0.02em]">
                                            {faq.question}
                                        </p>
                                        <Plus
                                            className={`size-7 shrink-0 transition-transform duration-400 ease-in-out group-hover:text-gray-600 ${openIndexes?.includes(index) ? "rotate-45" : ""
                                                }`}
                                        />

                                    </div>
                                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndexes?.includes(index)
                                        ? "max-h-96 opacity-100 mt-4 3xl:mt-6"
                                        : "max-h-0 opacity-0"
                                        }`}>
                                        <p className="text-sm lg:text-base max-3xl:leading-4.5 3xl:text-lg tracking-[-0.02em] ">{faq.answer}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FOOTER SECTION */}

        </>
    );
}