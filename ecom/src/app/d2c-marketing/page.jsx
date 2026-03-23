import StylishButton from '@/common/RocketButton';
import ScaleButton from '@/common/ScaleButton'
import dynamic from "next/dynamic";

import Image from 'next/image';
import React from 'react'
import HeroHorizontalSlider from '@/components/home/HeroHorizontalSlider';
import HeroVerticleSlider from '@/components/home/HeroVerticleSlider';
import { Curve1 } from '@/common/HandWritten';
import Navbar from '@/components/Navbar';

import AskQuestionAndDisclaimer from '@/components/home/AskQuestionAndDisclaimer';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import { FullPricingSection } from '@/components/home/FullPricingSection';
import HomeFooter from '@/components/home/HomeFooter';
import ScrollIndicator from '@/components/home/ScrollIndicator';
import WhatWeDid from '@/components/home/WhatWeDid';
import EcomHeading from '@/components/home/EcomHeading';
const MobileTestimonialsSlider = dynamic(() => import('@/components/home/MobileTestimonialsSlider'));
const LeadForm = dynamic(() => import('@/components/LeadForm'));
const WhatWeDo = dynamic(() => import('@/components/home/WhatWeDo'));
// const InteractiveCaseStudy = dynamic(() => import('@/components/home/InteractiveCaseStudy'));
const ServicesAccordion = dynamic(() => import('@/components/home/ServicesAccordion'));
const UGCAdsPlaybook = dynamic(() => import('@/components/home/UGCAdsPlaybook'));
const OurApproach = dynamic(() => import('@/components/home/OurApproach'));
const UGCVideoCategories = dynamic(() => import('@/components/home/UGCVideoCategories'));
const SuccessStories = dynamic(() => import('@/components/home/SuccessStories'));
const ClientVideoTestimonial = dynamic(() => import('@/components/home/ClientVideoTestimonial'));
const FAQ = dynamic(() => import('@/components/home/Faq'));
const SliderVideos = dynamic(
    () => import('@/components/home/SliderVideos')
);

const BrandSlider = dynamic(
    () => import('@/components/home/BrandSlider'),
    { loading: () => null }
);

// const SliderVideos = dynamic(
//   () => import('@/components/home/SliderVideos'),
//   { ssr: false }
// );

const InteractiveCaseStudy = dynamic(
    () => import('@/components/home/InteractiveCaseStudy'),
    { loading: () => null }
);
// import InteractiveCaseStudy from "@/components/home/client/InteractiveCaseStudy.client";
// import InteractiveCaseStudy from "@/components/home/client/InteractiveCaseStudy.client";


// const SuccessStories = dynamic(
//   () => import('@/components/home/SuccessStories'),
//   { ssr: false }
// );

const brands2 = [
    { name: "brand1", src: "/ecom/brand/first/f17.webp" },
    { name: "brand2", src: "/ecom/brand/first/f12.webp" },
    { name: "brand3", src: "/ecom/brand/first/f10.webp" },
    { name: "brand4", src: "/ecom/brand/first/f6.webp" },
    { name: "brand5", src: "/ecom/brand/second/s2.webp" },
    { name: "brand6", src: "/ecom/brand/second/s7.webp" },
];
const brands = [
    { name: "brand1", src: "/ecom/brand/brandwhite/brand1.webp" },
    { name: "brand2", src: "/ecom/brand/brandwhite/brand2.webp" },
    { name: "brand3", src: "/ecom/brand/brandwhite/brand3.webp" },
    { name: "brand4", src: "/ecom/brand/brandwhite/brand4.webp" },
    { name: "brand5", src: "/ecom/brand/brandwhite/brand5.webp" },
    { name: "brand6", src: "/ecom/brand/brandwhite/brand6.webp" },
    { name: "brand7", src: "/ecom/brand/brandwhite/brand7.webp" },
    { name: "brand8", src: "/ecom/brand/brandwhite/brand8.webp" },
    { name: "brand9", src: "/ecom/brand/brandwhite/brand9.webp" },
    { name: "brand10", src: "/ecom/brand/brandwhite/brand10.webp" },

];

