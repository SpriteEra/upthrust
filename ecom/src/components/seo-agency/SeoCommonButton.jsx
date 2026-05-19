"use client"
import React, { useState } from 'react'
import SeoButton from './SeoButton';
import { FORM_URLS } from '@/lib/formdata';
import CommonLeadModal from '@/common/commonLeadModel';

const SeoCommonButton = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <SeoButton text={text} />
            </button>
            {/* <SeoLeadModal handleClose={() => setIsOpen(false)} /> */}
            {isOpen && (
                <CommonLeadModal formUrl={FORM_URLS.seo} handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default SeoCommonButton