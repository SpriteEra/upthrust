"use client"
import React, { useState, useRef, useEffect } from "react";

const Tooltip = ({
    content,
    children,
    position = "top",
    disabled = false,
    className = "",
    delay = 300,
    allowHover = true,
    multiline = false,
    maxWidth = "max-w-xs",
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleMouseEnter = () => {
        clearTimer();
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        if (allowHover) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, delay);
        } else {
            setIsVisible(false);
        }
    };

    const handleTooltipMouseEnter = () => {
        if (allowHover) clearTimer();
    };

    const handleTooltipMouseLeave = () => {
        if (allowHover) setIsVisible(false);
    };

    useEffect(() => {
        return () => clearTimer();
    }, []);

    if (disabled || !content) {
        return <>{children}</>;
    }

    const positionClasses = {
        top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
        bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
        left: "right-full mr-2 top-1/2 -translate-y-1/2",
        right: "left-full ml-2 top-1/2 -translate-y-1/2",
    };

    const arrowClasses = {
        top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800",
        bottom:
            "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800",
        left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800",
        right:
            "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800",
    };

    const tooltipClasses = multiline
        ? `${maxWidth} whitespace-normal break-words`
        : "whitespace-nowrap";

    return (
        <div
            className={`relative inline-block ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            {isVisible && (
                <div
                    className={`absolute z-50 px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-lg shadow-lg select-text ${tooltipClasses} ${positionClasses[position]}`}
                    role="tooltip"
                    onMouseEnter={handleTooltipMouseEnter}
                    onMouseLeave={handleTooltipMouseLeave}
                >
                    <span>{content}</span>

                    <div
                        className={`absolute w-0 h-0 border-4 pointer-events-none ${arrowClasses[position]}`}
                    />
                </div>
            )}
        </div>
    );
};

export default Tooltip;
