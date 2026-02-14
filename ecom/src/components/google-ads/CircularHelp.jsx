// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// const CircularHelp = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
//   const containerRef = useRef(null);
//   const previousSectionRef = useRef(0);

//   const sections = [
//     {
//       id: 0,
//       badge: 'AUDIENCE',
//       title: (
//         <>
//           The Right Traffic.
//           <br />
//           At Buying
//           <br />
//           Temperature.
//         </>
//       ),
//       subtitle: 'Keyword-based-diem campaigns that reach buyers',
//       cardTitle: 'Targeting the right audience',
//       cardDescription:
//         `Google Ads "one-track-pony." You'll find better than clickworthy landing experience.We leverage advanced audience targeting to reach users at the exact moment they're ready to convert. Our data-driven approach ensures your ads reach the right people, at the right time, with the right message.`,
//       buttonText: 'Track the right audience',
//       image: '/google-ads/circ1.png',
//       bgColor: 'bg-gradient-to-br from-green-700 to-green-900',
//       cardBg: 'bg-green-100',
//       buttonColor: 'bg-green-600 hover:bg-green-700',
//     },
//     {
//       id: 1,
//       badge: 'TRACKING',
//       title: (
//         <>
//           Google&apos;s Attribution
//           <br />
//           Lies To You.
//           <br />
//           We Show The Truth
//         </>
//       ),
//       subtitle: '30-40% of conversions go unreported through browser pixels. Server-side tracking + GA4 goals + first-party data reveal what\'s actually working',
//       cardTitle: 'AI + Attribution',
//       cardDescription:
//         `What Google shows other tools. We track 100% of page loads, search, click patterns, form interactions to predict which traffic will convert before it does. Then we feed that intelligence back into bidding algorithms. Google's aren't bidding optimize for conversions.`,
//       buttonText: 'Optimize Ads for revenue',
//       image: '/google-ads/circ2.png',
//       bgColor: 'bg-gradient-to-br from-blue-700 to-blue-900',
//       cardBg: 'bg-blue-50',
//       buttonColor: 'bg-blue-600 hover:bg-blue-700',
//     },
//     {
//       id: 2,
//       badge: 'ONGOING',
//       title: (
//         <>
//           Campaigns That
//           <br />
//           Compound <span className="text-orange-400">Daily,</span>
//           <br />
//           <span className="text-orange-400">Not Monthly</span>
//         </>
//       ),
//       subtitle: '30-40% of conversions go unreported through browser pixels. Server-side tracking + GA4 goals + first-party data reveal what\'s actually working',
//       cardTitle: 'Optimization & more',
//       cardDescription:
//         `We track your campaigns daily: CPA, Quality Score, conversion patterns across 47 signals. When performance drops, AI investigates within hours, not days. Budget reallocation every Monday based on what's working.Experiments run live—new keywords, new campaigns, new creatives.Winners scale immediately.',
//       buttonText: 'Explore our Outcome`,
//       image: '/google-ads/circ3.png',
//       bgColor: 'bg-gradient-to-br from-yellow-600 to-yellow-800',
//       cardBg: 'bg-yellow-50',
//       buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const containerTop = containerRef.current.getBoundingClientRect().top;
//       const containerHeight = containerRef.current.offsetHeight;
//       const windowHeight = window.innerHeight;

//       // Calculate scroll progress within the container
//       const scrollProgress = -containerTop / (containerHeight - windowHeight);

//       // Determine active section based on scroll progress
//       let newActiveSection = 0;
//       if (scrollProgress > 0.66) {
//         newActiveSection = 2;
//       } else if (scrollProgress > 0.33) {
//         newActiveSection = 1;
//       }

//       // Determine direction for circular animation
//       if (newActiveSection !== previousSectionRef.current) {
//         // Moving forward
//         if (newActiveSection > previousSectionRef.current) {
//           setDirection(1);
//         }
//         // Moving backward
//         else if (newActiveSection < previousSectionRef.current) {
//           setDirection(-1);
//         }
//         // Circular: from last to first
//         else if (previousSectionRef.current === 2 && newActiveSection === 0) {
//           setDirection(1);
//         }
//         // Circular: from first to last
//         else if (previousSectionRef.current === 0 && newActiveSection === 2) {
//           setDirection(-1);
//         }

//         previousSectionRef.current = newActiveSection;
//       }

//       setActiveSection(newActiveSection);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const imageVariants = {
//     enter: (direction) => ({
//       rotateY: direction > 0 ? 90 : -90,
//       opacity: 0,
//       scale: 0.8,
//     }),
//     center: {
//       rotateY: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction) => ({
//       rotateY: direction > 0 ? -90 : 90,
//       opacity: 0,
//       scale: 0.8,
//     }),
//   };

