import React from "react";

const AuditHero = () => {
  return (
    <div className="max-w-[90%] 3xl:max-w-[1245px] mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10">

        {/* Left Content */}
        <div className="max-w-[700px]">

          <div className="flex items-start gap-6 mb-4">

            <h2 className="font-[Inter] font-semibold text-[72px] leading-[130%] tracking-[-0.04em] capitalize">
              We Don't Talk.<br />
              We <span className="italic font-normal font-[instrument]">Show</span>.*
            </h2>

            {/* Badge */}
            <span className="border border-black rounded-full px-3 py-2 text-[16px] flex items-center gap-2 mt-4">
              <span className="border border-black rounded-full px-2">
                80+
              </span>
              Brands scaled
            </span>

          </div>

          <p className="mt-6 font-[Inter] text-[24px] max-w-[600px]">
            Live dashboards, real revenue numbers, and the exact systems we
            used to get there.
          </p>

          <p className="mt-2 font-[Inter] text-[18px] text-gray-600 cursor-pointer">
            *Founders & marketing leaders welcome
          </p>

        </div>

        {/* Right Card */}
        <div className="hidden lg:flex border border-black p-7 min-w-[320px] bg-[#F5F5F5] flex-col justify-end h-full ">

          <div className="flex flex-col items-center justify-center gap-3">

            <button className="text-lg font-semibold text-left">
              → GET FREE AUDIT
            </button>

            <div className="border border-black bg-white py-2 px-6 text-center text-sm w-fit">
              72 hr turnaround
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuditHero;