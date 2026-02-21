// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const CircularHelp = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const containerRef = useRef(null);
//   const previousSectionRef = useRef(0);

//   const sections = [
//     {
//       id: 0,
//       badge: "AUDIENCE",
//       title: (
//         <>
//           The Right Traffic.
//           <br />
//           At Buying
//           <br />
//           <span className="text-[#9ADCB2]">Temperature.</span>
//         </>
//       ),
//       subtitle: "Keyword-based campaigns that reach buyers",
//       image: "/google-ads/circ1.png",
//       bgColor: "bg-[#00822E]",
//       textColor: "text-white",
//       mutedText: "text-white/90",
//       borderColor: "border-white/20",
//       activeTab: "border-white text-white",
//       inactiveTab: "text-white/50 hover:text-white"
//     },
//     {
//       id: 1,
//       badge: "AI & Attribution",
//       title: (
//         <>
//           Google&apos;s Attribution
//           <br />
//           Lies To You.
//           <br />
//           We Show The Truth
//         </>
//       ),
//       subtitle:
//         "Server-side tracking + GA4 goals + first-party data reveal what's actually working",
//       image: "/google-ads/circ2.png",
//       bgColor: "bg-[#004FAC]",
//       textColor: "text-white",
//       mutedText: "text-white/90",
//       borderColor: "border-white/20",
//       activeTab: "border-white text-white",
//       inactiveTab: "text-white/50 hover:text-white"
//     },
//     {
//       id: 2,
//       badge: "Optimization",
//       title: (
//         <>
//           Campaigns That
//           <br />
//           Compound <span className="text-[#E46800]">Daily,</span>
//           <br />
//           <span className="text-[#E46800]">Not Monthly</span>
//         </>
//       ),
//       subtitle:
//         "Daily optimization, AI signal tracking & budget reallocation.",
//       image: "/google-ads/circ3.png",
//       bgColor: "bg-[#FFE187]",
//       textColor: "text-black",
//       mutedText: "text-black/70",
//       borderColor: "border-black/20",
//       activeTab: "border-black text-black",
//       inactiveTab: "text-black/50 hover:text-black"
//     }
//   ];

//   /* ---------------- SCROLL CONTROL ---------------- */

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const progress = -rect.top / (rect.height - window.innerHeight);

//       let newIndex = 0;
//       if (progress > 0.66) newIndex = 2;
//       else if (progress > 0.33) newIndex = 1;

//       if (newIndex !== previousSectionRef.current) {
//         setDirection(newIndex > previousSectionRef.current ? 1 : -1);
//         previousSectionRef.current = newIndex;
//         setActiveSection(newIndex);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------- IMAGE ANIMATION ---------------- */

//   const imageVariants = {
//     initial: (direction) => ({
//       rotate: direction > 0 ? -90 : 90,
//       transformOrigin: "150% 50%"
//     }),
//     animate: {
//       rotate: 0,
//       transformOrigin: "150% 50%",
//       transition: {
//         duration: 0.9,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     },
//     exit: (direction) => ({
//       rotate: direction > 0 ? 90 : -90,
//       transformOrigin: "150% 50%",
//       transition: {
//         duration: 0.9,
//         ease: [0.22, 1, 0.36, 1]
//       }
//     })
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-[300vh] sm:py-10 md:py-20 sm:w-[90%] 3xl:w-[85%] mx-auto"
//     >
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <div
//           className={`${sections[activeSection].bgColor} w-full rounded-[20px] transition-colors duration-700`}
//         >
//           <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-10">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//               {/* ---------------- LEFT CONTENT ---------------- */}
//               <div className={`${sections[activeSection].textColor} space-y-6`}>

//                 {/* Badge */}
//                 <span
//                   className={`inline-block border rounded-full px-4 py-1 text-xs font-medium ${sections[activeSection].borderColor}`}
//                 >
//                   {sections[activeSection].badge}
//                 </span>

//                 {/* Title */}
//                 <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
//                   {sections[activeSection].title}
//                 </h1>

//                 {/* Subtitle */}
//                 <p
//                   className={`${sections[activeSection].mutedText} text-base sm:text-lg max-w-xl`}
//                 >
//                   {sections[activeSection].subtitle}
//                 </p>

