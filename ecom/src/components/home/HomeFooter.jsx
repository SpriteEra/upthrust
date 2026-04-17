// import React from 'react'

// const HomeFooter = ({ customeCss = "mt-20 md:mt-50", setwidth, bgColor = "#FF3B00", text1 = "Any questions?", text2 = {
//     desktop: {
//         text1: "YOUR SUBMISSION GOES HERE.",
//         text2: "OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT."
//     },
//     mobile: {
//         text1: "OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT."
//     }
// } }) => {
//     return (
//         <div className={`relative mb-3 md:mb-5 3xl:mb-10 ${customeCss}`}>
//             <div className="w-full overflow-hidden -mb-6 md:-mb-2 3xl:-mb-22 z-1">
//                 <div className="flex whitespace-nowrap marquee-slow">
//                     {[...Array(8)].map((_, index) => (
//                         <p
//                             key={index}
//                             className="inline-block mr-20 text-8xl lg:text-[130px] 3xl:text-[180px] font-semibold max-lg:leading-[104px] 3xl:leading-[180%] tracking-[-0.04em]"
//                         >
//                             <span style={{
//                                 backgroundColor: bgColor
//                             }} className="size-14 md:size-20 rounded-full bg-(--red) inline-block"></span>  Upthrust Leading since 2021
//                         </p>
//                     ))}
//                 </div>
//             </div>

//             <div className='px-3 sm:px-5 lg:px-20 z-10 relative'>
//                 <div className='px-4 md:px-6 py-4 md:py-10 text-white text-xl md:text-3xl uppercase 3xl:text-4xl font-semibold max-sm:leading-[25px] 3xl:leading-[44px] tracking-[-0.04em] 3xl:tracking-[-0.02em]' style={{
//                     backgroundColor: bgColor
//                 }}>
//                     <div className="flex items-start sm:items-center gap-2 flex-nowrap sm:flex-wrap">
//                         <button className="inline-flex whitespace-nowrap items-center gap-1 sm:gap-2 border-[0.5px] lg:border border-white rounded-full px-1.25 md:px-3 py-0.75 md:py-1.5 uppercase text-[8px] md:text-xs 3xl:text-xs">
//                             <svg className='size-2 md:size-3 3xl:size-3.5' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M7 0C7.23765 3.76317 10.2368 6.76236 14 7C10.2368 7.23765 7.23765 10.2368 7 14C6.76236 10.2368 3.76317 7.23765 0 7C3.76317 6.76236 6.76236 3.76317 7 0Z" fill="white" />
//                             </svg>
//                             {text1}
//                         </button>
//                         <p>
//                             {text2.desktop.text1} <span className='md:hidden'>{text2.mobile.text1}</span>

//                         </p>
//                     </div>
//                     <div className={`max-md:hidden max-w-3xl 3xl:max-w-4xl whitespace-pre-line ${setwidth}`}>
//                         {text2.desktop.text2}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeFooter

import React from 'react'

const HomeFooter = ({ customeCss = "mt-20 md:mt-50", setwidth, bgColor = "#FF3B00", text1 = "Any questions?", text2 = {
    desktop: {
        text1: "YOUR SUBMISSION GOES HERE.",
        text2: "OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT."
    },
    mobile: {
        text1: "OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT."
    }
} }) => {
    return (
        <div className={`relative mb-3 md:mb-5 3xl:mb-10 ${customeCss}`}>
            <div className="w-full overflow-hidden -mb-6 md:-mb-2 3xl:-mb-22 z-1">
                <div className="flex whitespace-nowrap marquee-slow">
                    {[...Array(8)].map((_, index) => (
                        <p
                            key={index}
                            className="inline-block mr-20 text-8xl lg:text-[130px] 3xl:text-[180px] font-semibold max-lg:leading-[104px] 3xl:leading-[180%] tracking-[-0.04em]"
                        >
                            <span style={{
                                backgroundColor: bgColor
                            }} className="size-14 md:size-20 rounded-full bg-(--red) inline-block"></span>  Upthrust Leading since 2021
                        </p>
                    ))}
                </div>
            </div>

            <div className='px-3 sm:px-5 lg:px-20 z-10 relative'>
                <div className='px-4 md:px-6 py-4 md:py-10 text-white text-xl md:text-3xl uppercase 3xl:text-4xl font-semibold max-sm:leading-[25px] 3xl:leading-[44px] tracking-[-0.04em] 3xl:tracking-[-0.02em]' style={{
                    backgroundColor: bgColor
                }}>
                    {/* Mobile layout: button inline with text */}
                    <p className="md:hidden leading-[1.3]">
                        <button className="inline-flex whitespace-nowrap items-center gap-1 border-[0.5px] border-white rounded-full px-1.25 py-0.75 uppercase text-[8px] mr-2 align-middle translate-y-[-1px]">
                            <svg className='size-2' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C7.23765 3.76317 10.2368 6.76236 14 7C10.2368 7.23765 7.23765 10.2368 7 14C6.76236 10.2368 3.76317 7.23765 0 7C3.76317 6.76236 6.76236 3.76317 7 0Z" fill="white" />
                            </svg>
                            {text1}
                        </button>
                        {text2.desktop.text1} {text2.mobile.text1}
                    </p>

                    {/* Desktop layout: original flex row */}
                    <div className="hidden md:flex items-center gap-2 flex-wrap">
                        <button className="inline-flex whitespace-nowrap items-center gap-2 border border-white rounded-full px-3 py-1.5 uppercase text-xs 3xl:text-xs">
                            <svg className='size-3 3xl:size-3.5' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C7.23765 3.76317 10.2368 6.76236 14 7C10.2368 7.23765 7.23765 10.2368 7 14C6.76236 10.2368 3.76317 7.23765 0 7C3.76317 6.76236 6.76236 3.76317 7 0Z" fill="white" />
                            </svg>
                            {text1}
                        </button>
                        <p>{text2.desktop.text1}</p>
                    </div>
                    <div className={`hidden md:block max-w-3xl 3xl:max-w-4xl whitespace-pre-line ${setwidth}`}>
                        {text2.desktop.text2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter