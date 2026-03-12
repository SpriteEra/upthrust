import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// const BLUE = "#2563ff";
// const TRACK = "rgba(255,255,255,0.20)";

// function ArrowBtn({
//     dir = "right",
//     className = "",
//     style = {},
//     size = 48,
//     bg = BLUE,
//     iconSize = 20,
//     iconClass = "",
//     iconStyle = {},
// }) {
//     const rotate = dir === "left" ? "rotate(180deg)" : "none";

//     return (
//         <div
//             className={className}
//             style={{
//                 width: size,
//                 height: size,
//                 borderRadius: "50%",
//                 background: bg,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//                 zIndex: 3,
//                 ...style,
//             }}
//         >
//             <ArrowRight
//                 size={iconSize}
//                 className={iconClass}
//                 style={{ transform: rotate, color: "white", ...iconStyle }}
//             />
//         </div>
//     );
// }
export default function CircularDesign({ mobileImage = "/meta-ads/circular/adspent-graph-mobile.webp", desktopImage = "/meta-ads/circular/adspent-graph.webp" }) {
    return (
        <div className="bg-black text-white"
        >
            <div className="max-w-6xl 2xl:max-w-7xl 1600:max-w-340 1800:max-w-[1550px] mx-auto py-20 max-lg:px-2.5">
                <Image src={mobileImage} quality={100} width={1600} height={900} className="w-full h-full object-contain select-none pointer-events-none md:hidden " alt="Ad-Spent Graph" />
                <Image src={desktopImage} quality={100} width={1600} height={900} className="w-full h-full object-contain select-none pointer-events-none max-md:hidden" alt="Ad-Spent Graph" />
            </div>
        </div>
    );
}

// export default function CircularDesign() {
//     return (
//         <div
//             style={{
//                 minHeight: "100vh",
//                 background: "#000",
//                 color: "#fff",
//                 paddingLeft: "30px",
//                 paddingRight: "30px",
//             }}
//         >
//             <div className="relative">
//                 <div
//                     style={{
//                         position: "absolute",
//                         left: 52,
//                         right: 52,
//                         top: 56,
//                         bottom: 38,
//                         border: `2px solid ${TRACK}`,
//                         borderRadius: 9999,
//                         pointerEvents: "none",
//                         zIndex: 0,
//                     }}
//                 />

//                 {/* TOP ROW */}
//                 <div
//                     style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-around",
//                         paddingLeft: "150px",
//                         paddingRight: "150px",
//                         paddingTop: "5px",
//                         gap: 20,
//                         position: "relative",
//                         zIndex: 2,
//                     }}
//                 >
//                     <ArrowBtn dir="right" />
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/writing.png" />
//                     </div>
//                     <ArrowBtn dir="right" />
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/running.png" />
//                     </div>

//                     {/* Run tests — absolute right outside */}
//                     <div
//                         style={{
//                             position: "absolute",
//                             right: 0,
//                             top: "50%",
//                             transform: "translateY(-50%)",
//                             width: 80,
//                         }}
//                     ></div>
//                 </div>

//                 {/* MIDDLE ROW — Evolving left, Performance right */}
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         position: "relative",
//                         margin: " 28px 0",
//                         zIndex: 2,
//                     }}
//                 >
//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 14,
//                             marginLeft: 0,
//                         }}
//                     >
//                         {/* <EvolvingIcon /> */}
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/evolving.png" />
//                     </div>
//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 14,
//                             marginRight: 0,
//                             flexDirection: "row-reverse",
//                         }}
//                     >
//                         {/* <PerformanceIcon /> */}
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/performance.png" />
//                     </div>
//                 </div>

//                 {/* BOTTOM ROW */}
//                 <div
//                     style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         paddingLeft: "150px",
//                         paddingRight: "150px",
//                         gap: 20,
//                         position: "relative",
//                         zIndex: 2,
//                     }}
//                 >
//                     <ArrowBtn dir="left" />

//                     {/* RCA */}
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/rca.png" />
//                     </div>
//                     <ArrowBtn dir="left" />

//                     {/* Optimization */}
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         {/* <OptimizationIcon /> */}
//                         <Image width={100} height={100} alt="circle" src="/meta-ads/circular/optimize.png" />
//                     </div>
//                     <ArrowBtn dir="left" />
//                 </div>
//             </div>
//         </div>
//     );
// }