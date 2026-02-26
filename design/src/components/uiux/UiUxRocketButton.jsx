"use client"
import React, { useState } from 'react'
import RocketCTAButton from '@/common/RocketCTAButton';
import UiUxLeadFormModel from './UiUxLeadFormModel';

const UiUxRocketButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='red' text1="Show Us" text2="How To Scale" />
            </button>
            {isOpen && (
                <UiUxLeadFormModel handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default UiUxRocketButton