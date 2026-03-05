'use client';
import { useState, useEffect } from 'react';

const AnimatedWord = ({
  words,
  interval = 2000,
  className = '',
  textCss = '', // 👈 custom text css prop
}) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // ✅ Default text styles (the ones written for text)
  const defaultTextCss = 'font-bold';

  return (
    <span
      className={`inline-block relative overflow-hidden align-bottom ${className}`}
    >
      {/* Current Word */}
      <span
        key={`current-${currentWord}`}
        className={`absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideOut ${defaultTextCss} ${textCss}`}
        style={{ color: words[currentWord].color }}
      >
        {words[currentWord].text}
      </span>

      {/* Next Word */}
      <span
        key={`next-${currentWord}`}
        className={`absolute left-0 bottom-0 w-full whitespace-nowrap animate-slideIn ${defaultTextCss} ${textCss}`}
        style={{ color: words[(currentWord + 1) % words.length].color }}
      >
        {words[(currentWord + 1) % words.length].text}
      </span>
    </span>
  );
};

export default AnimatedWord;