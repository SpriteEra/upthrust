"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import CommonLeadModal from '@/common/commonLeadModel';
// import CommonFormModal from '@/common/commonFormModal';

const CreativeRocketButton = ({ text1 = "Show Us", text2 = "How To Scale", formUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='orange' text1={text1} text2={text2} />
            </button>

            {isOpen && (
                <CommonLeadModal formUrl={formUrl} handleClose={() => setIsOpen(false)} />
            )}
            {/* <CommonFormModal formUrl={formUrl} handleClose={() => setIsOpen(false)} /> */}
        </>
    )
}

export default CreativeRocketButton