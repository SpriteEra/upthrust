"use client";

import { Play, Video, Clapperboard, Sparkles } from "lucide-react";
import AnimatedWord from "../common/AnimatedWord";

const cardsData = [
    {
        title: "Data-Driven",
        subtitle: [
            { text: 'Strategy', color: '#ffffff' },
            { text: 'Outcomes', color: '#ffffff' },
            { text: 'Growth', color: '#ffffff' }
        ],
        description:
            "We turn performance data and audience psychology into creative hypotheses that actually scale.",
        bg: "bg-[#0457CB]",
        text: "text-white",
        icon: <Play size={18} />,
        iconCss: "bg-white text-blue "
    },
    {
        title: "Paid-Social",
        subtitle: [
            { text: 'Videos', color: '#000000' },
            { text: 'Images', color: '#000000' },
            { text: 'and More', color: '#000000' }
        ],
        description:
            "UGC-style ads, founder videos, testimonials, skits, and sound-first Reels built for conversions.",
        bg: "bg-[#E8F3FF]",
        text: "text-black",
        icon: <Play size={18} />,
        iconCss: "bg-black text-white"
    },
    {
        title: "Scroll-Stopping",
        subtitle: [
            { text: 'Creatives', color: '#000000' },
            { text: 'Thumbnails', color: '#000000' },
            { text: 'UGCs', color: '#000000' }
        ],
        description:
            "Bold graphics, before-and-afters, carousels, and expert POVs optimized for CTR and ROAS.",
        bg: "bg-[#F6F6F6]",
        text: "text-black",
        icon: <Play size={18} />,
    },
    {
        title: "AI-Powered",
        subtitle: [
            { text: 'Workflow', color: '#ffffff' },
            { text: 'Research', color: '#ffffff' },
            { text: 'Production', color: '#ffffff' }
        ],
        description:
            "AI-assisted research, scripting, and post-production to deliver more ad variants, faster.",
        bg: "bg-[#0457CB]",
        text: "text-white",
        icon: <Play size={18} />,
        iconCss: "bg-white text-blue"
    },
];

export default function ScaleCards({ cards = cardsData }) {


    return (
        <section className="max-w-[1200px] 1600:max-w-[1320px] 1800:max-w-[1409px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 py-6 xl:py-16 max-lg:px-3">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`${card.bg} ${card.text} rounded-2xl 3xl:rounded-[20px] p-4 px-5 xl:p-6 flex flex-col justify-between xl:min-h-[380px] 3xl:min-h-[455px] max-h-[455px] max-md:py-8 `}
                >
                    {/* Icon */}
                    <div>
                        <div className={`size-8 3xl:size-10 rounded-full border border-current flex items-center justify-center mb-1 lg:mb-6 ${card.iconCss}`}>
                            {card.icon}
                        </div>
                        <div className="lg:flex-col flex max-lg:items-center max-lg:gap-2 max-lg:mb-6 flex-wrap ">
                            <h3 className="text-[32px] 3xl:text-4xl font-semibold leading-[130%] tracking-[-0.02em] whitespace-nowrap">
                                {card.title}
                            </h3>
                            <p className="italic font-normal lg:mb-6 text-4xl lg:text-[32px] 3xl:text-4xl 3xl:leading-11 font-instrument overflow-hidden">
                                <AnimatedWord
                                    words={card.subtitle}
                                    textCss="italic font-normal text-[32px] 3xl:text-4xl 3xl:leading-11 font-instrument justify-start!"
                                    className="h-8 md:h-9 3xl:h-10 w-40 md:w-30 lg:w-full  3xl:w-90 "
                                />

                            </p>

                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-lg 3xl:text-xl font-normal leading-[150%] tracking-[-0.02em] max-md:max-w-[317px] 3xl:max-w-[280px]">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}