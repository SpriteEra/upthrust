import BrandSlider from '@/common/BrandSlider'
import ScaleButton from '@/common/ScaleButton'
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
      <div className='flex grid-cols-2 px-20 min-h-screen bg-black text-white'>
        <div className='pt-50'>

          <div class="flex -space-x-4 rtl:space-x-reverse">
            {
              [...Array(5)].map((_, index) => (
                <img class="size-12 3xl:size-14 border-2 border-white border-buffer rounded-full" src="/profile.jpg" alt="" />

              ))
            }
          </div>

          <div className="relative inline-block px-4 3xl:px-6 py-2 3xl:py-3 rounded-full text-sm 3xl:text-base text-white mt-6 mb-3 bg-black/80 border border-white/10">
            <span className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
            D2C Marketing Agency
          </div>


          <h1 className="mb-2 text-white text-5xl 2xl:text-[65px] 3xl:text-[96px] font-semibold">
            <span className="block mb-2">
              <span className="italic font-instrument font-medium">Scale</span>
              <span className=""> To 45 Lakhs+</span>
            </span>
            <span className="block">
              Per Month
            </span>
          </h1>


          <div className="space-y-0 mb-16 text-base 3xl:text-xl text-white leading-relaxed">
            <p>Ads that stop the scroll</p>
            <p>Pages that convert</p>
            <p>Growth that compounds</p>
          </div>

          <ScaleButton color="red" />

          <div className='mt-5 flex flex-col'>
            <p className='text-base 3xl:text-lg'>Brands we've scaled</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 items-center py-10">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  whileHover={{ scale: 1.08, opacity: 1 }}
                  initial={{ opacity: 0.55 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={'/brand3.png'}
                    alt={brand.name}
                    width={160}
                    height={60}
                    className="h-4 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right  */}
        <div>

        </div>
      </div>
      <BrandSlider />
    </div>
  )
}

export default page