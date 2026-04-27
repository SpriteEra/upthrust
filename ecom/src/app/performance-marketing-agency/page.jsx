import PerfromanceHeading from '@/common/PerformanceHeading';
import FAQ from '@/components/home/Faq';
import HomeFooter from '@/components/home/HomeFooter';
import AdReview from '@/components/performance-ads/AdReview';
import AdSpend from '@/components/performance-ads/AdSpend';
import AuditHero from '@/components/performance-ads/AuditHero';
import BrandSliderPerformance from '@/components/performance-ads/BrandSliderPerformance';
import CardDesign from '@/components/performance-ads/CardDesign';
import HeroSection from '@/components/performance-ads/HeroSection';
import MarketingPanel from '@/components/performance-ads/MarketingPanel';
import MetaDisclaimer from '@/components/performance-ads/MetaDisclaimer';
import PerformanceNav from '@/components/performance-ads/PerformanceNav';

import ProductSlideDetail from '@/components/performance-ads/ProductSlideDetail';
import ProfileSection from '@/components/performance-ads/ProfileSection';
import Testimonials from '@/components/performance-ads/Testimonials';
import React from 'react'


const navLinks = [
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Why Upthrust", href: "#why-upthrust" },
    { name: "Hear From Them", href: "#hear-from-them" },
];

const faqs = [
    {
        question: "What is performance marketing?",
        answer:
            "Partnering with a performance marketing agency means every dollar you spend is tied to a measurable outcome — leads, demos, or closed revenue. It targets high-intent buyers using signals like search behavior, buying intent, and ICP parameters. Unlike brand advertising, it does not reward impressions — it rewards pipeline. At Upthrust, every campaign is built to deliver consistent, scalable, and ROI-positive business outcomes."
    },
    {
        question: "What is the difference between Google Ads and paid social?",
        answer:
            "As an online performance marketing agency, we use both channels strategically depending on where your buyers are in the funnel. Google Ads captures active demand — your ad appears when a buyer is searching for a solution. Paid social on platforms like LinkedIn or Meta creates demand by placing your offer in front of the right ICP before they search. We use both to fill and accelerate your pipeline at every stage."
    },
    {
        question: "How can a performance marketing agency help you grow?",
        answer:
            "The right performance marketing agency puts your budget directly in front of buyers who are actively searching for what you offer. Every campaign is structured around high-intent keywords, defined ICP segments, and conversion-optimized landing pages that move visitors toward a demo or contact. When ad spend, messaging, and audience signals are tightly aligned, you stop paying for awareness and start paying for pipeline."
    },
    {
        question: "Which performance channels work best for my business?",
        answer:
            "Working with a global performance marketing agency means your channel strategy is built on cross-market data — not guesswork. The right mix depends on your ICP, average deal size, sales cycle, and where your buyers spend time. On your free strategy call, we map your ICP to the channels with the highest conversion probability so your first spend goes exactly where the data points."
    },
    {
        question: "What services does your performance marketing company offer?",
        answer:
            "As a performance marketing company, our services cover the entire paid acquisition funnel — Google Search, LinkedIn paid social, ad copy and creative, landing page optimization, conversion tracking, and weekly performance reporting. We also offer account-based marketing, demand generation, and retargeting for B2B companies running complex, multi-stakeholder sales cycles. Every change is logged, hypothesized, and measured for impact. No vanity metrics. No guesswork."
    },
    {
        question: "Which works better: Google Ads or LinkedIn?",
        answer:
            "The answer depends on your buyer — and the performance marketing agency you choose should test both before recommending one. Google Search often outperforms on direct conversion intent, while LinkedIn excels in account-based precision and ICP-level targeting. We let conversion data, not opinion, determine where to concentrate spend."
    },
    {
        question: "How much does it cost to work with a performance marketing firm?",
        answer:
            "Choosing a performance marketing firm should not feel like a financial risk — pricing depends on your campaign scope, the channels we activate, and your monthly ad spend. Rather than quoting a fixed number upfront, we start with a free growth strategy call to assess your current CAC, pipeline goals, and budget. That gives us enough context to recommend a setup that pays for itself — not one that burns budget without accountability."
    },
    {
        question: "How long does it take to see real results?",
        answer:
            "As a performance marketing firm focused on B2B pipelines, most campaigns go live within two weeks of onboarding. The first 30 days build clean data — keyword mapping, audience segmentation, conversion tracking, and baseline benchmarks. Meaningful signals like CTR, CPL, and lead quality typically emerge in weeks three to four, with measurable CAC improvements within 60 to 90 days."
    },
    {
        question: "Do you handle ad creative and copy too?",
        answer:
            "Choosing a performance advertising agency means creative and copy should already be part of the process — not an add-on you pay extra for. Our team develops ad copy aligned to your ICP’s pain points, headlines that match the exact keywords your buyers search, and landing pages designed to convert — not just impress. We treat creative as a performance lever, not a branding exercise."
    },
    {
        question: "How do I get started?",
        answer:
            "Book a free growth strategy call with our performance marketing company. On the call, we review your current setup, identify where budget is leaking, and map out a plan built around your ICP, deal size, and pipeline goals. There is no pitch, no pressure, and no obligation — just a clear picture of what a first campaign looks like and what results you can reasonably expect."
    }
];

