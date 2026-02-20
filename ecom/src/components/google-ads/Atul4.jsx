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
        <div className={`${testimonial.bgColor} rounded-2xl p-6 3xl:p-8 shadow-lg flex flex-col`}>
            <h3 className={`text-[25px]  3xl:text-[30px] leading-[150%] font-semibold tracking-[-0.02em] mb-6 ${testimonial.textColor}`}>
                {testimonial.title}
            </h3>

            <div className="flex items-center gap-3 mt-auto">
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
                    <p className={`text-[22px]  3xl:text-[24px] leading-[150%]  tracking-[-0.02em] font-semibold ${testimonial.textColor}`}>
                        {testimonial.author}
                    </p>
                    <p
                        className={`text-[16px] 3xl:text-[18px] leading-[150%]  tracking-[-0.02em] ${testimonial.textColor === "text-white"
                            ? "text-white/80"
                            : "text-gray-600"
                            }`}
                    >
                        {testimonial.position}
                    </p>
                </div>
            </div>
        </div>
    );
}