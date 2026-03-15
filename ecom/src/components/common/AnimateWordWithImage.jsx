'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const AnimatedWordWithImage = ({
    words = [],
    images = [],
    interval = 2000,
    className = '',
    textCss = '',
}) => {

    // combine both
    const items = images.map((img, i) => ({
        ...img,
        text: words[i]?.text,
        color: words[i]?.color
    }));

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!items.length) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [items.length, interval]);

    const defaultTextCss = 'font-bold';

    const renderItem = (item) => {
        return (
            <span className="flex items-center gap-2">
                {item.src && (
                    <div className={item.wrapperClass}>
                        <Image
                            src={item.src}
                            alt={item.alt || "animated-image"}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}
                {item.text && (
                    <span style={{ color: item.color }}>
                        {item.text}
                    </span>
                )}
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

export default AnimatedWordWithImage;