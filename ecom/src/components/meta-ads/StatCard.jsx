const StatsGrid = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 grid-rows-2">

                {/* Top Left */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        432+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        ADS DELIVERED MONTHLY
                    </p>
                </div>

                {/* Top Right */}
                <div className="bg-blue text-white flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        6.02 Cr+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Ad spend Optimized Monthly
                    </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-blue text-white flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        21.09 Cr+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Revenue Generated
                    </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 3xl:text-[86px] font-semibold tracking-[-0.04em] leading-[120%]">
                        4578+
                    </h2>
                    <p className="mt-2 3xl:mt-3 text-[12px] sm:text-[14px] md:text-[16px] 3xl:text-lg tracking-[-0.02em] leading-[120%]">
                        Inquiries generated for Businesses
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StatsGrid;