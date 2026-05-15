// "use client";

// import Image from "next/image";

// import { useState, useRef, useEffect } from "react";

// function MarqueeRow({ brands, direction = "left", itemWidth = 150 }) {
//   const [offset, setOffset] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [velocity, setVelocity] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   const dragStartX = useRef(0);
//   const dragStartOffset = useRef(0);
//   const lastPositions = useRef([]);
//   const animationRef = useRef(null);
//   const containerRef = useRef(null);

//   const totalWidth = itemWidth * brands.length;
//   const autoPlaySpeed = direction === "left" ? -1 : 1;

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//         if (!entry.isIntersecting && animationRef.current) {
//           cancelAnimationFrame(animationRef.current);
//         }
//       },
//       { threshold: 0 }
//     );

//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible || isDragging || Math.abs(velocity) > 0.1) return;

//     const animate = () => {
//       setOffset((prev) => {
//         const newOffset = prev + autoPlaySpeed;
//         return ((newOffset % totalWidth) + totalWidth) % totalWidth;
//       });
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, [isDragging, velocity, totalWidth, isVisible, autoPlaySpeed]);

//   useEffect(() => {
//     if (isDragging || Math.abs(velocity) < 0.1) {
//       if (!isDragging) setVelocity(0);
//       return;
//     }

//     const decelerate = () => {
//       setVelocity((prev) => {
//         const newVelocity = prev * 0.92;
//         return Math.abs(newVelocity) < 0.1 ? 0 : newVelocity;
//       });

//       setOffset((prev) => {
//         const newOffset = prev + velocity;
//         return ((newOffset % totalWidth) + totalWidth) % totalWidth;
//       });

//       animationRef.current = requestAnimationFrame(decelerate);
//     };

//     animationRef.current = requestAnimationFrame(decelerate);
//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, [velocity, isDragging, totalWidth]);

//   const calculateVelocity = () => {
//     if (lastPositions.current.length < 2) return 0;

//     const recentPositions = lastPositions.current.slice(-5);
//     const velocities = [];

//     for (let i = 1; i < recentPositions.length; i++) {
//       const timeDiff = recentPositions[i].time - recentPositions[i - 1].time;
//       const posDiff = recentPositions[i].x - recentPositions[i - 1].x;
//       if (timeDiff > 0) {
//         velocities.push((posDiff / timeDiff) * 16);
//       }
//     }

//     if (velocities.length === 0) return 0;
//     return velocities.reduce((a, b) => a + b, 0) / velocities.length;
//   };

//   const handleStart = (clientX) => {
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }

//     setIsDragging(true);
//     setVelocity(0);
//     dragStartX.current = clientX;
//     dragStartOffset.current = offset;
//     lastPositions.current = [{ x: clientX, time: Date.now() }];
//   };

//   const handleMove = (clientX) => {
//     if (!isDragging) return;

//     const dragDistance = clientX - dragStartX.current;
//     const newOffset = dragStartOffset.current + dragDistance;

//     setOffset(((newOffset % totalWidth) + totalWidth) % totalWidth);

//     const now = Date.now();
//     lastPositions.current.push({ x: clientX, time: now });

//     if (lastPositions.current.length > 5) {
//       lastPositions.current.shift();
//     }
//   };

//   const handleEnd = () => {
//     setIsDragging(false);
//     const calculatedVelocity = calculateVelocity();
//     setVelocity(calculatedVelocity);
//     lastPositions.current = [];
//   };

//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     handleStart(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     e.preventDefault();
//     handleMove(e.clientX);
//   };

//   const handleMouseUp = () => {
//     handleEnd();
//   };

//   const handleTouchStart = (e) => {
//     handleStart(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     handleMove(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     handleEnd();
//   };

//   useEffect(() => {
//     if (isDragging) {
//       const mouseMoveHandler = (e) => handleMouseMove(e);
//       const mouseUpHandler = () => handleMouseUp();

//       document.addEventListener("mousemove", mouseMoveHandler);
//       document.addEventListener("mouseup", mouseUpHandler);

//       return () => {
//         document.removeEventListener("mousemove", mouseMoveHandler);
//         document.removeEventListener("mouseup", mouseUpHandler);
//       };
//     }
//   }, [isDragging, offset]);

//   const renderItems = () => {
//     const startIndex = Math.floor(-offset / itemWidth) - 2;
//     const visibleCount = Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1920) / itemWidth) + 5;

//     return Array.from({ length: visibleCount }, (_, i) => {
//       const index = (((startIndex + i) % brands.length) + brands.length) % brands.length;
//       const brand = brands[index];
//       const position = (startIndex + i) * itemWidth + offset;

//       return (
//         <div
//           key={`${brand.id}-${startIndex + i}`}
//           className="absolute top-0 h-full flex items-center justify-center "
//           style={{
//             left: `${position}px`,
//             width: `${itemWidth - 20}px`,
//             transform: isDragging ? "scale(0.98)" : "scale(1)",
//           }}
//         >
//           <div className="flex items-center justify-center"
//             style={{ pointerEvents: "none" }}
//           >
//             <div className={`flex items-center justify-center h-8 xs:h-8 w-20 xs:w-18 3xl:w-24 border border-[#B7B7B7] rounded-full px-6 py-2  ${brand.logoClass}`}>
//               <Image
//                 src={brand.logo}
//                 alt={"Logos of ecommerce brands partnered with Upthrust"}
//                 width={150}
//                 height={50}
//                 draggable={false}
//                 className="max-h-full max-w-full object-contain select-none "
//               />
//             </div>
//             {/* Divider */}
//             {/* <div className="absolute right-0 top-1/2 h-6 3xl:h-10 w-px bg-gray-300 -translate-y-1/2" /> */}

//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-16 md:h-30 3xl:h-32 overflow-hidden cursor-grab active:cursor-grabbing select-none"
//       onMouseDown={handleMouseDown}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       style={{ touchAction: "pan-y" }}
//     >
//       {renderItems()}
//     </div>
//   );
// }
// const defaultRow1 = Array.from({ length: 17 }, (_, i) => ({
//   id: i + 1,
//   name: `Brand ${i + 1}`,
//   logo: `/ecom/brand/first/f${i + 1}.webp`,
// }));

// const defaultRow2 = Array.from({ length: 15 }, (_, i) => ({
//   id: i + 21,
//   name: `Brand ${i + 21}`,
//   logo: `/ecom/brand/second/s${i + 1}.webp`,
// }));


// export default function AgencyBrandSlider({ brandsRow1 = defaultRow1, brandsRow2 = defaultRow2 }) {
//   return (
//     <div className="py-8 xs:py-10 space-y-10 overflow-hidden">

//       <div className="flex-1 flex flex-col justify-center gap-0 max-lg:space-y-3">
//         <MarqueeRow brands={brandsRow1} direction="left" />
//         <MarqueeRow brands={brandsRow2} direction="right" />
//       </div>
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";


const GAP = 22; // px gap between consecutive pills

function MarqueeRow({ brands, direction = "left", itemWidth = 210 }) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastPositions = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const totalWidth = itemWidth * brands.length;
  const autoPlaySpeed = direction === "left" ? -1 : 1;

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && animationRef.current)
          cancelAnimationFrame(animationRef.current);
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isDragging || Math.abs(velocity) > 0.1) return;
    const animate = () => {
      setOffset((prev) => {
        const n = prev + autoPlaySpeed;
        return ((n % totalWidth) + totalWidth) % totalWidth;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isDragging, velocity, totalWidth, isVisible, autoPlaySpeed]);

  useEffect(() => {
    if (isDragging || Math.abs(velocity) < 0.1) {
      if (!isDragging) setVelocity(0);
      return;
    }
    const decelerate = () => {
      setVelocity((prev) => {
        const v = prev * 0.92;
        return Math.abs(v) < 0.1 ? 0 : v;
      });
      setOffset((prev) => {
        const n = prev + velocity;
        return ((n % totalWidth) + totalWidth) % totalWidth;
      });
      animationRef.current = requestAnimationFrame(decelerate);
    };
    animationRef.current = requestAnimationFrame(decelerate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [velocity, isDragging, totalWidth]);

  const calculateVelocity = () => {
    if (lastPositions.current.length < 2) return 0;
    const recent = lastPositions.current.slice(-5);
    const vels = [];
    for (let i = 1; i < recent.length; i++) {
      const dt = recent[i].time - recent[i - 1].time;
      const dx = recent[i].x - recent[i - 1].x;
      if (dt > 0) vels.push((dx / dt) * 16);
    }
    return vels.length ? vels.reduce((a, b) => a + b, 0) / vels.length : 0;
  };

  const handleStart = (clientX) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setIsDragging(true);
    setVelocity(0);
    dragStartX.current = clientX;
    dragStartOffset.current = offset;
    lastPositions.current = [{ x: clientX, time: Date.now() }];
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const newOffset = dragStartOffset.current + (clientX - dragStartX.current);
    setOffset(((newOffset % totalWidth) + totalWidth) % totalWidth);
    lastPositions.current.push({ x: clientX, time: Date.now() });
    if (lastPositions.current.length > 5) lastPositions.current.shift();
  };

  const handleEnd = () => {
    setIsDragging(false);
    setVelocity(calculateVelocity());
    lastPositions.current = [];
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => { e.preventDefault(); handleMove(e.clientX); };
    const onUp = () => handleEnd();
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, offset]);

  const renderItems = () => {
    const startIndex = Math.floor(-offset / itemWidth) - 2;
    const visibleCount =
      Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1920) / itemWidth) + 5;

    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (((startIndex + i) % brands.length) + brands.length) % brands.length;
      const brand = brands[index];
      const position = (startIndex + i) * itemWidth + offset;

      // Per-brand logo size — edit logoWidth / logoHeight in the brand arrays above
      const lw = brand.logoWidth ?? "w-auto";
      const lh = brand.logoHeight ?? "h-6";

      return (
        <div
          key={`${brand.id}-${startIndex + i}`}
          className="absolute top-0 h-full flex items-center justify-center"
          style={{
            left: `${position}px`,
            width: `${itemWidth - GAP}px`,
            transform: isDragging ? "scale(0.98)" : "scale(1)",
          }}
        >
          <div className="flex items-center justify-center" style={{ pointerEvents: "none" }}>
            {/* Pill — fixed height, auto width via min-w */}
            <div
              className={`
                flex items-center justify-center
                h-11 md:h-12 lg:h-13 3xl:h-14
                min-w-[6.5rem] md:min-w-[7.5rem] lg:min-w-[8.5rem]
                border border-[#B7B7B7] rounded-full
                px-5 md:px-6 py-2
                ${brand.logoClass ?? ""}
              `}
            >
              {/*
                ↓ Only these two classes change per brand.
                  Edit logoWidth / logoHeight in the brand arrays at the top.
              */}
              <Image
                src={brand.logo}
                alt="Logos of ecommerce brands"
                width={200}
                height={80}
                draggable={false}
                className={`object-contain select-none ${lw} ${lh}`}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-20 md:h-24 lg:h-28 3xl:h-32 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => { e.preventDefault(); handleStart(e.clientX); }}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      style={{ touchAction: "pan-y" }}
    >
      {renderItems()}
    </div>
  );
}

// ─── Page component ────────────────────────────────────────────────────────────
export default function AgencyBrandSlider({
  brandsRow1,
  brandsRow2,
}) {
  return (
    <div className="py-8 xs:py-10 space-y-4 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center gap-0 max-lg:space-y-2">
        <MarqueeRow brands={brandsRow1} direction="left" itemWidth={180} />
        <MarqueeRow brands={brandsRow2} direction="right" itemWidth={180} />
      </div>
    </div>
  );
}