"use client"

import { useEffect, useState } from "react";

export const CutCornerBackground = ({
    children,
    mirror = false,
    bgColor = "transparent",

    cutWidth = 22,
    cutHeight = 28,
    borderRadius = 6,
    cutRadius = 4,
    cutConfig = null,

    hideCutOnMobile = false,
    className = "",
    style = {},
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const shouldHideCut = hideCutOnMobile && isMobile;

    const responsiveConfig =
        cutConfig
            ? (isMobile ? cutConfig.mobile : cutConfig.desktop) || {}
            : {};

    const finalConfig = {
        cutWidth,
        cutHeight,
        borderRadius,
        cutRadius,
        ...responsiveConfig,
    };
    const r = finalConfig.borderRadius;
    const cw = finalConfig.cutWidth;
    const ch = finalConfig.cutHeight;
    const cr = finalConfig.cutRadius;


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
                height: "100%", // 🔴 critical
                overflow: "hidden", // 🔴 hide overflow
                ...style,
            }}
        >
            {/* background shape */}
            {!shouldHideCut && (
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                >
                    <path d={createPath()} fill={bgColor} />
                </svg>

            )}

            {/* content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%", // 🔴 critical
                }}
            >
                {children}
            </div>
        </div>
    );
};