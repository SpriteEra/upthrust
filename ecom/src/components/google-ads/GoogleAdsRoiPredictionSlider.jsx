"use client"
import React from 'react'
import SmartSwiper from '../SmartSwiper';
const slides = [
    {
        icon: "/icons/cloud-network.png",
        title: "Revenue Automation",
        image: "/icons/cloud-network",
        text1: "You need traffic at buying temperature. That means targeting keyword themes built on the Hagakure framework single-theme ad groups that match searcher intent at 95%.",
        headingBold: "Retargeting ladder for who hasn't converted",
        lists: ["Display ads with social proof (7 days post-visit)", "YouTube case studies (14 days, engaged visitors only)", "Demand Gen with offer (21 days, high-intent actions)"],
        heading2: "User's who buy",
        image2: "/google-ads/analytics-dashboard.png",
        bg: 'bg-[#FFE187]'
    },
    {
        icon: "/icons/filter.png",
        title: "Revenue Automation",
        image: "/google-ads/revenue-dashboard.png",
        text1: "Most agencies stop at the click. Then ninety-six percent leave. \nGetting traffic is half the job. The other half: making sure visitors understand what you do and why it matters in eight seconds.",
        headingBold: "One client went from two percent conversions to six percent.",
        headingLight: "Same traffic, different page. Triple the revenue.",
        heading2: "Revenue Automation",
        lists: [],
        image2: "/google-ads/revenue-dashboard.png",
        bg: 'bg-[#E7F0FF]'
    },

];

const GoogleAdsRoiPredictionSlider = () => {
    const trafficTabRef = React.useRef(null);
    const conversionTabRef = React.useRef(null);
    const indicatorRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const activeEl =
            activeIndex === 0
                ? trafficTabRef.current
                : conversionTabRef.current;

        if (!activeEl || !indicatorRef.current) return;

        const parent = activeEl.parentElement;

        const rect = activeEl.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const left = rect.left - parentRect.left;
        const width = rect.width;

        indicatorRef.current.style.transform = `translateX(${left}px)`;
        indicatorRef.current.style.width = `${width}px`;
        indicatorRef.current.style.backgroundColor =
            activeIndex === 0 ? "#FACC15" : "#3B82F6";
    }, [activeIndex]);
    return (
        <div className='flex flex-col mt-10'>
            <div className="relative max-w-fit mx-auto mb-6 3xl:mb-12">
                <div className="flex justify-center gap-12 relative pb-3">
                    <button
                        ref={trafficTabRef}
                        onClick={() => setActiveIndex(0)}
                        className={`text-lg px-4 py-2 min-w-20 transition-colors duration-300 ${activeIndex === 0 ? "text-black font-semibold" : "text-gray-400"
                            }`}
                    >
                        Traffic
                    </button>

                    <button
                        ref={conversionTabRef}
                        onClick={() => setActiveIndex(1)}
                        className={`text-lg  px-4 py-2 min-w-20 transition-colors duration-300 ${activeIndex === 1 ? "text-black font-semibold" : "text-gray-400"
                            }`}
                    >
                        Conversion of Traffic
                    </button>

                </div>
                <div className="absolute bottom-[9px] left-0 right-0 h-0.5 bg-gray-300" />
                <div
                    ref={indicatorRef}
                    className="absolute bottom-2 h-1 rounded-full bg-yellow-400 transition-all duration-300"
                />
            </div>
            <SmartSwiper
                slides={slides}
                effect="slide"
                speed={700}
                delay={4000}
                swiperClass="w-full"
                slideClass="w-full"
                onSlideChange={(index) => setActiveIndex(index)}
                renderSlide={(item) => (
                    <div
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-4 px-4 h-full"
                    >
                        {/* Left - Icon & Description */}
                        <div className="md:col-span-5 gap-4 md:gap-4 flex flex-col h-full" >
                            <div className={`${item.bg} rounded-2xl p-5 sm:p-4 w-full`}>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.icon}
                                        className="size-22 sm:size-20 object-contain"
                                        alt="Cloud Internet Icon"
                                    />
                                </div>
                                <p
                                    className="text-2xl sm:text-xl leading-[150%] tracking-[-0.02em] mt-6 sm:mt-4"
                                >
                                    {item.text1}
                                </p>

                            </div>
                            <div className={`${item.bg} rounded-2xl p-5 sm:p-4 w-full h-full`}>
                                <p
                                    className="text-2xl sm:text-xl font-semibold leading-[150%] tracking-[-0.02em]"
                                >
                                    {item.headingBold} <span className="font-normal">{item.headingLight}</span>
                                </p>
                                {
                                    item.lists.length ?
                                        <div className=" mt-6 sm:mt-3">
                                            <ul className="text-2xl sm:text-xl space-y-1 pl-6 leading-[150%] tracking-[-0.02em] list-disc list-outside">
                                                {
                                                    item.lists.map((i, index) => (
                                                        <li className='' key={index}> {i} </li>
                                                    ))
                                                }
                                            </ul>
                                        </div> : null
                                }
                            </div>

                        </div>
                        <div className={`md:col-span-7 overflow-hidden ${item.bg} rounded-2xl p-5 sm:p-4 pb-0 pr-0 flex h-full flex-col`}>
                            <p
                                className="text-[64px] sm:text-7xl tracking-[-0.07em] leading-[150%] whitespace-nowrap bg-linear-to-b from-[#301805] to-transparent bg-clip-text text-[black]/50"
                            >
                                {item.heading2}
                            </p>
                            <div className="relative w-full -mt-2 md:mt-2">
                                <img
                                    src={item.image2}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                )}
            />
        </div>
    )
}

