"use client";

import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import AgencyButton from "./AgencyButton";

/* ── Shared sub-components ── */

const logo = [
    { imgurl: "/main-agency/social-link/linkdin.png" },
    { imgurl: "/main-agency/social-link/twitter.png" },
    { imgurl: "/main-agency/social-link/github.png" },
    { imgurl: "/main-agency/social-link/be.png" },
    { imgurl: "/main-agency/social-link/insta.png" },
]

const GoogleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const Stars = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const ContactList = () => (
    <ul className="space-y-3">
        <li className="flex items-center gap-2 text-sm text-zinc-300">
            <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
            <a href="tel:+4401942894596" className="hover:text-white transition-colors">
                01942 894 596
            </a>
        </li>
        <li className="flex items-center gap-2 text-sm text-zinc-300">
            <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
            <a href="mailto:hello@upthrust.io" className="hover:text-white transition-colors">
                hello@upthrust.io
            </a>
        </li>
        <li className="flex items-start gap-2 text-sm text-zinc-300">
            <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
            <span>
                MadeByShape
                <br />1 Gibfield Park Avenue
                <br />Atherton Manchester
                <br />M46 0SU
            </span>
        </li>
        <li className="flex items-center gap-2 text-sm text-zinc-300">
            <Instagram className="w-4 h-4 text-zinc-500 shrink-0" />
            <a href="#" className="hover:text-white transition-colors">
                topped.little.pirate
            </a>
        </li>
    </ul>
);

const AgencyFooter = () => {
    return (
        <footer className="bg-black relative text-white w-full">

            {/* Top tagline banner */}
            <div className="border-b absolute -top-1 px-6 right-0 bg-white rounded-bl-[35px] h-10 w-fit py-2 max-md:hidden">
                <p className="text-black text-base font-normal leading-[150%] tracking-[-0.02em] pr-4">
                    We build growth systems that actually scale.
                </p>
            </div>
            <div className="border-b absolute -top-0 pl-2 pr-3 left-0 bg-white  rounded-br-[20px] w-fit h-fit min-h-55 max-md:hidden">

                <div className="flex flex-col items-center gap-[5px]">
                    {logo.map((item, index) => (
                        <div
                            key={index}
                            className="size-8 rounded-full bg-orange flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                        >
                            <Image
                                src={item.imgurl}
                                alt="social-icon"
                                width={14}
                                height={14}
                                className="object-contain "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="top-0 left-0 absolute md:hidden">
                <img src="/main-agency/about-us/vertical-curve.png" alt="vertical" className="w-full h-full" />
            </div>
            <div className=" bottom-0 right-0 overflow-hidden absolute md:hidden">
                <img src="/main-agency/about-us/horizontal-curve.png" alt="horizontal" className="w-full h-full" />
            </div>

            <div className="px-6 md:px-10 lg:px-16 xl:px-30 pt-10 pb-6">

                {/* ════════════════════════════════════
            DESKTOP LAYOUT  (md and above)
            4 columns: [CTA] [Learn] [Explore] [Get In Touch]
            All aligned to the top on the same row
        ════════════════════════════════════ */}
                <div className="hidden md:grid md:grid-cols-[1.8fr_0.75fr_0.75fr_1.3fr] md:gap-x-8 lg:gap-x-12 md:items-start mb-10">

                    {/* CTA */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold leading-[130%] tracking-[-0.02em] mb-3">
                            Still here?<br />Say something then.
                        </h2>
                        <p className="text-white text-base mb-5 max-w-xs leading-[150%] tracking-[-0.02em]">
                            Tell us what&apos;s broken. We&apos;ll tell you exactly what we&apos;d do.
                        </p>
                        <div className="flex items-center gap-4">
                            <AgencyButton btncss="lg:text-[14px]! px- whitespace-nowrap " text=" Show Us How To Scale" />
                            <div className="flex flex-col items-left gap-2  flex-wrap">
                                <div className="flex items-center whitespace-nowrap gap-2">
                                    <span className="text-xs text-white font-semibold">5.0</span>
                                    <span className="text-xs text-zinc-500">from 68 reviews</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GoogleIcon />
                                    <Stars />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LEARN */}
                    <div>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Learn</p>
                        <ul className="space-y-2">
                            {["About", "Culture", "Testimonials", "Processes", "FAQs", "Blog"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* EXPLORE */}
                    <div>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Explore</p>
                        <ul className="space-y-2">
                            {["Home", "Work", "Case Study", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="pt-12">
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
                        <ContactList />
                    </div>
                </div>

                {/* ════════════════════════════════════
            MOBILE LAYOUT  (below md)
            Row 1: CTA full-width
            Row 2: [Learn] [Explore]  - 2-col side by side
            Row 3: Get In Touch full-width
        ════════════════════════════════════ */}
                <div className="md:hidden relative mb-10 space-y-8">

                    {/* CTA */}
                    <div className="pl-12 pt-3">
                        <h2 className="text-3xl font-bold leading-tight mb-3">
                            Still here?<br />Say something then.
                        </h2>
                        <p className="text-zinc-400 text-sm mb-5">
                            Tell us what&apos;s broken. We&apos;ll tell you exactly what we&apos;d do.
                        </p>
                        <div className="flex flex-col  gap-4">
                            <AgencyButton btncss="px-6! py-3!" text=" Show Us How To Scale" />
                            <div className="flex flex-col items-left gap-2  flex-wrap">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-white font-semibold">5.0</span>
                                    <span className="text-xs text-zinc-500">from 68 reviews</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <GoogleIcon />
                                    <Stars />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learn + Explore - 2-col grid */}
                    <div className="grid grid-cols-2 gap-x-8">
                        <div>
                            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Learn</p>
                            <ul className="space-y-2">
                                {["About", "Culture", "Testimonials", "Processes", "FAQs", "Blog"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors duration-150">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Explore</p>
                            <ul className="space-y-2">
                                {["Home", "Work", "Case Study", "Services", "Contact"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors duration-150">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Get In Touch - full width */}
                    <div>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
                        <ContactList />
                    </div>
                </div>

                {/* Big headline */}
                <div className=" pt-6 mb-6">
                    <h1 className="w-full font-normal text-center text-[clamp(2.4rem,11vw,8rem)]  leading-[100%] tracking-[-0.08em] text-white">
                        Leading since 2021
                    </h1>
                </div>

                {/* Bottom bar */}
                <div className=" pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-zinc-600 text-xs">
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                        <span>© Upthrust 2026</span>
                        <span>Company Reg Number 10529058</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="hover:text-zinc-300 transition-colors">Disclaimer</a>
                        <span>|</span>
                        <a href="#" className="hover:text-zinc-300 transition-colors">All Rights Reserved</a>
                        <span>|</span>
                        <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy (you really care?)</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default AgencyFooter;