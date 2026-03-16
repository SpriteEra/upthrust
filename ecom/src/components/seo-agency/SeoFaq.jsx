"use client"
import { useState, useRef } from 'react';

export default function SeoFaq() {
    const [openIndexes, setOpenIndexes] = useState(null);
    const faqRefs = useRef([]);

    const faqs = [
        {
            question: "What is SEO and why does a B2B SaaS company need it?",
            answer:
                "SEO is the practice of getting your product seen in organic search — on Google, Bing, and now AI platforms like ChatGPT and Perplexity — by the right buyers at exactly the right moment. For B2B SaaS it is not about traffic. It is about becoming the trusted answer in your niche, driving demo requests, signups, and lowering your CAC over time. Upthrust builds SEO that feeds pipeline — not vanity metrics."
        },
        {
            question: "Will SEO actually generate demos and MQLs for my SaaS product?",
            answer:
                "Yes — when done correctly. Traditional SEO chases rankings. Upthrust optimises your content to rank on Google, get cited by ChatGPT, and appear in Perplexity AI answers — so you capture buyers at every stage of their research journey, including the late-night ChatGPT session when they are comparing you to three competitors. Our B2B SaaS clients typically see qualified demo requests within 90 days of launch."
        },
        {
            question: "How is Upthrust different from other SEO agencies?",
            answer:
                "Three things set us apart. First, we optimise for six AI platforms — not just Google. Second, we measure success in demos booked and pipeline generated, not just rankings or traffic. Third, we give you real-time AI citation monitoring so you can see exactly when ChatGPT, Claude, or Perplexity recommends your brand — and track it improving month over month."
        },
        {
            question: "What is included in Upthrust's SEO services?",
            answer:
                "Technical SEO setup including AI crawler access (GPTBot, ClaudeBot, PerplexityBot), full schema implementation (FAQPage, HowTo, Article, Organisation), extraction-optimised content strategy, AI citation monitoring, a custom performance dashboard, monthly pipeline-focused reports, weekly account manager calls, and a 24-hour email response guarantee."
        },
        {
            question: "What does onboarding look like — can we start now?",
            answer:
                "Yes. Onboarding takes two weeks. Week 1: full technical audit, AI crawler access review, competitor gap analysis across all six platforms. Week 2: schema deployment, content audit, and quick-win implementation. Your first ChatGPT and Perplexity citations typically appear within 30 days of launch. Full AI visibility usually follows within 90 days."
        },
        {
            question: "How long will it take for SEO to start showing results?",
            answer:
                "First ChatGPT and Perplexity citations: 30 days. Initial ranking improvements on Google: 60–90 days. Measurable demo and MQL impact: 90–120 days. Full SEO compounding — where organic becomes your lowest-CAC channel: 6–12 months. We report on all of these milestones monthly so you always know exactly where you stand."
        },
        {
            question: "How much does SEO cost and what pricing models do you offer?",
            answer:
                "Pricing is scoped to your goals, competitive landscape, and company size. We work with early-stage SaaS founders through to enterprise CMOs. Book a free 30-minute strategy call and we will give you a custom quote with a clear 120-day roadmap — no obligation."
        },
        {
            question: "How is SEO different from SEM (paid search)? Do I need both?",
            answer:
                "SEM buys immediate placement in search results. SEO earns it over time — and compounds. SEO typically delivers 3–5x better ROI over a 12-month period. Most growth-stage B2B SaaS companies benefit from running both: SEM for immediate demos while SEO builds and compounds in the background. We specialise in SEO but can advise on a combined strategy."
        },
        {
            question: "Can you help us rank in AI tools like ChatGPT and Perplexity?",
            answer:
                "Yes — it is our core differentiator. We configure your site for AI crawlers, structure content so AI engines can extract and cite it, and deploy schema markup that increases citation rates by up to 28%. We then monitor citation frequency across ChatGPT, Claude, Perplexity, Google AI Overview, and Gemini every month — so you can see the progress."
        },
        {
            question: "Do you only focus on traffic, or on actual revenue impact?",
            answer:
                "Revenue impact only. Every report we produce is tied to commercial targets: demos booked, MQL conversion rate, pipeline influenced, and cost per acquisition. We deliberately avoid reporting on impressions, session duration, or other vanity metrics unless you specifically ask."
        },
        {
            question: "What link-building strategies do you use for B2B SaaS?",
            answer:
                "We focus on authority-building that your buyers and Google both respect: digital PR, thought leadership placements, partner ecosystem content, and resource-based link acquisition. No link farms, no guest post mills, no paid placements. Every link is earned from publications your buyers actually read — and that AI platforms trust as citation sources."
        },
        {
            question: "Do you work with startups and enterprise SaaS companies?",
            answer:
                "Both. We have worked with pre-Series A founders building their first organic channel from zero, and with CMOs at 500-person companies looking to move beyond paid acquisition dependency. Our approach, reporting, and engagement model scales to fit your team and growth stage."
        }
    ];


    const toggleFAQ = (index) => {
        setOpenIndexes(openIndexes === index ? null : index);
    };


    const renderFAQ = (faq, index) => (
        <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            onClick={() => {
                toggleFAQ(index);
            }}

            className="bg-white rounded-xl 3xl:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-[#e1e1e1] relative min-h-22.5"
        >
            <div className="p-4 md:p-6 md:px-8 max-w-[87%]">
                <div className="flex items-start justify-between gap-4 ">
                    <div className="flex items-start gap-3 flex-1">
                        <p className="font-semibold text-lg lg:text-base 3xl:text-xl tracking-[-0.02em] leading-[150%]">
                            {faq.question}
                        </p>
                    </div>
                    <button
                        title="Show/Hide"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFAQ(index);
                        }}
                        className={`absolute top-1/2 md:top-5 max-md:-translate-y-1/2 3xl:top-7 right-5 3xl:right-7 size-7 3xl:size-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${openIndexes === index
                            ? "bg-[#004FAC] text-white"
                            : "bg-[#0076F0] text-white"
                            }`}
                    >
                        {openIndexes === index ? (
                            <svg
                                className="w-5 h-5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                            </svg>
                        )}
                    </button>

                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndexes === index
                        ? "max-h-96 opacity-100 mt-2 3xl:mt-3"
                        : "max-h-0 opacity-0"
                        }`}

                >
                    <div className="md:pr-8">
                        <p className="text-base lg:text-sm 3xl:text-lg leading-[150%] tracking-[-0.02em]">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex items-center justify-center px-2 md:px-20 mt-6 md:mt-10 3xl:mt-16">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-x-14 3xl:gap-x-10 gap-y-5 md:gap-y-7 3xl:gap-y-6">

                    {/* LEFT COLUMN */}
                    <div className="flex-1 space-y-5 md:space-y-7 3xl:space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 === 0)
                            .map((faq, index) => renderFAQ(faq, index * 2))}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1 space-y-5 md:space-y-7 3xl:space-y-6">
                        {faqs
                            .filter((_, i) => i % 2 === 1)
                            .map((faq, index) => renderFAQ(faq, index * 2 + 1))}
                    </div>

                </div>
            </div>

        </div>
    );
}