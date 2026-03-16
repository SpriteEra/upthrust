"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { label: "Ad Spend Managed", value: "47Cr+" },
    { label: "Avg. Client ROAS", value: "4.2x" },
    { label: "Clients Scaled", value: "80+" },
    { label: "Average Retention", value: "23 mo" },
];

export default function AdSpend() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.3, once: false });

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white overflow-hidden"
        >
            <div className="max-w-[90%] mx-auto px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                {/* ── LEFT: Text + CTA ── */}
                <div className="flex-shrink-0 w-full lg:w-[420px] xl:w-[460px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-black mb-6"
                    >
                        <em className="italic font-normal">Ad Spend</em> That<br />
                        Performs
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-sm text-black/60 leading-relaxed mb-5 max-w-[340px]"
                    >
                        In a market where agencies get paid whether you profit
                        or not, we believe performance marketing should mean
                        exactly that: campaigns that generate more revenue
                        than they cost, returns you can verify, growth that
                        compounds quarter over quarter.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                        className="text-sm text-black/60 leading-relaxed mb-10 max-w-[340px]"
                    >
                        We are a performance marketing agency built entirely
                        around one metric: yours.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                        className="border border-black text-black text-xs tracking-[0.12em] uppercase font-medium px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                        Get Ad Account Audit →
                    </motion.button>
                </div>

                {/* ── RIGHT: Concentric circles image ── */}
                <div className="relative flex-1 flex items-center justify-end w-full">

                    {/* Greyscale image — always visible, fades out when in view */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-end"
                        animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <Image
                            src="/performance-agency/circle1.png"
                            alt="Concentric circles dark"
                            width={680}
                            height={420}
                            className="w-full max-w-[680px] xl:max-w-[800px] 3xl:max-w-[1148px] object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Colourful image — fades in when in view */}
                    <motion.div
                        className="relative flex items-center justify-end w-full"
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <Image
                            src="/performance-agency/circle2.png"
                            alt="Concentric circles colourful"
                            width={680}
                            height={420}
                            className="w-full max-w-[680px] xl:max-w-[800px] 3xl:max-w-[1148px] object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Stat pills — staggered fade-in on scroll */}
                    <div className="absolute inset-0 pointer-events-none">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="absolute flex items-center gap-2 bg-white border border-black/10 shadow-sm rounded-full px-3 py-1.5 text-xs font-medium text-black whitespace-nowrap"
                                style={getStatPosition(i)}
                                initial={{ opacity: 0, x: 12 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                            >
                                <span className="text-black/70">{stat.label}</span>
                                <span className="bg-black/90 text-white rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                    {stat.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Position each stat pill to match the image layout
function getStatPosition(index) {
    const positions = [
        { top: "12%", left: "28%" },   // Ad Spend Managed — top center
        { top: "30%", right: "2%" },   // Avg. Client ROAS — top right
        { top: "52%", left: "32%" },   // Clients Scaled — middle
        { top: "72%", right: "2%" },   // Average Retention — bottom right
    ];
    return positions[index];
}