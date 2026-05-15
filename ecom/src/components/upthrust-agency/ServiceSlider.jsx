"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";


import "swiper/css/pagination";
import SmartSwiper from "./SmartSlider";

// ─── Slide Data ────────────────────────────────────────────────────────────────

const services = [
    {
        id: 1,
        title: "Performance",
        subtitle: "Creative",
        image: "/services/performance-creative.webp",
    },
    {
        id: 2,
        title: "Meta",
        subtitle: "Ads",
        image: "/services/meta-ads.webp",
    },
    {
        id: 3,
        title: "Google",
        subtitle: "Ads",
        image: "/services/google-ads.webp",
    },
    {
        id: 4,
        title: "UI/UX",
        subtitle: "Design",
        image: "/services/ui-ux-design.webp",
    },
    {
        id: 5,
        title: "SEO/",
        subtitle: "AEO",
        image: "/services/seo-aeo.webp",
    },
    {
        id: 6,
        title: "Email",
        subtitle: "Marketing",
        image: "/services/email-marketing.webp",
    },
    {
        id: 7,
        title: "Social",
        subtitle: "Media",
        image: "/services/social-media.webp",
    },
];

// ─── Single card ───────────────────────────────────────────────────────────────
function ServiceCard({ title, subtitle, image }) {
    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer">
            {/* Background image */}
            <Image
                src={image}
                alt={`${title} ${subtitle}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
            />

            {/* Subtle dark gradient — top-left heavy so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />

            {/* Text label — top left */}
            <div className="absolute top-3.5 left-4 flex flex-col leading-tight">
                <span className="text-white text-sm md:text-base lg:text-lg font-semibold tracking-tight drop-shadow-sm">
                    {title}
                </span>
                <span className="text-white/90 text-sm md:text-base lg:text-lg font-instrument italic font-normal drop-shadow-sm">
                    {subtitle}
                </span>
            </div>
        </div>
    );
}

// ─── ServicesSlider ────────────────────────────────────────────────────────────
export default function ServicesSlider({ slides = services }) {
    return (
        <div className="w-full services-slider-wrap">
            <SmartSwiper
                autoplay={true}
                delay="3000"
                speed="600"
                slides={slides}
                renderSlide={(item) => (
                    <ServiceCard
                        title={item.title}
                        subtitle={item.subtitle}
                        image={item.image}
                    />
                )}

                // Show partial next card to hint scrollability
                breakpoints={{
                    0: { slidesPerView: 1.25, spaceBetween: 12 },
                    480: { slidesPerView: 2.1, spaceBetween: 14 },
                    768: { slidesPerView: 3.1, spaceBetween: 16 },
                    1024: { slidesPerView: 4.15, spaceBetween: 18 },
                    1440: { slidesPerView: 4.5, spaceBetween: 20 },
                    1920: { slidesPerView: 5, spaceBetween: 20 },
                }}

                swiperClass="!pb-10" // space for pagination dots
                slideClass="!h-[320px] md:!h-[360px] lg:!h-[400px] 3xl:!h-[460px]"

                autoplay={true}
                delay={3000}
                speed={600}
                loop={true}
                effect="slide"

                // Dot pagination — inject via Swiper modules + rest props
                modules={[Pagination]}
                pagination={{ clickable: true }}

                {...{
                    // extra Swiper props forwarded via ...rest in SmartSwiper
                    centeredSlides: false,
                    grabCursor: true,
                }}
            />

            {/* Scoped dot styles — matches the agency's minimal aesthetic */}
            <style >{`
        .services-slider-wrap .swiper-pagination {
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .services-slider-wrap .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 9999px;
          transition: width 0.3s ease, background 0.3s ease;
          margin: 0 !important;
        }
        .services-slider-wrap .swiper-pagination-bullet-active {
          width: 24px;
          background: #111827;
        }
      `}</style>
        </div>
    );
}