"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PANELS = [
    {
        id: 1,
        label: "Panel 1: Audit & Roadmap",
        tagline: "Find the holes in your ad account before spending another rupee.",
        checks: [
            "Wasted spend identified",
            "Competitor ad teardown",
            "Channel-market fit scoring",
            "Custom KPI dashboard (yours to keep)",
            "90-day roadmap delivered",
        ],
        cta: "Audit to Launch → ₹11k",
        image: "/performance-agency/panel/panel1.png",
    },
    {
        id: 2,
        label: "Panel 2: Campaigns",
        tagline: 'We manage campaigns daily not monthly, not "when we get to it." Channels managed:',
        checks: [
            "Campaigns structured",
            "Bids optimized daily",
            "Low performers killed",
            "Budget moved to winners",
        ],
        cta: "Average CPA drop → ₹18k",
        image: "/performance-agency/panel/panel2.png",
    },
    {
        id: 3,
        label: "Panel 3: Creative Engine",
        tagline: "High-velocity creative testing the real edge, not media buying. What we produce: UGC, Static, Video",
        checks: [
            "Hooks tested weekly",
            "UGC sourced & managed",
            "Winning ads scaled",
            "Fatigued creatives replaced"
        ],
        cta: "Ads tested monthly → 200+",
        image: "/performance-agency/panel/panel3.png",
    },
    {
        id: 4,
        label: "Panel 4: Measurement",
        tagline: "Connect ad spend to real revenue, finally know what's actually working.Systems connected: GA4, CRM, Store",
        checks: [
            "Server-side tracking setup",
            "Ad platforms ↔ revenue connected",
            "COD vs Prepaid tracked",
            "Weekly P&L reports",
        ],
        cta: "Setup Time → 5 days",
        image: "/performance-agency/panel/panel4.png",
    },
];

export default function MarketingPanel() {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    const switchTo = (idx) => {
        if (idx === active) return;
        setFading(true);
        setTimeout(() => {
            setActive(idx);
            setFading(false);
        }, 250);
    };

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setActive((prev) => (prev + 1) % PANELS.length);
                setFading(false);
            }, 250);
        }, 3000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return (
        <>
            <div className="hidden md:flex  max-h-[775px] max-w-[90%] mx-auto bg-white  items-center justify-center p-6">
                <div className="w-full justify-between gap-10 3xl:gap-20 flex flex-col md:flex-row rounded-lg overflow-hidden">

                    {/* LEFT: your image */}
                    <div className="shrink-0 max-lg:hidden w-full md:w-[400px] xl:w-[600px] 3xl:w-[834px] relative min-h-[300px] aspect-834/748 md:min-h-[460px]  xl:h-[550px] 3xl:h-[690px] 1800:h-[720px] overflow-hidden">
                        <div
                            className="absolute inset-0 transition-all duration-800 ease-in-out"
                            style={{
                                opacity: fading ? 0 : 1,
                                transform: fading ? "scale(0.97)" : "scale(1)",
                            }}
                        >
                            <Image
                                src={PANELS[active].image}
                                alt={PANELS[active].label}
                                fill
                                className="object-contain h-full w-full "
                            />
                            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
                                <div className="w-full h-full rounded-md  flex flex-col items-center justify-center gap-2">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect width="48" height="48" rx="6" fill="#f3f4f6" />
                                        <path d="M14 34L21 22L27 30L32 24L40 34H14Z" fill="#d1d5db" />
                                        <circle cx="19" cy="17" r="3" fill="#d1d5db" />
                                    </svg>
                                    <p className="text-xs  text-center font-mono px-4">
                                        {PANELS[active].image}
                                    </p>
                                    <p className="text-[11px]  text-center px-4">
                                        Place your image at<br />
                                        <code className=" px-1 rounded text-[10px]">
                                            /public{PANELS[active].image}
                                        </code>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ── RIGHT: accordion */}
                    <div className="flex-1 divide-y border bg-[#F5F5F5]  divide-gray-700 h-full  overflow-hidden max-w-[676px] ">
                        {PANELS.map((panel, i) => {
                            const isOpen = i === active;
                            return (
                                <div
                                    key={panel.id}
                                    className="cursor-pointer select-none"
                                    onClick={() => {
                                        switchTo(i);
                                        resetTimer();
                                    }}
                                >
                                    {/* header */}
                                    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                                        <span
                                            className="text-[30px] tracking-[-0.02em] leading-[150%]  font-semibold transition-colors duration-200"
                                            style={{ color: isOpen ? "#111827" : "#9ca3af" }}
                                        >
                                            {panel.label}
                                        </span>
                                        <span
                                            className="text-xl font-light text-black leading-none select-none transition-transform duration-300"

                                        >
                                            {isOpen ? "-" : "+"}
                                        </span>
                                    </div>

                                    {/* body */}
                                    <div className="relative">
                                        <div
                                            className={`transition-all duration-500 ${isOpen ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"
                                                }`}
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-[18px] tracking-[-0.02em] leading-[150%]  mb-4 ">
                                                    {panel.tagline}
                                                </p>

                                                <ul className="space-y-[10px] mb-5">
                                                    {panel.checks.map((item, ci) => (
                                                        <li key={ci} className="flex items-start gap-2.5">
                                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_18720_8944)">
                                                                    <g clip-path="url(#clip1_18720_8944)">
                                                                        <path d="M24.8073 12.4037C24.8073 5.55331 19.254 0 12.4037 0C5.55331 0 0 5.55331 0 12.4037C0 19.254 5.55331 24.8073 12.4037 24.8073C19.254 24.8073 24.8073 19.254 24.8073 12.4037Z" fill="#F5F5F5" />
                                                                        <path d="M5.17822 13.9531L10.3464 19.1213L20.6827 8.78491" stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </g>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_18720_8944">
                                                                        <rect width="24.8073" height="24.8073" fill="white" />
                                                                    </clipPath>
                                                                    <clipPath id="clip1_18720_8944">
                                                                        <rect width="24.8073" height="24.8073" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                            <span className="text-[20px] tracking-[-0.02em] leading-[150%]">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button
                                                    className="text-[16px] font-semibold px-4 py-2  text-black  transition-colors duration-150 active:scale-95"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {panel.cta}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            {/* MOBILE VIEW */}
            <div className="md:hidden px-4 py-2 space-y-6 bg-white">
                {PANELS.map((panel) => (
                    <div key={panel.id} className="bg-[#F5F5F5] p-5 border border-black/60 rounded-md">

                        {/* Title */}
                        <h2 className="text-[24px] font-semibold mb-3">
                            {panel.label}
                        </h2>

                        {/* Tagline */}
                        <p className="text-[15px] text-gray-700 mb-4">
                            {panel.tagline}
                        </p>

                        {/* Checks */}
                        <ul className="space-y-3 mb-4">
                            {panel.checks.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-green-500 text-lg">✔</span>
                                    <span className="text-[15px]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <p className="text-sm text-gray-500 font-medium">
                            {panel.cta}
                        </p>
                    </div>
                ))}
            </div>

        </>
    );
}