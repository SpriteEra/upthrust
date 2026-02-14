// import VideoTestimonialCard from "./VideoTestimonialCard";
// import QuoteTestimonialCard from "./QuoteTestimonialCard";
// import ShortTestimonialCard from "./ShortTestimonialCard";
import imgval from "./AmyGrucela.png"
import QuoteTestimonialCard from "./Atul3";
import ShortTestimonialCard from "./Atul4";
import VideoTestimonialCard from "./Atul5";

export default function ClientTestimonials() {

    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "Stellar Growth Backed by Exceptional Support",
            quote: "I'm happy to say that in the last six months we've been able to grow our organic traffic by 463%. Our ad expenses are King & Dollar. Right now, We have to offer a lot of thanks to the folks at Upthrust. They've been pretty incredible when it comes to their rates by almost three times, all thanks to the incredible team at Upthrust.",
            author: "Rishabh Jain",
            position: "President - Corondo",
            avatar: imgval,
            bgColor: "bg-white",
            borderColor: "border-red-500"
        },
        {
            id: 2,
            rating: 5,
            title: "How Upthrust Strengthened Univa's Digital Marketing",
            quote: "From a company that had no experience in the entire marketing space to hitting benchmarks we'd never thought of. Univa's journey from here on is legendary. Regular discussions provided reassurance & sharpened our brain to keep the ball rolling.",
            author: "Chet Jan, CEO",
            position: "Excutive VP, Univa",
            company: "univa",
            avatar: imgval,
            hasVideo: true,
            bgColor: "bg-blue-500",
            textColor: "text-white"
        },
        {
            id: 3,
            rating: 5,
            title: "Search Engine marketing, google ads, and a budget allocation plan by Upthrust proved to be really helpful.",
            author: "Gunjan",
            position: "Marketing Head, Hozor",
            hasAvatar: true,
            avatar: imgval,
            avatarShape: {
                rounded: "xl",
                width: "w-16",
                height: "h-16"
            },
            bgColor: "bg-yellow-400",
            textColor: "text-black"
        },
        {
            id: 4,
            rating: 5,
            title: "How Upthrust Helped Audio Art Improve Conversions",
            author: "Garima, Founder",
            position: "A leading audio agency building world...",
            company: "AudioArt",
            hasVideo: true,
            hasAvatar: true,
            avatar: imgval,
            bgColor: "bg-blue-500",
            textColor: "text-white"
        },
        {
            id: 5,
            rating: 5,
            title: "Reaching Benchmarks with the Right Cadence",
            quote: "From a company that had no experience in the entire marketing space to hitting benchmarks we'd never thought of. Univa's journey from here on is legendary. Regular discussions provided reassurance & sharpened our brain to keep the ball rolling.",
            author: "Yatishav Vishnish",
            position: "Co-Founder at Auelly",
            avatar: "👤",
            bgColor: "bg-white",
            avatar: imgval,
            borderColor: "border-red-500"
        },
        {
            id: 6,
            rating: 5,
            title: "I'm impressed with how well Upthrust's solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.",
            author: "Pranath Bidodra",
            position: "CEO, Roointdo",
            avatar: "👤",
            avatar: imgval,
            bgColor: "bg-green-500",
            textColor: "text-white"
        },
        {
            id: 7,
            rating: 5,
            title: "I'm impressed with how well Upthrust's solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.",
            author: "RJ Dubey",
            avatar: imgval,
            avatarShape: {
                rounded: "xl",
                width: "w-16",
                height: "h-16"
            },
            position: "Marketing Head at Upthrust",
            hasAvatar: true,
            bgColor: "bg-yellow-400",
            textColor: "text-black"
        },
        {
            id: 8,
            rating: 5,
            title: "How Upthrust Delivered High-Quality Leads for Rescribe",
            author: "Marketing Head & Co-founder, Rescribe",
            company: "rescribe",
            hasVideo: true,
            hasAvatar: true,
            avatar: imgval,
            bgColor: "bg-blue-500",
            textColor: "text-white"
        },
        {
            id: 9,
            rating: 5,
            title: "Consistent Lead Generation That Delivers",
            quote: "We've been consistently generating high-quality leads with Upthrust, even on a limited budget. The team is responsive and proactive, which is fantastic for a B2B company. Upthrust has been a true game changer for Virgio.",
            author: "Gaurav",
            position: "Marketing Manager, Virgio",
            avatar: "👤",
            bgColor: "bg-white",
            avatar: imgval,
            borderColor: "border-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-3">
                        What Our Clients Say
                    </h1>
                    <p className="text-black text-xl">
                        We asked clients what changed after working with us. Below are their words.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[0, 1, 2].map((colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-6">
                            {testimonials
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

            </div>
        </div>
    );
}