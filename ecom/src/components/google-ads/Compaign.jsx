"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Case studies data
const caseStudies = [
    {
        badge: "SaaS",
        title: "We Love No Code",
        description: "Demo costs sat at $450 each. The ‘single keyword ad group’ rebuild cut them to $189 in just 8 weeks.",
        metrics: {
            metric1: { label: "Increase in User Engagement", value: "20%" },
            metric2: { label: "Number of Members", value: "48%" }
        },
        testimonial: {
            name: "Ellie Wilson",
            role: "Founder, No-Code Hub",
            avatar: "/google-ads/compaigns/1.png"
        },
        accentColor: "#2563EB",
        bgColor: "#DBEAFE",
        rightImage: "/google-ads/compaigns/card1.png",
        imageAlt: "No-code platform dashboard interface"
    },
    {
        badge: "B2B",
        title: "Zomato's Business Coolstra",
        description: "We built a conversion-focused landing page, ran demand generation campaigns to re-engage visitors, and deployed video ad sequences to warm leads before they reached the sales team.",
        metrics: {
            metric1: { label: "Boost in Organic Traffic", value: "200%" },
            metric2: { label: "Marketing Qualified Leads", value: "75" }
        },
        testimonial: {
            name: "Iti Dubey",
            role: "Marketing Head, Mukunda Foods",
            avatar: "/google-ads/compaigns/2.png"
        },
        accentColor: "#DC2626",
        bgColor: "#FEE2E2",
        rightImage: "/google-ads/compaigns/card2.png",
        imageAlt: "Zomato business analytics dashboard"
    },
    {
        badge: "Ecommerce",
        title: "L'oréal",
        description: "High acquisition costs blocked L'Oréal's ecommerce growth. We rebuilt audience targeting and optimized Shopping ad feeds. Customer acquisition costs dropped 40% in ten weeks, making profitable scale possible",
        metrics: {
            metric1: { label: "Website Traffic Growth", value: "12%" },
            metric2: { label: "Increase in Sales", value: "12%" }
        },
        testimonial: {
            name: "Sohel Ahmad",
            role: "Marketing Director, L'Oréal India",
            avatar: "/google-ads/compaigns/3.png"
        },
        accentColor: "#CA8A04",
        bgColor: "#FEF3C7",
        rightImage: "/google-ads/compaigns/card3.png",
        imageAlt: "L'Oréal ecommerce platform"
    },
    {
        badge: "B2B SaaS",
        title: "Cycle (YC-19)",
        description: "Deployed multi-format ads (video, carousel, document, message) to boost engagement. Optimized via Smart Bidding and retargeting to lower CPL and increase conversions.",
        metrics: {
            metric1: { label: "Retention Rate", value: "48%" },
            metric2: { label: "Revenue Growth", value: "$320K / 2Mo" }
        },
        testimonial: {
            name: "Nidhi Jain",
            role: "Co-Founder, Cycle",
            avatar: "/google-ads/compaigns/4.png"
        },
        accentColor: "#059669",
        bgColor: "#D1FAE5",
        rightImage: "/google-ads/compaigns/card4.png",
        imageAlt: "Cycle product management dashboard"
    },
    {
        badge: "Manufacturing",
        title: "Vega",
        description: "Built a full-funnel digital lead engine from audience research and LinkedIn demand gen to high-intent landing pages, email outreach, and continuous optimization.",
        metrics: {
            metric1: { label: "Conversion Rate", value: "543+" },
            metric2: { label: "Customer Retention", value: "18%" }
        },
        testimonial: {
            name: "Sarah Mitchell",
            role: "Digital Head, Vega Industries",
            avatar: "/google-ads/compaigns/5.png"
        },
        accentColor: "#2563EB",
        bgColor: "#DBEAFE",
        rightImage: "/google-ads/compaigns/card5.png",
        imageAlt: "Vega ecommerce platform"
    },
    {
        badge: "SaaS",
        title: "Urban Plans",
        description: "We scaled Urban Pitara’s D2C growth using high-intent Google Ads campaigns. Our performance-driven strategy generated qualified demand and improved conversion efficiency.",
        metrics: {
            metric1: { label: "User Adoption Rate", value: "27%" },
            metric2: { label: "Project Efficiency", value: "12%" }
        },
        testimonial: {
            name: "Marcus Thompson",
            role: "Lead Architect, UrbanPlans Inc",
            avatar: "/google-ads/compaigns/6.png"
        },
        accentColor: "#DC2626",
        bgColor: "#FEE2E2",
        rightImage: "/google-ads/compaigns/card6.png",
        imageAlt: "Urban planning software interface"
    }
];

// Individual Case Study Card Component
const CaseStudyCard = ({ data, index, totalCards }) => {
    const cardRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Create smooth spring animations
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    // Scale effect: starts at 0.85, reaches 1 at center, then scales back down
    const scale = useTransform(
        smoothProgress,
        [0, 0.3, 0.6, 1],
        [0.85, 1, 1, 0.95]
    );

    // Opacity effect
    const opacity = useTransform(
        smoothProgress,
        [0, 0.2, 0.7, 1],
        [0.4, 1, 1, 0.6]
    );

    // Y-axis translation for smooth entrance
    const y = useTransform(
        smoothProgress,
        [0, 0.3, 0.7, 1],
        [100, 0, 0, -50]
    );

    // Rotation for subtle tilt effect
    const rotateX = useTransform(
        smoothProgress,
        [0, 0.3, 0.7, 1],
        [5, 0, 0, -2]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity,
                y,
                rotateX,
                position: 'sticky',
                // top: `5rem`,
                zIndex: totalCards + index,
            }}
            className="mb-8 lg:mb-12 top-[5rem] 3xl:top-[8rem]"
        >
            <motion.div
                className="rounded-2xl lg:rounded-3xl 3xl:rounded-[20px] overflow-hidden "
                style={{ backgroundColor: data.bgColor }}
            >
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-10 xl:gap-20  p-2 sm:p-4 lg:p-6 3xl:p-7 min-h-[480px] 3xl:min-h-[500px]">
                    {/* Left Content Section */}
                    <div className="w-full lg:w-[50%]  flex flex-col justify-between pl-2 3xl:pl-3">
                        <div className='3xl:max-w-150 flex flex-col justify-between h-full'>
                            <div>
                                <motion.div
                                // initial={{ opacity: 0, x: -20 }}
                                // animate={isInView ? { opacity: 1, x: 0 } : {}}
                                // transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span
                                        className="inline-block mb-2 lg:mb-3 3xl:mb-4  py-1.5 text-[24px] font-semibold leading-[150%] tracking-[-0.02em] "
                                        style={{
                                            color: 'black'
                                        }}
                                    >
                                        {data.badge}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    // initial={{ opacity: 0, y: 20 }}
                                    // animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    // transition={{ duration: 0.6, delay: 0.4 }}
                                    className=" text-[30px] 3xl:text-[36px] font-semibold leading-[150%] tracking-[-0.02em] text-black"

                                >
                                    {data.title}
                                </motion.h2>

                                <motion.p
                                    // initial={{ opacity: 0, y: 20 }}
                                    // animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    // transition={{ duration: 0.6, delay: 0.5 }}
                                    className="  mb-3 lg:mb-4 3xl:mb-26  text-[18px] 3xl:text-[20px] font-normal leading-[150%] tracking-[-0.02em] text-black"
                                >
                                    {data.description}
                                </motion.p>
                            </div>

                            <div>
                                <motion.div
                                    // initial={{ opacity: 0, y: 30 }}
                                    // animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    // transition={{ duration: 0.6, delay: 0.6 }}
                                    className="grid grid-cols-2 gap-6 mb-8"
                                >
                                    <div className=''>
                                        <p className="text-[18px] font-normal leading-[150%] tracking-[-0.02em] text-black">
                                            {data.metrics.metric1.label}
                                        </p>
                                        <p className="text-[30px] 3xl:text-[36px] font-semibold leading-[130%] tracking-[-0.02em] text-black flex items-center 3xl:mt-1">
                                            {data.metrics.metric1.value}
                                            <span className="text-2xl ml-1 text-red-500">↓</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[18px] font-normal leading-[150%] tracking-[-0.02em] text-black">
                                            {data.metrics.metric2.label}
                                        </p>
                                        <p className="text-[30px] 3xl:text-[36px] font-semibold leading-[130%] tracking-[-0.02em] text-black flex items-center 3xl:mt-1" >
                                            {data.metrics.metric2.value}
                                            <span className="text-2xl ml-1 text-green-500">↑</span>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    // initial={{ opacity: 0, x: -20 }}
                                    // animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    // transition={{ duration: 0.6, delay: 0.7 }}
                                    className="flex items-center gap-4 p-5 rounded-xl"
                                    style={{ backgroundColor: data.accentColor }}
                                >
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                                        {/* {data.testimonial.name.charAt(0)} */}
                                        <Image
                                            height={60}
                                            width={60}
                                            src={data.testimonial.avatar}
                                            alt="Right Section Image"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">
                                            {data.testimonial.name}
                                        </p>
                                        <p className="text-white/80 text-sm">
                                            {data.testimonial.role}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* Right Image Section */}
                    <motion.div
                        // initial={{ opacity: 0, scale: 0.9 }}
                        // animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        // transition={{ duration: 0.7, delay: 0.5 }}
                        className="w-full lg:w-[50%] relative"
                    >
                        {/* Top subtle gradient */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-10" /> */}

                        <Image
                            src={data.rightImage}
                            alt="Right Section Image"
                            fill
                            className="object-cover rounded-[10px]"
                            priority={false}
                        />

                        {/* Accent overlay */}
                        <div
                            className="absolute inset-0 opacity-20 z-10"
                            style={{
                                background: `linear-gradient(135deg, ${data.accentColor}20 0%, transparent 100%)`
                            }}
                        />
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Component
const CompaignCards = () => {
    return (
        <div className="min-h-screen py-16 lg:py-24">
            {/* Case Studies Stack */}
            <div className="max-w-400 3xl:max-w-430 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
                <div className="relative">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            data={study}
                            index={index}
                            totalCards={caseStudies.length}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center"
            >

            </motion.div>
        </div>
    );
};

export default CompaignCards;