const socials = [
    { alt: "snapchat", url: '/social/snapchat.webp' },
    { alt: "youtube", url: '/social/youtube.webp' },
    { alt: "amazon", url: '/social/amazon.webp' },
    { alt: "meta", url: '/social/meta.webp' },
    { alt: "google", url: '/social/google.webp' },
]
const profiles = [
    { alt: "profile1", url: '/ecom/profile/profile1.webp' },
    { alt: "profile2", url: '/ecom/profile/profile2.webp' },
    { alt: "profile3", url: '/ecom/profile/profile3.webp' },
    { alt: "profile4", url: '/ecom/profile/profile4.webp' },
    { alt: "profile5", url: '/ecom/profile/profile5.webp' },
]

const testimonials = [
    {
        text: "Upthrust promised 90 days. We saw results in 47 days. Traffic improved, conversions went up, sales became exponential. Worth every penny.",
        name: "Troy",
        company: "MC Overalls",
        image: "/ecom/profile/profile6.png",
        color: "bg-[#FFF0F0]"
    },
    {
        text: "We were struggling with traffic and poor conversion rates. In 6 months, Upthrust grew our organic traffic 463%, optimized our ads, and improved conversions 3x. ",
        name: "Rishab",
        company: "Carobis",
        image: "/ecom/profile/profile7.png",
        color: "bg-[#FFEBDA]"
    },
    {
        text: "Most leads would disqualify—we couldn't convert. Upthrust changed that with property-specific targeting and smart budget allocation. Lead quality and conversions both improved significantly.",
        name: "Gunjan",
        company: "Housr",
        image: "/ecom/profile/profile8.png",
        color: "bg-[#E1EFD7]"
    },
    {
        text: "$4,900 with Upthrust returned 2.7x immediately. Now doing $51K+ monthly with multi- channel campaigns. They don't track vanity metrics, they know what growth truly means.",
        name: "Dan",
        company: "Dan Studio",
        image: "/ecom/profile/profile9.png",
        color: "bg-[#E3DFF1]"
    }
];


