import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
// import { cards } from "../data/CaseStudyData";
import { cards } from "./CaseStudyData";

const CaseStudy = ({ index, setIndex }) => {

  const [direction, setDirection] = useState(null);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % cards.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  // cursor direction detect
  const handleMouseMove = (e) => {
    const center = window.innerWidth / 2;

    if (e.clientX > center) {
      setDirection("right");
    } else {
      setDirection("left");
    }
  };

  // infinite move
  useEffect(() => {

    if (!direction) return;

    const interval = setInterval(() => {

      if (direction === "left") {
        nextSlide();
      } else {
        prevSlide();
      }

    }, 1000);

    return () => clearInterval(interval);

  }, [direction]);

  return (
    <div
      className="w-full py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDirection(null)}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Slider */}
        <div className="relative w-[800px] h-[450px] flex items-center justify-center">

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
                className={`absolute w-[320px] bg-white border border-black p-4 transition-all duration-700 ${style}`}
              >

                <img src={card.img} className="w-full" />

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
        <div className="flex items-center gap-6 mt-16">

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
  );
};

export default CaseStudy;