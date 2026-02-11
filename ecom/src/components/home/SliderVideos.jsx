"use client";

import { Volume2 } from "lucide-react";
import { VolumeOff } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function MarqueeRow({ brands, direction = "left", itemWidth = 250 }) {
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [velocity, setVelocity] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [hoveredId, setHoveredId] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [soundOnId, setSoundOnId] = useState(null);
    const [readyVideoId, setReadyVideoId] = useState(null);

    const dragStartX = useRef(0);
    const dragStartOffset = useRef(0);
    const lastPositions = useRef([]);
    const animationRef = useRef(null);
    const containerRef = useRef(null);
    const loadedVideosRef = useRef(new Set());
    const videoRefs = useRef({});


    const totalWidth = itemWidth * brands.length;
    const autoPlaySpeed = direction === "left" ? -1 : 1;

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (!entry.isIntersecting && animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            },
            { threshold: 0 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = Object.values(videoRefs.current).find(
                        (v) => v === entry.target
                    );

                    if (!video) return;

                    if (entry.isIntersecting) {
                        video.muted = true;
                        video.play().catch(() => { });
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        Object.values(videoRefs.current).forEach((video) => {
            observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        if (!isVisible || isDragging || isHovered || Math.abs(velocity) > 0.1) return;

        const animate = () => {
            setOffset(prev => {
                const next = prev + autoPlaySpeed;
                return ((next % totalWidth) + totalWidth) % totalWidth;
            });
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isVisible, isDragging, isHovered, velocity, totalWidth, autoPlaySpeed]);

    useEffect(() => {
        if (isDragging || Math.abs(velocity) < 0.1) {
            if (!isDragging) setVelocity(0);
            return;
        }

        const decelerate = () => {
            setVelocity((prev) => {
                const newVelocity = prev * 0.92;
                return Math.abs(newVelocity) < 0.1 ? 0 : newVelocity;
            });

            setOffset((prev) => {
                const newOffset = prev + velocity;
                return ((newOffset % totalWidth) + totalWidth) % totalWidth;
            });

            animationRef.current = requestAnimationFrame(decelerate);
        };

        animationRef.current = requestAnimationFrame(decelerate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [velocity, isDragging, totalWidth]);

    const calculateVelocity = () => {
        if (lastPositions.current.length < 2) return 0;

        const recentPositions = lastPositions.current.slice(-5);
        const velocities = [];

        for (let i = 1; i < recentPositions.length; i++) {
            const timeDiff = recentPositions[i].time - recentPositions[i - 1].time;
            const posDiff = recentPositions[i].x - recentPositions[i - 1].x;
            if (timeDiff > 0) {
                velocities.push((posDiff / timeDiff) * 16);
            }
        }

        if (velocities.length === 0) return 0;
        return velocities.reduce((a, b) => a + b, 0) / velocities.length;
    };

    const handleStart = (clientX) => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        setIsDragging(true);
        setVelocity(0);
        dragStartX.current = clientX;
        dragStartOffset.current = offset;
        lastPositions.current = [{ x: clientX, time: Date.now() }];
    };

    const handleMove = (clientX) => {
        if (!isDragging) return;

        const dragDistance = clientX - dragStartX.current;
        const newOffset = dragStartOffset.current + dragDistance;

        setOffset(((newOffset % totalWidth) + totalWidth) % totalWidth);

        const now = Date.now();
        lastPositions.current.push({ x: clientX, time: now });

        if (lastPositions.current.length > 5) {
            lastPositions.current.shift();
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
        const calculatedVelocity = calculateVelocity();
        setVelocity(calculatedVelocity);
        lastPositions.current = [];
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        handleMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleEnd();
    };

    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleEnd();
    };

    useEffect(() => {
        if (isDragging) {
            const mouseMoveHandler = (e) => handleMouseMove(e);
            const mouseUpHandler = () => handleMouseUp();

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);

            return () => {
                document.removeEventListener("mousemove", mouseMoveHandler);
                document.removeEventListener("mouseup", mouseUpHandler);
            };
        }
    }, [isDragging, offset]);

    const renderItems = () => {
        const startIndex = Math.floor(-offset / itemWidth) - 2;
        const visibleCount = Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1920) / itemWidth) + 5;

        return Array.from({ length: visibleCount }, (_, i) => {
            const index = (((startIndex + i) % brands.length) + brands.length) % brands.length;
            const brand = brands[index];
            const position = (startIndex + i) * itemWidth + offset;

            return (
                <div
                    key={`${brand.id}-${startIndex + i}`}
                    className="absolute top-0 flex items-center justify-center min-w-[220px] 3xl:min-w-60 h-[450px] 3xl:h-130 rounded-md overflow-hidden bg-black"
                    style={{
                        left: `${position}px`,
                        width: `${itemWidth - 20}px`,
                    }}
                    onMouseEnter={() => {
                        setHoveredId(brand.id);
                        setIsHovered(true);

                        const video = document.getElementById(`video-${brand.id}`);
                        if (video) video.play();
                    }}

                    onMouseLeave={() => {
                        setHoveredId(null);
                        setIsHovered(false);

                        // const video = document.getElementById(`video-${brand.id}`);
                        // if (video) video.pause();
                    }}

                >
                    <div className="relative w-full h-full bg-black">
                        {/* IMAGE */}
                        <Image
                            src={brand.image}
                            width={250}
                            height={400}
                            alt="UGC-style, Influencer collaboration Videos"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${hoveredId === brand.id && readyVideoId === brand.id ? "opacity-0" : "opacity-100"}`}
                        />

                        {/* LOADER */}
                        {hoveredId === brand.id && !loadedVideosRef.current.has(brand.id) && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                                <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            </div>
                        )}


                        {/* SPEAKER BUTTON */}
                        {hoveredId === brand.id && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSoundOnId((prev) => (prev === brand.id ? null : brand.id));
                                }}
                                className="absolute top-2 right-2 z-20 bg-black/60 text-white p-1.5 rounded-full hover:bg-black transition"
                            >
                                {soundOnId === brand.id ? <Volume2 size={16} /> : <VolumeOff size={16} />}
                            </button>
                        )}

                        {/* VIDEO (always mounted) */}
                        {/* {hoveredId === brand.id && (
                            <video
                                id={`video-${brand.id}`}
                                src={brand.video}
                                autoPlay={hoveredId === brand.id}
                                loop
                                playsInline
                                muted={soundOnId !== brand.id}
                                preload="auto"
                                onLoadedData={() => {
                                    loadedVideosRef.current.add(brand.id);
                                    setReadyVideoId(brand.id);
                                }}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200
    ${hoveredId === brand.id ? "opacity-100" : "opacity-0"}`}
                            />


                        )} */}
                        <video
                            id={`video-${brand.id}`}
                            ref={(el) => {
                                if (el) videoRefs.current[brand.id] = el;
                            }}
                            src={brand.video}
                            autoPlay
                            loop
                            playsInline
                            muted={soundOnId !== brand.id}
                            preload="auto"
                            onLoadedData={() => {
                                loadedVideosRef.current.add(brand.id);
                                setReadyVideoId(brand.id);
                            }}
                            className={`absolute inset-0 w-full h-full object-cover  transition-opacity duration-200 `}
                        />

                    </div>


                </div>

            );
        });
    };

    useEffect(() => {
        if (isHovered && animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    }, [isHovered]);


    return (
        <div
            ref={containerRef}
            className="relative h-120 md:h-120 rounded-md 3xl:h-130 overflow-hidden select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
        >
            {renderItems()}
        </div>
    );
}

