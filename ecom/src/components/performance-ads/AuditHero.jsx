import React from "react";

const AuditHero = () => {
  return (
    <div className="max-w-[1200px]  mx-auto px-5 py-10">
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* Left Content */}
<div className="max-w-[700px]">

  <div className="flex items-center gap-4 mb-4">

    <h1 className="font-[Inter] font-semibold text-[72px] leading-[130%] tracking-[-0.04em] capitalize">
      We Don't Talk.<br/>
      We <span className="italic font-normal font-[instrument]">Show</span>.*
    </h1>

<span className="border font-[Inter] border-black rounded-full ml-10 px-2 py-2 text-[18px] flex items-center gap-2">
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

  <p className="mt-2 font-[Inter] text-[24px] text-gray-600 cursor-pointer">
    *Founders & marketing leaders welcome
  </p>

</div>

        {/* Right Card */}
<div className="border border-black p-7 min-w-[320px] mt-20 bg-white flex flex-col items-center">

  <button className="text-lg font-semibold">
    → GET FREE AUDIT
  </button>

  <div className="border border-black mt-3 py-2 px-8 text-center text-sm">
    72 hr turnaround
  </div>

</div>

      </div>

    </div>
  );
};

export default AuditHero;