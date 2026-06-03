'use client'
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const steps = [
    {
        id: 1,
        label: "THE FOUNDATION OF SUCCESS",
        title: "Discovery & Brief",
        text: "We dig into your brand, your audience, and the actual goal of the video. Ads? Views? Trust? Sales? The answer rewires everything that follows - including which hook we lead with.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif1.gif",
    },
    {
        id: 2,
        label: "CLARIFYING THE MISSION",
        title: "Creative Brief",
        text: "Every breakthrough campaign starts with a bulletproof brief. We define your single-minded message, target audience behaviors, success metrics, and mandatory brand elements. This becomes our north star-ensuring every creative decision ladders back to measurable business objectives before production begins.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif2.gif",
    },
    {
        id: 3,
        label: "WHERE MAGIC MEETS METHOD",
        title: "Shoot Day",
        text: "In-house crew, in-house gear, in-house creators. We shoot for performance - multiple hooks, multiple framings, multiple takes - so the edit room has 10 videos to pick from, not 1.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif3.gif",
    },
    {
        id: 4,
        label: "LIGHTS, CAMERA, ACTION",
        title: "Production & Execution",
        text: "With approved concepts, our in-house production team handles everything: casting, scripting, shooting, editing, motion design, and platform optimization. Every asset is crafted to platform specifications and tested for quality. You receive scroll-stopping creative that looks premium while performing like performance marketing.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif4.gif",
    },
    {
        id: 5,
        label: "TEST AND COMPOUND",
        title: "Launch & Iterate",
        text: "Once the videos are live, we read the data  what got watched, what got clicked, what got bought. Then we reshoot the winning hook 5 different ways. The system compounds with every cycle.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif5.gif",
    },
    {
        id: 6,
        label: "THE FEEDBACK LOOP",
        title: "Analysis & Iteration",
        text: "We analyze engagement metrics, creative fatigue patterns, and conversion data to understand exactly what resonated. These insights feed directly into your next creative sprint-building institutional knowledge with every cycle. The result: each batch of creative is systematically better than the last, compounding effectiveness over time.",
        img: "https://upthrustvideocdn.b-cdn.net/creative-gifs/gif6.gif",
    },
];

export default function ProcessTimeline() {
    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 20,
    });

    const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="max-w-[1302px] mx-auto px-[15px] sm:px-10 xl:px-20 relative ">

            {/* TIMELINE */}
            <div ref={timelineRef} className="relative">

                {/* DESKTOP LINE */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[6px] h-full bg-[#FFE1D6]" />

                <motion.div
                    style={{ height }}
                    className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[6px] bg-[#FF3B00]"
                />

                {/* MOBILE LINE */}
                <div className="lg:hidden absolute left-[14px] top-0 w-[4px] h-full bg-[#FFE1D6]" />

                <motion.div
                    style={{ height }}
                    className="lg:hidden absolute left-[14px] top-0 w-[4px] bg-[#FF3B00]"
                />

                {/* DESKTOP NUMBERS */}
                <div className="hidden lg:flex flex-col justify-between absolute left-1/2 -translate-x-1/2 h-full py-[200px]">

                    {steps.map((s, i) => {

                        const threshold = (i + 1) / steps.length;
                        const activationPoint = threshold - (1 / steps.length) * 0.5;

                        const background = useTransform(
                            smoothProgress,
                            [0, activationPoint, activationPoint, 1],
                            ["#EFEFEF", "#EFEFEF", "#FF3B00", "#FF3B00"]
                        );

                        const color = useTransform(
                            smoothProgress,
                            [0, activationPoint, activationPoint, 1],
                            ["#000000", "#000000", "#FFFFFF", "#FFFFFF"]
                        );

                        return (
                            <motion.div
                                key={s.id}
                                style={{ backgroundColor: background, color }}
                                className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[36px] font-semibold"
                            >
                                {s.id}
                            </motion.div>
                        );
                    })}

                </div>

                {/* MOBILE NUMBERS */}
                <div className="lg:hidden flex flex-col justify-between absolute left-[0px] h-full py-[80px]">

                    {steps.map((s, i) => {

                        const threshold = (i + 1) / steps.length;
                        const activationPoint = threshold - (1 / steps.length) * 0.5;

                        const background = useTransform(
                            smoothProgress,
                            [0, activationPoint, activationPoint, 1],
                            ["#EFEFEF", "#EFEFEF", "#FF3B00", "#FF3B00"]
                        );

                        const color = useTransform(
                            smoothProgress,
                            [0, activationPoint, activationPoint, 1],
                            ["#000000", "#000000", "#FFFFFF", "#FFFFFF"]
                        );

                        return (
                            <motion.div
                                key={s.id}
                                style={{ backgroundColor: background, color }}
                                className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[16px] font-semibold"
                            >
                                {s.id}
                            </motion.div>
                        );

                    })}

                </div>

                {/* STEPS */}
                <div className="flex flex-col gap-16 lg:gap-9 py-15 pl-[50px] sm:pl-[60px] lg:pl-0">

                    {steps.map((step, i) => (

                        <div
                            key={step.id}
                            className="timeline-step flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-[234px]"
                        >

                            {i % 2 === 0 && (
                                <img
                                    src={step.img}
                                    className="order-2 lg:order-none w-full max-w-[510px] h-auto lg:h-[452px] rounded-[20px] border-2 border-black object-cover"
                                />
                            )}

                            <div className="order-1 lg:order-none flex flex-col gap-[15px] max-w-[470px]">

                                <p className="text-[14px] font-semibold uppercase tracking-[-0.02em] text-[#FF3B00]">
                                    {step.label}
                                </p>

                                <div className="flex flex-col gap-[0px]">

                                    <h3 className="text-[28px] lg:text-[36px] font-semibold tracking-[-0.02em]">
                                        {step.title}
                                    </h3>

                                    <p className="text-[16px] leading-[150%] tracking-[-0.02em]">
                                        {step.text}
                                    </p>

                                </div>

                            </div>

                            {i % 2 === 1 && (
                                <img
                                    src={step.img}
                                    className="order-2 lg:order-none w-full max-w-[510px] h-auto lg:h-[452px] rounded-[20px] border border-black object-cover"
                                />
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}