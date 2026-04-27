

"use client"
// import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import SeoLeadModal from './SeoLeadModal';
import SeoButton from './SeoButton';

const SeoCommonButton = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <SeoButton text={text} />
                {/* <RocketCTAButton color='blue' text1="Show Us" text2="How To Scale" /> */}
            </button>
            {isOpen && (
                <SeoLeadModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default SeoCommonButton