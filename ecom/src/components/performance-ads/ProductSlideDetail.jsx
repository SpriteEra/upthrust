"use client"
import React, { useState } from "react";
import { cards } from "./CaseStudyData";
import CaseStudy from "./CaseStudy";

const ProductSlideDetail = () => {

  const [index, setIndex] = useState(0);

  const data = cards[index];

  return (
    <div className="flex w-full gap-10 mt-10">

      {/* Left Slider */}
      <div className="w-1/2">
        <CaseStudy index={index} setIndex={setIndex} />
      </div>

      {/* Right Dynamic Content */}
      <div className="w-1/2">

        <div className="h-[675px] w-[674px] bg-[#f6f6f6] border border-gray-300 rounded-lg p-10">

          <h1 className="text-[48px] font-semibold mb-8">
            {data.title}
          </h1>

          <div className="mb-10">

            <h3 className="text-[20px] font-semibold mb-2">
              The Problem:
            </h3>

            <p className="text-[18px] leading-7">
              {data.problem}
            </p>

          </div>

          <div className="mb-10">

            <h3 className="text-[20px] font-semibold mb-6">
              The Result:
            </h3>

            <div className="grid grid-cols-3 gap-10">

              <div>
                <p className="text-[18px]">Revenue</p>
                <h2 className="text-[36px] font-semibold">
                  {data.revenue}
                </h2>
              </div>

              <div>
                <p className="text-[18px]">Orders/month</p>
                <h2 className="text-[36px] font-semibold">
                  {data.orders}
                </h2>
              </div>

              <div>
                <p className="text-[18px]">Months</p>
                <h2 className="text-[36px] font-semibold">
                  {data.months}
                </h2>
              </div>

            </div>

          </div>

          <div className="border border-gray-300 rounded-xl p-6 bg-white">

            <p className="text-[24px] font-semibold leading-8">
              {data.text}
            </p>

            <p className="text-right text-gray-600 text-[18px] mt-4">
              — {data.author}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductSlideDetail;