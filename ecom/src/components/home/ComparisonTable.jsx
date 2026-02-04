import React from 'react';
import { Check, X } from 'lucide-react';
import { Curve1 } from '@/common/HandWritten';

// Note: Ensure fonts are configured in your layout.tsx or tailwind.config.js
// Inter: font-family: 'Inter', sans-serif;
// Instrument Serif: font-family: 'Instrument Serif', serif;

export const ComparisonTable = () => {
    const features = [
        { title: "In-House", sub: "Creative Team" },
        { title: "Multi-Channel Under", sub: "One Roof" },
        { title: "Rapid Testing", sub: "Cycles" },
        { title: "Retention Channel", sub: "Setup" },
        { title: "Conversion Rate", sub: "Optimization (CRO)" },
        { title: "Dedicated Account", sub: "Manager" },
        { title: "Free Ad", sub: "Account Audit" },
    ];

    return (
        <div className="sm:min-h-screen bg-white flex flex-col items-center justify-center text-[#1a1a1a] max-lg:px-1 overflow-hidden 3xl:mt-3">
            {/* Grid Container */}
            <div className="w-full lg:max-w-[950px] 3xl:max-w-[1200px] grid grid-cols-4 grid-cols-[2.5fr_1fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr_1fr] items-stretch relative">
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "7 things." },
                                { type: 'highlight', text: 'Only Us', bgColor: '#FF4500' },
                            ]
                        },

                    ]}
                    imageClassName='left-3 top-12 3xl:top-14 3xl:top-9 !h-16 3xl:!h-20 w-full'
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={-7}
                    imageIndex={2}
                    className="absolute left-25 xl:-left-28 3xl:-right-32 top-8 "

                />
                <Curve1
                    lines={[
                        {
                            parts: [
                                { type: "text", text: "47 brands. Some" },
                                { type: 'highlight', text: 'results', bgColor: '#FF4500' },
                            ]
                        },

                    ]}
                    imageClassName='-left-15 xl:-left-25 3xl:-left-30 -top-14 3xl:-top-16 !h-12 3xl:!h-14 w-full'
                    curvePosition="end"
                    curveFlipHorizontal={true}
                    curveFlipVertical={false}
                    tiltAngle={7}
                    imageIndex={3}
                    className="absolute -right-50 xl:-right-60 bottom-1/3 3xl:-right-70"

                />
                {/* Row 1: Headers */}
                <div className="self-end pb-12"></div>

                {/* Brand Header with Rocket */}
                <div className="lg:bg-[#f4f4f4] lg:rounded-t-4xl 3xl:rounded-t-[36px] flex flex-col items-center lg:pt-8 lg:pb-12">
                    <div className="bg-black p-2.5 lg:p-4 rounded-lg 3xl:rounded-lg shadow-lg ">
                        <svg className="relative z-10 size-4 lg:size-8 3xl:size-10.5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292103 8.29L4.75331 4.04101C5.00116 3.80496 5.29326 3.63634 5.62962 3.53518C5.96599 3.43401 6.3112 3.41715 6.66526 3.4846L8.70998 3.83868C7.73631 4.88406 6.94851 5.87465 6.3466 6.81044C5.74469 7.74623 5.18704 8.83798 4.67365 10.0857L0.292103 8.29ZM5.65618 10.5409C6.13417 9.31009 6.73607 8.15089 7.46191 7.06335C8.18774 5.97582 9.01094 4.99366 9.93151 4.11688C11.4894 2.63311 13.2686 1.5245 15.269 0.791041C17.2695 0.0575854 19.1372 -0.165824 20.8721 0.120814C21.173 1.7732 20.9429 3.55204 20.1817 5.45734C19.4204 7.36264 18.2609 9.05717 16.703 10.5409C15.7824 11.4177 14.7468 12.2018 13.5961 12.8931C12.4454 13.5844 11.2238 14.1576 9.93151 14.6129L5.65618 10.5409ZM13.2509 7.3795C13.6049 7.71672 14.0431 7.88533 14.5653 7.88533C15.0876 7.88533 15.5257 7.71672 15.8798 7.3795C16.2339 7.04228 16.4109 6.62497 16.4109 6.12757C16.4109 5.63016 16.2339 5.21285 15.8798 4.87563C15.5257 4.53841 15.0876 4.3698 14.5653 4.3698C14.0431 4.3698 13.6049 4.53841 13.2509 4.87563C12.8968 5.21285 12.7198 5.63016 12.7198 6.12757C12.7198 6.62497 12.8968 7.04228 13.2509 7.3795ZM12.3214 19.7218L10.4095 15.5487C11.7195 15.0597 12.8658 14.5286 13.8483 13.9553C14.8309 13.382 15.8709 12.6317 16.9685 11.7044L17.3403 13.6518C17.4111 13.989 17.3934 14.322 17.2872 14.6508C17.181 14.9796 17.0039 15.262 16.7561 15.4981L12.3214 19.7218ZM1.99161 13.8289C2.61122 13.2387 3.36361 12.9394 4.24877 12.931C5.13393 12.9226 5.88632 13.2134 6.50593 13.8036C7.12555 14.3937 7.43535 15.1103 7.43535 15.9533C7.43535 16.7964 7.12555 17.513 6.50593 18.1031C6.04565 18.5415 5.32867 18.904 4.35499 19.1907C3.38131 19.4773 1.92965 19.7471 0 20C0.265548 18.1621 0.5488 16.7838 0.849755 15.8648C1.15071 14.9459 1.53133 14.2672 1.99161 13.8289Z" fill={'#ffffff'} className="size-4 lg:size-8 3xl:size-10.5" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-end justify-center pb-3 lg:pb-12 text-[10px] text-center xs:text-xs md:text-sm 3xl:text-xl font-semibold max-xs:leading-3  tracking-[-0.02em]  3xl:leading-7.5">
                    Traditional Agency
                </div>
                <div className="flex items-end justify-center pb-3 lg:pb-12 text-[10px] text-center xs:text-xs md:text-sm 3xl:text-xl font-semibold max-xs:leading-3  tracking-[-0.02em]  3xl:leading-7.5">
                    In-House
                </div>

                {/* Feature Rows */}
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        {/* Label Column */}
                        <div className="py-3 xs:py-5 md:py-10 3xl:py-7 max-lg:px-3 lg:pr-12 text-right flex items-center lg:min-w-sm">
                            <p className="align-middle max-w-sm md:text-start text-center tracking-[-0.02em] max-xs:leading-[14px]">
                                <span
                                    className="font-semibold text-sm lg:text-base 3xl:text-xl text-center tracking-[-0.02em]  lg:leading-7.5"
                                >
                                    {feature.title}
                                </span>

                                <span
                                    className="ml-1 font-instrument italic text-sm lg:text-base 3xl:text-xl  lg:leading-7.5"
                                >
                                    {feature.sub}
                                </span>
                            </p>
                        </div>
                        {/* // ${index === features.length - 1 ? 'rounded-bl-4xl 3xl:rounded-bl-[35px]' : '' */}
                        {/* Brand Check Column */}
                        <div className={`flex justify-center items-center py-2 xs:py-5 md:py-10 3xl:py-7 bg-[#F4F4F4] border-b-2 border-white`}>
                            <div className="p-1.5 xs:p-2 md:p-3 3xl:size-16 rounded-full bg-white flex items-center justify-center">
                                <div className="p-0.5 xs:p-1 3xl:size-8 rounded-full bg-(--red) flex items-center justify-center ">
                                    <Check className="text-white size-2 md:size-4 3xl:size-5" strokeWidth={4} />
                                </div>
                            </div>
                        </div>

                        {/* Traditional Agency Column */}
                        <div className="flex justify-center items-center py-2 xs:py-5 md:py-10 3xl:py-7 bg-[#F9F9F9] border-b-2 border-white">
                            <X className="text-[#9FA4B3] size-5 xs:size-9 md:size-10 3xl:size-8 font-thin" strokeWidth={2} />
                        </div>

                        {/* In-House Column */}
                        <div className={`flex justify-center items-center py-2 xs:py-5 md:py-10 3xl:py-7 bg-[#F9F9F9] border-b-2 border-white ${index === features.length - 1 ? 'lg:rounded-br-4xl 3xl:rounded-br-[35px]' : ''
                            } ${index === 0 ? 'lg:rounded-tr-4xl 3xl:rounded-tr-[35px]' : ''}`}>
                            <X className="text-[#9FA4B3] size-5 xs:size-9 md:size-10 3xl:size-8 font-thin" strokeWidth={2} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};