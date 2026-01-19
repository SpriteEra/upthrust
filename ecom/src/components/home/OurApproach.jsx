"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const SIZE = 1200;
const RADIUS = SIZE / 2;
const STEP_ANGLE = 90;

const steps = [
    { id: 1, title: "Step 1" },
    { id: 2, title: "Step 2" },
    { id: 3, title: "Step 3" },
    { id: 4, title: "Step 4" },
];

export default function OurApproach() {
    const controls = useAnimationControls();

    useEffect(() => {
        let angle = 0;
        let mounted = true;

        const rotate = async () => {
            while (mounted) {
                angle += STEP_ANGLE;

                await controls.start({
                    rotate: angle,
                    transition: {
                        type: "spring",
                        stiffness: 140,
                        damping: 12,
                        mass: 0.7,
                    },
                });

                // pause at top
                await new Promise((r) => setTimeout(r, 1500));
            }
        };

        rotate();
        return () => (mounted = false);
    }, [controls]);

    return (
        <div className="relative flex items-center justify-center h-screen bg-black  overflow-hidden">
            {/* Static gradient circle */}
            <div
                className="absolute rounded-full bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-black transform translate-y-[30%] border border-white/10"
                style={{ width: SIZE, height: SIZE }}
            />




            {/* Rotating orbit */}
            <motion.div
                style={{ width: SIZE + 50, height: SIZE + 50 }}
                className="absolute transform translate-y-[30%]"
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
                                <div
                                    className="w-11 h-11 rounded-full bg-white text-black
                                    flex items-center justify-center font-bold shadow-xl relative"
                                >
                                    {step.id}
                                    <span className="text-xs 3xl:text-sm px-3 bg-white/10 py-0.5 mb-2 absolute -top-8 font-light text-white">STEP</span>
                                    <div className="absolute top-12 flex flex-col items-center text-white max-w-sm w-md">
                                        <div className="h-14 3xl:h-16 w-px bg-white" />
                                        <p className="font-semibold text-2xl 3xl:text-3xl whitespace-nowrap mt-1">The Audit (Week 1)</p>
                                        <span className="text-xs 3xl:text-base text-center font-light max-w-60 mt-1.5 3xl:mt-2">We review your ad accounts, websites, and analyics to find what's working and what's wasting money.</span>
                                        <p className="text-xs 3xl:text-base text-center font-light max-w-60 mt-5 3xl:mt-6"><span className="font-normal">What You Get:</span>{" "}Full audit report with prioritized fixes.</p>
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