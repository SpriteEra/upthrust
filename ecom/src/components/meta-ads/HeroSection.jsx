'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, Shield, TrendingUp, Award, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import AnimatedWord from '../google-ads/AnimatedWord';
import StylishButton from '@/common/RocketButton';
import Image from 'next/image';
import RatingStars from '@/common/Rating';


function SpButton({ text1, text2 }) {
    return (
        <div className="flex items-center gap-2 px-6 py-2 border rounded-full border-black bg-[#F6F6F6]">
            <span className="text-blue font-bold text-base">{text1}</span>
            <span className="text-sm text-black font-normal whitespace-nowrap">{text2}</span>

        </div>
    )
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
    { src: '/brands/brand-black/bosch.webp', alt: 'Brand 1', customCss: "h-7  w-12 xs:h-8 xs:w-13 lg:h-10 2xl:h-5 2xl:w-fit 3xl:w-30 3xl:h-10" },
    { src: '/brands/brand-black/loreal.webp', alt: 'Brand 1', customCss: "h-7  w-12 xs:h-8 xs:w-13 lg:h-10 2xl:h-4 2xl:w-fit 3xl:w-28 3xl:h-10" },
    { src: '/brands/brand-black/biba.webp', alt: 'Brand 1', customCss: "h-7  w-12 xs:h-8 xs:w-13 lg:h-10 2xl:h-4 2xl:w-fit  3xl:h-6" },
    { src: '/brands/brand-black/zomato.webp', alt: 'Brand 1', customCss: "h-7  w-12 xs:h-8 xs:w-13 lg:h-10 2xl:h-4 2xl:w-fit  3xl:h-8.5" },
    { src: '/brands/brand-black/libas.webp', alt: 'Brand 1', customCss: "h-7  w-12 xs:h-8 xs:w-13 lg:h-10 2xl:h-6.5 2xl:w-fit  3xl:h-9" },
]

export default function MetaAdsHero() {
    const centerRef = useRef(null);
    const leftRef = useRef(null);
    const rightTopRef = useRef(null);
    const rightBottomRef = useRef(null);

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
                <div className="space-y-5 w-full lg:max-w-[48%] text-black">
                    {/* Top tag */}
                    <div className="flex justify-start gap-2 items-center">
                        <AnimatedWord images={images} className="size-8.5 " />
                        <p className="text-lg  3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">Ads that scale — without the agency B.S.</p>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[42px] lg:text-[50px] 2xl:text-[60px] 1800:text-[86px] leading-[120%] tracking-[-0.04em] font-semibold max-sm:text-center">
                        The{' '}
                        <em className="font-instrument font-normal" >
                            Meta Ads
                        </em>{' '}
                        Agency
                        <br />
                        That Lowers Your
                        <br />
                        <span> <AnimatedWord words={words} className="h-10 md:h-12 lg:h-15 xl:h-25 2xl:h-15 3xl:h-25 w-30 md:w-30 lg:w-30 2xl:w-33.5 3xl:w-50 text-blue mx-auto" /> </span> While Scaling
                    </h1>

                    {/* Subtext */}
                    <p className="text-base 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">
                        Stop bleeding budget on audiences that don&apos;t convert. Run ads that drive revenue.
                    </p>

                    {/* CTA Button */}
                    <div className="my-12">
                        <StylishButton text1='Get Your' text2='Free Audit' color='blue' />
                    </div>

                    <div className="flex items-center gap-5 mt-4 mb-8">
                        <div className="flex items-start justify-start flex-col gap-1 border border-black rounded-sm px-3 py-2 min-h-18.5">
                            <div className="flex gap-1 ">
                                <p className="text-[14px] font-extrabold text-[#FEA500]">4.8</p>
                                {[...Array(5)].map((_, i) => (
                                    <Image width={20} height={20} key={i} className="size-[19px]" src="/meta-ads/star.webp" alt="Star" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[15px] text-[#6A6A6A] font-semibold leading-[100%]">Google</p>
                                <p className="text-[9px] text-[#6A6A6A] mt-0.5 ">Customer Reviews</p>
                            </div>
                        </div>
                        <Image width={150} height={75} className="object-contain h-18.5 w-fit" src="/badges/highest-user-adoption.webp" alt="Meta Business Partner" />
                        <Image width={150} height={75} className="object-contain h-18.5 w-fit" src="/badges/high-performer.webp" alt="Meta Business Partner" />
                        <Image width={100} height={50} className="object-contain w-30 h-full" src="/meta-ads/meta.webp" alt="Meta Business Partner" />
                    </div>

                    <div>
                        <p className="text-lg leading-[150%] tracking-[-0.02em] font-normal">Brands we&apos;ve scaled</p>

                        <div className="grid grid-cols-5 gap-y-5 xs:gap-y-6 gap-x-2 3xl:gap-x-16 items-center py-5 md:py-5 3xl:py-8 max-w-xl 3xl:max-w-3xl pb-12">
                            {brandicons.map((brand) => (
                                <div
                                    key={brand.name}
                                    className={`flex items-center justify-center ${brand.customCss}`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt={"Logos of google brands partnered with Upthrust"}
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
                <div className="w-full  lg:max-w-[52%] max-lg:overflow-x-auto">
                    <div className="relative max-lg:min-w-[750px] w-full h-full flex justify-center min-h-[550px] 1800:min-h-[600px] max-h-[739px] 3xl:max-w-[890px] ">

                        {/* Facebook pic */}
                        <div className="absolute size-[100px] 3xl:w-[131px] 3xl:h-[128px] top-10 2xl:top-0 left-44 2xl:left-36 z-40">
                            <Image
                                width={130}
                                height={130}
                                src="/social/fb-3d.webp"
                                alt="Facebook"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Instagram pic */}
                        <div className="absolute right-[25%] size-[100px] 3xl:w-[131px]  3xl:h-[128px] top-[420px] 1800px:top-[560px]  z-40 ">
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
                        <div className="absolute top-70 left-[70%] -translate-x-1/2 z-35">
                            <SpButton text1="3X" text2="AVERAGE ROI" />
                        </div>


                        {/* left video*/}
                        <div className="absolute left-0 top-30 z-20">
                            {/* border rounded  */}
                            <div className="absolute -top-15 -left-5 size-[330px] border-[1px] border-black ">
                            </div>

                            <div className="relative  h-[350px]  1800:w-[240px] 1800:h-[400px] aspect-209/370 rounded-[13px]">

                                {/* CTA badge */}
                                <div className="absolute -top-12 left-[40%] -translate-x-1/2 z-30">
                                    <SpButton text1="30%" text2="DROP IN CPAs" />
                                </div>

                                <video
                                    ref={leftRef}
                                    onMouseEnter={() => playVideo(leftRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[13px]"
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>

                        {/* center video */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-4 z-30 w-[270px] overflow-hidden 1800:w-[330px]">

                            <div className="relative  aspect-[330/640]">

                                <video
                                    ref={centerRef}
                                    className="absolute inset-0 w-full h-full object-cover  rounded-[45px]"
                                    // autoPlay
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
                            </div>
                        </div>

                        {/* right video */}
                        <div className="absolute right-0 3xl:right-2 top-0 z-20 flex flex-col justify-between  h-full w-[210px] 1800:w-[224px] items-start ">


                            {/* Top video */}
                            <div className=" w-[180px] h-[300px] 1800:w-[208px] 1800:h-[364px] rounded-[13px] ">
                                <video
                                    ref={rightTopRef}
                                    onMouseEnter={() => playVideo(rightTopRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[13px]"
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            {/* Bottom video */}
                            <div className=" size-[130px] 1800:size-[161px] rounded-[8px] ">
                                <video
                                    ref={rightBottomRef}
                                    onMouseEnter={() => playVideo(rightBottomRef)}
                                    onMouseLeave={resetToCenter}
                                    className="w-full h-full object-cover rounded-[8px]"
                                    // autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                        </div>

                        <div className="absolute top-50 right-10 size-[330px] border-r-[1px] border-b-[1px] border-black ">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}