"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GoogleAdsRoiPrediction2 = () => {
    const wrapperRef = useRef(null);
    const trafficRef = useRef(null);
    const conversionRef = useRef(null);
    const trafficTabRef = useRef(null);
    const conversionTabRef = useRef(null);
    const indicatorRef = useRef(null);


    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    const imgARef = useRef(null);
    const imgBRef = useRef(null);
    const textARef = useRef(null);
    const textBRef = useRef(null);
    const leftTextARef = useRef(null);
    const leftTextBRef = useRef(null);
    const leftTitleARef = useRef(null);
    const leftTitleBRef = useRef(null);

    const listARef = useRef(null);
    const listBRef = useRef(null);

    const buttonARef = useRef(null);
    const buttonBRef = useRef(null);


    const fadeToggle = (showA, refA, refB) => {
        if (!refA?.current) return;

        if (showA) {
            gsap.to(refA.current, { opacity: 1, duration: 0.6 });
            refB?.current && gsap.to(refB.current, { opacity: 0, duration: 0.6 });
        } else {
            if (!refB?.current) return;
            gsap.to(refA.current, { opacity: 0, duration: 0.6 });
            gsap.to(refB.current, { opacity: 1, duration: 0.6 });
        }
    };

    const crossed = useRef(false);

    useGSAP(() => {
        gsap.set(conversionRef.current, { opacity: 0, x: 100 });

        const container = trafficTabRef.current.parentElement;
        const trafficRect = trafficTabRef.current.getBoundingClientRect();
        const conversionRect = conversionTabRef.current.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const leftRect = leftContainer.current.getBoundingClientRect();
        const rightRect = rightContainer.current.getBoundingClientRect();

        // distance needed to swap
        const swapX = rightRect.left - leftRect.left;


        const trafficX = 0;
        const conversionX = conversionRect.left - containerRect.left;

        gsap.set(indicatorRef.current, {
            x: trafficX,
            width: 200,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "top -150%",
                scrub: true,
                pin: true,
                markers: true,
                onUpdate: (self) => {
                    gsap.to(indicatorRef.current, {
                        x: gsap.utils.interpolate(trafficX, conversionX, self.progress),
                        width: gsap.utils.interpolate(
                            200,
                            conversionRect.width,
                            self.progress
                        ),
                        backgroundColor: self.progress > 0.5 ? "#3B82F6" : "#FACC15",
                        overwrite: true,
                        duration: 0.1,
                    });
                    gsap.to(trafficTabRef.current, {
                        color: self.progress > 0.5 ? "#9CA3AF" : "#000000",
                        overwrite: true,
                        duration: 0.1,
                    });

                    gsap.to(conversionTabRef.current, {
                        color: self.progress > 0.5 ? "#000000" : "#9CA3AF",
                        overwrite: true,
                        duration: 0.1,
                    });
                    if (self.progress > 0.5 && !crossed.current) {
                        crossed.current = true;
                        fadeToggle(false, leftTitleARef, leftTitleBRef);
                        fadeToggle(false, listARef, listBRef);
                        fadeToggle(false, buttonARef, buttonBRef);
                        gsap.to(".gsap-bg", {
                            backgroundColor: "#E7F0FF",
                            duration: 0.6,
                            ease: "power2.out",
                        });

                        // IMAGE CROSS FADE
                        gsap.to(imgARef.current, { opacity: 0, duration: 0.6 });
                        gsap.to(imgBRef.current, { opacity: 1, duration: 0.6 });

                        // FULL POSITION SWAP
                        gsap.to(leftContainer.current, {
                            x: rightRect.right - leftRect.right,
                            duration: 0.8,
                            ease: "power3.inOut",
                        });

                        gsap.to(rightContainer.current, {
                            x: -swapX,
                            duration: 0.8,
                            ease: "power3.inOut",
                        });
                        gsap.to(leftTextARef.current, {
                            y: "-100%",
                            opacity: 0,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        gsap.to(leftTextBRef.current, {
                            y: "0%",
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        // TEXT SWAP (UP / DOWN)
                        gsap.to(textARef.current, {
                            y: "-100%",
                            opacity: 0,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        gsap.to(textBRef.current, {
                            y: "0%",
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                    }
                    if (self.progress <= 0.5 && crossed.current) {
                        crossed.current = false;
                        fadeToggle(true, leftTitleARef, leftTitleBRef);
                        fadeToggle(true, listARef, listBRef);
                        fadeToggle(true, buttonARef, buttonBRef);
                        gsap.to(".gsap-bg", {
                            backgroundColor: "#FFE187",
                            duration: 0.6,
                            ease: "power2.out",
                        });

                        gsap.to(imgARef.current, { opacity: 1, duration: 0.6 });
                        gsap.to(imgBRef.current, { opacity: 0, duration: 0.6 });

                        gsap.to(leftContainer.current, {
                            x: 0,
                            duration: 0.8,
                            ease: "power3.inOut",
                        });

                        gsap.to(rightContainer.current, {
                            x: 0,
                            duration: 0.8,
                            ease: "power3.inOut",
                        });

                        gsap.to(leftTextARef.current, {
                            y: "0%",
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        gsap.to(leftTextBRef.current, {
                            y: "100%",
                            opacity: 0,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        gsap.to(textARef.current, {
                            y: "0%",
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                        gsap.to(textBRef.current, {
                            y: "100%",
                            opacity: 0,
                            duration: 0.6,
                            ease: "power3.out",
                        });

                    }

                },
            },
        })
        // .to(trafficRef.current, { opacity: 0, x: -100, duration: 1 })
        // .to(conversionRef.current, { opacity: 1, x: 0, duration: 1 }, "<");
    }, { scope: wrapperRef });

    return (
        <div ref={wrapperRef} className="relative min-h-[100vh] overflow-hidden bg-white">
            <div className="container mx-auto px-4 mt-5">
                {/* Heading */}

                {/* Tabs
        <div className="relative max-w-fit mx-auto mb-12">
          <div className="flex justify-center gap-12 relative pb-3">
            <button
              ref={trafficTabRef}
              className="text-xl 3xl:text-2xl font-semibold px-4 py-2 transition-colors text-black min-w-[200px]"
            >
              Traffic
            </button>
            <button
              ref={conversionTabRef}
              className="text-xl 3xl:text-2xl font-semibold px-4 py-2 transition-colors text-gray-400 min-w-[200px]"
            >
              Conversion of Traffic
            </button>
          </div>
          <div className="absolute bottom-[9px] left-0 right-0 h-0.5 bg-gray-300" />
          <div
            ref={indicatorRef}
            className="absolute bottom-2 h-1 rounded-full bg-yellow-400 z-10"
          />
        </div> */}

                {/* Content */}
                <div className="relative min-h-155 3xl:h-[750px]">
                    {/* TRAFFIC SECTION */}
                    <div
                        ref={trafficRef}
                        className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-6 3xl:gap-8 px-4 h-full"
                    >
                        {/* Left - Icon & Description */}
                        <div className="col-span-5 gap-6 3xl:gap-8 flex flex-col h-full" ref={leftContainer}>
                            <div className="bg-[#FFE187] gsap-bg rounded-3xl p-5 3xl:p-7 w-full h-full">
                                <Image
                                    src={'/icons/cloud-network.png'}
                                    width={100}
                                    height={100}
                                    className="size-25 3xl:size-30 object-contain"
                                    alt="Could Internet Icon"
                                />
                                {/* text1  */}
                                <div className="relative overflow-hidden h-full mt-10 leading-tight pb-5">
                                    <p
                                        ref={leftTextARef}
                                        className="absolute inset-0 text-xl 3xl:text-2xl leading-8"
                                        style={{ opacity: 1, transform: "translateY(0%)" }}
                                    >
                                        You need traffic at buying temperature. That means targeting keyword themes built on the Hagakure framework single-theme ad groups that match searcher intent at 95%.
                                    </p>

                                    <p
                                        ref={leftTextBRef}
                                        className="absolute inset-0 text-xl 3xl:text-2xl leading-[150%] tracking-[-0.02em]"
                                        style={{ opacity: 0, transform: "translateY(100%)" }}
                                    >
                                        Most agencies stop at the click. <br /> Then ninety-six percent leave. <br /> <br />
                                        Getting traffic is half the job. The other half: making sure visitors understand what you do and why it matters in eight seconds.
                                    </p>
                                </div>


                            </div>
                            <div className="bg-[#FFE187] gsap-bg rounded-3xl p-5 3xl:p-7 w-full ">
                                {/* text1 */}
                                <div className="relative">
                                    <p
                                        ref={leftTitleARef}
                                        className="absolute inset-0 text-2xl 3xl:text-[1.75rem] font-semibold"
                                        style={{ opacity: 1 }}
                                    >
                                        Retargeting ladder for who hasn't converted
                                    </p>

                                    <p
                                        ref={leftTitleBRef}
                                        className="absolute inset-0 text-2xl 3xl:text-[1.75rem] font-semibold"
                                        style={{ opacity: 0 }}
                                    >
                                        Conversion-focused landing page optimization
                                    </p>
                                </div>


                                <div className="relative overflow-hidden min-h-[6rem] mt-4">
                                    <ul
                                        ref={listARef}
                                        className="absolute inset-0 text-base 3xl:text-2xl space-y-1 pl-2"
                                        style={{ opacity: 1 }}
                                    >
                                        <li>• Display ads with social proof (7 days)</li>
                                        <li>• YouTube case studies (14 days)</li>
                                        <li>• Demand Gen offer (21 days)</li>
                                    </ul>

                                    <ul
                                        ref={listBRef}
                                        className="absolute inset-0 text-base 3xl:text-2xl space-y-1 pl-2"
                                        style={{ opacity: 0 }}
                                    >
                                        <li>• Page speed & clarity fixes</li>
                                        <li>• Above-the-fold offer clarity</li>
                                        <li>• Conversion tracking cleanup</li>
                                    </ul>
                                </div>


                                {/* text2 */}
                                {/* One client went from two percent conversions to six percent. Same traffic, different page. Triple the revenue. */}

                                {/* button1-> text = high quality traffic and color bg-[#FBBC04]
                button2-> text = I want a 25% converting page and color bg-[#1A73E8] */}
                                <div className="relative overflow-hidden h-[3.5rem] mt-7">
                                    <button
                                        ref={buttonARef}
                                        className="absolute inset-0 bg-[#FBBC04] px-10 py-2 rounded-full text-lg 3xl:text-2xl"
                                        style={{ opacity: 1 }}
                                    >
                                        I'm stuck, I need high quality traffic
                                    </button>

                                    <button
                                        ref={buttonBRef}
                                        className="absolute inset-0 bg-[#1A73E8] text-white px-10 py-2 rounded-full text-lg 3xl:text-2xl"
                                        style={{ opacity: 0 }}
                                    >
                                        I want a 25% converting page
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="col-span-7 overflow-hidden bg-[#FFE187] gsap-bg rounded-3xl p-5 3xl:p-7 pb-0 pr-0 flex h-full flex-col" ref={rightContainer}>
                            <div className="relative overflow-hidden h-28 3xl:h-32">
                                <p
                                    ref={textARef}
                                    className="absolute left-0 top-0 text-8xl 3xl:text-[9.375rem] whitespace-nowrap bg-linear-to-b from-[#301805] to-transparent bg-clip-text text-transparent"
                                    style={{ opacity: 1, transform: "translateY(0%)" }}
                                >
                                    User's who buy
                                </p>

                                <p
                                    ref={textBRef}
                                    className="absolute left-0 top-0 text-8xl 3xl:text-[9.375rem] whitespace-nowrap bg-linear-to-b from-[#301805] to-transparent bg-clip-text text-transparent"
                                    style={{ opacity: 0, transform: "translateY(100%)" }}
                                >
                                    Revenue Automation
                                </p>
                            </div>

                            <div className="relative ">
                                <div className=" absolute top-0 left-0 bottom-0 right-0 3xl:-right-10 ">
                                    <div className="relative w-full h-133 3xl:h-150">
                                        <img
                                            ref={imgARef}
                                            src="/google-ads/analytics-dashboard.png"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ opacity: 1 }}
                                        />

                                        <img
                                            ref={imgBRef}
                                            src="/google-ads/revenue-dashboard.png"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ opacity: 0 }}
                                        />
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsRoiPrediction2;