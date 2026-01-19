"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

const brands = [
    { name: "Brand 3", src: "/banner3.png" },
    { name: "Brand 4", src: "/banner4.png" },
    { name: "Brand 6", src: "/banner6.png" },
    { name: "Brand 1", src: "/banner1.png" },
    { name: "Brand 2", src: "/banner2.png" },
    { name: "Brand 5", src: "/banner5.png" },
]
const brands2 = [
    { name: "Brand 2", src: "/banner2.png" },
    { name: "Brand 1", src: "/banner1.png" },
    { name: "Brand 3", src: "/banner3.png" },
    { name: "Brand 5", src: "/banner5.png" },
    { name: "Brand 4", src: "/banner4.png" },
    { name: "Brand 6", src: "/banner6.png" },
]
const brands3 = [
    { name: "Brand 2", src: "/banner2.png" },
    { name: "Brand 3", src: "/banner3.png" },
    { name: "Brand 4", src: "/banner4.png" },
    { name: "Brand 5", src: "/banner5.png" },
    { name: "Brand 1", src: "/banner1.png" },
    { name: "Brand 6", src: "/banner6.png" },
]
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

function useSupersideSlider(direction = -1, axis = "y") {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let size = 0
    let speed = 0.35 * direction

    const measure = () => {
      size = axis === "y"
        ? el.scrollHeight / 2
        : el.scrollWidth / 2
    }

    // ⬅️ IMPORTANT: measure AFTER images load
    requestAnimationFrame(() => {
      measure()
    })

    const tick = () => {
      if (!size) return

      let pos = gsap.getProperty(el, axis)
      pos += speed

      if (pos <= -size) pos += size
      if (pos >= 0) pos -= size

      gsap.set(el, { [axis]: pos })
    }

    gsap.ticker.add(tick)
    window.addEventListener("resize", measure)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener("resize", measure)
    }
  }, [direction, axis])

  return trackRef
}


function Column({ direction, data }) {
  const isMobile = useIsMobile()

  const ref = useSupersideSlider(
    direction,
    isMobile ? "x" : "y"
  )

  return (
    <div
      className={`
        overflow-hidden select-none
        ${isMobile ? "w-full xs:h-55" : "h-full"}
      `}
    >
      <div
        ref={ref}
        className={`
          flex gap-2 3xl:gap-10
          ${isMobile ? "flex-row w-max" : "flex-col"}
        `}
      >
        {[...data, ...data].map((b, i) => (
          <div
            key={i}
            className={`
              flex-shrink-0 rounded-lg
              ${isMobile ? "h-35 max-xs:w-30 xs:h-50" : "h-[320px]"}
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
        <div className="grid md:grid-cols-3 gap-2 xs:gap-6 3xl:gap-10">
            {/* left column → up */}
            <Column direction={-1} data={brands} />

            {/* right column → down */}
            <Column direction={1} data={brands2} />
            <Column direction={-1} data={brands3} />
        </div>
    )
}
