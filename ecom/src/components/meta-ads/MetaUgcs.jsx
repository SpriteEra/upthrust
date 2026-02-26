"use client";
import { Loader2, Play, Pause, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MetaRocketButton from './MetaRocketButton';

const navLinks = [
    {
        name: 'Clothing & Footwear',
        id: 'c&f',
        alt: "Influencer-style product demo for D2C fashion brand",
        items: [
            { id: 1, image: "/ecom/ugcs/cloth/cloth1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4" },
            { id: 2, image: "/ecom/ugcs/cloth/cloth2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MILOOUTFITCHECK02FINALmp4.mp4" },
            { id: 3, image: "/ecom/ugcs/cloth/cloth3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/mudbondmp4.mp4" },
            { id: 4, image: "/ecom/ugcs/cloth/cloth4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/NEVA11mp4.mp4" },
            { id: 5, image: "/ecom/ugcs/cloth/cloth5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/OliveclothingCSmp4.mp4" },
            { id: 6, image: "/ecom/ugcs/cloth/cloth6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/urbanpitarareel5mp4.mp4" },
            { id: 7, image: "/ecom/ugcs/cloth/cloth7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/yummiecasestudiesmp4.mp4" },
            { id: 8, image: "/ecom/ugcs/cloth/cloth8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/zaydnslidesmp4.mp4" },
        ]
    },
    {
        name: 'Lifestyle',
        id: 'lifestyle',
        alt: "Lifestyle product showcase video for ecommerce brand",
        items: [
            { id: 1, image: "/ecom/ugcs/lifestyle/lifestyle1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/air_stream_pillow.mp4" },
            { id: 2, image: "/ecom/ugcs/lifestyle/lifestyle2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/AIRPODSNEW70%25.mp4" },
            { id: 3, image: "/ecom/ugcs/lifestyle/lifestyle3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/aviascasserolesenglishmp4.mp4" },
            { id: 4, image: "/ecom/ugcs/lifestyle/lifestyle4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/GEMMACOOKWAREmp4.mp4" },
            { id: 5, image: "/ecom/ugcs/lifestyle/lifestyle5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/NEONATTACKmp4.mp4" },
            { id: 6, image: "/ecom/ugcs/lifestyle/lifestyle6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/peppy.mp4" },
            { id: 7, image: "/ecom/ugcs/lifestyle/lifestyle7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/Phonecover.mp4" },
            { id: 8, image: "/ecom/ugcs/lifestyle/lifestyle8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/PowerBankmp4.mp4" },
            { id: 9, image: "/ecom/ugcs/lifestyle/lifestyle9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/seetramp4.mp4" },
            { id: 10, image: "/ecom/ugcs/lifestyle/lifestyle10.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/soundart.mp4" },
        ]
    },
    {
        name: 'Beauty & Skincare',
        id: 'b&s',
        alt: "User-generated content video reviewing ecommerce skincare product",
        items: [
            { id: 1, image: "/ecom/ugcs/beauty/beauty1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/aramorefinalmp4.mp4" },
            { id: 2, image: "/ecom/ugcs/beauty/beauty2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/Cottsberryfinalmp4.mp4" },
            { id: 3, image: "/ecom/ugcs/beauty/beauty3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/KIWIBYMUSSKANmp4.mp4" },
            { id: 4, image: "/ecom/ugcs/beauty/beauty4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4" },
            { id: 5, image: "/ecom/ugcs/beauty/beauty5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lashsupplycs1mp4.mp4" },
            { id: 6, image: "/ecom/ugcs/beauty/beauty6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lorealcsmp4.mp4" },
            { id: 7, image: "/ecom/ugcs/beauty/beauty7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/MAISKNNmp4.mp4" },
            { id: 8, image: "/ecom/ugcs/beauty/beauty8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/philosophy_reel.mp4" },
            { id: 9, image: "/ecom/ugcs/beauty/beauty9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/REAPSERUMmp4.mp4" },
        ]
    },
    {
        name: 'Healthcare & Supplements',
        id: 'h&s',
        alt: "UGC-style testimonial promoting D2C fitness product",
        items: [
            { id: 1, image: "/ecom/ugcs/health/health1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/bibomp4.mp4" },
            { id: 2, image: "/ecom/ugcs/health/health2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/ezcurediabetesmp4.mp4" },
            { id: 3, image: "/ecom/ugcs/health/health3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrideccmp4.mp4" },
            { id: 4, image: "/ecom/ugcs/health/health4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrilitiusmp4.mp4" },
            { id: 5, image: "/ecom/ugcs/health/health5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/spartan%20nutrition.mp4" },
            { id: 6, image: "/ecom/ugcs/health/health6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/velbiomqgazzreel%20formatmpmp4.mp4" },
        ]
    },
    {
        name: 'Food & Beverages',
        id: 'f&b',
        alt: "Ecommerce product usage demonstration video",
        items: [
            { id: 1, image: "/ecom/ugcs/foods/food1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4" },
            { id: 2, image: "/ecom/ugcs/foods/food2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/gustohook1mp4.mp4" },
            { id: 3, image: "/ecom/ugcs/foods/food3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/jagwonder.mp4" },
            { id: 4, image: "/ecom/ugcs/foods/food4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/lemonji%20final.mp4" },
            { id: 5, image: "/ecom/ugcs/foods/food5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/PLANTWISE%202.mp4" },
        ]
    },
    {
        name: 'Petcare',
        id: 'petcare',
        alt: "Product feature walkthrough video used in retargeting ad",
        items: [
            { id: 1, image: "/ecom/ugcs/pets/pets1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/hulk's%20diet%201.mp4" },
            { id: 2, image: "/ecom/ugcs/pets/pets2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/medfly%20%202.mp4" },
        ]
    },
];

const allItems = navLinks.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, uid: `${cat.id}-${item.id}`, alt: cat.alt }))
);

const VideoIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="5" width="13" height="14" rx="2" />
        <path d="M15 9.5l7-4v13l-7-4V9.5z" />
    </svg>
);

const ImageIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
);
// ─── AD TYPE TOGGLE ───────────────────────────────────────────────────────────

const FilterBar = ({ activeType, onToggle, activeCategory, setActiveCategory }) => {
    const tabs = [
        { label: 'Video Ads', Icon: VideoIcon },
        { label: 'Image Ads', Icon: ImageIcon },
    ];

    return (
        <div className="w-full">
            {/* Tab buttons — sit right above the bordered box */}
            <div className="flex items-end gap-3 lg:gap-5 relative z-10">
                {tabs.map(({ label, Icon }, i) => {
                    const isActive = activeType === label;
                    return (
                        <button
                            key={label}
                            onClick={() => onToggle(label)}
                            className={`
                                flex items-center gap-2 px-4 3xl:px-5 py-2 3xl:py-2.5 text-xs md:text-base lg:text-lg 3xl:text-2xl leading-[150%] tracking-[-0.02em] font-semibold border rounded-t-sm md:rounded-t-lg lg:rounded-t-xl transition-all duration-200 select-none border-b-0
                                ${isActive
                                    ? 'bg-[#2563EB] text-white border-black border-b-0 '
                                    : 'bg-white text-black border-black border-b-0'
                                }
                            `}
                        >
                            <Icon />
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Category pill container */}
            <div className="border border-black rounded-b-sm md:rounded-b-lg lg:rounded-b-2xl rounded-tr-sm md:rounded-tr-lg lg:rounded-tr-2xl p-2 lg:p-4 bg-white relative z-0 w-fit">
                <div className="flex items-center gap-2 lg:gap-3 flex-wrap w-fit">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`
                            px-4 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm 3xl:text-base leading-[150%] tracking-[-0.02em] border-[1.25px] transition-all duration-200 cursor-pointer
                            ${activeCategory === null
                                ? 'bg-[#2563EB] text-white border-black'
                                : 'bg-white text-black border-black hover:border-black/50'
                            }
                        `}
                    >
                        View All
                    </button>

                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setActiveCategory(link.id)}
                            className={`
                                px-4 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm 3xl:text-base leading-[150%] tracking-[-0.02em] border-[1.25px] transition-all duration-200 cursor-pointer
                                ${activeCategory === link.id
                                    ? 'bg-[#2563EB] text-white border-black'
                                    : 'bg-white text-black border-black hover:border-black/50'
                                }
                            `}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


const VideoCard = ({ item, isActive, videoState, onCardClick, videoRef }) => {
    const { isLoading, isReady, isPlaying } = videoState || {};

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => onCardClick(item.uid || item.id, item.videoUrl)}
            className="relative rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer group bg-[#111] aspect-[118/183]"
            style={{ boxShadow: isActive ? '' : '' }}
        >
            {/* Thumbnail */}
            <Image
                width={300}
                height={534}
                src={item.image}
                alt={item.alt || 'UGC video thumbnail'}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isReady ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Video */}
            {isActive && (
                <video
                    ref={videoRef}
                    src={item.videoUrl}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay
                    loop
                    playsInline
                    onLoadedData={() => { }}
                />
            )}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                    {/* {!isActive && (
                        <motion.div
                            key="play-icon"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    )} */}

                    {isLoading && !isReady && (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                        >
                            <Loader2 className="w-5 h-5 text-white animate-spin" />
                        </motion.div>
                    )}

                    {/* {isReady && !isPlaying && (
                        <motion.div
                            key="paused-play"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 0.2 }}
                            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg pointer-events-auto"
                        >
                            <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    )} */}
                </AnimatePresence>

                {/* Pause button when playing */}
                {isReady && isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow pointer-events-auto"
                    >
                        <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};


const UGCVideoCategories = () => {
    const [adType, setAdType] = useState('Video Ads');
    const [activeCategory, setActiveCategory] = useState(null); // null = View All
    const [playingVideo, setPlayingVideo] = useState(null);
    const [videoStates, setVideoStates] = useState({});
    const videoRefs = useRef({});

    const displayItems = activeCategory === null
        ? allItems
        : navLinks.find((c) => c.id === activeCategory)?.items.map((item) => ({
            ...item,
            uid: `${activeCategory}-${item.id}`,
            alt: navLinks.find((c) => c.id === activeCategory)?.alt,
        })) || [];

    const handleCardClick = (itemId, videoUrl) => {
        const currentState = videoStates[itemId];

        if (playingVideo === itemId && currentState?.isReady) {
            const video = videoRefs.current[itemId];
            if (video) {
                if (currentState.isPlaying) {
                    video.pause();
                    setVideoStates((prev) => ({ ...prev, [itemId]: { ...prev[itemId], isPlaying: false } }));
                } else {
                    video.play();
                    setVideoStates((prev) => ({ ...prev, [itemId]: { ...prev[itemId], isPlaying: true } }));
                }
            }
            return;
        }

        if (playingVideo && playingVideo !== itemId) {
            const prevVideo = videoRefs.current[playingVideo];
            if (prevVideo) { prevVideo.pause(); prevVideo.currentTime = 0; }
            setVideoStates((prev) => ({ ...prev, [playingVideo]: { isPlaying: false, isReady: false } }));
        }

        setPlayingVideo(itemId);
        setVideoStates((prev) => ({ ...prev, [itemId]: { isPlaying: false, isReady: false, isLoading: true } }));
    };

    const handleVideoLoaded = (itemId) => {
        const video = videoRefs.current[itemId];
        if (video) {
            video.play().catch(() => { });
        }
        setVideoStates((prev) => ({ ...prev, [itemId]: { isPlaying: true, isReady: true, isLoading: false } }));
    };

    useEffect(() => {
        if (playingVideo) {
            const video = videoRefs.current[playingVideo];
            if (video) { video.pause(); video.currentTime = 0; }
        }
        setPlayingVideo(null);
        setVideoStates({});
        videoRefs.current = {};
    }, [activeCategory]);

    return (

        <div className="lg:max-w-[83%] 3xl:max-w-[85%] mx-auto px-4">

            {/* Top controls row — matching screenshot */}
            <div className="mb-8 lg:mb-12 3xl:mb-16">
                <FilterBar
                    activeType={adType}
                    onToggle={setAdType}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>

            {/* Grid — 4 columns, 2 rows visible, matching screenshot */}
            <motion.div
                key={activeCategory ?? 'all'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7 mb-10 3xl:mb-16"
            >
                {displayItems.map((item) => {
                    const uid = item.uid || `${activeCategory}-${item.id}`;
                    return (
                        <VideoCard
                            key={uid}
                            item={{ ...item, uid }}
                            isActive={playingVideo === uid}
                            videoState={videoStates[uid]}
                            onCardClick={handleCardClick}
                            videoRef={(el) => {
                                if (el) {
                                    videoRefs.current[uid] = el;
                                    el.onloadeddata = () => handleVideoLoaded(uid);
                                }
                            }}
                        />
                    );
                })}
            </motion.div>

            {displayItems.length === 0 && (
                <div className="flex items-center justify-center h-64 text-white/40 text-sm">
                    No items found in this category.
                </div>
            )}
            <div className='flex items-center justify-center'>

                <MetaRocketButton color='blue' />
            </div>
        </div>
    );
};

export default UGCVideoCategories;