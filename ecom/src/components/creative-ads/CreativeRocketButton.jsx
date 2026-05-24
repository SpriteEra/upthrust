"use client"
import RocketCTAButton from '@/common/RocketCTAButton'
import React, { useState } from 'react'
// import MetaLeadForm from './MetaLeadForm';
import CommonLeadModal from '@/common/commonLeadModel';
// import { FORM_URLS } from '@/lib/formdata';

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
        </>
    )
}

export default CreativeRocketButton