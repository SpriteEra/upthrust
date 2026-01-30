import Heading from '@/common/Heading';
import StylishButton from '@/common/RocketButton';
import Navbar from '@/components/Navbar'
import GrowthStories from '@/components/uiux/GrowthStories';
import { PenLine } from 'lucide-react';
import React from 'react'
const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Here From Them', href: '#here-from-them' },
    { name: 'FAQs', href: '#faqs' },
];


const traficToRevenue = [
    {
        buttonText: "Low conversions?",
        title: "Users sign up… then disappear?",
        description: "High traffic means nothing if users leave before seeing value. Unclear messaging, and friction-heavy UX quietly kill conversions.",
        value: "+42%",
        valueText1: "average ",
        valueText2: "conversion growth",
    },
    {
        buttonText: "POOR USER EXPERIENCE?",
        title: "Your product works, your UX doesn’t.",
        description: "When navigation feels complex or actions aren’t obvious, users hesitate. Every extra step costs trust, time, and revenue.",
        value: "+47%",
        valueText1: "Reduction in user drop ",
        valueText2: "offs after redesign",
    },
    {
        buttonText: "Upthrust as the Solution",
        title: "That’s where Upthrust comes in.",
        description: "We design conversion-focused experiences The result? Users move faster, understand quicker, and convert more.",
        value: "5.13X",
        valueText1: "Average increase in ",
        valueText2: "conversion rate",
    },
]

const helpData = [
    {
        title: {
            italic: "SaaS Product",
            normal: "Design"
        },
        upperSlider: [""],
        description: "We design digital products that are easy to adopt, intuitive to use, and built to scale as your business grows.",
        title2: "From idea to product that performs",
        description2: "We help teams design SaaS and digital products that users understand instantly and keep coming back to. From early-stage concepts to mature platforms, we focus on clarity, usability, and structure—so features make sense, workflows feel natural, and growth doesn’t come at the cost of complexity. Every decision is tied to real user behavior and long-term scalability.",
        lowerSlider: [""]
    },
    {
        title: {
            italic: "Brand Identity ",
            normal: "Design"
        },
        upperSlider: [""],
        description: "We help brands look credible, consistent, and instantly recognizable.",
        title2: "Identity that earns trust",
        description2: "Branding is more than a logo or color palette—it’s how people perceive you before they ever use your product. We create visual identities that communicate clarity, confidence, and intent across every touchpoint. From early positioning to refined systems, we help brands stand out while staying aligned with their audience and business goals.",
        lowerSlider: [""]
    },
    {
        title: {
            italic: "Ads Campaign & Landing Page ",
            normal: "Design"
        },
        upperSlider: [""],
        description: "Design that turns attention into action, across ads, landing pages, and conversion flows.",
        title2: "Built to convert, not just look good",
        description2: "We design landing pages and ad creatives with one goal in mind: performance. From first impression to final click, every element is crafted to guide users toward action. Whether it’s paid campaigns, product launches, or lead generation, we focus on clarity, messaging hierarchy, and visual direction that improves conversion—not vanity metrics.",
        lowerSlider: [""]
    },
    {
        title: {
            italic: "UI/UX",
            normal: "Design"
        },
        upperSlider: [""],
        description: "Thoughtful design that removes friction and improves how users move through your product.",
        title2: "Designed for real users",
        description2: "We design interfaces and experiences that feel effortless to use. By understanding user behavior and intent, we simplify flows, reduce friction, and improve overall usability. The result is an experience that feels intuitive from the first interaction—supporting engagement, retention, and long-term product success.",
        lowerSlider: [""]
    },
]

