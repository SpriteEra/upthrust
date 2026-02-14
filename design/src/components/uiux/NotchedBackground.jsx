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


// "use client";
// import React from "react";

// /**
//  * NotchedBackground
//  * All corners rounded with visible border for emphasis
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
//   notchRadius = 2,
//   borderWidth = 10, // Border thickness
//   borderColor = "#000000", // Border color
//   className = "",
//   style = {},
// }) => {
//   const toPx = (v) => (typeof v === "number" ? `${v}px` : v);

//   const createSVGPath = () => {
//     const w = typeof width === "number" ? width : 1640;
//     const h = typeof height === "number" ? height : 690;

//     const notchWidth = notchSize * 2.2;
//     const cornerOffset = notchSize * 7.9;
//     const th = topHeight;
//     const r = borderRadius;
//     const nr = notchRadius;

//     if (mirror) {
//       const ns = cornerOffset;
//       const ne = cornerOffset + notchWidth;

//       return `
//         M ${r} 0
//         L ${ns - nr} 0
//         Q ${ns} 0 ${ns + nr} ${nr}
//         L ${ne - nr} ${th - nr}
//         Q ${ne} ${th} ${ne + nr} ${th}
//         L ${w - r} ${th}
//         Q ${w} ${th} ${w} ${th + r}
//         L ${w} ${h - r}
//         Q ${w} ${h} ${w - r} ${h}
//         L ${r} ${h}
//         Q 0 ${h} 0 ${h - r}
//         L 0 ${r}
//         Q 0 0 ${r} 0
//         Z
//       `;
//     }

//     const ns = cornerOffset;
//     const ne = cornerOffset + notchWidth;

//     return `
//       M 0 ${r}
//       Q 0 0 ${r} 0
//       L ${ns - nr} 0
//       Q ${ns} 0 ${ns + nr} ${nr}
//       L ${ne - nr} ${th - nr}
//       Q ${ne} ${th} ${ne + nr} ${th}
//       L ${w - r} ${th}
//       Q ${w} ${th} ${w} ${th + r}
//       L ${w} ${h - r}
//       Q ${w} ${h} ${w - r} ${h}
//       L ${r} ${h}
//       Q 0 ${h} 0 ${h - r}
//       Z
//     `;
//   };

//   const clipId = React.useId();
//   const pathId = React.useId();
//   const mirrorTransform = mirror ? "scaleX(-1)" : "none";

//   const w = typeof width === "number" ? width : 1640;
//   const h = typeof height === "number" ? height : 690;

//   return (
//     <div
//       className={className}
//       style={{
//         width: toPx(width),
//         height: toPx(height),
//         minWidth: toPx(minWidth),
//         minHeight: toPx(minHeight),
//         position: "relative",
//         ...style,
//       }}
//     >
//       {/* SVG for border */}
//       <svg
//         width="100%"
//         height="100%"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           pointerEvents: "none",
//           transform: mirrorTransform,
//         }}
//         viewBox={`0 0 ${w} ${h}`}
//         preserveAspectRatio="none"
//       >
//         <path
//           d={createSVGPath()}
//           fill="none"
//           stroke={borderColor}
//           strokeWidth={borderWidth}
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Clip path definition */}
//       <svg width="0" height="0" style={{ position: "absolute" }}>
//         <defs>
//           <clipPath id={clipId} clipPathUnits="objectBoundingBox">
//             <path d={createSVGPath()} transform={`scale(${1 / w}, ${1 / h})`} />
//           </clipPath>
//         </defs>
//       </svg>

//       <div
//         style={{ width: "100%", height: "100%", transform: mirrorTransform }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             background: color,
//             clipPath: `url(#${clipId})`,
//             WebkitClipPath: `url(#${clipId})`,
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

// "use client";
// import React from "react";

// /**
//  * NotchedBackground
//  * Responsive component with proper mobile scaling
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
//   notchRadius = 2,
//   borderWidth = 10,
//   borderColor = "#000000",
//   className = "",
//   style = {},
// }) => {
//   const toPx = (v) => (typeof v === "number" ? `${v}px` : v);

