"use client";

import PerfromanceHeading from "@/common/PerformanceHeading";
import { ArrowRight } from "lucide-react";
import PerformanceCommonButton from "./PerformanceCommonButton";

export default function AdReview() {
    return (
        <section className=" py-10">
            <div className="sm:max-w-[90%] 3xl:max-w-[1300px] mx-auto md:px-6">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:justify-between gap-10 px-3">

                    {/* Left Content */}
                    <div>
                        <PerfromanceHeading
                            tag="h2"
                            align="left"
                            textcss="text-left!"
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

                        <p className="text-gray-700 mt-4 max-w-2xl text-lg lg:text-2xl leading-[150%] tracking-[-0.02em] max-sm:px-2">
                            30 minutes. Screen share. We'll walk through your campaigns and show you exactly where you're leaking budget — and what to do about it.
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="hidden md:flex md:items-end md:justify-end">
                        <PerformanceCommonButton text=" → BOOK YOUR LIVE REVIEW" btncss="bg-black whitespace-nowrap text-white uppercase px-8 py-4 flex items-center gap-4 text-sm tracking-wide hover:bg-orange transition text-[20px] 2xl:text-[32px]" />
                    </div>

                </div>


                {/* Bottom Black Card */}
                <div className="mt-16 bg-black text-white p-8 md:p-10 flex flex-col md:flex-row md:justify-between gap-10">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-4xl leading-[130%] tracking-[-0.02em] font-semibold">
                            For High-Volume Brands
                        </h3>
                        <p className="text-white text-lg leading-[150%] tracking-[-0.02em] mt-1 max-w-md">
                            Dedicated teams, custom reporting, and performance guarantees — for brands spending ₹10L+/month.
                        </p>

                        {/* Bullet Points */}
                        <div className="max-sm:hidden grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mt-6 text-[20px] leading-[150%] tracking-[-0.02em] text-white">
                            <p>• Dedicated account manager</p>
                            <p>• Multi-channel coordination</p>
                            <p>• Custom attribution setup</p>
                            <p>• Performance-based pricing</p>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="flex flex-col items-start md:items-end md:justify-end gap-4">

                        <p className="text-[30px] leading-[150%] tracking-[-0.02em]">
                            Custom scope
                        </p>


                        <PerformanceCommonButton text=" → BOOK A CALL" btncss="bg-white hover:text-white cursor-pointer hover:bg-orange  text-black px-20 py-3 flex items-center gap-3 text-[19px]  transition cursor-pointer" />

                    </div>

                </div>

            </div>
        </section>
    );
}