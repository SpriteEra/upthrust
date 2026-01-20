import BrandSlider from '@/common/BrandSlider'
import StylishButton from '@/common/RocketButton';
import ScaleButton from '@/common/ScaleButton'
import AskQuestionAndDisclaimer from '@/components/home/AskQuestionAndDisclaimer';
import ClientVideoTestimonial from '@/components/home/ClientVideoTestimonial';
import { ComparisonTable } from '@/components/home/ComparisonTable';
import FAQ from '@/components/home/Faq';
import { FullPricingSection } from '@/components/home/FullPricingSection';
import HeroVerticleSlider from '@/components/home/HeroVerticleSlider';
import HomeFooter from '@/components/home/HomeFooter';
import InteractiveCaseStudy from '@/components/home/InteractiveCaseStudy';
import OurApproach from '@/components/home/OurApproach';
import ScrollIndicator from '@/components/home/ScrollIndicator';
import ServicesAccordion from '@/components/home/ServicesAccordion';
import SuccessStories from '@/components/home/SuccessStories';
import UGCAdsPlaybook from '@/components/home/UGCAdsPlaybook';
import UGCVideoCategories from '@/components/home/UGCVideoCategories';
import WhatWeDid from '@/components/home/WhatWeDid';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhoWorkWithUs from '@/components/home/WhoWorkWithUs';
import Image from 'next/image';
import React from 'react'
const brands = [
  { name: "Harley", src: "/brands/harley.svg" },
  { name: "Loreal", src: "/brands/loreal.svg" },
  { name: "Zomato", src: "/brands/zomato.svg" },
  { name: "Dell", src: "/brands/dell.svg" },
  { name: "Neon Attack", src: "/brands/neon.svg" },
  { name: "ZipNow", src: "/brands/zipnow.svg" },
  { name: "Yummie", src: "/brands/yummie.svg" },
  { name: "Shoppetite", src: "/brands/shoppetite.svg" },
  { name: "OK Things", src: "/brands/ok.svg" },
];


