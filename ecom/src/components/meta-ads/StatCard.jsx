const StatsGrid = ({ className }) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 grid-rows-2">

                {/* Top Left */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        1,000+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Videos Shipped
                    </p>
                </div>

                {/* Top Right */}
                <div className={`bg-blue text-white flex flex-col items-center justify-center py-14" ${className}`}>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        60+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Brands Shot For
                    </p>
                </div>

                {/* Bottom Left */}
                <div className={`bg-blue text-white flex flex-col items-center justify-center py-14" ${className}`}>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        15
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Industries Covered
                    </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        7
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        DayAvg Turnaround
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StatsGrid;