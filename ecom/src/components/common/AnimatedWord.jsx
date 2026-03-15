'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const AnimatedWord = ({
  words = [],
  images = [],
  interval = 2000,
  className = '',
  textCss = '',
}) => {
  const items = words.length ? words : images;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const defaultTextCss = 'font-bold';

  console.log(textCss)
  const renderItem = (item) => {
    // image mode
    if (item.src) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={item.src}
            alt={item.alt || 'animated-image'}
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }

    // text mode
    return (
      <span style={{ color: item.color }}>
        {item.text}
      </span>
    );
  };

  if (!items.length) return null;

  return (
    <span
      className={`inline-block relative overflow-hidden align-bottom ${className}`}
    >
      {/* Current */}
      <span
        key={`current-${currentIndex}`}
        className={`absolute left-0 bottom-0 w-full h-full flex items-center justify-center whitespace-nowrap animate-slideOut ${defaultTextCss} ${textCss}`}
      >
        {renderItem(items[currentIndex])}
      </span>

      {/* Next */}
      <span
        key={`next-${currentIndex}`}
        className={`absolute left-0 bottom-0 w-full h-full flex items-center justify-center whitespace-nowrap animate-slideIn ${defaultTextCss} ${textCss}`}
      >
        {renderItem(items[(currentIndex + 1) % items.length])}
      </span>
    </span>
  );
};

export default AnimatedWord;