"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── testimonial data ─────────────────────────────────────────── */
const col1 = [
    {
        name: "Troy",
        handle: "MC.Overalls",
        avatar: "/testimonials/troy.jpg",
        brand: null,
        text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
    },
    {
        name: "Rishabh Jain",
        handle: "Carrtio",
        avatar: "/testimonials/rishabh.jpg",
        brand: "carrtio",
        text: "In 6 months we grew organic traffic 463%. Ad expenses doing better than ever. Conversion rates improved 3x. All thanks to Upthrust.",
    },
    {
        name: "Gunjan",
        handle: "Roaar",
        avatar: "/testimonials/gunjan.jpg",
        brand: "roaar",
        text: "Most leads we couldn't convert. Upthrust changed that completely. Now we close 3x more deals every month.",
    },
];

const col2 = [
    {
        name: "Giordas",
        handle: "Marketing Manager, Vega",
        avatar: "/testimonials/giordas.jpg",
        brand: "VEGA",
        text: "45–50 qualified leads per month on a limited budget. For a B2B company, that's fantastic. Real game-changer.",
    },
    {
        name: "Vaibhav Vashpat",
        handle: "Co-Founder, Zocially",
        avatar: "/testimonials/vaibhav.jpg",
        brand: "zocially",
        text: "From zero marketing experience to hitting benchmarks. Regular calls kept the ball rolling. Never felt left in the dark.",
    },
    {
        name: "N. Dubey",
        handle: "Marketing Head, Marqutte India",
        avatar: "/testimonials/ndubey.jpg",
        brand: null,
        text: "SEM, Google Ads, budget allocation — Upthrust's plan was clear from day one. Results followed within weeks.",
    },
];

/* ── single card ─────────────────────────────────────────────── */
function TestimonialCard({ item }) {
    return (
        <div
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-shrink-0"
            style={{ width: 260, minWidth: 260 }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    {/* avatar placeholder — replace src with item.avatar */}
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        {/* <Image src={item.avatar} alt={item.name} width={32} height={32} className="object-cover w-full h-full" /> */}
                        <div className="w-full h-full flex items-center justify-center text-xs font-bold text-gray-500">
                            {item.name[0]}
                        </div>
                    </div>
                    <div>
                        <p className="text-[12px] font-semibold text-gray-900 leading-tight">{item.name}</p>
                        <p className="text-[10px] text-gray-400 leading-tight">{item.handle}</p>
                    </div>
                </div>
                {item.brand && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700 border border-gray-200 rounded px-1.5 py-0.5">
                        {item.brand}
                    </span>
                )}
            </div>
            <p className="text-[12px] text-gray-600 leading-relaxed">{item.text}</p>
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
        <div className="overflow-hidden flex-shrink-0" style={{ width: 260, height: 520 }}>
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

/* ── main section ────────────────────────────────────────────── */
export default function Testimonials() {
    return (
        <section className="bg-white w-full overflow-hidden py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

                {/* ── left: heading ──────────────────────────────────── */}
                <div className="flex-shrink-0 md:w-[340px] pt-2">
                    <span className="text-5xl font-serif text-gray-900 leading-none select-none">"</span>
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight mt-1">
                        Finally. An{" "}
                        <em className="font-serif font-normal italic">Agency</em>
                        <br />
                        Who Owns Real
                        <br />
                        Growth.
                    </h2>
                </div>


                {/* Desktop: two vertical columns side by side */}
                <div className="relative flex gap-4">

                    {/* Background Image */}
                    <Image
                        src="/performance-agency/bg-diagonal.png"
                        alt=""
                        fill
                        className="object-cover opacity-10 pointer-events-none absolute inset-0"
                    />

                    <VerticalColumn data={col1} direction={1} />
                    <VerticalColumn data={col2} direction={1} />

                </div>

                {/* Mobile: two horizontal rows stacked */}
                <div className="flex md:hidden flex-col gap-4 w-full -mx-6 px-0">
                    <HorizontalRow data={col1} direction={-1} />
                    <HorizontalRow data={col2} direction={1} />
                </div>

            </div>
        </section>
    );
}