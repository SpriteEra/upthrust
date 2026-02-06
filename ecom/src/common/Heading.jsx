import React from "react";

const UIUXHeading = ({
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
                <span className="text-sm md:text-xs 3xl:text-sm uppercase">
                    {label}
                </span>
            )}

            <div className="mt-5 w-full">
                <Tag className={`${textAlign} tracking-[-0.02em] xl:tracking-[-0.04em]`}>
                    {heading.map((row, rowIndex) => {
                        const baseClass =
                            "text-4xl md:text-4xl lg:text-7xl xl:text-[5.5rem] 3xl:text-[6.5rem] font-medium text-center leading-11 md:leading-[100%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize";

                        const italicClass =
                            "text-4xl md:text-4xl lg:text-7xl xl:text-[5.5rem] 3xl:text-9xl font-normal text-center leading-11 xl:leading-[100%] tracking-[-0.02em] xl:tracking-[0em] capitalize font-instrument italic";

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
                    className={`text-lg lg:text-sm 3xl:text-lg mb-10 mt-5 text-center tracking-[-0.02em] ${textAlign} ${subTitleCss}`}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default UIUXHeading;
