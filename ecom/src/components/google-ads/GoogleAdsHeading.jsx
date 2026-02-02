const GoogleAdsHeading = ({
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
                <Tag className={`${textAlign} text-[2.625rem] xl:text-[3.5rem] 3xl:text-7xl font-semibold leading-tight`}>
                    {heading.map((row, rowIndex) => (

                        row.line.map((item, index) => (
                            <span
                                key={index}
                                className=""
                            >
                                {item.text} <br />
                            </span>
                        ))
                    ))}
                </Tag>



            </div>

            {subtitle && (
                <span
                    className={`text-lg xl:text-base 3xl:text-lg mt-2 ${textAlign} ${subTitleCss}`}
                >
                    {subtitle}
                </span>
            )}
        </div>
    );
};

export default GoogleAdsHeading;
