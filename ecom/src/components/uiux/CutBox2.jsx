import React from "react";

export const CutCornerBackground2 = ({
    children,
    mirror = false,
    bgColor = "transparent",

    cutWidth = 22,
    cutHeight = 26,
    borderRadius = 6,
    cutRadius = 4,

    className = "",
    style = {},
}) => {
    const clipId = React.useId();

    const r = borderRadius;
    const cw = cutWidth;
    const ch = cutHeight;
    const cr = cutRadius;

    const createPath = () => {
        if (mirror) {
            return `
        M ${cw + cr} 0
        L ${100 - r} 0
        Q 100 0, 100 ${r}
        L 100 ${100 - r}
        Q 100 100, ${100 - r} 100
        L ${r} 100
        Q 0 100, 0 ${100 - r}
        L 0 ${ch + cr}
        Q 0 ${ch}, ${cr} ${ch - cr}
        L ${cw - cr} ${cr}
        Q ${cw} 0, ${cw + cr} 0
        Z
      `;
        }

        return `
      M ${r} 0
      L ${100 - cw - cr} 0
      Q ${100 - cw} 0, ${100 - cw + cr} ${cr}
      L ${100 - cr} ${ch - cr}
      Q 100 ${ch}, 100 ${ch + cr}
      L 100 ${100 - r}
      Q 100 100, ${100 - r} 100
      L ${r} 100
      Q 0 100, 0 ${100 - r}
      L 0 ${r}
      Q 0 0, ${r} 0
      Z
    `;
    };

    return (
        <div
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%", // 👈 adopts parent
                overflow: "hidden",
                ...style,
            }}
        >
            {/* SVG + clip */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: 0 }}
            >
                <defs>
                    <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                        <path d={createPath()} transform="scale(0.01)" />
                    </clipPath>
                </defs>

                {bgColor !== "transparent" && <path d={createPath()} fill={bgColor} />}
            </svg>

            {/* Clipped content */}
            <div
                style={{
                    width: "100%",
                    height: "100%", // 👈 fills parent height
                    clipPath: `url(#${clipId})`,
                    WebkitClipPath: `url(#${clipId})`,
                }}
            >
                {children}
            </div>
        </div>
    );
};