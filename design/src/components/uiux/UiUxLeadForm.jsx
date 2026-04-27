// "use client"
// import React from 'react';

// // Main Form Component
// const UiUxLeadForm = ({ showCircle = false, showBorder = true, showOnlyIframe = false }) => {
//     // If showOnlyIframe is true, just return the iframe without modal wrapper
//     if (showOnlyIframe) {
//         return (
//             <div className="flex items-center justify-center w-full px-2">
//                 <div className="w-full max-w-2xl bg-white border shadow-lg rounded-lg overflow-hidden">
//                     <iframe
//                         src="https://noform.vercel.app/embed/scale-your-ecom-brand-with-ugc"
//                         width="100%"
//                         height="800"
//                         frameBorder="0"
//                         style={{ border: 'none', borderRadius: '10px' }}
//                         title="Scale Your Ecom Brand With UGC"
//                     />
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center w-full px-2">
//             <div className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? " border shadow-lg" : ""} rounded-lg overflow-hidden`}>
//                 <iframe
//                     src="https://noform.vercel.app/embed/scale-your-ecom-brand-with-ugc"
//                     width="100%"
//                     height="800"
//                     frameBorder="0"
//                     style={{ border: 'none', borderRadius: '10px' }}
//                     title="Scale Your Ecom Brand With UGC"
//                 />
//             </div>
//         </div>
//     );
// };

// export default UiUxLeadForm;



"use client"

import { useEffect, useState } from "react";

const UiUxLeadForm = ({ showBorder = true }) => {
    const [iframeSrc, setIframeSrc] = useState(
        "https://upthrust-us.neetocal.com/embed/463af662-25a1-433c-85d1-bc7531c305fa"
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        const utmParams = new URLSearchParams();

        utmKeys.forEach(key => {
            const val = params.get(key);
            if (val) utmParams.set(key, val);
        });

        const qs = utmParams.toString();
        if (qs) {
            setIframeSrc(
                `https://upthrust-us.neetocal.com/embed/463af662-25a1-433c-85d1-bc7531c305fa?${qs}`
            );
        }
    }, []);

    return (
        <div className="flex items-center justify-center w-full px-2">
            <div className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? "border shadow-lg" : ""} rounded-lg overflow-hidden`}>
                <iframe src={iframeSrc} width="100%" height="800" style={{ border: "none" }} />
            </div>
        </div>
    );
};

export default UiUxLeadForm;
