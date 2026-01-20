// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import StylishButton from '@/common/RocketButton';

// const BusinessCard = ({
//   badge,
//   title,
//   subtitle,
//   pricing,
//   metrics,
//   description,
//   bgColor = 'bg-green-100',
//   accentColor = 'bg-green-600',
//   accentColor2,
//   textAccent = 'text-green-600',
//   rightImage,
//   growthMetric
// }) => {
//   return (
//     <div className={`${bgColor} rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto`}>
//       <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
//         {/* Left Section */}
//         <div className="flex-1 flex flex-col justify-between">
//           {/* Header */}
//           <div>
//             <p className="text-xs md:text-sm 2xl:text-[15px] 3xl:text-base text-[#0A211F] mb-3 md:mb-4 uppercase tracking-wide border-b pb-2">
//               {badge}
//             </p>

//             <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px] 3xl:text-6xl font-bold text-black mb-2">
//               {title}
//             </h1>
//             <p className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[54px] 3xl:text-[64px] text-black italic mb-6 md:mb-8 font-instrument">
//               {subtitle}
//             </p>

//             {/* Pricing */}
//             <div className="space-y-3 mb-6 pr-3">
//               <div className="flex flex-col  gap-3">
//               <div className="flex">
//                 <span className={`${accentColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}>
//                   from 
//                 </span>
//                 <div className="text-(--grayd) text-2xl 3xl:text-3xl">
//                   {pricing.original}
//                 </div>
//               </div>
//                <div className="flex">
//                  <span className={`${accentColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}>
//                   to
//                 </span>
//                 <div className=" text-2xl 3xl:text-3xl  text-(--grayd)">
//                   {pricing.current}
//                 </div>
//                </div>
//               </div>

//             </div>

//             {/* Description */}
//             <p className="text-sm md:text-base font-normal 3xl:text-lg text-(--grayd)  mb-6 md:mb-8 tracking-tight">
//               {description}
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
//            <StylishButton color={`${accentColor2}`} />
//           </div>

//           {/* Arrow with text */}
//           {/* <div className="mt-6 flex items-center gap-2 text-gray-600">
//             <ArrowRight className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />
//             <div className="text-sm md:text-base italic">
//               <div>Just in case if</div>
//               <div>you need us</div>
//             </div>
//           </div> */}
//         </div>

//         {/* Right Section - Dashboard Image */}
//         <div className="flex-1 lg:max-w-md">
//           <div className="relative w-full h-full xl:w-[400px] xl:h-[500px] 2xl:w-[450px] 2xl:h-[600px]">
//             {rightImage ? (
//               <Image
//               width={600}
//               height={500} 
//                 src={rightImage} 
//                 alt="Dashboard" 
//                 className="w-full h-full  3xl:w-full 3xl:h-full rounded-lg"
//               />
//             ) : (
//               <div className="bg-white rounded-xl shadow-2xl p-6 space-y-4">
//                 {/* Placeholder Dashboard */}
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="text-xs text-gray-500">Dashboard Preview</div>
//                   <div className="flex gap-2">
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
//                   </div>
//                 </div>

//                 <div className="text-center py-8">
//                   <div className="text-3xl font-bold text-gray-900 mb-2">
//                     {metrics.mainValue || '£505.48K'}
//                   </div>
//                   <div className="text-sm text-gray-500 mb-4">Total Revenue</div>
//                   <button className={`${accentColor} text-white px-4 py-2 rounded-lg text-sm`}>
//                     View Analytics
//                   </button>
//                 </div>

//                 {/* Chart placeholder */}
//                 <div className="h-32 flex items-end justify-between gap-1 px-2">
//                   {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95].map((height, i) => (
//                     <div 
//                       key={i} 
//                       className={`flex-1 ${accentColor} rounded-t`}
//                       style={{ height: `${height}%` }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Growth Metric Badge */}
//             {growthMetric && (
//               <div className={`absolute w-full -bottom-4  ${accentColor} text-white px-6 py-4 rounded-b-lg shadow-lg`}>
//                 <div className="text-2xl md:text-3xl font-bold">{growthMetric.value}</div>
//                 <div className="text-xs md:text-sm opacity-90">{growthMetric.label}</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessCard;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import StylishButton from '@/common/RocketButton';

const BusinessCard = ({
  badge,
  title,
  subtitle,
  pricing,
  metrics,
  description,
  bgColor = 'bg-green-100',
  accentColor = 'bg-green-600',
  accentColor2,
  textAccent = 'text-green-600',
  rightImage,
  growthMetric
}) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 md:p-8 lg:p-10 w-full h-full flex items-center`}>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between w-full max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Header */}
          <div>
            <p className="text-xs md:text-sm 2xl:text-[15px] 3xl:text-base text-[#0A211F] mb-3 md:mb-4 uppercase tracking-wide border-b pb-2">
              {badge}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px] 3xl:text-6xl font-bold text-black mb-2">
              {title}
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl 2xl:text-[54px] 3xl:text-[64px] text-black italic mb-6 md:mb-8 font-instrument">
              {subtitle}
            </p>

            {/* Pricing */}
            <div className="space-y-3 mb-6 pr-3">
              <div className="flex flex-col gap-3">
                <div className="flex">
                  <span className={`${accentColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}>
                    from
                  </span>
                  <div className="text-(--grayd) text-2xl 3xl:text-3xl">
                    {pricing.original}
                  </div>
                </div>
                <div className="flex">
                  <span className={`${accentColor} text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full`}>
                    to
                  </span>
                  <div className="text-2xl 3xl:text-3xl text-(--grayd)">
                    {pricing.current}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base font-normal 3xl:text-lg text-(--grayd) mb-6 md:mb-8 tracking-tight">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <StylishButton color={`${accentColor2}`} />
          </div>
        </div>

        {/* Right Section - Dashboard Image */}
        <div className="flex-1 lg:max-w-md">
          <div className="relative w-full h-full xl:w-[400px] xl:h-[500px] 2xl:w-[450px] 2xl:h-[600px]">
            {rightImage ? (
              <Image
                width={600}
                height={500}
                src={rightImage}
                alt="Dashboard"
                className="w-full h-full 3xl:w-full 3xl:h-full rounded-lg"
              />
            ) : (
              <div className="bg-white rounded-xl shadow-2xl p-6 space-y-4">
                {/* Placeholder Dashboard */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs text-gray-500">Dashboard Preview</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                <div className="text-center py-8">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metrics.mainValue || '£505.48K'}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Total Revenue</div>
                  <button className={`${accentColor} text-white px-4 py-2 rounded-lg text-sm`}>
                    View Analytics
                  </button>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 flex items-end justify-between gap-1 px-2">
                  {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${accentColor} rounded-t`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Growth Metric Badge */}
            {growthMetric && (
              <div className={`absolute w-full -bottom-4 ${accentColor} text-white px-6 py-4 rounded-b-lg shadow-lg`}>
                <div className="text-2xl md:text-3xl font-bold">{growthMetric.value}</div>
                <div className="text-xs md:text-sm opacity-90">{growthMetric.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;