"use client";

import { useEffect, useState } from "react";

const CommonLeadForm = ({
    formUrl,
    height = "750",
    showBorder = true,
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
        <div className="flex items-center justify-center w-full px-2">
            <div
                className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? "border shadow-lg" : ""
                    } rounded-lg overflow-hidden`}
            >
                <iframe
                    src={iframeSrc}
                    width="100%"
                    height={height}
                    style={{ border: "none" }}
                    allowFullScreen
                    title="Lead Form"
                />
            </div>
        </div>
    );
};

export default CommonLeadForm;