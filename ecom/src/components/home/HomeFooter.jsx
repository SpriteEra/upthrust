import React from 'react'

const HomeFooter = ({ customeCss = "mt-20 md:mt-50" }) => {
    return (
        <div className={`relative mb-3 md:mb-5 ${customeCss}`}>
            <div className="w-full overflow-hidden -mb-4 md:-mb-2 3xl:-mb-2 z-1">
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="16"
                    className=""
                >
                    {[...Array(8)].map((_, index) => (
                        <p
                            key={index}
                            className="inline-block mr-20 text-8xl lg:text-[130px] 3xl:text-[180px] font-semibold"
                        >
                            <span className="size-14 md:size-20 rounded-full bg-(--red) inline-block"></span>  Upthrust Leading since 2020
                        </p>
                    ))}
                </marquee>
            </div>

            <div className='px-3 px-5 lg:px-20 z-10 relative'>
                <div className='bg-(--red) px-4 md:px-6 py-4 md:py-10 text-white text-xl md:text-3xl uppercase 3xl:text-4xl font-semibold'>
                    <div className="flex items-center gap-2 flex-wrap">
                        <button className="inline-flex items-center gap-1 sm:gap-2 border border-white rounded-full px-2 md:px-3 py-1 md:py-1.5 uppercase text-[8px] md:text-xs 3xl:text-xs">
                            <svg className='size-2 md:size-3' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C7.23765 3.76317 10.2368 6.76236 14 7C10.2368 7.23765 7.23765 10.2368 7 14C6.76236 10.2368 3.76317 7.23765 0 7C3.76317 6.76236 6.76236 3.76317 7 0Z" fill="white" />
                            </svg>
                            Any questions?
                        </button>
                        <p>
                            YOUR SUBMISSION GOES HERE. <span className='md:hidden'>OUR EXCITED RESPONSE COMES SHORTLY AFTER. COINCIDENCE? WE THINK NOT.</span>

                        </p>
                    </div>
                    <div className='max-md:hidden'>
                        OUR EXCITED RESPONSE COMES SHORTLY AFTER. <br className='max-md:hidden' />
                        COINCIDENCE? WE THINK NOT.

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter