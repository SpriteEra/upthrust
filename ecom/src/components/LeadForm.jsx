"use client"

import { useEffect, useState } from "react";

const LeadForm = ({ showBorder = true }) => {
    const [iframeSrc, setIframeSrc] = useState(
        "https://upthrust-ecom.neetocal.com/embed/3f2e149b-8090-481e-8e7e-6ba530596ff4"
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
                `https://upthrust-ecom.neetocal.com/embed/3f2e149b-8090-481e-8e7e-6ba530596ff4?${qs}`
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

export default LeadForm;
