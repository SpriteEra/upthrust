
// import Image from 'next/image'
// import React from 'react'
// import CompaignCards from "@/components/google-ads/Compaign";
// import CommonHeading from "@/common/GoogleHeading";
// import CommunicationScroll from "@/components/google-ads/Communication";
// import ClientTestimonials from "@/components/google-ads/ClientTestimonials";
// import AnimatedWord from '@/components/common/AnimatedWord'
// import SeoAgencyHero from '@/components/seo-agency/HeroSection';
// import CircularDesign from '@/components/meta-ads/CircularDesign';
// import AiHelpForClient from '@/components/seo-agency/AiHelpForClient';
// import AnimatedWordWithImage from '@/components/common/AnimateWordWithImage';
// import { Check } from 'lucide-react';
// import SeoFaq from '@/components/seo-agency/SeoFaq';
// import SeoDisclaimer from '@/components/seo-agency/SeoDisclaimer';
// import HomeFooter from '@/components/home/HomeFooter';
// const headingAnimatewords = [
//     { text: 'ChatGPT', color: '#000000' },
//     { text: 'Claude', color: '#000000' },
//     { text: 'Gemini', color: '#000000' },
//     { text: 'Microsoft Copilot', color: '#000000' },
//     { text: 'Meta Ai', color: '#000000' },
//     { text: 'Google Ai Overviews', color: '#000000' },
//     { text: 'Grok', color: '#000000' },

// ];
// const headingAnimateimages = [
//     { src: '/social/chatgpt.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/claude.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/google-black.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/google-black.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/google-black.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/google-ai.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
//     { src: '/social/grok.webp', width: 80, height: 80, wrapperClass: "max-md:size-10 3xl:size-16" },
// ];

// const badges = [
//     { image: "/badges/user-love.webp", alt: "User Love Badge" },
//     { image: "/badges/moment-leader.webp", alt: "Moment Leader Badge" },
//     { image: "/badges/best-roi.webp", alt: "Best Roi Badge" },
//     { image: "/badges/most-implementable.webp", alt: "Most Implementable Badge" },
//     { image: "/badges/high-performer.webp", alt: "High Performer Badge" },
//     {
//         image: "/badges/highest-user-adoption.webp",
//         alt: "Highest User Adoption Badge",
//     },
// ];


// const caseStudies = [
//     {
//         badge: "SaaS",
//         title: "ChatGPT",
//         description: "Demo costs sat at $450 each. The ‘single keyword ad group’ rebuild cut them to $189 in just 8 weeks.",
//         metrics: {
//             metric1: { label: "Cost per Demo Change", value: "20%" },
//             metric2: { label: "Number of Demos", value: "48%" }
//         },
//         testimonial: {
//             name: "Nik",
//             role: "CEO, WLNC",
//             avatar: "/google-ads/compaigns/1.webp",
//             whatsays: "The single keyword ad group rebuild changed everything — demos doubled while spend stayed flat",
//         },
//         accentColor: "#74AA9C",
//         bgColor: "#DEFFF6",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "No-code platform dashboard interface",
//         showArrow: true,
//         cardType: 2,

//     },
//     {
//         badge: "B2B",
//         title: "Google Search",
//         description: "200% more organic traffic and 75 qualified leads every month — without increasing budget",
//         metrics: {
//             metric1: { label: "Boost in Organic Traffic", value: "200%" },
//             metric2: { label: "Marketing Qualified Leads", value: "75" }
//         },
//         testimonial: {
//             name: "Iti Dubey",
//             role: "Marketing Head, Mukunda Foods",
//             avatar: "/google-ads/compaigns/2.webp",
//             whatsays: "We finally have predictable pipeline from SEO. It is not just traffic — it is demos in the calendar.",
//         },
//         accentColor: "#FE2B27",
//         bgColor: "#FFE7E5",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "Mukunda Food dashboard",
//         showArrow: true,
//         cardType: 2,

//     },
//     {
//         badge: "Ecommerce",
//         title: "Google AI Overview",
//         description: "40% lower customer acquisition cost by showing up in Google's AI Overview. ",
//         metrics: {
//             metric1: { label: "CPA decrease", value: "12%" },
//             metric2: { label: "ROAS Increase", value: "12%" }
//         },
//         testimonial: {
//             name: "Steve",
//             role: "Marketing Manager",
//             avatar: "/google-ads/compaigns/3.webp",
//             whatsays: "Customers came in warmer because Google AI had already positioned us as the answer before they clicked.",
//         },
//         accentColor: "#FFB900",
//         bgColor: "#FFE187",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "L'Oréal ecommerce platform",
//         showArrow: true,
//         cardType: 2,

