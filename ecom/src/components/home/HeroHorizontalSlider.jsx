"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const brands = [
    { name: "Brand 1", src: "/ecom/banner/banner1.webp" },
    { name: "Brand 2", src: "/ecom/banner/banner2.webp" },
    { name: "Brand 3", src: "/ecom/banner/banner3.webp" },
]

const brands2 = [
    { name: "Brand 4", src: "/ecom/banner/banner4.webp" },
    { name: "Brand 5", src: "/ecom/banner/banner5.webp" },
    { name: "Brand 6", src: "/ecom/banner/banner6.webp" },
]

const brands3 = [
    { name: "Brand 7", src: "/ecom/banner/banner7.webp" },
    { name: "Brand 8", src: "/ecom/banner/banner8.webp" },
    { name: "Brand 9", src: "/ecom/banner/banner9.webp" },
]

/* ---------------- AUTO HORIZONTAL ROW ---------------- */

function Row({ direction = -1, data }) {
    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);

    const ITEM_WIDTH = 120;
    const GAP = 16;
    const TOTAL_WIDTH = data.length * (ITEM_WIDTH + GAP);
    const SPEED = 1 * direction;

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

    return (
        <div className="overflow-hidden w-full select-none pointer-events-none">
            <div
                className="flex gap-4"
                style={{
                    transform: `translateX(${offset}px)`,
                    willChange: "transform",
                }}
            >
                {[...data, ...data, ...data, ...data].map((b, i) => (
                    <div
                        key={i}
                        className="w-[120px] h-[160px] rounded overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={b.src}
                            alt={b.name}
                            width={180}
                            height={140}
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- PAGE ---------------- */


export default function HeroHorizontalSlider() {
    return (
        <div className="overflow-hidden max-w-[85vw] w-full space-y-4">
            <Row direction={-1} data={brands} />
            <Row direction={1} data={brands2} />
            <Row direction={-1} data={brands3} />
        </div>
    )
}
