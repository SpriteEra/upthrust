// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const CommunicationScroll = () => {
//     const [activeSection, setActiveSection] = useState(0);
//     const containerRef = useRef(null);
//     const sectionsRef = useRef([]);

//     const sections = [
//         {
//             title: 'Communication & Data',
//             description:
//                 'One dashboard shows every metric that matters: CPA trends, Quality Score, conversion rates, budget pacing. Weekly calls with your account manager. Email anytime 24-hour response guaranteed, not "we\'ll get back to you."',
//             image: '/google-ads/comm1.png',
//         },
//         {
//             title: 'Custom Reporting',
//             description:
//                 "You'll stay up-to-date on campaign progress with weekly updates, bi-weekly calls, and monthly in-depth reports.",
//             image: '/google-ads/comm2.png',
//         },
//         {
//             title: 'Creatives & More',
//             description:
//                 'Ad creatives designed for Performance Max, YouTube, Display, and Demand Gen. We A/B test headlines, visuals, and CTAs to find what converts then scale the winners.',
//             image: '/google-ads/comm3.png',
//         },
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;

//             const containerTop = containerRef.current.getBoundingClientRect().top;
//             const containerHeight = containerRef.current.offsetHeight;
//             const windowHeight = window.innerHeight;

//             // Calculate scroll progress within the container
//             const scrollProgress = -containerTop / (containerHeight - windowHeight);

//             // Determine active section based on scroll progress
//             let newActiveSection = 0;
//             if (scrollProgress > 0.66) {
//                 newActiveSection = 2;
//             } else if (scrollProgress > 0.33) {
//                 newActiveSection = 1;
//             }

//             setActiveSection(newActiveSection);
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Initial check

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div ref={containerRef} className="min-h-[300vh] max-w-[90%] mx-auto py-20">
//             <div className="sticky top-0 h-screen flex items-center">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         {/* Left Side - Image */}
//                         <div className="relative h-[500px] lg:h-[600px] 3xl:h-180">
//                             {sections.map((section, index) => (
//                                 <div
//                                     key={index}
//                                     className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === index ? 'opacity-100' : 'opacity-0'
//                                         }`}
//                                 >
//                                     <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
//                                         <Image
//                                             src={section.image}
//                                             alt={section.title}
//                                             fill
//                                             className="object-contain"
//                                             priority={index === 0}
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Side - Text Sections */}
//                         <div className="space-y-8">
//                             {sections.map((section, index) => (
//                                 <div
//                                     key={index}
//                                     ref={(el) => (sectionsRef.current[index] = el)}
//                                     className="relative"
//                                 >
//                                     <div
//                                         className={`relative pl-6 transition-all duration-500 ${activeSection === index
//                                             ? 'border-l-4 border-blue-600'
//                                             : 'border-l-4 border-gray-300'
//                                             }`}
//                                     >
//                                         {/* Title */}
//                                         <div
//                                             className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-500 ${activeSection === index
//                                                 ? 'text-gray-900'
//                                                 : 'text-gray-400'
//                                                 }`}
//                                         >
//                                             {section.title}
//                                         </div>

//                                         {/* Description */}
//                                         <div
//                                             className={`overflow-hidden transition-all duration-700 ease-in-out ${activeSection === index
//                                                 ? 'max-h-96 opacity-100'
//                                                 : 'max-h-0 opacity-0'
//                                                 }`}
//                                         >
//                                             <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
//                                                 {section.description}
//                                             </p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CommunicationScroll;


'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CommunicationScroll = () => {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef(null);

    const sections = [
        {
            title: 'Communication & Data',
            description:
                'One dashboard shows every metric that matters: CPA trends, Quality Score, conversion rates, budget pacing. Weekly calls with your account manager. Email anytime 24-hour response guaranteed, not "we\'ll get back to you."',
            image: '/google-ads/comm1.png',
        },
        {
            title: 'Custom Reporting',
            description:
                "You'll stay up-to-date on campaign progress with weekly updates, bi-weekly calls, and monthly in-depth reports.",
            image: '/google-ads/comm2.png',
        },
        {
            title: 'Creatives & More',
            description:
                'Ad creatives designed for Performance Max, YouTube, Display, and Demand Gen. We A/B test headlines, visuals, and CTAs to find what converts then scale the winners.',
            image: '/google-ads/comm3.png',
        },
    ];

    useEffect(() => {
        // ❌ Disable scroll effect on mobile
        if (window.innerWidth < 1024) return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top;
            const containerHeight = containerRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollProgress =
                -containerTop / (containerHeight - windowHeight);

            let newActiveSection = 0;
            if (scrollProgress > 0.66) {
                newActiveSection = 2;
            } else if (scrollProgress > 0.33) {
                newActiveSection = 1;
            }

            setActiveSection(newActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ================= MOBILE VIEW ================= */}
            <div className="lg:hidden max-w-[90%] mx-auto py-16 space-y-16">
                {sections.map((section, index) => (
                    <div key={index} className="space-y-6">
                        <h3 className="text-[32px] leading-[130%] tracking-[-0.02em] font-semibold">
                            {section.title}
                        </h3>

                        <p className="text-black text-[20px] leading-[150%] tracking-[-0.02em] font-normal">
                            {section.description}
                        </p>

                        <div className="relative w-full  size-[350px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
            <div
                ref={containerRef}
                className="hidden lg:block min-h-[300vh] max-w-[90%] mx-auto py-20"
            >
                <div className="sticky top-0 h-screen flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Side - Image */}
                            <div className="relative h-[500px] lg:h-[600px] 3xl:h-180">
                                {sections.map((section, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === index
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                            }`}
                                    >
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={section.image}
                                                alt={section.title}
                                                fill
                                                className="object-contain"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Side - Text Sections */}
                            <div className="space-y-8">
                                {sections.map((section, index) => (
                                    <div key={index} className="relative">
                                        <div
                                            className={`relative pl-6 transition-all duration-500 ${activeSection === index
                                                ? 'border-l-4 border-blue-600'
                                                : 'border-l-4 border-gray-300'
                                                }`}
                                        >
                                            <div
                                                className={`text-[32px] lg:text-[40px] 3xl:text-[48px] leading-[130%] tracking-[-0.02em] font-semibold mb-4 transition-colors duration-500 ${activeSection === index
                                                    ? 'text-black'
                                                    : 'text-gray-400'
                                                    }`}
                                            >
                                                {section.title}
                                            </div>

                                            <div
                                                className={`overflow-hidden transition-all duration-700 ease-in-out ${activeSection === index
                                                    ? 'max-h-96 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <p className="text-black text-[20px] 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommunicationScroll;
