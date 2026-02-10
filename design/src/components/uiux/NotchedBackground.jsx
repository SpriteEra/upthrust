// "use client";
// import React from "react";

// /**
//  * NotchedBackground
//  * Rounded OUTER corners only
//  * Straight diagonal notch (no curve)
//  */
// export const NotchedBackground = ({
//   children,
//   width = "100%",
//   height = "100%",
//   minWidth,
//   minHeight,
//   mirror = false,
//   color = "#FFFFFF",
//   notchSize = 30,
//   topHeight = 40,
//   borderRadius = 30,
//   className = "",
//   style = {},
// }) => {
//   const toPx = (v) => (typeof v === "number" ? `${v}px` : v);

//   const createClipPath = () => {
//     const w = typeof width === "number" ? width : 1640;
//     const h = typeof height === "number" ? height : 690;

//     const notchWidth = notchSize * 2.2;
//     const cornerOffset = notchSize * 7.9;
//     const th = topHeight;
//     const r = borderRadius;

//     const toP = (x) => ((x / w) * 100).toFixed(3) + "%";
//     const toPH = (y) => ((y / h) * 100).toFixed(3) + "%";

//     if (mirror) {
//       const ns = w - cornerOffset - notchWidth;
//       const ne = w - cornerOffset;

//       return `polygon(
//         ${toP(r)} 0%,
//         ${toP(ns)} 0%,
//         ${toP(ne)} ${toPH(th)},

//         calc(100% - ${toP(r)}) ${toPH(th)},
//         100% calc(${toPH(th)} + ${toP(r)}),
//         100% calc(100% - ${toP(r)}),
//         calc(100% - ${toP(r)}) 100%,
//         ${toP(r)} 100%,
//         0% calc(100% - ${toP(r)}),
//         0% ${toP(r)}
//       )`;
//     }

//     const ns = cornerOffset;
//     const ne = cornerOffset + notchWidth;

//     return `polygon(
//       0% ${toP(r)},
//       ${toP(r)} 0%,
//       ${toP(ns)} 0%,
//       ${toP(ne)} ${toPH(th)},

//       calc(100% - ${toP(r)}) ${toPH(th)},
//       100% calc(${toPH(th)} + ${toP(r)}),
//       100% calc(100% - ${toP(r)}),
//       calc(100% - ${toP(r)}) 100%,
//       ${toP(r)} 100%,
//       0% calc(100% - ${toP(r)})
//     )`;
//   };

//   const mirrorTransform = mirror ? "scaleX(-1)" : "none";

//   return (
//     <div
//       className={className}
//       style={{
//         width: toPx(width),
//         height: toPx(height),
//         minWidth: toPx(minWidth),
//         minHeight: toPx(minHeight),
//         ...style,
//       }}
//     >
//       <div
//         style={{ width: "100%", height: "100%", transform: mirrorTransform }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             background: color,
//             clipPath: createClipPath(),
//             WebkitClipPath: createClipPath(),
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               transform: mirrorTransform,
//             }}
//           >
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import React from "react";

/**
 * NotchedBackground
 * All corners rounded with visible border for emphasis
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
  notchRadius = 2,
  borderWidth = 10, // Border thickness
  borderColor = "#000000", // Border color
  className = "",
  style = {},
}) => {
  const toPx = (v) => (typeof v === "number" ? `${v}px` : v);

  const createSVGPath = () => {
    const w = typeof width === "number" ? width : 1640;
    const h = typeof height === "number" ? height : 690;

    const notchWidth = notchSize * 2.2;
    const cornerOffset = notchSize * 7.9;
    const th = topHeight;
    const r = borderRadius;
    const nr = notchRadius;

    if (mirror) {
      const ns = cornerOffset;
      const ne = cornerOffset + notchWidth;

      return `
        M ${r} 0
        L ${ns - nr} 0
        Q ${ns} 0 ${ns + nr} ${nr}
        L ${ne - nr} ${th - nr}
        Q ${ne} ${th} ${ne + nr} ${th}
        L ${w - r} ${th}
        Q ${w} ${th} ${w} ${th + r}
        L ${w} ${h - r}
        Q ${w} ${h} ${w - r} ${h}
        L ${r} ${h}
        Q 0 ${h} 0 ${h - r}
        L 0 ${r}
        Q 0 0 ${r} 0
        Z
      `;
    }

    const ns = cornerOffset;
    const ne = cornerOffset + notchWidth;

    return `
      M 0 ${r}
      Q 0 0 ${r} 0
      L ${ns - nr} 0
      Q ${ns} 0 ${ns + nr} ${nr}
      L ${ne - nr} ${th - nr}
      Q ${ne} ${th} ${ne + nr} ${th}
      L ${w - r} ${th}
      Q ${w} ${th} ${w} ${th + r}
      L ${w} ${h - r}
      Q ${w} ${h} ${w - r} ${h}
      L ${r} ${h}
      Q 0 ${h} 0 ${h - r}
      Z
    `;
  };

  const clipId = React.useId();
  const pathId = React.useId();
  const mirrorTransform = mirror ? "scaleX(-1)" : "none";

  const w = typeof width === "number" ? width : 1640;
  const h = typeof height === "number" ? height : 690;

  return (
    <div
      className={className}
      style={{
        width: toPx(width),
        height: toPx(height),
        minWidth: toPx(minWidth),
        minHeight: toPx(minHeight),
        position: "relative",
        ...style,
      }}
    >
      {/* SVG for border */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          transform: mirrorTransform,
        }}
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
      >
        <path
          d={createSVGPath()}
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Clip path definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={createSVGPath()} transform={`scale(${1 / w}, ${1 / h})`} />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{ width: "100%", height: "100%", transform: mirrorTransform }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: color,
            clipPath: `url(#${clipId})`,
            WebkitClipPath: `url(#${clipId})`,
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