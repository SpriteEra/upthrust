"use client";
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  {
    name: 'Clothing & Footwear',
    id: 'c&f',
    alt: "Influencer-style product demo for D2C fashion brand",
    items: [
      { id: 1, image: "/ecom/ugcs/cloth/cloth1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MCOverallsmp4.mp4" },
      { id: 2, image: "/ecom/ugcs/cloth/cloth2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/MILOOUTFITCHECK02FINALmp4.mp4" },
      { id: 3, image: "/ecom/ugcs/cloth/cloth3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/mudbondmp4.mp4" },
      { id: 4, image: "/ecom/ugcs/cloth/cloth4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/NEVA11mp4.mp4" },
      { id: 5, image: "/ecom/ugcs/cloth/cloth5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/OliveclothingCSmp4.mp4" },
      { id: 6, image: "/ecom/ugcs/cloth/cloth6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/urbanpitarareel5mp4.mp4" },
      { id: 7, image: "/ecom/ugcs/cloth/cloth7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/yummiecasestudiesmp4.mp4" },
      { id: 8, image: "/ecom/ugcs/cloth/cloth8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Clothing%20%26%20Footwear/zaydnslidesmp4.mp4" },
    ]
  },

  {
    name: 'Lifestyle',
    id: 'lifestyle',
    alt: "Lifestyle product showcase video for ecommerce brand",
    items: [
      { id: 1, image: "/ecom/ugcs/lifestyle/lifestyle1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/air_stream_pillow.mp4" },
      { id: 2, image: "/ecom/ugcs/lifestyle/lifestyle2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/AIRPODSNEW70%25.mp4" },
      { id: 3, image: "/ecom/ugcs/lifestyle/lifestyle3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/aviascasserolesenglishmp4.mp4" },
      { id: 4, image: "/ecom/ugcs/lifestyle/lifestyle4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/GEMMACOOKWAREmp4.mp4" },
      { id: 5, image: "/ecom/ugcs/lifestyle/lifestyle5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/NEONATTACKmp4.mp4" },
      { id: 6, image: "/ecom/ugcs/lifestyle/lifestyle6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/peppy.mp4" },
      { id: 7, image: "/ecom/ugcs/lifestyle/lifestyle7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/Phonecover.mp4" },
      { id: 8, image: "/ecom/ugcs/lifestyle/lifestyle8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/PowerBankmp4.mp4" },
      { id: 9, image: "/ecom/ugcs/lifestyle/lifestyle9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/seetramp4.mp4" },
      { id: 10, image: "/ecom/ugcs/lifestyle/lifestyle10.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/Lifestyle/soundart.mp4" },
    ]
  },

  {
    name: 'Beauty & Skincare',
    id: 'b&s',
    alt: "User-generated content video reviewing ecommerce skincare product",
    items: [
      { id: 1, image: "/ecom/ugcs/beauty/beauty1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/aramorefinalmp4.mp4" },
      { id: 2, image: "/ecom/ugcs/beauty/beauty2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/Cottsberryfinalmp4.mp4" },
      { id: 3, image: "/ecom/ugcs/beauty/beauty3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/KIWIBYMUSSKANmp4.mp4" },
      { id: 4, image: "/ecom/ugcs/beauty/beauty4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/koparibeautycsmp4.mp4" },
      { id: 5, image: "/ecom/ugcs/beauty/beauty5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lashsupplycs1mp4.mp4" },
      { id: 6, image: "/ecom/ugcs/beauty/beauty6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/lorealcsmp4.mp4" },
      { id: 7, image: "/ecom/ugcs/beauty/beauty7.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/MAISKNNmp4.mp4" },
      { id: 8, image: "/ecom/ugcs/beauty/beauty8.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/philosophy_reel.mp4" },
      { id: 9, image: "/ecom/ugcs/beauty/beauty9.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Beauty%20%26%20Skincare/REAPSERUMmp4.mp4" },
    ]
  },

  {
    name: 'Healthcare & Supplements',
    id: 'h&s',
    alt: "UGC-style testimonial promoting D2C fitness product",
    items: [
      { id: 1, image: "/ecom/ugcs/health/health1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/bibomp4.mp4" },
      { id: 2, image: "/ecom/ugcs/health/health2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/ezcurediabetesmp4.mp4" },
      { id: 3, image: "/ecom/ugcs/health/health3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrideccmp4.mp4" },
      { id: 4, image: "/ecom/ugcs/health/health4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/nutrilitiusmp4.mp4" },
      { id: 5, image: "/ecom/ugcs/health/health5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/spartan%20nutrition.mp4" },
      { id: 6, image: "/ecom/ugcs/health/health6.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Healthcare%20%26%20Supplements/velbiomqgazzreel%20formatmpmp4.mp4" },
    ]
  },

  {
    name: 'Food & Beverages',
    id: 'f&b',
    alt: "Ecommerce product usage demonstration video",
    items: [
      { id: 1, image: "/ecom/ugcs/foods/food1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/BEINGBANIYAmp4.mp4" },
      { id: 2, image: "/ecom/ugcs/foods/food2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/gustohook1mp4.mp4" },
      { id: 3, image: "/ecom/ugcs/foods/food3.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/jagwonder.mp4" },
      { id: 4, image: "/ecom/ugcs/foods/food4.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/lemonji%20final.mp4" },
      { id: 5, image: "/ecom/ugcs/foods/food5.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/F%26B/PLANTWISE%202.mp4" },
    ]
  },

  {
    name: 'Petcare',
    id: 'petcare',
    alt: "Product feature walkthrough video used in retargeting ad",
    items: [
      { id: 1, image: "/ecom/ugcs/pets/pets1.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/hulk's%20diet%201.mp4" },
      { id: 2, image: "/ecom/ugcs/pets/pets2.webp", videoUrl: "https://cdn.upthrust.agency/Ecom%20page%20assets/UGC's/Petcare/medfly%20%202.mp4" },
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
  const [playingVideo, setPlayingVideo] = useState(null);
  const [videoStates, setVideoStates] = useState({});
  const videoRefs = useRef({});

  const handleCardClick = (itemId, videoUrl) => {
    const currentState = videoStates[itemId];

    // If this video is already playing, pause it
    if (playingVideo === itemId && currentState?.isReady) {
      const video = videoRefs.current[itemId];
      if (video) {
        if (currentState.isPlaying) {
          video.pause();
          setVideoStates(prev => ({ ...prev, [itemId]: { ...prev[itemId], isPlaying: false } }));
        } else {
          video.play();
          setVideoStates(prev => ({ ...prev, [itemId]: { ...prev[itemId], isPlaying: true } }));
        }
      }
      return;
    }

    // Stop any other playing video
    if (playingVideo && playingVideo !== itemId) {
      const prevVideo = videoRefs.current[playingVideo];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
      setVideoStates(prev => ({ ...prev, [playingVideo]: { isPlaying: false, isReady: false } }));
    }

    // Start loading new video
    setPlayingVideo(itemId);
    setVideoStates(prev => ({ ...prev, [itemId]: { isPlaying: false, isReady: false, isLoading: true } }));
  };

  const handleVideoLoaded = (itemId) => {
    setVideoStates(prev => ({ ...prev, [itemId]: { isPlaying: true, isReady: true, isLoading: false } }));
  };

  // Reset when category changes
  useEffect(() => {
    if (playingVideo) {
      const video = videoRefs.current[playingVideo];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    setPlayingVideo(null);
    setVideoStates({});
  }, [activeCategory]);

  return (
    <div>
      {/* CATEGORY BUTTONS */}
      <div className="flex justify-between items-center rounded-full lg:p-2 3xl:py-2.25 3xl:px-2.5 lg:bg-linear-to-b from-[#2b2c2e] to-[#030303] max-w-fit mx-auto">
        <div className="flex items-center justify-center space-x-2 flex-wrap gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveCategory(link)}
              className={`px-4 3xl:px-5.75 py-2 3xl:py-2.75 rounded-full text-sm xl:text-xs 3xl:text-sm border border-[#17118]/12 lg:border-black/12 bg-black transition-colors duration-200 cursor-pointer text-white hover:bg-white hover:text-black
                ${activeCategory.id === link.id ? "bg-white !text-black font-medium" : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* VIDEOS LIST */}
      <div className="flex justify-center items-center">
        <div className={`max-w-fit overflow-x-auto hide-scrollbar flex md:items-center mt-6 lg:mt-16`}>
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex px-1 md:px-6 py-12 min-w-max -space-x-6"
          >
            {activeCategory.items.map((item, index) => {
              const isActive = playingVideo === item.id;
              const videoState = videoStates[item.id] || {};
              const { isLoading, isReady, isPlaying } = videoState;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleCardClick(item.id, item.videoUrl)}
                  className={`relative w-[220px] h-[380px] 3xl:w-85 3xl:h-150 bg-white p-2 3xl:p-4 pb-4 3xl:pb-7 cursor-pointer
                  ${rotations[index % rotations.length]} transition-all duration-300
                  ${isActive ? 'z-50 rotate-0! scale-105' : 'z-0'}`}
                  style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                >
                  {/* Image */}
                  <Image
                    width={250}
                    height={400}
                    src={item.image}
                    alt={activeCategory.alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isReady ? 'opacity-0' : 'opacity-100'
                      }`}
                  />

                  {/* Video */}
                  {isActive && (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[item.id] = el;
                      }}
                      src={item.videoUrl}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 p-2 3xl:p-4 pb-4 3xl:pb-7 ${isReady ? 'opacity-100' : 'opacity-0'
                        }`}
                      autoPlay
                      loop
                      playsInline
                      onLoadedData={() => handleVideoLoaded(item.id)}
                    />
                  )}

                  {/* Control Buttons - Simple Fade In/Out */}
                  <div className="absolute inset-0 pointer-events-none">
                    <AnimatePresence mode="wait">
                      {/* Initial Play Button - Shows when not active */}
                      {!isActive && (
                        <motion.div
                          key="initial-play"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="size-14 3xl:size-20 border-8 3xl:border-10 border-white text-white rounded-full flex items-center justify-center text-lg 3xl:text-4xl">
                            ▶
                          </div>
                        </motion.div>
                      )}

                      {/* Loader - Shows when loading */}
                      {isLoading && !isReady && (
                        <motion.div
                          key="loader"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Loader2 className="size-14 3xl:size-20 text-white animate-spin" />
                        </motion.div>
                      )}

                      {/* Play Button (center) - Shows when paused */}
                      {isReady && !isPlaying && (
                        <motion.div
                          key="play-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                        >
                          <div className="size-16 3xl:size-24 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center hover:bg-white shadow-lg">
                            <svg
                              className="w-7 h-7 3xl:w-12 3xl:h-12 ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Pause Button (bottom-left) - Shows when playing */}
                    {isReady && isPlaying && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-2 left-2 pointer-events-auto"
                      >
                        <div className="bg-white/90 backdrop-blur-sm text-black rounded-full p-2.5 3xl:p-3.5 hover:bg-white shadow-lg">
                          <svg
                            className="w-4 h-4 3xl:w-6 3xl:h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default UGCVideoCategories