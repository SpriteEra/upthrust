// 'use client';
// import { useState, useEffect } from 'react';

// const AnimatedWord = ({
//   words,
//   interval = 2000,
//   className = '',
// }) => {
//   const [currentWord, setCurrentWord] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [words.length, interval]);

//   return (
//     <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
//       {/* Current Word */}
//       <span
//         key={`current-${currentWord}`}
//         className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideOut font-bold"
//         style={{ color: words[currentWord].color }}
//       >
//         {words[currentWord].text}
//       </span>

//       {/* Next Word */}
//       <span
//         key={`next-${currentWord}`}
//         className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideIn font-bold"
//         style={{ color: words[(currentWord + 1) % words.length].color }}
//       >
//         {words[(currentWord + 1) % words.length].text}
//       </span>
//     </span>
//   );
// };

// export default AnimatedWord;


'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AnimatedWord = ({
  words = [],
  images = [],
  interval = 2000,
  className = '',
}) => {
  const items = words.length ? words : images; // words priority

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) return null;

  const renderContent = (item) => {
    // If images mode
    if (images.length && item.src) {
      return (
        <Image
          src={item.src}
          alt={item.alt || 'animated-image'}
          width={item.width || 120}
          height={item.height || 40}
          className="object-contain inline-block"
        />
      );
    }

    // Words mode (default)
    return (
      <span style={{ color: item.color }}>
        {item.text}
      </span>
    );
  };

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>

      {/* Current */}
      <span
        key={`current-${currentIndex}`}
        className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideOut font-semibold flex items-center"
      >
        {renderContent(items[currentIndex])}
      </span>

      {/* Next */}
      <span
        key={`next-${currentIndex}`}
        className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideIn font-semibold flex items-center"
      >
        {renderContent(items[(currentIndex + 1) % items.length])}
      </span>

    </span>
  );
};

export default AnimatedWord;