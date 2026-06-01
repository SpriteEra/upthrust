"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headings = [
    {
        text: 'We build brands that people',
        highlight: 'actually buy from.',
    },
    {
        text: 'The Growth System Behind Dell,',
        highlight: 'Shark Tank Winners.',
    },
    {
        text: 'One Team Runs',
        highlight: 'The Full Machine.',
    },
]

const ScrollText = () => {
    const headingsRef = useRef([])
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            headingsRef.current.forEach((el) => {
                if (!el) return
                gsap.fromTo(
                    el,
                    { opacity: 0.12 },
                    {
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            end: 'top 35%',
                            scrub: true,
                        },
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}

        >
            <div
                className="max-w-[90%] mx-auto w-full flex"

            >

                {/* left  */}

                <div className="w-1/2 ">
                    <div
                        className="sticky top-0 h-[100vh] flex items-end pb-12"

                    >
                        <p
                            className="font-bold text-xl 3xl:text-[24px] tracking-[-0.02em] leading-[150%] "

                        >
                            Ads · Creative · Films · SEO · Design · B2B · Retention
                        </p>
                    </div>
                </div>

                {/* ── RIGHT — scrolling headings ── */}
                <div
                    className="w-1/2 "
                >
                    <h3 className="text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-left leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize">
                        We <span className="text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal capitalize">build brands</span> that
                        people actually buy
                        from.<br />
                        <br />
                        The growth system behind <span className="text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal capitalize">
                            Dell, Shark Tank
                            winners, and 60+ brands.
                        </span><br />
                        Our team runs the full
                        machine.
                    </h3>


                </div>

            </div>
        </section>
    )
}

export default ScrollText