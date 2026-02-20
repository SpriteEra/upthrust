'use client';
import { useState, useEffect } from 'react';

const AnimatedWord = ({
  words,
  interval = 2000,
  className = '',
}) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
      {/* Current Word */}
      <span
        key={`current-${currentWord}`}
        className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideOut font-bold"
        style={{ color: words[currentWord].color }}
      >
        {words[currentWord].text}
      </span>

      {/* Next Word */}
      <span
        key={`next-${currentWord}`}
        className="absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideIn font-bold"
        style={{ color: words[(currentWord + 1) % words.length].color }}
      >
        {words[(currentWord + 1) % words.length].text}
      </span>
    </span>
  );
};

export default AnimatedWord;
