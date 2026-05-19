"use client"
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import CommonLeadForm from './commonLeadForm';


// Main Form Component
const CommonLeadModal = ({ handleClose, formUrl }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const modalContent = (
        <div
            className="fixed top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center p-4"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 99999,
                margin: 0,
                padding: '16px'
            }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            />

            {/* Close button */}
            <button
                onClick={handleClose}
                className="absolute top-8 right-8 z-[100000] p-2 bg-white text-[#FF3B00] rounded-full shadow hover:bg-gray-100"
                style={{
                    position: 'absolute',
                    top: '32px',
                    right: '32px',
                    zIndex: 100000
                }}
            >
                <X className="w-5 h-5" />
            </button>

            {/* Modal Box */}
            <div
                className="relative z-[99999] w-full max-w-6xl 3xl:max-w-[1200px] h-[90vh] rounded-[2px] sm:h-[98vh] 3xl:h-[80vh] lg:rounded-3xl shadow-2xl overflow-hidden mx-auto"
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    zIndex: 99999,
                    width: '100%',
                    margin: '0 auto'
                }}
            >
                <div className="flex h-full w-full">

                    <div className='w-full  flex text-black bg-white overflow-auto'>
                        <CommonLeadForm formUrl={formUrl} />
                    </div>
                </div>
            </div>
        </div>
    );

    if (!mounted) return null;

    return createPortal(modalContent, document.body);

};

export default CommonLeadModal;