//                 {/* Tabs */}
//                 <div
//                   className={`flex gap-6 pt-6 border-t overflow-x-auto whitespace-nowrap ${sections[activeSection].borderColor}`}
//                 >
//                   {sections.map((section, index) => (
//                     <button
//                       key={section.id}
//                       onClick={() => {
//                         setDirection(index > activeSection ? 1 : -1);
//                         previousSectionRef.current = index;
//                         setActiveSection(index);
//                       }}
//                       className={`text-sm font-medium pb-2 border-b-2 transition-all duration-300 ${activeSection === index
//                         ? sections[activeSection].activeTab
//                         : `border-transparent ${sections[activeSection].inactiveTab}`
//                         }`}
//                     >
//                       {section.badge}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* ---------------- RIGHT IMAGE ---------------- */}
//               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[500px] flex items-center justify-center overflow-hidden">
//                 <AnimatePresence custom={direction}>
//                   <motion.div
//                     key={activeSection}
//                     custom={direction}
//                     variants={imageVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     className="absolute w-full h-full flex items-center justify-center"
//                   >
//                     <div className="relative w-full h-full">
//                       <Image
//                         src={sections[activeSection].image}
//                         alt="circular"
//                         fill
//                         className="object-contain"
//                         priority
//                       />
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircularHelp;


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CircularHelp = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const previousSectionRef = useRef(0);

  const sections = [
    {
      id: 0,
      badge: "Audience",
      title: (
        <>
          The Right Traffic.
          <br />
          At Buying
          <br />
          <span className="text-[#9ADCB2]">Temperature.</span>
        </>
      ),
      subtitle: "Keyword-controlled campaigns that reach buyers",
      image: "/google-ads/circ1.png",
      bgColor: "bg-[#00822E]",
      textColor: "text-white",
      mutedText: "text-white/90",
      borderColor: "border-white",
      activeTab: "text-[#9ADCB2]",
      inactiveTab: "text-white"
    },
    {
      id: 1,
      badge: "AI & Attribution",
      title: (
        <>
          Google&apos;s Attribution
          <br />
          Lies To You.
          <br />
          We Show The Truth
        </>
      ),
      subtitle:
        "30-40% of conversions go unreported through browser pixels. Server-side tracking + GA4 goals + first-party data reveal what's actually working",
      image: "/google-ads/circ2.png",
      bgColor: "bg-[#004FAC]",
      textColor: "text-white",
      mutedText: "text-white/90",
      borderColor: "border-white/20",
      activeTab: " text-[#0076F0]",
      inactiveTab: "text-white"
    },
    {
      id: 2,
      badge: "Optimization",
      title: (
        <>
          Campaigns That
          <br />
          Compound <span className="text-[#E46800]">Daily,</span>
          <br />
          <span className="text-[#E46800]">Not Monthly</span>
        </>
      ),
      subtitle:
        "Daily optimization, AI signal tracking & budget reallocation.",
      image: "/google-ads/circ3.png",
      bgColor: "bg-[#FFE187]",
      textColor: "text-black",
      mutedText: "text-black/70",
      borderColor: "border-black/20",
      activeTab: " text-[#E46800]",
      inactiveTab: "text-black/60"
    }
  ];

  /* ---------------- SCROLL CONTROL (DESKTOP SAME) ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);

      let newIndex = 0;
      if (progress > 0.66) newIndex = 2;
      else if (progress > 0.33) newIndex = 1;

      if (newIndex !== previousSectionRef.current) {
        setDirection(newIndex > previousSectionRef.current ? 1 : -1);
        previousSectionRef.current = newIndex;
        setActiveSection(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageVariants = {
    initial: (direction) => ({
      rotate: direction > 0 ? -90 : 90,
      transformOrigin: "150% 50%"
    }),
    animate: {
      rotate: 0,
      transformOrigin: "150% 50%",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
      rotate: direction > 0 ? 90 : -90,
      transformOrigin: "150% 50%",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] py-20 w-[90%] 3xl:w-[85%] mx-auto"
    >
      <div className="sticky top-0 3xl:top-40  flex items-center overflow-hidden rounded">
        <div
          className={`${sections[activeSection].bgColor} w-full rounded-[20px] transition-colors duration-700`}
        >
          <div className="container mx-auto px-4 md:px-8 py-7 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* ---------------- LEFT CONTENT ---------------- */}
              <div className={`${sections[activeSection].textColor} space-y-2 md:space-y-6 3xl:py-8 3xl:pl-8`}>

                <span
                  className={`inline-block border rounded-full px-4 py-1 3xl:py-3 3xl:px-8 text-sm tracking-[-0.02em] leading-[150%] ${sections[activeSection].borderColor}`}
                >
                  PROCESS
                </span>

                <h2 className="text-3xl md:text-5xl 3xl:text-[72px] font-semibold leading-[130%] tracking-[-0.02em] 2xl:tracking-[-0.04em] ">
                  {sections[activeSection].title}
                </h2>

                <p className={`${sections[activeSection].mutedText} text-[22px] md:text-[30px] leading-[150%] tracking-[-0.02em]  max-w-xl 3xl:max-w-2xl`}>
                  {sections[activeSection].subtitle}
                </p>

                {/* ---------------- MOBILE VERTICAL TABS ---------------- */}
                <div className="lg:hidden space-y-3 pt-4 border-b w-full">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(index)}
                      className={`block w-full  text-left px-4 py-3  text-sm font-medium transition ${activeSection === index
                        ? sections[activeSection].activeTab
                        : sections[activeSection].inactiveTab
                        }`}
                    >
                      {section.badge}
                    </button>
                  ))}
                </div>

                {/* ---------------- DESKTOP TABS (UNCHANGED) ---------------- */}
                <div
                  className={`hidden lg:flex gap-8 pt-8 3xl:pt-20 border-b-2 w-full justify-between max-w-[650px] ${sections[activeSection].borderColor}`}
                >
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setDirection(index > activeSection ? 1 : -1);
                        previousSectionRef.current = index;
                        setActiveSection(index);
                      }}
                      className={`text-sm 3xl:text-2xl pb-2 border-b-3 transition-all duration-300 ${activeSection === index
                        ? "border-current"
                        : "border-transparent"
                        }  ${activeSection === index
                          ? sections[activeSection].activeTab
                          : sections[activeSection].inactiveTab
                        }`}
                    >
                      {section.badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* ---------------- IMAGE ---------------- */}
              <div className="relative w-full h-full flex justify-end overflow-hidden">
                <AnimatePresence custom={direction}>
                  <motion.div
                    key={activeSection}
                    custom={direction}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute w-full h-full flex items-end justify-end "
                  >
                    <div className="h-[260px] sm:h-[320px] lg:h-[500px] 3xl:aspect-641/728 3xl:h-full max-h-180 justify-end relative">
                      <Image
                        src={sections[activeSection].image}
                        alt="circular"
                        width={500}
                        height={600}
                        className="w-full h-full object-cover"
                      />

                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularHelp;
