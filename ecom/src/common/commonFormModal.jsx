"use client";

import React, { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

// Any button on the page opens the prerendered form by dispatching this event:
//   window.dispatchEvent(new Event(OPEN_NEETOCAL_FORM))
// and (optionally) closes it with:
//   window.dispatchEvent(new Event(CLOSE_NEETOCAL_FORM))
export const OPEN_NEETOCAL_FORM = "open-neetocal-form";
export const CLOSE_NEETOCAL_FORM = "close-neetocal-form";

const UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
    "gclid",
    "fbclid",
    "msclkid",
    "ref",
    "referrer",
];

const CommonFormModal = ({ formUrl }) => {
    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState(formUrl);

    // Forward UTM/click params to the iframe ONCE, at page load.
    // Runs only on the client; if no params are present we leave src untouched,
    // so the iframe never reloads.
    useEffect(() => {
        const parentParams = new URLSearchParams(window.location.search);
        const forwarded = new URLSearchParams();

        UTM_KEYS.forEach((key) => {
            const val = parentParams.get(key);
            if (val) forwarded.append(key, val);
        });

        const qs = forwarded.toString();
        if (qs) setSrc(`${formUrl.split("?")[0]}?${qs}`);
    }, [formUrl]);

    const openForm = useCallback(() => setOpen(true), []);
    const closeForm = useCallback(() => setOpen(false), []);

    // Listen for global open/close triggers fired by any button on the page.
    useEffect(() => {
        window.addEventListener(OPEN_NEETOCAL_FORM, openForm);
        window.addEventListener(CLOSE_NEETOCAL_FORM, closeForm);
        return () => {
            window.removeEventListener(OPEN_NEETOCAL_FORM, openForm);
            window.removeEventListener(CLOSE_NEETOCAL_FORM, closeForm);
        };
    }, [openForm, closeForm]);

    // Lock body scroll and enable Esc-to-close only while open.
    useEffect(() => {
        if (!open) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") closeForm();
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, closeForm]);

    // The overlay + iframe are ALWAYS mounted at the same DOM node and the same
    // size, so the iframe loads once on page load and is never re-parented or
    // resized (either of which would force a reload). Opening only toggles
    // opacity / pointer-events / z-index — a pure CSS reveal.
    return (
        <div
            onClick={closeForm}
            aria-hidden={!open}
            className={`fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-200 ${open
                ? "z-[99999] opacity-100 pointer-events-auto"
                : "-z-10 opacity-0 pointer-events-none"
                }`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* Modal box (constant size in both states) */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-[1] w-full max-w-6xl 3xl:max-w-[1200px] h-[90vh] sm:h-[98vh] 3xl:h-[80vh] rounded-[2px] lg:rounded-3xl bg-white shadow-2xl overflow-hidden mx-auto"
            >
                <button
                    type="button"
                    onClick={closeForm}
                    aria-label="Close form"
                    className="absolute top-4 right-4 z-[2] p-2 bg-white text-[#FF3B00] rounded-full shadow hover:bg-gray-100"
                >
                    <X className="w-5 h-5" />
                </button>

                <iframe
                    id="neetocal-iframe"
                    src={src}
                    loading="eager"
                    allow="payment"
                    allowFullScreen
                    title="Book a Strategy Call with Upthrust"
                    className="w-full h-full border-0"
                />
            </div>
        </div>
    );
};

export default CommonFormModal;