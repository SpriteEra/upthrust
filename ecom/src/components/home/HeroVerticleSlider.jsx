"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

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

function useVerticalSlider(direction = -1) {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let height = 0
    const speed = 0.8 * direction

    const measure = () => {
      height = el.scrollHeight / 2
    }

    requestAnimationFrame(measure)

    const tick = () => {
      if (!height) return

      let y = gsap.getProperty(el, "y")
      y += speed

      if (y <= -height) y += height
      if (y >= 0) y -= height

      gsap.set(el, { y })
    }

    gsap.ticker.add(tick)
    window.addEventListener("resize", measure)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener("resize", measure)
    }
  }, [direction])

  return trackRef
}

function Column({ direction, data }) {
  const ref = useVerticalSlider(direction)

  return (
    <div className="overflow-hidden h-full select-none">
      <div ref={ref} className="flex flex-col gap-4">
        {[...data, ...data].map((b, i) => (
          <div
            key={i}
            className={`
              flex-shrink-0 rounded-lg h-[320px]
            `}
          >
            <Image
              src={b.src}
              alt={b.name}
              width={300}
              height={300}
              className="h-full w-full object-cover rounded xs:rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroVerticleSlider() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Column direction={-1} data={brands} />
      <Column direction={1} data={brands2} />
      <Column direction={-1} data={brands3} />
    </div>
  )
}
