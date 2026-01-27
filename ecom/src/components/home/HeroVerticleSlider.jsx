"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------------- DATA ---------------- */

const brands = [
  { name: "Brand 1", src: "/ecom/banner/banner1.webp" },
  { name: "Brand 2", src: "/ecom/banner/banner2.webp" },
  { name: "Brand 3", src: "/ecom/banner/banner3.webp" },
];

const brands2 = [
  { name: "Brand 4", src: "/ecom/banner/banner4.webp" },
  { name: "Brand 5", src: "/ecom/banner/banner5.webp" },
  { name: "Brand 6", src: "/ecom/banner/banner6.webp" },
];

const brands3 = [
  { name: "Brand 7", src: "/ecom/banner/banner7.webp" },
  { name: "Brand 8", src: "/ecom/banner/banner8.webp" },
  { name: "Brand 9", src: "/ecom/banner/banner9.webp" },
];

/* ---------------- AUTO VERTICAL COLUMN ---------------- */

function Column({ direction = -1, data }) {
  const itemRef = useRef(null);
  const rafRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);

  const GAP = 12; // space between items
  const speed = 1 * direction;

  // 📏 Measure item height dynamically
  useEffect(() => {
    if (!itemRef.current) return;

    const measure = () => {
      setItemHeight(itemRef.current.getBoundingClientRect().height);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const totalHeight = data.length * (itemHeight + GAP);

  useEffect(() => {
    if (!itemHeight) return;

    const animate = () => {
      setOffset(prev => {
        let next = prev + speed;

        if (next <= -totalHeight) next += totalHeight;
        if (next >= 0) next -= totalHeight;

        return next;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [itemHeight, totalHeight, speed]);

  return (
    <div className="overflow-hidden h-full select-none pointer-events-none">
      <div className="relative h-full">
        {[...data, ...data].map((b, i) => (
          <div
            key={i}
            ref={i === 0 ? itemRef : null}
            className="absolute left-0 w-full rounded-md xl:rounded-lg"
            style={{
              top: i * (itemHeight + GAP) + offset,
            }}
          >
            <Image
              src={b.src}
              alt={b.name}
              width={300}
              height={400}
              sizes="300px"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full h-auto aspect-[3/4] object-cover rounded"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


/* ---------------- PAGE ---------------- */

export default function HeroVerticleSlider() {
  return (
    <div className="grid grid-cols-3 gap-3 xl:gap-6 h-full">
      {/* UP */}
      <Column direction={-1} data={brands} />

      {/* DOWN */}
      <Column direction={1} data={brands2} />

      {/* UP */}
      <Column direction={-1} data={brands3} />
    </div>
  );
}