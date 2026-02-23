import React from "react";

const MetaHeading = ({
    tag: Tag = "h2",
    heading = [],
    label = "",
    subtitle = "",
    subTitleCss = "",
    align = "center", // left | center | right
}) => {

    const containerAlign =
        align === "left"
            ? "items-center lg:items-start"
            : align === "right"
                ? "items-center lg:items-end"
                : "items-center";

    const textAlign =
        align === "left"
            ? "text-center lg:text-left"
            : align === "right"
                ? "text-center lg:text-right"
                : "text-center";

    return (
        <div className={`flex flex-col max-sm:px-2 ${containerAlign}`}>

            {label && (
                <span className="text-sm 3xl:text-sm leading-[150%] tracking-[-0.02em] uppercase">
                    {label}
                </span>
            )}

            <div className="mt-5 w-full">
                <Tag className={`${textAlign} tracking-[-0.02em] xl:tracking-[-0.04em]`}>
                    {heading.map((row, rowIndex) => {
                        const baseClass =
                            "text-[2.25rem] md:text-[2.5rem] lg:text-[3.125rem] xl:text-[3.75rem] 3xl:text-[4.5rem] font-semibold text-center leading-11 md:leading-[130%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize";

                        const italicClass =
                            "text-[2.625rem] md:text-[3.125rem] lg:text-[3.4375rem] xl:text-[4.375rem] 3xl:text-[5rem] font-normal text-center leading-11 xl:leading-[120%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic";

                        return (
                            <React.Fragment key={rowIndex}>
                                {row.line.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`${item.type === "italic" ? italicClass : baseClass}`}
                                    >
                                        {item.text}&nbsp;
                                    </span>
                                ))}
                                <br />
                            </React.Fragment>
                        );
                    })}
                </Tag>
            </div>

            {subtitle && (
                <span
                    className={`text-lg lg:text-sm 3xl:text-lg mb-10 mt-5 text-center leading-[150%] tracking-[-0.02em] ${textAlign} ${subTitleCss}`}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default MetaHeading;
