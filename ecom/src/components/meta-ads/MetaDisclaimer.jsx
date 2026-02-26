
"use client"
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MetaRocketButton from './MetaRocketButton'

export const Disclaimer = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mt-16 lg:mt-12 3xl:mt-14 border-t border-gray-300 pt-2 md:pt-3">
            <button
                onClick={() => setOpen(!open)}
                className="font-medium text-sm 3xl:text-sm text-black flex items-center gap-2">
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
                <div className="rounded-xl bg-white text-xs 3xl:text-sm space-y-4">
                    <section>
                        <h4 className="font-semibold">Client Relationships & Brand Logos</h4>
                        <p>
                            The logos, trademarks, and brand names displayed on this website represent a combination of:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Clients we've worked with directly</li>
                            <li>Clients we've worked with indirectly through partner agencies</li>
                            <li>
                                Clients of our fulfilment partner, Division D, for whom we have written consent to showcase their results
                            </li>
                        </ul>
                        <p> Demonstration projects created to illustrate our creative capabilities and marketing frameworks</p>
                    </section>

                    <section>
                        <h4 className="font-semibold">Important clarifications:</h4>
                        <p>
                            The inclusion of any brand logo or case study on this website is for illustrative and educational purposes only. Unless explicitly stated otherwise, these logos do not imply direct affiliation, endorsement, partnership, or ongoing business relationships with the brands portrayed. Some sample advertisements and creative work showcased are demonstration pieces developed to display our creative potential and are not live campaigns for the brands shown. <br />
                            We have worked with some of these brands directly, some through third-party agencies, and some are clients of our partners. In all cases where we showcase specific results or testimonials, we have obtained proper authorization.
                        </p>
                    </section>

                    <section>
                        <h4 className="font-semibold">Intellectual Property Rights</h4>
                        <p>
                            We respect the intellectual property rights of all parties. All trademarks, logos, and brand names remain the property of their respective owners. If you are a copyright or trademark holder and have concerns about the use of your brand assets on this website, please contact us immediately at [contact@upthrust.io], and we will address your concerns promptly.
                        </p>
                    </section>
                    <section>
                        <h4 className="font-semibold">Third-Party Content & Referrals</h4>
                        <p>
                            Upthrust may link to, reference, or recommend content, tools, and services created by or provided by third parties not affiliated with our company. We are not responsible for such third-party content and do not endorse or approve it unless explicitly stated. We may provide services in partnership with or refer you to third-party businesses. Some of these businesses may have common interests, partnerships, or shared ownership with Upthrust. Any such relationships will be disclosed when relevant.
                        </p>
                    </section>

                    <section>
                        <h4 className="font-semibold">Platform Disclaimers</h4>
                        <p>
                            This website is not affiliated with, endorsed by, or approved by YouTube, Google, Bing, Facebook, Meta, Microsoft, or any of their parent companies or subsidiaries.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>FACEBOOK® is a registered trademark of Meta Platforms, Inc.</li>
                            <li>YOUTUBE® is a registered trademark of Google LLC</li>
                            <li>GOOGLE® is a registered trademark of Google LLC</li>
                            <li>BING® is a registered trademark of Microsoft Corporation</li>
                            <li>INSTAGRAM® is a registered trademark of Meta Platforms, Inc.</li>
                            <li>META® is a registered trademark of Meta Platforms, Inc.</li>
                        </ul>
                        <p>
                            All trademarks and registered trademarks are the property of their respective owners.
                        </p>
                    </section>

                    <section>
                        <h4 className="font-semibold">Questions or Concerns?</h4>
                        <p>
                            If you have any questions about the content on this website, our client relationships, or the use of any brand assets, please contact us at:
                        </p>
                        <p>
                            <strong>Email: </strong> sales@upthrust.io
                        </p>
                        <p>
                            <strong>Address: </strong> 5th Floor, DLF Two Horizon Centre, Harizan Colony, DLF Phase 5, Sector 43, Gurugram, Haryana 122009

                        </p>
                        <p className='underline font-bold mt-1'>
                            <Link href={'/privacy-policy'}>Privacy Policy </Link>

                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

const MetaDisclaimer = () => {
    return (
        <div className='px-2 md:px-20 flex flex-col pt-24 md:pt-50'>
            <div className='flex justify-between max-xs:flex-col-reverse  gap-20'>
                <div className=''>
                    <p className='font-semibold text-5xl md:text-4xl 3xl:text-5xl tracking-[-0.02em] 3xl:leading-15'>Do you have <br />any questions?</p>
                    <p className='text-base md:text-sm 3xl:text-base mt-1 mb-8 3xl:mb-10'>FBook a free consultation.</p>

                    <MetaRocketButton />
                </div>
                <div className='flex flex-col justify-between items-center gap-8'>
                    <Image
                        src={'/logo.png'}
                        alt='Upthrust'
                        width={400}
                        height={300}
                        className='h-16 lg:h-14 3xl:h-16 w-full object-contain'
                    />
                    <div className='flex gap-3 items-start'>
                        <span className='text-[#0457CB] font-semibold text-3xl max-xs:hidden'>/</span>
                        <p className='text-sm md:text-xs 3xl:text-base max-w-100 3xl:max-w-90 xs:max-w-70 leading-[140%]'>No fluff. No vanity metrics. Just Meta ads that make you more money than they cost.</p>
                    </div>
                </div>
            </div>
            <Disclaimer />
        </div>
    )
}

export default MetaDisclaimer