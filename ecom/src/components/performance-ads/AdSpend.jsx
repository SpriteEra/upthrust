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
    const isInView = useInView(sectionRef, { amount: 0.5, once: false });

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white overflow-hidden max-sm:h-300"
        >
            <div className="max-w-[90%] 3xl:max-w-[1500px]   mx-auto py-16  flex flex-col lg:flex-row items-center gap-12 lg:gap-0  ">

                <div className="shrink-0 max-sm:relative z-10 w-full lg:w-[420px] xl:w-[460px] 2xl:w-[500px] 3xl:w-[600px] ">
                    <motion.h2

                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[42px] md:text-5xl lg:text-[60px] 3xl:text-[73px] 1800:text-[80px] font-semibold leading-[120%] tracking-[-0.02em] text-black mb-6"
                    >
                        <em className="italic font-normal font-instrument">Ad Spend</em> That<br />
                        Performs
                    </motion.h2>

                    <motion.p

                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em] text-black  mb-5  "
                    >
                        In a market where agencies get paid whether you profit
                        or not, we believe performance marketing should mean
                        exactly that: campaigns that generate more revenue
                        than they cost, returns you can verify, growth that
                        compounds quarter over quarter.
                    </motion.p>

                    <motion.p

                        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                        className="text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em] text-black mb-10 "
                    >
                        We are a performance marketing agency built entirely
                        around one metric: yours.
                    </motion.p>

                    <motion.button

                        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                        className="border border-black bg-black text-white text-xs lg:text-[19px] tracking-[0.12em] uppercase font-medium px-6 py-3 hover:bg-orange hover:border-white hover:text-white transition-colors duration-200"
                    >
                        Get Ad Account Audit →
                    </motion.button>
                </div>

                <div className="relative max-sm:h-full z-0 flex-1 flex items-center justify-end w-full">

                    <motion.div
                        className="absolute -left-25 inset-0 flex items-center justify-end"
                        animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <Image
                            src="/performance-agency/circle1.png"
                            alt="Concentric circles dark"
                            width={680}
                            height={420}
                            className="w-full max-sm:hidden max-w-[680px] xl:max-w-[800px] 3xl:max-w-[1148px] object-contain"
                            priority
                        />
                        <Image
                            src="/performance-agency/circle3.png"
                            alt="Concentric circles dark"
                            width={680}
                            height={1000}
                            className="w-full hidden max-sm:block   object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Colourful image — fades in when in view */}
                    <motion.div
                        className="absolute -left-25 max-sm:z-10 flex items-center justify-end w-full"
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}

                    >
                        <Image
                            src="/performance-agency/circle2.png"
                            alt="Concentric circles colourful"
                            width={680}
                            height={420}
                            className="w-full max-sm:hidden  sm:max-w-[680px] xl:max-w-[800px] 3xl:max-w-[1148px] object-contain"
                            priority
                        />
                        <Image
                            src="/performance-agency/circle4.png"
                            alt="Concentric circles dark"
                            width={680}
                            height={1000}
                            className="w-full hidden max-sm:block  object-contain"
                            priority
                        />

                    </motion.div>

                    {/* Stat pills — staggered fade-in on scroll */}
                    {/* <div className="absolute max-lg:hidden inset-0 pointer-events-none">
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
                                <span className="bg-orange text-white rounded-full px-2 py-0.5 text-[11px] font-semibold">
                                    {stat.value}
                                </span>
                            </motion.div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

// // Position each stat pill to match the image layout
// function getStatPosition(index) {
//     const positions = [
//         { top: "12%", left: "28%" },   // Ad Spend Managed — top center
//         { top: "30%", right: "2%" },   // Avg. Client ROAS — top right
//         { top: "52%", left: "32%" },   // Clients Scaled — middle
//         { top: "72%", right: "2%" },   // Average Retention — bottom right
//     ];
//     return positions[index];
// }