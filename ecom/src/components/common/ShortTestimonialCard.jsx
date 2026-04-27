import Image from "next/image";

export default function ShortTestimonialCard({ testimonial }) {
    const avatarConfig = testimonial.avatarShape || {};

    const roundedClass =
        avatarConfig.rounded === "xl"
            ? "rounded-xl"
            : avatarConfig.rounded === "lg"
                ? "rounded-lg"
                : avatarConfig.rounded === "none"
                    ? "rounded-none"
                    : "rounded-full";

    const widthClass = avatarConfig.width || "w-12";
    const heightClass = avatarConfig.height || "h-12";

    return (
        <div className={`${testimonial.bgColor} rounded-2xl p-4 sm:p-6 3xl:p-8 3xl:py-10 flex flex-col 3xl:min-w-[470px] 3xl:min-h-[430px] 1800:min-w-[520px]`}>
            <h3 className={`${testimonial.textLarge ? "text-[25px] 1600:text-[32px] 1800:text-4xl" : "text-[25px] lg:text-[28px] 3xl:text-[30px] 1800:text-[36px]"} leading-[150%] font-semibold tracking-[-0.02em] mb-6 ${testimonial.isPaddngMore ? " 3xl:mb-14" : "3xl:mb-4"}  3xl:max-w-[435px] ${testimonial.textColor}`}>
                {testimonial.title}
            </h3>

            <div className="flex items-center gap-3 3xl:gap-5 mt-auto">
                <div
                    className={`${widthClass} ${heightClass} ${roundedClass} overflow-hidden bg-gray-300 flex items-center justify-center text-lg`}
                >

                    <Image
                        width={100}
                        height={50}
                        src={`${testimonial.avatar}`}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                    />

                </div>
                <div>
                    <p className={` ${testimonial.isPaddngMore ? " text-[22px]  3xl:text-[24px]" : "text-lg 3xl:text-xl"}  leading-[150%]  tracking-[-0.02em] font-semibold ${testimonial.textColor} `}>
                        {testimonial.author}
                    </p>
                    <p
                        className={`text-[16px] 3xl:text-[18px] leading-[150%]  tracking-[-0.02em] ${testimonial.textColor === "text-white"
                            ? "text-white/80"
                            : "text-black/80"
                            }`}
                    >
                        {testimonial.position}
                    </p>
                </div>
            </div>
        </div>
    );
}