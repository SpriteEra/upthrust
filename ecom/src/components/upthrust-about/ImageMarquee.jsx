'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function MarqueeSlider({
    topImages = [],
    bottomImages = [],
    speed = 40,
    pauseOnHover = true,
}) {
    return (
        <section className="w-full overflow-hidden  py-10">
            <div className=" space-y-1 sm:space-y-4 ">

                {/* Top Marquee → Left Direction */}
                <Marquee
                    speed={speed}
                    gradient={false}
                    // pauseOnHover={pauseOnHover}
                    direction="left"
                >
                    <div className="flex items-center max-sm:max-h-25 ">
                        {topImages.map((img, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-[2.25px] sm:rounded-2xl mr-1 sm:mr-4"
                            >
                                <Image
                                    src={img}
                                    alt={`top-image-${index}`}
                                    width={677}
                                    height={433}
                                    className="max-sm:w-[152px] aspect-152/97 lg:aspect-677/433 object-cover rounded-[2.25px] sm:rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>

                {/* Bottom Marquee → Right Direction */}
                <Marquee
                    speed={speed}
                    gradient={false}
                    // pauseOnHover={pauseOnHover}
                    direction="right"
                >
                    <div className="flex items-center max-sm:max-h-25 ">
                        {bottomImages.map((img, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-[2.25px] sm:rounded-2xl mr-1 sm:mr-4 "
                            >
                                <Image
                                    src={img}
                                    alt={`bottom-image-${index}`}
                                    width={677}
                                    height={433}
                                    className="max-sm:w-[152px] aspect-152/97 sm:aspect-677/433 object-cover rounded-[2.25px] sm:rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>

            </div>
        </section>
    )
}