const steps = [
    {
        id: 1,
        text1: "Growth Discovery &",
        text2: "Experience Audit",
        hoverText: "We <b>understand your business</b>, users, and goals, then identify what’s blocking growth across product, brand, or funnel."
    },
    {
        id: 2,
        text1: "Strategy &",
        text2: "Opportunity Mapping",
        hoverText: "We decide what matters most, what to fix first, and where design will have the <b>biggest impact</b>."
    },
    {
        id: 3,
        text1: "Ideation &",
        text2: "Concept Development",
        hoverText: "Ideas are <b>created around real problems</b>; whether for product flows, branding, landing pages, or campaigns."
    },
    {
        id: 4,
        text1: "Design & Validation",
        text2: "",
        hoverText: "We <b>design, test, and refine</b> quickly so only strong solutions move forward."
    },
    {
        id: 5,
        text1: "Build-Ready",
        text2: "Delivery",
        hoverText: "<b>Everything is organized</b> and ready for development, launch, or campaigns, no extra back-and-forth."
    },
    {
        id: 6,
        text1: "Testing &",
        text2: "Optimization",
        hoverText: "<b>We track performance</b>, learn from results, and continuously optimize for growth."
    },
]
const page = () => {
    return (
        <main>
            <Navbar items={navLinks} />
            <div className='bg-black min-h-screen'>

            </div>
            <div className='flex flex-col mt-26 3xl:mt-30'>
                <Heading
                    tag="h2"
                    heading={[{
                        line: [
                            { type: "normal", text: "Growth Stories" },
                        ],
                    },
                    {
                        line: [
                            { type: "normal", text: "Powered " },
                            { type: "italic", text: "By Design" },
                        ],
                    }]}
                    label='Case studies'
                    subtitle="Explore how our work helped companies improve conversions, retention, and revenue."
                    subTitleCss='max-w-lg 3xl:max-w-xl'
                />
                <div className='flex items-center justify-center w-full my-8 3xl:my-10'>
                    <StylishButton />
                </div>
                <GrowthStories />

                <div className='max-w-[90%] mx-auto w-full grid grid-cols-1 xs:grid-cols-3 gap-10 mt-10'>
                    {
                        [
                            { value: "200%", text1: "Boost in", text2: "Organic Traffic" },
                            { value: "5.13X", text1: "Increase of", text2: "Conversion Rate" },
                            { value: "260%", text1: "Increase of User", text2: "Retention Time" },

                        ].map((item, index) => (
                            <div key={index} className='bg-[#f9f9f9] p-8 3xl:p-9 flex flex-col rounded-3xl 3xl:rounded-4xl'>
                                <p className='text-6xl 3xl:text-7xl font-semibold text-[#ff3b00] w-full border-b-2 border-black/30 pb-4 3xl:pb-5'>{item.value}</p>
                                <span className='text-lg 3xl:text-2xl font-semibold mt-5'>{item.text1}</span>
                                <span className='text-lg 3xl:text-2xl font-semibold'>{item.text2}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col mt-26 3xl:mt-30'>
                <Heading
                    tag="h2"
                    heading={[{
                        line: [
                            { type: "normal", text: "From Traffic to Revenue:" },
                        ],
                    },
                    {
                        line: [
                            { type: "normal", text: "UX That " },
                            { type: "italic", text: "Actually Converts" },
                        ],
                    }]}
                    label='Growth stalls for predictable reasons'
                    subtitle="Most products don't fail because of traffic; thay fail because users get confused, stuck, or unconvinced. We fix that."
                />
                <div className='max-w-[90%] mx-auto w-full '>
                    <div className='grid grid-cols-1 xs:grid-cols-3 gap-10 mt-20'>
                        {
                            traficToRevenue?.map((item, index) => (
                                <div key={index} className='bg-[#f9f9f9] p-8 3xl:p-9 flex flex-col rounded-3xl 3xl:rounded-4xl justify-between'>
                                    <div className='pb-4 3xl:pb-5'>
                                        <span className='border border-[#ff3b00]/30 text-[#ff3b00] px-2 3xl:px-3 py-1 3xl:py-1.5 rounded-full uppercase text-sm 3xl:text-base w-fit'>{item.buttonText}</span>
                                        <h6 className='max-w-xs font-semibold text-2xl 3xl:text-3xl my-6 3xl:my-8'>{item.title}</h6>
                                        <p className='text-lg 3xl:text-xl '>{item.description}</p>
                                    </div>
                                    <div className='border-t-2 border-black/30 pt-4 3xl:pt-5 grid grid-cols-3'>
                                        <div className='flex items-center '>
                                            <p className='text-4xl 3xl:text-5xl font-semibold text-[#ff3b00]'>{item.value}</p>
                                        </div>
                                        <div className='col-span-2'>
                                            <p className='text-base 3xl:text-lg uppercase'>{item.valueText1}</p>
                                            <p className='text-base 3xl:text-lg uppercase'>{item.valueText2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-10 rounded-3xl 3xl:rounded-4xl bg-black p-8 flex justify-between flex-wrap gap-5'>
                        <div className='flex gap-10 items-center'>
                            <div className='p-4 3xl:p-5 bg-white rounded-full w-fit'>
                                <PenLine className='size-7 3xl:size-8' />
                            </div>
                            <p className='font-semibold text-4xl 3xl:text-3xl text-white'>Let's design an experience that converts.</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <StylishButton />

                        </div>

                    </div>

                </div>

            </div>


            <div className='flex flex-col mt-50 3xl:mt-60'>
                <Heading
                    tag="h3"
                    heading={[{
                        line: [
                            { type: "normal", text: "What We Help" },
                        ],
                    },
                    {
                        line: [
                            { type: "normal", text: "You " },
                            { type: "italic", text: "Design" },
                        ],
                    }]}
                    label='Our services'
                    subtitle="Everything you need to design, launch, and improve products, brands, and campaigns - under one roof."
                />

            </div>
            <div className='flex flex-col mt-50 3xl:mt-60'>
                <Heading
                    tag="h3"
                    heading={[{
                        line: [
                            { type: "normal", text: "A Clear System for" },
                        ],
                    },
                    {
                        line: [
                            { type: "normal", text: "Sustainable " },
                            { type: "italic", text: "Growth" },
                        ],
                    }]}
                    label='Our approach'
                    subtitle="Clear steps. No confusion. Focused on results."
                />
                <div className='max-w-[90%] mx-auto w-full mt-10 3xl:mt-16'>
                    <div className='grid grid-cols-3'>
                        <div>
                            <span className='border border-black/30 px-2 3xl:px-3 py-1 3xl:py-1.5 rounded-full uppercase text-sm 3xl:text-base w-fit'>Our process</span>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-3xl 3xl:text-4xl font-semibold'>Growth don't come from random imporovements. It comes from understanding whta's broken, what matter most, and fixing it in the right order, across product, brand, and performance.</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default page