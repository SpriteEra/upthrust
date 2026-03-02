'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, Shield, TrendingUp, Award, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import AnimatedWord from '../google-ads/AnimatedWord';
import StylishButton from '@/common/RocketButton';
import Image from 'next/image';


function StatBadge({ value, label }) {
    return (
        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md text-xs font-semibold whitespace-nowrap">
            <span className="text-violet-600 font-black text-sm">{value}</span>
            <span className="text-gray-500 uppercase tracking-wide">{label}</span>
        </div>
    );
}

function PlayCircle() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div
                    className="ml-0.5"
                    style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "8px solid rgba(255,255,255,0.9)",
                    }}
                />
            </div>
        </div>
    );
}

function FacebookBadge() {
    return (
        <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-lg shadow-blue-400/40 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        </div>
    );
}

function InstagramBadge() {
    return (
        <div
            className="w-12 h-12 rounded-full border-[3px] border-white flex items-center justify-center"
            style={{
                background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                boxShadow: "0 4px 16px rgba(214,36,159,0.4)",
            }}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        </div>
    );
}

function SpButton({ text1, text2 }) {
    return (
        <div className="flex items-center gap-2 px-6 py-2 border rounded-full border-black bg-white">
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

const brandicons = [
    { src: '/meta-ads/logos/cl1.png', alt: 'Brand 2' },
    { src: '/meta-ads/logos/cl2.png', alt: 'Brand 2' },
    { src: '/meta-ads/logos/cl3.png', alt: 'Brand 2' },
    { src: '/meta-ads/logos/cl4.png', alt: 'Brand 2' },
    { src: '/meta-ads/logos/cl5.png', alt: 'Brand 1' },
]

export default function MetaAdsHero() {
    return (
        <div className="min-h-screen  flex items-center max-w-[90%] 3xl:max-w-[85%] py-12 mx-auto overflow-hidden mt-20 3xl:mt-25">
            <div className="w-full justify-center items-center flex flex-col lg:flex-row gap-4">

                {/* LEFT: Copy */}
                <div className="space-y-5 w-full lg:max-w-[48%] text-black">
                    {/* Top tag */}
                    <div className="flex items-start justify-start gap-2">
                        <AnimatedWord words={words} className="h-5 md:h-5 w-20 md:w-20 lg:w-30 3xl:w-10 " />
                        <p className="text-lg  3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">Ads that scale — without the agency B.S.</p>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[42px] lg:text-[50px] 3xl:text-[86px] leading-[120%] tracking-[-0.04em] font-semibold">
                        The{' '}
                        <em className="font-instrument font-normal" >
                            Meta Ads
                        </em>{' '}
                        Agency
                        <br />
                        That Lowers Your
                        <br />
                        <span> <AnimatedWord words={words} className="h-10 md:h-12 lg:h-15 xl:h-25 w-30 md:w-30 lg:w-30 3xl:w-50 text-blue mx-auto" /> </span> While Scaling
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal">
                        Stop bleeding budget on audiences that don&apos;t convert. Run ads that drive revenue.
                    </p>

                    {/* CTA Button */}
                    <div className="my-12">
                        <StylishButton color='blue' />
                    </div>

                    <div className="flex items-center gap-5 mt-4 mb-8">
                        <div className="flex items-start justify-start flex-col gap-1 border border-black rounded-lg px-3 py-2 ">
                            <div className="flex gap-1 ">
                                <p className="text-[14px] font-extrabold text-[#FEA500]">4.8</p>
                                {[...Array(5)].map((_, i) => (
                                    <Image width={20} height={20} key={i} className="size-[19px]" src="/meta-ads/Star.png" alt="Star" />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[15px] text-[#6A6A6A] font-semibold leading-[100%]">Google</p>
                                <p className="text-[9px] text-[#6A6A6A] ">Customer Reviews</p>
                            </div>
                        </div>
                        <Image width={150} height={75} className="object-contain w-16 h-18.5" src="/meta-ads/card1.png" alt="Meta Business Partner" />
                        <Image width={150} height={75} className="object-contain w-16 h-18.5" src="/meta-ads/card2.png" alt="Meta Business Partner" />
                        <Image width={100} height={50} className="object-contain" src="/meta-ads/meta.png" alt="Meta Business Partner" />
                    </div>

                    <div>
                        <p className="text-lg leading-[150%] tracking-[-0.02em] font-normal">Brands we&apos;ve scaled</p>

                        <div className="grid grid-cols-5 gap-y-5 xs:gap-y-6 gap-x-2 3xl:gap-x-16 items-center py-5 md:py-5 3xl:py-8 max-w-xl 3xl:max-w-3xl pb-12">
                            {brandicons.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="flex items-center justify-center h-7 xs:h-8 lg:h-10 w-12 3xl:h-10 xs:w-13 3xl:w-20"
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
                <div className="relative w-full lg:max-w-[52%] min-h-[520px]">
                    {/* Background glows */}
                    <div
                        className="absolute top-8 left-0 z-20 w-44 rounded-2xl overflow-visible "
                    >
                        {/* Facebook badge */}
                        <div className="absolute -top-3 -right-3 z-30">
                            <FacebookBadge />
                        </div>
                        <div className="absolute border-[1px] size-[330px] border-black z-10  -top-15 -left-5" >

                        </div>

                        <div className="relative ">

                            <div className="absolute bottom-1  -translate-x-1/2  left-[60%] z-30  ">
                                <SpButton text1="30%" text2="DROP IN CPAs" />
                            </div>

                            <div className="absolute h-[398px] w-[224px] top-2.5 left-2.5 z-10">
                                <video
                                    className="w-full h-full object-cover rounded-[20px] "
                                    controls
                                    playsInline
                                >
                                    <source
                                        src="https://cdn.upthrust.agency/Google%20ads/LawyerNYC.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                        </div>
                    </div>

                    {/* ── CENTER PHONE ── */}
                    <div className="relative mx-auto max-w-[330px] pt-3 pb-2  border z-20 ">

                        <div className="absolute h-[640px] w-[330px] top-2.5 left-4 z-10">
                            <video
                                className="w-full h-full object-cover rounded-[20px] "
                                controls
                                playsInline
                            >
                                <source
                                    src="https://cdn.upthrust.agency/Google%20ads/LawyerNYC.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>s


                    </div>

                    {/* ── TOP RIGHT FLOATING CARD — 20% CRV BOOST ── */}
                    <div
                        className="absolute top-2 right-0 z-20 w-40 rounded-2xl overflow-hidden shadow-2xl border border-white/50"
                        style={{ animation: "floatB 4s ease-in-out infinite 1s" }}
                    >
                        <div className="absolute top-2.5 left-2 z-10">
                            <StatBadge value="20%" label="CRV Boost" />
                        </div>

                        {/* Menswear */}
                        <div className="relative h-52 bg-gradient-to-b from-[#e8e0d8] to-[#d4c8bc] flex flex-col items-center justify-end pb-4 gap-0">
                            <div className="w-10 h-10 bg-gradient-to-b from-[#f5c5a0] to-[#e8b090] rounded-full shadow-md" />
                            <div className="w-14 h-16 bg-gradient-to-b from-[#f0ece8] to-[#e8e4e0] shadow-sm -mt-1" />
                            <div className="w-14 h-14 bg-gradient-to-b from-[#e8d5c0] to-[#d4c0a8] shadow-sm" />
                            {/* hotspot */}
                            <div className="absolute bottom-14 right-8 w-5 h-5 rounded-full border-2 border-white/90 shadow-md" />
                            <PlayCircle />
                        </div>
                    </div>

                    {/* ── 3X AVERAGE ROI FLOATING BADGE ── */}
                    <div className="absolute z-30 bottom-28 right-4">
                        <StatBadge value="3X" label="Average ROI" />
                    </div>

                    {/* ── BOTTOM RIGHT SMALL PRODUCT CARD ── */}
                    <div
                        className="absolute bottom-0 right-0 z-20 w-32 h-24 rounded-2xl overflow-visible shadow-2xl"
                        style={{ animation: "floatC 4s ease-in-out infinite 0.5s" }}
                    >
                        {/* Instagram badge */}
                        <div className="absolute -bottom-3 -right-3 z-30">
                            <InstagramBadge />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}