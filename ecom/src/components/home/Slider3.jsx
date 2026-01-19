"use client"

import { useEffect, useRef } from "react"
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

function useSupersideSlider(direction = -1) {
    const trackRef = useRef(null)

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const totalHeight = el.scrollHeight / 2
        let baseSpeed = 0.35 * direction

        const tick = () => {
            let y = gsap.getProperty(el, "y")
            y += baseSpeed

            if (y <= -totalHeight) y += totalHeight
            if (y >= 0) y -= totalHeight

            gsap.set(el, { y })
        }

        gsap.ticker.add(tick)

        return () => {
            gsap.ticker.remove(tick)
        }
    }, [direction])

    return trackRef
}
function Column({ direction, data }) {
    const ref = useSupersideSlider(direction)

    return (
        <div className="overflow-hidden h-full select-none">
            <div
                ref={ref}
                className="flex flex-col gap-4 3xl:gap-10"
                style={{
                    userSelect: "none",
                    WebkitUserDrag: "none",
                }}
            >
                {[...data, ...data].map((b, i) => (
                    <div
                        key={i}
                        className="h-[320px] flex items-center justify-center rounded-lg"
                        style={{ pointerEvents: "none" }}
                    >
                        <Image
                            src={b.src}
                            alt={b.name}
                            width={200}
                            height={300}
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function HeroVerticleSlider() {
    return (
        <div className="grid grid-cols-3 gap-6 3xl:gap-10">
            {/* left column → up */}
            <Column direction={-1} data={brands} />

            {/* right column → down */}
            <Column direction={1} data={brands2} />
            <Column direction={-1} data={brands3} />
        </div>
    )
}
