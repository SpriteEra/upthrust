"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";
const defaultTestimonials = [
    {
        text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
        name: "Troy",
        company: "MC Overalls",
        image: "/ecom/profile/profile6.png",
        color: "bg-[#FFF0F0]"
    },
    {
        text: "We were struggling with traffic and poor conversion rates. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x. ",
        name: "Rishab",
        company: "Carobis",
        image: "/ecom/profile/profile7.png",
        color: "bg-[#FFEBDA]"
    },
    {
        text: "Most leads would disqualify—we couldn't convert. Upthrust changed that with property-specific targeting and smart budget allocation. Lead quality and conversions both improved significantly.",
        name: "Gunjan",
        company: "Housr",
        image: "/ecom/profile/profile8.png",
        color: "bg-[#E1EFD7]"
    },
    {
        text: "$4,900 with Upthrust returned 2.7x immediately. Now doing $51K+ monthly with multi- channel campaigns. They don't track vanity metrics, they know what growth truly means.",
        name: "Dan",
        company: "Dan Studio",
        image: "/ecom/profile/profile9.png",
        color: "bg-[#E3DFF1]"
    }
];

const cardDefaultColors = [
    {
        bg: 'bg-[#FFF0F0]',
        text: "text-black",
        quote: '#010202',
        clientNameColor: 'text-[#010202]',
        companyNameColor: 'text-[#33535]'
    },
    {
        bg: 'bg-[#FFEBDA]',
        text: "text-black",
        quote: '#010202',
        clientNameColor: 'text-[#010202]',
        companyNameColor: 'text-[#33535]'
    },
    {
        bg: 'bg-[#E1EFD7]',
        text: "text-black",
        quote: '#010202',
        clientNameColor: 'text-[#010202]',
        companyNameColor: 'text-[#33535]'
    },
    {
        bg: 'bg-[#E3DFF1]',
        text: "text-black",
        quote: '#010202',
        clientNameColor: 'text-[#010202]',
        companyNameColor: 'text-[#33535]'
    },
]
const MobileTestimonialsSlider = ({ cardColors = cardDefaultColors }) => {

    const testimonials = [
        {
            text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
            name: "Troy",
            company: "MC Overalls",
            image: "/ecom/profile/profile6.png",
            color: cardColors[0].bg,
            textColor: cardColors[0].text,
            clientNameColor: cardColors[0].clientNameColor,
            companyNameColor: cardColors[0].companyNameColor,
        },
        {
            text: "We were struggling with traffic and poor conversion rates. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x. ",
            name: "Rishab",
            company: "Carobis",
            image: "/ecom/profile/profile7.png",
            color: cardColors[1].bg,
            textColor: cardColors[1].text,
            clientNameColor: cardColors[1].clientNameColor,
            companyNameColor: cardColors[1].companyNameColor,
        },
        {
            text: "Most leads would disqualify—we couldn't convert. Upthrust changed that with property-specific targeting and smart budget allocation. Lead quality and conversions both improved significantly.",
            name: "Gunjan",
            company: "Housr",
            image: "/ecom/profile/profile8.png",
            color: cardColors[2].bg,
            textColor: cardColors[2].text,
            clientNameColor: cardColors[2].clientNameColor,
            companyNameColor: cardColors[2].companyNameColor,
        },
        {
            text: "$4,900 with Upthrust returned 2.7x immediately. Now doing $51K+ monthly with multi- channel campaigns. They don't track vanity metrics, they know what growth truly means.",
            name: "Dan",
            company: "Dan Studio",
            image: "/ecom/profile/profile9.png",
            color: cardColors[3].bg,
            textColor: cardColors[3].text,
            clientNameColor: cardColors[3].clientNameColor,
            companyNameColor: cardColors[3].companyNameColor,
        }
    ];

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="lg:hidden px-4 py-20 pb-10 min-h-50 bg-black mt-20 lg:mt-24">
            <div className="flex flex-col items-center justify-center mb-10">

                <p className="text-[2.25rem] font-semibold tracking-[-0.02em] leading-11 text-white text-center">
                    The <span className="italic font-instrument tracking-[0em] leading-11 font-normal">Secret</span> Behind
                </p>
                <p className="text-[2.25rem] font-semibold tracking-[-0.02em] leading-11 text-white text-center">
                    Their <span className="italic font-instrument tracking-[0em] leading-11 font-normal">Success</span>
                </p>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1, // small phones
                    },
                    480: {
                        slidesPerView: 1, // large phones
                    },
                    640: {
                        slidesPerView: 2, // tablets
                    },
                    768: {
                        slidesPerView: 2, // small tablets
                    },
                    1024: {
                        slidesPerView: 2, // just before lg
                    },
                }}
            >

                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="">
                        <div className={`${testimonial.color} p-4 max-xs:py-8 rounded-md w-full max-w-100 h-100 xs:h-110 flex flex-col justify-between mx-auto`}>
                            <p className={`${testimonial.textColor} text-2xl lg:text-lg 3xl:text-2xl font-medium tracking-[-0.02em]`}>
                                <span className='-pt-3'>
                                    <svg style={{ color: testimonial.quote }} className='size-9 inline-block -mt-2.5 mr-2' viewBox="0 0 46 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.48702e-10 18.0701C3.96784e-10 8.44813 6.83439 2.72495 11.0981 0.0876696C11.6382 -0.246749 12.2214 0.449277 11.8056 0.935951C10.1274 2.89523 8.80072 5.13361 7.88479 7.55091C10.0746 6.92231 12.4052 7.00244 14.5473 7.77999C16.6894 8.55753 18.5347 9.99317 19.8224 11.884C21.1101 13.7749 21.7752 16.0254 21.7236 18.3175C21.672 20.6097 20.9064 22.8275 19.5349 24.6577C18.1634 26.4879 16.2554 27.8379 14.0805 28.5169C11.9056 29.196 9.57382 29.1697 7.41456 28.4418C5.2553 27.714 3.37778 26.3214 2.0473 24.4607C0.716823 22.6001 0.000656758 20.3629 8.48702e-10 18.0701ZM24.1809 18.0701C24.1809 8.44813 31.0153 2.72495 35.2791 0.0903884C35.8191 -0.24403 36.4024 0.449277 35.9892 0.933232C34.3089 2.89292 32.9803 5.13226 32.063 7.55091C34.2528 6.92231 36.5834 7.00244 38.7255 7.77999C40.8676 8.55753 42.7129 9.99317 44.0007 11.884C45.2884 13.7749 45.9534 16.0254 45.9018 18.3175C45.8502 20.6097 45.0846 22.8275 43.7131 24.6577C42.3416 26.4879 40.4337 27.8379 38.2588 28.5169C36.0839 29.196 33.7521 29.1697 31.5928 28.4418C29.4335 27.714 27.556 26.3214 26.2255 24.4607C24.8951 22.6001 24.1789 20.3656 24.1782 18.0729L24.1809 18.0701Z" fill="currentColor" />
                                    </svg>
                                </span>
                                {testimonial.text}
                            </p>
                            <div className="flex items-center gap-3 mt-10 xs:mt-3">
                                <div className="w-13 h-13 xs:w-11 xs:h-11 3xl:w-13 3xl:h-13 bg-white flex items-center justify-center text-xl rounded-md">
                                    <Image width={70} height={70} src={testimonial.image} alt={testimonial.name} className='w-full h-full object-contain' />
                                </div>
                                <div>
                                    <p className={`text-[22px] tracking-[0.55px] leading-[27px] ${testimonial.clientNameColor}`}>{testimonial.name}</p>
                                    <p className={`text-lg mt-0 3xl:text-lg text-[#33535] font-light  ${testimonial.companyNameColor}`}>{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileTestimonialsSlider;
