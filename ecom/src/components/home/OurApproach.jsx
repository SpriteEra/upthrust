"use client";

import { Curve1 } from "@/common/HandWritten";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SIZE = 1200;
const RADIUS = SIZE / 2;
const STEP_ANGLE = 90;

const steps = [
    {
        id: 4,
        title: "Step 4",
        name: "Build Systems (Months 3+) ",
        desc1: "We set up email marketing, retention campaigns, and content strategy for long-term growth. ",
        desc2b: "What you get:", desc2n: "Sustainable business, not just ad dependency.",
        tooltip1: "Build Systems Stop [chasing]",
        tooltip2: "stop building sustainable growth."
    },
    {
        id: 3,
        title: "Step 3",
        name: "Scale (Months 2-3)",
        desc1: "We increase budget on winning campaigns. Launch new channels. Create fresh ads every week.",
        desc2b: "What you get:",
        desc2n: " Higher revenue without killing ROAS. ",
        tooltip1: "We don't [guess]",
        tooltip2: "We scale what's proven profitable "
    },
    {
        id: 2,
        title: "Step 2",
        name: "Fix & Launch (Weeks 2-4)",
        desc1: "We rebuild your campaigns using proven strategies. New ads, better targeting, optimized website.",
        desc2b: "What you get:",
        desc2n: " Positive ROI in 30 days or month 2 is free.",
        tooltip1: "No more [testing]",
        tooltip2: "we deploy what already works."
    },
    {
        id: 1,
        title: "Step 1",
        name: "The Audit (Week 1)",
        desc1: "We review your ad accounts, website, and analytics to find what's working and what's wasting money.",
        desc2b: "What you get:",
        desc2n: "Full audit report with prioritized fixes.",
        tooltip1: "Stop [Guessing]",
        tooltip2: "See where your money's going"
    },
];

export default function OurApproach() {
    const controls = useAnimationControls();
    const [activeIndex, setActiveIndex] = useState(0);
    const angleRef = useRef(0);

    useEffect(() => {
        let angle = 0;
        let mounted = true;
        let currentIndex = 0;
        const rotate = async () => {
            while (mounted) {
                const nextAngle = angle + STEP_ANGLE;

                // 🔥 set active step immediately
                const nextIndex =
                    (steps.length - (nextAngle / STEP_ANGLE) % steps.length) %
                    steps.length;

                setActiveIndex(nextIndex);

                controls.start({
                    rotate: nextAngle,
                    transition: {
                        type: "spring",
                        stiffness: 140,
                        damping: 12,
                        mass: 0.7,
                    },
                });

                angle = nextAngle;

                await new Promise((r) => setTimeout(r, 2500));
            }
        };

        rotate();
        return () => (mounted = false);
    }, [controls]);

    return (
        <div className="relative flex items-center justify-center h-screen 3xl:h-[75vh] bg-black  overflow-hidden">
            {/* Static gradient circle */}
            <div
                className="absolute rounded-full bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-black transform translate-y-[30%] 3xl:translate-y-[30%] border border-white/10"
                style={{ width: SIZE, height: SIZE }}
            />

            {/* Inner circular glow */}

            <div
                className="absolute rounded-full transform translate-y-[30%] 3xl:translate-y-[30%] pointer-events-none"
                style={{
                    width: SIZE,
                    height: SIZE,
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)',
                }}
            />


            {/* Rotating orbit */}
            <motion.div
                style={{ width: SIZE + 50, height: SIZE + 50 }}
                className="absolute transform translate-y-[30%] 3xl:translate-y-[30%]"
                animate={controls}
            >
                {steps.map((step, index) => {
                    const angle = index * STEP_ANGLE;

                    return (
                        <div
                            key={step.id}
                            className="absolute top-1/2 left-1/2"
                            style={{
                                transform: `
                        translate(-50%, -50%)
                        rotate(${angle}deg)
                        translateY(-${RADIUS}px)
                        `,
                            }}
                        >
                            {/* Step */}
                            <div className="flex flex-col items-center text-white select-none relative">
                                {index === activeIndex &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >

                                        <Curve1
                                            lines={[
                                                {
                                                    parts: [
                                                        { type: 'highlight', text: step.tooltip1, bgColor: '#FF4500' },
                                                    ]
                                                },
                                                {
                                                    parts: [
                                                        { type: "text", text: step.tooltip2 },
                                                    ]
                                                },


                                            ]}
                                            imageClassName={`${index % 2 === 0 ? "-right-0 top-20 scale-x-[-1] 3xl:top-24 3xl:right-5" :
                                                "-right-0 top-20 3xl:top-24 3xl:right-5"} !h-10 3xl:!h-12 w-full`}
                                            curvePosition="end"
                                            curveFlipHorizontal={true}
                                            curveFlipVertical={false}
                                            tiltAngle={index % 2 === 0 ? -4 : 4}
                                            imageIndex={5}
                                            textClassName="!text-white"
                                            className={`${index % 2 === 0 ? "-left-75 top-0 3xl:-top-3 3xl:-left-90" : "-right-75 top-0 3xl:-top-3 3xl:-right-90"}  absolute `}

                                        />
                                    </motion.div>
                                }
                                <div
                                    className="w-11 h-11 rounded-full bg-white text-black
                                    flex items-center justify-center font-semibold relative"
                                >
                                    {step.id}
                                    <span className="text-xs 3xl:text-sm px-3 bg-white/10 py-0.5 mb-2 absolute -top-8 font-light text-white">STEP</span>
                                    <div className="absolute top-12 flex flex-col items-center text-white max-w-sm w-md">
                                        <div className="h-14 3xl:h-16 w-px bg-white" />
                                        <p className="font-semibold text-2xl 3xl:text-3xl whitespace-nowrap mt-1 tracking-[-0.02em]">{step.name}</p>
                                        <span className="text-xs 3xl:text-base text-center font-light max-w-60 mt-1.5 3xl:mt-2">{step.desc1}</span>
                                        <p className="text-xs 3xl:text-base text-center font-light max-w-60 mt-5 3xl:mt-6"><span className="font-normal">What You Get:</span>{" "}{step.desc2n}</p>
                                    </div>
                                </div>
                                <span className="mt-2 text-xs opacity-80"></span>
                                <span className="mt-2 text-xs opacity-80"></span>
                                <span className="mt-2 text-xs opacity-80"></span>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}