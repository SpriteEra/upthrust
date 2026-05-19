"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
import MetaLeadModal from './MetaLeadModal';
import { FORM_URLS } from '@/lib/formdata';
import CommonLeadModal from '@/common/commonLeadModel';

const MetaRocketButton = ({ text1, text2 }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <RocketCTAButton color='blue' text1={text1 || "Show Us"} text2={text2 || "How To Scale"} />
            </button>
            {/* <MetaLeadModal handleClose={() => setIsOpen(false)} /> */}
            {isOpen && (
                <CommonLeadModal formUrl={FORM_URLS.metaAds} handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default MetaRocketButton