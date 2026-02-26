import React, { useState } from 'react'
const colors = {
    green: "#22c55e",
    blue: "#0457CB",
    red: "#FF3B00",
    yellow: "#f59e0b",
    purple: "#a855f7",
    black: "#000",
    white: "#ffffff",
};

const RocketCTAButton = ({ color = "red", text1 = "Show Us", text2 = "How To Scale" }) => {
    // if named color → use map, else use raw value (#000, etc.)
    const resolvedColor = colors[color] || color || colors.red;

    return (
        <>
            <p
                style={{ '--btn-color': resolvedColor }}
                className="rounded-full py-5 px-9 lg:py-3.5 3xl:py-5.5 3xl:px-9 bg-black border-2 3xl:border-3 border-(--btn-color) hover:bg-(--btn-color) text-white text-lg lg:text-base 3xl:text-lg font-medium transition-colors duration-200 flex items-center space-x-2 relative group tracking-[-0.02em] cursor-pointer"
            >
                <span>{text1}</span>

                <span className="relative size-7.5 lg:size-6 3xl:size-7.5 flex items-center justify-center">
                    <span
                        className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out group-hover:-rotate-180"
                    />
                    <svg className="relative z-10 size-5 lg:size-4 3xl:size-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292103 8.29L4.75331 4.04101C5.00116 3.80496 5.29326 3.63634 5.62962 3.53518C5.96599 3.43401 6.3112 3.41715 6.66526 3.4846L8.70998 3.83868C7.73631 4.88406 6.94851 5.87465 6.3466 6.81044C5.74469 7.74623 5.18704 8.83798 4.67365 10.0857L0.292103 8.29ZM5.65618 10.5409C6.13417 9.31009 6.73607 8.15089 7.46191 7.06335C8.18774 5.97582 9.01094 4.99366 9.93151 4.11688C11.4894 2.63311 13.2686 1.5245 15.269 0.791041C17.2695 0.0575854 19.1372 -0.165824 20.8721 0.120814C21.173 1.7732 20.9429 3.55204 20.1817 5.45734C19.4204 7.36264 18.2609 9.05717 16.703 10.5409C15.7824 11.4177 14.7468 12.2018 13.5961 12.8931C12.4454 13.5844 11.2238 14.1576 9.93151 14.6129L5.65618 10.5409ZM13.2509 7.3795C13.6049 7.71672 14.0431 7.88533 14.5653 7.88533C15.0876 7.88533 15.5257 7.71672 15.8798 7.3795C16.2339 7.04228 16.4109 6.62497 16.4109 6.12757C16.4109 5.63016 16.2339 5.21285 15.8798 4.87563C15.5257 4.53841 15.0876 4.3698 14.5653 4.3698C14.0431 4.3698 13.6049 4.53841 13.2509 4.87563C12.8968 5.21285 12.7198 5.63016 12.7198 6.12757C12.7198 6.62497 12.8968 7.04228 13.2509 7.3795ZM12.3214 19.7218L10.4095 15.5487C11.7195 15.0597 12.8658 14.5286 13.8483 13.9553C14.8309 13.382 15.8709 12.6317 16.9685 11.7044L17.3403 13.6518C17.4111 13.989 17.3934 14.322 17.2872 14.6508C17.181 14.9796 17.0039 15.262 16.7561 15.4981L12.3214 19.7218ZM1.99161 13.8289C2.61122 13.2387 3.36361 12.9394 4.24877 12.931C5.13393 12.9226 5.88632 13.2134 6.50593 13.8036C7.12555 14.3937 7.43535 15.1103 7.43535 15.9533C7.43535 16.7964 7.12555 17.513 6.50593 18.1031C6.04565 18.5415 5.32867 18.904 4.35499 19.1907C3.38131 19.4773 1.92965 19.7471 0 20C0.265548 18.1621 0.5488 16.7838 0.849755 15.8648C1.15071 14.9459 1.53133 14.2672 1.99161 13.8289Z" fill="var(--btn-color)" className="size-7.5 lg:size-4 3xl:size-5" />
                    </svg>
                </span>

                <span>{text2}</span>
            </p>

        </>
    )
}

export default RocketCTAButton
