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
function useHorizontalSlider(direction = -1) {
    const trackRef = useRef(null)

    useEffect(() => {
        const el = trackRef.current
        if (!el) return

        let width = 0
        const speed = 0.5 * direction

        const measure = () => {
            width = el.scrollWidth / 2
        }

        requestAnimationFrame(measure)

        const tick = () => {
            if (!width) return

            let x = gsap.getProperty(el, "x")
            x += speed

            if (x <= -width) x += width
            if (x >= 0) x -= width

            gsap.set(el, { x })
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



function Row({ direction, data }) {
    const ref = useHorizontalSlider(direction)

    return (
        <div className="overflow-hidden w-full">
            <div ref={ref} className="flex gap-2 w-max">
                {[...data, ...data].map((b, i) => (
                    <div
                        key={i}
                        className=" w-[120px] h-[160px] rounded overflow-hidden"
                    >
                        <Image
                            src={b.src}
                            alt={b.name}
                            width={180}
                            height={140}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function HeroHorizontalSlider() {
    return (
        <div className="overflow-hidden max-w-[85vw] w-full space-y-4">
            <Row direction={-1} data={brands} />
            <Row direction={1} data={brands2} />
            <Row direction={-1} data={brands3} />
        </div>
    )
}