const page = () => {
  return (
    <div className="min-h-screen">
      <div className='grid md:grid-cols-2 px-6 sm:px-10 md:px-20 min-h-screen bg-black text-white overflow-hidden max-h-full md:max-h-[120vh]'>
        <div className='pt-30 sm:pt-35 md:pt-50 flex flex-col'>

          <div className="flex -space-x-4 rtl:space-x-reverse max-md:justify-center">
            {
              [...Array(5)].map((_, index) => (
                <img key={index} className="size-13 xs:size-13 sm:size-13 3xl:size-14 border-2 border-white border-buffer rounded-full" src="/profile.jpg" alt="" />

              ))
            }
          </div>

          <div className="relative inline-block px-5 3xl:px-6 py-2 3xl:py-3 rounded-full text-sm 3xl:text-base text-white mt-6 mb-16 md:mb-3 bg-black/80 border border-white/10 max-md:mx-auto w-fit">
            <span className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
            D2C Marketing Agency
          </div>


          <h1 className="mb-2 text-white text-[42px] xs:text-5xl 2xl:text-[65px] 3xl:text-[96px] font-semibold max-sm:leading-tight max-md:pl-2">
            <span className="block sm:mb-2">
              <span className="italic font-instrument font-medium">Scale</span>
              <span className=""> To 45 Lakhs+</span>
            </span>
            <span className="block">
              Per Month
            </span>
          </h1>


          <div className="space-y-0 mb-16 text-lg xs:text-base 3xl:text-xl text-white leading-relaxed max-md:pl-2">
            <p>Ads that stop the scroll</p>
            <p>Pages that convert</p>
            <p>Growth that compounds</p>
          </div>

          <ScaleButton color="red" />

          <div className='mt-10 sm:mt-5 flex flex-col'>
            <p className='text-base 3xl:text-lg max-md:text-center'>Brands we've scaled</p>

            <div className="grid grid-cols-5 gap-y-5 xs:gap-y-10 gap-x-3 3xl:gap-x-8 items-center py-5 md:py-10 max-w-lg">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={'/brand3.png'}
                    alt={brand.name}
                    width={160}
                    height={60}
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right  */}
        <div className=''>
          <HeroVerticleSlider />
        </div>
      </div>

      <div className='my-20 flex flex-col '>
        <h2 className='text-center text-xl 3xl:text-2xl max-xs:max-w-[300px] mx-auto'><span className='font-semibold'>60+</span> D2C Brands Scaled | Avg <span className='font-semibold'>3.8x</span> ROAS | <br /><span className='font-semibold'>$50M+</span> Managed Profitably</h2>
        <BrandSlider />
      </div>

      <div className='my-20 flex flex-col'>
      </div>

      <div className='flex flex-col items-center'>

        <div className='flex flex-col items-center px-3'>
          <span className='text-sm md:text-xs 3xl:text-sm'>CREATIVES THAT ACTUALLY SELL</span>
          <div className='flex flex-col'>
            <div className='mt-5 flex flex-wrap gap-1 sm:gap-3 items-center justify-center'>

              <h3 className='text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>1 in 7 Shark Tank</h3>
              <div className="flex -space-x-4 rtl:space-x-reverse">
                {
                  [...Array(5)].map((_, index) => (
                    <img key={index} className="size-10 3xl:size-14 border-2 border-white border-buffer rounded-full" src="/profile.jpg" alt="" />

                  ))
                }
                <h6 className='xs:hidden'>
                  <span className=' capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic pl-5'>brands </span>
                  <span className='text-4xl md:text-6xl 3xl:text-7xl font-semibold capitalize ml-1'>{" "}Work with us</span>
                </h6>
              </div>
            </div>
            <h6 className='max-xs:hidden'>
              <span className=' capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>brands </span>
              <span className='text-4xl md:text-6xl 3xl:text-7xl font-semibold capitalize ml-1'>{" "}Work with us</span>
            </h6>

          </div>
          <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-10 text-center'>These ads averaged 8% CTR. Every brand below scaled past ₹2 crore. One team did it all</span>
        </div>
        <StylishButton color='red' />

      </div>

      <WhatWeDo />


      <div className='flex flex-col mt-25 xs:mt-70 mb-0 xs:mb-10 px-2'>
        <div className='flex flex-col items-center mb-10'>
          <span className='text-sm md:text-xs 3xl:text-sm uppercase'>problems we've solved</span>
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
              <h4 className='text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center capitalize'>Last Month
                <span className=' capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic font-normal'> D2C brands </span>
                Brand Scaled
              </h4>
            </div>
          </div>
          <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-12 text-center'>One founder called us. 'We just hit ₹3 crore.' That's what happens with the right ads</span>

        </div>
        <InteractiveCaseStudy />
      </div>

      <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2'>
        <div className='flex flex-col items-center mb-10'>
          <span className='text-sm md:text-xs 3xl:text-sm uppercase'>Our services</span>
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
              <h4 className='text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>How To Scale</h4>
              <span className=' capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>D2C brands</span>
            </div>
          </div>
          <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-10 text-center'>Scale to ₹2.5Cr+/month </span>

        </div>
        <ServicesAccordion />
      </div>

      <div>
        <div className='flex flex-col mt-25 xs:mt-50 mb-8 xs:mb-10 px-2'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-sm md:text-xs 3xl:text-sm uppercase'>A VIDEO GUIDE</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h4 className='text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>Scale with UGC ads:</h4>
                <span className='capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'> The Playbook</span>
              </div>
            </div>
          </div>
        </div>
        <UGCAdsPlaybook />
      </div>



      <div className='bg-black mt-25 xs:mt-50 mb-8 xs:mb-10 max-md:hidden'>
        <div className='flex flex-col pt-22 3xl:pt-25 text-white'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-xs 3xl:text-sm uppercase'>our process</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-3 items-center'>
                <h4 className='text-6xl 3xl:text-7xl font-semibold capitalize'>How we approach your:
                  <span className=' capitalize text-7xl 3xl:text-8xl font-instrument italic font-normal'> Ecom store growth</span> ?</h4>
              </div>
            </div>
            <span className='text-sm 3xl:text-lg mt-3 mb-10'>Join the top 0.1% of e-com brands using the proprietary process other agencies ignore </span>
          </div>
        </div>
        <OurApproach />
      </div>

      <div className='flex flex-col mt-25 xs:mt-50 mb-8 xs:mb-10 px-2'>
        <div className='flex flex-col pt-22 3xl:pt-25'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-xs 3xl:text-sm uppercase'>our work</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-3 items-center'>
                <h4 className='text-6xl 3xl:text-7xl font-semibold capitalize'>50+ Brands. 200+ UGC Videos. <br />
                </h4>
              </div>
              <span className=' capitalize text-7xl 3xl:text-8xl font-instrument italic font-normal text-center'> Watch Them</span>
            </div>
            <span className='text-sm 3xl:text-lg mt-3 mb-10'>Average CTA: 8.2% </span>
          </div>
        </div>
        <UGCVideoCategories />
      </div>

      <SuccessStories />



      <div>
        <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-sm md:text-xs 3xl:text-sm uppercase'>CASE STUDIES</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center flex-col'>
                <h5 className='capitalize text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>
                  The
                  <span className='capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic font-normal'>{" "}dashboards. </span>
                </h5>
                <h5 className='capitalize text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>
                  The numbers. What we did.
                </h5>
              </div>
              <span className='text-[15px] sm:text-sm 3xl:text-lg mt-5 mb-10 text-center'>We Don't Just Talk—We Show</span>
            </div>
          </div>
        </div>

        <WhatWeDid />
      </div>


      {/* comparision table  */}
      <div>
        <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-sm md:text-xs 3xl:text-sm uppercase'>UPTHRUST vs Other Agencies</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h5 className='capitalize text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>
                  What you get
                  <span className='capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>{" "}Here</span>
                </h5>
              </div>
              <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-10 text-center'>Why Should You Hire Us?</span>
            </div>
          </div>
        </div>

        <ComparisonTable />
      </div>

      {/* pricing table  */}
      <div>
        <div className='flex flex-col mt-25 xs:mt-50 mb-0 xs:mb-10 px-2'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-sm md:text-xs 3xl:text-sm uppercase'>PRICING</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h5 className='capitalize text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>
                  What It
                  <span className='capitalize text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>{" "}Costs</span>
                </h5>
              </div>
              <span className='text-lg md:text-sm 3xl:text-lg mt-5 xs:mt-8 mb-8 text-center capitalize '>Brands we've scaled</span>
            </div>

            <div className="w-full flex items-center justify-center max-w-6xl px-4">
              <div className="flex items-center gap-12 md:gap-20 overflow-x-auto whitespace-nowrap hide-scrollbar">
                {brands.slice(0, 6).map((logo) => (
                  <div
                    key={logo.name}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src="/brand2.png"
                      alt={logo.name}
                      width={200}
                      height={100}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        <FullPricingSection />
      </div>

      <ScrollIndicator />


      <div>
        <div className='flex flex-col mt-25 xs:mt-30 mb-0 xs:mb-10 px-2'>
          <div className='flex flex-col items-center mb-10'>
            <span className='text-sm md:text-xs 3xl:text-sm uppercase'>what they say</span>
            <div className='flex flex-col'>
              <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
                <h5 className='capitalize '>
                  <span className='text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>2-4X {" "}</span>
                  <span className='text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>In 6-12 Months</span>
                </h5>
              </div>
              <span className='text-[15px] sm:text-sm 3xl:text-lg mt-2 mb-10 text-center'>In their words</span>
            </div>
          </div>
        </div>

        <ClientVideoTestimonial />
      </div>

      <div>
        <div className='flex flex-col mt-25 xs:mt-50 mb-10 px-2 items-center'>
          <span className='text-sm md:text-xs 3xl:text-sm uppercase'>Got questions? FAQ's</span>
          <div className='flex flex-col'>
            <div className='mt-5 flex gap-1 sm:gap-3 flex-wrap items-center justify-center'>
              <h5 className='capitalize text-4xl md:text-6xl 3xl:text-7xl font-semibold text-center'>
                <span className=''>Everything You Need To Know</span>
                <p className='text-center mt-2 md:mt-4'>Before
                  <span className='text-4xl md:text-7xl 3xl:text-8xl font-instrument italic'>Working With Us</span>
                </p>
              </h5>
            </div>
          </div>
        </div>

        <FAQ />
      </div>

      <AskQuestionAndDisclaimer />
      <HomeFooter />

    </div>
  )
}

export default page