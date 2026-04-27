

"use client"
import React, { useState } from 'react'
import PerformanceLeadFormModal from './PerformanceLeadModal';
import PerformanceButton from './PerformanceButton';

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
                <PerformanceLeadFormModal handleClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default PerformanceCommonButton