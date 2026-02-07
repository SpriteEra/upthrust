import React from "react";

const EcomHeading = ({
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
                <Tag className={`${textAlign}`}>
                    {heading.map((row, rowIndex) => {
                        const baseClass =
                            "text-4xl md:text-4xl lg:text-[55px] xl:text-6xl 3xl:text-7xl font-semibold text-center leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] capitalize";

                        const italicClass =
                            "capitalize text-4xl  md:text-4xl lg:text-[65px] xl:text-7xl 3xl:text-[5rem] font-instrument italic leading-11 md:leading-[120%] tracking-[-0.02em] xl:tracking-[-0.04em] font-normal capitalize";

                        return (
                            <React.Fragment key={rowIndex}>
                                {row.line.map((item, index) => (
                                    <span
                                        key={index}
                                        className={item.type === "italic" ? italicClass : baseClass}
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
                    className={`text-lg lg:text-sm 3xl:text-lg mt-2 mb-10 text-center tracking-[-0.02em] ${textAlign} ${subTitleCss}`}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default EcomHeading;
