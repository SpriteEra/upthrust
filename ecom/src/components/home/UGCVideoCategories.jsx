import React from 'react'
const navLinks = [
  { name: 'Clothing & Footweear', id: "c&f", href: '#about' },
  { name: 'Lifestyle', id: "leftstyle", href: '#services' },
  { name: 'Beauty & Skincard', id: 'b&s', href: '#contact-library' },
  { name: 'Healthcare & Supplements', id: "h&s", href: '#services' },
  { name: 'Food & Beverages', id: "f&b", href: '#services' },
  { name: 'Petcare', id: "petcare", href: '#services' },
];

const items = [
  { id: 1, image: "/ecom/banner/banner1.webp" },
  { id: 2, image: "/ecom/banner/banner2.webp" },
  { id: 3, image: "/ecom/banner/banner3.webp" },
  { id: 4, image: "/ecom/banner/banner4.webp" },
  { id: 5, image: "/ecom/banner/banner5.webp" },
  // { id: 6, image: "/ecom/banner/banner6.webp" },
]

const rotations = [
  "rotate-[-1deg]",
  "rotate-[2deg] -translate-y-4",
  "rotate-[0.5deg]",
  "rotate-[-2deg] -translate-y-5",
  "rotate-[1deg]",
]
const UGCVideoCategories = () => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-full p-2 md:bg-linear-to-b from-[#2b2c2e] to-[#030303] text-white max-w-fit mx-auto">
        <div className=" flex items-center justify-center space-x-2 flex-wrap gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="px-3 py-2 2xl:py-2 whitespace-nowrap rounded-full text-xs 2xl:text-xs 3xl:text-sm  bg-black hover:bg-(--red) transition-colors duration-200 max-h-fit"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full overflow-x-auto hide-scrollbar flex md:items-center md:justify-center mt-12 md:mt-16">
        <div className="flex px-1 md:px-6 py-12 min-w-max -space-x-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative w-[220px] h-[380px] 3xl:w-65 3xl:h-110 bg-white p-2 pb-4 
              ${rotations[index % rotations.length]}
 transition-transform duration-300`}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 20px"
              }}
            >
              <img
                src={item.image}
                alt="reel"
                className="w-full h-full object-cover"
              />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-14 border-8 border-white text-white rounded-full flex items-center justify-center text-lg">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UGCVideoCategories