//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const createSVGPath = (w, h) => {
//     // Use larger base values for mobile to keep notch visible
//     const baseNotchSize = isMobile ? notchSize * 0.7 : notchSize;
//     const baseTopHeight = isMobile ? topHeight * 0.8 : topHeight;
//     const baseBorderRadius = isMobile ? borderRadius * 0.8 : borderRadius;
//     const baseNotchRadius = isMobile ? notchRadius * 0.8 : notchRadius;

//     const notchWidth = baseNotchSize * 2.2;
//     const cornerOffset = baseNotchSize * 7.9;
//     const th = baseTopHeight;
//     const r = baseBorderRadius;
//     const nr = baseNotchRadius;

//     if (mirror) {
//       const ns = cornerOffset;
//       const ne = cornerOffset + notchWidth;

//       return `
//         M ${r} 0
//         L ${ns - nr} 0
//         Q ${ns} 0 ${ns + nr} ${nr}
//         L ${ne - nr} ${th - nr}
//         Q ${ne} ${th} ${ne + nr} ${th}
//         L ${w - r} ${th}
//         Q ${w} ${th} ${w} ${th + r}
//         L ${w} ${h - r}
//         Q ${w} ${h} ${w - r} ${h}
//         L ${r} ${h}
//         Q 0 ${h} 0 ${h - r}
//         L 0 ${r}
//         Q 0 0 ${r} 0
//         Z
//       `;
//     }

//     const ns = cornerOffset;
//     const ne = cornerOffset + notchWidth;

//     return `
//       M 0 ${r}
//       Q 0 0 ${r} 0
//       L ${ns - nr} 0
//       Q ${ns} 0 ${ns + nr} ${nr}
//       L ${ne - nr} ${th - nr}
//       Q ${ne} ${th} ${ne + nr} ${th}
//       L ${w - r} ${th}
//       Q ${w} ${th} ${w} ${th + r}
//       L ${w} ${h - r}
//       Q ${w} ${h} ${w - r} ${h}
//       L ${r} ${h}
//       Q 0 ${h} 0 ${h - r}
//       Z
//     `;
//   };

//   const clipId = React.useId();
//   const mirrorTransform = mirror ? "scaleX(-1)" : "none";

//   // Use fixed desktop dimensions for viewBox
//   const viewBoxWidth = 1640;
//   const viewBoxHeight = 690;

//   return (
//     <div
//       className={className}
//       style={{
//         width: toPx(width),
//         height: toPx(height),
//         minWidth: toPx(minWidth),
//         minHeight: toPx(minHeight),
//         position: "relative",
//         ...style,
//       }}
//     >
//       {/* SVG for border */}
//       <svg
//         width="100%"
//         height="100%"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           pointerEvents: "none",
//           transform: mirrorTransform,
//         }}
//         viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
//         preserveAspectRatio="none"
//       >
//         <path
//           d={createSVGPath(viewBoxWidth, viewBoxHeight)}
//           fill="none"
//           stroke={borderColor}
//           strokeWidth={borderWidth}
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Clip path definition */}
//       <svg width="0" height="0" style={{ position: "absolute" }}>
//         <defs>
//           <clipPath id={clipId} clipPathUnits="objectBoundingBox">
//             <path
//               d={createSVGPath(viewBoxWidth, viewBoxHeight)}
//               transform={`scale(${1 / viewBoxWidth}, ${1 / viewBoxHeight})`}
//             />
//           </clipPath>
//         </defs>
//       </svg>

//       <div
//         style={{ width: "100%", height: "100%", transform: mirrorTransform }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             background: color,
//             clipPath: `url(#${clipId})`,
//             WebkitClipPath: `url(#${clipId})`,
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

// "use client";
// import React from "react";

