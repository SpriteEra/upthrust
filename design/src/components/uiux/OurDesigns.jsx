"use client"
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const helpData = [
    {
        title: "SaaS Product",
        titleSm: "SaaS Product",
        upperSlider: ["/uiux/design/design1/1a.webp", "/uiux/design/design1/2a.webp", "/uiux/design/design1/3a.webp"],
        description: "We design digital products that are easy to adopt, intuitive to use, and built to scale as your business grows.",
        title2: "From idea to product\n that performs",
        description2: "We help teams design SaaS and digital products that users understand instantly and keep coming back to. From early-stage concepts to mature platforms, we focus on clarity, usability, and structure—so features make sense, workflows feel natural, and growth doesn’t come at the cost of complexity. Every decision is tied to real user behavior and long-term scalability.",
        lowerSlider: [
            "/uiux/design/design1/1.webp",
            "/uiux/design/design1/2.webp",
            "/uiux/design/design1/3.webp",
            "/uiux/design/design1/4.webp",
            "/uiux/design/design1/5.webp",
            "/uiux/design/design1/6.webp",
            "/uiux/design/design1/7.webp",
            // "/uiux/design/design1/8.webp",
        ]
    },
    {
        title: "Brand Identity ",
        titleSm: "Brand Identity",
        upperSlider: ["/uiux/design/design2/1a.webp", "/uiux/design/design2/2a.webp"],
        description: "We help brands look credible, consistent, and instantly recognizable.",
        title2: "Identity that\n earns trust",
        description2: "Branding is more than a logo or color palette—it’s how people perceive you before they ever use your product. We create visual identities that communicate clarity, confidence, and intent across every touchpoint. From early positioning to refined systems, we help brands stand out while staying aligned with their audience and business goals.",
        lowerSlider: [
            "/uiux/design/design2/1.webp",
            "/uiux/design/design2/2.webp",
            "/uiux/design/design2/3.webp",
            "/uiux/design/design2/4.webp",
            "/uiux/design/design2/5.webp",
            "/uiux/design/design2/6.webp",
            "/uiux/design/design2/7.webp",
            "/uiux/design/design2/8.webp",
        ]
    },
    {
        title: "Ads Campaign & Landing Page ",
        titleSm: "Campaign & LPs",
        upperSlider: ["/uiux/design/design3/1a.webp", "/uiux/design/design3/2a.webp"],
        description: "Design that turns attention into action, across ads, landing pages, and conversion flows.",
        title2: "Built to convert,\n not just look good",
        description2: "We design landing pages and ad creatives with one goal in mind: performance. From first impression to final click, every element is crafted to guide users toward action. Whether it’s paid campaigns, product launches, or lead generation, we focus on clarity, messaging hierarchy, and visual direction that improves conversion—not vanity metrics.",
        lowerSlider: [
            "/uiux/design/design3/1.webp",
            "/uiux/design/design2/2.webp",
            "/uiux/design/design3/3.webp",
            "/uiux/design/design3/4.webp",
            "/uiux/design/design3/5.webp",
            "/uiux/design/design3/6.webp",
            "/uiux/design/design3/7.webp",
        ]
    },
    {
        title: "UI/UX",
        titleSm: "UI/UX Design",
        upperSlider: ["/uiux/design/design4/1a.webp", "/uiux/design/design4/2a.webp", "/uiux/design/design4/3a.webp"],
        description: "Thoughtful design that removes friction and improves how users move through your product.",
        title2: "Designed\n for real users",
        description2: "We design interfaces and experiences that feel effortless to use. By understanding user behavior and intent, we simplify flows, reduce friction, and improve overall usability. The result is an experience that feels intuitive from the first interaction—supporting engagement, retention, and long-term product success.",
        lowerSlider: [
            "/uiux/design/design4/1.webp",
            "/uiux/design/design4/2.webp",
            "/uiux/design/design4/3.webp",
            "/uiux/design/design4/4.webp",
            "/uiux/design/design4/5.webp",
            "/uiux/design/design4/6.webp",
            "/uiux/design/design4/7.webp",
        ]
    },
]
const OurDesigns = () => {
    const [openIndex, setOpenIndex] = useState(null);


    const toggleFAQ = (index) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index)
        }
    };

    return (
        <div className='flex flex-col mt-5 lg:mt-10'>
            <div className='sm:max-w-[90%] sm:mx-auto w-full px-8 sm:px-10 3xl:px-20 mb-5'>
                <div className='grid grid-cols-2 gap-4 text-xs 3xl:text-sm 3xl:leading-[20px]'>
                    <p>Our services (04)</p>
                    <p className='3xl:ml-22'>Selected Work</p>
                </div>

            </div>
            {helpData.map((item, index) => (
                <div className={`border-dashed border-b-2 py-3 3xl:py-4 cursor-pointer overflow-hidden transition-all duration-400 ${index === 0 ? "border-t-2" : ""}`}
                    key={index}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className=''>
                        <div className='grid grid-cols-2 gap-2 sm:gap-4 sm:max-w-[90%] sm:mx-auto w-full px-1 sm:px-10 3xl:px-20 '>
                            <div className='flex items-center gap-1 sm:gap-3'>
                                <Plus className={`size-6 md:size-7 lg:size-9 3xl:size-11 ${index === openIndex ? "rotate-45" : ""} transition-all duration-400 ease-in-out`} />
                                <p className='text-[1.375rem] sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium max-lg:font-instrument max-lg:hidden 2xl:leading-[72.5px] 3xl:leading-[81.6px]'><span className='font-instrument font-normal italic'>{item.title}</span> Design</p>
                                <p className='text-[1.375rem] font-instrument font-normal italic lg:hidden'>{item.titleSm}</p>

                            </div>

                            <div className={`grid gap-1 3xl:gap-2 ${index === 0 || index === 3 ? "grid-cols-3" : "grid-cols-2"} ${openIndex === index ? "lg:opacity-0" : ""} transition-all duration-400 ease-in-out 3xl:ml-22 `}>
                                {
                                    item.upperSlider.map((image, i) => (
                                        <Image src={image} key={i} width={300} height={100} alt='demo' className='w-full sm:h-full h-14 sm:max-h-20 3xl:max-h-27.5 object-cover rounded-sm sm:rounded-md' />
                                    ))
                                }
                            </div>
                        </div>
                        <div className={` overflow-hidden transition-all duration-400 ease-in-out ${openIndex === index
                            ? "max-h-350 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                            }`}>
                            <div className='sm:max-w-[90%] pt-3 2xl:pt-5 sm:mx-auto w-full px-3 sm:px-5 3xl:px-10'>
                                <p className='text-base lg:text-sm 3xl:text-base max-w-xs 3xl:max-w-[370px]'>{item.description}</p>
                                <div className='grid grid-cols-2 gap-4 mt-10 max-lg:hidden'>
                                    <p className='text-2xl 3xl:text-[2rem] font-medium whitespace-pre-line 3xl:leading-[36px]'> {item.title2}</p>
                                    <div className={`text-xs 3xl:text-sm max-w-[661px]`}>{item.description2}</div>
                                </div>

                            </div>

                            <div className="w-full overflow-hidden mt-7 lg:mt-14 2xl:mt-20 mb-7 lg:mb-10">
                                <div
                                    className={`flex gap-2 ${openIndex === index ? "marquee" : ""} hover [animation-play-state:paused]`}
                                >
                                    {/* duplicate images for seamless loop */}
                                    {[...item.lowerSlider, ...item.lowerSlider].map((image, i) => (
                                        <Image
                                            key={i}
                                            src={image}
                                            width={320}
                                            height={440}
                                            alt="design preview"
                                            className="h-full w-65 2xl:w-80 3xl:w-110 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurDesigns