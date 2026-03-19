"use client"
import Image from "next/image";
import React, { useState } from "react";

const ProfileSection = () => {
  const [active, setActive] = useState(0);

  const profiles = [
    {
      name: "VEGA",
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
      img: "/performance-agency/MouserProfile.png",
      text: " “Search Engine marketing, google ads, and a budget allocation plan by Upthrust proved to be really helpful.”",
      person: "Gunjan",
      role: "Marketing Head, Housr",
    },
    {
      name: "M.C.Overalls",
      img: "/performance-agency/McProfile.png",
      text: "“Upthrust promised us a 90-day, but to my surprise, the store's ranking and visibility improved within 47 days. We started getting traffic, better conversions, and exponential sales.”",
      person: "Troy",
      role: "Sales Manager, M.C.Overalls",
    },
    {
      name: "carorbis",
      img: "/performance-agency/CarorbisProfile.jsx.png",
      text: "“I’m happy to say that in the last six months we’ve been able to grow our organic traffic by 463%. Our ad expenses are doing better than ever. We have also been able to improve our conversion rates by almost three times, all thanks to the incredible team at Upthrust.”",
      person: "Rishabh Jain",
      role: "President - Carorbis",
    },
    {
      name: "+escribe",
      img: "/performance-agency/EscribeProfile.png",
      text: "I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”",
      person: "Pranath Sisodiya",
      role: "CEO - Rescribe",
    },
  ];

  return (
    <div className=" max-w-[90%] mx-auto ">
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
            {item.name}
            {/* {
              <img src={profiles.name} alt="" />
            } */}

            {/* TOP PLUS */}
            {index !== profiles.length - 1 && (
              <>
                <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-white z-10">
                  <Image
                    src="/performance-agency/plus.png"
                    alt="plus"
                    width={9.5}
                    height={9.5}
                  />
                </div>

                {/* BOTTOM PLUS */}
                <div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 bg-white z-10">
                  <Image
                    src="/performance-agency/plus.png"
                    alt="plus"
                    width={9.5}
                    height={9.5}
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
      <div className="flex flex-col lg:flex-row  gap-8 3xl:gap-12 mt-12  max-h-[521px]">
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
          font-semibold leading-relaxed">
            {profiles[active].text}
          </p>
          <div className="mt-10  pt-6">
            <p className="text-[30px]   font-semibold">
              {profiles[active].person}
            </p>
            <p className="text-[24px] ">
              {profiles[active].role}
            </p>
            <button className="mt-6 bg-black text-white px-5 py-3 text-[14px]  cursor-pointer">
              GET AD ACCOUNT AUDIT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;