//     },
//     {
//         badge: "B2B SaaS",
//         title: "Perplexity",
//         description: "$320K pipeline in 60 days. Perplexity users converted faster than any other channel.",
//         metrics: {
//             metric1: { label: "Message open rates", value: "48%" },
//             metric2: { label: "Pipeline Built", value: "$320K / 2Mo" }
//         },
//         testimonial: {
//             name: "Nidhi Jain",
//             role: "Co-Founder, Cycle",
//             avatar: "/google-ads/compaigns/4.webp",
//             whatsays: "Perplexity users converted faster than any other channel — they already trusted us before the first call.",
//         },
//         accentColor: "#21808D",
//         bgColor: "#D5EEF1",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "Cycle product management dashboard",
//         showArrow: false,
//         cardType: 2,
//     },
//     {
//         badge: "Manufacturing",
//         title: "Claude",
//         description: "543 qualified leads per month: how a manufacturer became Claude AI's recommended brand",
//         metrics: {
//             metric1: { label: "Qualified Leads Per Month", value: "543+" },
//             metric2: { label: "Boost in Organic Traffic", value: "18%" }
//         },
//         testimonial: {
//             name: "Gaurav",
//             role: "Marketing Manager, Vega",
//             avatar: "/google-ads/compaigns/5.webp",
//             whatsays: "We did not know Claude was referring customers to us until they mentioned it on sales calls.",
//         },
//         accentColor: "#DE7356",
//         bgColor: "#FFEDE8",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "Vega ecommerce platform",
//         showArrow: false,
//         cardType: 2,
//     },
//     {
//         badge: "D2C",
//         title: "Gemini AI",
//         description: "Grew sales 12% while cutting CPA by 27% through Gemini AI visibility",
//         metrics: {
//             metric1: { label: "CPA", value: "27%" },
//             metric2: { label: "Sales Growth", value: "12%" }
//         },
//         testimonial: {
//             name: "Marcus Thompson",
//             role: "Lead Architect, UrbanPlans Inc",
//             avatar: "/google-ads/compaigns/6.webp",
//             whatsays: "We scaled profitably for the first time because the right people found us at the right moment.",
//         },
//         accentColor: "#4796E3",
//         bgColor: "#EAF5FF",
//         rightImage: "/seo/dashboards/dashboard-1.webp",
//         imageAlt: "Urban planning software interface",
//         showArrow: true,
//         cardType: 2,
//     }
// ];

// const CommunicationSectionData = [
//     {
//         title: 'Dashboard',
//         description:
//             'Your custom reporting dashboard shows: AI citation count per platform, keyword position changes, organic traffic vs. demo pipeline, competitor citation comparison, and month-over-month trend for all metrics',
//         image: '/seo/communication-1.webp',
//     },
//     {
//         title: 'Communication',
//         description:
//             "Weekly 30-minute account review calls — not just a slide deck, but a live walkthrough of what changed and what we're doing about it.",
//         image: '/seo/communication-2.webp',
//     },
//     {
//         title: 'Availability',
//         description:
//             "Email directly at any time. 24-hour response guaranteed not 'we'll get back to you within 3 business days.",
//         image: '/seo/communication-3.webp',
//     },
// ];

// const brandsLogo = [
//     { id: 1, src: "/brands/brand-black/urban.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/beyond.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/audio-art.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/mc-overalls.webp", alt: "", customCss: "h-4 md:h-6 3xl:h-7 w-full" },
//     { id: 1, src: "/brands/brand-black/cosco.webp", alt: "", customCss: "h-5 md:h-6 3xl:h-10 w-full" },
//     { id: 1, src: "/brands/brand-black/victoria-secret.webp", alt: "", customCss: "h-14 md:h-16 3xl:h-22 w-full" },
//     { id: 1, src: "/brands/brand-black/velbiom.webp", alt: "", customCss: "h-8 md:h-9 3xl:h-12 w-full" },
//     { id: 1, src: "/brands/brand-black/housr.webp", alt: "", customCss: "h-6 md:h-8 3xl:h-11 w-full" },
//     { id: 1, src: "/brands/brand-black/fab-india.webp", alt: "", customCss: "h-7 md:h-9 3xl:h-12 w-full" },
//     { id: 1, src: "/brands/brand-black/manohar-lal.webp", alt: "", customCss: "h-12 md:h-14 3xl:h-18 w-full" },
//     { id: 1, src: "/brands/brand-black/libas.webp", alt: "", customCss: "h-9 md:h-11 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/qpi-ai.webp", alt: "", customCss: "h-7 md:h-11 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/james-allen.webp", alt: "", customCss: "h-4 md:h-6 3xl:h-8 w-full" },
//     { id: 1, src: "/brands/brand-black/cyble.webp", alt: "", customCss: "h-8 md:h-12 3xl:h-14 w-full" },
//     { id: 1, src: "/brands/brand-black/tata-cliq.webp", alt: "", customCss: "h-8 md:h-10 3xl:h-12 w-full" },
//     { id: 1, src: "/brands/brand-black/tiggle.webp", alt: "", customCss: "h-7 md:h-11 3xl:h-14 w-full" },
//     { id: 1, src: "/brands/brand-black/poker-baazi.webp", alt: "", customCss: "h-8 md:h-10 3xl:h-12 w-full" },
//     { id: 1, src: "/brands/brand-black/ok.webp", alt: "", customCss: "h-9 md:h-12 3xl:h-16 w-full" },
//     { id: 1, src: "/brands/brand-black/mukunda-foods.webp", alt: "", customCss: "h-15 md:h-18 3xl:h-22 w-full" },
//     { id: 1, src: "/brands/brand-black/biba.webp", alt: "", customCss: "h-6 md:h-7 3xl:h-10 w-full" },
// ]
// export const metadata = {
//     title: "SEO Agency That Gets You Found Everywhere | Upthrust",

