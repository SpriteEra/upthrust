import GridTestimonialsWithVideo from "../common/GridTestimonialsWithVideo";
export default function ClientStories() {

    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "Data-Driven Growth Backed by Exceptional Support",
            quote: "I’m happy to say that in the last six months we’ve been able to grow our organic traffic by 463%. Our ad expenses are doing better than ever. We have also been able to improve our conversion rates by almost three times, all thanks to the incredible team at Upthrust.",
            author: "Rishabh Jain",
            position: "President - Corondo",
            avatar: "/google-ads/review/img1.webp",
            bgColor: "bg-white",
            borderColor: "border-orange"
        },
        {
            id: 2,
            rating: 5,
            title: " “Search Engine marketing, google ads, and a budget allocation plan by Upthrust proved to be really helpful.” ",
            author: "Gunjan",
            position: "Marketing Head, Hozor",
            hasAvatar: true,
            avatar: "/google-ads/review/img2.webp",
            avatarShape: {
                rounded: "xl",
                width: "w-16 3xl:w-25",
                height: "h-16 3xl:h-25"
            },
            bgColor: "bg-[#F6F6F6]",
            textColor: "text-black",
        },
        {
            id: 3,
            rating: 5,
            title: "How Upthrust Helped Audio Art Improve Conversions",
            quote: "From a company that had no experience in the entire marketing space to hitting benchmarks we'd never thought of. Univa's journey from here on is legendary. Regular discussions provided reassurance & sharpened our brain to keep the ball rolling.",
            author: "Gabriela, Founder",
            position: "A seamless, collaborative approach that brought everything together",
            company: "/google-ads/review/clogo1.webp",
            avatar: "/google-ads/review/img3.webp",
            hasVideo: true,
            video: "https://upthrustvideocdn.b-cdn.net/Ecom%20page%20assets/Gabriela-testimonial%20(1).mp4",
            arrowcss: "absolute -right-4 max-sm:-rotate-10 sm:-right-16 xl:-right-12 2xl:-right-19 3xl:-right-20 top-15 xl:top-10 3xl:top-12 size-19 2xl:size-26 3xl:size-32 ",
            bgColor: "bg-orange",
            textColor: "text-white",
            hasHighlight: true,
            highlightCss: 'absolute -bottom-2 w-45 h-2 left-1 3xl:left-7'
        },

        {
            id: 4,
            rating: 5,
            title: "How Upthrust Strengthened Univa’s Digital Marketing",
            author: "Chait Jain, CEO",
            position: "Built on strong strategic fundamentals",
            company: "/google-ads/review/clogo2.webp",
            hasVideo: true,
            hasAvatar: true,
            avatar: "/google-ads/review/img4.webp",
            hasVideo: true,
            video: "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Acadly.mp4",
            arrowcss: "absolute -right-4 max-sm:-rotate-10 sm:-right-16 xl:-right-12 3xl:-right-20 top-6 2xl:top-4 3xl:top-5 size-20 2xl:size-26 3xl:size-28 ",
            bgColor: "bg-orange",
            textColor: "text-white",
            hasHighlight: true,
            highlightCss: 'absolute top-19 3xl:top-22 w-45 h-2 left-7'
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
            avatar: "/google-ads/review/img5.webp",
            borderColor: "border-orange"
        },
        {
            id: 6,
            rating: 5,
            title: `"I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”`,
            author: "Pranath Sisodiya",
            position: "CEO,  Rescribe",
            avatar: "👤",
            avatar: "/google-ads/review/img6.webp",
            bgColor: "bg-[#F6F6F6]",
            textColor: "text-black"
        },
        {
            id: 7,
            rating: 5,
            title: `"I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”`,
            author: "Iti Dubey",
            avatar: "/google-ads/review/img7.webp",
            avatarShape: {
                rounded: "xl",
                width: "w-16",
                height: "h-16"
            },
            position: "Marketing Head at - Mukunda Foods",
            hasAvatar: true,
            bgColor: "bg-[#F6F6F6]",
            textColor: "text-black"
        },
        {
            id: 8,
            rating: 5,
            title: "How Upthrust Delivered High-Quality Leads for Rescribe",
            author: "Pranath Sisodiya, CEO",
            position: "Exceeding expectations with scalable results",
            company: "/google-ads/review/clogo3.webp",
            hasVideo: true,
            video: "https://cdn.upthrust.agency/UI/UX%20Assets/Testimonials/Rescribe%20Video.MP4",
            hasAvatar: true,
            avatar: "/google-ads/review/img8.webp",
            arrowcss: "absolute -right-4 max-sm:-rotate-10 sm:-right-6 xl:-right-4 3xl:-right-5 top-15 xl:top-8 3xl:top-12 size-20 2xl:size-26 3xl:size-28 ",
            bgColor: "bg-orange",
            textColor: "text-white",
            hasHighlight: true,
            highlightCss: 'absolute top-19 3xl:top-22 w-45 h-2 right-16'
        },
        {
            id: 9,
            rating: 5,
            title: "Consistent Lead Generation That Delivers",
            quote: `“We've been consistently generating high-quality leads with Upthrust, even on a limited budget. We're seeing around 45-50 leads per month, which is fantastic for a B2B company. Upthrust has been a real game-changer for Vega."`,
            author: "Gaurav",
            position: "Marketing Manager, Vega",
            bgColor: "bg-white",
            avatar: "/google-ads/review/img9.webp",
            borderColor: "border-orange"
        }
    ];

    const mobileTestimonials = [
        testimonials[0],
        testimonials[1],
        testimonials[2],
        testimonials[5],
        testimonials[6],
        testimonials[4],
    ]

    return (
        <GridTestimonialsWithVideo mobileTestimonialsSeq={mobileTestimonials} desktopTestimonialsSeq={testimonials} />
    );
}