"use client"
import { Info } from 'lucide-react';
import { useState, useRef } from 'react';

export default function GoogleFaq() {
    const [openIndexes, setOpenIndexes] = useState(null);
    // const [openIndex, setOpenIndex] = useState(null);
    const [blinkIndex, setBlinkIndex] = useState(null);
    const faqRefs = useRef([]);

    // const faqs = [
    //     {
    //         question: "How do you handle rising CAC (Customer Acquisition Costs)?",
    //         answer: "CAC is now ₹31,000+ in competitive categories. We combat this through creative diversification (testing 20+ variants monthly), multi-platform strategies (not just Meta), first-party data collection, and email/SMS for repeat purchases. Most brands see CAC drop 30-50% within 90 days through our testing framework."
    //     },
    //     {
    //         question: "What makes Upthrust different from other D2C agencies?",
    //         answer: "We don't just run ads—we build growth systems. Our approach: relentless testing, radical transparency (no vanity metrics), and revenue obsession. We've scaled D2C brands across 7+ countries and bring learnings from ₹100Cr+ in managed ad spend. Every campaign is built to boost your bottom line, not impressions."
    //     },
    //     {
    //         question: "What's your minimum budget and pricing structure?",
    //         answer: `
    //             <b>Packages:</b>
    //             <ul>
    //                 <li><b>Base:</b> ₹39.5K/month (fixed)</li>
    //                 <li><b>Starter:</b> ₹55.5K/month + 9% ad spend</li>
    //                 <li><b>Scale:</b> ₹85.5K/month + 3% ad spend</li>
    //                 <li><b>Dominate:</b> ₹1.25L/month + 5% ad spend</li>
    //             </ul>
    //             <p></br/>For meaningful results, we recommend <b>₹8-12L+ monthly ad spend</b> to generate enough data for optimization .</p>
    //             `
    //     },
    //     {
    //         question: "How do you tackle iOS 14+ tracking and attribution challenges?",
    //         answer: "We've cracked this for dozens of brands. Our solution: server-side tracking (CAPI), multi-touch attribution platforms (Triple Whale, Northbeam), first-party data strategies, creative volume testing, and blended ROAS analysis. We focus on true business impact, not just platform-reported numbers."
    //     },
    //     {
    //         question: "Can you help scale while maintaining profitability?",
    //         answer: "Absolutely. Scaling without burning cash is our specialty. We balance new customer acquisition with retention (email/SMS driving 25-40% of revenue), optimize unit economics at every stage, implement cohort analysis for LTV prediction, and kill unprofitable channels fast. Growth means nothing if margins disappear."
    //     },
    //     {
    //         question: "How long does it take to see actual results?",
    //         answer: `
    //             <b>Realistic timeline:</b>
    //             <ul>
    //                 <li><b>0-30 days:</b> Testing phase, baseline establishment</li>
    //                 <li><b>30-90 days:</b> Optimization, visible improvements in ROAS/CAC</li>
    //                 <li><b>90-180 days:</b> Fully optimized growth engine, predictable scaling</li>
    //             </ul>
    //             <p></br/>Brands with strong product-market fit often see positive ROAS by day 30-45. But sustainable growth takes 3-6 months of continuous optimization.</p>
    //             `
    //     },
    //     {
    //         question: "How do you help D2C brands stand out in saturated markets?",
    //         answer: "Competition is brutal—we get it. Our differentiation playbook: competitor creative analysis, unique positioning angles, creator-led content (UGC/influencer), platform diversification (Meta + Google + TikTok), conversion rate optimization, and obsessive A/B testing. We find what makes you different and amplify it."
    //     },
    //     {
    //         question: "Do you handle both acquisition AND retention?",
    //         answer: "Yes—both are critical. <b>Acquisition</b>: Paid media across Meta, Google, TikTok, Pinterest. <br/><b>Retention:</b> Email/SMS automation (welcome, cart abandonment, win-back), loyalty programs, referral systems, and post-purchase optimization. Winning D2C brands master both."
    //     },
    //     {
    //         question: "What results can we realistically expect?",
    //         answer: `
    //             Based on our D2C portfolio:
    //             <ul>
    //                 <li><b>29-78% reduction in CAC</b> (creative + targeting optimization)</li>
    //                 <li><b>2-4x increase in ROAS</b> within 90 days</li>
    //                 <li><b>15-50% conversion rate improvements</b> (landing page optimization)</li>
    //                 <li><b>25-40% revenue from email/SMS </b> (retention)</li>
    //             </ul>
    //             <p></br/>Results depend on product-market fit, competitive landscape, and budget.</p>
    //             `
    //     },
    //     {
    //         question: "How do we get started with Upthrust?",
    //         answer: `
    //             <b>Simple 3-step process: </b>
    //             <ul>
    //                 <li><b>Free Strategy Call:</b> (creative + targeting optimization)</li>
    //                 <li><b>Choose your package:</b> within 90 days</li>
    //                 <li><b>Launch in 2-3 Weeks:</b> (landing page optimization)</li>
    //             </ul>
    //             `
    //     }
    // ];


    const faqs = [
        {
            question: "Do I own every ad and video, even if I leave?",
            answer: "Absolutely (and thank you for the compliment). All the data, images, words, videos, jingles. Anything we put together to meet your goals is yours to keep. Whether you stay with us or move on to work with someone else."
        },
        {
            question: "How often will you send updates of our PPC campaigns?",
            answer: "Our PPC agency have reporting tools and structures to match your needs. Check as often as you like with our custom dashboard. Or let us send regular reports with all the most important information."
        },
        {
            question: "Does Google advertising work for my niche?",
            answer: "Our Google Ads Agency have extensive experience in various industries. If you're in SaaS, lead generation, eCommerce, or pretty much anything else, we can almost certainly help. Just check out the published case studies above (we have over 200) for more info."
        },
        {
            question: "How do I choose a Google Ads agency?",
            answer: "When you need help finding a Google Ads agency (formerly Adwords agency) there are several important considerations to make. First, keep in mind that Google Ads is a well-established, competitive marketing channel within digital advertising. There are so many agencies to choose from that may have specialized in specific industries. Find a relevant digital marketing agency that has a strong track record of consistent wins and search campaign case studies within your industry, no need to go in-house, trust us. Also, be sure to ask for recent references. Take advantage of the Google Partners program that has vetted the best agencies in order to vouch for its members."
        },
        {
            question: "How does Google Ads work?",
            answer: "Google Ads, formerly known as Google Adwords, is a popular Pay-per-click (PPC) online advertising method. When you advertise with Google Ads, you attempt to show your ad in Google’s search engine (particularly to your target audiences). It is known as PPC because you pay for each visit to your website. The cost of each click depends on two important elements: how competitive the keyword is (we do the keyword research for you) and how relevant your landing page design is to the search query. When you write good ads that lead to a quality website, the cost-per-click (CPC), as well as an auction bid, costs less. You can manage the amount you want to spend on a daily, weekly, monthly, or lifetime basis. Creating an efficient Google Ads program can have a significant impact on business growth as users continue to go to Google to answer their questions. Google Ads has strong integration with Google Analytics and the rest of Google’s suite of tools."
        },
        {
            question: "Do I have to sign a long-term contract?",
            answer: "We’re not a baseball team trying to lock you into a long-term contract. But when it makes sense (like when we’re working on really big goals), we’ll ask for a larger commitment. Because it protects us both. When you do your free consultation we can talk through the details."
        },
        {
            question: "What is your fee structure? Is it based on ad spend?",
            answer: "We use a few different pricing models to make sure you’re getting the most out of our services. And to make sure that we can still feed our staff. Turns out, they like to eat."
        },
        {
            question: "How does Upthrust produce great result with Google Ads?",
            answer: "With Upthrust, there are no templates or cookie cutter plans, every single client gets their own campaign strategy customized to their business based on many points of research and planning whether their goal is to generate leads or generate sales. We take into account the target audience, relevant keywords, geographic locations, and more when crafting this approach to tailor each campaign for the business. We are also continually testing new strategies and are on the lookout for new experiments to consistently improve and innovate."
        },
        {
            question: "How can I measure the performance of my Google Ads campaign?",
            answer: "Google has enhanced reporting for its ad campaigns, which gives advertisers the ability to see the leads and overall revenue generated from their ad spend. Upthrust uses these tools to understand which campaigns are generating the highest return on ad spend for their client’s campaigns with the end goal of optimizing campaigns to produce the highest ROI. Upthrust also harnesses the power of Offline Conversions to show and optimize for sales that happen after the initial click for client’s with longer sales cycles."
        },
        {
            question: "What are the latest updates in Google Ads?",
            answer: "Google has introduced multiple AI-powered features to enhance its advertising platform. Key updates include Performance Max (PMax), which leverages AI to dynamically optimize ad performance across various Google channels. Another major update is the integration of Demand Gen campaigns, designed to reach users through visually immersive formats like YouTube and non-search channels. Upthrust continues to be a leader in the industry by continually testing out these new updates and finding the best avenues to deploy them for their clients."
        },
        {
            question: "What ad formats & placement are available?",
            answer: "Google has expanded ad placements significantly in recent years but many placements have been consistent over the years. This includes Google Search, Google Shopping, the Google Display Network, Gmail, Google Maps and YouTube amongst others. In addition to these, shopping ads can now appear in Google Lens and Circle to Search, offering a more visual search experience. In addition, Search and Shopping ads can show up in the new AI Overviews, appearing in the U.S. as “sponsored” sections when relevant to user queries. For video content, advertisers can now include short-form product videos and animated image ads, which is highly effective for YouTube Shorts."
        },
        {
            question: "Can I add new services throughout our partnership?",
            answer: "Of course! Want to add social media marketing services? We got you. Interested in leveling up your email marketing program? It’s a good thing we’re an email agency, too (and we have the insight on the types of email marketing in the digital world). We’re here to help you level up your marketing and reach your target audiences from every channel."
        },
        {
            question: "Do you prefer to create new accounts or use the ones I already have?",
            answer: "We leave that up to you. But, given the choice, we like to stick with the accounts you have open already."
        },
        {
            question: "What about extra fees?",
            answer: "No thanks. We get paid really well because we deliver amazing results. Not because we squeeze every penny out of our clients."
        }
    ];


    const toggleFAQ = (index) => {
        setOpenIndexes(openIndexes === index ? null : index);
    };



    const handleFAQClick = (e, index) => {


        // If FAQ is closed and click is on the div (not button), show blink
        if (!(openIndexes === index)) {
            // setBlinkIndex(index);
            setTimeout(() => setBlinkIndex(null), 600);
        }
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
                        <p className="font-semibold text-lg lg:text-base 3xl:text-xl tracking-[-0.02em]">
                            {faq.question}
                        </p>
                    </div>
                    <button
                        title="Show/Hide"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFAQ(index);
                        }}
                        className={`absolute top-5 3xl:top-7 right-5 3xl:right-7 
  size-10 rounded-full flex items-center justify-center 
  transition-all duration-300 ease-in-out
  ${openIndexes === index
                                ? "bg-[#004FAC] text-white"
                                : "bg-gray-200 text-black"
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
                    <div className="md:pr-10">
                        <p className="text-base lg:text-sm 3xl:text-base leading-relaxed" dangerouslySetInnerHTML={{
                            __html: faq.answer || "Content coming soon..."
                        }}>
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