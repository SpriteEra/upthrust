"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoTestimonialCard({ testimonial }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"; // prevent scroll
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            {/* Card */}
            <div className="bg-[#0076F0] text-white rounded-2xl px-4 sm:px-8 py-4 3xl:py-10 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                <h3 className="text-[30px] 3xl:text-[36px] leading-[130%] tracking-[-0.02em] font-semibold max-w-md">
                    {testimonial.title}
                </h3>

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-20 h-20 3xl:size-26.5 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
                    >
                        <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </button>
                </div>

                {/* Avatar */}

                {/* <Image width={100} height={50} src="/google-ads/review/arrow.png" alt="arrow" className="absolute w-fit top-70 left-15 z-10" /> */}
                <div className="flex justify-between gap-3 mt-10 ">


                    <div className="relative mt-6 sm:mt-12">
                        <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-semibold">
                            {testimonial.author}
                        </p>
                        <p className="text-[12px] leading-[150%] text-white/80 max-w-[150px]">
                            {testimonial.position}
                        </p>
                        {
                            testimonial.avatar &&
                            <svg className={`absolute -right-20 top-4 size-32 ${testimonial?.arrowcss} `} viewBox="0 0 95 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.95143 0.285033C0.832708 0.0357153 0.534352 -0.0701531 0.285033 0.0485696C0.0357153 0.167292 -0.0701531 0.465648 0.0485696 0.714967L0.5 0.5L0.95143 0.285033ZM25.8611 27.8019L25.6227 28.2414V28.2414L25.8611 27.8019ZM55.1565 33.0533L55.1278 33.5525L55.1373 33.5531L55.1467 33.5532L55.1565 33.0533ZM94.8118 29.9039C94.9382 29.6585 94.8417 29.3569 94.5963 29.2305L90.5959 27.1697C90.3504 27.0432 90.0489 27.1397 89.9224 27.3852C89.796 27.6307 89.8924 27.9322 90.1379 28.0586L93.6938 29.8905L91.862 33.4464C91.7355 33.6919 91.832 33.9934 92.0775 34.1198C92.323 34.2463 92.6245 34.1498 92.751 33.9043L94.8118 29.9039ZM0.5 0.5L0.0485696 0.714967C5.67164 12.5234 14.6177 22.2716 25.6227 28.2414L25.8611 27.8019L26.0995 27.3624C15.2951 21.5014 6.49094 11.918 0.95143 0.285033L0.5 0.5ZM25.8611 27.8019L25.6227 28.2414C33.7311 32.6398 42.8937 32.8491 55.1278 33.5525L55.1565 33.0533L55.1852 32.5542C42.8575 31.8454 33.9656 31.6294 26.0995 27.3624L25.8611 27.8019ZM55.1565 33.0533L55.1467 33.5532C62.6986 33.7015 72.9012 33.4221 79.9108 32.8583L79.8707 32.3599L79.8306 31.8615C72.8574 32.4224 62.6883 32.7011 55.1664 32.5534L55.1565 33.0533ZM79.8707 32.3599L79.9108 32.8583C86.9393 32.2929 90.4653 31.4486 94.5197 30.1512L94.3673 29.675L94.2149 29.1988C90.2355 30.4721 86.785 31.3021 79.8306 31.8615L79.8707 32.3599Z" fill="#E7F0FF" />
                            </svg>

                        }
                    </div>
                    {testimonial.avatar && (
                        <Image
                            width={201}
                            height={207}
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className=" w-35 h-35 3xl:h-51.75 mb-10 md:w-50 3xl:w-50.25 object-contain z-10"
                        />
                    )}

                </div>

                <div className="flex items-center gap-3 3xl:gap-5 mt-auto font-semibold">
                    <Image width={50} height={33} src={testimonial.company} alt="company logo" className="h-5 2xl:h-7 3xl:h-7.5 w-fit object-contain" />
                    <Image width={24} height={24} src="/google-ads/review/cross.png" alt="cross" className="h-4 object-contain 3xl:h-7.5 w-fit" />
                    <Image width={80} height={43} src="/google-ads/review/upthrust.png" alt="upthrust" className="h-5 2xl:h-7 object-contain 3xl:h-7.5 w-fit" />
                </div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
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
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-black/80 text-white rounded-full p-3 hover:scale-110 transition"
                                aria-label="Close video"
                            >
                                <X className=" w-4 h-4 sm:w-6 sm:h-6" />
                            </button>

                            {/* Video */}
                            <video
                                src={testimonial.video}
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
        </>
    );
}