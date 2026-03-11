"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
// import MetaLeadForm from './MetaLeadForm';
import LeadFormModal from '../LeadModal';

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
                <LeadFormModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default MetaRocketButton