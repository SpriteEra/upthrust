
"use client"
import React, { useState } from 'react'
import LeadFormModal from '@/components/LeadModal'

const colors = {
    green: "#22c55e",
    blue: "#0457CB",
    red: "#FF3B00",
    yellow: "#f59e0b",
    purple: "#a855f7",
    black: "#000",
    white: "#ffffff",
    orange: "#FF3B00"
};

const AgencyButton = ({ color = "red", text = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    // if named color → use map, else use raw value (#000, etc.)
    const resolvedColor = colors[color] || color || colors.red;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{ '--btn-color': resolvedColor }}
                className="rounded-full py-5 px-9 lg:py-3.5 3xl:py-5 3xl:px-9 bg-black border-2 3xl:border-3 border-(--btn-color) hover:bg-(--btn-color) text-white text-lg lg:text-base 3xl:text-lg font-medium transition-colors duration-200 flex items-center space-x-2 relative group tracking-[-0.02em] cursor-pointer w-fit"
            >
                <span>{text}</span>


            </button>
            {isOpen && (
                <LeadFormModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default AgencyButton
