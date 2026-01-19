import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
const successStories = [
    {
        id: 1,
        tag: "SUCCESS STORY",
        text:
            "We were struggling with traffic and poor conversions. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x. Worth it.",
        image: "/images/testimonials/rishab.jpg",
        videoUrl: "https://cdn.example.com/videos/rishab.mp4",
        duration: "4:27",
        durationAt1_2x: "3:43",
    },
    {
        id: 2,
        tag: "SUCCESS STORY",
        text:
            "Skeptical at first. Now they’re my team. Upthrust didn’t just deliver exponential growth — they became true business partners who actually care.",
        image: "/images/testimonials/client-2.jpg",
        videoUrl: "https://cdn.example.com/videos/client-2.mp4",
        duration: "3:27",
        durationAt1_2x: "2:53",
    },
    {
        id: 3,
        tag: "SUCCESS STORY",
        text:
            "My business was in turmoil. One last chance to make it work. Made a $4,900 bet with Upthrust — got 2.7x back immediately. Now doing $51K+ monthly. Beyond my wildest dreams.",
        image: "/images/testimonials/dan.jpg",
        videoUrl: "https://cdn.example.com/videos/dan.mp4",
        duration: "5:54",
        durationAt1_2x: "4:55",
    },
    {
        id: 4,
        tag: "SUCCESS STORY",
        text:
            "I made a mess of my first website. Couldn’t figure out conversions on my own. Upthrust structured everything properly and made it sell. Everything finally fell into place.",
        image: "/images/testimonials/gunjan.jpg",
        videoUrl: "https://cdn.example.com/videos/gunjan.mp4",
        duration: "4:06",
        durationAt1_2x: "3:25",
    },
];

const ClientVideoTestimonial = () => {
    return (
        <div className='px-0 md:px-16 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-md:max-w-112.5'>
            {
                successStories.map((item, index) => (
                    <div className='md:rounded-md max-3xl:max-h-100 aspect-video w-full bg-black relative overflow-hidden' key={index}>
                        {/* Text content at the top */}
                        <div className='absolute top-0 left-0 right-0 bottom-0 z-20 text-white p-3 md:p-5 flex justify-between flex-col w-3/5 xs:max-w-1/2'>
                            <div>
                                <p className='text-[10px] md:text-xs 3xl:text-sm rounded-full py-1.5 md:py-0.5 px-2.5 md:px-1.5 inline-block border border-white'>
                                    SUCCESS STORY
                                </p>

                                <p className='mt-2 md:mt-5 text-sm md:text-lg 3xl:text-2xl line-clamp-6'>
                                    {item.text}
                                </p>
                            </div>

                            <button className='text-xs 3xl:text-sm flex items-center gap-1 mt-3'>
                                Play Video <ArrowUpRight size={15} />
                            </button>
                        </div>

                        {/* Black overlay in the middle */}
                        <div className='absolute inset-0 bg-black/20 z-10' />

                        {/* Image at the bottom */}
                        <Image
                            className='absolute bottom-0 left-0 right-0 w-full object-contain rounded-md'
                            src={'/testimonial.png'}
                            width={500}
                            height={250}
                            alt='Testimonial'
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default ClientVideoTestimonial