import React from 'react'

const SeoButton = ({ text = "Scale Your PPC" }) => {
    return (
        <div>
            <button className='text-lg 3xl:text-xl py-2.5 lg:py-4 3xl:py-5.5 px-6 lg:px-8 3xl:px-10 rounded-full bg-[#1A73E8] text-white hover:bg-[#1550A9] transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em] font-normal'>{text}</button>
        </div>
    )
}

export default SeoButton

