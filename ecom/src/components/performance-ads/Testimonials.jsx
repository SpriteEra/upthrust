"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PerfromanceHeading from "@/common/PerformanceHeading";

/* ── testimonial data ─────────────────────────────────────────── */
const col1 = [
    {
        name: "Troy",
        handle: "MC.Overalls",
        avatar: "/performance-agency/logos/1.png",
        brand: "/performance-agency/logos/logo1.png",
        text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
    },
    {
        name: "Rishabh Jain",
        handle: "Carrtio",
        avatar: "/performance-agency/logos/2.png",
        brand: "/performance-agency/logos/logo2.png",
        text: "In 6 months we grew organic traffic 463%. Ad expenses doing better than ever. Conversion rates improved 3x. All thanks to Upthrust.",
    },
    {
        name: "Gunjan",
        handle: "Roaar",
        avatar: "/performance-agency/logos/3.png",
        brand: "/performance-agency/logos/logo3.png",
        text: "Most leads we couldn't convert. Upthrust changed that completely. Now we close 3x more deals every month.",
    },
];

const col2 = [
    {
        name: "Giordas",
        handle: "Marketing Manager, Vega",
        avatar: "/performance-agency/logos/4.png",
        brand: "/performance-agency/logos/logo4.png",
        text: "45–50 qualified leads per month on a limited budget. For a B2B company, that's fantastic. Real game-changer.",
    },
    {
        name: "Vaibhav Vashpat",
        handle: "Co-Founder, Zocially",
        avatar: "/performance-agency/logos/5.png",
        brand: "/performance-agency/logos/logo5.png",
        text: "From zero marketing experience to hitting benchmarks. Regular calls kept the ball rolling. Never felt left in the dark.",
    },
    {
        name: "N. Dubey",
        handle: "Marketing Head, Marqutte India",
        avatar: "/performance-agency/logos/6.png",
        brand: "/performance-agency/logos/logo6.png",
        text: "SEM, Google Ads, budget allocation — Upthrust's plan was clear from day one. Results followed within weeks.",
    },
];

/* ── single card ─────────────────────────────────────────────── */
function TestimonialCard({ item }) {
    return (
        <div
            className="bg-[#F7F4F040] rounded-xl p-5  shadow-sm border border-gray-100 flex-shrink-0 h-[300px] w-[290px] 3xl:h-[350px] 3xl:w-[343px] "
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <Image src={item.avatar} alt={item.name} width={32} height={32} className="object-cover w-full h-full" />

                    </div>
                    <div>
                        <p className="text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-black">{item.name}</p>
                        <p className="text-[14px] font-normal leading-[150%] tracking-[-0.02em] text-black">{item.handle}</p>
                    </div>
                </div>
                {item.brand && (
                    <Image src={item.brand} alt={item.brand} width={100} height={20} className="text-[10px] font-bold uppercase tracking-widest  rounded px-1.5 py-0.5" />

                )}
            </div>
            <p className="text-lg 3xl:text-xl font-normal leading-[150%] tracking-[-0.02em] ">{item.text}</p>
        </div>
    );
}

/* ── vertical column (desktop) ───────────────────────────────── */
function VerticalColumn({ data, direction = 1 }) {
    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);

    const ITEM_HEIGHT = 180;
    const GAP = 16;
    const TOTAL_HEIGHT = data.length * (ITEM_HEIGHT + GAP);
    const SPEED = 0.5 * direction; // positive = upward scroll

    useEffect(() => {
        const animate = () => {
            setOffset((prev) => {
                let next = prev - SPEED; // subtract = move up
                if (next <= -TOTAL_HEIGHT) next += TOTAL_HEIGHT;
                if (next >= 0) next -= TOTAL_HEIGHT;
                return next;
            });
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [SPEED, TOTAL_HEIGHT]);

    const repeated = [...data, ...data, ...data, ...data];

    return (
        <div className="overflow-hidden flex-shrink-0 w-[290px] 3xl:w-[343px] h-screen 3xl:h-screen ">
            <div
                className="flex flex-col pointer-events-none select-none"
                style={{
                    gap: GAP,
                    transform: `translateY(${offset}px)`,
                    willChange: "transform",
                }}
            >
                {repeated.map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                ))}
            </div>
        </div>
    );
}

/* ── horizontal row (mobile) ─────────────────────────────────── */
function HorizontalRow({ data, direction = -1 }) {
    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);

    const ITEM_WIDTH = 260;
    const GAP = 16;
    const TOTAL_WIDTH = data.length * (ITEM_WIDTH + GAP);
    const SPEED = 0.6 * direction;

    useEffect(() => {
        const animate = () => {
            setOffset((prev) => {
                let next = prev + SPEED;
                if (next <= -TOTAL_WIDTH) next += TOTAL_WIDTH;
                if (next >= 0) next -= TOTAL_WIDTH;
                return next;
            });
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [SPEED, TOTAL_WIDTH]);

    const repeated = [...data, ...data, ...data, ...data];

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex pointer-events-none select-none"
                style={{
                    gap: GAP,
                    transform: `translateX(${offset}px)`,
                    willChange: "transform",
                }}
            >
                {repeated.map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="bg-white w-full overflow-hidden  relative  sm:min-h-screen flex justify-center items-center py-3 ">

            {/*  Background Image */}
            <div className="absolute top-30 inset-0 z-10">
                <Image
                    src="/performance-agency/bg-diagonal.png"
                    alt="background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/*  Main Content */}
            <div className="flex flex-col md:flex-row items-start gap-12 3xl:gap-30 relative z-10">

                {/* ── Left: Heading */}
                <div className=" w-full max-sm:max-w-[350px] mx-auto md:w-[50%] pt-2 relative z-20">
                    <span className="absolute -top-2  lg:top-8 -left-5 lg:-left-20 3xl:-left-25">
                        <svg
                            width="76"
                            height="62"
                            viewBox="0 0 76 62"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" w-11 h-9  sm:w-15 sm:h-15 3xl:w-20 3xl:h-20"
                        >
                            <path
                                d="M75.6 61.2794H41.779V27.7946L59.6126 3.96843e-06L70.4473 4.99757e-06L59.8394 26.2627H75.6V61.2794ZM33.821 61.2794H0L2.69424e-06 27.7946L17.8337 0L28.6684 1.02914e-06L18.0605 26.2627H33.821V61.2794Z"
                                fill="black"
                            />
                        </svg>
                    </span>

                    <PerfromanceHeading
                        tag="h2"
                        align="left"
                        textcss="text-left!"
                        heading={[
                            {
                                line: [
                                    { type: "normal", text: "Finally.An " },
                                    { type: "italic", text: "Agency" },
                                ],
                            },
                            {
                                line: [{ type: "normal", text: "who owns real " }],
                            },
                            {
                                line: [{ type: "normal", text: "growth." }],
                            },
                        ]}
                        subtitle=""
                    />
                </div>

                {/* ── Desktop Columns */}
                <div className="hidden md:flex gap-4 h-screen">
                    <VerticalColumn data={col1} direction={1} />
                    <VerticalColumn data={col2} direction={1} />
                </div>

                {/* ── Mobile Rows */}
                <div className="flex md:hidden flex-col gap-4 w-full -mx-6 px-0">
                    <HorizontalRow data={col1} direction={-1} />
                    <HorizontalRow data={col2} direction={1} />
                </div>

            </div>
        </section>
    );
}