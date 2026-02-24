"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const videos = [
    {
        label: "D2C",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "CONSUMER",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "B2B",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
    {
        label: "SAAS",
        thumbnail: "/meta-ads/dummy.png",
        frame: "/meta-ads/frame.png",
        video: "https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4",
    },
];

export default function MobileVideos() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="pt-15">
            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
                {videos.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">

                        {/* Label */}
                        <span className="mb-4 px-4 py-1 text-xs bg-white text-black rounded-full">
                            {item.label}
                        </span>

                        {/* Phone Frame */}
                        <div
                            onClick={() => setActiveVideo(item.video)}
                            className="relative w-[330px] h-[645px] top-20  overflow-hidden cursor-pointer"
                        >
                            <Image
                                fill
                                src={item.thumbnail}
                                alt=""
                                className="w-full h-full object-cover "
                            />
                            <Image
                                fill
                                src={item.frame}
                                alt=""
                                className="w-full absolute top-0  h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeVideo && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

                    <div className="relative w-full max-w-3xl ">

                        {/* Close Button */}
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-12 right-0 text-white"
                        >
                            <X size={32} />
                        </button>

                        {/* Video */}
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full rounded-2xl aspect-video object-cover"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}