// export const NotchedBackground = ({
//   children,
//   width = "100%",
//   height = "100%",
//   mirror = false,
//   color = "#FFFFFF",
//   notchSize = 30,
//   topHeight = 40,
//   borderRadius = 40,
//   notchRadius = 4,
//   borderWidth = 10,
//   borderColor = "#000000",
//   className = "",
//   style = {},
// }) => {
//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 🔥 Make viewBox responsive
//   const viewBoxWidth = isMobile ? 400 : 1640;
//   const viewBoxHeight = isMobile ? 700 : 690;

//   const createDesktopPath = (w, h) => {

//     const notchWidth = notchSize * 2.2;
//     const cornerOffset = notchSize * 7.9;
//     const th = topHeight;
//     const r = borderRadius;
//     const nr = notchRadius;

//     const ns = cornerOffset;
//     const ne = cornerOffset + notchWidth;

//     return `
//     M 0 ${r}
//     Q 0 0 ${r} 0
//     L ${ns - nr} 0
//     Q ${ns} 0 ${ns + nr} ${nr}
//     L ${ne - nr} ${th - nr}
//     Q ${ne} ${th} ${ne + nr} ${th}
//     L ${w - r} ${th}
//     Q ${w} ${th} ${w} ${th + r}
//     L ${w} ${h - r}
//     Q ${w} ${h} ${w - r} ${h}
//     L ${r} ${h}
//     Q 0 ${h} 0 ${h - r}
//     Z
//   `;
//   };

//   // const createMobilePath = (w, h) => {
//   //   const r = 18;
//   //   const th = 25;
//   //   const notchWidth = 45;
//   //   const notchStart = 100;

//   //   const notchEnd = notchStart + notchWidth;

//   //   return `
//   //   M ${r} 0
//   //   Q 0 0 0 ${r}

//   //   L 0 ${h - r}
//   //   Q 0 ${h} ${r} ${h}

//   //   L ${w - r} ${h}
//   //   Q ${w} ${h} ${w} ${h - r}

//   //   L ${w} ${th + r}
//   //   Q ${w} ${th} ${w - r} ${th}

//   //   L ${notchEnd} ${th}
//   //   Q ${notchEnd - 20} ${th} ${notchStart + 20} 20
//   //   Q ${notchStart} 0 ${notchStart - 20} 0

//   //   L ${r} 0
//   //   Z
//   // `;
//   // };


//   const createMobilePath = (w, h) => {
//     const r = 20;          // outer radius
//     const th = 25;         // notch depth
//     const notchWidth = 50; // notch width

//     const notchStart = w - 150;
//     const notchEnd = notchStart + notchWidth;

//     return `
//     M ${r} 0
//     L ${notchEnd} 0

//    Q ${notchEnd - 12} 0 ${notchStart + 12} ${th}
//    Q ${notchStart} ${th} ${notchStart - 12} ${th}

//     L ${r} ${th}
//     Q 0 ${th} 0 ${r + 10}

//     L 0 ${h - r}
//     Q 0 ${h} ${r} ${h}

//     L ${w - r} ${h}
//     Q ${w} ${h} ${w} ${h - r}

//     L ${w} ${r}
//     Q ${w} 0 ${w - r} 0

//     Z
//   `;
//   };




//   const path = isMobile
//     ? createMobilePath(viewBoxWidth, viewBoxHeight)
//     : createDesktopPath(viewBoxWidth, viewBoxHeight);


//   const clipId = React.useId();
//   const mirrorTransform = mirror ? "scaleX(-1)" : "none";

//   return (
//     <div className={className} style={{ width, height, position: "relative", ...style }}>
//       {/* Border SVG */}
//       <svg
//         width="100%"
//         height="100%"
//         viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
//         preserveAspectRatio="none"
//         style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
//       >
//         <path
//           d={path}
//           fill="none"
//           stroke={borderColor}
//           strokeWidth={isMobile ? 6 : borderWidth}
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* Clip Path */}
//       <svg width="0" height="0">
//         <defs>
//           <clipPath id={clipId} clipPathUnits="objectBoundingBox">
//             <path
//               d={path}
//               transform={`scale(${1 / viewBoxWidth}, ${1 / viewBoxHeight})`}
//             />
//           </clipPath>
//         </defs>
//       </svg>

