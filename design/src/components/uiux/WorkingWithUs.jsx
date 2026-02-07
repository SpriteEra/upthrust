"use client"
import { Minus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
const features = [
    {
        image: "/icons/users.webp",
        heading: "One Team,\n Fully In-House",
        description:
            "Every part of your project is handled internally—from strategy to execution. ",
        whymatters: "Clear ownership, consistent quality, zero handoff friction.",
    },
    {
        image: "/icons/goal.webp",
        heading: "Built Around Your\n Growth Goals",
        description:
            "We don’t start with design trends. We start with what you’re trying to achieve.",
        whymatters: "Design decisions that actually move metrics.",
    },
    {
        image: "/icons/smile.webp",
        heading: "Clear Communication,\n No Guessing",
        description:
            "You’ll always know what’s happening, what’s next, and why decisions are being made.",
        whymatters: "Less back-and-forth. More momentum.",
    },
    {
        image: "/icons/twoway.webp",
        heading: "Flexible Across Products\n And Campaigns",
        description:
            "Whether it’s a SaaS product, or any design work we adapt to what growth needs right now.",
        whymatters: "One partner instead of multiple agencies.",
    },
    {
        image: "/icons/reward.webp",
        heading: "Long-Term Thinking,\n Short-Term Wins",
        description:
            "We deliver quick improvements without sacrificing long-term scalability.",
        whymatters: "Immediate impact that doesn’t break later.",
    },
    {
        image: "/icons/light.webp",
        heading: "Senior Talent,\n Not Trial-And-Error",
        description:
            "You work with experienced designers, no juniors learning on your project.",
        whymatters: "Faster decisions. Fewer revisions. Better outcomes.",
    },
];
const WorkingWithUs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index)
        }
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:border-t border-black/80">
            {features.map((item, index) => (
                <div
                    key={index}
                    className={`px-2 lg:px-12 3xl:px-16 py-6 border-black/80 lg:border-black/30 border-b lg:border-r lg:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 md:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 `}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="flex lg:flex-col max-lg:justify-between">
                        <div className='max-lg:flex max-lg:gap-3 items-center'>
                            <div className="size-10 lg:size-12 2xl:size-15 flex items-center justify-center border border-black rounded-full mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.heading}
                                    width={36}
                                    height={36}
                                    className='size-7 2xl:size-8 3xl:size-9'
                                />
                            </div>
                            <p className="text-[1.375rem] sm:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold leading-11 lg:mb-4 whitespace-pre-line">
                                {item.heading}
                            </p>

                        </div>
                        <Minus className="size-8 lg:hidden" strokeWidth={3} />
                    </div>

                    <div className={` overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index
                        ? "max-h-350 mt-2 max-lg:opacity-100"
                        : "max-lg:max-h-0 max-lg:opacity-0"
                        }`}>

                        <p className="text-lg 3xl:text-xl">{item.description}</p>
                        <p className="text-lg 3xl:text-xl">
                            <span className="font-semibold">Why its Matters: </span>
                            {item.whymatters}
                        </p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkingWithUs