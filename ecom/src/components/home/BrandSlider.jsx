"use client";

import Image from "next/image";
// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// import Image from "next/image";
// import { useRef, useLayoutEffect, useState } from "react";

// const brands = [
//   { name: "Brand 1", src: "/brand1.png" },
//   { name: "Brand 2", src: "/brand2.png" },
//   { name: "Brand 3", src: "/brand3.png" },
//   { name: "Brand 4", src: "/brand4.png" },
//   { name: "Brand 5", src: "/brand5.png" },
// ];

// function InfiniteRow({ direction = -1, speedMultiplier = 60 }) {
//   const x = useMotionValue(0);
//   const speed = speedMultiplier * direction;

//   const containerRef = useRef(null);
//   const isDragging = useRef(false);
//   const lastX = useRef(0);
//   const velocity = useRef(speed);

//   const [itemWidth, setItemWidth] = useState(0);
//   const [totalWidth, setTotalWidth] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);

//   // Measure widths
//   useLayoutEffect(() => {
//     const brandItemWidth = 184; // 160px + 24px gap
//     setItemWidth(brandItemWidth);

//     const totalBrandsW = brands.length * brandItemWidth;
//     setTotalWidth(totalBrandsW);

//     // Measure container width
//     if (containerRef.current) {
//       setContainerWidth(containerRef.current.offsetWidth);
//     }

//     // Start in middle for both directions
//     x.set(-totalBrandsW * 10); // 10 sets left
//   }, [x]);

//   // Infinite animation
//   useAnimationFrame((_, delta) => {
//     if (isDragging.current) return;
//     velocity.current += (speed - velocity.current) * 0.02;
//     x.set(x.get() + (velocity.current * delta) / 1000);
//   });

//   // Drag handlers
//   const onPointerDown = (e) => {
//     e.preventDefault();
//     isDragging.current = true;
//     lastX.current = e.clientX;
//     document.body.style.cursor = "grabbing";
//     document.body.style.userSelect = "none";
//   };

//   const onPointerMove = (e) => {
//     if (!isDragging.current) return;
//     const dx = e.clientX - lastX.current;
//     lastX.current = e.clientX;
//     x.set(x.get() + dx);
//     velocity.current = dx * 30;
//   };

//   const onPointerUp = () => {
//     isDragging.current = false;
//     document.body.style.cursor = "";
//     document.body.style.userSelect = "";
//   };

//   // Render infinite brands
//   const renderBrands = () => {
//     if (!totalWidth || !containerWidth) return null;

//     // How many sets needed to cover both directions + buffer
//     const setsNeeded = Math.ceil(containerWidth / totalWidth) + 20;
//     const all = [];
//     for (let i = 0; i < setsNeeded; i++) {
//       all.push(
//         ...brands.map((b, idx) => (
//           <div
//             key={`${i}-${idx}`}
//             className="min-w-[160px] flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
//             style={{ pointerEvents: "none" }}
//           >
//             <Image
//               src={b.src}
//               alt={b.name}
//               width={120}
//               height={40}
//               draggable={false}
//               className="select-none w-16 xs:w-20 h-full object-contain"
//             />
//           </div>
//         )),
//       );
//     }
//     return all;
//   };

//   return (
//     <div ref={containerRef} className="relative overflow-hidden w-full">
//       {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F8F4] to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F8F4] to-transparent z-10 pointer-events-none" /> */}

//       <div
//         className="select-none"
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp}
//         onPointerLeave={onPointerUp}
//       >
//         <motion.div className="flex gap-8 xs:gap-16 md:gap-24 will-change-transform" style={{ x }}>
//           {renderBrands()}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default function BrandSlider() {
//   return (
//     <section className="py-14 xs:py-20 space-y-14 overflow-hidden">


//       {/* Left to right */}
//       <InfiniteRow direction={1} />
//       {/* Right to left */}
//       <InfiniteRow direction={-1} />
//     </section>
//   );
// }



import { useState, useRef, useEffect } from "react";

function MarqueeRow({ brands, direction = "left", itemWidth = 150 }) {
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
        if (!entry.isIntersecting && animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
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
        const newOffset = prev + autoPlaySpeed;
        return ((newOffset % totalWidth) + totalWidth) % totalWidth;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, velocity, totalWidth, isVisible, autoPlaySpeed]);

  useEffect(() => {
    if (isDragging || Math.abs(velocity) < 0.1) {
      if (!isDragging) setVelocity(0);
      return;
    }

    const decelerate = () => {
      setVelocity((prev) => {
        const newVelocity = prev * 0.92;
        return Math.abs(newVelocity) < 0.1 ? 0 : newVelocity;
      });

      setOffset((prev) => {
        const newOffset = prev + velocity;
        return ((newOffset % totalWidth) + totalWidth) % totalWidth;
      });

      animationRef.current = requestAnimationFrame(decelerate);
    };

    animationRef.current = requestAnimationFrame(decelerate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [velocity, isDragging, totalWidth]);

  const calculateVelocity = () => {
    if (lastPositions.current.length < 2) return 0;

    const recentPositions = lastPositions.current.slice(-5);
    const velocities = [];

    for (let i = 1; i < recentPositions.length; i++) {
      const timeDiff = recentPositions[i].time - recentPositions[i - 1].time;
      const posDiff = recentPositions[i].x - recentPositions[i - 1].x;
      if (timeDiff > 0) {
        velocities.push((posDiff / timeDiff) * 16);
      }
    }

    if (velocities.length === 0) return 0;
    return velocities.reduce((a, b) => a + b, 0) / velocities.length;
  };

  const handleStart = (clientX) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setIsDragging(true);
    setVelocity(0);
    dragStartX.current = clientX;
    dragStartOffset.current = offset;
    lastPositions.current = [{ x: clientX, time: Date.now() }];
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;

    const dragDistance = clientX - dragStartX.current;
    const newOffset = dragStartOffset.current + dragDistance;

    setOffset(((newOffset % totalWidth) + totalWidth) % totalWidth);

    const now = Date.now();
    lastPositions.current.push({ x: clientX, time: now });

    if (lastPositions.current.length > 5) {
      lastPositions.current.shift();
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    const calculatedVelocity = calculateVelocity();
    setVelocity(calculatedVelocity);
    lastPositions.current = [];
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    if (isDragging) {
      const mouseMoveHandler = (e) => handleMouseMove(e);
      const mouseUpHandler = () => handleMouseUp();

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);

      return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };
    }
  }, [isDragging, offset]);

  const renderItems = () => {
    const startIndex = Math.floor(-offset / itemWidth) - 2;
    const visibleCount = Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1920) / itemWidth) + 5;

    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (((startIndex + i) % brands.length) + brands.length) % brands.length;
      const brand = brands[index];
      const position = (startIndex + i) * itemWidth + offset;

      return (
        <div
          key={`${brand.id}-${startIndex + i}`}
          className="absolute top-0 h-full flex items-center justify-center "
          style={{
            left: `${position}px`,
            width: `${itemWidth - 20}px`,
            transform: isDragging ? "scale(0.98)" : "scale(1)",
          }}
        >
          <div className="flex items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
            <div className="flex items-center justify-center h-7 xs:h-8 w-16 xs:w-18 3xl:w-24">
              <Image
                src={brand.logo}
                alt={"Logos of ecommerce brands partnered with Upthrust"}
                width={120}
                height={40}
                draggable={false}
                className="max-h-full max-w-full object-contain select-none "
              />
            </div>
            {/* Divider */}
            {/* Divider */}
            <div className="absolute right-0 top-1/2 h-6 3xl:h-10 w-px bg-gray-300 -translate-y-1/2" />

          </div>
        </div>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-16 md:h-30 3xl:h-32 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }}
    >
      {renderItems()}
    </div>
  );
}

export default function BrandSlider() {
  const brandsRow1 = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: `/ecom/brand/first/f${i + 1}.webp`,
  }));


  const brandsRow2 = Array.from({ length: 15 }, (_, i) => ({
    id: i + 21,
    name: `Brand ${i + 21}`,
    logo: `/ecom/brand/second/s${i + 1}.webp`,
  }));

  return (
    <div className="py-14 xs:py-20 space-y-10 overflow-hidden">

      <div className="flex-1 flex flex-col justify-center gap-0">
        <MarqueeRow brands={brandsRow1} direction="left" />
        <MarqueeRow brands={brandsRow2} direction="right" />
      </div>
    </div>
  );
}