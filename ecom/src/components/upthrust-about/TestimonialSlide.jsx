'use client'

import Image from 'next/image'
import { useState } from "react";
import SmartSwiper from '../upthrust-agency/SmartSlider'

const testimonials = [
    {
        id: 1,
        rating: 5,
        title: 'Data-Driven Growth Backed By Exceptional Support',
        description:
            "I'm happy to say that in the last six months we've been able to grow our organic traffic by 462%. Our ad expenses are doing better than ever. We have all been able to improve our conversion rates by 11%.",
        name: 'Rishabh Jain',
        role: 'Resident - Canvix',
        image: '/user1.png',
    },
    {
        id: 2,
        rating: 5,
        title: 'Amazing Team & Outstanding Results',
        description:
            'The entire process was smooth and professional. Their strategy helped us increase leads and improve overall branding in a short time.',
        name: 'Aman Gupta',
        role: 'Founder - PixelCraft',
        image: '/user2.png',
    },
    {
        id: 3,
        rating: 5,
        title: 'Best Marketing Agency We Worked With',
        description:
            'They understand performance marketing deeply and provide proper reporting with excellent communication and execution.',
        name: 'Priya Sharma',
        role: 'CEO - NovaLabs',
        image: '/user3.png',
    },
]

export default function TestimonialSlide() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className=" py-16 lg:py-24 w-[85%] 3xl:max-w-[1500px] mx-auto">
            <div className="flex max-sm:flex-col max-sm:gap-y-10 justify-between ">

                {/* Left Content */}
                <div className="max-w-xl">
                    <p className="uppercase tracking-[-0.02em] leading-[150%] text-[14px] text-black mb-4">
                        HOW WE WORK
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] 3xl:text-5xl  font-semibold leading-[130%] tracking-[-0.02em] text-black">
                        Things real clients said.
                        <br />
                        Totally unprompted.
                    </h2>

                    <p className="mt-3 sm:mt-4 text-black leading-[150%] tracking-[-0.02em] text-base 3xl:text-xl  max-w-lg">
                        Every agency brags about themselves. We find that exhausting. So we stopped. Below is what people who actually worked with us said, in their own words, without us hovering nearby nervously.
                    </p>
                </div>

                {/* Right Slider */}
                <div className="relative h-full w-full overflow-hidden  max-w-[430px] mx-auto lg:mx-0">

                    <SmartSwiper
                        slides={testimonials}
                        autoplay={true}
                        delay={2000}
                        speed={800}
                        loop={true}
                        onSlideChange={(index) => setActiveIndex(index)}
                        swiperClass="!overflow-visible"
                        renderSlide={(item) => (
                            <div className="border border-[#ff8a65] rounded-2xl bg-white px-4 py-6  h-[340px] flex flex-col justify-between ">

                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-5">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-[#ff3d00] text-sm"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-semibold text-black leading-7">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-black/60">
                                        {item.description}
                                    </p>
                                </div>

                                {/* User */}
                                <div className="flex items-center gap-3 mt-8">
                                    <div className="relative h-11 w-11 overflow-hidden rounded-full">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-black">
                                            {item.name}
                                        </h4>

                                        <p className="text-xs text-black/50 mt-0.5">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2 mt-6">

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    document
                                        .querySelector('.swiper')
                                        ?.swiper?.slideToLoop(index)
                                }}
                                className={`
                transition-all duration-300 rounded-full
                ${activeIndex === index
                                        ? 'w-7 h-2 bg-black'
                                        : 'w-2 h-2 bg-black/30'
                                    }
            `}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}