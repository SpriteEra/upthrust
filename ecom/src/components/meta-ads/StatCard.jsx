const StatsGrid = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 grid-rows-2">

                {/* Top Left */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold">
                        432+
                    </h2>
                    <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px] tracking-wide">
                        ADS DELIVERED MONTHLY
                    </p>
                </div>

                {/* Top Right */}
                <div className="bg-blue text-white flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold">
                        6.02 Cr+
                    </h2>
                    <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px]">
                        Ad spend Optimized Monthly
                    </p>
                </div>

                {/* Bottom Left */}
                <div className="bg-blue text-white flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold">
                        21.09 Cr+
                    </h2>
                    <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px]">
                        Revenue Generated
                    </p>
                </div>

                {/* Bottom Right */}
                <div className="bg-[#E5E5E5] flex flex-col items-center justify-center py-14">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-bold">
                        4578+
                    </h2>
                    <p className="mt-4 text-[12px] sm:text-[14px] md:text-[16px]">
                        Inquiries generated for Businesses
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StatsGrid;