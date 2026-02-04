"use client"
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
const successStories = [
    {
        id: 1,
        tag: "SUCCESS STORY",
        text:
            "We were struggling with traffic and poor conversions. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x. Worth it.",
        image: "/ecom/testimonials/1.webp",
        alt: "Video testimonial from Carobis founder discussing ecommerce growth with Upthrust",
        videoUrl: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Carorbis%20testimonial.mp4",
        duration: "4:27",
        durationAt1_2x: "3:43",
    },
    {
        id: 2,
        tag: "SUCCESS STORY",
        text:
            "Skeptical at first. Now they’re my team. Upthrust didn’t just deliver exponential growth — they became true business partners who actually care.",
        image: "/ecom/testimonials/2.webp",
        alt: "Client video testimonial sharing experience working with Upthrust team",
        videoUrl: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/jm.mp4_v1%20(720p).mp4",
        duration: "3:27",
        durationAt1_2x: "2:53",
    },
    {
        id: 3,
        tag: "SUCCESS STORY",
        text:
            "My business was in turmoil. One last chance to make it work. Made a $4,900 bet with Upthrust — got 2.7x back immediately. Now doing $51K+ monthly. Beyond my wildest dreams.",
        image: "/ecom/testimonials/3.webp",
        alt: "Video testimonial describing business turnaround and revenue growth after working with Upthrust",
        videoUrl: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Ecom%20testimonial%20(1).mp4",
        duration: "5:54",
        durationAt1_2x: "4:55",
    },
    {
        id: 4,
        tag: "SUCCESS STORY",
        text:
            "I made a mess of my first website. Couldn’t figure out conversions on my own. Upthrust structured everything properly and made it sell. Everything finally fell into place.",
        image: "/ecom/testimonials/4.webp",
        alt: "Client video testimonial about improving website conversions with Upthrust",
        videoUrl: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Gabriela-testimonial%20(1).mp4",
        duration: "4:06",
        durationAt1_2x: "3:25",
    },
];

const ClientVideoTestimonial = () => {
    const [playingId, setPlayingId] = useState(null);
    return (
        <div className='px-0 md:px-16 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-md:max-w-112.5'>
            {
                successStories.map((item, index) => {
                    const isPlaying = playingId === item.id;
                    return (
                        <div className='md:rounded-md max-3xl:max-h-100 aspect-video w-full bg-black relative overflow-hidden' key={index}>


                            {isPlaying && (
                                <video
                                    src={item.videoUrl}
                                    autoPlay
                                    controls
                                    playsInline
                                    controlsList="nodownload"
                                    aria-hidden="true"
                                    disablePictureInPicture
                                    className="absolute inset-0 w-full h-full object-contain bg-black z-30"
                                />

                            )}

                            {!isPlaying && (
                                <>
                                    {/* Text content at the top */}
                                    <div className='absolute top-0 left-0 right-0 bottom-0 z-20 text-white p-3 md:p-5 flex justify-between flex-col w-3/5 xs:max-w-1/2 3xl:max-w-100'>
                                        <div>
                                            <p className='text-[10px] md:text-xs 3xl:text-sm rounded-full py-1.5 md:py-0.5 3xl:py-2.5 px-2.5 md:px-1.5 3xl:px-5 inline-block border border-white'>
                                                SUCCESS STORY
                                            </p>

                                            <p className='mt-2 md:mt-5 text-sm md:text-lg 3xl:text-2xl tracking-[-0.02em] text-[#f7f9f2]'>
                                                {item.text}
                                            </p>
                                        </div>

                                        <button onClick={() => setPlayingId(item.id)} className='text-xs 3xl:text-sm flex items-center gap-1 mt-3'>
                                            Play Video <ArrowUpRight size={15} />
                                        </button>
                                    </div>

                                    {/* Black overlay in the middle */}
                                    <div className='absolute inset-0 bg-black/20 z-10' />
                                    <button
                                        onClick={() => setPlayingId(item.id)}
                                        className="absolute inset-0 z-20 cursor-pointer"
                                        aria-label="Play video"
                                    />
                                    {/* Image at the bottom */}
                                    <Image
                                        className='absolute bottom-0 left-0 right-0 w-full object-contain rounded-md'
                                        src={item.image}
                                        width={500}
                                        height={250}
                                        alt={item.alt}
                                    />
                                </>
                            )}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClientVideoTestimonial