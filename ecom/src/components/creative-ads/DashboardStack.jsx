import Image from 'next/image';
import React from 'react'
const dashboardData = [
    {
        title: "Scaling Urban Pitara with Meta Ads",
        title2: "Building a high-converting D2C streetwear growth engine",
        description: "We partnered with Urban Pitara to scale their streetwear brand in an overcrowded D2C fashion market where standing out is everything. By crafting bold creatives that matched the brand’s edgy aesthetic and deploying a full-funnel Meta Ads strategy combining interest-based prospecting, lookalike audiences, retargeting with urgency-led offers, and automated budget scaling we turned paid social into their primary revenue channel. The result was sharp growth in purchases, lower CPAs, and consistent month-over-month revenue.",
        link: "#",
        clientLogo: "/brands/brand-black/urban.webp",
        bgColor: "#FFEBDA",
        rightImg: "/meta-ads/dashboard-images/dashboard-1.webp",
        textColor: "#000",
        imageAlt: "Right Image",
        arrowcss: "bg-[#CF7F3C] text-white"
    },
    {
        title: "Scaling EzSleep with Performance Ads",
        title2: "Building a profitable purchase engine for a wellness brand",
        description: "We helped EzSleep break through a saturated wellness market where most pillow brands compete on price alone. By leading with pain-point creative highlighting real problems like neck pain and poor sleep and pairing it with a full-funnel Meta Ads strategy combining educational awareness content, benefit-focused retargeting, testimonial-led conversion ads, and scaling of winning audiences we built a predictable growth system. The result was a measurable lift in purchases, healthier ROAS, and strong repeat buyer rates.",
        link: "#",
        clientLogo: "/brands/brand-black/ezsleep.png",
        bgColor: "#E3DFF1",
        rightImg: "/meta-ads/dashboard-images/dashboard-2.webp",
        textColor: "#000000",
        imageAlt: "Right Image",
        arrowcss: "bg-[#9479E7] text-white"
    },
    {
        title: "Scaling Bagwani’s Skincare with Ads",
        title2: "Building a scalable D2C engine for an Ayurvedic brand",
        description: "We partnered with Bagwani to grow their Ayurvedic skincare line in a competitive beauty market where trust is the biggest conversion barrier. By developing ingredient-led creative positioning their serum as a makeup prep essential and deploying a Meta Ads funnel combining awareness campaigns, benefit-specific retargeting with social proof, UGC conversion ads, and scaling of winning ad sets we built a reliable D2C growth system. The result was strong first-purchase volume, efficient CPAs, and a growing loyal buyer base.",
        link: "#",
        clientLogo: "/brands/brand-black/bagwani.webp",
        bgColor: "#FFF0F0",
        rightImg: "/meta-ads/dashboard-images/dashboard-3.webp",
        textColor: "#000000",
        imageAlt: "Right Image",
        arrowcss: "bg-[#B30100] text-white"
    },
    {
        title: "Scaling Tiggle Hot Chocolate via Ads",
        title2: "Building a scalable engine in the health beverage space",
        description: "We helped Tiggle carve out a unique position in the crowded beverage market by leading with a guilt-free angle that turned calorie-conscious consumers into loyal buyers. By creating comparison-driven creatives making the 150-kcal message instantly memorable and running a full-funnel Meta Ads strategy combining health-conscious prospecting, variant-specific retargeting, social proof campaigns, and systematic scaling we built a repeatable purchase engine. The result was steady order growth, efficient CPAs, and strong AOV.",
        link: "#",
        clientLogo: "/brands/brand-black/tiggle.webp",
        bgColor: "#E1EFD7",
        rightImg: "/meta-ads/dashboard-images/dashboard-4.webp",
        textColor: "#000",
        imageAlt: "Right Image",
        arrowcss: "bg-[#6FAB42] text-white"
    },

]

// const BusinessCard = ({
//     data, index
// }) => {
//     return (
//         <div className={` md:rounded-[20px] p-3 max-lg:pt-7 lg:p-8 2xl:px-10 3xl:py-16 3xl:px-12 w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-[82%] mx-auto lg:sticky top-0 xl:top-20 2xl:top-28 3xl:top-35 min-h-160 3xl:h-full`}
//             style={{
//                 backgroundColor: data.bgColor,
//                 color: data.textColor,
//             }}
//         >
//             {
//                 data.clientLogo &&

//                 <div className='w-full h-7 lg:hidden mb-2'>
//                     <Image
//                         src={data.clientLogo}
//                         alt='Logo'
//                         width={120}
//                         height={120}
//                         className='object-contain w-fit h-full'
//                     />
//                 </div>
//             }
//             <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 3xl:gap-8 ">
//                 {/* Left Section */}
//                 <div className="w-full lg:w-[62%] 3xl:w-[60%] flex flex-col">
//                     {/* Header */}
//                     <h4 className='leading-[130%] tracking-[-0.02em] lg:tracking-[-0.04em] text-4xl lg:text-5xl 3xl:text-7xl font-semibold mb-5 lg:mb-8 3xl:mb-16'>{data.title}</h4>
//                     <div className='w-full  flex gap-20'>
//                         <p className="leading-[120%] tracking-[-0.04em] text-[42px] lg:text-5xl 3xl:text-[86px] font-semibold w-[5%] xl:w-[15%] 3xl:w-[20%]">
//                             {String(index).padStart(2, "0")}
//                         </p>

//                         <div className='w-[95%] lg:w-[85%]'>
//                             <p className='leading-[130%] tracking-[-0.02em] text-2xl lg:text-3xl 3xl:text-4xl font-semibold max-3xl:mb-1'>{data.title2}</p>
//                             <span className='leading-[150%] tracking-[-0.02em] text-lg 3xl:text-xl max-lg:hidden'>{data.description}</span>
//                             <div className="relative max-lg:max-w-[400px] max-lg:mx-auto xl:w-[350px] 2xl:w-[380px] 3xl:w-125 w-full h-fit flex flex-col rounded-lg overflow-hidden aspect-square lg:hidden mt-10">

//                                 {/* Image takes remaining height */}
//                                 <div className="flex-1">
//                                     <Image
//                                         width={600}
//                                         height={500}
//                                         src={data?.rightImg}
//                                         alt={data.imageAlt}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section - Dashboard Image */}
//                 <span className='leading-[150%] tracking-[-0.02em] text-base lg:text-lg 3xl:text-xl lg:hidden mt-5'>{data.description}</span>
//                 <div className="flex-shrink-0 flex justify-end w-full lg:w-[38%] 3xl:w-[40%] max-lg:hidden">
//                     <div className="relative max-lg:max-w-[400px] max-lg:mx-auto xl:w-[350px] 2xl:w-[380px] 3xl:w-125 w-full h-fit flex flex-col rounded-lg overflow-hidden aspect-square">

//                         {/* Image takes remaining height */}
//                         <div className="flex-1">
//                             <Image
//                                 width={600}
//                                 height={500}
//                                 src={data?.rightImg}
//                                 alt={data.imageAlt}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                     </div>
//                 </div>



//             </div>
//             <div className='flex flex-row gap-6 lg:gap-8 mt-5 2xl:mt-10 3xl:mt-16 w-full'>
//                 <div className="w-full lg:w-[60%] flex gap-3 max-lg:p-2 justify-end items-center">
//                     <p className='leading-[150%] tracking-[-0.02em] text-2xl 3xl:text-3xl font-semibold'>See what we create</p>
//                     <button className={`rotate-90 text-xl lg:text-3xl  p-4 lg:p-5 3xl:p-8 rounded size-4 lg:size-5 3xl:size-8 text-black flex items-center justify-center max-lg:font-light ${data?.arrowcss}`}>
//                         ↑
//                     </button>
//                 </div>
//                 <div className="flex-shrink-0 flex justify-end w-full lg:w-[40%] items-end max-lg:hidden">
//                     {
//                         data.clientLogo &&
//                         <div className='w-40 h-full'>

//                             <Image
//                                 src={data.clientLogo}
//                                 alt='Logo'
//                                 width={60}
//                                 height={60}
//                                 className='object-contain w-fit h-full'
//                             />
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };
// const DashboardStacks = () => {
//     return (
//         <div className='xs:px-2 md:px-4 lg:px-0 max-lg:space-y-4.5 space-y-10 3xl:space-y-30'>
//             {dashboardData.map((business, index) => (
//                 <BusinessCard key={index} data={business} index={index + 1} />
//             ))}
//         </div>
//     )
// }

// export default DashboardStacks

const BusinessCard = ({
    data, index
}) => {
    return (
        <div className={` md:rounded-[20px] p-3 max-lg:pt-7 lg:p-8 2xl:px-10 3xl:py-16 3xl:px-12 w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-[82%] mx-auto lg:sticky top-0 xl:top-20 2xl:top-28 3xl:top-20 min-h-160 3xl:h-full`}
            style={{
                backgroundColor: data.bgColor,
                color: data.textColor,
            }}
        >
            {
                data.clientLogo &&

                <div className={`${data.logoCss} mb-5 lg:hidden`}>
                    <Image
                        src={data.clientLogo}
                        alt='Logo'
                        width={200}
                        height={200}
                        className='object-contain w-fit h-full'
                    />
                </div>
            }
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 3xl:gap-8 ">
                {/* Left Section */}
                <div className="w-full lg:w-[62%] 3xl:w-[60%] flex flex-col">
                    {/* Header */}
                    <h4 className='leading-[130%] tracking-[-0.02em] lg:tracking-[-0.04em] text-4xl lg:text-5xl 1600:text-6xl 1800:text-7xl font-semibold mb-5 lg:mb-8 1600:mb-12 1800:mb-16'>
                        {data.title}
                    </h4>
                    <div className='w-full flex gap-20'>
                        <p className="leading-[120%] tracking-[-0.04em] text-[42px] lg:text-5xl 1600:text-7xl 1800:text-[86px] font-semibold w-[5%] xl:w-[15%] 1800:w-[20%]">
                            {String(index).padStart(2, "0")}
                        </p>

                        <div className='w-[95%] lg:w-[85%]'>
                            <p className='leading-[130%] tracking-[-0.02em] text-2xl lg:text-3xl 1600:text-[32px] 1800:text-4xl font-semibold max-3xl:mb-1 1600:mb-3 max-w-lg'>{data.title2}</p>
                            <p className='leading-[150%] tracking-[-0.02em] text-lg 1800:text-xl max-lg:hidden max-w-xl 3xl:max-w-2xl'>{data.description}</p>
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
                <div className="flex-shrink-0 flex justify-end w-full lg:w-[38%] 3xl:w-[40%] max-lg:hidden">
                    <div className="relative max-lg:max-w-[400px] max-lg:mx-auto xl:w-[350px] 2xl:w-[380px] 1600:w-115 1800:w-125 w-full h-fit flex flex-col rounded-lg overflow-hidden aspect-square">

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
            <div className='flex flex-row gap-6 lg:gap-8 max-md:mt-10 md:mt-5 2xl:mt-10 3xl:mt-12 w-full'>
                <div className="w-full lg:w-[60%] flex gap-3 max-lg:p-2 justify-end items-center">
                    <p className='leading-[150%] tracking-[-0.02em] text-2xl 1600:text-[26px] 1800:text-3xl font-semibold'>See what we create</p>
                    <button className={`rotate-90 text-xl lg:text-3xl  p-4 lg:p-5 3xl:p-8 rounded size-4 lg:size-5 3xl:size-8 text-black flex items-center justify-center max-lg:font-light ${data?.arrowcss}`}>
                        ↑
                    </button>
                </div>
                <div className="flex-shrink-0 flex justify-end w-full lg:w-[40%] items-end max-lg:hidden">
                    {
                        data.clientLogo &&
                        <div className={data.logoCss}>

                            <Image
                                src={data.clientLogo}
                                alt='Logo'
                                width={200}
                                height={200}
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
        <div className='xs:px-2 md:px-4 lg:px-0 max-lg:space-y-5 space-y-10 3xl:space-y-30'>
            {dashboardData.map((business, index) => (
                <BusinessCard key={index} data={business} index={index + 1} />
            ))}
        </div>
    )
}

export default DashboardStacks