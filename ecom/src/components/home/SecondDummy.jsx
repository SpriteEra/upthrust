"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SecondDummy() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    end: "top 40%",      // 👈 defines scroll distance
                    scrub: 1.2,          // 👈 SMOOTHNESS
                },
            });

            tl.fromTo(
                textRef.current,
                {
                    x: "-100vw",
                    opacity: 0,
                },
                {
                    x: 100,
                    opacity: 1,
                    ease: "none",        // required with scrub
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen bg-black flex items-center overflow-hidden"
        >
            <h1
                ref={textRef}
                className="text-white text-6xl font-bold whitespace-nowrap"
            >
                Scroll Trigger Text
            </h1>
        </section>
    );
}
