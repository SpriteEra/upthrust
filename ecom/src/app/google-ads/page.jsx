import GoogleAdsHeading from '@/components/google-ads/GoogleAdsHeading'
import GoogleAdsRoiPrediction from '@/components/google-ads/GoogleAdsRoiPrediction'
import PredictGrowth from '@/components/google-ads/PredictGrowth'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main>
            <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
                <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
                    <div className="flex items-center justify-between ">
                        {/* Logo */}
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
            <div className='min-h-screen'>

            </div>

            {/* <div className='flex flex-col mt-26 3xl:mt-30'>
                <GoogleAdsHeading
                    tag="h2"
                    heading={[{
                        line: [
                            { type: "normal", text: "Two Factors That Predict Your" },
                        ],
                    },
                    {
                        line: [
                            { type: "normal", text: "Google Ads ROI" },
                        ],
                    }]}
                />
                <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full '>
                    <GoogleAdsRoiPrediction />
                </div>

            </div> */}
            <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full mt-20 3xl:mt-24 mb-10 3xl:mb-16'>
                <h1>Test this is heading </h1>
                <PredictGrowth />
            </div>
        </main>
    )
}

export default page