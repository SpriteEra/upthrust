import RatingStars from "@/common/Rating";
import Image from "next/image";

export default function QuoteTestimonialCard({ testimonial }) {
    return (
        <div className={`${testimonial.bgColor} border-2 ${testimonial.borderColor} rounded-2xl p-6 shadow-lg flex flex-col`}>
            <RatingStars rating={testimonial.rating} fillColor="#FE2B27" />

            <h3 className="text-[24px] leading-[150%] tracking-[-0.02em] font-semibold mb-4">{testimonial.title}</h3>

            <p className=" text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-normal mb-6">
                {testimonial.quote}
            </p>

            <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                    <Image width={48} height={48} src={`${testimonial.avatar}`} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>

                <div>
                    <p className="text-lg 3xl:text-[20px] leading-[150%] tracking-[-0.02em] font-semibold">{testimonial.author}</p>
                    <p className="text-lg leading-[150%] tracking-[-0.02em] ">{testimonial.position}</p>
                </div>
            </div>
        </div>
    );
}