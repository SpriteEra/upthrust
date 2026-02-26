"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import MetaLeadForm from './MetaLeadForm';

const MetaRocketButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='blue' text1="Show Us" text2="How To Scale" />
            </button>
            {isOpen && (
                <MetaLeadForm handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default MetaRocketButton