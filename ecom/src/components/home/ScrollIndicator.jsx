export default function ScrollIndicator() {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 md:mt-30">
            <div className="group relative size-32 md:size-40 3xl:size-50 flex items-center justify-center">

                {/* Circular Text */}
                <svg
                    viewBox="0 0 200 200"
                    className="absolute w-full h-full text-gray-400"
                    fill="currentColor"
                >

                    <defs>
                        <path
                            id="circlePath"
                            d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                        />
                    </defs>
                    <text fontSize="12" letterSpacing="2">
                        <textPath href="#circlePath" startOffset="0%">
                            LEARN WHY WE’RE DIFFERENT&nbsp;&nbsp;LEARN WHY WE’RE DIFFERENT
                        </textPath>
                    </text>
                </svg>

                {/* Arrow Wrapper */}
                <div className="relative size-16 md:size-20 3xl:size-30 overflow-hidden">

                    {/* Arrow 1 (default) */}
                    <span
                        className="text-4xl md:text-5xl 3xl:text-7xl font-extralight absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-full"
                    >
                        ↓
                    </span>

                    {/* Arrow 2 (hover) */}
                    <span
                        className=" text-4xl md:text-5xl 3xl:text-7xl font-extralight absolute inset-0 flex items-center justify-center -translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                    >
                        ↓
                    </span>

                </div>
            </div>

        </div>
    )
}