export default function SliderVideos() {

    const reels = [
        { id: 1, image: "/ecom/ugcs/cloth/cloth1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4" },
        { id: 2, image: "/ecom/ugcs/cloth/cloth2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MILOOUTFITCHECK02FINALmp4.mp4" },
        { id: 3, image: "/ecom/ugcs/lifestyle/lifestyle1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/air_stream_pillow.mp4" },
        { id: 4, image: "/ecom/ugcs/lifestyle/lifestyle2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/AIRPODSNEW70%25.mp4" },
        { id: 5, image: "/ecom/ugcs/beauty/beauty1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/aramorefinalmp4.mp4" },
        { id: 6, image: "/ecom/ugcs/beauty/beauty2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/Cottsberryfinalmp4.mp4" },
        { id: 7, image: "/ecom/ugcs/health/health1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/bibomp4.mp4" },
        { id: 8, image: "/ecom/ugcs/health/health2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/ezcurediabetesmp4.mp4" },
        { id: 9, image: "/ecom/ugcs/foods/food1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4" },
        { id: 10, image: "/ecom/ugcs/foods/food2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/gustohook1mp4.mp4" },
        { id: 11, image: "/ecom/ugcs/pets/pets1.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/hulk's%20diet%201.mp4" },
        { id: 12, image: "/ecom/ugcs/pets/pets2.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/medfly%20%202.mp4" },
        { id: 13, image: "/ecom/ugcs/cloth/cloth7.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/yummiecasestudiesmp4.mp4" },
        { id: 14, image: "/ecom/ugcs/cloth/cloth8.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/zaydnslidesmp4.mp4" },
        { id: 15, image: "/ecom/ugcs/lifestyle/lifestyle10.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/soundart.mp4" },
        { id: 16, image: "/ecom/ugcs/beauty/beauty8.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/philosophy_reel.mp4" },
        { id: 17, image: "/ecom/ugcs/beauty/beauty9.webp", video: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/REAPSERUMmp4.mp4" },
    ];

    return (
        <div className="py-14 xs:py-20 space-y-10 overflow-hidden w-full">
            <div className="flex-1 flex flex-col justify-center gap-0">
                <MarqueeRow brands={reels} direction="left" />
            </div>
        </div>
    );
}