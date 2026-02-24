"use client";

import Image from "next/image";

const CommonHeading = ({
    tag: Tag = "h2",
    heading = [],
    subtitle = "",
    align = "center",
    className = "",
    subtitleCss = ""
}) => {
    const textAlign =
        align === "left"
            ? "text-left"
            : align === "right"
                ? "text-right"
                : "text-center";

    return (
        <div className={`w-full max-sm:px-2  ${textAlign}`}>
            <Tag
                className={`
                    font-semibold 
                    tracking-[-0.02em]
                    2xl:tracking-[-0.04em] 
                    leading-[130%]
                    text-[36px] 
                    lg:text-[48px] 
                    xl:text-[60px] 
                    3xl:text-[72px]
                    capitalize
                    ${className}
                `}
            >
                {heading.map((line, lineIndex) => (
                    // ✅ Inline on mobile, block on desktop
                    <span
                        key={lineIndex}
                        className="inline lg:block"
                    >
                        {line.map((item, index) => {

                            // 🔹 Normal Text
                            if (item.type === "text") {
                                return (
                                    <span key={index} className={item.className || ""}>
                                        {item.value}
                                    </span>
                                );
                            }

                            // 🔹 Highlight With Background
                            if (item.type === "highlight") {
                                return (
                                    <span
                                        key={index}
                                        className={`
                                            inline-flex items-center gap-2
                                            px-6 py-1.5 
                                            rounded-full capitalize
                                            ${item.bgColor || ""}
                                            ${item.textColor || ""}
                                            ${item.className || ""}
                                        `}
                                    >
                                        {item.icon && (
                                            <Image
                                                src={item.icon}
                                                alt="icon"
                                                width={item.iconSize || 60}
                                                height={item.iconSize || 60}
                                                className="size-6 xl:size-12 3xl:size-15"
                                            />
                                        )}
                                        {item.value}
                                    </span>
                                );
                            }

                            // 🔹 Inline Image (not pill)
                            if (item.type === "image") {
                                return (
                                    <Image
                                        key={index}
                                        src={item.src}
                                        alt="image"
                                        width={item.width || 40}
                                        height={item.height || 40}
                                        className={`inline-block ${item.className || ""}`}
                                    />
                                );
                            }

                            return null;
                        })}
                    </span>
                ))}
            </Tag>

            {subtitle && (
                <p className={`text-[22px] px-10 3xl:text-[24px] leading-[150%] tracking-[-0.02em] font-normal ${subtitleCss}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default CommonHeading;