export const metadata = {
    title: "Performance Marketing Agency That Drives Profit | Upthrust",

    description: "Performance marketing agency focused on profitable growth. Audit your ad account, fix wasted spend, and scale campaigns with measurable ROI.",

    keywords: [
        "Performance Marketing Agency",
    ],

    metadataBase: new URL("https://www.upthrust.agency"),

    alternates: {
        canonical: "https://www.upthrust.agency/performance-marketing-agency",
    },

    openGraph: {
        title: "Performance Marketing Agency Built for Real Revenue Growth",
        description: "Stop guessing with ads. Our performance marketing team audits your ad account, fixes wasted spend, and builds scalable revenue campaigns.",
        url: "https://www.upthrust.agency/performance-marketing-agency",
        siteName: "Upthrust",
        // images: [
        //     {
        //         url: "/meta-ads/meta-opengraph-image.png",
        //         width: 1200,
        //         height: 630,
        //         alt: "Upthrust – Meta Ads Agency",
        //     },
        // ],
        type: "website",
    },

    // twitter: {
    //     card: "summary_large_image",
    //     title: "Performance Marketing Agency That Scales Profitably",
    //     description: "We manage $12M+ in Performance Marketing Agency spend with structured PPC systems built for predictable scaling and real ROI",
    //     images: ["/google-ads/ogimg.png"],
    // },

    robots: {
        index: true,
        follow: true,
    }
};

const page = () => {
    return (
        <div>
            <PerformanceNav items={navLinks} />
            <HeroSection />
            <div className="container py-12 sm:py-20 max-w-[90%] overflow-hidden mx-auto ">
                <h3 className="text-2xl font-semibold leading-[150%] tracking-[-0.02em] text-center mb-8 max-sm:max-w-[280px] max-sm:mx-auto">Upthrust driving performance of</h3>
                <BrandSliderPerformance />
            </div>
            <div>
                <AdSpend />
            </div>
            <div className="sm:py-16 3xl:py-20" id="process">
                <MarketingPanel />
            </div>
            <div>

                <ProfileSection />
            </div>
            <div className="sm:py-16 3xl:py-20" >
                <AuditHero />
            </div>
            <div className="sm:py-16 3xl:py-20" id="case-studies">
                <ProductSlideDetail />
            </div>
            <div className="py-16 3xl:py-20" id="hear-from-them">
                <Testimonials />
            </div>
            <div id="why-upthrust">
                <CardDesign />
            </div>
            <div className="sm:py-16 3xl:py-20">
                <AdReview />
            </div>
            <div className='space-y-16 3xl:space-y-30' >
                <PerfromanceHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: " Everything You Need To Know" },

                            ],
                        },
                        {
                            line: [
                                { type: "normal", text: "Before" },
                                { type: "italic", text: "Working With Us" },

                            ],
                        }
                    ]}
                    subtitle=""
                />
                <FAQ
                    faqData={faqs}
                    shadow={true}
                    actionCss={{
                        active: "bg-[#FF3B00] text-white",
                        default: "bg-[#FF3B00] text-white",
                    }}
                />
            </div>

            <MetaDisclaimer />
            <HomeFooter text1="Any questions?" bgColor="#FF3B00" text2={{
                desktop: {
                    text1: "Tell us where you’re stuck.",
                    text2: "We’ll show you where the money is leaking,and how to fix it.",
                },
                mobile: {
                    text1: "We’ll show you where the money is leaking,and how to fix it.",
                    text2: "",
                },
            }} />
        </div>
    )
}

export default page