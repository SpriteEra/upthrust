import RatingStars from "@/common/Rating";

export default function QuoteTestimonialCard({ testimonial }) {
    return (
        <div className={`${testimonial.bgColor} border-2 ${testimonial.borderColor} rounded-2xl p-6 shadow-lg flex flex-col`}>
            <RatingStars rating={testimonial.rating} />

            <h3 className="text-lg font-bold mb-4">{testimonial.title}</h3>

            <p className="text-sm mb-6 leading-relaxed text-gray-700">
                {testimonial.quote}
            </p>

            <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                    {testimonial.avatar && typeof testimonial.avatar === "object" ? (
                        <img src={testimonial.avatar.src} alt={testimonial.author} className="w-full h-full object-cover" />
                    ) : (
                        testimonial.avatar || "👤"
                    )}
                </div>

                <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.position}</p>
                </div>
            </div>
        </div>
    );
}