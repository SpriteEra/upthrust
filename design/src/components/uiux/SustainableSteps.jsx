import Tooltip from "@/utils/Tooltip";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

export default function ProcessTimelineExact() {
    const steps = [
        { badge: "Free STEP #1", title: "Growth Discovery &\nExperience Audit", offset: "mt-6", hoverText: "We understand your business, users, and goals, then identify what’s blocking growth across product, brand, or funnel." },
        { step: "STEP #2", title: "Strategy &\nOpportunity Mapping", offset: "mt-6", hoverText: "We decide what matters most, what to fix first, and where design will have the biggest impact." },
        { step: "STEP #3", title: "Ideation &\nConcept Development", offset: "mt-6 mt-14", hoverText: "Ideas are created around real problems; whether for product flows, branding, landing pages, or campaigns." },
        { step: "STEP #4", title: "Design & Validation\n ", offset: "mt-6 mt-14", hoverText: "We design, test, and refine quickly so only strong solutions move forward." },
        { step: "STEP #5", title: "Build-Ready\nDelivery", offset: "mt-6 mt-24", hoverText: "Everything is organized and ready for development, launch, or campaigns, no extra back-and-forth." },
        { step: "STEP #6", title: "Testing &\nOptimization", offset: "mt-6 mt-24", hoverText: "We track performance, learn from results, and continuously optimize for growth." },
    ];

    return (
        <section className="w-full bg-white pt-5 lg:py-30 3xl:pt-40">
            <div className="mx-auto max-xl:flex xl:grid grid-cols-6 max-xl:overflow-x-auto w-full max-xl:h-90  hide-scrollbar">

                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center px-0.5 justify-between h-fit min-w-[200px]"
                    >
                        {/* Vertical divider (in gap) */}

                        <span className={`mb-6 text-xs 3xl:text-sm tracking-wide text-gray-400 rounded-full px-3 py-1 ${index === 0 ? "bg-[#FF3B00]  text-white" : ""}`}>
                            {index === 0 ? 'Free' : ''} {`STEP #${index + 1} `}
                        </span>
                        <div className={`w-full ${item.offset}`}>
                            <div className="w-full">
                                <div className="absolute top-0 -right-[1px] h-65 w-px bg-gray-200" />
                                {
                                    index === 0 &&
                                    <div className="absolute top-0 -left-[0px] h-65 w-px bg-gray-200" />
                                }
                                {/* Step label */}

                                {/* Title */}
                                <p className="text-center text-base 3xl:text-lg mb-4 leading-[18px] 3xl:leading-6 text-gray-800 whitespace-pre-line h-9">
                                    {item.title}
                                </p>


                            </div>

                            {/* FULL WIDTH BUTTON */}
                            <div className="relative w-full flex justify-center group">

                                {/* Button */}
                                <div className="w-full bg-black rounded-full flex items-center justify-center py-1 cursor-pointer">
                                    <span className="relative text-black bg-white rounded-full p-1.5 size-7 2xl:size-8 3xl:size-11 flex items-center justify-center">
                                        {/* Plus icon (default) */}
                                        <Plus
                                            className="absolute opacity-100 scale-100 transition-all duration-400 group-hover:opacity-0 group-hover:scale-75 group-hover:rotate-45 "
                                        />
                                        <Minus
                                            className="absolute opacity-0 scale-75 transition-all duration-400 group-hover:opacity-100 group-hover:scale-100"
                                        />
                                    </span>
                                </div>

                                {/* Tooltip */}
                                <div
                                    className="absolute top-full mt-3 opacity-0 scale-95 group-hover:opacity-100 transition-all duration-400 pointer-events-none bg-black text-white text-sm 3xl:text-base leading-snug px-5 3xl:px-7 py-6 3xl:py-9 rounded-xl 3xl:rounded-2xl w-[300px] 3xl:w-[350px] text-center z-50"
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
