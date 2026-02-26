"use client"
import React from 'react';

// Main Form Component
const MetaLeadForm = ({ showCircle = false, showBorder = true, showOnlyIframe = false }) => {
    // If showOnlyIframe is true, just return the iframe without modal wrapper
    if (showOnlyIframe) {
        return (
            <div className="flex items-center justify-center w-full px-2">
                <div className="w-full max-w-2xl bg-white border shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        src="https://noform.vercel.app/embed/scale-your-ecom-brand-with-ugc"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        style={{ border: 'none', borderRadius: '10px' }}
                        title="Scale Your Ecom Brand With UGC"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center w-full px-2">
            <div className={`w-full max-w-2xl 3xl:max-w-4xl bg-white ${showBorder ? " border shadow-lg" : ""} rounded-lg overflow-hidden`}>
                <iframe
                    src="https://noform.vercel.app/embed/scale-your-ecom-brand-with-ugc"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    style={{ border: 'none', borderRadius: '10px' }}
                    title="Scale Your Ecom Brand With UGC"
                />
            </div>
        </div>
    );
};

export default MetaLeadForm;