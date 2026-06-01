"use client";

import { useState, useEffect, useRef } from "react";

const VIDEO_URL =
    "https://cdn.sanity.io/files/f609sqh5/production/072fc2290f1bd8d570894141c1bc3f5087ae5e49.mp4";

export default function PlayVideoSection() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const backdropRef = useRef(null);
    const modalVideoRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    function handleOpen() {
        setOpen(true);
        requestAnimationFrame(() =>
            requestAnimationFrame(() => setVisible(true))
        );
    }

    function handleClose() {
        setVisible(false);
        if (modalVideoRef.current) modalVideoRef.current.pause();
        setTimeout(() => setOpen(false), 300);
    }

    return (
        <>
            {/* ─── SECTION ─── */}
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden select-none max-w-[90%] mx-auto px-4 text-center py-10 lg:py-20">

                {/* Tagline */}
                <p className="text-[25px] 3xl:text-[36px] font-semibold tracking-[-0.02em] text-black leading-[150%] uppercase mb-12 z-10 pt-15 pb-25">
                    We build growth systems. Not campaigns.
                </p>

                {/* ── Hero row ── */}
                <div className="relative w-full flex items-center justify-center">

                    {/* "Play" — pinned to the left */}
                    <span
                        className="
        absolute left-0
        font-['Inter'] font-normal text-[clamp(72px,11vw,306px)] leading-[1] tracking-[-0.04em] text-neutral-300 pointer-events-none
    "
                        aria-hidden="true"
                    >
                        Play
                    </span>

                    {/* "ideo" — pinned to the right */}
                    <span
                        className="absolute right-0 font-['Inter'] font-normal text-[clamp(72px,11vw,306px)] leading-[1] tracking-[-0.04em] text-neutral-300 pointer-events-none"
                        aria-hidden="true"
                    >
                        Video
                    </span>

                    {/* Center: dashed ring + video card stacked */}
                    <div
                        className="relative flex items-center justify-center cursor-pointer group z-10"
                        onClick={handleOpen}
                        role="button"
                        tabIndex={0}
                        aria-label="Play video"
                        onKeyDown={(e) => e.key === "Enter" && handleOpen()}
                    >
                        {/* Circular dashed ring — exactly centered on the card */}
                        <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            aria-hidden="true"
                        >
                            {/* <svg
                                width="320"
                                height="320"
                                viewBox="0 0 320 320"
                                className="animate-spin"
                                style={{ animationDuration: "22s", animationTimingFunction: "linear" }}
                            >
                                <circle
                                    cx="160"
                                    cy="160"
                                    r="148"
                                    fill="none"
                                    stroke="#AAAAAA"
                                    strokeWidth="2"
                                    strokeDasharray="1 12"
                                    strokeLinecap="round"
                                />
                            </svg> */}

                            <svg
                                //  width="551" height="550" 
                                className="w-full h-auto max-h-[500px] animate-spin"
                                style={{ animationDuration: "22s", animationTimingFunction: "linear" }}
                                viewBox="0 0 551 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M273.338 550V535.452M253.267 549.15L254.33 534.63M233.294 546.824L235.422 532.432M213.563 543.053L216.726 528.845M194.157 537.848L198.342 523.925M175.177 531.256L180.369 517.658M156.722 523.287L162.907 510.101M138.906 513.985L146.027 501.295M121.813 503.423L129.856 491.285M105.543 491.626L114.437 480.112M90.1802 478.694L99.8967 467.847M75.7965 464.657L86.2793 454.562M62.4766 449.614L73.6688 440.312M50.2916 433.648L62.1362 425.169M39.3123 416.817L51.7385 409.246M29.5814 399.25L42.5324 392.586M21.1554 381.002L34.5603 375.316M14.0912 362.2L27.8791 357.508M8.41713 342.932L22.503 339.245M4.17577 323.293L18.4886 320.656M1.36712 303.4L15.836 301.812M0.0195312 283.365L14.5735 282.827M0.147197 263.274L14.7012 263.813M1.73593 243.253L16.2047 244.841M4.78574 223.389L19.0985 226.041M9.28242 203.808L23.3683 207.495M15.1834 184.609L28.9572 189.316M22.4746 165.894L35.8795 171.593M31.1133 147.759L44.0644 154.422M41.0571 130.304L53.4833 137.89M52.2492 113.615L64.0938 122.08M64.6328 97.7921L75.8248 107.107M78.137 82.9183L88.6198 93.0136M92.691 69.0655L102.407 79.8982M108.21 56.3044L117.103 67.8319M124.621 44.7203L132.665 56.8574M141.842 34.3555L148.963 47.0456M159.773 25.281L165.957 38.4674M178.312 17.5393L183.518 31.1369M197.377 11.173L201.576 25.1109M216.853 6.21036L220.016 20.4177M236.627 2.67981L238.755 17.0856M256.614 0.609693L257.678 15.1289M276.714 0V14.5476M296.786 0.850735L295.723 15.37M316.745 3.17608L314.631 17.5677M336.491 6.94766L333.328 21.1549M355.896 12.1513L351.697 26.075M374.876 18.7445L369.684 32.3421M393.33 26.7131L387.146 39.8995M411.147 36.0144L404.012 48.7046M428.226 46.5777L420.198 58.7148M444.496 58.3604L435.602 69.8878M459.873 71.3057L450.157 82.1526M474.257 85.3429L463.774 95.4381M487.576 100.386L476.385 109.688M499.762 116.352L487.917 124.831M510.741 133.183L498.314 140.754M520.472 150.75L507.521 157.415M528.884 168.998L515.493 174.684M535.948 187.8L522.174 192.492M541.622 207.068L527.536 210.755M545.877 226.707L531.55 229.344M548.672 246.6L534.203 248.188M550.019 266.635L535.48 267.173M549.906 286.726L535.352 286.187M548.303 306.747L533.835 305.159M545.267 326.611L530.941 323.959M540.771 346.178L526.685 342.505M534.87 365.391L521.082 360.684M527.565 384.106L514.173 378.407M518.925 402.241L505.989 395.578M508.982 419.696L496.556 412.11M497.79 436.385L485.959 427.906M485.42 452.208L474.228 442.893M471.916 467.081L461.433 456.986M457.362 480.935L447.645 470.102M441.844 493.695L432.936 482.168M425.417 505.28L417.388 493.143M408.211 515.631L401.076 502.94M390.281 524.705L384.097 511.533M371.741 532.461L366.535 518.863M352.676 538.827L348.477 524.89M333.2 543.79L330.037 529.582M313.411 547.32L311.298 532.914M293.424 549.39L292.361 534.871" stroke="black" strokeMiterlimit="10" />
                            </svg>

                        </div>

                        {/* Video preview card */}
                        <div className="relative w-[clamp(300px,60vw,576px)] aspect-576/324 rounded-xl overflow-hidden shadow-md border border-neutral-200 transition-all duration-500 ">
                            {/* Actual video as thumbnail — muted, no controls */}
                            <video
                                src={VIDEO_URL}
                                muted
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <polygon points="3,1 13,7 3,13" fill="#111111" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── MODAL ─── */}
            {open && (
                <div
                    ref={backdropRef}
                    onClick={(e) => e.target === backdropRef.current && handleClose()}
                    className={[
                        "fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300",
                        visible
                            ? "bg-black/80 backdrop-blur-sm"
                            : "bg-black/0 backdrop-blur-none",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl transition-all duration-300",
                            visible
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 translate-y-5",
                        ].join(" ")}
                    >
                        {/* Native video player for MP4 */}
                        <video
                            ref={modalVideoRef}
                            src={VIDEO_URL}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-full object-contain bg-black"
                        />

                        {/* Close ✕ */}
                        <button
                            onClick={handleClose}
                            aria-label="Close video"
                            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors duration-150 backdrop-blur-sm"
                        >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path
                                    d="M1 1l9 9M10 1L1 10"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}