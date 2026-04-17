// 'use client';

// import { useRef, useEffect } from 'react';
// import Image from 'next/image';
// import CreativeRocketButton from './CreativeRocketButton';


// function SpButton({ text1, text2 }) {
//     return (
//         <div className="flex items-center gap-2 px-3 sm:px-6 py-1 sm:py-2 border rounded-full border-black bg-[#F6F6F6]">
//             <span className="text-blue font-bold text-[11px] sm:text-base">{text1}</span>
//             <span className=" text-[9px] sm:text-sm text-black font-normal whitespace-nowrap">{text2}</span>

//         </div>
//     )
// }

// const words = [
//     { text: 'CAC' },
//     { text: 'CMP' },
//     { text: 'CPC' }
// ];

// const images = [
//     { src: '/social/fb.webp', width: 40, height: 40 },
//     { src: '/social/insta.webp', width: 40, height: 40 },
//     { src: '/social/tikok.webp', width: 40, height: 40 },
// ];

// const brandicons = [
//     { src: '/brands/brand-black/bosch.webp', alt: 'Bosch', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-28 h-fit" },
//     { src: '/brands/brand-black/loreal.webp', alt: 'Loreal', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-28 h-fit" },
//     { src: '/brands/brand-black/biba.webp', alt: 'Biba', customCss: "w-16 sm:w-22 md:w-24 lg:w-26 xl:w-18 2xl:w-19 3xl:w-22 h-fit" },
//     { src: '/brands/brand-black/zomato.webp', alt: 'Zomato', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-26 h-fit" },
//     { src: '/brands/brand-black/libas.webp', alt: 'Libas', customCss: "w-9 sm:w-9 md:w-9 lg:w-9 xl:w-10 2xl:w-10 3xl:w-12 h-fit" },
// ]

// export default function MetaAdsHero() {
//     const centerRef = useRef(null);
//     const leftRef = useRef(null);
//     const rightTopRef = useRef(null);
//     const rightBottomRef = useRef(null);

//     const playVideo = (ref) => {
//         [centerRef, leftRef, rightTopRef, rightBottomRef].forEach((videoRef) => {
//             if (videoRef.current) {
//                 videoRef.current.pause();
//                 videoRef.current.currentTime = 0;
//             }
//         });

//         if (ref.current) {
//             ref.current.play();
//         }
//     };

//     const resetToCenter = () => {
//         playVideo(centerRef);
//     };

//     useEffect(() => {
//         if (centerRef.current) {
//             centerRef.current.play();
//         }
//     }, []);

//     return (
//         <div className="min-h-screen  flex items-center max-w-[90%] 3xl:max-w-[90%] py-12 mx-auto overflow-hidden mt-20 2xl:mt-30 3xl:mt-25">
//             <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-4">
//                 {/* LEFT: Copy */}
//                 <div className="space-y-5 max-sm:h-[100vh - 80px] w-full lg:max-w-[48%] text-black relative">
//                     {/* Top tag */}
//                     <div className="flex max-sm:text-left justify-center sm:justify-start gap-2 items-start sm:items-center">
//                         <p className="text-lg xl:text-base 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">The creative ad agency trusted by BOSCH, L&apos;ORÉAL, Tata and PokerBazi</p>
//                     </div>

//                     {/* Headline */}
//                     <h1 className="text-[42px] lg:text-[50px] 2xl:text-[55px] 3xl:text-[65px] 1800:text-[72px] leading-[120%] sm:leading-[130%] tracking-[-0.04em] font-semibold max-sm:text-left">
//                         Creative Ads That
//                         <br />
//                         <span className="text-orange"> Convert</span>, Built For
//                         <br />
//                         Brands Ready To Scale
//                     </h1>

//                     <Image width={150} height={50} className="object-contain w-[80%] sm:w-[70%] 2xl:w-[62%] 3xl:w-[68%] 1800:w-[70%] absolute top-[37%] sm:top-[33%] 2xl:top-[37%] 3xl:top-[36%] 1800:top-[39%] h-fit " src="/creative-agency/line.png" alt="Meta Business Partner" />

//                     {/* Subtext */}
//                     <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] mt-10 font-normal">
//                         Stop burning ad budget on stale creative. Start launching fresh, data-tested variants every month that hit your ROAS targets and scale profitably.
//                     </p>
//                     {/* CTA Button */}
//                     <div className="my-8 sm:my-12 max-sm:w-full flex max-sm:justify-start ">
//                         <CreativeRocketButton text1='Get Your' text2='Free Ad Audit' color='orange' />
//                     </div>

//                     <div className="flex items-center max-md:justify-center gap-3 md:gap-5 1600:gap-8 mt-4 mb-8">

