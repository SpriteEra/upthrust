import Image from 'next/image';
import React from 'react';

const images = [
  { img: '/ecom/curves/curve1.webp', alt: 'Curve 1' },
  { img: '/ecom/curves/curve2.webp', alt: 'Curve 2' },
  { img: '/ecom/curves/curve3.webp', alt: 'Curve 3' },
  { img: '/ecom/curves/curve4.webp', alt: 'Curve 4' },
  { img: '/ecom/curves/curve5.webp', alt: 'Curve 5' },
  { img: '/ecom/curves/curve6.webp', alt: 'Curve 6' },
  { img: '/ecom/curves/curve7.webp', alt: 'Curve 7' },
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
  hiddenInSmall = true
}) => {
  const renderParts = () => {
    return lines?.map((line, index) => (
      <div key={index} className='flex gap-x-1.5 items-center justify-center'>
        {
          line?.parts?.map((part, index) => {
            if (part.type === 'highlight') {
              return (
                <span
                  className={`${highlightClassName} text-[22px] max-lg:-pt-0.5 max-lg:leading-5.5 max-lg:pb-1 px-3 lg:text-base 3xl:text-[22px] lg:px-2.5 lg:pt-0 lg:pb-px 3xl:pb-1.5 3xl:pt-0.5 3xl:px-3.5 rounded-full inline-block text-white whitespace-nowrap text-center 3xl:leading-[26.58px] tracking-[-0.02em] `}
                  key={index}
                  style={{
                    backgroundColor: part.bgColor ? part.bgColor : "#FF4500"
                  }}
                >
                  {part.text}
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  className={`${textClassName} inline-block text-black text-2xl lg:text-lg 3xl:text-2xl 3xl:leading-9 text-center tracking-[-0.02em]`}
                >
                  {part.text}
                </span>
              );
            }
          })
        }
      </div>
    ))
  };

  return (
    <div
      className={`inline-flex items-center gap-3 font-caveat ${hiddenInSmall ? "max-lg:hidden" : ""} ${className}`}
      style={{
        transform: `rotate(${tiltAngle}deg)`,
        transformOrigin: 'left center'
      }}
    >
      {curvePosition === 'start' && (
        <Image src={images[imageIndex].img} width={100} height={100} className="ml-2 w-full h-full" alt={images[imageIndex].alt} />
      )}

      <div className="flex items-center gap-0.5 flex-wrap font-caveat justify-center relative flex-col">
        {renderParts()}
        {curvePosition === 'end' && (
          <Image src={images[imageIndex].img} width={70} height={70} className={`object-contain absolute w-7 h-full  ${imageClassName}`} alt={images[imageIndex].alt} />
        )}
      </div>

    </div>
  );
};