import Image from 'next/image';
import React from 'react';

const images = [
  { img: '/ecom/curves/curve1.webp', alt: 'Curve 1' },
  { img: '/ecom/curves/curve2.webp', alt: 'Curve 2' },
  { img: '/ecom/curves/curve3.webp', alt: 'Curve 3' },
  { img: '/ecom/curves/curve4.webp', alt: 'Curve 4' },
  { img: '/ecom/curves/curve5.webp', alt: 'Curve 5' },
  { img: '/ecom/curves/curve6.webp', alt: 'Curve 6' },
]
export const Curve1 = ({
  lines = [],
  curvePosition = "end",
  curveFlipHorizontal = false,
  curveFlipVertical = false,
  imageClassName = "-right-2 top-5 w-2 h-full ",
  tiltAngle = -5,
  textClassName = "",
  highlightClassName = "",
  className = '',
  imageIndex = 0,
}) => {
  const renderParts = () => {
    return lines?.map((line, index) => (
      <p key={index} className='flex gap-x-1 3xl:gap-x-1.5 text-center justify-center'>
        {
          line?.parts?.map((part, index) => {
            if (part.type === 'highlight') {
              return (
                <span
                  className={`${highlightClassName} text-lg 3xl:text-[22px] p-0.5 3xl:p-1 px-3 3xl:px-4 rounded-full inline-block bg-[#FF4500] text-white whitespace-nowrap text-center`}
                  key={index}

                >
                  {part.text}
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  className={`${textClassName} text-black text-lg 3xl:text-[22px] text-center`}

                >
                  {part.text}
                </span>
              );
            }
          })
        }
      </p>
    ))
  };

  return (
    <div
      className={`inline-flex items-center gap-3 font-hanzi max-lg:hidden ${className}`}
      style={{
        transform: `rotate(${tiltAngle}deg)`,
        transformOrigin: 'left center'
      }}
    >
      {curvePosition === 'start' && (
        <Image src={images[imageIndex].img} width={100} height={100} className="ml-2 w-full h-full" alt={images[imageIndex].alt} />
      )}

      <div className="flex items-center gap-0.5 flex-wrap font-hanzi justify-center relative flex-col">
        {renderParts()}
        {curvePosition === 'end' && (
          <Image src={images[imageIndex].img} width={70} height={70} className={`object-contain absolute w-7 h-full  ${imageClassName}`} alt={images[imageIndex].alt} />
        )}
      </div>

    </div>
  );
};