//   const textVariants = {
//     enter: {
//       opacity: 0,
//       y: 20,
//     },
//     center: {
//       opacity: 1,
//       y: 0,
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//     },
//   };

//   return (
//     <div ref={containerRef} className="min-h-[300vh] py-20">
//       <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={activeSection}
//             custom={direction}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               duration: 0.8,
//               ease: [0.32, 0.72, 0, 1],
//             }}
//             className="w-full"
//           >
//             <div className={`${sections[activeSection].bgColor} transition-colors duration-700`}>
//               <div className="container mx-auto px-4 py-12 lg:py-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//                   {/* Left Side - Text Content */}
//                   <motion.div
//                     variants={textVariants}
//                     className="text-white space-y-6"
//                   >
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs font-medium mb-6">
//                         {sections[activeSection].badge}
//                       </span>
//                     </motion.div>

//                     <motion.h1
//                       variants={textVariants}
//                       className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
//                     >
//                       {sections[activeSection].title}
//                     </motion.h1>

//                     <motion.p
//                       variants={textVariants}
//                       transition={{ delay: 0.1 }}
//                       className="text-white/90 text-sm md:text-base lg:text-lg max-w-xl"
//                     >
//                       {sections[activeSection].subtitle}
//                     </motion.p>

//                     {/* Navigation Tabs */}
//                     <motion.div
//                       variants={textVariants}
//                       transition={{ delay: 0.2 }}
//                       className="flex gap-8 pt-8 border-t border-white/20"
//                     >
//                       {sections.map((section, index) => (
//                         <button
//                           key={section.id}
//                           onClick={() => {
//                             setDirection(index > activeSection ? 1 : -1);
//                             setActiveSection(index);
//                             previousSectionRef.current = index;
//                           }}
//                           className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${activeSection === index
//                             ? 'border-white text-white'
//                             : 'border-transparent text-white/50 hover:text-white/80'
//                             }`}
//                         >
//                           {section.badge}
//                         </button>
//                       ))}
//                     </motion.div>
//                   </motion.div>

//                   {/* Right Side - Card with Circular Image Rotation */}
//                   <motion.div
//                     variants={textVariants}
//                     className={`${sections[activeSection].cardBg} rounded-3xl p-8 lg:p-10 shadow-2xl transition-colors duration-700`}
//                   >
//                     <motion.h2
//                       variants={textVariants}
//                       className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
//                     >
//                       {sections[activeSection].cardTitle}
//                     </motion.h2>

//                     {/* Circular Rotating Image */}
//                     <div className="relative w-32 h-32 mx-auto mb-8">
//                       <AnimatePresence mode="wait" custom={direction}>
//                         <motion.div
//                           key={activeSection}
//                           custom={direction}
//                           variants={imageVariants}
//                           initial="enter"
//                           animate="center"
//                           exit="exit"
//                           transition={{
//                             rotateY: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
//                             opacity: { duration: 0.5 },
//                             scale: { duration: 0.5 },
//                           }}
//                           className="absolute inset-0"
//                           style={{ transformStyle: 'preserve-3d' }}
//                         >
//                           <div className="relative w-full h-full">
//                             <Image
//                               src={sections[activeSection].image}
//                               alt={sections[activeSection].cardTitle}
//                               fill
//                               className="object-contain"
//                               priority
//                             />
//                           </div>
//                         </motion.div>
//                       </AnimatePresence>
//                     </div>

//                     <motion.p
//                       variants={textVariants}
//                       transition={{ delay: 0.1 }}
//                       className="text-gray-700 leading-relaxed mb-8 text-sm lg:text-base"
//                     >
//                       {sections[activeSection].cardDescription}
//                     </motion.p>

//                     <motion.button
//                       variants={textVariants}
//                       transition={{ delay: 0.2 }}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`${sections[activeSection].buttonColor} text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
//                     >
//                       {sections[activeSection].buttonText}
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CircularHelp;


