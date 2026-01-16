"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const brands = Array.from({ length: 10 }).map((_, i) => ({
  name: `Brand ${i}`,
  src: "/brand1.png",
}))

function Row({ direction = -1 }) {
  const x = useMotionValue(0)

  // base auto speed
  const baseSpeed = 20 * direction
  const velocity = useRef(baseSpeed)

  // width of one full loop
  const loopWidth = 140 * brands.length

  useAnimationFrame((_, delta) => {
    // smooth decay back to base speed
    velocity.current += (baseSpeed - velocity.current) * 0.02

    let next = x.get() + (velocity.current * delta) / 1000

    // infinite wrap
    if (next <= -loopWidth) next += loopWidth
    if (next >= 0) next -= loopWidth

    x.set(next)
  })

  return (
    <div
      className="overflow-hidden w-full select-none"
      style={{ touchAction: "pan-y" }}
    >
      <motion.div
        className="flex gap-20"
        style={{ x }}
        drag="x"
        dragMomentum={false}
        dragElastic={0}
        onDrag={(_, info) => {
          // throw strength depends on swipe speed
          velocity.current = info.velocity.x * 0.15
        }}
      >
        {[...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="min-w-[140px] flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
            style={{
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            <Image
              src={b.src}
              alt={b.name}
              width={120}
              height={40}
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function BrandSlider() {
  return (
    <section className="py-20 bg-[#F7F8F4] space-y-14 overflow-hidden">
      <h2 className="text-center text-lg font-medium">
        Trusted by 500+ of the world’s top brands
      </h2>

      {/* top row → left */}
      <Row direction={-1} />

      {/* bottom row → right */}
      <Row direction={1} />
    </section>
  )
}
