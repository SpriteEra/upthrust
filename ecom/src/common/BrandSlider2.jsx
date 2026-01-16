"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)

const brands = Array.from({ length: 10 }).map((_, i) => ({
    name: `Brand ${i}`,
    src: "/brand1.png",
}))

function useSupersideSlider(direction = -1) {
    const trackRef = useRef(null)

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        const totalWidth = el.scrollWidth / 2

        let baseSpeed = 0.35 * direction   // AUTO SCROLL SPEED
        let dragSpeed = 0                  // EXTRA FORCE FROM DRAG

        // 🔁 AUTO + DRAG LOOP (NEVER STOPS)
        gsap.ticker.add(() => {
            // smooth decay of drag force
            dragSpeed *= 0.95

            let x = gsap.getProperty(el, "x")
            x += baseSpeed + dragSpeed

            // infinite wrap
            if (x <= -totalWidth) x += totalWidth
            if (x >= 0) x -= totalWidth

            gsap.set(el, { x })
        })

        // 🖱️ DRAG — FAST + RESPONSIVE
        const draggable = Draggable.create(el, {
            type: "x",
            inertia: true,
            allowContextMenu: false,
            onDrag() {
                dragSpeed = this.getVelocity("x") * 0.04
            },
            onThrowUpdate() {
                dragSpeed = this.getVelocity("x") * 0.04
            },
        })[0]

        return () => {
            gsap.ticker.remove(() => { })
            draggable.kill()
        }
    }, [direction])

    return trackRef
}

function Row({ direction }) {
    const ref = useSupersideSlider(direction)

    return (
        <div className="overflow-hidden w-full select-none">
            <div
                ref={ref}
                className="flex gap-20 cursor-grab active:cursor-grabbing"
                style={{
                    userSelect: "none",
                    WebkitUserDrag: "none",
                    touchAction: "pan-y",
                }}
            >
                {[...brands, ...brands].map((b, i) => (
                    <div
                        key={i}
                        className="min-w-[140px] flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
                        style={{ pointerEvents: "none" }}
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
            </div>
        </div>
    )
}

export default function BrandSlider() {
    return (
        <section className="py-20 bg-[#F7F8F4] space-y-14 overflow-hidden">
            <h2 className="text-center text-lg font-medium">
                Trusted by 500+ of the world’s top brands
            </h2>

            {/* top → left */}
            <Row direction={-1} />

            {/* bottom → right */}
            <Row direction={1} />
        </section>
    )
}