'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CircularHelp = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const containerRef = useRef(null);
  const previousSectionRef = useRef(0);

  const sections = [
    {
      id: 0,
      badge: 'AUDIENCE',
      title: (
        <>
          The Right Traffic.
          <br />
          At Buying
          <br />
          Temperature.
        </>
      ),
      subtitle: 'Keyword-based-diem campaigns that reach buyers',
      cardTitle: 'Targeting the right audience',
      cardDescription:
        `Google Ads "one-track-pony." You'll find better than clickworthy landing experience.We leverage advanced audience targeting to reach users at the exact moment they're ready to convert. Our data-driven approach ensures your ads reach the right people, at the right time, with the right message.`,
      buttonText: 'Track the right audience',
      image: '/google-ads/circ1.png',
      bgColor: 'bg-gradient-to-br from-green-700 to-green-900',
      cardBg: 'bg-green-100',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
    {
      id: 1,
      badge: 'TRACKING',
      title: (
        <>
          Google&apos;s Attribution
          <br />
          Lies To You.
          <br />
          We Show The Truth
        </>
      ),
      subtitle: '30-40% of conversions go unreported through browser pixels. Server-side tracking + GA4 goals + first-party data reveal what\'s actually working',
      cardTitle: 'AI + Attribution',
      cardDescription:
        `What Google shows other tools. We track 100% of page loads, search, click patterns, form interactions to predict which traffic will convert before it does. Then we feed that intelligence back into bidding algorithms. Google's aren't bidding optimize for conversions.`,
      buttonText: 'Optimize Ads for revenue',
      image: '/google-ads/circ2.png',
      bgColor: 'bg-gradient-to-br from-blue-700 to-blue-900',
      cardBg: 'bg-blue-50',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      id: 2,
      badge: 'ONGOING',
      title: (
        <>
          Campaigns That
          <br />
          Compound <span className="text-orange-400">Daily,</span>
          <br />
          <span className="text-orange-400">Not Monthly</span>
        </>
      ),
      subtitle: '30-40% of conversions go unreported through browser pixels. Server-side tracking + GA4 goals + first-party data reveal what\'s actually working',
      cardTitle: 'Optimization & more',
      cardDescription:
        `We track your campaigns daily: CPA, Quality Score, conversion patterns across 47 signals. When performance drops, AI investigates within hours, not days. Budget reallocation every Monday based on what's working.Experiments run live—new keywords, new campaigns, new creatives.Winners scale immediately.`,
      buttonText: 'Explore our Outcome',
      image: '/google-ads/circ3.png',
      bgColor: 'bg-gradient-to-br from-yellow-600 to-yellow-800',
      cardBg: 'bg-yellow-50',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrollProgress = -containerTop / (containerHeight - windowHeight);

      // Determine active section based on scroll progress
      let newActiveSection = 0;
      if (scrollProgress > 0.66) {
        newActiveSection = 2;
      } else if (scrollProgress > 0.33) {
        newActiveSection = 1;
      }

      // Determine direction for circular animation
      if (newActiveSection !== previousSectionRef.current) {
        // Moving forward
        if (newActiveSection > previousSectionRef.current) {
          setDirection(1);
        }
        // Moving backward
        else if (newActiveSection < previousSectionRef.current) {
          setDirection(-1);
        }
        // Circular: from last to first
        else if (previousSectionRef.current === 2 && newActiveSection === 0) {
          setDirection(1);
        }
        // Circular: from first to last
        else if (previousSectionRef.current === 0 && newActiveSection === 2) {
          setDirection(-1);
        }

        previousSectionRef.current = newActiveSection;
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const imageVariants = {
    enter: (direction) => ({
      x: 250,
      y: 250,
      rotate: -60,
      opacity: 1,        // ← was 0 – now visible from start
      scale: 1,          // ← was 0.5 – now full size
    }),
    center: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: 250,
      y: -250,
      rotate: -45,
      opacity: 1,        // ← was 0 – now visible until unmount
      scale: 1,          // ← was 0.5 – stays full size
    }),
  };


  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <div ref={containerRef} className="min-h-[300vh] py-20 max-w-7xl mx-auto">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSection}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="w-full"
          >
            <div className={`${sections[activeSection].bgColor} transition-colors duration-700 rounded-[20px] `}>
              <div className="container mx-auto px-4 py-12 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Text Content */}
                  <motion.div
                    variants={textVariants}
                    className="text-white space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block border border-white/30 rounded-full px-4 py-1 text-xs font-medium mb-6">
                        {sections[activeSection].badge}
                      </span>
                    </motion.div>

                    <motion.h1
                      variants={textVariants}
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                    >
                      {sections[activeSection].title}
                    </motion.h1>

                    <motion.p
                      variants={textVariants}
                      transition={{ delay: 0.1 }}
                      className="text-white/90 text-sm md:text-base lg:text-lg max-w-xl"
                    >
                      {sections[activeSection].subtitle}
                    </motion.p>

                    {/* Navigation Tabs */}
                    <motion.div
                      variants={textVariants}
                      transition={{ delay: 0.2 }}
                      className="flex gap-8 pt-8 border-t border-white/20"
                    >
                      {sections.map((section, index) => (
                        <button
                          key={section.id}
                          onClick={() => {
                            setDirection(index > activeSection ? 1 : -1);
                            setActiveSection(index);
                            previousSectionRef.current = index;
                          }}
                          className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${activeSection === index
                            ? 'border-white text-white'
                            : 'border-transparent text-white/50 hover:text-white/80'
                            }`}
                        >
                          {section.badge}
                        </button>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Image Only with Circular Rotation */}
                  <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000">
                    <AnimatePresence>
                      <motion.div
                        key={activeSection}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.8,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={sections[activeSection].image}
                            alt={sections[activeSection].cardTitle}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CircularHelp;