//                         <Image width={300} height={120} className="object-contain h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/meta-ads/google-rating.webp" alt="Meta Business Partner" />
//                         <Image width={300} height={120} className="object-contain h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/badges/highest-user-adoption.webp" alt="Meta Business Partner" />
//                         <Image width={300} height={120} className="object-contain  h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/badges/high-performer.webp" alt="Meta Business Partner" />
//                         <Image width={300} height={120} className="object-contain w-24 sm:w-30 1800:w-35 h-full" src="/meta-ads/meta.webp" alt="Meta Business Partner" />
//                     </div>

//                     <div className="pt-5">
//                         <p className="text-lg leading-[150%] tracking-[-0.02em] font-normal">Brands we&apos;ve scaled</p>

//                         <div className="flex justify-between gap-y-5 xs:gap-y-6 gap-x-2  items-center py-5 md:py-5 3xl:py-8 max-w-sm sm:max-w-xl xl:max-w-lg 1600:max-w-2xl 1800:max-w-3xl pb-12">
//                             {brandicons.map((brand, index) => (
//                                 <div
//                                     key={brand?.alt}
//                                     className={`flex items-center justify-center ${index === brandicons.length - 1 ? "max-sm:hidden" : ""
//                                         } ${brand.customCss}`}
//                                 >
//                                     <Image
//                                         src={brand.src}
//                                         alt="Logos of google brands partnered with Upthrust"
//                                         width={160}
//                                         height={60}
//                                         className="max-h-full max-w-full object-contain select-none"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>

//                 {/* RIGHT: Video grid */}
//                 <div className="w-full  lg:max-w-[52%] max-lg:overflow-x-hidden max-lg:flex max-lg:justify-center">
//                     <div className="relative max-sm:min-w-[550px] w-full h-full flex justify-center min-h-[470px] lg:min-h-[500px]  1800:min-h-[600px] max-h-[739px] 1600:200 1800:max-w-[890px] ">

//                         {/* Facebook pic */}
//                         <div className="absolute size-[95px] 3xl:w-[131px] 3xl:h-[128px] top-10 2xl:top-0 left-[20%]  2xl:left-36 z-40">
//                             <Image
//                                 width={130}
//                                 height={130}
//                                 src="/social/fb-3d.webp"
//                                 alt="Facebook"
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>
//                         {/* Instagram pic */}
//                         <div className="absolute right-[25%] size-[95px] 3xl:w-[131px]  3xl:h-[128px] top-[360px] sm:top-[420px]  2xl:top-[480px] 1800px:top-[560px]  z-40 ">
//                             <Image
//                                 width={130}
//                                 height={130}
//                                 src="/social/insta-3d.webp"
//                                 alt="Instagram"
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>

//                         {/* buttons  */}
//                         <div className="absolute top-20 left-[70%] -translate-x-1/2 z-35">
//                             <SpButton text1="20%" text2="CRV BOOST" />
//                         </div>
//                         <div className="absolute top-60 sm:top-70 left-[70%] -translate-x-1/2 z-35">
//                             <SpButton text1="3X" text2="AVERAGE ROI" />
//                         </div>

//                         <div className="absolute sm:hidden top-35 sm:-top-12 left-[30%] sm:left-[40%] -translate-x-1/2 z-40">
//                             <SpButton text1="30%" text2="DROP IN CPAs" />
//                         </div>


//                         {/* left video*/}
//                         <div className="absolute left-5 sm:left-0 top-30 z-20">
//                             {/* border rounded  */}
//                             <div className="absolute max-sm:hidden -top-15 -left-5 size-[260px] 2xl:size-[330px] border-[1px] border-black ">
//                             </div>

//                             <div className="relative w-[135px] h-[240px] lg:w-[160px] lg:h-[280px]  2xl:w-[220px] 2xl:h-[350px]  1800:w-[240px] 1800:h-[400px] aspect-209/370 rounded-[13px]">

//                                 {/* CTA badge */}
//                                 <div className="absolute max-sm:hidden top-5 sm:-top-12 left-[50%] sm:left-[40%] -translate-x-1/2 z-30">
//                                     <SpButton text1="30%" text2="DROP IN CPAs" />
//                                 </div>

//                                 <video
//                                     ref={leftRef}
//                                     onMouseEnter={() => playVideo(leftRef)}
//                                     onMouseLeave={resetToCenter}
//                                     className="w-full h-full object-cover rounded-[13px]"
//                                     // autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                 >
//                                     <source
//                                         src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4"
//                                         type="video/mp4"
//                                     />
//                                 </video>
//                             </div>
//                         </div>

