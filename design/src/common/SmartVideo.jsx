"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SmartVideo({ imageUrl, alt = "", videoUrl }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);

    // Reset on video change
    useEffect(() => {
        setIsVisible(false);
        setIsVideoReady(false);
    }, [videoUrl]);

    // Observe visibility
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full lg:h-105 3xl:h-135 bg-[#0b1220] rounded-2xl overflow-hidden"
        >
            {/* Image */}
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={alt}
                    width={1920}
                    height={1080}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${isVideoReady ? "opacity-0" : "opacity-100"
                        }`}
                />
            )}

            {/* Video */}
            {isVisible && (
                <video
                    src={videoUrl}
                    autoPlay
                    muted
                    controls
                    playsInline
                    preload="metadata"
                    controlsList="nodownload"
                    onLoadedData={() => setIsVideoReady(true)}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isVideoReady ? "opacity-100" : "opacity-0"
                        }`}
                />
            )}
        </div>
    );
}