import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoTestimonialCard({ testimonial }) {

    return (
        <div className="bg-blue-500 text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
                {testimonial.title}
            </h3>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                </button>
            </div>
            {testimonial.avatar && (
                <Image
                    width={600}
                    height={500}
                    src={testimonial.avatar.src}
                    alt={testimonial.author}
                    className="absolute bottom-0 right-0 w-40 h-40 mb-10 md:w-56 object-contain z-10"
                />
            )}

            <div className="mt-10">
                <p className="font-semibold text-xs">{testimonial.author}</p>
                <p className="text-[10px] text-white/80">{testimonial.position}</p>
            </div>
            <div className="flex items-center gap-3 mt-auto pt-6 text-white/90 font-semibold">
                <span>{testimonial.company}</span>
                <span>✕</span>
                <span>Upthrust</span>
            </div>
        </div>
    );
}