// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//     Autoplay,
//     EffectFade,
//     EffectCoverflow,
//     EffectCube,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-cube";

// import { useEffect, useRef, useState } from "react";

// function useInView(threshold = 0.05) {
//     const ref = useRef(null);
//     const [inView, setInView] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => setInView(entry.isIntersecting),
//             { threshold }
//         );
//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, [threshold]);

//     return { ref, inView };
// }

// export default function SmartSwiper({
//     slides = [],
//     renderSlide,

//     // styling
//     swiperClass = "",
//     slideClass = "",

//     // autoplay
//     autoplay = true,
//     delay = 3000,
//     speed = 600,

//     // responsive
//     breakpoints = {},
//     onSwiperReady,
//     onSlideChange,

//     effect = "slide",

//     // advanced
//     loop = true,
//     direction = "horizontal",
//     hoverPlayDesktop = false,

//     ...rest
// }) {
//     const swiperRef = useRef(null);
//     const { ref, inView } = useInView();
//     const [isDesktop, setIsDesktop] = useState(false);


//     useEffect(() => {
//         const check = () => setIsDesktop(window.innerWidth >= 1024);
//         check();
//         window.addEventListener("resize", check);
//         return () => window.removeEventListener("resize", check);
//     }, []);

//     useEffect(() => {
//         if (!swiperRef.current || !autoplay) return;


//         if (!swiperRef.current.autoplay) return;

//         if (hoverPlayDesktop && isDesktop) return;

//         if (inView) {
//             swiperRef.current.autoplay.start();
//         } else {
//             swiperRef.current.autoplay.stop();
//         }
//     }, [inView, autoplay, hoverPlayDesktop, isDesktop]);

//     const safeAutoplayControl = (swiper, action) => {
//         if (!autoplay || !swiper?.autoplay) return;
//         swiper.autoplay[action]?.();
//     };

//     return (
//         <div
//             ref={ref}
//             className="h-full w-full"
//             onMouseEnter={() => {
//                 if (hoverPlayDesktop && isDesktop) {
//                     safeAutoplayControl(swiperRef.current, "start");
//                 }
//             }}
//             onMouseLeave={() => {
//                 if (hoverPlayDesktop && isDesktop) {
//                     safeAutoplayControl(swiperRef.current, "stop");
//                 }
//             }}
//         >
//             <Swiper
//                 modules={[Autoplay, EffectFade, EffectCube, EffectCoverflow]}
//                 slidesPerView={1}
//                 autoHeight={false}
//                 onSwiper={(swiper) => {
//                     swiperRef.current = swiper;
//                     onSwiperReady?.(swiper);


//                     if (autoplay && swiper.autoplay) {
//                         if (!inView) swiper.autoplay.stop();
//                     }
//                 }}
//                 onSlideChange={(swiper) => {
//                     onSlideChange?.(swiper.realIndex);
//                 }}
//                 loop={loop}
//                 speed={speed}
//                 direction={direction}
//                 effect={effect}
//                 breakpoints={breakpoints}
//                 autoplay={
//                     autoplay
//                         ? {
//                             delay,
//                             disableOnInteraction: false,

//                         }
//                         : false
//                 }
//                 className={`h-full w-full ${swiperClass}`}
//                 {...rest}
//             >
//                 {slides.map((item, index) => (
//                     <SwiperSlide key={index} className={`h-full w-full ${slideClass}`}>
//                         {renderSlide(item, index)}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    EffectFade,
    EffectCoverflow,
    EffectCube,
    Pagination,
    Navigation,
    FreeMode,
    Thumbs,
    Scrollbar,
    A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

import { useEffect, useRef, useState } from "react";

// ─── IntersectionObserver hook ─────────────────────────────────────────────────
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

