import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white">

            {/* Background radial burst image — full bleed, positioned to right/bottom */}
            <div className="absolute inset-0 z-0">
                <Image
                    src='/performance-agency/bg.png'
                    fill
                    alt=""
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Content — left-aligned, sits on top */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-10 pt-10 pb-16 flex flex-col justify-center items-start">

                {/* Top Label */}
                <p className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-8 font-medium">
                    Performance Marketing Agency
                </p>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-black mb-6 max-w-[480px]">
                    More Profit From<br />
                    Every <em className="italic font-normal not-italic" style={{ fontStyle: 'italic', fontWeight: 400 }}>ad $</em>
                </h1>

                {/* Description — sits to the right of heading area, but here below for stacked left layout */}
                <p className="text-sm text-black/60 leading-relaxed max-w-[260px] mb-10">
                    Stop funding Meta and Google and "hope". Start working with a performance marketing team that's only successful when your revenue grows.
                </p>

                {/* Buttons */}
                <div className="flex flex-row gap-3 items-center">
                    <button className="bg-black text-white px-5 py-2.5 text-xs tracking-wide font-medium hover:opacity-80 transition-opacity">
                        Get Your Free Ad Account Audit
                    </button>
                    <button className="border border-black/30 bg-white/60 px-5 py-2.5 text-xs tracking-widest font-medium hover:bg-black hover:text-white transition-colors">
                        SEE CLIENT RESULTS →
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection