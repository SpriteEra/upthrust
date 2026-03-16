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
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="w-full max-w-4xl flex flex-col md:flex-row  rounded-lg overflow-hidden">

                {/* LEFT: your image */}
                <div className="flex-shrink-0 w-full md:w-[400px] bg-gray-50 relative min-h-[300px] md:min-h-[460px] overflow-hidden">
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
                            className="object-contain p-8"
                        />
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
                            <div className="w-full h-full rounded-md  flex flex-col items-center justify-center gap-2">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <rect width="48" height="48" rx="6" fill="#f3f4f6" />
                                    <path d="M14 34L21 22L27 30L32 24L40 34H14Z" fill="#d1d5db" />
                                    <circle cx="19" cy="17" r="3" fill="#d1d5db" />
                                </svg>
                                <p className="text-xs text-gray-400 text-center font-mono px-4">
                                    {PANELS[active].image}
                                </p>
                                <p className="text-[11px] text-gray-400 text-center px-4">
                                    Place your image at<br />
                                    <code className="bg-gray-100 px-1 rounded text-[10px]">
                                        /public{PANELS[active].image}
                                    </code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ── RIGHT: accordion */}
                <div className="flex-1 divide-y divide-gray-100">
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
                                        className="text-[13px] font-semibold transition-colors duration-200"
                                        style={{ color: isOpen ? "#111827" : "#9ca3af" }}
                                    >
                                        {panel.label}
                                    </span>
                                    <span
                                        className="text-xl font-light text-gray-400 leading-none select-none transition-transform duration-300"
                                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                                    >
                                        +
                                    </span>
                                </div>

                                {/* body */}
                                <div
                                    className="overflow-hidden transition-all duration-800 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? 380 : 0,
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-[12px] text-gray-400 mb-4 leading-relaxed">
                                            {panel.tagline}
                                        </p>

                                        <ul className="space-y-[10px] mb-5">
                                            {panel.checks.map((item, ci) => (
                                                <li key={ci} className="flex items-start gap-2.5">
                                                    <svg
                                                        className="flex-shrink-0 mt-[2px]"
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M2 6.5L5 9.5L11 3.5"
                                                            stroke="#111827"
                                                            strokeWidth="1.7"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <span className="text-[13px] text-gray-700 leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            className="text-[12px] font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-150 active:scale-95"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {panel.cta}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}