//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           background: color,
//           clipPath: `url(#${clipId})`,
//           WebkitClipPath: `url(#${clipId})`,
//           transform: mirrorTransform,
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";

export const NotchedBackground = ({
  children,
  width = "100%",
  height = "100%",
  color = "#FFFFFF",
  notchSize = 30,
  topHeight = 40,
  borderRadius = 40,
  notchRadius = 4,
  borderWidth = 10,
  borderColor = "#000000",
  className = "",
  style = {},
}) => {

  /* ================= DESKTOP PATH ================= */
  const createDesktopPath = (w, h) => {
    const notchWidth = notchSize * 2.2;
    const cornerOffset = notchSize * 7.9;
    const th = topHeight;
    const r = borderRadius;
    const nr = notchRadius;

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

  /* ================= MOBILE PATH ================= */
  const createMobilePath = (w, h) => {
    const r = 20;
    const th = 25;
    const notchWidth = 50;

    const notchStart = w - 150;
    const notchEnd = notchStart + notchWidth;

    return `
      M ${r} 0
      L ${notchEnd} 0

      Q ${notchEnd - 12} 0 ${notchStart + 12} ${th}
      Q ${notchStart} ${th} ${notchStart - 12} ${th}

      L ${r} ${th}
      Q 0 ${th} 0 ${r + 10}

      L 0 ${h - r}
      Q 0 ${h} ${r} ${h}

      L ${w - r} ${h}
      Q ${w} ${h} ${w} ${h - r}

      L ${w} ${r}
      Q ${w} 0 ${w - r} 0

      Z
    `;
  };

  /* ViewBox sizes */
  const desktopWidth = 1640;
  const desktopHeight = 690;
  const mobileWidth = 400;
  const mobileHeight = 700;

  const desktopPath = createDesktopPath(desktopWidth, desktopHeight);
  const mobilePath = createMobilePath(mobileWidth, mobileHeight);

  const desktopClipId = React.useId();
  const mobileClipId = React.useId();

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height, ...style }}
    >

      {/* ================= DESKTOP BORDER ================= */}
      <svg
        className="hidden md:block absolute inset-0 pointer-events-none"
        viewBox={`0 0 ${desktopWidth} ${desktopHeight}`}
        preserveAspectRatio="none"
      >
        <path
          d={desktopPath}
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ================= MOBILE BORDER ================= */}
      <svg
        className="block md:hidden absolute inset-0 pointer-events-none"
        viewBox={`0 0 ${mobileWidth} ${mobileHeight}`}
        preserveAspectRatio="none"
      >
        <path
          d={mobilePath}
          fill="none"
          stroke={borderColor}
          strokeWidth={6}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ================= DESKTOP CLIP ================= */}
      <svg width="0" height="0" className="hidden md:block">
        <defs>
          <clipPath id={desktopClipId} clipPathUnits="objectBoundingBox">
            <path
              d={desktopPath}
              transform={`scale(${1 / desktopWidth}, ${1 / desktopHeight})`}
            />
          </clipPath>
        </defs>
      </svg>

      {/* ================= MOBILE CLIP ================= */}
      <svg width="0" height="0" className="block md:hidden">
        <defs>
          <clipPath id={mobileClipId} clipPathUnits="objectBoundingBox">
            <path
              d={mobilePath}
              transform={`scale(${1 / mobileWidth}, ${1 / mobileHeight})`}
            />
          </clipPath>
        </defs>
      </svg>

      {/* ================= DESKTOP CONTENT ================= */}
      <div
        className="hidden md:block w-full h-full"
        style={{
          background: color,
          clipPath: `url(#${desktopClipId})`,
          WebkitClipPath: `url(#${desktopClipId})`,
        }}
      >
        {children}
      </div>

      {/* ================= MOBILE CONTENT ================= */}
      <div
        className="block md:hidden w-full h-full"
        style={{
          background: color,
          clipPath: `url(#${mobileClipId})`,
          WebkitClipPath: `url(#${mobileClipId})`,
        }}
      >
        {children}
      </div>

    </div>
  );
};

