"use client"
import Image from "next/image";
import React, { useState } from "react";
import PerformanceCommonButton from "./PerformanceCommonButton";

const ProfileSection = () => {
  const [active, setActive] = useState(0);

  const profiles = [
    {
      name: "VEGA",
      brand: "/performance-agency/brands/Vega.png",
      brandcss: "h-6 sm:h-6! 3xl:h-8!",
      img: "/performance-agency/Profile.png",
      text: `“We've been consistently generating high-quality leads with Upthrust,
      even on a limited budget. We're seeing around 45-50 leads per month,
      which is fantastic for a B2B company. Upthrust has been a real
      game-changer for Vega.”`,
      person: "Gaurav",
      role: "Marketing Manager, Vega",
    },
    {
      name: "Housr",
      brand: "/performance-agency/brands/Housr.png",
      brandcss: "h-6 sm:h-6! 3xl:h-7!",
      img: "/performance-agency/MouserProfile.png",
      text: " “Search Engine marketing, google ads, and a budget allocation plan by Upthrust proved to be really helpful.”",
      person: "Gunjan",
      role: "Marketing Head, Housr",
    },
    {
      name: "M.C.Overalls",
      brand: "/performance-agency/brands/McOveralls.png",
      brandcss: "h-5 sm:h-5! 3xl:h-6!",
      img: "/performance-agency/McProfile.png",
      text: "“Upthrust promised us a 90-day, but to my surprise, the store's ranking and visibility improved within 47 days. We started getting traffic, better conversions, and exponential sales.”",
      person: "Troy",
      role: "Sales Manager, M.C.Overalls",
    },
    {
      name: "carorbis",
      brand: "/performance-agency/brands/Carorbis.png",
      brandcss: "h-6 sm:h-7! 3xl:h-8!",
      img: "/performance-agency/CarorbisProfile.png",

      text: "“I’m happy to say that in the last six months we’ve been able to grow our organic traffic by 463%. Our ad expenses are doing better than ever. We have also been able to improve our conversion rates by almost three times, all thanks to the incredible team at Upthrust.”",
      person: "Rishabh Jain",
      role: "President - Carorbis",
    },
    {
      name: "+escribe",
      brand: "/performance-agency/brands/Escribe.png",
      brandcss: "h-6 sm:h-7 3xl:h-8!",
      img: "/performance-agency/EscribeProfile.png",
      text: "I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”",
      person: "Pranath Sisodiya",
      role: "CEO - Rescribe",
    },
  ];

  return (
    <>
      <div className="hidden md:block max-w-[90%] mx-auto ">
        <div className="relative flex w-full justify-start lg:justify-between mt-10  overflow-hidden">

          {profiles.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`relative flex-1 
      h-[45px] sm:h-[50px] lg:h-[55px]
      flex items-center justify-center 
      text-[14px] sm:text-[18px] lg:text-2xl
      font-bold rounded cursor-pointer transition-all duration-300
      border-r border-gray-300
      ${active === index ? "bg-black text-white" : "opacity-40"}`}
            >
              {/* {item.name} */}
              <Image
                src={item.brand}
                alt={item.name}
                width={100}
                height={40}
                className={`h-6 sm:h-7 lg:h-8 w-auto object-contain transition-all duration-300
    ${active === index
                    ? "invert brightness-0 invert-100" // ✅ white logo
                    : "grayscale opacity-90" // ✅ gray logo
                  } ${item.brandcss}`}
              />

              {/* TOP PLUS */}
              {index !== profiles.length - 1 && (
                <>
                  <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2  z-10">
                    <Image
                      src="/performance-agency/plus.png"
                      alt="plus"
                      width={9.5}
                      height={9.5}
                      className={`${active === index
                        ? "opacity-40"
                        : ""
                        }`}
                    />
                  </div>

                  {/* BOTTOM PLUS */}
                  <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2  z-10">
                    <Image
                      src="/performance-agency/plus.png"
                      alt="plus"
                      width={9.5}
                      height={9.5}
                      className={`${active === index
                        ? "opacity-40"
                        : ""
                        }`}
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          {/* TOP BORDER */}
          <div className="absolute top-0 left-0 w-full border-t border-gray-300"></div>

          {/* BOTTOM BORDER */}
          <div className="absolute bottom-0 left-0 w-full border-b border-gray-300"></div>

        </div>
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row sm:pb-2 gap-8 3xl:gap-12 mt-12  max-h-[521px]">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              width={521}
              height={521}
              src={profiles[active].img}
              alt="profile"
              className=" size-full 3xl:size-[521px] object-cover"
            />
          </div>
          {/* Text*/}
          <div className="w-full  lg:w-2/3 flex flex-col justify-between">
            <p className="
          text-[28px]
          3xl:text-[36px]
          font-semibold leading-[130%] tracking-[-0.02em] text-black">
              {profiles[active].text}
            </p>
            <div className="flex flex-col pb-1">
              <p className="text-[30px]   font-semibold">
                {profiles[active].person}
              </p>
              <p className="text-[24px] ">
                {profiles[active].role}
              </p>
              <div className="pt-5">
                <PerformanceCommonButton text="GET AD ACCOUNT AUDIT →" btncss=" bg-black text-white hover:bg-orange  px-5 py-3 text-[14px]  cursor-pointer" />
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden max-w-[90%] mx-auto py-15 ">
        <div className="relative overflow-hidden">

          {/* Slider */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {profiles.map((item, index) => (
              <div key={index} className="min-w-full   px-2">
                <div className="border border-[#1D1D1F] h-[440px] p-5 bg-white flex flex-col">

                  {/* logo */}
                  {/* <h3 className="font-bold text-lg mb-3">{item.name}</h3> */}

                  {item.brand && (
                    <Image
                      src={item.brand}
                      alt={item.name}
                      width={100}
                      height={30}
                      className={`h-6 flex items-start justify-start lg:h-8 w-fit object-contain transition-all duration-300
                        ${active === index ? "grayscale opacity-100" : "grayscale opacity-90"} `}
                    />
                  )}

                  <p className="text-[18px] mt-3 font-semibold text-black tracking-[-0.02em]  leading-[150%] mb-6">
                    {item.text}
                  </p>

                  {/* Profile (BOTTOM) */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={item.img}
                      alt={item.person}
                      width={74}
                      height={74}
                      className="rounded-full size-[74px]"
                    />
                    <div>
                      <p className="text-[16px] font-semibold text-black tracking-[-0.02em]  leading-[150%]">{item.person}</p>
                      <p className="text-[16px] text-black tracking-[-0.02em]  leading-[150%]">{item.role}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS (ARROWS + DOTS) */}
        <div className="flex items-center justify-center gap-4 mt-5">

          {/* LEFT ARROW */}
          <button
            onClick={() =>
              setActive((prev) =>
                prev === 0 ? profiles.length - 1 : prev - 1
              )
            }
            className="text-2xl px-2"
          >
            ‹
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {profiles.map((_, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${active === i ? "bg-black scale-110" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() =>
              setActive((prev) =>
                prev === profiles.length - 1 ? 0 : prev + 1
              )
            }
            className="text-2xl px-2"
          >
            ›
          </button>

        </div>
      </div>
    </>
  );
};

export default ProfileSection;