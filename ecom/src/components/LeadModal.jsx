"use client"
import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, X } from 'lucide-react';
import LeadForm from './LeadForm';
import Image from 'next/image';



// Testimonial Component

const brands = [
    { name: "brand1", src: "/ecom/brand/brandwhite/brand1.webp" },
    { name: "brand2", src: "/ecom/brand/brandwhite/brand2.webp" },
    { name: "brand3", src: "/ecom/brand/brandwhite/brand11.webp" },
    { name: "brand4", src: "/ecom/brand/brandwhite/brand4.webp" },
    { name: "brand5", src: "/ecom/brand/brandwhite/brand6.webp" },
    { name: "brand6", src: "/ecom/brand/brandwhite/brand7.webp" },
    { name: "brand7", src: "/ecom/brand/brandwhite/brand8.webp" },
    { name: "brand8", src: "/ecom/brand/brandwhite/brand9.webp" },
];
const TestimonialSection = () => (
    <div className="h-full flex flex-col overflow-hidden">

        {/* TOP IMAGE SECTION */}
        <div className="relative h-[65%]">

            {/* Background Image */}
            <Image
                src="/ecom/profile/profile10.webp"
                alt="Testimonial"
                fill
                className="object-cover"
                priority
            />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-end p-6">
                {/* BOTTOM ORANGE SECTION */}
                <p className="text-white text-[22px] xs:text-lg 3xl:text-2xl font-semibold">
                    <span className='-pt-3'>
                        <svg className='size-9 inline-block -mt-2.5 mr-2' viewBox="0 0 46 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.48702e-10 18.0701C3.96784e-10 8.44813 6.83439 2.72495 11.0981 0.0876696C11.6382 -0.246749 12.2214 0.449277 11.8056 0.935951C10.1274 2.89523 8.80072 5.13361 7.88479 7.55091C10.0746 6.92231 12.4052 7.00244 14.5473 7.77999C16.6894 8.55753 18.5347 9.99317 19.8224 11.884C21.1101 13.7749 21.7752 16.0254 21.7236 18.3175C21.672 20.6097 20.9064 22.8275 19.5349 24.6577C18.1634 26.4879 16.2554 27.8379 14.0805 28.5169C11.9056 29.196 9.57382 29.1697 7.41456 28.4418C5.2553 27.714 3.37778 26.3214 2.0473 24.4607C0.716823 22.6001 0.000656758 20.3629 8.48702e-10 18.0701ZM24.1809 18.0701C24.1809 8.44813 31.0153 2.72495 35.2791 0.0903884C35.8191 -0.24403 36.4024 0.449277 35.9892 0.933232C34.3089 2.89292 32.9803 5.13226 32.063 7.55091C34.2528 6.92231 36.5834 7.00244 38.7255 7.77999C40.8676 8.55753 42.7129 9.99317 44.0007 11.884C45.2884 13.7749 45.9534 16.0254 45.9018 18.3175C45.8502 20.6097 45.0846 22.8275 43.7131 24.6577C42.3416 26.4879 40.4337 27.8379 38.2588 28.5169C36.0839 29.196 33.7521 29.1697 31.5928 28.4418C29.4335 27.714 27.556 26.3214 26.2255 24.4607C24.8951 22.6001 24.1789 20.3656 24.1782 18.0729L24.1809 18.0701Z" fill="#ffffff" />
                        </svg>
                    </span>
                    <blockquote> We're satisfied and glad we picked Upthrust. They 4X'd our revenue while
                        keeping ads profitable.</blockquote>
                </p>



                <div className="text-lg 3xl:text-xl mt-3 ">
                    <p className="">Anuva Kakkar</p>
                    <p className="">Founder at Tiggle</p>
                </div>
            </div>
        </div>

        {/* BOTTOM ORANGE SECTION */}
        <div className="bg-orange-600 p-6 px-8 h-[35%] flex flex-col justify-evenly">
            <p className="text-white text-sm font-medium mb-4">
                Trusted by Shark tank and 48 other brands
            </p>

            <div className="grid grid-cols-4 gap-y-4 xs:gap-y-6 gap-x-2 3xl:gap-x-8 items-center py-5 md:py-5 max-w-xl">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="flex items-center justify-center h-7 xs:h-8 w-12 xs:w-13 3xl:w-15"
                    >
                        <Image
                            src={brand.src}
                            alt={brand.name}
                            width={160}
                            height={60}
                            className="max-h-full max-w-full object-contain select-none"
                        />
                    </div>
                ))}
            </div>
        </div>

    </div>
);


// Main Form Component
const LeadFormModal = ({ handleClose }) => {

    const handleBackdropClick = (e) => {
        console.log('clik')
        // Only close if clicking directly on the backdrop, not its children
        if (e.target === e.currentTarget) {
            console.log("inside")
            handleClose();
        }
    };

    return (

        <div className="fixed inset-0 z-101 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            <button onClick={handleClose} className="absolute top-8 right-2 z-20 p-2 bg-white text-[#FF3B00] rounded-full shadow hover:bg-gray-100 sm:hidden" > <X className="w-5 h-5" /> </button>
            {/* Modal Box */}
            <div
                className="relative z-10 w-full max-lg:max-w-md max-w-6xl max-lg:mx-auto 3xl:max-w-7xl h-[90vh] 3xl:h-[85vh] lg:rounded-4xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex h-full w-full max-sm:px-2">
                    <div className="hidden lg:block lg:w-5/12">
                        <TestimonialSection />
                    </div>
                    <div className='w-full max-lg:max-w-md max-lg:rounded-md mx-auto lg:w-7/12 flex text-black bg-white max-sm:overflow-auto max-sm:pt-30'>
                        <LeadForm showBorder={false} />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeadFormModal;