import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";
import UGCAdsPlaybook from '@/components/home/UGCAdsPlaybook';
import { Disclaimer } from '@/components/home/AskQuestionAndDisclaimer';
const BrandSlider = dynamic(
    () => import('@/components/home/BrandSlider'),
    { loading: () => null }
);
const HomeFooter = dynamic(() => import('@/components/home/HomeFooter'));
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
            <UGCAdsPlaybook />

            <div className='my-20 flex flex-col '>
                <h2 className='text-center text-xl 3xl:text-2xl max-xs:max-w-[300px] mx-auto'><span className='font-semibold'>60+</span> D2C Brands Scaled | Avg <span className='font-semibold'>3.8x</span> ROAS | <br /><span className='font-semibold'>$50M+</span> Managed Profitably</h2>
                <BrandSlider />
            </div>

            <div className='px-3 md:px-5 lg:px-20 '>
                <Disclaimer />
            </div>
            <HomeFooter customeCss='mt-8 md:mt-10' />
        </main>
    )
}

export default page