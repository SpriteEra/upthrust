import Image from 'next/image';
import React from 'react'
const dashboardData = [
    {
        title: "Scaling smokey cocktail with Meta Ads",
        title2: "Building a profitable, scalable customer acquisition engine",
        description: "We partnered to scale customer acquisition in a highly competitive barware market while keeping costs efficient. By implementing a full-funnel Meta Ads strategy—combining broad and interest-based acquisition, high-intent retargeting, continuous creative testing, and automated scaling—we turned Meta Ads into a predictable growth channel. The result was consistent performance at scale, delivering strong purchase volumes while maintaining a healthy cost per acquisition.",
        link: "#",
        clientLogo: "/meta-ads/logos/cl6.png",
        bgColor: "#0457CB",
        rightImg: "/meta-ads/dashboard-images/dashboard-1.png",
        textColor: "#ffffff",
        imageAlt: "Right Image"
    },
    {
        title: "Scaling Oral Care Brand with Meta Ads",
        title2: "Building a scalable & performance-driven acquisition engine",
        description: "We helped a D2C oral care brand scale customer acquisition in a highly competitive market while maintaining an efficient cost per purchase. By deploying a performance-focused Meta Ads funnel—combining broad prospecting, high-intent retargeting, continuous creative and audience testing, and strategic budget scaling—we built a predictable growth system. This approach enabled efficient scaling of ad spend, strong reach and awareness, and consistent purchase acquisition across campaigns.",
        link: "#",
        clientLogo: "",
        bgColor: "#E8F3FF",
        rightImg: "/meta-ads/dashboard-images/dashboard-2.png",
        textColor: "#000000",
        imageAlt: "Right Image"
    },
    {
        title: "Scaling a Women’s Fashion Brand",
        title2: "Building a profitable and scalable online sales engine",
        description: "We partnered with a D2C women’s fashion brand to scale online sales in a highly competitive market while keeping acquisition costs efficient. Using a performance-driven Meta Ads funnel—combining broad and interest-based acquisition, high-intent retargeting, continuous creative testing to reduce ad fatigue, and automated scaling of top-performing campaigns—we built a consistent growth system. This approach drove strong traffic, high conversion value, and predictable purchase growth while maintaining marketing efficiency.",
        link: "#",
        clientLogo: "/meta-ads/logos/cl7.png",
        bgColor: "#F6F6F6",
        rightImg: "/meta-ads/dashboard-images/dashboard-3.png",
        textColor: "#000000",
        imageAlt: "Right Image"
    },
    {
        title: "Scaling a Baby Care Brand with Meta Ads",
        title2: "Building a scalable and profitable online purchase engine",
        description: "We helped a D2C baby care brand acquire new parents at scale in a highly competitive market while maintaining strong purchase efficiency. Through a performance-led Meta Ads funnel—combining broad prospecting, high-intent retargeting, continuous creative testing to improve conversion rates, and automated scaling of top-performing campaigns—we built a reliable growth system. This approach delivered consistent purchase growth at scale while keeping acquisition costs efficiently controlled.",
        link: "#",
        clientLogo: "/meta-ads/logos/cl8.png",
        bgColor: "#0457CB",
        rightImg: "/meta-ads/dashboard-images/dashboard-4.png",
        textColor: "#ffffff",
        imageAlt: "Right Image"
    },

]

const BusinessCard = ({
    data, index
}) => {
    return (
        <div className={` md:rounded-[20px] p-3 max-lg:pt-7 lg:p-8 lg:px-12 3xl:py-16 3xl:px-12 w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-[82%] mx-auto lg:sticky top-0 xl:-top-5 2xl:top-28 3xl:top-35`}
            style={{
                backgroundColor: data.bgColor,
                color: data.textColor,
            }}
        >
            {
                data.clientLogo &&

                <div className='w-full h-7 lg:hidden mb-2'>
                    <Image
                        src={data.clientLogo}
                        alt='Logo'
                        width={120}
                        height={120}
                        className='object-contain w-fit h-full'
                    />
                </div>
            }
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 3xl:gap-8 ">
                {/* Left Section */}
                <div className="w-full lg:w-[60%] flex flex-col">
                    {/* Header */}
                    <h4 className='leading-[130%] tracking-[-0.02em] lg:tracking-[-0.04em] text-4xl lg:text-5xl 3xl:text-7xl font-semibold mb-5 lg:mb-10 3xl:mb-16'>{data.title}</h4>
                    <div className='w-full  flex gap-20'>
                        <p className="leading-[120%] tracking-[-0.04em] text-[42px] lg:text-5xl 3xl:text-[86px] font-semibold w-[5%] lg:w-[20%]">
                            {String(index).padStart(2, "0")}
                        </p>

                        <div className='w-[95%] lg:w-[80%]'>
                            <p className='leading-[130%] tracking-[-0.02em] text-2xl lg:text-3xl 3xl:text-4xl font-semibold'>{data.title2}</p>
                            <span className='leading-[150%] tracking-[-0.02em] text-lg 3xl:text-xl max-lg:hidden'>{data.description}</span>
                            <div className="relative max-lg:max-w-[400px] max-lg:mx-auto xl:w-[350px] 2xl:w-[380px] 3xl:w-125 w-full h-fit flex flex-col rounded-lg overflow-hidden aspect-square lg:hidden mt-10">

                                {/* Image takes remaining height */}
                                <div className="flex-1">
                                    <Image
                                        width={600}
                                        height={500}
                                        src={data?.rightImg}
                                        alt={data.imageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Dashboard Image */}
                <span className='leading-[150%] tracking-[-0.02em] text-base lg:text-lg 3xl:text-xl lg:hidden mt-5'>{data.description}</span>
                <div className="flex-shrink-0 flex justify-end w-full lg:w-[40%] max-lg:hidden">
                    <div className="relative max-lg:max-w-[400px] max-lg:mx-auto xl:w-[350px] 2xl:w-[380px] 3xl:w-125 w-full h-fit flex flex-col rounded-lg overflow-hidden aspect-square">

                        {/* Image takes remaining height */}
                        <div className="flex-1">
                            <Image
                                width={600}
                                height={500}
                                src={data?.rightImg}
                                alt={data.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>



            </div>
            <div className='flex flex-row gap-6 lg:gap-8 mt-10 3xl:mt-16 w-full'>
                <div className="w-full lg:w-[60%] flex gap-3 max-lg:p-2 justify-end items-center">
                    <p className='leading-[150%] tracking-[-0.02em] text-2xl 3xl:text-3xl font-semibold'>See what we create</p>
                    <button className='rotate-90 text-xl lg:text-3xl bg-white p-4 lg:p-5 3xl:p-8 rounded size-4 lg:size-5 3xl:size-8 text-black flex items-center justify-center max-lg:font-light'>
                        ↑
                    </button>
                </div>
                <div className="flex-shrink-0 flex justify-end w-full lg:w-[40%] items-end max-lg:hidden">
                    {
                        data.clientLogo &&
                        <div className='w-40 h-full'>

                            <Image
                                src={data.clientLogo}
                                alt='Logo'
                                width={60}
                                height={60}
                                className='object-contain w-fit h-full'
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
const DashboardStacks = () => {
    return (
        <div className='xs:px-2 md:px-4 lg:px-0 max-lg:space-y-4.5 space-y-10 3xl:space-y-30'>
            {dashboardData.map((business, index) => (
                <BusinessCard key={index} data={business} index={index + 1} />
            ))}
        </div>
    )
}

export default DashboardStacks