//     description: "SEO agency helping brands get discovered across Google, AI search and modern discovery channels through structured content systems.",

//     keywords: [
//         "SEO Agency",
//     ],

//     metadataBase: new URL("https://www.upthrust.agency"),

//     alternates: {
//         canonical: "upthrust.agency/seo-agency",
//     },

//     openGraph: {
//         title: "SEO Agency That Gets You Found Everywhere",
//         description: "Build content systems that rank on Google and appear in AI answers across ChatGPT, Claude and Perplexity.",
//         url: "https://www.upthrust.agency",
//         siteName: "Upthrust",
//         images: [
//             {
//                 // url: "/google-ads/ogimg.png",
//                 width: 1200,
//                 height: 630,
//                 alt: "Upthrust – D2C Ecommerce Marketing Agency",
//             },
//         ],
//         type: "website",
//     },

//     twitter: {
//         card: "summary_large_image",
//         title: "Google Ads Agency That Scales Profitably",
//         description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
//         images: ["/google-ads/ogimg.png"],
//     },

//     robots: {
//         index: true,
//         follow: true,
//     }
// };

// const typeOfSeo = [
//     { text: 'CAC' },
//     { text: 'CMP' },
//     { text: 'CPC' }
// ];

// const page = () => {
//     return (
//         <main>
//             <nav className=" bg-white/50 text-black fixed top-0 z-100 backdrop-blur-xs backdrop-saturate-150 w-full flex items-center 3xl:h-[140px] 2xl:h-[105px] xl:h-[100px] sm:h-20 h-19">
//                 <div className="max-sm:px-2.5 w-full sm:max-w-[92%] mx-auto ">
//                     <div className="flex items-center justify-between ">
//                         <div className="shrink-0 ">

//                             <Image src='/logo.png' height={100} width={200} alt="Upthrust agency logo" priority className="h-6 sm:h-7 3xl:h-12 object-contain w-full" />
//                         </div>
//                         <div className='flex items-center gap-5 3xl:gap-6'>
//                             <span className='text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em] max-lg:hidden'>Get light years ahead with <AnimatedWord textCss='font-normal' words={typeOfSeo} className="h-5.5 3xl:h-6.5 w-10.5 3xl:w-12 text-[#FE2B27] mx-auto " />
//                             </span>
//                             <button className='text-lg 3xl:text-xl py-2.5 lg:py-4 3xl:py-5.5 px-6 lg:px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white hover:bg-[#1550A9] transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em] font-normal'>Scale Your Brand</button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <SeoAgencyHero />

//             <div className="mt-16 3xl:mt-16">
//                 <CommonHeading
//                     heading={[
//                         [
//                             { type: "text", value: "What Our " },
//                             {
//                                 type: "highlight",
//                                 value: "Clients",
//                                 bgColor: "bg-[#FFE187]",
//                                 textColor: "text-[#E46800]",
//                                 icon: "/google-ads/icons/new.webp",
//                             },
//                             { type: "text", value: " Say" },
//                         ],

