"use client";
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const navLinks = [
  {
    name: 'Clothing & Footwear',
    id: 'c&f',
    items: [
      { id: 1, image: "/ecom/banner/cloth1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4" },
      { id: 2, image: "/ecom/banner/cloth2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MILOOUTFITCHECK02FINALmp4.mp4" },
      { id: 3, image: "/ecom/banner/cloth3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/mudbondmp4.mp4" },
      { id: 4, image: "/ecom/banner/cloth4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/NEVA11mp4.mp4" },
      { id: 5, image: "/ecom/banner/cloth5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/OliveclothingCSmp4.mp4" },
      { id: 6, image: "/ecom/banner/cloth6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/urbanpitarareel5mp4.mp4" },
      { id: 7, image: "/ecom/banner/cloth7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/yummiecasestudiesmp4.mp4" },
      { id: 8, image: "/ecom/banner/cloth8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/zaydnslidesmp4.mp4" },
    ]
  },

  {
    name: 'Lifestyle',
    id: 'lifestyle',
    items: [
      { id: 1, image: "/ecom/banner/life1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/air_stream_pillow.mp4" },
      { id: 2, image: "/ecom/banner/life2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/AIRPODSNEW70%25.mp4" },
      { id: 3, image: "/ecom/banner/life3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/aviascasserolesenglishmp4.mp4" },
      { id: 4, image: "/ecom/banner/life4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/GEMMACOOKWAREmp4.mp4" },
      { id: 5, image: "/ecom/banner/life5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/NEONATTACKmp4.mp4" },
      { id: 6, image: "/ecom/banner/life6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/peppy.mp4" },
      { id: 7, image: "/ecom/banner/life7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/Phonecover.mp4" },
      { id: 8, image: "/ecom/banner/life8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/PowerBankmp4.mp4" },
      { id: 9, image: "/ecom/banner/life9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/seetramp4.mp4" },
      { id: 10, image: "/ecom/banner/life10.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/soundart.mp4" },
    ]
  },

  {
    name: 'Beauty & Skincare',
    id: 'b&s',
    items: [
      { id: 1, image: "/ecom/banner/beauty1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/aramorefinalmp4.mp4" },
      { id: 2, image: "/ecom/banner/beauty2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/Cottsberryfinalmp4.mp4" },
      { id: 3, image: "/ecom/banner/beauty3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/KIWIBYMUSSKANmp4.mp4" },
      { id: 4, image: "/ecom/banner/beauty4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4" },
      { id: 5, image: "/ecom/banner/beauty5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lashsupplycs1mp4.mp4" },
      { id: 6, image: "/ecom/banner/beauty6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lorealcsmp4.mp4" },
      { id: 7, image: "/ecom/banner/beauty7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/MAISKNNmp4.mp4" },
      { id: 8, image: "/ecom/banner/beauty8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/philosophy_reel.mp4" },
      { id: 9, image: "/ecom/banner/beauty9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/REAPSERUMmp4.mp4" },
    ]
  },

  {
    name: 'Healthcare & Supplements',
    id: 'h&s',
    items: [
      { id: 1, image: "/ecom/banner/health1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/bibomp4.mp4" },
      { id: 2, image: "/ecom/banner/health2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/ezcurediabetesmp4.mp4" },
      { id: 3, image: "/ecom/banner/health3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrideccmp4.mp4" },
      { id: 4, image: "/ecom/banner/health4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrilitiusmp4.mp4" },
      { id: 5, image: "/ecom/banner/health5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/spartan%20nutrition.mp4" },
      { id: 6, image: "/ecom/banner/health6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/velbiomqgazzreel%20formatmpmp4.mp4" },
    ]
  },

  {
    name: 'Food & Beverages',
    id: 'f&b',
    items: [
      { id: 1, image: "/ecom/banner/food1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4" },
      { id: 2, image: "/ecom/banner/food2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/gustohook1mp4.mp4" },
      { id: 3, image: "/ecom/banner/food3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/jagwonder.mp4" },
      { id: 4, image: "/ecom/banner/food4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/lemonji%20final.mp4" },
      { id: 5, image: "/ecom/banner/food5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/PLANTWISE%202.mp4" },
    ]
  },

  {
    name: 'Petcare',
    id: 'petcare',
    items: [
      { id: 1, image: "/ecom/banner/pet1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/hulk's%20diet%201.mp4" },
      { id: 2, image: "/ecom/banner/pet2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/medfly%20%202.mp4" },
    ]
  },
];


const rotations = [
  "rotate-[-1deg]",
  "rotate-[2deg] -translate-y-4",
  "rotate-[0.5deg]",
  "rotate-[-2deg] -translate-y-5",
  "rotate-[1deg]",
]
const UGCVideoCategories = () => {
  const [activeCategory, setActiveCategory] = useState(navLinks[0]);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div >
      {/* CATEGORY BUTTONS */}
      <div className="flex justify-between items-center rounded-full p-2  lg:bg-linear-to-b from-[#2b2c2e] to-[#030303]  max-w-fit mx-auto">
        <div className="flex items-center justify-center space-x-2 flex-wrap gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveCategory(link)}
              className={`px-3 3xl:px-5 py-2 rounded-full text-xs 3xl:text-sm max-lg:border border-black bg-black transition-colors duration-200 cursor-pointer text-white hover:bg-white hover:text-black
                ${activeCategory.id === link.id ? "bg-white !text-black font-medium" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* VIDEOS LIST */}
      <div className="flex justify-center items-center">
        <div className={`max-w-fit overflow-x-auto hide-scrollbar flex md:items-center  mt-12 md:mt-16`}>
          <div className="flex px-1 md:px-6 py-12 min-w-max -space-x-6">
            {activeCategory.items.map((item, index) => (
              <div
                key={item.id}
                className={`relative w-[220px] h-[380px] 3xl:w-65 3xl:h-100 bg-white p-2 pb-4
                ${rotations[index % rotations.length]} transition-transform duration-300`}
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 20px" }}
              >
                <Image
                  onClick={() => setActiveVideo(item.videoUrl)}
                  width={250}
                  height={400}
                  src={item.image}
                  alt="reel"
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-14 border-8 border-white text-white rounded-full flex items-center justify-center text-lg">
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/40 justify-center z-[100] flex items-center  p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-h-[90vh]  max-w-6xl aspect-[9/16]  bg-black rounded overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-1 right-1 z-20 bg-black/90 text-white rounded-full px-2 py-2 hover:scale-110 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <video
              src={activeVideo}
              className="w-full h-full object-contain transition-opacity duration-300 opacity-0"
              autoPlay
              controls
              playsInline
              onLoadedMetadata={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.classList.add("opacity-100");
              }}
              controlsList="nodownload"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UGCVideoCategories