export default GoogleAdsRoiPredictionSlider
//     < div
// className = "grid grid-cols-1 md:grid-cols-12 gap-6 3xl:gap-8 px-4 h-full"
//     >
//     {/* Left - Icon & Description */ }
//     < div className = "md:col-span-5 gap-4 md:gap-6 3xl:gap-8 flex flex-col h-full" >
//         <div className="bg-[#FFE187] rounded-2xl 3xl:rounded-[20px] p-5 3xl:p-10 w-full">
//             <div className="relative overflow-hidden">
//                 <img
//                     src={'/icons/cloud-network.png'}
//                     className="size-25 3xl:size-30 object-contain"
//                     alt="Cloud Internet Icon"
//                     style={{ opacity: 1 }}
//                 />
//             </div>

//             {/* text1  */}
//             <div className="relative overflow-hidden ">
//                 <p
//                     className="text-2xl leading-[150%] tracking-[-0.02em] mt-6 md:mt-8 3xl:mt-11"
//                     style={{ opacity: 1, transform: "translateY(0%)", }}
//                 >
//                     You need traffic at buying temperature. That means targeting keyword themes built on the Hagakure framework single-theme ad groups that match searcher intent at 95%.
//                 </p>

//                 <p
//                     className="absolute inset-0 text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em]"
//                     style={{ opacity: 0, transform: "translateY(100%)", visibility: "hidden", }}
//                 >
//                     Most agencies stop at the click. <br /> Then ninety-six percent leave. <br /> <br />
//                     Getting traffic is half the job. The other half: <span className=" capitalize font-semibold">making sure visitors understand what you do and why it matters in eight seconds.</span>
//                 </p>
//             </div>


//         </div>
//         <div className="bg-[#FFE187] rounded-2xl 3xl:rounded-[20px] p-5 3xl:p-10 w-full h-full">
//             {/* text1 */}
//             <div className="relative min-h-4 3xl:min-h-8">
//                 <p
//                     className="text-3xl font-semibold leading-[150%] tracking-[-0.02em]"
//                     style={{ opacity: 1 }}
//                 >
//                     Retargeting ladder for who hasn't converted
//                 </p>

//                 <p
//                     className="absolute inset-0 text-2xl font-semibold leading-[150%] tracking-[-0.02em] p-2"
//                     style={{ opacity: 0 }}
//                 >
//                     One client went from two percent conversions to six percent. <span className="font-normal 3xl:leading-[32px]">Same traffic, different page. Triple the revenue.</span>
//                 </p>
//             </div>


//             <div className=" mt-6">
//                 <ul className="text-2xl space-y-1 pl-6 leading-[150%] tracking-[-0.02em] list-disc list-outside">
//                     <li className=''> Display ads with social proof (7 days post-visit) </li>
//                     <li> YouTube case studies (14 days, engaged visitors only)</li>
//                     <li> Demand Gen with offer (21 days, high-intent actions)</li>
//                 </ul>
//             </div>
//         </div>

//     </ >
//     <div className="md:col-span-7 overflow-hidden bg-[#FFE187] rounded-2xl 3xl:rounded-[20px] p-5 3xl:p-12 3xl:pt-8 pb-0 pr-0 flex h-full flex-col" >
//         <div className="relative overflow-hidden">
//             <p
//                 className="text-[64px] tracking-[-0.07em] leading-[150%] whitespace-nowrap bg-linear-to-b from-[#301805] to-transparent bg-clip-text text-[black]/50"
//             >
//                 User's who buy
//             </p>

//             <p
//                 className="absolute left-0 top-0 text-9xl 3xl:text-[9.375rem] whitespace-nowrap bg-linear-to-b from-[#301805] to-transparent bg-clip-text text-transparent"
//                 style={{ opacity: 0, transform: "translateY(100%)" }}
//             >
//                 Revenue Automation
//             </p>
//         </div>
//         <div className="relative w-full -mt-2">
//             <img
//                 src="/google-ads/analytics-dashboard.png"
//                 className=" w-full h-full object-contain"
//                 style={{ opacity: 1 }}
//             />

//             <img
//                 src="/google-ads/revenue-dashboard.png"
//                 className="absolute inset-0 w-full h-full object-cover"
//                 style={{ opacity: 0 }}
//             />
//         </div>
//     </div>
// </div >