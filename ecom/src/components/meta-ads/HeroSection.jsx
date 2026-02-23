'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, Shield, TrendingUp, Award, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import AnimatedWord from '../google-ads/AnimatedWord';
import StylishButton from '@/common/RocketButton';
import Image from 'next/image';

const VideoCard = ({ label, value, position, isMain, autoPlay }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (autoPlay) {
                videoRef.current.play().catch(() => { });
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [autoPlay]);

    const handleMouseEnter = () => {
        if (!isMain) {
            setIsHovered(true);
            videoRef.current?.play().catch(() => { });
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMain) {
            setIsHovered(false);
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    // Gradient placeholder videos using canvas-based colored backgrounds
    const gradients = [
        'from-violet-600 via-purple-500 to-pink-500',
        'from-blue-500 via-cyan-400 to-teal-400',
        'from-orange-400 via-rose-400 to-pink-500',
        'from-emerald-400 via-teal-500 to-cyan-600',
    ];

    const icons = ['📱', '🎨', '👗', '🛍️'];
    const idx = ['main', 'tl', 'tr', 'br'].indexOf(position);

    return (
        <div
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isMain
                ? 'col-span-2 row-span-2 shadow-2xl shadow-violet-500/30'
                : 'shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1'
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Placeholder gradient background simulating video */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[idx >= 0 ? idx : 0]} transition-all duration-500 ${isHovered || (isMain && isPlaying) ? 'opacity-90' : 'opacity-80'
                    }`}
            />

            {/* Animated content inside "video" */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div
                    className={`text-white/30 font-black select-none transition-transform duration-500 ${isHovered || (isMain && isPlaying) ? 'scale-110' : 'scale-100'
                        }`}
                    style={{ fontSize: isMain ? '5rem' : '2.5rem' }}
                >
                    {icons[idx >= 0 ? idx : 0]}
                </div>
                {/* Simulated video scan lines */}
                <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered || (isMain && isPlaying) ? 'opacity-10' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                    }}
                />
            </div>

            {/* Stat badge */}
            {label && (
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md">
                    <p className="text-xs font-bold text-gray-800 tracking-tight">{value}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{label}</p>
                </div>
            )}

            {/* Play/Pause indicator */}
            {!isMain && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play size={14} className="text-white ml-0.5" fill="white" />
                    </div>
                </div>
            )}

            {/* Playing indicator for small cards */}
            {!isMain && isPlaying && (
                <div className="absolute bottom-2 right-2 flex gap-[2px] items-end">
                    {[3, 5, 4, 6, 3].map((h, i) => (
                        <div
                            key={i}
                            className="w-[3px] bg-white rounded-full animate-pulse"
                            style={{
                                height: `${h * 2}px`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '0.6s',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Main video overlay with Meta/FB badge */}
            {isMain && (
                <div className="absolute top-2 right-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-xs">f</span>
                    </div>
                </div>
            )}

            {/* Shimmer effect on hover */}
            <div
                className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
};

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
        <div className="min-h-screen  flex items-center max-w-[90%] 3xl:max-w-[85%] py-12 mx-auto overflow-hidden mt-20">
            <div className="w-full justify-center items-center flex flex-col lg:flex-row">

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
                    <div>
                        <StylishButton color='blue' />
                    </div>

                    <div className="flex items-center gap-5 mt-4">
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
                        <div className="flex items-center gap-5 mt-4">
                            {brandicons.map((icon, index) => (
                                <Image key={index} width={150} height={75} className="object-contain w-16 h-18.5" src={icon.src} alt={icon.alt} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT: Video grid */}
                <div className="relative  w-full lg:max-w-[52%]">
                    {/* Decorative glow */}
                    <div className="absolute -top-10 -right-10 w-72 h-72 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

                    {/* Phone frame wrapper */}
                    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-5 shadow-2xl border border-white/80">
                        {/* Instagram bottom bar decoration */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-6 items-center opacity-30">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-4 h-4 rounded bg-gray-400" />
                            ))}
                        </div>

                        {/* Grid: 3 cols, 2 rows — main is col-span-2 row-span-2 */}
                        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[380px]">
                            {/* Main large video (auto-playing) */}
                            <VideoCard
                                position="main"
                                label="DROP IN CPAs"
                                value="30%"
                                isMain={true}
                                autoPlay={true}
                            />

                            {/* Top right small */}
                            <VideoCard
                                position="tl"
                                label="CPA BOOST"
                                value="20%"
                                isMain={false}
                                autoPlay={false}
                            />

                            {/* Bottom right small */}
                            <VideoCard
                                position="br"
                                label="AVERAGE ROI"
                                value="3X"
                                isMain={false}
                                autoPlay={false}
                            />
                        </div>

                        {/* Instagram badge */}
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full shadow-xl border-2 border-white"
                            style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)' }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-5 h-5 rounded-lg border-2 border-white" />
                            </div>
                        </div>

                        {/* Facebook badge */}
                        <div className="absolute -top-4 left-1/3 w-10 h-10 bg-blue-600 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                            <span className="text-white font-black text-sm">f</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}