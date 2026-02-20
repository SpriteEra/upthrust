import dynamic from "next/dynamic";

import GoogleAdsHeading from '@/components/google-ads/GoogleAdsHeading'
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero'
import GoogleAdsRoiPrediction from '@/components/google-ads/GoogleAdsRoiPrediction'
import PredictGrowth from '@/components/google-ads/PredictGrowth'
const ReadyToMoveUiUx = dynamic(() => import('@/components/google-ads/ReadyToMoveUiUx'));
import Image from 'next/image'
import React from 'react'
import VideoZoom from "@/components/google-ads/Videozoom";
import ScrollTextImage from "@/components/google-ads/ScrollTextImg";
import ClientTestimonials from "@/components/google-ads/Atul2";
import CompaignCards from "@/components/google-ads/Compaign";
import CommonHeading from "@/common/GoogleHeading";
import CommunicationScroll from "@/components/google-ads/Communication";
import CircularHelp from "@/components/google-ads/CircularHelp";
import ScreenShot from "@/components/google-ads/ScreenShot";
import GoogleFaq from "@/components/google-ads/GoogleFaq";
import GoogleDisclaimer from "@/components/google-ads/Disclaimer";
import GoogleFooter from "@/components/google-ads/GoogleFooter";
import BrandSlider from "@/components/home/BrandSlider";
import AnimatedWord from "@/components/google-ads/AnimatedWord";

const badges = [
    { image: "/badges/user-love.webp", alt: "User Love Badge" },
    { image: "/badges/moment-leader.webp", alt: "Moment Leader Badge" },
    { image: "/badges/best-roi.webp", alt: "Best Roi Badge" },
    { image: "/badges/most-implementable.webp", alt: "Most Implementable Badge" },
    { image: "/badges/high-performer.webp", alt: "High Performer Badge" },
    {
        image: "/badges/highest-user-adoption.webp",
        alt: "Highest User Adoption Badge",
    },
];

const words = [
    { text: 'PPC', color: '#10B981' },
    { text: 'Google Ads', color: '#3B82F6' },
    { text: 'Bing Ads', color: '#F59E0B' }
];

