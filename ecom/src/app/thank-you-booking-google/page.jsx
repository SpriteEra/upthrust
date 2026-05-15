import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";
import { Disclaimer } from '@/components/home/AskQuestionAndDisclaimer';
import ClientTestimonials from '@/components/google-ads/ClientTestimonials';
import CommonHeading from '@/common/GoogleHeading';
import BrandSlider from "@/components/home/BrandSlider";
const HomeFooter = dynamic(() => import('@/components/home/HomeFooter'));

const brandsLogo = [
    { id: 1, src: "/brands/brand-black/urban.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/beyond.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/audio-art.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/mc-overalls.webp", alt: "", customCss: "h-4 md:h-6 3xl:h-7 w-full" },
    { id: 1, src: "/brands/brand-black/cosco.webp", alt: "", customCss: "h-5 md:h-6 3xl:h-10 w-full" },
    { id: 1, src: "/brands/brand-black/victoria-secret.webp", alt: "", customCss: "h-14 md:h-16 3xl:h-22 w-full" },
    { id: 1, src: "/brands/brand-black/velbiom.webp", alt: "", customCss: "h-8 md:h-9 3xl:h-12 w-full" },
    { id: 1, src: "/brands/brand-black/housr.webp", alt: "", customCss: "h-6 md:h-8 3xl:h-11 w-full" },
    { id: 1, src: "/brands/brand-black/fab-india.webp", alt: "", customCss: "h-7 md:h-9 3xl:h-12 w-full" },
    { id: 1, src: "/brands/brand-black/manohar-lal.webp", alt: "", customCss: "h-12 md:h-14 3xl:h-18 w-full" },
    { id: 1, src: "/brands/brand-black/libas.webp", alt: "", customCss: "h-9 md:h-11 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/qpi-ai.webp", alt: "", customCss: "h-7 md:h-11 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/james-allen.webp", alt: "", customCss: "h-4 md:h-6 3xl:h-8 w-full" },
    { id: 1, src: "/brands/brand-black/cyble.webp", alt: "", customCss: "h-8 md:h-12 3xl:h-14 w-full" },
    { id: 1, src: "/brands/brand-black/tata-cliq.webp", alt: "", customCss: "h-8 md:h-10 3xl:h-12 w-full" },
    { id: 1, src: "/brands/brand-black/tiggle.webp", alt: "", customCss: "h-7 md:h-11 3xl:h-14 w-full" },
    { id: 1, src: "/brands/brand-black/poker-baazi.webp", alt: "", customCss: "h-8 md:h-10 3xl:h-12 w-full" },
    { id: 1, src: "/brands/brand-black/ok.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
    { id: 1, src: "/brands/brand-black/mukunda-foods.webp", alt: "", customCss: "h-15 md:h-18 3xl:h-22 w-full" },
    { id: 1, src: "/brands/brand-black/biba.webp", alt: "", customCss: "h-6 md:h-7 3xl:h-10 w-full" },
]

const page = () => {
    return (
        <main>
            <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
                <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
                    <div className="flex items-center justify-between ">
                        {/* Logo */}
                        <div className="shrink-0 ">

                            <Image src='/logo.png' height={100} width={200} alt="logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex flex-col mt-25  mb-8 xs:mb-10 px-2 scroll-mt-10' id='contact-library'>
                <div className='flex flex-col pt-22 3xl:pt-25'>
                    <div className='flex flex-col items-center mb-10'>

                        <span className='flex justify-center p-3 items-center'>
                            <Image src="/rocket.png" height={80} width={80} alt="rocket" className="size-20" />
                        </span>
                        <div className='flex flex-col'>
                            <div className='mt-5 flex gap-3 items-center'>
                                <h5 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center w-full
                                 '>We can’t Wait To
                                    <span className='capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-8xl font-instrument italic font-normal text-center'> Meet You</span>
                                </h5>
                            </div>
                        </div>
                        <span className='text-[15px] sm:text-sm 3xl:text-lg mt-5 text-center'>Your strategy call has been confirmed. We're excited to discuss how we can help scale you to the<br /> next level. You'll receive a confirmation email with all the details shortly. </span>
                    </div>
                </div>
            </div>
            <ClientTestimonials />

            <div className="3xl:my-30 my-20">
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "Our Clients Generated " },
                            {
                                type: "highlight",
                                value: "47M",
                                bgColor: "bg-[#FFE7E5]",
                                textColor: "text-[#FE2B27]",
                                icon: "/google-ads/icons/paid3.webp",
                            },
                        ],

                        [
                            { type: "text", value: " Last Year" },

                        ],

                    ]}
                    subtitle="From fifty thousand per month to Two Million"
                />

                <BrandSlider />

            </div>

            <div className='px-3 md:px-5 lg:px-20 '>
                <Disclaimer />
            </div>

            <HomeFooter text1="Request a free consultation."
                customeCss="mt-10 md:mt-10 3xl:mt-10"
                bgColor="#0457CB" text2={{
                    desktop: {
                        text1: "YOU FOUND THE RIGHT AGENCY.",
                        text2: "WE FOUND THE RIGHT BRAND. COINCIDENCE? WE THINK NOT."
                    },
                    mobile: {
                        text1: "WE FOUND THE RIGHT BRAND. COINCIDENCE? WE THINK NOT."
                    }
                }} />

        </main>
    )
}

export default page