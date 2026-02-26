"use client"
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ProcessTimelineExact() {
    const steps = [
        { badge: "STEP #1", title: "Growth Discovery &\nExperience Audit", offset: "mt-6 3xl:mt-10", hoverText: "We understand your business, users, and goals, then identify what’s blocking growth across product, brand, or funnel." },
        { step: "STEP #2", title: "Strategy &\nOpportunity Mapping", offset: "mt-6 3xl:mt-10", hoverText: "We decide what matters most, what to fix first, and where design will have the biggest impact." },
        { step: "STEP #3", title: "Ideation &\nConcept Development", offset: "mt-14 3xl:mt-24", hoverText: "Ideas are created around real problems; whether for product flows, branding, landing pages, or campaigns." },
        { step: "STEP #4", title: "Design & Validation\n ", offset: "mt-14 3xl:mt-24", hoverText: "We design, test, and refine quickly so only strong solutions move forward." },
        { step: "STEP #5", title: "Build-Ready\nDelivery", offset: "mt-24 3xl:mt-38", hoverText: "Everything is organized and ready for development, launch, or campaigns, no extra back-and-forth." },
        { step: "STEP #6", title: "Testing &\nOptimization", offset: "mt-24 3xl:mt-38", hoverText: "We track performance, learn from results, and continuously optimize for growth." },
    ];

    const [hoveredStep, setHoveredStep] = useState(0);
    const [hoveredStepTooltip, setHoveredStepTooltip] = useState(null);

    return (
        <section className="w-full bg-white pt-5 lg:py-30 3xl:pt-40">
            <div className="mx-auto max-xl:flex xl:grid grid-cols-6 max-xl:overflow-x-auto w-full max-xl:h-100  hide-scrollbar">

                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center px-0.5 justify-between h-fit min-w-65 lg:min-w-[200px]"
                    >
                        {/* Vertical divider (in gap) */}

                        <span className={`mb-6 lg:text-xs 3xl:text-base text-black/70 rounded-full px-3.75 py-1 lg:px-3 3xl:px-3.75 lg:py-1 3xl:py-2.5 transition-all duration-300 ease-in-out ${index === hoveredStep ? "bg-[#FF3B00]  text-white" : ""}`}>
                            {index === hoveredStep ? '' : ''} {`STEP #${index + 1} `}
                        </span>
                        <div className={`w-full ${item.offset}`}>
                            <div className="w-full">
                                <div className="absolute top-0 -right-[0px] h-65 3xl:h-90 w-px bg-black/30" />
                                {
                                    index === 0 &&
                                    <div className="absolute top-0 -left-[0px] h-65 3xl:h-90 w-px bg-black/30" />
                                }
                                {/* Step label */}

                                {/* Title */}
                                <p className="text-center text-lg lg:text-base 3xl:text-lg mb-4 3xl:mb-10 tracking-[-0.02em] leading-[28px] lg:leading-[18px] 3xl:leading-7 text-gray-800 whitespace-pre-line h-14 lg:h-9">
                                    {item.title}
                                </p>


                            </div>

                            {/* FULL WIDTH BUTTON */}
                            <div
                                className="relative w-full flex justify-center group"
                                onMouseEnter={() => {
                                    setHoveredStep(index)
                                    setHoveredStepTooltip(index)
                                }}     // desktop
                                onMouseLeave={() => {
                                    setHoveredStep(null)
                                    setHoveredStepTooltip(null)
                                }}      // desktop
                                onClick={() => {
                                    setHoveredStep(prev => (prev === index ? null : index))
                                    setHoveredStepTooltip(prev => (prev === index ? null : index))
                                } // mobile toggle
                                }
                            >

                                {/* Button */}
                                <div className="w-full bg-black rounded-full flex items-center justify-center py-1 3xl:py-2.5 cursor-pointer max-h-10" >
                                    <span className="relative text-black bg-white rounded-full p-1.5 size-7 2xl:size-6 3xl:size-6 flex items-center justify-center">
                                        {/* Plus icon (default) */}
                                        <Plus
                                            strokeWidth={3}
                                            className="absolute opacity-100 scale-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-75 group-hover:rotate-45 "
                                        />
                                        <Minus
                                            strokeWidth={3}
                                            className="absolute opacity-0 scale-75 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                                        />
                                    </span>
                                </div>

                                {/* Tooltip */}
                                <div
                                    className={`absolute top-full mt-3 transition-all duration-300
  ${hoveredStepTooltip === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  bg-black text-white text-sm 3xl:text-base leading-snug px-5 3xl:px-7 py-6 3xl:py-9
  rounded-xl 3xl:rounded-2xl w-[300px] 3xl:w-[350px] text-center z-50`}
                                >
                                    {/* Arrow */}
                                    <span
                                        className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 3xl:size-4 bg-black rotate-45"
                                    />

                                    {/* Text */}
                                    {item.hoverText.split("**").map((text, i) =>
                                        i % 2 === 1 ? (
                                            <strong key={i} className="font-semibold">
                                                {text}
                                            </strong>
                                        ) : (
                                            <span key={i}>{text}</span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
