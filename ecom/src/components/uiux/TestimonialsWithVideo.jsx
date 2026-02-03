import Image from "next/image";
import { Play } from "lucide-react";
import RatingStars from "@/common/Rating"

export const testimonials = [
    {
        rating: 4.9,
        text: "I loved it. Everything fell into place and I definitely appreciated Upthrust and everything they did.",
        name: "Gabriela",
        role: "Founder, Audio Art",
        avatar: "/ecom/profile/profile1.webp",
        avatarAlt: "Gabriela founder of Audio Art",
        videoUrl: "https://example.com/video-gabriela.mp4",
    },
    {
        rating: 4.5,
        text: "I'm impressed with how well Upthrust’s solution is working. I'm confident that we can continue to achieve great results as we grow.",
        name: "Pranath Sisodiya",
        role: "CEO, Rescribe",
        avatar: "/ecom/profile/profile2.webp",
        avatarAlt: "Pranath Sisodiya CEO of Rescribe",
        videoUrl: "https://example.com/video-pranath.mp4",
    },
    {
        rating: 5.0,
        text: "What clicked for me was your ability to take ownership. You are clear about the process, which is rare in agencies.",
        name: "Iti Dubey",
        role: "Marketing Head, Mukunda Foods",
        avatar: "/ecom/profile/profile3.webp",
        avatarAlt: "Iti Dubey Marketing Head at Mukunda Foods",
        videoUrl: "https://example.com/video-iti.mp4",
    },
    {
        rating: 5.0,
        text: "We were a company that had no experience in the marketing space. Upthrust helped us hit the right benchmarks.",
        name: "Vaibhav Vashisht",
        role: "Co-Founder, at Acadia",
        avatar: "/ecom/profile/profile4.webp",
        avatarAlt: "Vaibhav Vashisht Co-Founder at Acadia",
        videoUrl: "https://example.com/video-vaibhav.mp4",
    },
    {
        rating: 5.0,
        text: "We wanted someone who had a fundamental thought process in terms of approaching overall digital marketing when we found Upthrust.",
        name: "Chait Jain",
        role: "CEO, Univa",
        avatar: "/ecom/profile/profile5.webp",
        avatarAlt: "Chait Jain CEO of Univa",
        videoUrl: "https://example.com/video-chait.mp4",
    },
    {
        rating: 5.0,
        text: "We’re seeing around 45–50 leads per month, which is fantastic for a B2B company. Upthrust has been a real game-changer for Vega.",
        name: "Gaurav",
        role: "Marketing Manager, Vega",
        avatar: "/ecom/profile/profile1.webp",
        avatarAlt: "Gaurav Marketing Manager at Vega",
        videoUrl: "https://example.com/video-gaurav.mp4",
    },
];




export default function TestimonialsWithVideo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-7 3xl:gap-8 mt-10 sm:mt-20 3xl:mt-30 max-lg:px-2">
            {testimonials.map((item, i) => (
                <div
                    key={i}
                    className=" rounded-2xl max-lg:px-4 p-6 lg:p-8 3xl:p-6 bg-[#f9f9f9] flex flex-col"
                >
                    <div className="flex gap-3 items-center">
                        <span className="text-2xl 3xl:text-3xl font-semibold ">{item.rating.toPrecision(2)}</span>
                        <RatingStars
                            rating={5}
                            fillColor="#ff3b00"
                            size="size-5 lg:size-4 3xl:size-5"
                        />

                    </div>


                    <hr className="my-1 lg:my-4 text-black/30" />
                    <div className="h-full justify-between flex flex-col">

                        {/* Quote */}
                        <p className="text-2xl lg:text-xl 3xl:text-2xl font-medium mt-6 lg:mt-10 3xl:mt-14">
                            “{item.text}”
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={item.avatar}
                                    alt={item.avatarAlt}
                                    width={60}
                                    height={60}
                                    className="rounded-full size-12 3xl:size-15 object-cover border border-black"
                                />
                                <div>
                                    <p className="text-sm 3xl:text-base font-semibold">{item.name}</p>
                                    <p className="text-sm 3xl:text-base">{item.role}</p>
                                </div>
                            </div>

                            {/* Video Play */}
                            <a
                                href={item.videoUrl}
                                target="_blank"
                                className="size-12 3xl:size-15 rounded-full bg-(--red) flex items-center justify-center text-white"
                            >
                                <Play size={16} fill="white" />
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}
