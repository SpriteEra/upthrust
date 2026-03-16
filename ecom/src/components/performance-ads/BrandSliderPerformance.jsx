"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function MarqueeRow({ brands, itemWidth = 160 }) {
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [velocity, setVelocity] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const dragStartX = useRef(0);
    const dragStartOffset = useRef(0);
    const lastPositions = useRef([]);
    const animationRef = useRef(null);
    const containerRef = useRef(null);

    const totalWidth = itemWidth * brands.length;
    const autoPlaySpeed = -0.8;

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (!entry.isIntersecting && animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            },
            { threshold: 0 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     if (!isVisible || isDragging || Math.abs(velocity) > 0.1) return;
    //     const animate = () => {
    //         setOffset((prev) => {
    //             const newOffset = prev + autoPlaySpeed;
    //             return ((newOffset % totalWidth) + totalWidth) % totalWidth;
    //         });
    //         animationRef.current = requestAnimationFrame(animate);
    //     };
    //     animationRef.current = requestAnimationFrame(animate);
    //     return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
    // }, [isDragging, velocity, totalWidth, isVisible]);

    useEffect(() => {
        if (!isVisible || isDragging || Math.abs(velocity) > 0.1) return;

        let lastTime = performance.now();

        const animate = (time) => {
            const delta = time - lastTime;
            lastTime = time;

            setOffset((prev) => {
                const newOffset = prev + autoPlaySpeed * (delta / 16);
                return ((newOffset % totalWidth) + totalWidth) % totalWidth;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isDragging, velocity, totalWidth, isVisible]);
    useEffect(() => {
        if (isDragging || Math.abs(velocity) < 0.1) {
            if (!isDragging) setVelocity(0);
            return;
        }
        const decelerate = () => {
            setVelocity((prev) => {
                const nv = prev * 0.92;
                return Math.abs(nv) < 0.1 ? 0 : nv;
            });
            setOffset((prev) => {
                const no = prev + velocity;
                return ((no % totalWidth) + totalWidth) % totalWidth;
            });
            animationRef.current = requestAnimationFrame(decelerate);
        };
        animationRef.current = requestAnimationFrame(decelerate);
        return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
    }, [velocity, isDragging, totalWidth]);

    const calculateVelocity = () => {
        if (lastPositions.current.length < 2) return 0;
        const recent = lastPositions.current.slice(-5);
        const velocities = [];
        for (let i = 1; i < recent.length; i++) {
            const td = recent[i].time - recent[i - 1].time;
            const pd = recent[i].x - recent[i - 1].x;
            if (td > 0) velocities.push((pd / td) * 16);
        }
        if (!velocities.length) return 0;
        return velocities.reduce((a, b) => a + b, 0) / velocities.length;
    };

    const handleStart = (clientX) => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        setIsDragging(true);
        setVelocity(0);
        dragStartX.current = clientX;
        dragStartOffset.current = offset;
        lastPositions.current = [{ x: clientX, time: Date.now() }];
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;
        const drag = clientX - dragStartX.current;
        const no = dragStartOffset.current + drag;
        setOffset(((no % totalWidth) + totalWidth) % totalWidth);
        lastPositions.current.push({ x: clientX, time: Date.now() });
        if (lastPositions.current.length > 5) lastPositions.current.shift();
    };

    const handleEnd = () => {
        setIsDragging(false);
        setVelocity(calculateVelocity());
        lastPositions.current = [];
    };

    useEffect(() => {
        if (!isDragging) return;
        const mm = (e) => handleMove(e.clientX);
        const mu = () => handleEnd();
        document.addEventListener("mousemove", mm);
        document.addEventListener("mouseup", mu);
        return () => {
            document.removeEventListener("mousemove", mm);
            document.removeEventListener("mouseup", mu);
        };
    }, [isDragging, offset]);

    const renderItems = () => {
        const startIndex = Math.floor(-offset / itemWidth) - 2;
        const visibleCount = Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1920) / itemWidth) + 5;

        return Array.from({ length: visibleCount }, (_, i) => {
            const index = (((startIndex + i) % brands.length) + brands.length) % brands.length;
            const brand = brands[index];
            const position = (startIndex + i) * itemWidth + offset;

            return (
                <div
                    key={`${brand.id}-${startIndex + i}`}
                    className="absolute top-0 h-full flex items-center justify-center"
                    style={{ left: `${position}px`, width: `${itemWidth}px` }}
                >
                    {/* Logo */}
                    <div
                        className="flex items-center justify-center w-full h-full px-6"
                        style={{ pointerEvents: "none" }}
                    >
                        <div className="flex items-center justify-center h-7 w-28">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={110}
                                height={36}
                                draggable={false}
                                className="max-h-full max-w-full object-contain select-none opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Vertical divider — spans full height, touching top and bottom border */}
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-[#E9EAEB]" />

                    {/* Plus at TOP intersection (divider meets top border) */}
                    <div
                        className="absolute right-0 top-0 z-30 flex items-center justify-center "
                        style={{
                            transform: "translate(50%, -50%)",
                            width: "12px",
                            height: "12px",
                        }}
                    >
                        <Image src="/performance-agency/plus.png" height={10} width={10} size={10} strokeWidth={1.5} className="text-black" alt="Plus" />
                    </div>

                    {/* Plus at BOTTOM intersection (divider meets bottom border) */}
                    <div
                        className="absolute right-0 bottom-0 z-30 flex items-center justify-center "
                        style={{
                            transform: "translate(50%, 50%)",
                            width: "12px",
                            height: "12px",
                        }}
                    >
                        <Image src="/performance-agency/plus.png" height={10} width={10} size={10} strokeWidth={1.5} className="text-black" alt="Plus" />
                    </div>
                </div>
            );
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-visible cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => { e.preventDefault(); handleStart(e.clientX); }}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
            style={{ touchAction: "pan-y", height: "72px" }}
        >
            {/* Top border line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gray-200 z-0" />

            {renderItems()}

            {/* Bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0" />
        </div>
    );
}

const defaultBrands = [
    { id: 1, name: "Dell", logo: "/ecom/brand/first/f1.webp" },
    { id: 2, name: "Libas", logo: "/ecom/brand/first/f2.webp" },
    { id: 3, name: "Bosch", logo: "/ecom/brand/first/f3.webp" },
    { id: 4, name: "CLIQ", logo: "/ecom/brand/first/f4.webp" },
    { id: 5, name: "BIBA", logo: "/ecom/brand/first/f5.webp" },
    { id: 6, name: "Brand 6", logo: "/ecom/brand/first/f6.webp" },
    { id: 7, name: "Brand 7", logo: "/ecom/brand/first/f7.webp" },
    { id: 8, name: "Brand 8", logo: "/ecom/brand/first/f8.webp" },
    { id: 9, name: "Brand 9", logo: "/ecom/brand/first/f9.webp" },
    { id: 10, name: "Brand 10", logo: "/ecom/brand/first/f10.webp" },
    { id: 11, name: "Brand 11", logo: "/ecom/brand/first/f11.webp" },
    { id: 12, name: "Brand 12", logo: "/ecom/brand/first/f12.webp" },
];

export default function BrandSliderPerformance({ brands = defaultBrands }) {
    return (
        <div className="relative w-full py-6">

            {/* Blur overlay LEFT */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-20"
                style={{
                    background:
                        "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
                }}
            />

            {/* Blur overlay RIGHT */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-20"
                style={{
                    background:
                        "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
                }}
            />


            {/* CLIPPING LAYER */}
            <div className="relative overflow-x-hidden overflow-y-visible py-2">

                {/* SCROLLING CONTENT */}
                <MarqueeRow brands={brands} itemWidth={160} />

            </div>
        </div>
    );
}