

"use client"
import React, { useState } from 'react'
import GoogleButton from './GoogleButton';
import CommonLeadModal from '@/common/commonLeadModel';
// import { FORM_URLS } from '@/lib/formdata';

const GoogleCommonButton = ({ text, formUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <GoogleButton text={text} />
            </button>
            {isOpen && (
                <CommonLeadModal formUrl={formUrl} handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default GoogleCommonButton