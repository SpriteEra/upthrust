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
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);

  const ITEM_HEIGHT = 320;
  const totalHeight = data.length * ITEM_HEIGHT;
  const speed = 0.8 * direction;

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => {
        let next = prev + speed;

        if (next <= -totalHeight) next += totalHeight;
        if (next >= 0) next -= totalHeight;

        return next;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, totalHeight]);

  return (
    <div className="overflow-hidden h-full select-none pointer-events-none">
      <div className="relative h-full">
        {[...data, ...data].map((b, i) => (
          <div
            key={i}
            className="absolute left-0 w-full h-[310px] xl:h-[320px] 3xl:h-[330px] rounded-md xl:rounded-lg"
            style={{
              top: i * ITEM_HEIGHT + offset,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={b.src}
                alt={b.name}
                fill
                className="object-cover rounded xs:rounded-lg py-1 3xl:py-1.5"
                sizes="(min-width: 1280px) 300px, 33vw"
                loading="lazy"
                draggable={false}
              />
            </div>

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