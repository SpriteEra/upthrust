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
            avatar: "/google-ads/review/img1.png",
            bgColor: "bg-white",
            borderColor: "border-red-500"
        },
        {
            id: 2,
            rating: 5,
            title: " “Search Engine marketing, google ads, and a budget allocation plan by Upthrust proved to be really helpful.” ",
            author: "Gunjan",
            position: "Marketing Head, Hozor",
            hasAvatar: true,
            avatar: "/google-ads/review/img2.png",
            avatarShape: {
                rounded: "xl",
                width: "w-16",
                height: "h-16"
            },
            bgColor: "bg-yellow-400",
            textColor: "text-black"
        },
        {
            id: 3,
            rating: 5,
            title: "How Upthrust Helped Audio Art Improve Conversions",
            quote: "From a company that had no experience in the entire marketing space to hitting benchmarks we'd never thought of. Univa's journey from here on is legendary. Regular discussions provided reassurance & sharpened our brain to keep the ball rolling.",
            author: "Gabriela, Founder",
            position: "A seamless, collaborative approach that brought everything together",
            company: "/google-ads/review/clogo1.png",
            avatar: "/google-ads/review/img3.png",
            hasVideo: true,
            bgColor: "bg-blue-500",
            textColor: "text-white",
            video: ""
        },

        {
            id: 4,
            rating: 5,
            title: "How Upthrust Strengthened Univa’s Digital Marketing",
            author: "Chait Jain, CEO",
            position: "Built on strong strategic fundamentals",
            company: "/google-ads/review/clogo2.png",
            hasVideo: true,
            hasAvatar: true,
            avatar: "/google-ads/review/img4.png",
            bgColor: "bg-blue-500",
            textColor: "text-white",
            video: ""
        },
        {
            id: 5,
            rating: 5,
            title: "Reaching Benchmarks with the Right Guidance",
            quote: "“From a company that had no experience in the entire marketing space to hitting benchmarks and getting engagement was a success for us. Regular discussions provided reassurance & showcased Upthrust's efforts to keep the ball rolling.”",
            author: "Vaibhav Vashisht",
            position: "Co-Founder at Acadly",
            avatar: "👤",
            bgColor: "bg-white",
            avatar: "/google-ads/review/img5.png",
            borderColor: "border-red-500"
        },
        {
            id: 6,
            rating: 5,
            title: "“ I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow. ”",
            author: "Pranath Sisodiya",
            position: "CEO,  Rescribe",
            avatar: "👤",
            avatar: "/google-ads/review/img6.png",
            bgColor: "bg-green-500",
            textColor: "text-white"
        },
        {
            id: 7,
            rating: 5,
            title: `"I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”`,
            author: "Iti Dubey",
            avatar: "/google-ads/review/img7.png",
            avatarShape: {
                rounded: "xl",
                width: "w-16",
                height: "h-16"
            },
            position: "Marketing Head at - Mukunda Foods",
            hasAvatar: true,
            bgColor: "bg-yellow-400",
            textColor: "text-black"
        },
        {
            id: 8,
            rating: 5,
            title: "How Upthrust Delivered High-Quality Leads for Rescribe",
            author: "Pranath Sisodiya, CEO",
            position: "Exceeding expectations with scalable results",
            company: "/google-ads/review/clogo3.png",
            hasVideo: true,
            hasAvatar: true,
            avatar: "/google-ads/review/img8.png",
            bgColor: "bg-blue-500",
            textColor: "text-white",
            video: ""
        },
        {
            id: 9,
            rating: 5,
            title: "Consistent Lead Generation That Delivers",
            quote: `“We've been consistently generating high-quality leads with Upthrust, even on a limited budget. We're seeing around 45-50 leads per month, which is fantastic for a B2B company. Upthrust has been a real game-changer for Vega."`,
            author: "Gaurav",
            position: "Marketing Manager, Vega",
            bgColor: "bg-white",
            avatar: "/google-ads/review/img9.png",
            borderColor: "border-red-500"
        }
    ];

    return (
        <div className="min-h-screen max-w-[90%] 3xl:max-w-[85%] mx-auto py-16">

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
    );
}