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
                <div className="relative w-full max-w-[560px] min-h-[520px]">
                    {/* Background glows */}
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

                    {/* ── TOP LEFT FLOATING CARD — 30% DROP IN CPAs ── */}
                    <div
                        className="absolute top-8 left-0 z-20 w-44 rounded-2xl overflow-visible shadow-2xl"
                        style={{ animation: "floatA 4s ease-in-out infinite" }}
                    >
                        {/* Facebook badge */}
                        <div className="absolute -top-3 -right-3 z-30">
                            <FacebookBadge />
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/60 bg-[#111]">
                            {/* Stat badge */}
                            <div className="absolute top-2.5 left-2.5 z-10">
                                <StatBadge value="30%" label="Drop in CPAs" />
                            </div>

                            {/* Skincare video bg */}
                            <div className="relative h-52 bg-gradient-to-br from-[#2a1810] via-[#1a0f08] to-[#3d2010] flex items-center justify-center">
                                <div className="relative w-12 h-24 bg-gradient-to-b from-[#d4a574] to-[#c4956a] rounded-[30px_30px_8px_8px] shadow-xl">
                                    <div className="absolute top-2 left-2 right-2 h-8 bg-white/15 rounded-2xl" />
                                </div>
                                <PlayCircle />
                                <p className="absolute bottom-2 left-2.5 text-[8px] text-white/40 tracking-[3px] uppercase">
                                    The Texture
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── CENTER PHONE ── */}
                    <div className="relative mx-auto w-56 bg-white rounded-[36px] px-2 pt-3 pb-2 shadow-2xl border border-violet-200/60 z-10 mt-6">
                        {/* Status bar */}
                        <div className="flex justify-between items-center px-2 mb-1.5">
                            <span className="text-[9px] font-bold text-gray-700">9:41</span>
                            <div className="w-14 h-3 bg-gray-900 rounded-full" />
                            <div className="flex gap-1 items-center">
                                <div className="w-3 h-2 bg-gray-700 rounded-sm" />
                                <span className="text-[8px] text-gray-600">▲</span>
                            </div>
                        </div>

                        {/* Shoppetite header */}
                        <div className="flex items-center justify-center gap-1 text-[10px] font-black text-violet-600 tracking-widest mb-1.5">
                            <span>🛍</span>
                            <span>SHOPPETITE</span>
                        </div>

                        {/* Main video area */}
                        <div className="relative rounded-2xl overflow-hidden h-72 flex items-center justify-center bg-[#0d0820]">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0820] via-[#1a1035] to-[#5c3317]" />

                            {/* Colorful phone case */}
                            <div
                                className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-20 rounded-xl border-2 border-white/30 shadow-2xl z-10"
                                style={{
                                    background: "linear-gradient(135deg,#ff6b6b 0%,#ffd93d 25%,#6bcb77 50%,#4d96ff 75%,#ff6b6b 100%)",
                                }}
                            />

                            {/* LV bag at bottom */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-14 rounded-lg shadow-xl flex items-center justify-center z-10 bg-gradient-to-br from-[#8B6914] via-[#c8a84b] to-[#8B6914]">
                                <div className="border border-white/20 rounded w-14 h-9 flex items-center justify-center text-white/50 font-black italic text-sm">
                                    LV
                                </div>
                            </div>

                            <PlayCircle />
                        </div>

                        {/* Phone bottom nav */}
                        <div className="flex justify-around items-center pt-2 pb-0.5 opacity-30">
                            {["●", "⌂", "○", "☰"].map((icon, i) => (
                                <span key={i} className="text-xs text-gray-700">{icon}</span>
                            ))}
                        </div>
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

                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/60 bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#2a4a2a] flex flex-wrap items-center justify-center gap-1 p-2 relative">
                            {["#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#8b5cf6", "#f97316"].map((c, i) => (
                                <div
                                    key={i}
                                    className="w-5 h-8 rounded shadow-md"
                                    style={{ background: `linear-gradient(180deg, ${c} 0%, ${c}99 100%)` }}
                                />
                            ))}
                            <PlayCircle />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}