const page = () => {
    return (
        <main>
            <nav className=" bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
                <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
                    <div className="flex items-center justify-between ">
                        <div className="shrink-0 ">

                            <Image src='/logo.png' height={100} width={200} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
                        </div>
                        <div className='flex items-center gap-5 3xl:gap-6'>
                            <span className='text-lg 3xl:text-xl max-lg:hidden'>Get light years ahead with google ads</span>
                            <button className='text-lg 3xl:text-xl py-4 3xl:py-5 px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white'>Scale Your PPC</button>
                        </div>
                    </div>
                </div>
            </nav>

            <GoogleAdsHero />

            <div className='flex flex-col mt-26 3xl:mt-30'>
                <CommonHeading
                    heading={[
                        // 🔹 Line 1
                        [
                            { type: "text", value: "Two Factors That Predict" },
                        ],

                        // 🔹 Line 2
                        [
                            { type: "text", value: "Your Google Ads " },
                            {
                                type: "highlight",
                                value: "ROI",
                                bgColor: "bg-[#FFE187]",
                                textColor: "text-[#E46800]",
                                icon: "/google-ads/icons/altitude2.svg",
                            },
                        ],
                    ]}
                />


                {/* <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full '>
                    <GoogleAdsRoiPrediction />
                </div> */}

            </div>
            <div className="my-25 sm:my-30 3xl:my-50 text-center">
                <h3 className="text-[18px] px-10 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal lg:font-semibold ">We&apos;re the highest-rated <span className="font-semibold">Google Ads</span> agency</h3>
                {/* BADGES ROW */}
                <div className="flex mt-10 flex-wrap gap-3 sm:gap-6 md:gap-10 w-full items-center justify-center">
                    {badges.map((item, index) => (
                        <Image
                            key={index}
                            width={120}
                            height={120}
                            alt={item.alt}
                            src={item.image}
                            className="w-12 sm:w-18 md:w-24 3xl:w-30 h-full object-contain"
                        />
                    ))}
                </div>
            </div>

            {/* video zoom  */}
            <CommonHeading
                heading={[
                    [
                        { type: "text", value: "Watch Us Manage " },
                        {
                            type: "highlight",
                            value: "1.2M",
                            bgColor: "bg-[#E7F0FF]",
                            textColor: "text-[#0076F0]",
                            icon: "/google-ads/icons/paid.png",
                        },
                        { type: "text", value: " In " }
                    ],

                    [
                        { type: "text", value: "Monthly Ad Spend" },

                    ],
                ]}
            />
            <VideoZoom />
            {/* scroll text  */}
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
                                icon: "/google-ads/icons/paid3.png",
                            },
                        ],

                        [
                            { type: "text", value: " Last Year" },

                        ],

                    ]}
                    subtitle="From fifty thousand per month to two million"
                />

                <BrandSlider />

            </div>
            <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full mt-20 3xl:mt-24 mb-10 3xl:mb-16'>
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "The " },
                            {
                                type: "highlight",
                                value: "4-Phase",
                                bgColor: "bg-[#C8EBD6]",
                                textColor: "text-[#00822E]",
                                icon: "/google-ads/icons/paid2.png",
                            },
                            { type: "text", value: " System" },
                        ],

                        [
                            { type: "text", value: "Behind Predictable Ad Revenue" },
                        ],

                    ]}
                    subtitle="From first audit to full scale: every step measured, every dollar accounted for."
                />
                <PredictGrowth />
            </div>

            <div className="my-25 sm:my-30 3xl:my-50 text-center">
                <h3 className="text-[18px] px-10 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal lg:font-semibold ">Industry Leading <span className="font-semibold">Google Ads</span> Expertise</h3>
                {/* BADGES ROW */}
                <div className="flex mt-10 flex-wrap gap-3 sm:gap-6 md:gap-10 w-full items-center justify-center">
                    {badges.map((item, index) => (
                        <Image
                            key={index}
                            width={120}
                            height={120}
                            alt={item.alt}
                            src={item.image}
                            className="w-12 sm:w-18 md:w-24 3xl:w-30 h-full object-contain"
                        />
                    ))}
                </div>
            </div>

            <CommunicationScroll />


            <div>
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "What Our " },
                            {
                                type: "highlight",
                                value: "Clients",
                                bgColor: "bg-[#FFE187]",
                                textColor: "text-[#E46800]",
                                icon: "/google-ads/icons/new.png",
                            },
                            { type: "text", value: " Say" },
                        ],

                    ]}
                    subtitle="We Asked One Question: “What Changed?” - Here’s what they said, in their own words."
                />
                <ClientTestimonials />
            </div>
            <div className="3xl:my-30 my-20">
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "What Happened When We Ran" },

                        ],

                        [
                            { type: "text", value: "Their " },
                            {
                                type: "highlight",
                                value: "Campaigns",
                                bgColor: "bg-[#E7F0FF]",
                                textColor: "text-[#004FAC]",
                                icon: "/google-ads/icons/campaign.png",
                            },

                        ],

                    ]}
                />
                <CompaignCards />
            </div>
            <div>
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "How We Help You " },
                            {
                                type: "highlight",
                                value: "Win",
                                bgColor: "bg-[#FFE7E5]",
                                textColor: "text-[#FE2B27]",
                                icon: "/google-ads/icons/ads_click.png",
                            },
                            {
                                type: "text", value: " At The Game Of"
                            }

                        ],

                        [
                            { type: "text", value: "PPC, Google and Bing Ads " },

                        ],


                    ]}
                    subtitle="Anyone can drive traffic. We drive demand that converts."
                />
                <CircularHelp />
            </div>

            <div className="w-full py-10 3xl:py-20 max-w-[90%] 3xl:max-w-[85%] mx-auto">
                <div className="space-y-20 3xl:space-y-32">

                    {/* Section 1 */}
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-20 items-center">

                        {/* Left Content */}
                        <div className="max-w-150 overflow-hidden">
                            <h2 className="text-4xl md:text-5xl 3xl:text-[60px] font-semibold leading-[130%] tracking-[-0.02em] mb-6 text-black">
                                From Launch To 4.2X ROAS In Just 90 Days
                            </h2>
                            <p className="text-black text-[24px] leading-[150%] tracking-[-0.02em]">
                                Our Google Ads dashboard shows exactly how performance is tracked,
                                diagnosed, and improved.
                            </p>
                        </div>

                        {/* Right Video */}
                        <div className="w-full h-full">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden ">
                                <video
                                    className="w-full h-full object-cover "
                                    src="https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4"
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="  grid lg:grid-cols-2 gap-6 md:gap-20 items-center">

                        {/* Left Video */}
                        <div className="w-full order-2 lg:order-1">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden ">
                                <video
                                    className="w-full h-full object-cover"
                                    src="https://cdn.upthrust.agency/Google%20ads/Quietly%20Successful%20Google%20Ads%20Result%20Dashboard.mp4"
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Best{'  '}
                                <AnimatedWord
                                    words={words}
                                    className="h-10 md:h-12 w-55 md:w-60 lg:w-70 3xl:w-70 mx-auto"
                                />{' '}
                                <br />
                                Ad Agency
                            </h2>

                            <p className="text-black text-[24px] leading-[150%] tracking-[-0.02em]">
                                Hiring the wrong agency puts you 45% behind your competitors.
                                Watch what Upthrust clients say about the results they got.
                                <span className="font-medium"> Real people, real numbers, no BS.</span>
                            </p>
                        </div>

                    </div>

                </div>
            </div>


            <div className="3xl:my-30 my-20">
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "No screenshots from " },
                            {
                                type: "highlight",
                                value: "2019",
                                bgColor: "bg-[#C8EBD6]",
                                textColor: "text-[#00822E]",
                                icon: "/google-ads/icons/calendar.png",
                            },


                        ],

                        [
                            { type: "text", value: "These are live dashboards." },

                        ],

                    ]}
                    subtitle="Managed Ad Account of YC backed Series B firm in NYC and 3rd most popular FMCG brand in Delhi"
                />
                <ScreenShot />
            </div>
            <div className="my-10">
                <CommonHeading
                    heading={[
                        [
                            { type: "text", value: "Frequently Asked " },
                            {
                                type: "highlight",
                                value: "Questions",
                                bgColor: "bg-[#FFE187]",
                                textColor: "text-[#E46800]",
                                icon: "/google-ads/icons/contact_support.png",
                            },

                        ],
                    ]}
                />
                <GoogleFaq />
            </div>
            <div>
                <GoogleDisclaimer />
                <GoogleFooter />
            </div>

        </main>
    )
}

export default page

