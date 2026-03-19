// import Image from 'next/image'
// import React from 'react'

// const HeroSection = () => {
//     return (
//         <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center bg-white">

//             {/* Background radial burst image — full bleed, positioned to right/bottom */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src='/performance-agency/bg.png'
//                     fill
//                     alt=""
//                     className="object-cover object-center"
//                     priority
//                 />
//             </div>

//             {/* Content — left-aligned, sits on top */}
//             <div className="relative   z-10 max-w-[1100px] mx-auto   flex flex-col sm:justify-center items-start max-sm:justify-start max-sm:p-4">

//                 {/* Top Label */}
//                 <p className="text-[18px] lg:text-[14px] leading-[150%] tracking-[0.2em] uppercase text-black mb-8 font-normal">
//                     Performance Marketing Agency
//                 </p>

//                 {/* Heading */}
//                 <div className="flex max-sm:flex-col justify-between items-start sm:items-end ">
//                     <h1 className="text-[42px] md:text-6xl xl:text-[65px] 2xl:text-[70px] 1600:text-[75px] 1800:text-[86px] font-semibold leading-[120%] tracking-[-0.04em] text-black mb-6 max-w-[680px] 3xl:max-w-[800px] ">
//                         More Profit From<br />
//                         Every <em className="italic font-normal font-instrument">ad $</em>
//                     </h1>


//                     <p className="text-sm text-lg text-black leading-relaxed flex justify-end items-end max-w-[350px] 3xl:max-w-[411px] mb-10">
//                         Stop funding Meta and Google and "hope". Start working with a performance marketing team that's only successful when your revenue grows.
//                     </p>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex max-sm:flex-col max-sm:justify-start flex-row gap-3 items-center">
//                     <button className="bg-black text-white px-5 py-3 text-base 3xl:text-xl  tracking-[-0.02em] font-normal hover:bg-orange transition-opacity">
//                         Get Your Free Ad Account Audit
//                     </button>
//                     <button className="border border-black/30 bg-white/60 px-5 py-3 text-base 3xl:text-xl  tracking-[-0.02em] font-normal hover:bg-orange hover:text-white transition-colors">
//                         SEE CLIENT RESULTS  →
//                     </button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default HeroSection

"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HeroSection = () => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full h-[110vh] sm:h-[140vh] bg-white">


            <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        transform: `translateY(${offsetY * 0.4}px) scale(${1 + offsetY * 0.0005})`,
                        opacity: 1 - Math.min(Math.max(offsetY / 500, 0), 1),
                    }}
                >
                    <Image
                        src='/performance-agency/bg.png'
                        fill
                        alt=""
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center z-10">

                <div className="max-w-[1100px] mx-auto flex flex-col sm:justify-center items-start max-sm:justify-start max-sm:p-4">

                    <p className="text-[18px] lg:text-[14px] leading-[150%] tracking-[0.2em] uppercase text-black mb-8 font-normal">
                        Performance Marketing Agency
                    </p>

                    <div className="flex max-sm:flex-col justify-between items-start sm:items-end ">
                        <h1 className="text-[42px] md:text-6xl xl:text-[65px] 2xl:text-[70px] 1600:text-[75px] 1800:text-[86px] font-semibold leading-[120%] tracking-[-0.04em] text-black mb-6 max-w-[680px] 3xl:max-w-[800px] ">
                            More Profit From<br />
                            Every <em className="italic font-normal font-instrument">ad $</em>
                        </h1>

                        <p className="text-sm text-lg text-black leading-relaxed flex justify-end items-end max-w-[350px] 3xl:max-w-[411px] mb-10">
                            Stop funding Meta and Google and "hope". Start working with a performance marketing team that's only successful when your revenue grows.
                        </p>
                    </div>

                    <div className="flex max-sm:flex-col max-sm:justify-start flex-row gap-3 items-center">
                        <button className="bg-black text-white px-5 py-3 text-base 3xl:text-xl tracking-[-0.02em] font-normal hover:bg-orange transition-opacity">
                            Get Your Free Ad Account Audit
                        </button>
                        <button className="border border-black/30 bg-white/60 px-5 py-3 text-base 3xl:text-xl tracking-[-0.02em] font-normal hover:bg-orange hover:text-white transition-colors">
                            SEE CLIENT RESULTS →
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HeroSection