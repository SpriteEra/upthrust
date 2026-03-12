"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
// import MetaLeadForm from './MetaLeadForm';
import CreativeLeadFormModal from './CreativeLeadModal';

const CreativeRocketButton = ({ text1 = "Show Us", text2 = "How To Scale" }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='orange' text1={text1} text2={text2} />
            </button>
            {isOpen && (
                <CreativeLeadFormModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default CreativeRocketButton