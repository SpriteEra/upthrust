"use client"
import React, { useState } from 'react'
import SeoButton from './SeoButton';
// import { FORM_URLS } from '@/lib/formdata';
import CommonLeadModal from '@/common/commonLeadModel';

const SeoCommonButton = ({ text, formUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <SeoButton text={text} />
            </button>
            {isOpen && (
                <CommonLeadModal formUrl={formUrl} handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default SeoCommonButton