const page = () => {
    return (
        <main id="main-content">
            <Navbar />
            <div className='grid lg:grid-cols-2 px-6 sm:px-10 md:px-20 min-h-screen h-full bg-black text-white overflow-hidden max-h-full 3xl:max-h-[180vh]'>
                <div className='pt-30 sm:pt-35 md:pt-50 3xl:pt-62 flex flex-col'>

                    <div className="flex -space-x-4 rtl:space-x-reverse max-md:justify-center">
                        {
                            profiles.map((profile, index) => (
                                <Image width={56} height={56} key={index} className="size-15 lg:size-13 3xl:size-15 border-2 border-white border-buffer rounded-full" src={profile.url} alt={profile.alt} />

                            ))
                        }
                    </div>

                    <div className="relative inline-block px-5 3xl:px-6 py-2 3xl:py-3 rounded-full lg:text-sm 3xl:text-base text-white mt-6 3xl:mt-10 mb-16 md:mb-3 3xl:mb-5 bg-black/80 border border-white/10 max-md:mx-auto w-fit">
                        <span className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
                        D2C Marketing Agency
                    </div>


                    <h1 className="mb-2 3xl:mb-5 text-white text-[42px] xs:text-5xl 2xl:text-[65px] 3xl:text-8xl leading-[120%] font-semibold max-sm:leading-tight max-md:pl-2 tracking-[-0.02em]
">
                        <span className="block sm:mb-2 max-lg:hidden">
                            <span className="italic font-instrument font-light">Scale</span>
                            <span className=""> To 45 Lakhs+</span>
                        </span>
                        <span className="block max-lg:hidden">
                            Per Month
                        </span>
                        <p className='lg:hidden max-w-xs'><span className="italic font-instrument font-light">Scale</span> To 45 Lakhs+  Per Month</p>
                    </h1>


                    <div className="space-y-0 mb-16 3xl:mb-20 text-lg xs:text-base 3xl:text-xl text-white max-md:pl-2 tracking-[-0.02em] lg:hidden">
                        Ads that stop the scroll <br />
                        Pages that convert <br />
                        Growth that compound
                    </div>
                    <div className="space-y-0 mb-16 3xl:mb-20 text-lg xs:text-base 3xl:text-xl text-white max-md:pl-2 tracking-[-0.02em] max-lg:hidden">
                        <span className='font-semibold'>Ads</span> that stop the scroll, <span className='font-semibold'>pages</span> that convert, and <span className='font-semibold'>growth</span> that compounds
                    </div>

                    <ScaleButton color="red" />

                    <div className='mt-10 sm:mt-5 3xl:mt-7 flex flex-col'>
                        <p className='text-lg lg:text-base 3xl:text-lg max-md:text-center tracking-[-0.02em]'>Brands we've scaled</p>

                        <div className="grid grid-cols-5 gap-y-5 xs:gap-y-6 gap-x-2 3xl:gap-x-16 items-center py-5 md:py-5 3xl:py-8 max-w-xl pb-12 3xl:pb-20">
                            {brands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="flex items-center justify-center h-7 xs:h-8 w-12 xs:w-13 3xl:w-20"
                                >
                                    <Image
                                        src={brand.src}
                                        alt={"Logos of ecommerce brands partnered with Upthrust"}
                                        width={160}
                                        height={60}
                                        className="max-h-full max-w-full object-contain select-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='lg:hidden overflow-hidden max-w-full'>
                        <HeroHorizontalSlider />
                    </div>
                </div>

                {/* right  */}
                <div className='max-lg:hidden'>
                    <HeroVerticleSlider />
                </div>
            </div>

            <div className='max-lg:my-12  lg:my-20 3xl:mt-40 flex flex-col '>
                <h2 className='text-center text-2xl lg:text-xl 3xl:text-2xl max-xs:max-w-[320px] mx-auto tracking-[-0.02em]'><span className='font-semibold'>60+</span> D2C Brands Scaled | Avg <span className='font-semibold'>3.8x</span> ROAS | <br /><span className='font-semibold'>$50M+</span> Managed Profitably</h2>
                <BrandSlider />
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center px-3'>
                    <span className='text-sm xl:text-xs 3xl:text-sm'>CREATIVES THAT ACTUALLY SELL</span>
                    <div className='flex flex-col'>
                        <div className='mt-5 flex flex-wrap gap-1 sm:gap-3 items-center justify-center relative'>

                            <Curve1
                                lines={[
                                    {
                                        parts: [
                                            { type: "text", text: "From scroll to sold." }
                                        ]
                                    },
                                    {
                                        parts: [
                                            { type: 'text', text: 'in' },
                                            { type: 'highlight', text: '5 seconds', bgColor: '#FF4500' },
                                        ]
                                    },
                                ]}
                                imageClassName='right-0 3xl:-right-6 top-14 3xl:top-16'
                                curvePosition="end"
                                curveFlipHorizontal={true}
                                curveFlipVertical={false}
                                tiltAngle={-10}
                                className="absolute -bottom-40 xl:-bottom-50 -left-50 xl:-left-70 max-w-[200px]"

                            />
                            <h2 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>1 in 7 Shark Tank</h2>
                            <div className='inline-block'>

                                <div className="flex -space-x-2 xs:-space-x-4 rtl:space-x-reverse">
                                    {
                                        socials.map((social, index) => (
                                            <div key={index} className="relative size-8.75 xs:size-10 md:size-11 3xl:size-12.5 rounded-full border-buffer overflow-hidden shrink-0">
                                                <Image
                                                    src={social.url}
                                                    alt={social.alt}
                                                    width={50}
                                                    height={50}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className='xs:hidden text-center'>
                                <span className=' capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>brands </span>
                                <span className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold capitalize ml-1 leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>{" "}Work with us</span>
                            </p>
                        </div>
                        <p className='max-xs:hidden leading-[120%] tracking-[-0.04em]'>
                            <span className=' font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em] leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>brands </span>
                            <span className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold capitalize ml-1 leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>{" "}Work with us</span>
                        </p>

                    </div>
                    <span className='text-lg lg:text-sm 3xl:text-lg mt-2 mb-10 text-center tracking-[-0.02em]'>These ads averaged 8% CTR. Every brand below scaled past ₹2 crore. One team did it all</span>
                </div>
                <StylishButton color='red' />
                <SliderVideos />
            </div>

            <WhatWeDo />

            <div className='flex flex-col mt-25 xs:mt-70 mb-0 xs:mb-10 px-2 overflow-hidden'>
                <div className='flex flex-col items-center mb-10'>
                    <span className='text-sm md:text-xs 3xl:text-sm uppercase'>problems we've solved</span>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center relative '>
                            <Curve1
                                lines={[
                                    {
                                        parts: [
                                            { type: "text", text: "The" },
                                            { type: 'highlight', text: 'proof', bgColor: '#FF4500' },
                                        ]
                                    },

                                ]}
                                imageClassName='left-3 top-8 3xl:top-9 scale-x-[-1]'
                                curvePosition="end"
                                curveFlipHorizontal={true}
                                curveFlipVertical={false}
                                tiltAngle={5}
                                className="absolute -right-28 3xl:-right-32 -top-4 max-w-[200px] "

                            />
                            <h2 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em]'>Last Month,
                                <span className='capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal'> 47 brands </span>
                                Brands Scaled
                            </h2>
                        </div>
                    </div>
                    <span className='text-lg lg:text-sm 3xl:text-lg mt-2 mb-3 lg:mb-12 text-center tracking-[-0.02em]'>One founder called us. 'We just hit ₹3 crore.' That's what happens with the right ads</span>

                </div>
                <InteractiveCaseStudy />
            </div>

            <div className='flex flex-col mt-25 xs:mt-60 3xl:mt-80 mb-0 xs:mb-10 px-2 scroll-mt-28' id='services'>
                <div className='flex flex-col items-center mb-10'>
                    {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>Our services</span>
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
              <h2 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-[120%] tracking-[-0.04em] capitalize'>How To Scale
                <span className=' font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em]'> D2C brands</span> </h2>
            </div>
          </div>
          <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-12 text-center tracking-[-0.02em]'>Scale to ₹2.5Cr+/month </span> */}

                    <EcomHeading
                        tag="h2"
                        heading={[
                            {
                                line: [
                                    { type: "normal", text: "How We Scale" },
                                    { type: "italic", text: "D2C brands" },
                                ],
                            },
                        ]}
                        label="Our services"
                        subtitle="Scale to ₹2.5Cr+/month"
                    />
                </div>
                <ServicesAccordion />
            </div>

            <div>
                <div className='flex flex-col mt-25 xs:mt-50 3xl:mt-70 mb-2 xs:mb-10 px-2'>
                    <div className='flex flex-col items-center mb-10'>
                        {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>A VIDEO GUIDE</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h2 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-[120%] tracking-[-0.04em] capitalize'>Scale with UGC ads:</h2>
                <span className='font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em]'> The Playbook</span>
              </div>
            </div> */}

                        <EcomHeading
                            tag="h2"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "Scale with UGC ads:" },
                                        { type: "italic", text: "The Playbook" },
                                    ],
                                },
                            ]}
                            label="A VIDEO GUIDE"
                            subtitle=""
                        />
                    </div>
                </div>
                <UGCAdsPlaybook />
            </div>



            <div className='bg-black mt-25 xs:mt-50 mb-8 xs:mb-10 max-lg:hidden'>
                <div className='flex flex-col pt-22 3xl:pt-25 text-white'>
                    <div className='flex flex-col items-center mb-10'>
                        {/* <span className='text-xs 3xl:text-sm uppercase'>our process</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-3 items-center justify-center'>
                <h3 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-[120%] tracking-[-0.04em]'>How we approach your
                  <span className='font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em]'> Ecom store growth</span> ?</h3>
              </div>
            </div>
            <span className='text-[15px] sm:text-sm 3xl:text-lg text-center tracking-[-0.02em] mt-3 mb-10'>Join the top 0.1% of e-com brands using the proprietary process other agencies ignore</span> */}
                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "How we approach your" },
                                        { type: "italic", text: "Ecom store growth" },
                                        { type: "normal", text: "?" },
                                    ],
                                },
                            ]}
                            label="our process"
                            subtitle="Join the top 0.1% of e-com brands using the proprietary process other agencies ignore"
                        />
                    </div>

                </div>
                <OurApproach />
            </div>

            <div className='flex flex-col mt-25 xs:mt-50 3xl:mt-60 mb-0 xs:mb-10 px-2 scroll-mt-10' id='contact-library'>
                <div className='flex flex-col'>
                    <div className='flex flex-col items-center mb-6'>
                        {/* <span className='text-xs 3xl:text-sm uppercase'>our work</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-3 items-center'>
                <h3 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-[120%] tracking-[-0.04em]'>50+ Brands. 200+ UGC Videos. <br />
                  <span className='font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em]'> Watch Them</span>
                </h3>
              </div>
            </div>
            <span className='text-[15px] sm:text-sm 3xl:text-lg text-center tracking-[-0.02em] mt-3 mb-5'>Average CTA: 8.2% </span> */}

                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "50+ Brands. 200+ UGC Videos." },
                                    ],
                                },
                                {
                                    line: [

                                        { type: "italic", text: "Watch Them" },
                                    ]
                                }
                            ]}
                            label="our work"
                            subtitle="Average CTA: 8.2% "
                        />
                    </div>
                </div>
                <UGCVideoCategories />
            </div>



            <MobileTestimonialsSlider testimonials={testimonials} />

            {/* Desktop GSAP */}
            <div className="max-lg:hidden">
                <SuccessStories />
            </div>
            <div>
                <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10  px-2 scroll-mt-30 3xl:scroll-mt-35' id='case-studies'>
                    <div className='flex flex-col items-center mb-10 3xl:mb-16'>
                        {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>CASE STUDIES</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center flex-col'>
                <h3 className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-[120%] tracking-[-0.04em]'>
                  The
                  <span className='font-normal capitalize text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-[120%] tracking-[0em]'>{" "}dashboards. </span>
                  <br />
                  The numbers. What we did.
                </h3>
              </div>
              <span className='text-[15px] sm:text-sm 3xl:text-lg text-center tracking-[-0.02em] mb-10'>We Don't Just Talk—We Show</span>
            </div> */}

                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: " The" },
                                        { type: "italic", text: "dashboards." },
                                    ],
                                },
                                {
                                    line: [

                                        { type: "normal", text: " The numbers. What we did." },
                                    ]
                                }
                            ]}
                            label="CASE STUDIES"
                            subtitle="We Don't Just Talk—We Show "
                        />
                    </div>
                </div>

                <WhatWeDid />
            </div>


            {/* comparision table  */}
            <div>
                <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2 scroll-mt-30 3xl:scroll-mt-35' id='why-upthrust'>
                    <div className='flex flex-col items-center mb-10'>
                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [{ type: "normal", text: "What you get" },
                                    { type: "italic", text: "Here" },

                                    ],
                                },
                            ]}
                            label="UPTHRUST vs Other Agencies"
                            subtitle="Why Should You Hire Us?"
                        />
                    </div>
                </div>

                <ComparisonTable />
            </div>

            {/* pricing table  */}
            <div>
                <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2 scroll-mt-30 3xl:scroll-mt-35' id='pricing'>
                    <div className='flex flex-col items-center mb-10'>
                        {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>PRICING</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h3 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center'>
                  What It
                  <span className='capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-8xl font-normal font-instrument italic'>{" "}Costs</span>
                </h3>
              </div>
              <span className='text-lg md:text-sm 3xl:text-lg mt-5 xs:mt-8 mb-8 text-center capitalize '>Brands we've scaled</span>
            </div> */}
                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [{ type: "normal", text: "What It" },
                                    { type: "italic", text: "Costs" },

                                    ],
                                },
                            ]}
                            label="PRICING"
                            subtitle=""
                        />
                        <span className='text-lg mt-5 xs:mt-8 3xl:mt-16 mb-8 3xl:mb-12 text-center sm:text-sm 3xl:text-lg tracking-[-0.02em]'>Brands we've scaled</span>
                        <div className="w-full flex justify-center items-center px-4">
                            <div className="flex  gap-5 md:gap-11 overflow-x-auto max-w-fit whitespace-nowrap hide-scrollbar w-full">
                                {brands2.slice(0, 6).map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="flex-shrink-0 flex items-center justify-center h-12 w-30"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            width={300}
                                            height={200}
                                            className="h-full w-full object-contain select-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                <FullPricingSection />
            </div>

            <ScrollIndicator />

            <div className='relative  h-full pb-40'>
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "One Partner for" },
                            ]
                        },
                        {
                            parts: [
                                { type: "text", text: "your entire" },
                                { type: 'highlight', text: 'funnel', bgColor: '#FF4500' },
                            ]
                        },

                    ]}
                    imageClassName='-right-35 3xl:-right-40 top-8 3xl:top-10 w-full'
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={-7}
                    imageIndex={6}
                    className="absolute left-25 lg:left-15 2xl:left-30 3xl:left-40 top-1/4 "

                />
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "Don't just" },
                                { type: 'highlight', text: 'read', bgColor: '#FF4500' },
                                { type: "text", text: "see" },
                            ]
                        },
                        {
                            parts: [
                                { type: "text", text: "how it actually works" },
                            ]
                        },

                    ]}
                    imageClassName='left-0 xs:left-18 scale-x-[-1] scale-y-[-1] -top-18 w-full -rotate-60'
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={7}
                    imageIndex={3}
                    hiddenInSmall={false}
                    className="absolute left-8 xs:left-18 bottom-0 xs:-bottom-10 lg:hidden"

                />
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "Your complete" },
                            ]
                        },
                        {
                            parts: [
                                { type: 'highlight', text: 'growth', bgColor: '#FF4500' },
                                { type: "text", text: "engine" },
                            ]
                        },

                    ]}
                    imageClassName='right-17 -top-12 3xl:-top-12 w-full -rotate-6 !h-10 lg:!h-12 3xl:!h-12'
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={7}
                    imageIndex={3}
                    className="absolute right-35 2xl:right-70  3xl:right-80 bottom-4 3xl:bottom-0"

                />
                <div className='flex flex-col mt-25 xs:mt-30 mb-0 xs:mb-10 px-2 relative'>

                    <div className='flex flex-col items-center mb-10'>
                        {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>Ready to book your demo</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h3 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center'> Ready to
                  <span className='text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-8xl font-instrument italic font-normal'> Scale</span> ?
                </h3>
              </div>
            </div> */}

                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: "Ready to" },
                                        { type: "italic", text: "Scale" },
                                        { type: "normal", text: " ?" },

                                    ],
                                },
                            ]}
                            label="Ready to book your demo"
                            subtitle=""
                        />
                    </div>
                </div>
                <LeadForm showOnlyIframe={true} />
            </div>


            <div>
                <div className='flex flex-col mt-40 lg:mt-40 3xl:mt-70 mb-0 xs:mb-10 px-2 scroll-mt-30 3xl:scroll-mt-35' id='hear-from-them'>
                    <div className='flex flex-col items-center mb-5'>
                        {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>what they say</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h3 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center'>
                  <span className='text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-8xl font-instrument italic font-normal'>2-4X {" "}</span>
                  In 6-12 Months
                </h3>
              </div>
              <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-10 text-center'>In their words</span>
            </div> */}

                        <EcomHeading
                            tag="h3"
                            heading={[
                                {
                                    line: [{ type: "italic", text: "2-4X" },
                                    { type: "normal", text: "In 6-12 Months" },

                                    ],
                                },
                            ]}
                            label="what they say"
                            subtitle="In their words"
                        />
                    </div>
                </div>

                <ClientVideoTestimonial />
            </div>

            <div>
                <div className='flex flex-col mt-25 xs:mt-50 mb-20 lg:mb-10 px-2 items-center'>
                    {/* <span className='text-sm md:text-xs 3xl:text-sm uppercase'>Got questions? FAQ's</span>
          <div className='flex flex-col'>
            <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
              <h3 className='capitalize text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center'>
                <span className=''>Everything You Need To Know</span>
                <p className='text-center mt-2 md:mt-4'>Before
                  <span className='text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-normal font-instrument italic'>Working With Us</span>
                </p>
              </h3>
            </div>
          </div> */}

                    <EcomHeading
                        tag="h3"
                        heading={[
                            {
                                line: [{ type: "normal", text: "Everything You Need To Know" }],
                            },
                            {
                                line: [
                                    { type: "normal", text: "Before" },
                                    { type: "italic", text: "Working With Us" },
                                ],
                            },
                        ]}
                        label="Got questions? FAQ's"
                        subtitle=""
                    />
                </div>

                <FAQ />
            </div>

            <AskQuestionAndDisclaimer />
            <HomeFooter />
        </main>
    )
}

export default page