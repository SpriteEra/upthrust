"use client"
import React, { useState } from 'react'
import LeadFormModal from './LeadModal'
import Portal from './Portal';

const NavbarCTAButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="lg:hidden max-lg:flex gap-0 sm:gap-2">
                <button
                    className="px-5 rounded-full py-2.5 sm:py-3 md:py-3.5 bg-black border-2 border-(--red) text-white text-xs transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 relative group font-medium cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    Book A Demo Call
                </button>
            </div>
            {isModalOpen && (
                <Portal>
                    <LeadFormModal handleClose={() => setIsModalOpen(false)} />
                </Portal>
            )}
        </>
    )
}

export default NavbarCTAButton