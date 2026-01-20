'use client'
import BusinessCard from "./DashNumber";
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollStackCards = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // bussiness card number
const businesses = [
    {
      badge: "£505K MONTHLY REVENUE | 8.97K ORDERS",
      title: "ATLANTA MOCASSIN",
      subtitle: "Premium Footwear",
      pricing: {
        original: "£180K/Month (Stuck)",
        current: "£505K/Month (↑181%)"
      },
      metrics: {
        badge: "7.6",
        value: "↑181%"
      },
      description: "Previous Agency Said: 'You've Hit Your Ceiling.' We Proved Them Wrong in 6 Months.",
      bgColor: "bg-green-100",
      accentColor: "bg-green-600",
      accentColor2: "#6FAB42",
      textAccent: "text-green-600",
      rightImage:"/ecom/buss1.png",
      growthMetric: {
        value: "8.97K",
        label: "Orders"
      }
    },
    {
      badge: "₹3.52 LAKH IN DAILY SALES | 75 ORDERS",
      title: "URBAN PITARA",
      subtitle: "Indian Apparel Brand",
      pricing: {
        original: "₹70K/Month (Stuck)",
        current: "₹3.5L+/Day (Scaling)"
      },
      metrics: {
        badge: "9.4",
        value: "5x Revenue"
      },
      description: "Growth Through Creative Testing & Strategic Offers",
      bgColor: "bg-orange-100",
      accentColor: "bg-orange-600",
      accentColor2: "#CF7F3C",
      textAccent: "text-orange-600",
      rightImage:"/ecom/buss2.png",
      growthMetric: {
        value: "₹3.52 Lakh",
        label: "in Daily Sales"
      }
    },
    {
      badge: "₹7L+ BILL MONTHLY IN 6 MONTHS",
      title: "SMOKEY COCKTAIL",
      subtitle: "Beverage",
      pricing: {
        original: "25L/Month",
        current: "₹6.3Lm in 6 Months"
      },
      metrics: {
        badge: "9.4",
        value: "↑152% Revenue"
      },
      description: "Scaled Revenue AND Efficiency (Meta Can Do Both)",
      bgColor: "bg-red-100",
      accentColor: "bg-red-600",
      accentColor2: "#B30100",
      textAccent: "text-red-600",
      rightImage:"/ecom/buss3.png",
      growthMetric: {
        value: "+50%",
        label: "ROAS"
      }
    },
    {
      badge: "70.02K ORDERS | 3.88% CONVERSION RATE",
      title: "AUDIOART",
      subtitle: "Premium Audio Equipment",
      pricing: {
        original: "$54.3K",
        current: "$453.73K in 3 Months"
      },
      metrics: {
        badge: "9.3",
        value: "↑59% Revenue"
      },
      description: "High-End Audio Studio Without Discounting",
      bgColor: "bg-purple-100",
      accentColor: "bg-purple-600",
      accentColor2: "#9479E7",
      textAccent: "text-purple-600",
      rightImage:"/ecom/buss4.png",
      growthMetric: {
        value: "+111%",
        label: "Order Volume Growth"
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      if (containerTop > viewportHeight || containerTop + containerHeight < 0) {
        return;
      }

      const scrolled = -containerTop;
      const maxScroll = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(businesses.length - 1, (scrolled / maxScroll) * (businesses.length - 1)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [businesses.length]);

  return (
    <div className="bg-gray-50">
      {/* Title Section */}
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Success Stories</h1>
      </div>

      {/* Scroll Stack Section */}
      <div 
        ref={containerRef}
        style={{ height: `${businesses.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden p-4 md:p-6 lg:p-8 flex items-center justify-center">
          <div className="relative w-full h-full">
            {businesses.map((business, index) => {
              let translateY = 0;
              
              if (index === 0) {
                translateY = 0;
              } else {
                const cardProgress = scrollProgress - (index - 1);
                translateY = Math.max(0, (1 - cardProgress) * 100);
              }
              
              return (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateY(${translateY}%)`,
                    zIndex: index + 1
                  }}
                >
                  <BusinessCard {...business} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Ready to Scale?</h1>
      </div>
    </div>
  );
};

export default ScrollStackCards;