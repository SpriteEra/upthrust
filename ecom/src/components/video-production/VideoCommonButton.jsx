

"use client";
import React from "react";
import { OPEN_NEETOCAL_FORM } from "@/common/commonFormModal";

const VideoCommonButton = ({ text }) => {
    return (
        <button
            className="text-lg 3xl:text-xl py-2.5 lg:py-4 3xl:py-5.5 px-6 lg:px-8 3xl:px-10 rounded-full bg-orange text-white  transition-colors duration-100 ease-linear cursor-pointer leading-[150%] tracking-[-0.02em] font-normal"
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_NEETOCAL_FORM))}
        >
            {text}
        </button>
    );
};

export default VideoCommonButton;