//                     ]}
//                     subtitleCss="mt-2"
//                     subtitle="We Asked One Question: “What Changed?” - Here’s what they said, in their own words."
//                 />
//                 <ClientTestimonials />
//             </div>
//             <div className="bg-[#E7F0FF] text-black py-16 3xl:py-20 my-10 3xl:my-16 " id="why-upthrust">
//                 <div className={`w-full max-sm:px-2 text-center`}>
//                     <h2
//                         className={`font-semibold tracking-[-0.02em] 2xl:tracking-[-0.04em]  leading-[130%] text-[36px] lg:text-[48px] xl:text-[60px] 3xl:text-[72px] capitalize`}
//                     >
//                         <span
//                             className="inline lg:block"
//                         >
//                             <span className={""}>
//                                 Get your
//                             </span> <span className={`inline-flex items-center gap-2 px-5 1800:px-6 py-1 1800:py-1.5 rounded-full capitalize bg-[#004FAC] text-white`} >
//                                 <Image
//                                     src={'/seo/paid.webp'}
//                                     alt="icon"
//                                     width={60}
//                                     height={60}
//                                     className="size-6 xl:size-12 3xl:size-15"
//                                 /> Brand
//                             </span>
//                             <span className={""}>
//                                 {" "}Mentioned By
//                             </span>
//                         </span>
//                         {/* <AnimatedWord images={headingAnimateimages} className="size-6.5 xl:size-9 2xl:size-12 1600:size-15 1800:size-17 mb-3" /> */}

//                         <AnimatedWordWithImage textCss="  font-semibold" images={headingAnimateimages} words={headingAnimatewords} className="h-17 3xl:h-22 w-100 md:w-180 3xl:w-250 text-[#000000] mx-auto font-normal" />
//                     </h2>

//                     <p className={`text-[22px] px-10 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal`}>
//                         We optimize for Google + AI answers so customers find you in ChatGPT, Gemini, Claude & Perplexity too.
//                     </p>
//                 </div>
//                 <CircularDesign bgColor={"#E7F0FF"} mobileImage='/seo/adspent-graph-mobile.webp' desktopImage='/seo/adspent-graph-desktop.webp' />

//             </div>
//             <div className="3xl:my-40 3xl:mt-50 my-20 max-w-[90%] 3xl:max-w-[85%] mx-auto">
//                 <CommonHeading
//                     heading={[
//                         [
//                             { type: "text", value: "How Upthrust Gets You " },
//                             {
//                                 type: "highlight",
//                                 value: "Mentioned",
//                                 bgColor: "bg-[#FFE7E5]",
//                                 textColor: "text-[#FE2B27]",
//                                 icon: "/google-ads/icons/paid3.webp",
//                             },
//                         ],

//                         [
//                             { type: "text", value: " by ChatGPT, Claude & Perplexity" },

//                         ],

//                     ]}
//                     subtitle={`We don't just rank you on Google. We get you cited by AI engines where 527% of new traffic is coming from. \nHere's our systematic approach:`}
//                     subtitleCss='3xl:max-w- text-center mx-auto  whitespace-pre-line'
//                 />

//                 <AiHelpForClient />

//             </div>
//             <div className="1800:mb-20 1600:mt-60 1800:mt-80 my-20">
//                 <CommonHeading

//                     heading={[
//                         [
//                             { type: "text", value: "We build content systems" },

//                         ],

//                         [
//                             { type: "text", value: "that " },
//                             {
//                                 type: "highlight",
//                                 value: "win",
//                                 bgColor: "bg-[#E7F0FF]",
//                                 textColor: "text-[#0076F0]",
//                                 icon: "/seo/ads_click.webp",
//                             },
//                             { type: "text", value: " deals " },

//                         ],

//                     ]}
//                 />
//                 <CompaignCards caseStudies={caseStudies} />
//             </div>

//             <CommunicationScroll sections={CommunicationSectionData} />

//             <div className="my-20 sm:my-30 3xl:mb-70 3xl:mt-20 text-center">
//                 <h3 className="text-[18px] px-10 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal lg:font-semibold max-sm:max-w-70 mx-auto ">We&apos;re the highest-rated <span className="font-semibold">Google Ads</span> agency</h3>
//                 {/* BADGES ROW */}
//                 <div className="flex mt-10 3xl:mt-12 flex-wrap gap-3 sm:gap-6 md:gap-10 w-full items-center justify-center">
//                     {badges.map((item, index) => (
//                         <Image
//                             key={index}
//                             width={164}
//                             height={164}
//                             alt={item.alt}
//                             src={item.image}
//                             className="w-12 sm:w-18 md:w-24 3xl:w-41 h-full object-contain"
//                         />
//                     ))}
//                 </div>
//             </div>

