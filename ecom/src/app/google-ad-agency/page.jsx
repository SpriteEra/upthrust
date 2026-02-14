// import dynamic from "next/dynamic";

// import GoogleAdsHeading from '@/components/google-ads/GoogleAdsHeading'
// import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero'
// import GoogleAdsRoiPrediction from '@/components/google-ads/GoogleAdsRoiPrediction'
// import PredictGrowth from '@/components/google-ads/PredictGrowth'
// const ReadyToMoveUiUx = dynamic(() => import('@/components/google-ads/ReadyToMoveUiUx'));
// import Image from 'next/image'
// import React from 'react'
// import VideoZoom from "@/components/google-ads/Videozoom";
// import ScrollTextImage from "@/components/google-ads/ScrollTextImg";
// import ClientTestimonials from "@/components/google-ads/Atul2";
// import CompaignCards from "@/components/google-ads/Compaign";
// import CommonHeading from "@/common/GoogleHeading";
// import CommunicationScroll from "@/components/google-ads/Communication";
// import CircularHelp from "@/components/google-ads/CircularHelp";

// const page = () => {
//     return (
//         <main>
//             <nav className="bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[134px] 2xl:h-[120px] xl:h-[100px] sm:h-20 h-19">
//                 <div className="px-2  sm:px-4 md:px-4 lg:px-8 w-full">
//                     <div className="flex items-center justify-between ">
//                         {/* Logo */}
//                         <div className="shrink-0 ">

//                             <Image src='/logo.png' height={100} width={200} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-10 object-contain w-full" />
//                         </div>
//                         <div className='flex items-center gap-5 3xl:gap-6'>
//                             <span className='text-lg 3xl:text-xl max-lg:hidden'>Get light years ahead with google ads</span>
//                             <button className='text-lg 3xl:text-xl py-4 3xl:py-5 px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white'>Scale Your PPC</button>
//                         </div>
//                     </div>
//                 </div>


//             </nav>
//             <div className='min-h-screen'>
//                 <GoogleAdsHero />
//             </div>

//             <div className='flex flex-col mt-26 3xl:mt-30'>
//                 <GoogleAdsHeading
//                     tag="h2"
//                     heading={[{
//                         line: [
//                             { type: "normal", text: "Two Factors That Predict Your" },
//                         ],
//                     },
//                     {
//                         line: [
//                             { type: "normal", text: "Google Ads ROI" },
//                         ],
//                     }]}
//                 />
//                 <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full '>
//                     <GoogleAdsRoiPrediction />
//                 </div>

//             </div>
//             <div className="my-10 sm:my-20 lg:my-30 3xl:my-50 text-center">
//                 <h3>We&apos;re the highest-rated Google Ads agency</h3>
//                 <p>Card section here..</p>
//             </div>
//             <div>
//                 {/* <ReadyToMoveUiUx /> */}
//             </div>
//             {/* video zoom  */}
//             <div>
//                 <VideoZoom />
//             </div>
//             {/* scroll text  */}
//             <div>
//                 <CommunicationScroll />
//             </div>

//             <div>
//                 <ClientTestimonials />
//             </div>
//             <div>
//                 {/* <CommonHeading
//                     text="Complete Example"
//                     textColor="#FFFFFF"
//                     backgroundColor="#10B981"
//                     image="/rocket.png"
//                     className="text-center p-6 rounded-xl"
//                 /> */}
//                 <CompaignCards />
//             </div>
//             <div>
//                 <CircularHelp />
//             </div>
//             {/* <div className="w-full py-20">
//                 <div className="max-w-7xl mx-auto space-y-32">


//                     <div className="grid lg:grid-cols-2 gap-20 items-center">


//                         <div className="max-w-150 overflow-hidden">
//                             <h2 className="text-4xl md:text-5xl  3xl:text-[60px]   font-semibold leading-[130%] tracking-[-0.02em] mb-6 text-black">
//                                 From Launch To 4.2X ROAS In Just 90 Days
//                             </h2>
//                             <p className="text-gray-600 text-lg max-w-lg">
//                                 Our Google Ads dashboard shows exactly how performance is tracked,
//                                 diagnosed, and improved.
//                             </p>
//                         </div>


//                         <div className="w-full 3xl:h-[550px]">
//                             <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//                                 <iframe
//                                     src="https://www.loom.com/embed/1d8cf98d017644d1bac4787c6ebabb3b"
//                                     frameBorder="0"
//                                     allowFullScreen
//                                     className="absolute top-0 left-0 w-full h-full "
//                                 ></iframe>
//                             </div>
//                         </div>
//                     </div>



//                     <div className="grid lg:grid-cols-2 gap-20 items-center">


//                         <div className="w-full order-2 lg:order-1">
//                             <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//                                 <iframe
//                                     src="https://www.loom.com/embed/1d8cf98d017644d1bac4787c6ebabb3b"
//                                     frameBorder="0"
//                                     allowFullScreen
//                                     className="absolute top-0 left-0 w-full h-full"
//                                 ></iframe>
//                             </div>
//                         </div>


//                         <div className="order-1 lg:order-2">
//                             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                                 Best <span className="text-green-600">PPC</span> Ad Agency
//                             </h2>
//                             <p className="text-gray-600 text-lg max-w-lg">
//                                 Hiring the wrong agency puts you 45% behind your competitors.
//                                 Watch what Upthrust clients say about the results they got.
//                                 Real people, real numbers, no BS.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div> */}
//             <div className="w-full py-20">
//                 <div className="max-w-7xl mx-auto space-y-32">

//                     {/* Section 1 */}
//                     <div className="grid lg:grid-cols-2 gap-20 items-center">

//                         {/* Left Content */}
//                         <div className="max-w-150 overflow-hidden">
//                             <h2 className="text-4xl md:text-5xl 3xl:text-[60px] font-semibold leading-[130%] tracking-[-0.02em] mb-6 text-black">
//                                 From Launch To 4.2X ROAS In Just 90 Days
//                             </h2>
//                             <p className="text-gray-600 text-lg max-w-lg">
//                                 Our Google Ads dashboard shows exactly how performance is tracked,
//                                 diagnosed, and improved.
//                             </p>
//                         </div>

//                         {/* Right Video */}
//                         <div className="w-full">
//                             <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//                                 <video
//                                     className="w-full h-full object-cover"
//                                     src="/videos/case-study.mp4"
//                                     autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                     controls
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Section 2 */}
//                     <div className="grid lg:grid-cols-2 gap-20 items-center">

//                         {/* Left Video */}
//                         <div className="w-full order-2 lg:order-1">
//                             <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
//                                 <video
//                                     className="w-full h-full object-cover"
//                                     src="/videos/case-study.mp4"
//                                     autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                     controls
//                                 />
//                             </div>
//                         </div>

//                         {/* Right Content */}
//                         <div className="order-1 lg:order-2">
//                             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                                 Best <span className="text-green-600">PPC</span> Ad Agency
//                             </h2>
//                             <p className="text-gray-600 text-lg max-w-lg">
//                                 Hiring the wrong agency puts you 45% behind your competitors.
//                                 Watch what Upthrust clients say about the results they got.
//                                 Real people, real numbers, no BS.
//                             </p>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//             <div className='max-sm:px-2 sm:max-w-[90%] sm:mx-auto w-full mt-20 3xl:mt-24 mb-10 3xl:mb-16'>
//                 <h1>Test this is heading </h1>
//                 <PredictGrowth />
//             </div>
//             <div className='min-h-screen bg-black'>

//             </div>
//         </main>
//     )
// }

// export default page

import React from 'react'

const page = () => {
    return (
        <div>page</div>
    )
}

export default page