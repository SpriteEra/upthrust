

"use client"
import React, { useState } from 'react'
import PerformanceLeadFormModal from './PerformanceLeadModal';
import PerformanceButton from './PerformanceButton';
import CommonLeadModal from '@/common/commonLeadModel';
import { FORM_URLS } from '@/lib/formdata';

const PerformanceCommonButton = ({ text, btncss }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >
                <PerformanceButton text={text} btncss={btncss} />
            </button>
            {isOpen && (
                <CommonLeadModal formUrl={FORM_URLS.performance} handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default PerformanceCommonButton