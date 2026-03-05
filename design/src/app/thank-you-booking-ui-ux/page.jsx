import UiUxHeading from '@/common/UiUxHeading'
import AnimatedLogoCarousel from '@/components/uiux/AnimatedLogoCarousel'
import TestimonialsWithVideo from '@/components/uiux/TestimonialsWithVideo'
import { Disclaimer } from '@/components/uiux/UiUxDisclaimer'
import UiUxFooter from '@/components/uiux/UiUxFooter'
import Image from 'next/image'
import React from 'react'

const logoSets = [
    [
        { name: 'Zomato', image: '/uiux/brand-white/zomato.webp', alt: 'Zomato Logo' },
        { name: 'Bosch', image: '/uiux/brand-white/bosch.webp', alt: 'Bosch Logo' },
        { name: "L'Oréal", image: '/uiux/brand-white/loreal.webp', alt: "L'Oréal Logo" },
        { name: 'Vega', image: '/uiux/brand-white/vega.webp', alt: 'Vega Logo' },
        { name: 'Harley Davidson', image: '/uiux/brand-white/harley-davidson.webp', alt: 'Harley Davidson Logo' },
        { name: 'Dell', image: '/uiux/brand-white/dell.webp', alt: 'Del Logol' },
    ],
    [
        { name: 'Zomato', image: '/uiux/brand-white/acadly.webp', alt: 'Acadly Logo' },
        { name: 'Bosch', image: '/uiux/brand-white/neatlogs.webp', alt: 'Neatlogs Logo' },
        { name: "L'Oréal", image: '/uiux/brand-white/beyond.webp', alt: "Beyond Logo" },
        { name: 'Vega', image: '/uiux/brand-white/ok.webp', alt: 'Ok Logo' },
        { name: 'Harley Davidson', image: '/uiux/brand-white/audioart.webp', alt: 'Audio Art Logo' },
        { name: 'Dell', image: '/uiux/brand-white/housr.webp', alt: 'Housr Logo' },
    ],
    [
        { name: 'Zomato', image: '/uiux/brand-white/vwo.webp', alt: 'Vwo Logo' },
        { name: 'Bosch', image: '/uiux/brand-white/cyble.webp', alt: 'Cyble Logo' },
        { name: "L'Oréal", image: '/uiux/brand-white/qpiai.webp', alt: "Q Pi Ai Logo" },
        { name: 'Vega', image: '/uiux/brand-white/mc-overalls.webp', alt: 'MC Overalls Logo' },
        { name: 'Harley Davidson', image: '/uiux/brand-white/tescribe.webp', alt: 'Teascrube Logo' },
        { name: 'Dell', image: '/uiux/brand-white/tiggle.webp', alt: 'Tiggle Logo' },
    ],
];
const page = () => {
    return (
        <main className=''>
            <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
                <div className="px-4 md:px-4 lg:px-8 w-full">
                    <div className="flex items-center justify-between ">
                        {/* Logo */}
                        <div className="shrink-0 ">

                            <Image src='/logo.png' height={40} width={100} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                        </div>

                    </div>
                </div>
            </nav>
            <div className='mt-40 3xl:mt-50'>

                <UiUxHeading
                    tag="h1"
                    heading={[
                        {
                            line: [{ type: "normal", text: "We can’t Wait" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "To" },
                                { type: "italic", text: "Meet You" },
                            ],
                        },
                    ]}
                    label="CALL BOOKED SUCCESSFULLY"
                    subtitle={`Your design strategy call has been confirmed.\nWe're excited to discuss how we can help scale you to the next level.\nYou'll receive a confirmation email with all the details shortly.`}
                    subTitleCss=""
                />
                <div className="max-sm:w-full sm:max-w-[90%] 3xl:max-w-[88%] sm:mx-auto max-sm:px-2 lg:mt-10 3xl:mt-16">

                    <TestimonialsWithVideo />
                    <AnimatedLogoCarousel logoSets={logoSets} theme="light" />
                    <Disclaimer />
                </div>
                <UiUxFooter customeCss='mt-8 md:mt-10' text1="ANY QUESTIONS?" bgColor="#FF3B00" text2={{
                    desktop: {
                        text1: "YOUR SUBMISSION GOES HERE.",
                        text2: "OUR EXCITED RESPONSE COMES SHORTLY AFTER.\n COINCIDENCE? WE THINK NOT.",
                    },
                    mobile: {
                        text1: "OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT.",
                        text2: "",
                    },
                }} />
            </div>
        </main>
    )
}

export default page