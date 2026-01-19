import React from 'react'
const navLinks = [
  { name: 'Clothing & Footweear', id: "c&f", href: '#about' },
  { name: 'Lifestyle', id: "leftstyle", href: '#services' },
  { name: 'Beauty & Skincard', id: 'b&s', href: '#contact-library' },
  { name: 'Healthcare & Supplements', id: "h&s", href: '#services' },
  { name: 'Food & Beverages', id: "f&b", href: '#services' },
  { name: 'Petcare', id: "petcare", href: '#services' },
];
const UGCVideoCategories = () => {
  return (
    <div>
      <div className="flex justify-between items-center rounded-full p-2 md:bg-linear-to-b from-[#2b2c2e] to-[#030303] text-white max-w-fit mx-auto">
        <div className=" flex items-center justify-center space-x-2 flex-wrap space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="px-3 py-2 2xl:py-2 whitespace-nowrap rounded-full text-xs 2xl:text-[13px] 3xl:text-[16px]  bg-black hover:bg-(--red) transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div></div>
  )
}

export default UGCVideoCategories