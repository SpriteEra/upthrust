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
        question: "What is Meta advertising?",
        answer:
            "Meta advertising refers to paid campaigns across platforms like Facebook and Instagram that help businesses reach targeted audiences at scale. It allows brands to promote products or services to people based on demographics, interests, behaviors, and online activity. This precise targeting makes Meta more effective than many traditional digital advertising channels. Strong visuals, compelling copy, and clear calls to action work together to capture attention and drive results. Meta also provides real-time data, allowing campaigns to be continuously optimized for better performance. Businesses can clearly measure how ads contribute to leads, sales, and overall growth. Meta advertising supports goals like brand awareness, lead generation, online sales, and retargeting. At Upthrust, Meta campaigns are built to deliver consistent, scalable, and measurable business outcomes."
    },
    {
        question: "What is the difference between Meta, Instagram and Facebook ads?",
        answer:
            "Meta is the parent company of Facebook, Instagram, Messenger, and WhatsApp, and Meta Ads is the unified system used to advertise across all of them. Instead of running separate campaigns for each platform, ads are managed from one central dashboard where budgets and placements are optimized automatically based on performance. This approach allows your ads to appear where they are most effective, helping you get better results from the same ad spend. At Upthrust, we use this cross-platform system to maximize reach, efficiency, and performance."
    },
    {
        question: "How can Meta advertising help you grow?",
        answer:
            "Meta advertising helps businesses grow by turning social media reach into measurable results. Through platforms like Facebook and Instagram, brands can reach highly relevant audiences using precise targeting based on interests, behaviors, and past interactions. This ensures ad budgets are focused on people most likely to take action, not just scroll past. With real-time performance tracking and continuous optimization, campaigns can improve return on ad spend while scaling what works. Whether the goal is brand awareness, lead generation, online sales, or customer retention, Meta provides the tools to move users from discovery to conversion. At Upthrust, Meta campaigns are built with a performance-first approach, combining strategy, creative testing, and data-driven optimization to deliver consistent and scalable business growth."
    },
    {
        question: "Which ad types should I use for my specific business?",
        answer:
            "The right Meta ad type depends on your business goal. For lead generation businesses like services, real estate, or education, we typically use Instant Form ads or Click-to-WhatsApp ads to reduce friction and increase enquiries. For eCommerce brands and Shopify stores, Advantage+ Shopping campaigns and Catalog Sales ads work best, automatically showing the right products to people most likely to buy."
    },
    {
        question: "What services do you offer?",
        answer:
            "At Upthrust, we provide end-to-end Meta advertising services built to drive real business results. We start with strategic campaign planning aligned to your growth goals, defining the right audiences, funnels, and objectives. Our team manages full technical setup and tracking to ensure accurate data and efficient performance. We create high-converting ad creatives, including compelling visuals and persuasive copy tailored to each audience. Landing pages are built or optimized to turn traffic into qualified leads or sales. Campaigns are continuously monitored and improved through data-driven optimization and structured testing. You receive clear performance reporting focused on pipeline, revenue, and return on ad spend. We also stay ahead of Meta platform updates and best practices so your campaigns remain competitive. Our focus is always on measurable outcomes that contribute directly to your business growth."
    },
    {
        question: "Which works better: Instagram or Facebook?",
        answer:
            "It depends on your audience and goals. Instagram often performs better for visually driven brands, eCommerce, and younger audiences, especially through Reels and Stories. Facebook is typically stronger for lead generation, B2B services, and reaching a broader age group, where feed placements support more detailed messaging. At Upthrust, we usually use Advantage+ placements so Meta's system automatically shifts budget to whichever platform delivers the lowest cost per result."
    },
    {
        question: "How much does it cost to work with us?",
        answer:
            "The cost of working with Upthrust will be variable depending on your business and its needs — as well as how much you'd like to invest in advertising on Meta platforms. Things like your requirements, campaign objectives, and scope of services will all determine what it will cost to work with our Meta advertising agency. As a general rule of thumb, you can expect a fixed up-front cost while we research your business and industry and do preliminary campaign setup and creation. Afterwards, we will charge a flat monthly fee plus a small percentage of your monthly ad spend on Meta platforms. To learn more about our pricing model, you can contact us for a free consultation and proposal, during which we can discuss how we can tailor our services to stay within your budget."
    },
    {
        question: "How long does it takes to see results?",
        answer:
            "Meta ads can start driving traffic and leads quickly, but optimized performance typically takes about 7 to 14 days. During this learning phase, Meta's system tests different audiences and placements to find the most cost-effective way to generate results. Most campaigns begin to stabilize and show more consistent cost per lead or purchase by the end of the second week."
    },
    {
        question: "Do you help with creative development?",
        answer:
            "Yes, creative development is a core part of Upthrust's Meta advertising services. We design scroll-stopping visuals and write persuasive ad copy built specifically for Facebook and Instagram audiences. Our team combines creative storytelling with performance data to produce ads that not only look good but drive measurable results. From static images and videos to full-funnel creative variations, every asset is developed with a clear objective and audience in mind. We continuously test and refine creative elements to improve engagement, conversion rates, and return on ad spend. Every visual, headline, and message is aligned with your campaign goals to ensure your Meta ads don't just capture attention, but turn it into real business outcomes."
    },
    {
        question: "How do I get started?",
        answer:
            "Getting started with Upthrust is simple. First, reach out to us through our website so we can understand your goals. We begin with a free consultation and audit of your current Meta ads and overall digital performance to identify opportunities for growth. Based on this, we share a tailored strategy and walk you through a clear proposal aligned with your business objectives. Once approved, we complete onboarding, set up tracking, and do deep research on your market, competitors, and audience. From there, we build, launch, and continuously optimize your Meta campaigns with performance-focused creatives and data-driven improvements."
    }
];

const page = () => {
    return (
        <div>
            <PerformanceNav items={navLinks} />
            <HeroSection />
            <div className="container py-20 max-w-[90%] overflow-hidden mx-auto ">
                <h3 className="text-2xl font-semibold leading-[150%] tracking-[-0.02em] text-center mb-8">Upthrust driving performance of</h3>
                <BrandSliderPerformance />
            </div>
            <div>
                <AdSpend />
            </div>
            {/* <div>
                <MarketingPanel />
            </div> */}


            <ProfileSection />
            <AuditHero />
            <ProductSlideDetail />
            <div>
                <Testimonials />
            </div>
            <div>
                <CardDesign />
            </div>
            <div>
                <AdReview />
            </div>
            <div className='space-y-16 3xl:space-y-30'>
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
                    text1: "YOUR SUBMISSION GOES HERE.",
                    text2: "OUR EXCITED RESPONSE COMES SHORTLY AFTER.\n COINCIDENCE? WE THINK NOT.",
                },
                mobile: {
                    text1: "Your submission goes here. Our excited response comes shortly after. Coincidence? We think not.",
                    text2: "",
                },
            }} />
        </div>
    )
}

export default page