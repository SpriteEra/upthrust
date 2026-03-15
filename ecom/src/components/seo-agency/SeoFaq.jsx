"use client"
import { useState, useRef } from 'react';

export default function SeoFaq() {
    const [openIndexes, setOpenIndexes] = useState(null);
    const faqRefs = useRef([]);

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
            answer: "Our Google Ads Agency have extensive experience in various industries. If you’re in SaaS, lead generation, eCommerce, or pretty much anything else, we can almost certainly help. Just check out the published case studies above (we have over 200) for more info."
        },
        {
            question: "How do I choose a Google Ads agency?",
            answer: "When you need help finding a Google Ads agency (formerly Adwords agency) there are several important considerations to make. First, keep in mind that Google Ads is a well-established, and competitive, marketing channel within digital advertising. There are so many agencies to choose from that many have specialized in specific industries. Find a relevant digital marketing agency that has a strong track record of consistent wins and search campaign case studies within your industry, no need to go in-house, trust us. Also, be sure to ask for recent references. Take advantage of the Google Partners program that has vetted the best agencies in order to vouch for its members."
        },
        {
            question: "How does Google Ads work?",
            answer: "Google Ads, formerly known as Google Adwords, is a popular Pay-per-click (PPC) online advertising method.\n When you advertise with Google Ads, you attempt to show your ad in Google’s search engine (particularly to your target audiences). It is known as PPC because you pay for each visit to your website. The cost of each click depends on two important elements: how competitive the keyword is (we do the keyword research for you) and how relevant your landing page design is to the search query.\nWhen you write good ads that lead to a quality website, the cost-per-click (CPC), as well as an auction bid, costs less. You can manage the amount you want to spend on a daily, weekly, monthly, or lifetime basis. \nCreating an efficient Google Ads program can have a significant impact on business growth as users continue to go to Google to answer their questions. Google Ads has strong integration with Google Analytics and the rest of Google’s suite of tools."
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
            question: "How can I measure the performance of my Google Ads campaign? ",
            answer: "Google has enhanced reporting for its ad campaigns, which gives advertisers the ability to see the leads and overall revenue generated from their ad spend. Upthrust uses these tools to understand which campaigns are generating the highest return on ad spend for their client’s campaigns with the end goal of optimizing campaigns to produce the highest ROI. Upthrust also harnesses the power of Offline Conversions to show and optimize for sales that happen after the initial click for client’s with longer sales cycles."
        },
        {
            question: "What are the latest updates in Google Ads?",
            answer: "Google has introduced multiple AI-powered features to enhance its advertising platform. Key updates include Performance Max (PMax), which leverages AI to dynamically optimize ad performance across various Google channels. Another major update is the integration of Demand Gen campaigns, designed to reach users through visually immersive formats like YouTube and non-search channels. Upthrust continues to be a leader in the industry by continually testing out these new updates and finding the best avenues to deploy them for their clients."
        },
        {
            question: "What ad formats & placement are available?",
            answer: "Google has expanded ad placements significantly in recent years but many placements have been consistent over the years. This includes Google Search, Google Shopping, the Google Display Network, Gmail, Google Maps and Youtube amongst others. In addition to these, shopping ads can now appear in Google Lens and Circle to Search, offering a more visual search experience. In addition, Search and Shopping ads can show up in the new AI Overviews, appearing in the U.S. as “sponsored” sections when relevant to user queries. For video content, advertisers can now include short-form product videos and animated image ads, which is highly effective for Youtube Shorts."
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