// ─── Built-in modules registry (always available, never overwritten) ───────────
const BUILT_IN_MODULES = [
    Autoplay,
    EffectFade,
    EffectCube,
    EffectCoverflow,
    Pagination,
    Navigation,
    FreeMode,
    Thumbs,
    Scrollbar,
    A11y,
];

// ─── SmartSwiper ───────────────────────────────────────────────────────────────
export default function SmartSwiper({
    slides = [],
    renderSlide,

    // Styling
    swiperClass = "",
    slideClass = "",
    wrapperClass = "",

    // Autoplay
    autoplay = true,
    delay = 3000,
    speed = 600,
    disableOnInteraction = false,
    pauseOnMouseEnter = false,

    // Responsive
    breakpoints = {},

    // Callbacks
    onSwiperReady,
    onSlideChange,
    onAutoplayStart,
    onAutoplayStop,

    // Swiper options
    effect = "slide",
    loop = true,
    direction = "horizontal",
    hoverPlayDesktop = false,

    // Extra modules passed from outside (e.g. Pagination, Navigation)
    // These are MERGED with built-ins - never overwrite them
    modules: extraModules = [],

    // All remaining Swiper props (pagination, navigation, freeMode, etc.)
    ...rest
}) {
    const swiperRef = useRef(null);
    const { ref, inView } = useInView();
    const [isDesktop, setIsDesktop] = useState(false);

    // ── Detect desktop ──────────────────────────────────────────────────────────
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // ── Play / pause based on viewport visibility ───────────────────────────────
    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || !autoplay || !swiper.autoplay) return;
        if (hoverPlayDesktop && isDesktop) return; // controlled by hover instead

        if (inView) {
            swiper.autoplay.start();
            onAutoplayStart?.();
        } else {
            swiper.autoplay.stop();
            onAutoplayStop?.();
        }
    }, [inView, autoplay, hoverPlayDesktop, isDesktop]);

    // ── Safe autoplay helper ────────────────────────────────────────────────────
    const safeAutoplay = (action) => {
        const swiper = swiperRef.current;
        if (!autoplay || !swiper?.autoplay) return;
        swiper.autoplay[action]?.();
    };

    // ── Merge modules (built-ins + any extras passed as props) ─────────────────
    const mergedModules = [
        ...BUILT_IN_MODULES,
        ...extraModules.filter((m) => !BUILT_IN_MODULES.includes(m)),
    ];

    return (
        <div
            ref={ref}
            className={`h-full w-full ${wrapperClass}`}
            onMouseEnter={() => {
                if (hoverPlayDesktop && isDesktop) safeAutoplay("start");
            }}
            onMouseLeave={() => {
                if (hoverPlayDesktop && isDesktop) safeAutoplay("stop");
            }}
        >
            <Swiper
                // ── Core ──────────────────────────────────────────────────────
                modules={mergedModules}
                slidesPerView={1}
                autoHeight={false}
                loop={loop}
                speed={speed}
                direction={direction}
                effect={effect}
                breakpoints={breakpoints}

                // ── Autoplay ──────────────────────────────────────────────────
                autoplay={
                    autoplay
                        ? {
                            delay,
                            disableOnInteraction,
                            pauseOnMouseEnter,
                        }
                        : false
                }

                // ── Callbacks ─────────────────────────────────────────────────
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    onSwiperReady?.(swiper);
                    // Stop immediately if not in viewport on mount
                    if (autoplay && swiper.autoplay && !inView) {
                        swiper.autoplay.stop();
                    }
                }}
                onSlideChange={(swiper) => {
                    onSlideChange?.(swiper.realIndex, swiper);
                }}

                // ── Styling ───────────────────────────────────────────────────
                className={`h-full w-full ${swiperClass}`}

                // ── All other Swiper props (pagination, navigation, grabCursor…)
                {...rest}
            >
                {slides.map((item, index) => (
                    <SwiperSlide
                        key={item?.id ?? index}
                        className={`h-full w-full ${slideClass}`}
                    >
                        {renderSlide(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}