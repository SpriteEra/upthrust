"use client";
import React from "react";

/**
 * NotchedBackground
 * Rounded OUTER corners only
 * Straight diagonal notch (no curve)
 */
export const NotchedBackground = ({
  children,
  width = "100%",
  height = "100%",
  minWidth,
  minHeight,
  mirror = false,
  color = "#FFFFFF",
  notchSize = 30,
  topHeight = 40,
  borderRadius = 30,
  className = "",
  style = {},
}) => {
  const toPx = (v) => (typeof v === "number" ? `${v}px` : v);

  const createClipPath = () => {
    const w = typeof width === "number" ? width : 1640;
    const h = typeof height === "number" ? height : 690;

    const notchWidth = notchSize * 2.2;
    const cornerOffset = notchSize * 7.9;
    const th = topHeight;
    const r = borderRadius;

    const toP = (x) => ((x / w) * 100).toFixed(3) + "%";
    const toPH = (y) => ((y / h) * 100).toFixed(3) + "%";

    if (mirror) {
      const ns = w - cornerOffset - notchWidth;
      const ne = w - cornerOffset;

      return `polygon(
        ${toP(r)} 0%,
        ${toP(ns)} 0%,
        ${toP(ne)} ${toPH(th)},

        calc(100% - ${toP(r)}) ${toPH(th)},
        100% calc(${toPH(th)} + ${toP(r)}),
        100% calc(100% - ${toP(r)}),
        calc(100% - ${toP(r)}) 100%,
        ${toP(r)} 100%,
        0% calc(100% - ${toP(r)}),
        0% ${toP(r)}
      )`;
    }

    const ns = cornerOffset;
    const ne = cornerOffset + notchWidth;

    return `polygon(
      0% ${toP(r)},
      ${toP(r)} 0%,
      ${toP(ns)} 0%,
      ${toP(ne)} ${toPH(th)},

      calc(100% - ${toP(r)}) ${toPH(th)},
      100% calc(${toPH(th)} + ${toP(r)}),
      100% calc(100% - ${toP(r)}),
      calc(100% - ${toP(r)}) 100%,
      ${toP(r)} 100%,
      0% calc(100% - ${toP(r)})
    )`;
  };

  const mirrorTransform = mirror ? "scaleX(-1)" : "none";

  return (
    <div
      className={className}
      style={{
        width: toPx(width),
        height: toPx(height),
        minWidth: toPx(minWidth),
        minHeight: toPx(minHeight),
        ...style,
      }}
    >
      <div
        style={{ width: "100%", height: "100%", transform: mirrorTransform }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: color,
            clipPath: createClipPath(),
            WebkitClipPath: createClipPath(),
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: mirrorTransform,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