//                         {/* center video */}
//                         <div className="absolute left-1/2 -translate-x-1/2 top-4 z-30 w-[213px] overflow-hidden sm:w-[230px]  3xl:w-[300px] 1800:w-[330px]">

//                             <div className="relative  aspect-[330/640]">

//                                 <video
//                                     ref={centerRef}
//                                     className="absolute inset-0 w-full h-full object-cover  rounded-[45px]"
//                                     // autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                 >
//                                     <source
//                                         src="https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/aviascasserolesenglishmp4.mp4"
//                                         type="video/mp4"
//                                     />
//                                 </video>

//                                 <Image
//                                     src="/meta-ads/frame-with-buttons.webp"
//                                     alt="phone"
//                                     fill
//                                     className="object-contain z-20 pointer-events-none"
//                                 />
//                             </div>
//                         </div>

//                         {/* right video */}
//                         <div className="absolute right-0 sm:right-0 3xl:right-2 top-0 z-20 flex flex-col max-sm:gap-5 sm:justify-between  h-full w-[160px] lg:w-[170px] 2xl:w-[210px] 1800:w-[224px] items-start ">


//                             {/* Top video */}
//                             <div className=" w-[144px] h-[257px] lg:w-[170px] lg:h-[280px] 2xl:w-[190px] 2xl:h-[300px] 1800:w-[208px] 1800:h-[364px] rounded-[13px] ">
//                                 <video
//                                     ref={rightTopRef}
//                                     onMouseEnter={() => playVideo(rightTopRef)}
//                                     onMouseLeave={resetToCenter}
//                                     className="w-full h-full object-cover rounded-[13px]"
//                                     // autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                 >
//                                     <source
//                                         src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4"
//                                         type="video/mp4"
//                                     />
//                                 </video>
//                             </div>

//                             {/* Bottom video */}
//                             <div className=" size-[102px] lg:size-[110px] 2xl:size-[130px] 1800:size-[161px] rounded-[8px] ">
//                                 <video
//                                     ref={rightBottomRef}
//                                     onMouseEnter={() => playVideo(rightBottomRef)}
//                                     onMouseLeave={resetToCenter}
//                                     className="w-full h-full object-cover rounded-[8px]"
//                                     // autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                 >
//                                     <source
//                                         src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4"
//                                         type="video/mp4"
//                                     />
//                                 </video>
//                             </div>

//                         </div>

//                         <div className="max-sm:hidden absolute top-50 3xl:top-65 right-10 size-[240px] 3x:size-[330px] border-r-[1px] border-b-[1px] border-black ">
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }



'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import CreativeRocketButton from './CreativeRocketButton';


function SpButton({ text1, text2 }) {
    return (
        <div className="flex items-center gap-2 px-3 sm:px-6 py-1 sm:py-2 border rounded-full border-black bg-[#F6F6F6]">
            <span className="text-blue font-bold text-[11px] sm:text-base">{text1}</span>
            <span className=" text-[9px] sm:text-sm text-black font-normal whitespace-nowrap">{text2}</span>
        </div>
    )
}

function MuteButton({ isMuted, onToggle, positionClass }) {
    return (
        <button
            onClick={onToggle}
            className={`absolute bottom-2 right-2 z-40 flex items-center justify-center w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 transition-colors ${positionClass}`}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
            {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            )}
        </button>
    );
}

const words = [
    { text: 'CAC' },
    { text: 'CMP' },
    { text: 'CPC' }
];

const images = [
    { src: '/social/fb.webp', width: 40, height: 40 },
    { src: '/social/insta.webp', width: 40, height: 40 },
    { src: '/social/tikok.webp', width: 40, height: 40 },
];

