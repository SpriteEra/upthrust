import RatingStars from "@/common/Rating";
import Image from "next/image";

export default function QuoteTestimonialCard({ testimonial }) {
    return (
        <div className={`${testimonial.bgColor} border-2 ${testimonial.borderColor} rounded-2xl p-4 sm:p-6 3xl:p-7 1600:pt-6 1800:py-10 1600:pb-16 1800:pb-14 flex flex-col`}>
            <RatingStars rating={testimonial.rating} fillColor="#FE2B27" customCss="gap-0!" />

            <h3 className="text-2xl lg:text-2xl 1600:text-[22px] 1800:text-2xl leading-[130%] tracking-[-0.02em] font-semibold mb-4 3xl:max-w-[400px] mt-2 3xl:mt-3">{testimonial.title}</h3>

            <p className=" text-lg 1800:text-[20px] leading-[150%] tracking-[-0.02em] font-normal mb-6 1600:mb-15 1800:mb-10 3xl:max-w-[450px]">
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