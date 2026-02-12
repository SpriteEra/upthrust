'use client';

import React, { useEffect, useRef, useState } from 'react';

const ScrollTextImage = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            title: 'Communication & Data',
            description: 'One dashboard shows every metric that matters: CPA trends, Quality Score, conversion rates, budget pacing. Weekly calls with your account manager. Email anytime 24-hour response guaranteed, not "we\'ll get back to you."',
        },
        {
            title: 'Custom Reporting',
            description: 'Tailored reports that answer your specific business questions. Track what matters to your bottom line, not vanity metrics. Automated delivery on your schedule.',
        },
        {
            title: 'Creatives & More',
            description: 'Fresh ad copy and creative testing every month. A/B testing frameworks that actually improve performance. Creative strategy aligned with your brand voice.',
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress through the section
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Progress from 0 to 1 as user scrolls through section
            const progress = Math.max(0, Math.min(1,
                (windowHeight * 0.5 - sectionTop) / (sectionHeight - windowHeight * 0.5)
            ));

            // Determine active section index
            const index = Math.min(
                sections.length - 1,
                Math.floor(progress * sections.length)
            );

            setActiveIndex(index);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections.length]);

    return (
        <div className="bg-white">
            {/* Spacer before */}
            <div className="h-screen"></div>

            {/* Main Section */}
            <div
                ref={sectionRef}
                className="min-h-[300vh] relative"
            >
                <div className="sticky top-0 h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Left Side - Dashboard */}
                            <div className="order-2 lg:order-1">
                                <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                                    {/* Dashboard Content */}
                                    <div className="relative aspect-video">
                                        {/* Section 0 - Communication & Data */}
                                        <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                                            <CommunicationDashboard />
                                        </div>

                                        {/* Section 1 - Custom Reporting */}
                                        <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                            <ReportingDashboard />
                                        </div>

                                        {/* Section 2 - Creatives & More */}
                                        <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
                                            <CreativesDashboard />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Stacked Titles with Changing Description */}
                            <div className="order-1 lg:order-2">
                                {/* Blue Accent Bar */}
                                <div className="w-1 h-16 lg:h-24 bg-blue-600 mb-6 lg:mb-8"></div>

                                {/* All Titles Stacked */}
                                <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
                                    {sections.map((section, index) => (
                                        <h2
                                            key={index}
                                            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-all duration-500 ${activeIndex === index
                                                    ? 'text-gray-900 opacity-100'
                                                    : 'text-gray-300 opacity-60'
                                                }`}
                                        >
                                            {section.title}
                                        </h2>
                                    ))}
                                </div>

                                {/* Changing Description */}
                                <div className="relative min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
                                    {sections.map((section, index) => (
                                        <p
                                            key={index}
                                            className={`text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed transition-all duration-500 ${activeIndex === index
                                                    ? 'opacity-100 translate-y-0 relative'
                                                    : 'opacity-0 translate-y-4 absolute inset-0'
                                                }`}
                                        >
                                            {section.description}
                                        </p>
                                    ))}
                                </div>

                                {/* Progress Indicator */}
                                <div className="flex gap-2 mt-8">
                                    {sections.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
                                                    ? 'w-12 bg-blue-600'
                                                    : 'w-1.5 bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer after */}
            <div className="h-screen"></div>
        </div>
    );
};

// Dashboard Components
const CommunicationDashboard = () => (
    <div className="w-full h-full bg-white p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 lg:mb-4 pb-2 lg:pb-3 border-b">
            <div className="text-xs lg:text-sm font-semibold text-gray-700">Campaign Performance</div>
            <div className="flex gap-2 text-xs text-gray-500">
                <span className="hidden sm:inline">Last 30 days</span>
                <button className="px-2 lg:px-3 py-1 bg-blue-600 text-white rounded text-xs">Export</button>
            </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-3 lg:mb-4">
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Conversions</div>
                <div className="text-sm lg:text-xl font-bold">1,234</div>
                <div className="text-xs text-green-600">+24.5%</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Conv. Rate</div>
                <div className="text-sm lg:text-xl font-bold">3.42%</div>
                <div className="text-xs text-green-600">+0.8%</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Cost/Conv</div>
                <div className="text-sm lg:text-xl font-bold">$28.73</div>
                <div className="text-xs text-green-600">-8.2%</div>
            </div>
        </div>

        {/* Quality Score and Chart */}
        <div className="flex items-center justify-between mb-3 lg:mb-4">
            <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">CTR Trend (Last 30 Days)</div>
                <div className="flex items-end gap-0.5 lg:gap-1 h-12 lg:h-20">
                    {[35, 42, 38, 48, 44, 52, 48, 56, 52, 60, 56, 65].map((height, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-blue-400 rounded-t"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>
            <div className="ml-4 lg:ml-6">
                <div className="text-xs text-gray-500 mb-2 text-center">Quality Score</div>
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-green-500 bg-green-50 flex items-center justify-center">
                    <span className="text-lg lg:text-2xl font-bold text-green-600">8.5</span>
                </div>
            </div>
        </div>

        {/* Budget Pacing */}
        <div className="bg-gray-50 rounded p-2 lg:p-3">
            <div className="text-xs text-gray-500 mb-2">Budget Pacing (This Week)</div>
            <div className="flex items-end gap-1 h-8 lg:h-12">
                {[68, 72, 70, 76, 74, 82, 80].map((height, i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-t ${i === 6 ? 'bg-blue-600' : 'bg-blue-300'}`}
                        style={{ height: `${height}%` }}
                    />
                ))}
            </div>
        </div>
    </div>
);

