"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import RatingStars from "@/common/Rating";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CutCornerBackground } from "./CutBox";

export const testimonials = [
    {
        rating: 4.9,
        text: "I loved it. Everything fell into place and I definitely appreciated Upthrust and everything they did.",
        name: "Gabriela",
        role: "Founder, Audio Art",
        avatar: "/uiux/profile/gabriela.webp",
        avatarAlt: "Gabriela founder of Audio Art",
        videoUrl:
            "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Gabriela-testimonial%20(1).mp4",
    },
    {
        rating: 4.5,
        text: "I'm impressed with how well Upthrust’s solution is working. I'm confident that we can continue to achieve great results as we grow.",
        name: "Pranath Sisodiya",
        role: "CEO, Rescribe",
        avatar: "/uiux/profile/prasanth-sisodiya.webp",
        avatarAlt: "Pranath Sisodiya CEO of Rescribe",
        videoUrl:
            "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Rescribe%20Video.MP4",
    },
    {
        rating: 5.0,
        text: "What clicked for me was your ability to take ownership. You are clear about the process, which is rare in agencies.",
        name: "Iti Dubey",
        role: "Marketing Head, Mukunda Foods",
        avatar: "/uiux/profile/iti-dubey.webp",
        avatarAlt: "Iti Dubey Marketing Head at Mukunda Foods",
        videoUrl:
            "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/15%20January%2C%202024%20-%20Coolstra.mp4",
    },
    {
        rating: 5.0,
        text: "We were a company that had no experience in the marketing space. Upthrust helped us hit the right benchmarks.",
        name: "Vaibhav Vashisht",
        role: "Co-Founder, at Acadia",
        avatar: "/uiux/profile/vaibhav-vashisht.webp",
        avatarAlt: "Vaibhav Vashisht Co-Founder at Acadia",
        videoUrl:
            "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Acadly.mp4",
    },
    {
        rating: 5.0,
        text: "We wanted someone who had a fundamental thought process in terms of approaching overall digital marketing when we found Upthrust.",
        name: "Chait Jain",
        role: "CEO, Univa",
        avatar: "/uiux/profile/chait-jain.webp",
        avatarAlt: "Chait Jain CEO of Univa",
        videoUrl:
            "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Chait.MP4",
    },
    {
        rating: 5.0,
        text: "We’re seeing around 45–50 leads per month, which is fantastic for a B2B company. Upthrust has been a real game-changer for Vega.",
        name: "Gaurav",
        role: "Marketing Manager, Vega",
        avatar: "/uiux/profile/gaurav.webp",
        avatarAlt: "Gaurav Marketing Manager at Vega",
        videoUrl:
            "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Vega%20Feedback.MP4",
    },
];

export default function TestimonialsWithVideo() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const openVideo = (index) => {
        console.log(index);
        setIsVideoOpen(true);
        setCurrentIndex(index);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-7 3xl:gap-8 mt-10 sm:mt-20 3xl:mt-30 max-lg:px-2">
            {testimonials.map((item, i) => (
                <CutCornerBackground bgColor="#F9F9F9" key={i} cutWidth={20} cutHeight={20} cutRadius={1}>
                    <div
                        key={i}
                        className=" rounded-2xl max-lg:px-4 p-6 lg:p-8 3xl:p-6 flex flex-col"
                    >
                        <div className="flex gap-3 items-center">
                            <span className="text-2xl 3xl:text-3xl font-semibold ">
                                {item.rating.toPrecision(2)}
                            </span>
                            <RatingStars
                                rating={5}
                                fillColor="#ff3b00"
                                size="size-5 lg:size-4 3xl:size-5"
                            />
                        </div>

                        <hr className="my-1 lg:my-4 text-black/30" />
                        <div className="h-full justify-between flex flex-col">
                            {/* Quote */}
                            <p className="text-2xl lg:text-xl 3xl:text-2xl font-medium mt-6 lg:mt-10 3xl:mt-14">
                                “{item.text}”
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={item.avatar}
                                        alt={item.avatarAlt}
                                        width={60}
                                        height={60}
                                        className="rounded-full size-12 3xl:size-15 object-cover border border-black"
                                    />
                                    <div>
                                        <p className="text-sm 3xl:text-base font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-sm 3xl:text-base">{item.role}</p>
                                    </div>
                                </div>

                                {/* Video Play */}
                                <button
                                    onClick={() => openVideo(i)}
                                    title="Play Video"
                                    target="_blank"
                                    className="size-12 3xl:size-15 rounded-full bg-(--red) flex items-center justify-center text-white"
                                >
                                    <Play size={16} fill="white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </CutCornerBackground>
            ))}
            <AnimatePresence>
                {isVideoOpen && currentIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4"
                        onClick={closeVideo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-6xl 3xl:max-w-[80%] aspect-video bg-black max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeVideo}
                                className="absolute top-4 right-4 z-20 bg-black/80 text-white rounded-full p-3 hover:scale-110 transition"
                                aria-label="Close video"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Video */}
                            <video
                                key={testimonials[currentIndex].videoUrl}
                                src={testimonials[currentIndex].videoUrl}
                                className="w-full h-full object-contain"
                                autoPlay
                                controls
                                controlsList="nodownload"
                                playsInline
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}