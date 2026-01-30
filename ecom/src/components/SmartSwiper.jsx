"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    EffectFade,
    EffectCoverflow,
    EffectCube,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.05) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

export default function SmartSwiper({
    slides = [],
    renderSlide,

    // styling
    swiperClass = "",
    slideClass = "",

    // autoplay
    autoplay = true,
    delay = 3000,
    speed = 600,

    // responsive
    breakpoints = {},

    // effects: "slide" | "fade" | "cube" | "coverflow"
    effect = "slide",

    // advanced
    loop = true,
    direction = "horizontal",

    ...rest // pass ANY Swiper prop
}) {
    const swiperRef = useRef(null);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (!swiperRef.current || !autoplay) return;

        if (inView) {
            swiperRef.current.autoplay.start();
        } else {
            swiperRef.current.autoplay.stop();
        }
    }, [inView, autoplay]);

    return (
        <div ref={ref} className="h-full w-full">
            <Swiper
                modules={[
                    Autoplay,
                    EffectFade,
                    EffectCube,
                    EffectCoverflow,
                ]}
                slidesPerView={1}
                autoHeight={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop={loop}
                speed={speed}
                direction={direction}
                effect={effect}
                breakpoints={breakpoints}
                autoplay={
                    autoplay
                        ? {
                            delay,
                            disableOnInteraction: false,
                            enabled: false,
                        }
                        : false
                }
                className={`h-full w-full ${swiperClass}`}
                {...rest}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index} className={`h-full w-full ${slideClass}`}>
                        {renderSlide(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}
