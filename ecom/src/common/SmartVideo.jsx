"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SmartVideo({ imageUrl, alt, videoUrl }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
            {/* Image layer with fade out animation */}
            <div
                className={`absolute inset-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Image
                    src={imageUrl}
                    fill
                    className="object-cover"
                    alt={alt}
                />
            </div>

            {/* Video layer with fade in animation */}
            {visible && (
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <video
                        src={videoUrl}
                        autoPlay
                        muted
                        controls
                        controlsList="nodownload"
                        playsInline
                        className="w-full h-full object-cover"
                        onLoadedData={() => setVideoLoaded(true)}
                    />
                </div>
            )}
        </div>
    );
}