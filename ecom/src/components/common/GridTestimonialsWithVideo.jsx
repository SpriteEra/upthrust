import React from 'react'
import VideoTestimonialCard from './VideoTestimonialCard';
import QuoteTestimonialCard from './QuoteTestimonialCard';
import ShortTestimonialCard from './ShortTestimonialCard';

const GridTestimonialsWithVideo = ({ mobileTestimonialsSeq, desktopTestimonialsSeq }) => {
    return (
        <div className="min-h-screen max-w-[90%] 3xl:max-w-[85%] mx-auto py-16 3xl:py-20">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-lg:hidden">
                {[0, 1, 2].map((colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                        {desktopTestimonialsSeq
                            .filter((_, i) => i % 3 === colIndex)
                            .map((testimonial) => {
                                if (testimonial.hasVideo) {
                                    return <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                                }

                                if (testimonial.quote) {
                                    return <QuoteTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                                }

                                return <ShortTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                            })}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 lg:hidden">
                {mobileTestimonialsSeq
                    .map((testimonial) => {
                        if (testimonial.hasVideo) {
                            return <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                        }

                        if (testimonial.quote) {
                            return <QuoteTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                        }

                        return <ShortTestimonialCard key={testimonial.id} testimonial={testimonial} />;
                    })}
            </div>


        </div>
    )
}

export default GridTestimonialsWithVideo