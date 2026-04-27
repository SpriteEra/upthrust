"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import MetaLeadModal from './MetaLeadModal';

const MetaRocketButton = ({ text1, text2 }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='blue' text1={text1 || "Show Us"} text2={text2 || "How To Scale"} />
            </button>
            {isOpen && (
                <MetaLeadModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default MetaRocketButton