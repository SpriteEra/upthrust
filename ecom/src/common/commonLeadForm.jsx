"use client";

import { useEffect, useState } from "react";

const CommonLeadForm = ({
    formUrl,
    height = "500px",
    widthcss,
    showBorder = false,
}) => {
    const [iframeSrc, setIframeSrc] = useState(formUrl);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const utmKeys = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content",
        ];

        const utmParams = new URLSearchParams();

        utmKeys.forEach((key) => {
            const val = params.get(key);
            if (val) utmParams.set(key, val);
        });

        const qs = utmParams.toString();

        if (qs) {
            setIframeSrc(`${formUrl}?${qs}`);
        } else {
            setIframeSrc(formUrl);
        }
    }, [formUrl]);

    return (
        <div className="flex items-center justify-center w-full p-2 ">
            <div
                className={`w-full flex h-full min-h-${height} ${widthcss}  ${showBorder ? "border shadow-lg" : ""
                    } rounded-lg overflow-hidden`}
            >

                <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: "none", minHeight: height }}
                    allowFullScreen
                    title="Lead Form"
                />
            </div>
        </div>
    );
};

export default CommonLeadForm;


// "use client";

// import { useEffect, useState } from "react";

// const CommonLeadForm = ({
//     formUrl,
//     height = "500px",
//     showBorder = false,
// }) => {
//     const [iframeSrc, setIframeSrc] = useState("");

//     useEffect(() => {
//         const loadIframe = () => {
//             const params = new URLSearchParams(window.location.search);

//             const utmKeys = [
//                 "utm_source",
//                 "utm_medium",
//                 "utm_campaign",
//                 "utm_term",
//                 "utm_content",
//             ];

//             const utmParams = new URLSearchParams();

//             utmKeys.forEach((key) => {
//                 const val = params.get(key);

//                 if (val) {
//                     utmParams.set(key, val);
//                 }
//             });

//             const qs = utmParams.toString();

//             const finalUrl = qs
//                 ? `${formUrl}?${qs}`
//                 : formUrl;

//             // REAL background preload
//             const preloadIframe = document.createElement("iframe");

//             preloadIframe.src = finalUrl;

//             preloadIframe.style.position = "absolute";
//             preloadIframe.style.width = "1px";
//             preloadIframe.style.height = "1px";
//             preloadIframe.style.opacity = "0";
//             preloadIframe.style.pointerEvents = "none";
//             preloadIframe.style.bottom = "0";

//             document.body.appendChild(preloadIframe);

//             // set visible iframe src
//             setIframeSrc(finalUrl);
//         };

//         // wait until page becomes idle
//         if ("requestIdleCallback" in window) {
//             requestIdleCallback(() => {
//                 loadIframe();
//             });
//         } else {
//             setTimeout(loadIframe, 3000);
//         }

//     }, [formUrl]);

//     return (
//         <div className="flex items-center justify-center w-full p-2 ">
//             <div
//                 className={`w-full flex h-full ${showBorder ? "border shadow-lg" : ""
//                     } rounded-lg overflow-hidden`}
//             >
//                 {iframeSrc && (
//                     <iframe
//                         src={iframeSrc}
//                         width="100%"
//                         height="100%"
//                         style={{ border: "none", minHeight: height }}
//                         allowFullScreen
//                         title="Lead Form"
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CommonLeadForm;