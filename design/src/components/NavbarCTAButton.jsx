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
                    className="rounded-full py-2 px-5 bg-black border-3 border-(--red) text-white text-base transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 relative group font-medium cursor-pointer tracking-[0em]"
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