"use client";

import PerfromanceHeading from "@/common/PerformanceHeading";
import { ArrowRight } from "lucide-react";

export default function AdReview() {
    return (
        <section className=" py-20">
            <div className="max-w-[80%] 3xl:max-w-[1300px] mx-auto px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:justify-between gap-10">

                    {/* Left Content */}
                    <div>
                        <PerfromanceHeading
                            tag="h2"
                            align="left"
                            heading={[
                                {
                                    line: [
                                        { type: "normal", text: " Your Ad " },
                                        { type: "italic", text: "Account," },
                                    ],
                                },
                                {
                                    line: [{ type: "normal", text: "Reviewed Live" }],
                                },
                            ]}
                            subtitle=""
                        />

                        <p className="text-gray-700 mt-4 max-w-2xl text-lg lg:text-2xl leading-[150%] tracking-[-0.02em]">
                            30 minutes. Screen share. We'll walk through your campaigns and show you exactly where you're leaking budget — and what to do about it.
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="flex md:items-end md:justify-end">
                        <button className="bg-black whitespace-nowrap text-white uppercase px-8 py-4 flex items-center gap-4 text-sm tracking-wide hover:bg-orange transition text-[20px] 2xl:text-[32px]">
                            <ArrowRight size={18} />
                            BOOK YOUR LIVE REVIEW
                        </button>
                    </div>

                </div>


                {/* Bottom Black Card */}
                <div className="mt-16 bg-black text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            For High-Volume Brands
                        </h3>

                        <p className="text-gray-300 text-sm mt-1 max-w-md">
                            Dedicated teams, custom reporting, and performance
                            guarantees — for brands spending ₹10L+/month.
                        </p>

                        {/* Bullet Points */}
                        <div className="max-sm:hidden grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mt-6 text-sm text-gray-200">
                            <p>• Dedicated account manager</p>
                            <p>• Multi-channel coordination</p>
                            <p>• Custom attribution setup</p>
                            <p>• Performance-based pricing</p>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="flex flex-col items-start md:items-end gap-4">

                        <p className="text-gray-300 text-sm">
                            Custom scope
                        </p>

                        <button className="bg-white text-black px-6 py-3 flex items-center gap-3 text-sm hover:bg-gray-200 transition">
                            <ArrowRight size={16} />
                            BOOK A CALL
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}