"use client"
import StylishButton from '@/common/RocketButton'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const AskQuestionAndDisclaimer = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='px-2 md:px-20 flex flex-col pt-14 md:pt-50'>
            <div className='flex justify-between max-xs:flex-col-reverse border-b border-gray-300 pb-10 md:pb-14 gap-20'>
                <div className=''>
                    <p className='font-semibold text-5xl md:text-4xl 3xl:text-5xl'>Do you have <br />any questions?</p>
                    <p className='text-base md:text-sm 3xl:text-base mt-1 mb-8 3xl:mb-10'>Feel free to send us your questions or request a free consultation.</p>

                    <StylishButton />
                </div>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Image
                        src={'/logo.png'}
                        alt='Upthrust'
                        width={400}
                        height={300}
                        className='h-14 3xl:h-16 w-full object-contain'
                    />
                    <div className='flex gap-3 items-start'>
                        <span className='text-[#DB2F15] font-semibold text-3xl max-xs:hidden'>/</span>
                        <p className='text-sm md:text-xs 3xl:text-sm max-w-100 xs:max-w-70'>Paid ads, scroll-stopping creatives, and profitable campaigns. We build growth systems for D2C brands that actually scale.</p>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <button
                    onClick={() => setOpen(!open)}
                    className="font-medium text-sm 3xl:text-base text-black flex items-center gap-2">
                    Disclaimer

                    <span
                        className={`
                    inline-flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${open ? "rotate-180 opacity-100" : "rotate-0 opacity-80"}
                    `}
                    >
                        {open ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                </button>


                {/* CONTENT */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="rounded-xl bg-white text-xs 3xl:text-sm leading-relaxed space-y-4">
                        <section>
                            <h4 className="font-semibold">Client Relationships & Brand Logos</h4>
                            <p>
                                The logos, trademarks, and brand names displayed on this website
                                represent a combination of:
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Clients we’ve worked with directly</li>
                                <li>Clients we’ve worked with indirectly through partner agencies</li>
                                <li>
                                    Clients of our fulfillment partner, Division D, for whom we have
                                    written consent to showcase their results
                                </li>
                            </ul>
                            <p> Demonstration projects created to illustrate our creative
                                capabilities and marketing frameworks</p>
                        </section>

                        <section>
                            <h4 className="font-semibold">Important Clarifications</h4>
                            <p>
                                The inclusion of any brand logo or case study on this website is
                                for illustrative and educational purposes only. Unless explicitly
                                stated otherwise, these logos do not imply direct affiliation,
                                endorsement, partnership, or ongoing business relationships.
                            </p>
                        </section>

                        <section>
                            <h4 className="font-semibold">Intellectual Property Rights</h4>
                            <p>
                                All trademarks, logos, and brand names remain the property of their
                                respective owners. If you are a copyright or trademark holder and
                                have concerns, please contact us at{" "}
                                <strong>contact@upthrust.io</strong>.
                            </p>
                        </section>

                        <section>
                            <h4 className="font-semibold">Platform Disclaimers</h4>
                            <ul className="list-disc pl-5">
                                <li>Facebook® is a trademark of Meta Platforms, Inc.</li>
                                <li>YouTube® and Google® are trademarks of Google LLC</li>
                                <li>Bing® is a trademark of Microsoft Corporation</li>
                                <li>Instagram® and Meta® are trademarks of Meta Platforms, Inc.</li>
                            </ul>
                        </section>

                        <section>
                            <h4 className="font-semibold">Questions or Concerns?</h4>
                            <p>
                                Email: <strong>sales@upthrust.io</strong>
                                <br />
                                Address: DLF Two Horizon Centre, Sector 43, Gurugram, Haryana
                                122009
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQuestionAndDisclaimer