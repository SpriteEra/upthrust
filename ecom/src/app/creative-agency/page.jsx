import { Curve1 } from '@/common/HandWritten';
import MetaHeading from '@/common/MetaHeading';
import StylishButton from '@/common/RocketButton';
import ClientStories from '@/components/creative-ads/ClientStories';
import CreativeNavbar from '@/components/creative-ads/CreativeNav';
import MetaAdsHero from '@/components/creative-ads/HeroSection';
import UGCVideoCategories from '@/components/creative-ads/MetaUgcs';
import ProcessTimeline from '@/components/creative-ads/ProgressBar';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import FAQ from '@/components/home/Faq';
import HomeFooter from '@/components/home/HomeFooter';
import MobileTestimonialsSlider from '@/components/home/MobileTestimonialsSlider';
import SuccessStories from '@/components/home/SuccessStories';
import BrandSlider from '@/components/meta-ads/BrandSlider';
import CircularDesign from '@/components/meta-ads/CircularDesign';
// import ClientStories from '@/components/meta-ads/ClientStories';
import DashboardStacks from '@/components/meta-ads/DashboardStack';
import DropLetters from '@/components/meta-ads/DropLetter';
import FeatureCards from '@/components/meta-ads/FeatureCard';
import MetaDisclaimer from '@/components/meta-ads/MetaDisclaimer';
import MetaLeadForm from '@/components/meta-ads/MetaLeadForm';
import MetaRocketButton from '@/components/meta-ads/MetaRocketButton';
// import MetaUgcs from '@/components/meta-ads/MetaUgcs';
import MobileVideos from '@/components/meta-ads/MobileVideos';
import ScaleCards from '@/components/meta-ads/ScaleCard';
import StatsGrid from '@/components/meta-ads/StatCard';
import { Play } from 'lucide-react';
import React from 'react'

