import React from "react";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import Image from "next/image";

const AiHelpForClient = () => {

    const traditionalItems = [
        "No AI crawler access. GPTBot, ClaudeBot, PerplexityBot are blocked by default.",
        "Outdated content structure. Long paragraphs, keyword-stuffed — AI engines cannot extract or cite.",
        "No schema implementation. Missing FAQ, HowTo, or Article schema.",
        "No tracking — zero measurement if ChatGPT ever mentions your brand.",
        "3-6 month results timeline. Competitors dominate AI search before delivery."
    ];

    const upthrustItems = [
        "AI-first technical setup. Configure your site for AI crawlers from day one.",
        "Modular and extraction-optimized content built for AI citation.",
        "Complete schema deployment on every relevant page.",
        "Real-time monitoring across platforms and monthly citation report.",
        "30-day quick wins. First ChatGPT citations typically appear within 30 days."
    ];

    return (
        <div>
            <div className="w-full py-16 3xl:pt-26">
                <div className="grid lg:grid-cols-2 gap-8 1800:gap-26 md:px-6">

                    {/* LEFT CARD */}
                    <div className="bg-white rounded-2xl md:rounded-3xl border border-[#C1C1C1] p-4 md:p-8 3xl:p-10 flex flex-col justify-between overflow-hidden">

                        <div>
                            <div className="text-sm lg:text-base 3xl:text-lg leading-[150%] tracking-[-0.02em] p-1.5 md:p-2 px-4 md:px-5 rounded-full bg-[#F6F6F6] mb-6 3xl:mb-10 block w-fit">
                                Traditional Alternatives
                            </div>

                            <div className="space-y-4 md:space-y-5 3xl:space-y-7">

                                {traditionalItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <X size={26} className="text-white bg-[#FE2B27] rounded-full p-0.5 flex-shrink-0 mt-1 3xl:mt-2 size-5 md:size-6" />
                                        <p className="text-base md:text-lg md:text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em]">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="mt-8 rounded-xl overflow-hidden">
                            <Image
                                width={1000}
                                height={600}
                                src="/seo/ai-help1.webp"
                                alt="Dashboard Preview"
                                className="w-full object-cover h-fit"
                            />
                        </div>

                    </div>


                    {/* RIGHT CARD */}
                    <div className="bg-white rounded-2xl md:rounded-3xl border border-black p-4 md:p-8 3xl:p-10 flex flex-col justify-between overflow-hidden">

                        <div>
                            <div className="text-sm lg:text-base 3xl:text-lg leading-[150%] tracking-[-0.02em] p-1.5 md:p-2 px-4 md:px-5 rounded-full bg-black mb-6 3xl:mb-10 block w-fit">
                                <Image
                                    src={"/logo-white.png"}
                                    className="w-[65px] md:w-[100px] 3xl:w-[141px] h-fit object-contain"
                                    width={150}
                                    height={60}
                                    alt="Upthrust Logo"
                                />
                            </div>

                            <div className="space-y-4 md:space-y-5 3xl:space-y-7 flex flex-col justify-between h-full">

                                {upthrustItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <Check size={26} className="text-white bg-[#00822E] rounded-full p-0.5 flex-shrink-0 mt-1 3xl:mt-2 size-5 md:size-6" />
                                        <p className="text-base md:text-lg md:text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em]">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="mt-20 3xl:mt-8 overflow-hidden">
                            <Image
                                width={1000}
                                height={600}
                                src="/seo/ai-help2.webp"
                                alt="Dashboard Preview"
                                className="w-full object-cover h-fit"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AiHelpForClient;