const ReportingDashboard = () => (
    <div className="w-full h-full bg-white p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 lg:mb-4 pb-2 lg:pb-3 border-b">
            <div className="text-xs lg:text-sm font-semibold text-gray-700">Custom Reports</div>
            <button className="px-2 lg:px-3 py-1 bg-blue-600 text-white rounded text-xs">View All</button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-3 lg:mb-4">
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Revenue</div>
                <div className="text-sm lg:text-xl font-bold">$156K</div>
                <div className="text-xs text-green-600">+18.3%</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">ROAS</div>
                <div className="text-sm lg:text-xl font-bold">4.2x</div>
                <div className="text-xs text-green-600">+0.7x</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Ad Spend</div>
                <div className="text-sm lg:text-xl font-bold">$37.2K</div>
                <div className="text-xs text-gray-600">±2.1%</div>
            </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-gray-50 rounded p-2 lg:p-3 mb-3 lg:mb-4">
            <div className="text-xs text-gray-500 mb-2">Revenue by Week</div>
            <div className="flex items-end gap-1 lg:gap-2 h-16 lg:h-24">
                {[60, 75, 80, 70, 85, 78, 92].map((height, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-blue-500 rounded-t"
                        style={{ height: `${height}%` }}
                    />
                ))}
            </div>
        </div>

        {/* Channel Performance */}
        <div className="grid grid-cols-2 gap-2 lg:gap-3">
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-2">Top Channels</div>
                <div className="space-y-1 lg:space-y-2">
                    <div className="flex justify-between text-xs">
                        <span>Google Search</span>
                        <span className="font-semibold">$18.4K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span>Display</span>
                        <span className="font-semibold">$12.1K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span>Shopping</span>
                        <span className="font-semibold">$6.7K</span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-2">KPI Status</div>
                <div className="space-y-1 lg:space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>CPA Goal</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>ROAS Target</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>CTR Benchmark</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CreativesDashboard = () => (
    <div className="w-full h-full bg-white p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 lg:mb-4 pb-2 lg:pb-3 border-b">
            <div className="text-xs lg:text-sm font-semibold text-gray-700">Creative Performance</div>
            <button className="px-2 lg:px-3 py-1 bg-blue-600 text-white rounded text-xs">New Test</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-3 lg:mb-4">
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">Active Tests</div>
                <div className="text-sm lg:text-xl font-bold">8</div>
                <div className="text-xs text-blue-600">Running</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">CTR Lift</div>
                <div className="text-sm lg:text-xl font-bold">+32%</div>
                <div className="text-xs text-green-600">vs baseline</div>
            </div>
            <div className="bg-gray-50 rounded p-2 lg:p-3">
                <div className="text-xs text-gray-500 mb-1">New Ads</div>
                <div className="text-sm lg:text-xl font-bold">24</div>
                <div className="text-xs text-gray-600">this month</div>
            </div>
        </div>

        {/* A/B Test Results */}
        <div className="bg-gray-50 rounded p-2 lg:p-3 mb-3 lg:mb-4">
            <div className="text-xs text-gray-500 mb-2">A/B Test Performance</div>
            <div className="space-y-2 lg:space-y-3">
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span>Variant A</span>
                        <span className="font-semibold text-green-600">+28% CTR</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span>Variant B</span>
                        <span className="font-semibold text-blue-600">+18% CTR</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1">
                        <span>Control</span>
                        <span className="font-semibold text-gray-600">Baseline</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Creative Library */}
        <div className="grid grid-cols-3 gap-1 lg:gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded"></div>
            ))}
        </div>
    </div>
);

export default ScrollTextImage;