const brandicons = [
    { src: '/brands/brand-black/bosch.webp', alt: 'Bosch', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-28 h-fit" },
    { src: '/brands/brand-black/loreal.webp', alt: 'Loreal', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-28 h-fit" },
    { src: '/brands/brand-black/biba.webp', alt: 'Biba', customCss: "w-16 sm:w-22 md:w-24 lg:w-26 xl:w-18 2xl:w-19 3xl:w-22 h-fit" },
    { src: '/brands/brand-black/zomato.webp', alt: 'Zomato', customCss: "w-20 sm:w-22 md:w-24 lg:w-26 xl:w-24 2xl:w-22 3xl:w-26 h-fit" },
    { src: '/brands/brand-black/libas.webp', alt: 'Libas', customCss: "w-9 sm:w-9 md:w-9 lg:w-9 xl:w-10 2xl:w-10 3xl:w-12 h-fit" },
]

export default function MetaAdsHero() {
    const centerRef = useRef(null);
    const leftRef = useRef(null);
    const rightTopRef = useRef(null);
    const rightBottomRef = useRef(null);

    const [mutedState, setMutedState] = useState({
        left: true,
        center: true,
        rightTop: true,
        rightBottom: true,
    });

    const toggleMute = (key, ref) => {
        setMutedState(prev => {
            const newMuted = !prev[key];
            if (ref.current) {
                ref.current.muted = newMuted;
            }
            return { ...prev, [key]: newMuted };
        });
    };

    const playVideo = (ref) => {
        [centerRef, leftRef, rightTopRef, rightBottomRef].forEach((videoRef) => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        });

        if (ref.current) {
            ref.current.play();
        }
    };

    const resetToCenter = () => {
        playVideo(centerRef);
    };

    useEffect(() => {
        if (centerRef.current) {
            centerRef.current.play();
        }
    }, []);

    return (
        <div className="min-h-screen  flex items-center max-w-[90%] 3xl:max-w-[90%] py-12 mx-auto overflow-hidden mt-20 2xl:mt-30 3xl:mt-25">
            <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-4">
                {/* LEFT: Copy */}
                <div className="space-y-5 max-sm:h-[100vh - 80px] w-full lg:max-w-[48%] text-black relative">
                    {/* Top tag */}
                    <div className="flex max-sm:text-left justify-center sm:justify-start gap-2 items-start sm:items-center">
                        <p className="text-lg xl:text-base 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">The creative ad agency trusted by BOSCH, L&apos;ORÉAL, Tata and PokerBazi</p>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[42px] lg:text-[50px] 2xl:text-[55px] 3xl:text-[65px] 1800:text-[72px] leading-[120%] sm:leading-[130%] tracking-[-0.04em] font-semibold max-sm:text-left">
                        Creative Ads That
                        <br />
                        <span className="text-orange"> Convert</span>, Built For
                        <br />
                        Brands Ready To Scale
                    </h1>

                    <Image width={150} height={50} className="object-contain w-[80%] sm:w-[70%] 2xl:w-[62%] 3xl:w-[68%] 1800:w-[70%] absolute top-[37%] sm:top-[33%] 2xl:top-[37%] 3xl:top-[36%] 1800:top-[39%] h-fit " src="/creative-agency/line.png" alt="Meta Business Partner" />

                    {/* Subtext */}
                    <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] mt-10 font-normal">
                        Stop burning ad budget on stale creative. Start launching fresh, data-tested variants every month that hit your ROAS targets and scale profitably.
                    </p>
                    {/* CTA Button */}
                    <div className="my-8 sm:my-12 max-sm:w-full flex max-sm:justify-start ">
                        <CreativeRocketButton text1='Get Your' text2='Free Ad Audit' color='orange' />
                    </div>

                    <div className="flex items-center max-md:justify-center gap-3 md:gap-5 1600:gap-8 mt-4 mb-8">
                        <Image width={300} height={120} className="object-contain h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/meta-ads/google-rating.webp" alt="Meta Business Partner" />
                        <Image width={300} height={120} className="object-contain h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/badges/highest-user-adoption.webp" alt="Meta Business Partner" />
                        <Image width={300} height={120} className="object-contain  h-12 md:h-16 xl:h-18 3xl:h-20 w-fit" src="/badges/high-performer.webp" alt="Meta Business Partner" />
                        <Image width={300} height={120} className="object-contain w-24 sm:w-30 1800:w-35 h-full" src="/meta-ads/meta.webp" alt="Meta Business Partner" />
                    </div>

                    <div className="pt-5">
                        <p className="text-lg leading-[150%] tracking-[-0.02em] font-normal">Brands we&apos;ve scaled</p>

                        <div className="flex justify-between gap-y-5 xs:gap-y-6 gap-x-2  items-center py-5 md:py-5 3xl:py-8 max-w-sm sm:max-w-xl xl:max-w-lg 1600:max-w-2xl 1800:max-w-3xl pb-12">
                            {brandicons.map((brand, index) => (
                                <div
                                    key={brand?.alt}
                                    className={`flex items-center justify-center ${index === brandicons.length - 1 ? "max-sm:hidden" : ""
                                        } ${brand.customCss}`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt="Logos of google brands partnered with Upthrust"
                                        width={160}
                                        height={60}
                                        className="max-h-full max-w-full object-contain select-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT: Video grid */}
                <div className="w-full  lg:max-w-[52%] max-lg:overflow-x-hidden max-lg:flex max-lg:justify-center">
                    <div className="relative max-sm:min-w-[550px] w-full h-full flex justify-center min-h-[470px] lg:min-h-[500px]  1800:min-h-[600px] max-h-[739px] 1600:200 1800:max-w-[890px] ">

                        {/* Facebook pic */}
                        <div className="absolute size-[95px] 3xl:w-[131px] 3xl:h-[128px] top-10 2xl:top-0 left-[20%]  2xl:left-36 z-40">
                            <Image
                                width={130}
                                height={130}
                                src="/social/fb-3d.webp"
                                alt="Facebook"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Instagram pic */}
                        <div className="absolute right-[25%] size-[95px] 3xl:w-[131px]  3xl:h-[128px] top-[360px] sm:top-[420px]  2xl:top-[480px] 1800px:top-[560px]  z-40 ">
                            <Image
                                width={130}
                                height={130}
                                src="/social/insta-3d.webp"
                                alt="Instagram"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* buttons  */}
                        <div className="absolute top-20 left-[70%] -translate-x-1/2 z-35">
                            <SpButton text1="20%" text2="CRV BOOST" />
                        </div>
                        <div className="absolute top-60 sm:top-70 left-[70%] -translate-x-1/2 z-35">
                            <SpButton text1="3X" text2="AVERAGE ROI" />
                        </div>

                        <div className="absolute sm:hidden top-35 sm:-top-12 left-[30%] sm:left-[40%] -translate-x-1/2 z-40">
                            <SpButton text1="30%" text2="DROP IN CPAs" />
                        </div>


                        {/* left video*/}
                        <div className="absolute left-5 sm:left-0 top-30 z-20">
                            {/* border rounded  */}
                            <div className="absolute max-sm:hidden -top-15 -left-5 size-[260px] 2xl:size-[330px] border-[1px] border-black ">
                            </div>

                            <div className="relative w-[135px] h-[240px] lg:w-[160px] lg:h-[280px]  2xl:w-[220px] 2xl:h-[350px]  1800:w-[240px] 1800:h-[400px] aspect-209/370 rounded-[13px]">

                                {/* CTA badge */}
                                <div className="absolute max-sm:hidden top-5 sm:-top-12 left-[50%] sm:left-[40%] -translate-x-1/2 z-30">
                                    <SpButton text1="30%" text2="DROP IN CPAs" />
                                </div>

                                <video
                                    ref={leftRef}
                                    onMouseEnter={() => playVideo(leftRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[13px]"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                <MuteButton isMuted={mutedState.left} onToggle={() => toggleMute('left', leftRef)} />
                            </div>
                        </div>

                        {/* center video */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-4 z-30 w-[213px] overflow-hidden sm:w-[230px]  3xl:w-[300px] 1800:w-[330px]">

                            <div className="relative  aspect-[330/640]">

                                <video
                                    ref={centerRef}
                                    className="absolute inset-0 w-full h-full object-cover  rounded-[45px]"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/aviascasserolesenglishmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>

                                <Image
                                    src="/meta-ads/frame-with-buttons.webp"
                                    alt="phone"
                                    fill
                                    className="object-contain z-20 pointer-events-none"
                                />

                                <MuteButton  isMuted={mutedState.center} onToggle={() => toggleMute('center', centerRef)} positionClass="left-4 bottom-12" />
                            </div>
                        </div>

                        {/* right video */}
                        <div className="absolute right-0 sm:right-0 3xl:right-2 top-0 z-20 flex flex-col max-sm:gap-5 sm:justify-between  h-full w-[160px] lg:w-[170px] 2xl:w-[210px] 1800:w-[224px] items-start ">

                            {/* Top video */}
                            <div className="relative w-[144px] h-[257px] lg:w-[170px] lg:h-[280px] 2xl:w-[190px] 2xl:h-[300px] 1800:w-[208px] 1800:h-[364px] rounded-[13px] ">
                                <video
                                    ref={rightTopRef}
                                    onMouseEnter={() => playVideo(rightTopRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[13px]"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                <MuteButton isMuted={mutedState.rightTop} onToggle={() => toggleMute('rightTop', rightTopRef)} />
                            </div>

                            {/* Bottom video */}
                            <div className="relative size-[102px] lg:size-[110px] 2xl:size-[130px] 1800:size-[161px] rounded-[8px] ">
                                <video
                                    ref={rightBottomRef}
                                    onMouseEnter={() => playVideo(rightBottomRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[8px]"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                <MuteButton isMuted={mutedState.rightBottom} onToggle={() => toggleMute('rightBottom', rightBottomRef)} />
                            </div>

                        </div>

                        <div className="max-sm:hidden absolute top-50 3xl:top-65 right-10 size-[240px] 3x:size-[330px] border-r-[1px] border-b-[1px] border-black ">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}