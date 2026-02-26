import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CutCornerBackground } from "./CutBox";
import ArrowNote from "@/common/ArrowNote";
import UiUxRocketButton from "./UiUxRocketButton";

const badges = [
    { image: "/badges/user-love.webp", alt: "User Love Badge" },
    { image: "/badges/moment-leader.webp", alt: "Moment Leader Badge" },
    { image: "/badges/best-roi.webp", alt: "Best Roi Badge" },
    { image: "/badges/most-implementable.webp", alt: "Most Implementable Badge" },
    { image: "/badges/high-performer.webp", alt: "High Performer Badge" },
    {
        image: "/badges/highest-user-adoption.webp",
        alt: "Highest User Adoption Badge",
    },
];
const ReadyToMoveUiUx = () => {
    return (
        <div className="bg-black p-4 md:pt-14 lg:pt-24 lg:pb-24 md:px-6 lg:px-6 mt-36 3xl:mt-42 relative overflow-hidden">



            <div className="max-w-5xl 3xl:max-w-[1250px] mx-auto relative">
                <ArrowNote
                    lines={[
                        {
                            parts: [{ type: "text", text: "No Pressure;" }],
                        },
                        {
                            parts: [
                                { type: "text", text: "just a" },
                                {
                                    type: "highlight",
                                    text: "conversation",
                                    bgColor: "#FF4500",
                                },
                            ],
                        },
                    ]}
                    imageClassName="left-3 top-20 3xl:top-26 3xl:size-20!"
                    curvePosition="end"
                    textClassName="text-white!"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={5}
                    imageIndex={7}
                    className="absolute top-1/4 !text-white right-10 xl:-right-42 1600:-right-50 1800:-right-60  max-w-[300px] 3xl:max-w-[350px]"
                />
                {/* CTA CARD */}
                <CutCornerBackground
                    hideCutOnMobile={true}
                    bgColor="white"
                    cutWidth={10}
                    cutHeight={14}
                    cutRadius={1}
                    borderRadius={5}
                >
                    <div className="max-md:bg-white rounded-xl md:rounded-2xl lg:rounded-3xl 3xl:rounded-4xl max-md:pb-6 p-10 md:px-20 3xl:px-30 md:py-8 lg:py-8 2xl:py-12 3xl:py-14 text-center relative overflow-hidden">
                        <div className="max-w-4xl 3xl:max-w-5xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-semibold text-black tracking-[-0.02em] 3xl:leading-[90px]">
                                Ready To Move Forward <br className="hidden md:block" />
                                With Clarity?
                            </h2>

                            <p className="text-black/70 text-sm md:text-lg 3xl:text-xl max-w-xl 3xl:max-w-2xl mx-auto mb-5 tracking-[-0.02em] 3xl:leading-7.5 max-lg:mt-3">
                                Schedule a <span className="font-semibold">free 30-minute consultation</span>. Tell us where you're
                                stuck. We'll tell you what to fix first, and what can wait.
                            </p>

                            {/* CTA Button */}
                            <div className="flex justify-center mb-5 md:mb-10">
                                <UiUxRocketButton />
                            </div>

                            <hr className="border-t lg:border-t-2 border-black/30 my-5 md:my-8 3xl:mt-12" />
                            <div className="flex items-center md:justify-between flex-wrap gap-2 max-md:justify-center">
                                {["30 Minutes", "Clear Direction", "No Obligation"].map(
                                    (item, index) => (
                                        <div className="flex items-center gap-1 lg:gap-2" key={index}>
                                            <span className="size-7.5 flex items-center justify-center rounded-full bg-[#f45d48] text-white text-xs">
                                                <Check strokeWidth={4} className="size-4" />
                                            </span>
                                            <span className="text-black lg:font-semibold text-xl sm:text-xl 3xl:text-2xl tracking-[-0.02em]">
                                                {item}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </CutCornerBackground>

                {/* BADGES ROW */}
                <div className="flex mt-18 flex-wrap gap-5 sm:gap-6 md:gap-10 w-full items-center justify-center">
                    {badges.map((item, index) => (
                        <Image
                            key={index}
                            width={120}
                            height={120}
                            alt={item.alt}
                            src={item.image}
                            className="w-16 sm:w-18 md:w-24 3xl:w-30 h-full object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadyToMoveUiUx;