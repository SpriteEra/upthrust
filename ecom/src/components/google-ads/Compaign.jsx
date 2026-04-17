"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Case studies data
const defaultCaseStudies = [
    {
        badge: "SaaS",
        title: "We Love No Code",
        description: "Demo costs sat at $450 each. The ‘single keyword ad group’ rebuild cut them to $189 in just 8 weeks.",
        metrics: {
            metric1: { label: "Cost per Demo Change", value: "20%" },
            metric2: { label: "Number of Demos", value: "48%" }
        },
        testimonial: {
            name: "Nik",
            role: "CEO, WLNC",
            avatar: "/google-ads/compaigns/1.webp"
        },
        accentColor: "#0076F0",
        bgColor: "#E7F0FF",
        rightImage: "/google-ads/compaigns/card1.webp",
        imageAlt: "No-code platform dashboard interface",
        showArrow: true

    },
    {
        badge: "B2B",
        title: "Zomato's Business Coolstra",
        description: "We built a conversion-focused landing page, ran demand generation campaigns to re-engage visitors, and deployed video ad sequences to warm leads before they reached the sales team.",
        metrics: {
            metric1: { label: "Boost in Organic Traffic", value: "200%", showUpArrow: true },
            metric2: { label: "Marketing Qualified Leads", value: "75" }
        },
        testimonial: {
            name: "Iti Dubey",
            role: "Marketing Head, Mukunda Foods",
            avatar: "/google-ads/compaigns/2.webp"
        },
        accentColor: "#FE2B27",
        bgColor: "#FFE7E5",
        rightImage: "/google-ads/compaigns/card2.webp",
        imageAlt: "Zomato business analytics dashboard",
        showArrow: true

    },
    {
        badge: "Ecommerce",
        title: "L’oreal",
        description: "High acquisition costs blocked L'Oréal's ecommerce growth. We rebuilt audience targeting and optimized Shopping ad feeds. Customer acquisition costs dropped 40% in ten weeks, making profitable scale possible",
        metrics: {
            metric1: { label: "CPA decrease", value: "12%" },
            metric2: { label: "ROAS Increase", value: "12%" }
        },
        testimonial: {
            name: "Steve",
            role: "Marketing Manager",
            avatar: "/google-ads/compaigns/3.webp"
        },
        accentColor: "#FFB900",
        bgColor: "#FFE187",
        rightImage: "/google-ads/compaigns/card3.webp",
        imageAlt: "L'Oréal ecommerce platform",
        showArrow: true

    },
    {
        badge: "B2B SaaS",
        title: "Cyble (YC-19)",
        description: "Deployed multi-format ads (video, carousel, document, message) to boost engagement. Optimized via Smart Bidding and retargeting to lower CPL and increase conversions.",
        metrics: {
            metric1: { label: "Message open rates", value: "48%" },
            metric2: { label: "Pipeline Built", value: "$320K / 2Mo" }
        },
        testimonial: {
            name: "Raj Intha",
            role: "Global Marketing Director, Cyble",
            avatar: "/google-ads/compaigns/4.webp"
        },
        accentColor: "#00822E",
        bgColor: "#C8EBD6",
        rightImage: "/google-ads/compaigns/card4.webp",
        imageAlt: "Cycle product management dashboard",
        showArrow: false
    },
    {
        badge: "Manufacturing",
        title: "Vega",
        description: "Built a full-funnel digital lead engine from audience research and LinkedIn demand gen to high-intent landing pages, email outreach, and continuous optimization.",
        metrics: {
            metric1: { label: "Qualified Leads Per Month", value: "543+" },
            metric2: { label: "Boost in Organic Traffic", value: "18%" }
        },
        testimonial: {
            name: "Gaurav",
            role: "Marketing Manager, Vega",
            avatar: "/google-ads/compaigns/5.webp"
        },
        accentColor: "#0076F0",
        bgColor: "#E7F0FF",
        rightImage: "/google-ads/compaigns/card5.webp",
        imageAlt: "Vega ecommerce platform",
        showArrow: false
    },
    {
        badge: "D2C",
        title: "Urban Pitara",
        description: "We scaled Urban Pitara’s D2C growth using high-intent Google Ads campaigns. Our performance-driven strategy generated qualified demand and improved conversion efficiency.",
        metrics: {
            metric1: { label: "CPA", value: "27%" },
            metric2: { label: "Sales Growth", value: "12%" }
        },
        testimonial: {
            name: "Vishav Sharma",
            role: "Founder, Urban Pitara",
            avatar: "/google-ads/compaigns/6.webp"
        },
        accentColor: "#FE2B27",
        bgColor: "#FFE7E5",
        rightImage: "/google-ads/compaigns/card6.webp",
        imageAlt: "Urban planning software interface",
        showArrow: true
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
            className="top-20 md:top-30 2xl:top-35 3xl:top-50"
        >
            <motion.div
                className="rounded-xl max-md:rounded-b-none md:rounded-2xl lg:rounded-3xl 3xl:rounded-[20px] overflow-hidden "
                style={{ backgroundColor: data.bgColor }}
            >
                <div className={`flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-10 xl:gap-20 md:p-4 lg:p-6 3xl:p-7 ${data?.cardType === 2 ? "min-h-[500px] 3xl:min-h-[440px] " : "min-h-[500px] 3xl:min-h-[640px]"}  `}>
                    {/* Left Content Section */}
                    <div className="w-full lg:w-[50%]  flex flex-col justify-between p-3 md:pl-2 3xl:pl-3">
                        <div className='3xl:max-w-150 flex flex-col justify-between h-full'>
                            <div>
                                <motion.div

                                >
                                    <span
                                        className="inline-block mb-2 lg:mb-3 3xl:mb-4  py-1.5 text-2xl font-semibold leading-[150%] tracking-[-0.02em] "
                                        style={{
                                            color: 'black'
                                        }}
                                    >
                                        {data.badge}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    className={` text-[30px] 3xl:text-[36px] font-semibold leading-[130%] tracking-[-0.02em] text-black ${data?.cardType === 2 ? "mb-1 md:mb-1 lg:mb-2 3xl:mb-3" : ""}`}

                                >
                                    {data.title}
                                </motion.h2>

                                <motion.p

                                    className={`${data?.cardType === 2 ? "mb-6 md:mb-3 lg:mb-2 3xl:mb-8" : "mb-6 md:mb-3 lg:mb-26 3xl:mb-5"} text-[18px] 3xl:text-[20px] font-normal leading-[150%] tracking-[-0.02em] text-black`}
                                >
                                    {data.description}
                                </motion.p>
                            </div>

                            <div>
                                <motion.div

                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8"
                                >
                                    <div className=''>
                                        <p className="text-lg 3xl:text-xl font-normal leading-[150%] tracking-[-0.02em] text-black">
                                            {data.metrics.metric1.label}
                                        </p>
                                        <p className="text-[30px] 3xl:text-[36px] font-semibold leading-[130%] tracking-[-0.02em] text-black flex items-center 3xl:mt-1">
                                            {data.metrics.metric1.value}
                                            {data.showArrow &&

                                                <span className={data.metrics.metric1.showUpArrow ? "text-2xl font-light ml-1 text-green-500" : "text-2xl font-light ml-1 text-red-500"}> {data.metrics.metric1.showUpArrow ? "↑" : "↓"}</span>
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg 3xl:text-xl font-normal leading-[150%] tracking-[-0.02em] text-black">
                                            {data.metrics.metric2.label}
                                        </p>
                                        <p className="text-[30px] 3xl:text-[36px] font-semibold leading-[130%] tracking-[-0.02em] text-black flex items-center 3xl:mt-1" >
                                            {data.metrics.metric2.value}
                                            {data.showArrow &&

                                                <span className="text-2xl font-light ml-1 text-green-500">↑</span>
                                            }
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div

                                    className="flex items-center flex-col gap-2 p-3 md:p-5 rounded-lg max-sm:rounded-b-none md:rounded-xl"
                                    style={{ backgroundColor: data.accentColor }}
                                >
                                    {
                                        data.testimonial?.whatsays &&
                                        <p className="text-white text-xl md:text-base 3xl:text-xl leading-[150%] tracking-[-0.02em]">
                                            {data.testimonial.whatsays}
                                        </p>
                                    }
                                    <div className='flex items-center w-full gap-4'>
                                        <div className="w-15 h-15 rounded-full overflow-hidden bg-white/20 flex items-center justify-center text-white font-bold text-lg">
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
                                            <p className="text-white font-semibold text-xl md:text-lg 3xl:text-2xl leading-[150%] tracking-[-0.02em]">
                                                {data.testimonial.name}
                                            </p>
                                            <p className="text-white text-lg 3xl:text-xl leading-[150%] tracking-[-0.02em]">
                                                {data.testimonial.role}
                                            </p>
                                        </div>

                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* Right Image Section */}
                    <motion.div className="w-full lg:w-[50%] relative h-[230px] sm:h-[350px] md:h-[400px] lg:h-auto">
                        <Image
                            src={data.rightImage}
                            alt="Right Section Image"
                            fill
                            className="object-cover rounded-[10px]"
                        />
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Component
const CompaignCards = ({ caseStudies = defaultCaseStudies }) => {
    return (
        <div className="min-h-screen py-16 lg:py-24">
            {/* Case Studies Stack */}
            <div className="max-w-400 3xl:max-w-430 mx-auto px-2.5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
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


        </div>
    );
};

export default CompaignCards;