"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sections = [
    {
        id: 1,
        label: "THE FOUNDATION OF SUCCESS",
        labelSide: "right",
        image: "/creative-agency/progress.png",
        imagePosition: "left",
    },
    {
        id: 2,
        label: "CLARIFYING THE MISSION",
        labelSide: "left",
        image: "/creative-agency/progress.png",
        imagePosition: "right",
    },
    {
        id: 3,
        label: "WHERE MAGIC MEETS METHOD",
        labelSide: "right",
        image: "/creative-agency/progress.png",
        imagePosition: "left",
    },
    {
        id: 4,
        label: "LIGHTS, CAMERA, ACTION",
        labelSide: "left",
        image: "/creative-agency/progress.png",
        imagePosition: "right",
    },
    {
        id: 5,
        label: "TESTING OUR HYPOTHESIS",
        labelSide: "right",
        image: "/creative-agency/progress.png",
        imagePosition: "left",
    },
    {
        id: 6,
        label: "THE FEEDBACK LOOP",
        labelSide: "left",
        image: "/creative-agency/progress.png",
        imagePosition: "right",
    },
];

export default function ProgressTimeline() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const { top, height } = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrolled = -top;
            const total = height - windowHeight;
            const progress = Math.min(Math.max(scrolled / total, 0), 1);
            setScrollProgress(progress);

            // Determine active section
            sectionRefs.current.forEach((ref, idx) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
                    setActiveSection(idx);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative  min-h-screen overflow-hidden "
        >
            {/* Desktop: Center vertical line | Mobile: Left vertical line */}
            <div
                className="fixed top-0 left-6 md:left-1/2 md:-translate-x-px w-px bg-zinc-800 z-10"
                style={{ height: "100vh" }}
            />

            {/* Orange progress line */}
            <div
                className="fixed top-0 left-6 md:left-1/2 md:-translate-x-px w-px bg-orange-500 z-20 transition-none origin-top"
                style={{
                    height: `${scrollProgress * 100}vh`,
                }}
            />

            {/* Sections */}
            <div className="relative z-30 pt-24 pb-32">
                {sections.map((section, idx) => {
                    const isRight = section.imagePosition === "right";
                    const isActive = activeSection === idx;

                    return (
                        <div
                            key={section.id}
                            ref={(el) => (sectionRefs.current[idx] = el)}
                            className="relative flex items-center min-h-screen mb-0"
                        >
                            {/* Desktop Layout */}
                            <div className="hidden md:flex w-full items-center justify-center relative px-8">
                                {/* Left side */}
                                <div className="w-5/12 flex items-center justify-end pr-16">
                                    {isRight ? (
                                        // Label on left
                                        <span
                                            className={`text-xs tracking-[0.3em] font-bold transition-colors duration-500 ${isActive ? "text-orange-500" : "text-zinc-600"
                                                }`}
                                        >
                                            {section.label}
                                        </span>
                                    ) : (
                                        // Image on left
                                        <div
                                            className={`relative w-80 h-56 rounded-sm overflow-hidden transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                                                }`}
                                        >
                                            <img
                                                src={section.image}
                                                alt={section.label}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.background = "#1a1a1a";
                                                    e.target.style.display = "block";
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Center dot */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isActive
                                            ? "border-orange-500 bg-orange-500"
                                            : "border-zinc-700 bg-black"
                                            }`}
                                    >
                                        <span
                                            className={`text-xs font-bold transition-colors duration-300 ${isActive ? "text-black" : "text-zinc-600"
                                                }`}
                                        >
                                            {section.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Right side */}
                                <div className="w-5/12 flex items-center justify-start pl-16">
                                    {isRight ? (
                                        // Image on right
                                        <div
                                            className={`relative w-80 h-56 rounded-sm overflow-hidden transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                                                }`}
                                        >
                                            <img
                                                src={section.image}
                                                alt={section.label}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.background = "#1a1a1a";
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        // Label on right
                                        <span
                                            className={`text-xs tracking-[0.3em] font-bold transition-colors duration-500 ${isActive ? "text-orange-500" : "text-zinc-600"
                                                }`}
                                        >
                                            {section.label}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="flex md:hidden w-full items-start pl-16 pr-6 py-20">
                                {/* Dot on line (left) */}
                                <div
                                    className={`absolute left-[18px] -translate-x-1/2 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isActive
                                        ? "border-orange-500 bg-orange-500"
                                        : "border-zinc-700 bg-black"
                                        }`}
                                    style={{ top: "50%" }}
                                >
                                    <span
                                        className={`text-xs font-bold transition-colors duration-300 ${isActive ? "text-black" : "text-zinc-600"
                                            }`}
                                    >
                                        {section.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-4 w-full">
                                    <span
                                        className={`text-xs tracking-[0.25em] font-bold transition-colors duration-500 ${isActive ? "text-orange-500" : "text-zinc-600"
                                            }`}
                                    >
                                        {section.label}
                                    </span>
                                    <div
                                        className={`relative w-full h-48 rounded-sm overflow-hidden transition-all duration-700 ${isActive ? "opacity-100" : "opacity-40"
                                            }`}
                                    >
                                        <img
                                            src={section.image}
                                            alt={section.label}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.background = "#1a1a1a";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Progress indicator */}
            <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col items-end gap-1">
                <span className="text-orange-500 text-xs tracking-widest font-bold">
                    {Math.round(scrollProgress * 100)}%
                </span>
                <div className="w-16 h-px bg-zinc-800">
                    <div
                        className="h-full bg-orange-500 transition-all duration-100"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}