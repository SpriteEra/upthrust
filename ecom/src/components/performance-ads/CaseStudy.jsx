// import React, { useEffect, useState, useRef } from "react";

// import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
// import { cards } from "./CaseStudyData";
// import Image from "next/image";

// const CaseStudy = ({ index, setIndex }) => {

//   const [direction, setDirection] = useState(null);
//   const containerRef = useRef(null);

//   const nextSlide = () =>
//     setIndex((prev) => (prev + 1) % cards.length);

//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + cards.length) % cards.length);


//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;

//     const rect = containerRef.current.getBoundingClientRect();
//     const center = rect.left + rect.width / 2;

//     if (e.clientX > center && direction !== "right") {
//       setDirection("right");
//     } else if (e.clientX < center && direction !== "left") {
//       setDirection("left");
//     }
//   };

//   // infinite move
//   // useEffect(() => {

//   //   if (!direction) return;

//   //   const interval = setInterval(() => {

//   //     if (direction === "left") {
//   //       nextSlide();
//   //     } else {
//   //       prevSlide();
//   //     }

//   //   }, 2000);

//   //   return () => clearInterval(interval);

//   // }, [direction]);

//   useEffect(() => {
//     if (!direction) return;

//     const interval = setInterval(() => {
//       if (direction === "right") {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [direction, index]);

//   return (
//     <div
//       className="w-full h-[733px] overflow-hidden"
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setDirection(null)}
//     >
//       <div className=" flex flex-col items-center">

//         {/* Slider */}
//         <div className="relative flex items-center justify-center h-[600px]">

//           {cards.map((card, i) => {

//             const position = (i - index + cards.length) % cards.length;

//             let style = "";

//             if (position === 0)
//               style = "scale-110 z-30";

//             else if (position === 1)
//               style = "translate-x-[60px] scale-95 z-20";

//             else if (position === 2)
//               style = "translate-x-[100px] scale-90 z-10";

//             else if (position === cards.length - 1)
//               style = "-translate-x-[60px] scale-95 z-20";

//             else if (position === cards.length - 2)
//               style = "-translate-x-[100px] scale-90 z-10";

//             else return null;

//             return (
//               <div
//                 key={i}
//                 className={`absolute top-[60%] -translate-y-1/2 w-[320px] 3xl:w-[467px] bg-white border border-black px-5 py-7 transition-all duration-700 ${style}`}
//               >

//                 <Image width={424} height={400} src={card.img} alt="images" className="w-full h-full max-h-[424px] max-w-[400px] object-cover" />

//                 <p className="text-[14px] mt-3 leading-[150%] tracking-[-0.02em] ">
//                   {card.category}
//                 </p>

//                 <h3 className="text-[30px] font-semibold mt-1 leading-[150%] tracking-[-0.02em]">
//                   {card.title}
//                 </h3>

//                 <p className="text-[18px] mt-2">
//                   {card.price}
//                 </p>

//                 <p className="text-[20px] mt-2">
//                   {card.text}
//                 </p>

//               </div>
//             );
//           })}

//         </div>

//         {/* Controls */}
//         <div className="flex items-center gap-6 mt-20 3xl:mt-28 ">

//           <button onClick={prevSlide}>
//             <FaAngleLeft size={25} />
//           </button>

//           <div className="flex gap-3">
//             {cards.map((_, i) => (
//               <div
//                 key={i}
//                 className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "border border-black"
//                   }`}
//               />
//             ))}
//           </div>

//           <button onClick={nextSlide}>
//             <FaAngleRight size={25} />
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default CaseStudy;


import React, { useEffect, useState, useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { cards } from "./CaseStudyData";
import Image from "next/image";

const CaseStudy = ({ index, setIndex }) => {

  const [direction, setDirection] = useState(null);
  const containerRef = useRef(null);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % cards.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);


  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const center = rect.left + rect.width / 2;

    if (e.clientX > center && direction !== "right") {
      setDirection("right");
    } else if (e.clientX < center && direction !== "left") {
      setDirection("left");
    }
  };

  // infinite move
  // useEffect(() => {

  //   if (!direction) return;

  //   const interval = setInterval(() => {

  //     if (direction === "left") {
  //       nextSlide();
  //     } else {
  //       prevSlide();
  //     }

  //   }, 2000);

  //   return () => clearInterval(interval);

  // }, [direction]);

  useEffect(() => {
    if (!direction) return;

    const interval = setInterval(() => {
      if (direction === "right") {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [direction, index]);

  return (

    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="sm:hidden px-4 py-6 space-y-8 ">

        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#f6f6f6] border border-black p-4"
          >
            {/* Image */}
            <div className="border border-black mb-4">
              <Image
                width={400}
                height={300}
                src={card.img}
                alt="image"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Category */}
            <p className="text-[12px] uppercase text-gray-600 mb-1">
              {card.category}
            </p>

            {/* Title */}
            <h3 className="text-[22px] font-semibold mb-2">
              {card.title}
            </h3>

            {/* Price / Revenue */}
            <p className="text-[14px] mb-2">
              {card.price}
            </p>

            {/* Text */}
            <p className="text-[14px] text-gray-700 leading-[140%]">
              {card.text}
            </p>
          </div>
        ))}

      </div>

      {/* ================= DESKTOP SLIDER ================= */}
      <div
        className="hidden sm:block w-full h-[733px] overflow-hidden"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setDirection(null)}
      >
        <div className="flex flex-col items-center">

          {/* Slider */}
          <div className="relative flex items-center justify-center h-[600px]">

            {cards.map((card, i) => {
              const position = (i - index + cards.length) % cards.length;

              let style = "";

              if (position === 0)
                style = "scale-110 z-30";
              else if (position === 1)
                style = "translate-x-[60px] scale-95 z-20";
              else if (position === 2)
                style = "translate-x-[100px] scale-90 z-10";
              else if (position === cards.length - 1)
                style = "-translate-x-[60px] scale-95 z-20";
              else if (position === cards.length - 2)
                style = "-translate-x-[100px] scale-90 z-10";
              else return null;

              return (
                <div
                  key={i}
                  className={`absolute top-[60%] -translate-y-1/2 w-[320px] 3xl:w-[467px] bg-white border border-black px-5 py-7 transition-all duration-700 ${style}`}
                >

                  <Image
                    width={424}
                    height={400}
                    src={card.img}
                    alt="images"
                    className="w-full h-full max-h-[424px] max-w-[400px] object-cover"
                  />

                  <p className="text-[14px] mt-3">
                    {card.category}
                  </p>

                  <h3 className="text-[30px] font-semibold mt-1">
                    {card.title}
                  </h3>

                  <p className="text-[18px] mt-2">
                    {card.price}
                  </p>

                  <p className="text-[20px] mt-2">
                    {card.text}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-20">

            <button onClick={prevSlide}>
              <FaAngleLeft size={25} />
            </button>

            <div className="flex gap-3">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "border border-black"
                    }`}
                />
              ))}
            </div>

            <button onClick={nextSlide}>
              <FaAngleRight size={25} />
            </button>

          </div>

        </div>
      </div>
    </>
  );
};

export default CaseStudy;