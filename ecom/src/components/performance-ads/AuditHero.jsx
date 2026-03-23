import React from "react";

const AuditHero = () => {
  return (
    <div className="max-w-[90%] 3xl:max-w-[1245px] mx-auto sm:px-5 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10">

        {/* Left Content */}
        <div className="max-w-[700px]">

          <div className="flex items-start  sm:gap-6 mb-4">

            <h2 className="hidden sm:block text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 1600:text-[4rem] 1800:text-[4.5rem] font-semibold text-left leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize">
              We Don't Talk.<br />
              We <span className="text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 1600:text-[4.5rem] 1800:text-[5rem] font-normal text-left leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic">Show</span>.*
            </h2>

            {/* Badge */}
            <span className="hidden sm:flex border border-black rounded-full px-3 py-2 text-[12px] sm:text-[16px]  items-center gap-2 mt-4 whitespace-nowrap">
              <span className="border border-black bg-[#E9EAEB] rounded-full px-2">
                80+
              </span>
              Brands scaled
            </span>


            <h2 className="sm:hidden text-[2.25rem] font-semibold leading-11 tracking-[-0.02em] capitalize">

              We Don't Talk.<br />

              We{" "}
              <span className="inline-flex items-center gap-2">

                <span className="text-[2.625rem] font-normal leading-11 font-instrument italic">
                  Show
                </span>
                .*

                {/* Badge */}
                <span className="inline-flex items-center border border-black rounded-full px-2 py-1 text-[12px] gap-1 leading-none">

                  <span className="border border-black bg-[#E9EAEB] rounded-full px-2 py-[2px] text-[12px] leading-none">
                    80+
                  </span>

                  Brands scaled
                </span>

              </span>

            </h2>

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
        <div className="hidden lg:flex border border-black px-15 py-8 min-w-[320px] bg-[#F5F5F5] flex-col justify-end h-full ">

          <div className="flex flex-col items-center justify-center gap-3">

            <button className="text-[24px] leading-[150%] tracking-[-0.02em] font-semibold text-left">
              → GET FREE AUDIT
            </button>

            <div className="border border-black bg-white py-2 px-6 leading-[150%] tracking-[-0.02em] text-center text-[17px] w-fit">
              72 hr turnaround
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuditHero;