

"use client"
// import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import GoogleLeadModal from './GoogleLeadModal';
import GoogleButton from './GoogleButton';

const GoogleCommonButton = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <GoogleButton text={text} />
                {/* <RocketCTAButton color='blue' text1="Show Us" text2="How To Scale" /> */}
            </button>
            {isOpen && (
                <GoogleLeadModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default GoogleCommonButton