//             <div className="mt-13 md:mt-16 3xl:my-16 3xl:mb-60 max-w-[90%] 3xl:max-w-[85%] mx-auto">
//                 <CommonHeading
//                     heading={[
//                         [
//                             { type: "text", value: "Brands That Rank. " },
//                         ],
//                         [{
//                             type: "highlight",
//                             value: "Businesses",
//                             bgColor: "bg-[#C8EBD6]",
//                             textColor: "text-[#00822E]",
//                             icon: "/google-ads/icons/paid2.webp",
//                         },
//                         { type: "text", value: " That Grow." },]

//                     ]}
//                     subtitleCss="max-w-3xl mx-auto"
//                     subtitle=" We've partnered with India's most ambitious brands to drive organic traffic, leads, and revenue."
//                 />

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-[#D7D7D7] my-16">

//                     {brandsLogo.map((logo, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center justify-center h-[130px] md:h-[140px] 3xl:h-50 border-[0.5px] border-[#D7D7D7]"
//                         >
//                             <div className={`${logo.customCss}`}>

//                                 <Image
//                                     width={100}
//                                     height={100}
//                                     src={logo.src}
//                                     alt="brand"
//                                     className="w-full h-full object-contain"
//                                 />
//                             </div>
//                         </div>
//                     ))}


//                 </div>
//             </div>

//             <div className="3xl:my-30 my-30 md:my-50 max-w-[90%] 3xl:max-w-[85%] mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-16 items-center">

//                     {/* LEFT CONTENT */}
//                     <div>

//                         <h5 className="text-4xl 3xl:text-5xl font-semibold leading-[130%] tracking-[-0.02em]">
//                             Get your free <AnimatedWord textCss='font-semibold' words={typeOfSeo} className="h-8 3xl:h-11 3xl:mb-2 w-20 3xl:w-27 text-[#FE2B27] mx-auto max-3xl:mb-1 " /> Report today
//                         </h5>

//                         <p className="text-xl 3xl:text-2xl leading-[130%] tracking-[-0.02em] max-w-md 3xl:max-w-lg">
//                             Discover how your brand performs on answer engines — and uncover
//                             the opportunities to outpace the competition
//                         </p>

//                         <button className="mt-10 md:mt-4 3xl:mt-6 text-lg 3xl:text-xl py-2.5 lg:py-4 3xl:py-5.5 px-6 lg:px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white hover:bg-[#1550A9] transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em] font-normal">
//                             Analyze my brand
//                         </button>

//                         <div className="mt-6">

//                             <h6 className="text-2xl 3xl:text-[30px] leading-[130%] tracking-[-0.02em] font-semibold">
//                                 Get insights into:
//                             </h6>

//                             <div className="mt-5 md:mt-6 space-y-4 md:pl-7 md:border-l-[1.5px]  ">

//                                 {[
//                                     "AI Visibility",
//                                     "Source Citations",
//                                     "Brand Sentiment",
//                                     "Content AEO",
//                                 ].map((item, index) => (
//                                     <div key={index} className="flex items-center gap-3 3xl:gap-5">
//                                         <Check size={20} className='size-5 3xl:size-7 bg-[#0076F0] p-1 text-white rounded-full' />
//                                         <p className="text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em]">{item}</p>
//                                     </div>
//                                 ))}

//                             </div>
//                         </div>

//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className="w-full">
//                         <img
//                             src="/seo/seo-analytics-dashboard.webp"
//                             alt="SEO Analytics Dashboard"
//                             className="w-full h-auto rounded-tl-xl border-t border-l border-[#DADADA]"
//                         />
//                     </div>

//                 </div>
//             </div>

//             <div className="my-10 3xl:mt-60">
//                 <CommonHeading
//                     heading={[
//                         [
//                             { type: "text", value: "Frequently Asked " },
//                             {
//                                 type: "highlight",
//                                 value: "Questions",
//                                 bgColor: "bg-[#FFE187]",
//                                 textColor: "text-[#E46800]",
//                                 icon: "/google-ads/icons/contact_support.webp",
//                             },

//                         ],
//                     ]}
//                 />
//                 <SeoFaq />
//             </div>

//             <div>
//                 <SeoDisclaimer />
//                 <HomeFooter text1="SEO  Agency" bgColor="#0076F0" text2={{
//                     desktop: {
//                         text1: "YOUR SEO GROWTH STARTS HERE.",
//                         text2: "OUR STRATEGY GETS YOU RANKING FASTER.\n MORE TRAFFIC. MORE LEADS. NO GUESSWORK.",
//                     },
//                     mobile: {
//                         text1: "YOUR SEO GROWTH STARTS HERE. OUR STRATEGY GETS YOU RANKING FASTER. MORE TRAFFIC. MORE LEADS. NO GUESSWORK.",
//                         text2: "",
//                     },
//                 }} />
//             </div>

//         </main>
//     )
// }

// export default page