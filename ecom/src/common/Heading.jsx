import React from "react";

// const headingData = [
//   {
//     line: [
//       { type: "normal", text: "How To Scale" },
//       { type: "italic", text: "D2C brands" },
//     ],
//   },
//   {
//     line: [
//       { type: "normal", text: "Scale to" },
//       { type: "italic", text: "₹2.5Cr+/month" },
//     ],
//   },
// ];

const Heading = ({
    tag: Tag = "h2", // h1 | h2 | h5
    heading = [],
    label = "Our services",
    subtitle = "",
    subTitleCss = ""
}) => {
    return (
        <div className="flex flex-col items-center">
            {label && (
                <span className="text-sm md:text-xs 3xl:text-sm uppercase">
                    {label}
                </span>
            )}

            <div className="flex flex-col items-center justify-center mt-5 gap-3">
                {heading.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex gap-1 sm:gap-3 flex-wrap items-center justify-center"
                    >
                        <Tag className="text-center ">
                            {row.line.map((item, index) => {
                                const baseClass =
                                    "text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-[6.5rem] font-medium";

                                const italicClass =
                                    "italic font-instrument text-4xl md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-9xl font-normal";

                                return (
                                    <span
                                        key={index}
                                        className={
                                            item.type === "italic" ? italicClass : baseClass
                                        }
                                    >
                                        {item.text}
                                    </span>
                                );
                            })}
                        </Tag>
                    </div>
                ))}
            </div>

            {subtitle && (
                <span className={`text-[15px] sm:text-sm xl:text-base 3xl:text-lg mt-2 text-center ${subTitleCss}`}>
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default Heading;
