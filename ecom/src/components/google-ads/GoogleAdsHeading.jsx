// "use client";

// import Image from "next/image";

// const CommonHeading = ({
//     tag: Tag = "h2",
//     heading = [], // structured content
//     subtitle = "",
//     align = "center",
//     className = "", // optional extra typography override
// }) => {
//     const textAlign =
//         align === "left"
//             ? "text-left"
//             : align === "right"
//                 ? "text-right"
//                 : "text-center";

//     return (
//         <div className={`w-full px-4 ${textAlign}`}>
//             <Tag
//                 className={`
//           font-semibold
//           tracking-[-0.04em]
//           leading-[130%]
//           text-[28px]
//           sm:text-[36px]
//           lg:text-[48px]
//           xl:text-[60px]
//           3xl:text-[72px]
//           ${className}
//         `}
//             >
//                 {heading.map((line, lineIndex) => (
//                     <div key={lineIndex} className="block">
//                         {line.map((item, index) => {
//                             // 🔹 Normal Text
//                             if (item.type === "text") {
//                                 return (
//                                     <span key={index} className={item.className || ""}>
//                                         {item.value}
//                                     </span>
//                                 );
//                             }

//                             // 🔹 Highlight With Background
//                             if (item.type === "highlight") {
//                                 return (
//                                     <span
//                                         key={index}
//                                         className={`
//                       inline-flex items-center gap-2
//                       px-4 py-2
//                       rounded-full
//                       ${item.bgColor || ""}
//                       ${item.textColor || ""}
//                       ${item.className || ""}
//                     `}
//                                     >
//                                         {item.icon && (
//                                             <Image
//                                                 src={item.icon}
//                                                 alt="icon"
//                                                 width={item.iconSize || 20}
//                                                 height={item.iconSize || 20}
//                                             />
//                                         )}
//                                         {item.value}
//                                     </span>
//                                 );
//                             }

//                             // 🔹 Inline Image (not pill)
//                             if (item.type === "image") {
//                                 return (
//                                     <Image
//                                         key={index}
//                                         src={item.src}
//                                         alt="image"
//                                         width={item.width || 40}
//                                         height={item.height || 40}
//                                         className={`inline-block ${item.className || ""}`}
//                                     />
//                                 );
//                             }

//                             return null;
//                         })}
//                     </div>
//                 ))}
//             </Tag>

//             {subtitle && (
//                 <p className="mt-4 text-base sm:text-lg opacity-80">
//                     {subtitle}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default CommonHeading;
