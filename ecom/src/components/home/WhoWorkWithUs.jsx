"use client";

import {
    motion,
    useMotionValue,
    useAnimationFrame,
    animate,
} from "framer-motion";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";

const brands = [
    { name: "Brand 1", src: "/brand1.png" },
    { name: "Brand 2", src: "/brand2.png" },
    { name: "Brand 3", src: "/brand3.png" },
    { name: "Brand 4", src: "/brand4.png" },
    { name: "Brand 5", src: "/brand5.png" },
];

function InfiniteRow({ direction = -1, speedMultiplier = 60 }) {
    const x = useMotionValue(0);
    const speed = speedMultiplier * direction;

    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const lastX = useRef(0);
    const velocity = useRef(speed);

    const [itemWidth, setItemWidth] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    // Track which logo is hovered
    const [hoveredLogo, setHoveredLogo] = useState(null);

    useLayoutEffect(() => {
        const brandItemWidth = 184; // 160px + 24px gap
        setItemWidth(brandItemWidth);

        const totalBrandsW = brands.length * brandItemWidth;
        setTotalWidth(totalBrandsW);

        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }

        x.set(-totalBrandsW * 10); // start in middle
    }, [x]);

    // Infinite animation
    useAnimationFrame((_, delta) => {
        if (isDragging.current) return;

        // pause if any logo is hovered
        if (hoveredLogo !== null) return;

        velocity.current += (speed - velocity.current) * 0.02;
        x.set(x.get() + (velocity.current * delta) / 1000);
    });

    // Drag handlers
    const onPointerDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        lastX.current = e.clientX;
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
    };

    const onPointerMove = (e) => {
        if (!isDragging.current) return;
        const dx = e.clientX - lastX.current;
        lastX.current = e.clientX;
        x.set(x.get() + dx);
        velocity.current = dx * 30;
    };

    const onPointerUp = () => {
        isDragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    };

    const renderBrands = () => {
        if (!totalWidth || !containerWidth) return null;

        const setsNeeded = Math.ceil(containerWidth / totalWidth) + 20;
        const all = [];
        for (let i = 0; i < setsNeeded; i++) {
            all.push(
                ...brands.map((b, idx) => {
                    const key = `${i}-${idx}`;
                    const isHovered = hoveredLogo === key;
                    return (
                        <motion.div
                            key={key}
                            className="min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
                            style={{ pointerEvents: "auto" }}
                            onMouseEnter={() => setHoveredLogo(key)}
                            onMouseLeave={() => setHoveredLogo(null)}
                            animate={{ scale: isHovered ? 5 : 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Image
                                src={b.src}
                                alt={b.name}
                                width={120}
                                height={40}
                                draggable={false}
                                className="select-none"
                            />
                        </motion.div>
                    );
                }),
            );
        }
        return all;
    };

    return (
        <div ref={containerRef} className="relative overflow-hidden w-full">
            {/* Gradient edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F8F4] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F8F4] to-transparent z-10 pointer-events-none" />

            <div
                className="cursor-grab active:cursor-grabbing select-none"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            >
                <motion.div className="flex gap-24 will-change-transform" style={{ x }}>
                    {renderBrands()}
                </motion.div>
            </div>
        </div>
    );
}

export default function WhoWorkWithUs() {
    return (
        <section className="py-20 bg-[#F7F8F4] space-y-14 overflow-hidden">
            <h2 className="text-center text-lg font-medium">
                Trusted by 500+ of the world's top brands
            </h2>

            <InfiniteRow direction={1} />
            <InfiniteRow direction={-1} />
        </section>
    );
}