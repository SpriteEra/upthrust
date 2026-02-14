import Image from 'next/image';
import React from 'react';

const CommonHeading = ({
    text = '',
    children,
    color,
    backgroundColor,
    textColor,
    image,
    className = ''
}) => {
    const headingStyle = {
        ...(color && { color }),
        ...(backgroundColor && { backgroundColor }),
        ...(textColor && { color: textColor }),
    };

    return (
        <h2
            className={`
        font-semibold
        
        /* Mobile (default) - as specified */
        text-[36px]
        leading-[130%]
        tracking-[-0.02em]
        
        /* Large screens (lg) - 1024px */
        lg:text-[48px]
        lg:leading-[130%]
        lg:tracking-[-0.03em]
        
        /* Extra Large (xl) - 1280px */
        xl:text-[56px]
        xl:leading-[130%]
        xl:tracking-[-0.035em]
        
        /* 2XL - 1536px */
        2xl:text-[64px]
        2xl:leading-[130%]
        2xl:tracking-[-0.037em]
        
        /* 3XL and above - as specified */
        3xl:text-[72px]
        3xl:leading-[130%]
        3xl:tracking-[-0.04em]
        
        ${className}
      `}
            style={headingStyle}
        >
            {image && (
                <Image
                    height={70}
                    width={70}
                    src={image}
                    alt=""
                    className="inline-block align-middle mr-2 h-[1em] w-auto"
                />
            )}
            {text || children}
        </h2>
    );
};

export default CommonHeading;

// With text prop
{/* <CommonHeading text="Your Heading" />

// With text color
<CommonHeading 
  text="Red Heading" 
  textColor="#EF4444" 
/>

// With background color
<CommonHeading 
  text="Blue Background" 
  backgroundColor="#DBEAFE"
  textColor="#1E40AF"
/>

// With image
<CommonHeading 
  text="With Icon" 
  image="https://example.com/icon.png"
/>

// All props combined
<CommonHeading 
  text="Complete Example"
  textColor="#FFFFFF"
  backgroundColor="#10B981"
  image="/rocket.png"
  className="text-center p-6 rounded-xl"
/> */}