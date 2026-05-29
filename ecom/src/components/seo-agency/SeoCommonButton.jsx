// "use client"
// import React, { useState } from 'react'
// import SeoButton from './SeoButton';
// // import { FORM_URLS } from '@/lib/formdata';
// import CommonLeadModal from '@/common/commonLeadModel';

// const SeoCommonButton = ({ text, formUrl }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <>
//             <button
//                 onClick={() => setIsOpen(true)}
//             >
//                 <SeoButton text={text} />
//             </button>
//             {isOpen && (
//                 <CommonLeadModal formUrl={formUrl} handleClose={() => setIsOpen(false)} />
//             )}
//         </>
//     )
// }

// export default SeoCommonButton

"use client";
import React from "react";
import SeoButton from "./SeoButton";
import { OPEN_NEETOCAL_FORM } from "@/common/commonFormModal";

const SeoCommonButton = ({ text }) => {
    return (
        <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_NEETOCAL_FORM))}
        >
            <SeoButton text={text} />
        </button>
    );
};

export default SeoCommonButton;