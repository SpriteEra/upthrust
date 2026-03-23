// "use client"
// import Script from 'next/script';
// import React from 'react';

// // Main Form Component
// const LeadForm = ({ showCircle = false, showBorder = true, showOnlyIframe = false }) => {
//     // If showOnlyIframe is true, just return the iframe without modal wrapper
//     if (showOnlyIframe) {
//         return (
//             <div className="flex items-center justify-center w-full px-2">
//                 <div className="w-full max-w-2xl bg-white border shadow-lg rounded-lg overflow-hidden">
//                     {/* <iframe
//                         src="https://upthrust-ecom.neetocal.com/embed/3f2e149b-8090-481e-8e7e-6ba530596ff4"
//                         width="100%"
//                         height="800"
//                         frameBorder="0"
//                         style={{ border: 'none', borderRadius: '10px' }}
//                         title="Scale Your Ecom Brand With UGC"
//                     /> */}

//                     {/* <!-- <button id="open-popup-button">Click to open popup</button> --> */}

//                     {/* <!-- NeetoCal element-click embed code begins -->
//   <script>window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };</script>
//   <script async
//     src="https://cdn.neetocal.com/javascript/embed.js">
//   </script>
//   <script>
//     neetoCal.embed({
//       type: "elementClick",
//       id: "3f2e149b-8090-481e-8e7e-6ba530596ff4",
//       organization: "upthrust-ecom",
//       elementSelector: "#open-popup-button",
//       isSidebarAndCoverImgHidden: "false",
//       shouldForwardQueryParams: "true"
//     });
//   </script> */}


//                     <button id="open-popup-button">
//                         Open Calendar
//                     </button>

//                     <Script
//                         src="https://cdn.neetocal.com/javascript/embed.js"
//                         strategy="afterInteractive"
//                     />

//                     <Script id="neetocal-init" strategy="afterInteractive">
//                         {`
//     window.neetoCal = window.neetoCal || {embed: function(){(neetoCal.q = neetoCal.q || []).push(arguments)} };

//     neetoCal.embed({
//       type: "elementClick",
//       id: "3f2e149b-8090-481e-8e7e-6ba530596ff4",
//       organization: "upthrust-ecom",
//       elementSelector: "#open-popup-button",
//       isSidebarAndCoverImgHidden: "false",
//       shouldForwardQueryParams: "true"
//     });
//   `}
//                     </Script>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center w-full px-2">
//             <div className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? " border shadow-lg" : ""} rounded-lg overflow-hidden`}>
//                 <iframe
//                     src="https://upthrust-ecom.neetocal.com/embed/3f2e149b-8090-481e-8e7e-6ba530596ff4"
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

// export default LeadForm;


"use client";
import Script from "next/script";
import { useEffect } from "react";

const LeadForm = ({ showOnlyIframe = false, showBorder = true }) => {

    useEffect(() => {
        if (!showOnlyIframe) return;

        // wait for script to load
        const interval = setInterval(() => {
            if (window.neetoCal) {
                window.neetoCal.embed({
                    type: "inline",
                    id: "3f2e149b-8090-481e-8e7e-6ba530596ff4",
                    organization: "upthrust-ecom",
                    elementSelector: "#open-popup-button",
                    isSidebarAndCoverImgHidden: "false",
                    shouldForwardQueryParams: "true",
                });

                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [showOnlyIframe]);

    // ================= IFRAME MODE =================
    if (!showOnlyIframe) {
        return (
            <div className="flex items-center justify-center w-full px-2">
                <div
                    className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? "border shadow-lg" : ""
                        } rounded-lg overflow-hidden`}
                >
                    <iframe
                        src="https://upthrust-ecom.neetocal.com/embed/3f2e149b-8090-481e-8e7e-6ba530596ff4"
                        width="100%"
                        height="800"
                        style={{ border: "none" }}
                    />
                </div>
            </div>
        );
    }

    // ================= POPUP MODE =================
    return (
        <div className="flex items-center justify-center w-full px-2">
            <div className="w-full max-w-2xl bg-white border shadow-lg rounded-lg p-6 text-center">
                <div id="inline-embed-container" />

                {/* Button */}
                {/* <button
                    id="open-popup-button"
                    className="bg-black text-white px-6 py-3 rounded-md"
                >
                    Open Calendar
                </button> */}

                {/* Script Loader */}
                <Script
                    src="https://cdn.neetocal.com/javascript/embed.js"
                    strategy="afterInteractive"
                />

            </div>
        </div>
    );
};

export default LeadForm;