const brandsRow1 = [
    { id: 1, name: "", logo: "/brands/brand-white/tata-cliq.webp" },
    { id: 2, name: "", logo: "/brands/brand-white/housr.webp" },
    { id: 3, name: "", logo: "/brands/brand-white/bagwani.webp" },
    { id: 4, name: "", logo: "/brands/brand-white/mukunda-foods.webp" },
    { id: 5, name: "", logo: "/brands/brand-white/libas.webp" },
    { id: 6, name: "", logo: "/brands/brand-white/biba.webp" },
    { id: 7, name: "", logo: "/brands/brand-white/manohar-lal.webp" },
    { id: 8, name: "", logo: "/brands/brand-white/shoppetite.webp" },
    { id: 9, name: "", logo: "/brands/brand-white/yummie.webp" },
    { id: 10, name: "", logo: "/brands/brand-white/bosch.webp" },
    { id: 11, name: "", logo: "/brands/brand-white/the-sweet-blend.webp" },
    { id: 12, name: "", logo: "/brands/brand-white/victorias-secret.webp" },
    { id: 13, name: "", logo: "/brands/brand-white/nurture-india.webp" },
    { id: 14, name: "", logo: "/brands/brand-white/dhenu.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/dell.webp" },
]
const brandsRow2 = [
    { id: 1, name: "", logo: "/brands/brand-white/zomato.webp" },
    { id: 2, name: "", logo: "/brands/brand-white/urban.webp" },
    { id: 3, name: "", logo: "/brands/brand-white/welspun.webp" },
    { id: 4, name: "", logo: "/brands/brand-white/ok.webp" },
    { id: 5, name: "", logo: "/brands/brand-white/zipnow.webp" },
    { id: 6, name: "", logo: "/brands/brand-white/petco.webp" },
    { id: 7, name: "", logo: "/brands/brand-white/velbiom.webp" },
    { id: 8, name: "", logo: "/brands/brand-white/james-allen.webp" },
    { id: 9, name: "", logo: "/brands/brand-white/neon-attack.webp" },
    { id: 10, name: "", logo: "/brands/brand-white/jagwonder.webp" },
    { id: 11, name: "", logo: "/brands/brand-white/beyond.webp" },
    { id: 12, name: "", logo: "/brands/brand-white/mc-overalls.webp" },
    { id: 13, name: "", logo: "/brands/brand-white/tiggle.webp" },
    { id: 14, name: "", logo: "/brands/brand-white/harley-davidson.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/audio-art.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/loreal.webp" },
    { id: 15, name: "", logo: "/brands/brand-white/last-supply.webp" },
]
const navLinks = [
    { name: 'Why Upthrust', href: '#why-upthrust' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Creative Library', href: '#creative-library' },
    { name: 'Hear From Them', href: '#hear-from-them' },
];

const cardsData = [
    {
        title: "Data-Driven",
        subtitle: [
            { text: 'Strategy', color: '#ffffff' },
            { text: 'Outcomes', color: '#ffffff' },
            { text: 'Growth', color: '#ffffff' }
        ],
        description:
            "We turn performance data and audience psychology into creative hypotheses that actually scale.",
        bg: "bg-orange",
        text: "text-white",
        icon: <Play size={18} />,
        iconCss: "bg-white text-orange "
    },
    {
        title: "Paid-Social",
        subtitle: [
            { text: 'Videos', color: '#000000' },
            { text: 'Images', color: '#000000' },
            { text: 'and More', color: '#000000' }
        ],
        description:
            "UGC-style ads, founder videos, testimonials, skits, and sound-first Reels built for conversions.",
        bg: "bg-[#E8F3FF]",
        text: "text-black",
        icon: <Play size={18} />,
        iconCss: "bg-black text-white"
    },
    {
        title: "Scroll-Stopping",
        subtitle: [
            { text: 'Creatives', color: '#000000' },
            { text: 'Thumbnails', color: '#000000' },
            { text: 'UGCs', color: '#000000' }
        ],
        description:
            "Bold graphics, before-and-afters, carousels, and expert POVs optimized for CTR and ROAS.",
        bg: "bg-[#F6F6F6]",
        text: "text-black",
        icon: <Play size={18} />,
    },
    {
        title: "AI-Powered",
        subtitle: [
            { text: 'Workflow', color: '#ffffff' },
            { text: 'Research', color: '#ffffff' },
            { text: 'Production', color: '#ffffff' }
        ],
        description:
            "AI-assisted research, scripting, and post-production to deliver more ad variants, faster.",
        bg: "bg-orange",
        text: "text-white",
        icon: <Play size={18} />,
        iconCss: "bg-white text-orange"
    },
];

export const metadata = {
    title: "Meta Ads Agency for Scalable Growth | Upthrust",

    description: "Meta Ads agency optimizing 6Cr+ in monthly spend. Creative testing, structured scaling, and profitable growth across Facebook & Instagram",

    keywords: [
        "Google Ads Agency",
    ],

    metadataBase: new URL("https://www.upthrust.agency"),

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Meta Ads Agency Built for Profitable Scaling",
        description: "We optimize 6Cr+ in monthly Meta ad spend using creative testing and structured scaling systems that drive measurable revenue.",
        url: "https://www.upthrust.agency",
        siteName: "Upthrust",
        images: [
            {
                url: "/meta-ads/meta-opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Upthrust – Meta Ads Agency",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Google Ads Agency That Scales Profitably",
        description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
        images: ["/google-ads/ogimg.png"],
    },

    robots: {
        index: true,
        follow: true,
    }
};

const page = () => {
    return (
        <main id="meta-ad-agency" >
            <CreativeNavbar items={navLinks} />
            <MetaAdsHero />

            <div className="bg-black text-white py-16 3xl:py-20 my-10 3xl:my-16 " id="why-upthrust">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [
                                { type: "normal", text: "How Top Brands Consistently Launch" },
                            ],
                        },
                        {
                            line: [
                                { type: "normal", text: " Ads That Actually" },
                                { type: "italic", text: "Drive Revenue" },

                            ],
                        }

                    ]}
                    label="Why it would work for you"
                    subtitle="The repeatable framework trusted by growth teams at Tiggle, L'ORÉAL & Harley Davidson, pokerbazi, cosco, tata cliq, victoria secret"

                />

                <CircularDesign />

            </div>

            <MetaHeading
                tag="h2"
                heading={[
                    {
                        line: [{ type: "normal", text: " How These Brands Made Creative" }],
                    },
                    {
                        line: [
                            { type: "normal", text: "Their " },
                            { type: "italic", text: "#1 Growth Lever" },
                            { type: "normal", text: " Instead" },
                        ],
                    },
                ]}
                label="CLIENT STORIES"
            />
            <ClientStories />

            <div className="bg-black text-white py-10 pb-0 pt-16 3xl:py-10 3xl:pt-36 mt-10 3xl:mt-20 " id="case-studies">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "The Truth About Creative Ads " }],
                        },
                        {
                            line: [
                                { type: "italic", text: "That Converts" },
                            ],
                        },
                    ]}
                    label="WHAT SETS US APART"
                    subtitle="It starts with deep audience research, proven ad frameworks, and relentless testing."

                />
                <ScaleCards cards={cardsData} />
                <BrandSlider brandsRow1={brandsRow1} brandsRow2={brandsRow2} />
            </div>
            <div>
                <DropLetters />
                <StatsGrid className={"bg-orange"} />
            </div>
            <div className="py-12 xl:py-30 ">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "The Art & Science of" },
                            { type: "italic", text: "Creative Performance " },
                            ],
                        },

                    ]}
                    label="OUR PROCESS"
                    subtitle=" We've engineered a systematic approach that turns brand stories into scroll-stopping content—balancing 
creative intuition with data-driven precision."

                />

                <ProcessTimeline />

            </div>
            <section className=" py-16 3xl:py-30 3xl:pt-35 max-w-[92%] mx-auto flex flex-col lg:flex-row items-center gap-12">


                <div className="flex gap-10 md:gap-15 items-center max-lg:flex-col">

                    {/* Left Content */}
                    <div className="lg:w-[50%]  overflow-hidden">
                        <p className="uppercase text-sm tracking-[-0.02em] leading-[150%] mb-3 border-b border-black pb-2 3xl:pb-3 w-full">
                            A NEW ERA OF META AGENCY THAT DELIVER ROI
                        </p>
                        <h2 className="text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-5xl 2xl:text-[55px] 3xl:text-[4.5rem] font-semibold  leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize text-black">
                            What Happens When<br />
                            Creative Agency<br />
                            Actually{" "}
                            <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem]  xl:text-5xl 2xl:xl:text-[55px] 3xl:text-[5rem] font-normal  leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic">
                                Delivers ROI
                            </span>{" "}

                        </h2>
                        <p className="text-black text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em] max-w-150 3xl:max-w-180">
                            These brands were tired of choosing between creative excellence and measurable performance. They found an agency that refused to compromise on either.
                        </p>
                        <p className="my-4 max-3xl:mb-6 3xl:my-8 text-base lg:text-sm 3xl:text-base leading-[150%] tracking-[-0.02em]">
                            Distinctive creative. Data-driven process. Undeniable results
                        </p>
                        <StylishButton color='orange' />
                    </div>

                    {/* Right Video */}
                    <div className="lg:w-[50%] h-full flex justify-end items-center">
                        <div className="relative w-full aspect-16/10 max-w-[787px] overflow-hidden rounded-md">
                            <video
                                className="w-full h-full object-cover "
                                src="https://cdn.upthrust.agency/Google%20ads/WiseApp%20Google%20Ads.mp4"
                                // autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                        </div>
                    </div>
                </div>

            </section>

            <div className="bg-black text-white pt-16 3xl:pt-20 mt-10 3xl:mt-16 overflow-hidden" id="creative-library">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: " Press on any of the play buttons " }],
                        },
                        {
                            line: [
                                { type: "normal", text: "to" },
                                { type: "italic", text: "see magic" },
                            ],
                        },
                    ]}
                    label="Our Secret Sauce"
                    subtitle="WARNING: You're about to see the winning formula, take notes"

                />
                <MobileVideos />
            </div>

            <div className="py-16 space-y-10 3xl:space-y-16 3xl:py-20 mt-10 3xl:mt-16 overflow-hidden">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: " The Fastest Way To Get Creative That" }],
                        },
                        {
                            line: [
                                { type: "normal", text: "Actually" },
                                { type: "italic", text: "Builds Your Brand" },
                            ],
                        },
                    ]}
                    label="CASE STUDIES"
                    subtitle="The best teams in the business. Lightning-fast delivery. Total flexibility."
                />
                <FeatureCards />

            </div>



            <div className='space-y-5 lg:space-y-16 3xl:space-y-30 mb-20 3xl:mb-30' id="hear-from-them">
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "Look but don't replay these" },
                            { type: "italic", text: "UGCs" },

                            ],
                        }
                    ]}
                    label="WHY WE ARE DIFFERENT"
                    subtitle="Creatives that gets conversion"
                />
                <UGCVideoCategories />
            </div>

            <div className='space-y-16 3xl:space-y-30 mb-20 3xl:mb-30'>
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: " Live dashboards, real revenue numbers, and the" },

                            ],
                        },
                        {
                            line: [
                                { type: "italic", text: " exact strategies" },
                                { type: "normal", text: " we used to get there." },

                            ],
                        }
                    ]}
                    label="CASE STUDIES"
                    subtitle="We Don't Just Talk—We Show"
                />
                <DashboardStacks />
            </div>

            <div className='space-y-16 3xl:space-y-30 mt-10 3xl:mt-20 mb-40 3xl:mb-50'>
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: "Why Brands Choose " }],
                        },
                        {
                            line: [
                                { type: "italic", text: "Upthrust" },
                                { type: "normal", text: "Over Traditional Agencies" },
                            ],
                        },
                    ]}
                    label="UPTHRUST vs Other Agencies"
                    subtitle="Why Should You Hire Us?"
                />

                <ComparisonTable showCurve={false} rocketBgColor='#0457CB' checkBgColor='#0457CB' />
            </div>

            <MobileTestimonialsSlider
                cardColors={
                    [
                        {
                            bg: 'bg-[#0457CB]',
                            text: "text-white",
                            quote: '#010202',
                            companyNameColor: 'text-white',
                            clientNameColor: 'text-white'
                        },
                        {
                            bg: 'bg-[#E8F3FF]',
                            text: "text-black",
                            quote: '#010202'
                        },
                        {
                            bg: 'bg-[#F6F6F6]',
                            text: "text-black",
                            quote: '#010202'
                        },
                        {
                            bg: 'bg-[#0457CB]',
                            text: "text-white",
                            quote: '#010202',
                            companyNameColor: 'text-white',
                            clientNameColor: 'text-white'
                        },
                    ]
                }
            />

            <div className="max-lg:hidden">

                <SuccessStories cardColors={
                    [
                        {
                            bg: 'bg-[#0457CB]',
                            text: "text-white",
                            quote: '#010202',
                            companyNameColor: 'text-white',
                            clientNameColor: 'text-white'
                        },
                        {
                            bg: 'bg-[#E8F3FF]',
                            text: "text-black",
                            quote: '#010202'
                        },
                        {
                            bg: 'bg-[#F6F6F6]',
                            text: "text-black",
                            quote: '#010202'
                        },
                        {
                            bg: 'bg-[#0457CB]',
                            text: "text-white",
                            quote: '#010202',
                            companyNameColor: 'text-white',
                            clientNameColor: 'text-white'
                        },
                    ]
                } />
            </div>

            <div className='space-y-16 3xl:space-y-30 mb-20 mt-40 3xl:mb-30 3xl:mt-50'>
                <MetaHeading
                    tag="h2"
                    heading={[
                        {
                            line: [{ type: "normal", text: " Everything You Need To Acquire," },

                            ],
                        },
                        {
                            line: [
                                { type: "normal", text: "Convert, And " },
                                { type: "italic", text: "Retain Customers" },

                            ],
                        }
                    ]}
                    label="READY TO BOOK YOUR DEMO"
                />

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
                                    { type: 'highlight', text: 'funnel', bgColor: '#0457CB' },
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
                                    { type: 'highlight', text: 'read', bgColor: '#0457CB' },
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
                                    { type: 'highlight', text: 'growth', bgColor: '#0457CB' },
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
                    <MetaLeadForm showOnlyIframe={true} />
                </div>
            </div>

            <div className='space-y-16 3xl:space-y-30'>
                <MetaHeading
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
                    label="GOT QUESTIONS?/ FAQ'S"
                    subtitle=""
                />
                <FAQ
                    shadow={true}
                    actionCss={{
                        active: "bg-[#0457CB] text-white",
                        default: "bg-[#E8F3FF] text-black/70",
                    }}
                />
            </div>

            <MetaDisclaimer />
            <HomeFooter text1="Request a free consultation." bgColor="#0457CB" text2={{
                desktop: {
                    text1: "WE'LL FIND YOUR WASTED",
                    text2: "AD SPEND. YOU'LL WONDER WHY\n YOU WAITED. LET'S GO.",
                },
                mobile: {
                    text1: "AD SPEND. YOU'LL WONDER WHY YOU WAITED. Let’s go.",
                    text2: "",
                },
            }} />
        </main>
    )
}

export default page