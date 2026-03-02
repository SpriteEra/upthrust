'use client';
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ScreenShot = () => {
    const scrollContainerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const imageData = [
        {
            id: 1,
            src: '/google-ads/screenshot/1.png',
            alt: 'Google Ads Analytics Dashboard',
            title: '$20K monthly spend | $185/demo',
            description: 'WLNC needed qualified demos, not just clicks. Their cost per demo hit $250. Traffic was high, but conversions were low. The funnel leaked at every stage.<br/><br/> We rebuilt their entire acquisition system. SKAGs for Google. Segmented audiences on LinkedIn. Multi-step forms that converted. Three months later: $189 per demo. 91+ qualified bookings monthly.'
        },
        {
            id: 2,
            src: '/google-ads/screenshot/2.png',
            alt: 'Campaign Performance Metrics',
            title: 'Scaling Qualified Demand',
            description: `High-volume traffic across regions with varying conversion efficiency. 
      By analyzing cost per conversion and intent quality across regions, underperforming campaigns were trimmed while high-intent search campaigns were scaled resulting in more efficient spend and stronger
      demo conversion rates.`
        },
        {
            id: 3,
            src: '/google-ads/screenshot/3.png',
            alt: 'Marketing Analytics',
            title: 'High-Volume Traffic',
            description: 'With 257K clicks and 7.5K conversions, the account maintained a healthy cost per conversion at $21.18 while managing a total spend of $159K.<br/><br/> Trend analysis across the timeline helped identify performance spikes and drops, enabling campaign-level optimization to control costs, scale winning campaigns, and maintain efficiency across different audience segments.'
        },
        {
            id: 4,
            src: '/google-ads/screenshot/4.png',
            alt: 'Lead Generation Growth',
            title: 'Zero leads. Then 70+ monthly.',
            description: 'VEGA India had zero digital presence. No website traffic. No lead generation system. Nothing. They relied entirely on trade shows and expos. Expensive. Inconsistent. Unsustainable.<br/><br/>We built their entire digital infrastructure from scratch. Targeted cold outreach. LinkedIn campaigns. High-converting landing pages. Six weeks later: 70+ qualified leads monthly. 15x ROI versus traditional methods. Zero to pipeline velocity.'
        },
        {
            id: 5,
            src: '/google-ads/screenshot/5.png',
            alt: 'Performance Optimization',
            title: 'Complex tech. Simple results.',
            description: 'Dell needed demos for PowerProtect Data Manager. The product was technical. The market was crowded. Nobody understood backup infrastructure. The message got lost. Traffic stayed flat.<br/><br/>We stripped the jargon. Built campaigns around pain points. Long-tail keywords. Responsive search ads. Smart bidding. Six weeks later: 32 qualified demos monthly. 28% booking increase. 57K clicks. $277 per conversion.'
        },
        {
            id: 6,
            src: '/google-ads/screenshot/6.png',
            alt: 'Cost Per Demo Reduction',
            title: '$354 per demo. Then $45.',
            description: `Acadly had zero leads. No brand awareness. No clear target audience. They needed qualified demos but every lead cost $354. The math didn't work. Growth was impossible.<br/><br/>We built their ABM engine from scratch. Personalized outreach to deans and faculty. Multi-channel engagement. LinkedIn precision targeting. Two months later: $45 per lead. 260% growth. 25 leads monthly. Pipeline filled.`
        }
    ];




    const scroll = (direction) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;

        const cards = container.children;
        if (!cards.length) return;

        const activeCard = cards[activeIndex];
        const cardWidth = activeCard.offsetWidth;

        const gap = parseInt(getComputedStyle(container).columnGap || getComputedStyle(container).gap) || 0;

        const scrollAmount = cardWidth + gap;

        const newIndex =
            direction === "left"
                ? Math.max(activeIndex - 1, 0)
                : Math.min(activeIndex + 1, imageData.length - 1);

        container.scrollTo({
            left: newIndex * scrollAmount,
            behavior: "smooth"
        });

        setActiveIndex(newIndex);
    };


    const handleMouseDown = (e) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        // Disable text selection while dragging
        document.body.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
        document.body.style.userSelect = '';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
        }
        document.body.style.userSelect = '';
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return (
        <div className="w-full  mx-auto py-12 md:py-16 lg:py-20 3xl:py-40">
            <div className="relative">
                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className={`flex gap-4 md:gap-6 3xl:gap-20 overflow-x-auto scroll-smooth scrollbar-hide pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {imageData.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative flex-shrink-0 group max-h-[600px] 3xl:max-h-500 overflow-hidden first:ml-3 first:md:ml-20 first:3xl:ml-40"
                            onMouseEnter={() => {
                                if (window.innerWidth >= 1024) {
                                    setHoveredIndex(index);
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth >= 1024) {
                                    setHoveredIndex(null);
                                }
                            }}
                        >
                            <motion.div
                                initial={false}
                                animate={
                                    hoveredIndex === index
                                        ? { y: 0, opacity: 1 }
                                        : { y: 80, opacity: 0 }
                                }
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.8, 0.25, 1]
                                }}
                                className="hidden lg:flex absolute top-0 left-0 w-full bg-white rounded-lg z-1 text-black justify-between items-center gap-10 3xl:gap-30 3xl:py-10 "
                            >
                                <h3 className="text-base sm:text-lg lg:text-4xl font-semibold lg:leading-[45px] 3xl:leading-[60px] tracking-[-0.02em] min-w-[35%] 3xl:text-5xl mb-2">
                                    {image.title}
                                </h3>

                                <p
                                    className="text-xs sm:text-sm lg:text-base 3xl:text-xl 3xl:leading-7.5"
                                    dangerouslySetInnerHTML={{ __html: image.description }}
                                />
                            </motion.div>

                            <div className="relative 3xl:max-w-[1285px] h-60 sm:h-70 md:h-67.5 lg:h-150 3xl:h-[835px] w-full aspect-257/167 sm:rounded-lg overflow-hidden z-1">
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ y: 0 }}
                                    animate={
                                        hoveredIndex === index
                                            ? { y: "35%" }   // how much it scrolls
                                            : { y: "0%" }
                                    }
                                    transition={{
                                        duration: 0.4,     // speed (lower = faster)
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        draggable={false}
                                        className="object-cover pointer-events-none select-none"
                                    />
                                </motion.div>
                            </div>
                            {/* ✅ Mobile Text (Only visible below lg) */}
                            <div className="block lg:hidden mt-6 max-w-[360px] sm:w-[400px]">
                                <h3 className="text-[32px] leading-[130%] tracking-[-0.02em] font-semibold mb-3">
                                    {image.title}
                                </h3>
                                <p
                                    className="text-lg  text-black/80 leading-[150%] tracking-[-0.02em]"
                                    dangerouslySetInnerHTML={{ __html: image.description }}
                                />
                            </div>

                        </div>
                    ))}
                </div>

                {/* button  */}
                <div className="flex gap-3 justify-start mt-6 3xl:mt-16 ml-6  md:ml-12 3xl:ml-30">
                    <button
                        onClick={() => scroll('left')}
                        className={`size-11 sm:size-12 3xl:size-24 rounded-full  flex items-center justify-center transition-all duration-200 z-10 
        ${activeIndex > 0
                                ? 'bg-[#E7F0FF] '
                                : 'bg-gray-200 border-gray-200'}
    `}
                    >
                        <svg
                            className={`size-5 sm:size-6 3xl:size-15 ${activeIndex > 0 ? 'text-[#0076F0]' : 'text-gray-600'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>


                    <button
                        onClick={() => scroll('right')}
                        className={`size-11 sm:size-12 3xl:size-24 rounded-full  flex items-center justify-center transition-all duration-200 z-10  ${activeIndex < imageData.length - 1
                                ? 'bg-[#E7F0FF] '
                                : 'bg-gray-200 border-gray-200'}`}
                    >
                        <svg
                            className={`size-5 sm:size-6 3xl:size-15 ${activeIndex < imageData.length - 1 ? 'text-[#0076F0]' : 'text-gray-600'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
            </div>


        </div>
    );
};

export default ScreenShot;



