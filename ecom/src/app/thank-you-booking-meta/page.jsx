import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";
import UGCAdsPlaybook from '@/components/home/UGCAdsPlaybook';
import { Disclaimer } from '@/components/home/AskQuestionAndDisclaimer';
import MobileVideos from '@/components/meta-ads/MobileVideos';
import BrandSlider from '@/components/meta-ads/BrandSlider';

const HomeFooter = dynamic(() => import('@/components/home/HomeFooter'));

const brandsRow1 = [
    { id: 1, name: "", logo: "/brands/brand-white/tata-cliq.webp" },
    { id: 2, name: "", logo: "/brands/brand-white/housr.webp" },
    { id: 3, name: "", logo: "/brands/brand-white/bagwani.webp" },
    { id: 4, name: "", logo: "/brands/brand-white/mukunda-foods.webp" },
    { id: 5, name: "", logo: "/brands/brand-white/libas.webp" },
    { id: 6, name: "", logo: "/brands/brand-white/biba.webp" },
    { id: 7, name: "", logo: "/brands/brand-white/manohar-lal.webp" },
    { id: 8, name: "", logo: "/brands/brand-white/shoppetite.webp" },
    { id: 9, name: "", logo: "/brands/brand-white/yummie.webp" },
    { id: 10, name: "", logo: "/brands/brand-white/bosch.webp" },
    { id: 11, name: "", logo: "/brands/brand-white/the-sweet-blend.webp" },
    { id: 12, name: "", logo: "/brands/brand-white/victorias-secret.webp" },
    { id: 13, name: "", logo: "/brands/brand-white/nurture-india.webp" },
    { id: 14, name: "", logo: "/brands/brand-white/dhenu.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/dell.webp" },
]
const brandsRow2 = [
    { id: 1, name: "", logo: "/brands/brand-white/zomato.webp" },
    { id: 2, name: "", logo: "/brands/brand-white/urban.webp" },
    { id: 3, name: "", logo: "/brands/brand-white/welspun.webp" },
    { id: 4, name: "", logo: "/brands/brand-white/ok.webp" },
    { id: 5, name: "", logo: "/brands/brand-white/zipnow.webp" },
    { id: 6, name: "", logo: "/brands/brand-white/petco.webp" },
    { id: 7, name: "", logo: "/brands/brand-white/velbiom.webp" },
    { id: 8, name: "", logo: "/brands/brand-white/james-allen.webp" },
    { id: 9, name: "", logo: "/brands/brand-white/neon-attack.webp" },
    { id: 10, name: "", logo: "/brands/brand-white/jagwonder.webp" },
    { id: 11, name: "", logo: "/brands/brand-white/beyond.webp" },
    { id: 12, name: "", logo: "/brands/brand-white/mc-overalls.webp" },
    { id: 13, name: "", logo: "/brands/brand-white/tiggle.webp" },
    { id: 14, name: "", logo: "/brands/brand-white/harley-davidson.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/audio-art.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/loreal.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/last-supply.webp" },
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
                        <span className='text-xs 3xl:text-sm uppercase'>CALL BOOKED SUCCESSFULLY</span>
                        <div className='flex flex-col'>
                            <div className='mt-5 flex gap-3 items-center'>
                                <h5 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center max-w-md 3xl:max-w-lg'>We can’t Wait To
                                    <span className='capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-8xl font-instrument italic font-normal text-center'> Meet You</span>
                                </h5>
                            </div>
                        </div>
                        <span className='text-[15px] sm:text-sm 3xl:text-lg mt-5 text-center'>Your strategy call has been confirmed. <br />We're excited to discuss how we can help scale you to the next level.
                            <br />You'll receive a confirmation email with all the details shortly.  </span>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white pt-16 3xl:pt-26 mt-10 3xl:mt-16 overflow-hidden" >
                <MobileVideos cardcss="top-0!" labelcss="mb-4" />
                <BrandSlider brandsRow1={brandsRow1} brandsRow2={brandsRow2} />
            </div>

            <HomeFooter text1="Request a free consultation."
                customeCss="mt-15 md:mt-20 3xl:mt-30"
                bgColor="#0457CB" text2={{
                    desktop: {
                        text1: "WE'LL FIND YOUR WASTED",
                        text2: "AD SPEND. YOU'LL WONDER WHY\n YOU WAITED. LET'S GO.",
                    },
                    mobile: {
                        text1: "AD SPEND. YOU'LL WONDER WHY YOU WAITED. Let’s go.",
                        text2: "",
                    },
                }} />
        </main>
    )
}

export default page