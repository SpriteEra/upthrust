'use client'
import React, { useState, useRef } from 'react';

const InteractiveCaseStudy = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [blinkIndex, setBlinkIndex] = useState(null);
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 0,
      title: "₹45 Lakh Sales from ₹15 Lakh Spend in December",
      description: "How we helped dashboard how we scaled to 3X revenue maintaining 2.7x ROAS through creative testing.",
      videoUrl: "https://www.loom.com/embed/2dfe3bf3c957415fa6f9efa331d2045c?autoplay=1&hideEmbedTopBar=true"
    },
    {
      id: 1,
      title: "10-15% of Monthly Revenue from Email & WhatsApp Alone",
      description: "See how we built retention flows generating ₹5+ lakh monthly through abandoned carts, welcome sequences, and customer journeys.",
      videoUrl: "https://www.loom.com/embed/2dfe3bf3c957415fa6f9efa331d2045c?autoplay=1&hideEmbedTopBar=true"
    },
    {
      id: 2,
      title: "From ₹42K to ₹6.37 Lakh Monthly in 5 Months",
      description: "Watch how we took a stuck edible oils brand from 0.85x ROAS to 3.5x while scaling spend 4x (some campaigns hit 5.25x).",
      videoUrl: "https://www.loom.com/embed/45c6c8d781cf41158de84dcd1e5ae5f8?autoplay=1&hideEmbedTopBar=true"
    },
    {
      id: 3,
      title: "Why Your Checkout Is Costing You 30-40% of Sales  ",
      description: "Live CRO audit: See how broken checkout flows, poor payment positioning, and COD defaults kill conversions and create fake orders.",
      videoUrl: "https://www.loom.com/embed/597fedd5fe814c9aafe82cdbdf509ea1?autoplay=1&hideEmbedTopBar=true"
    }
  ];

  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
    setBlinkIndex(null);
  };

  const handleSectionClick = (e, index) => {
    toggleSection(index);
  };

  return (
    <div className="w-full   p-4 md:p-6  lg:p-8">
      <div className="  bg-black/6 p-6 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Section*/}
          <div className="w-full h-full lg:w-2/6 space-y-3">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`
                  rounded-2xl overflow-hidden transition-all duration-300 border relative
                  ${activeSection === index 
                    ? 'bg-black text-white shadow-2xl border-black' 
                    : 'bg-white text-gray-900 hover:shadow-lg border-gray-200'
                  }
                  ${blinkIndex === index ? 'animate-pulse' : ''}
                `}
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={(e) => handleSectionClick(e, index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`
                      text-lg 2xl:text-xl font-semibold pr-4 flex-1
                      ${activeSection === index ? 'text-white' : 'text-black/60'}
                    `}>
                      {section.title}
                    </h3>
                  </div>

                  {/* Dropdown Content - Animated */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${activeSection === index 
                        ? 'max-h-96 opacity-100 mt-4' 
                        : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    <div className="pr-10">
                      <p className={`text-sm md:text-base leading-relaxed ${
                        activeSection === index ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Video */}
          <div className="w-full h-full lg:w-4/6">
            <div className="sticky top-6">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500">
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    key={activeSection >= 0 ? activeSection : 0}
                    src={sections[activeSection >= 0 ? activeSection : 0]?.videoUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    muted
                    allowFullScreen
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCaseStudy;