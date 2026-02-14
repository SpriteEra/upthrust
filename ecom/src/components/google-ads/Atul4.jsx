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
        <div className={`${testimonial.bgColor} rounded-2xl p-6 shadow-lg flex flex-col`}>
            <h3 className={`text-[22px] font-bold mb-6 ${testimonial.textColor}`}>
                {testimonial.title}
            </h3>

            <div className="flex items-center gap-3 mt-auto">
                <div
                    className={`${widthClass} ${heightClass} ${roundedClass} overflow-hidden bg-gray-300 flex items-center justify-center text-lg`}
                >
                    {testimonial.avatar && typeof testimonial.avatar === "object" ? (
                        <Image
                            width={100}
                            height={50}
                            src={testimonial.avatar.src}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                        />
                    ) : testimonial.avatar ? (
                        testimonial.avatar
                    ) : (
                        "👤"
                    )}
                </div>
                <div>
                    <p className={`font-semibold text-sm ${testimonial.textColor}`}>
                        {testimonial.author}
                    </p>
                    <p
                        className={`text-xs ${testimonial.textColor === "text-white"
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