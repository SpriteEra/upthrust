import Image from "next/image";
import { GrowthStoriesSliderContent } from "./GrowthStoriesSliderContent";

const Star = ({ fill = 0 }) => {
    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            className="w-full h-full"
        >
            {/* Empty star */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#E0E0E0"
                />
            </svg>

            {/* Filled star with clip */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    clipPath: `inset(0 ${100 - fill * 100}% 0 0)`
                }}
            >
                <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FFC107"
                />
            </svg>
        </div>
    );
};

const RatingStars = ({ rating = 0, max = 5, size = "size-6" }) => {
    // Function to snap to specific values: 0, 0.33, 0.5, 0.67, 1
    const snapToPartial = (decimal) => {
        if (decimal <= 0.12) return 0;      // 0% - empty
        if (decimal <= 0.37) return 0.33;   // ~33% - 1/3 filled (.25)
        if (decimal <= 0.62) return 0.5;    // 50% - half filled (.5)
        if (decimal <= 0.87) return 0.67;   // ~67% - 2/3 filled (.75)
        return 1;                            // 100% - full
    };

    return (
        <div className="flex gap-1">
            {Array.from({ length: max }).map((_, index) => {
                const starValue = index + 1;
                let fill = 0;

                if (rating >= starValue) {
                    // Full star
                    fill = 1;
                } else if (rating > index) {
                    // Partial star
                    const decimal = rating - index;
                    fill = snapToPartial(decimal);
                }

                return (
                    <div key={index} className={size}>
                        <Star fill={fill} />
                    </div>
                );
            })}
        </div>
    );
};

const growthStories = [
    {
        name: 'PRODUCT DESIGN',
        title: 'From ZERO brand awareness to 260% boost in lead gen. ',
        rating: 4.5,
        message: "From a company that had no experience in the entire marketing space to hitting benchmarks and getting engagement was a success for us. Regular discussions provided reassurance & showcased Upthrust's efforts to keep the ball rolling.",
        clientName: "Vaibhav Vashisht",
        position: "Co-Founder at Acadly",
        profile: "",
        bgColor1: "bg-[#F9F6FD]",
        bgColor2: "bg-[#F0E9FB]",

        images: [
            "/uiux/stories/story1/1.webp",
            "/uiux/stories/story1/2.webp",
            "/uiux/stories/story1/3.webp",
            "/uiux/stories/story1/4.webp",
            "/uiux/stories/story1/5.webp",
            "/uiux/stories/story1/6.webp",
            "/uiux/stories/story1/7.webp",
            "/uiux/stories/story1/8.webp",
            "/uiux/stories/story1/9.webp",
            "/uiux/stories/story1/10.webp",
            "/uiux/stories/story1/11.webp",
        ],
    },
    {
        name: 'AD CAMPAIGNS & LANDING PAGES',
        title: '200% Increase in Organic Traffic with Targeted Outreach & Domain Specific Campaigns.',
        rating: 4.25,
        message: "I'm impressed with how well Upthrust’s solution is working. I'm confident that we can continue to achieve great results as we grow.",
        clientName: "Pranath Sisodiya",
        position: "CEO,  Rescribe",
        profile: "",
        bgColor1: "bg-[#FDF6F6]",
        bgColor2: "bg-[#F7EDED]",
        images: [
            "/uiux/stories/story2/1.webp",
            "/uiux/stories/story2/2.webp",
            "/uiux/stories/story2/3.webp",
            "/uiux/stories/story2/4.webp",
            "/uiux/stories/story2/5.webp",
            "/uiux/stories/story2/6.webp",
            "/uiux/stories/story2/7.webp",
            "/uiux/stories/story2/8.webp",
            "/uiux/stories/story2/9.webp",
            "/uiux/stories/story2/10.webp",
            "/uiux/stories/story2/11.webp",
        ],
    },
    {
        name: 'BRAND IDENTITY',
        title: 'The redesign gave the brand the right brand identity & emotion.',
        rating: 4.75,
        message: "We had Upthrust basically for all that part and I really appreciated everybody's input in terms of conversion. I loved it. Everything fell into place and  I definitely appreciated Upthrust and everything they did.",
        clientName: "Gabriela",
        position: "Founder- AudioArt",
        profile: "",
        bgColor1: "bg-[#FCF0FC]",
        bgColor2: "bg-[#FEFBFE]",
        images: [
            "/uiux/stories/story3/1.webp",
            "/uiux/stories/story3/2.webp",
            "/uiux/stories/story3/3.webp",
            "/uiux/stories/story3/4.webp",
            "/uiux/stories/story3/5.webp",
            "/uiux/stories/story3/6.webp",
            "/uiux/stories/story3/7.webp",
            "/uiux/stories/story3/8.webp",
            "/uiux/stories/story3/9.webp",
            "/uiux/stories/story3/10.webp",
            "/uiux/stories/story3/11.webp",
            "/uiux/stories/story3/12.webp",
        ],
    },

    {
        name: 'SOCIAL MEDIA & UI/UX DESIGN',
        title: 'Linkbycar earned 100+ loyal customers through a user-focused UI/UX design',
        rating: 5.0,
        message: 'Our collaboration with Halo Lab’s exceptional end-to-end service resulted in a stunning SaaS platform with seamless UI/UX design.',
        clientName: "Saidou Soumare",
        position: "CTO at Linkbycar",
        profile: "",
        bgColor1: "bg-[#F8EEE3]",
        bgColor2: "bg-[#FEFAF5]",
        images: [
            "/uiux/stories/story4/1.webp",
            "/uiux/stories/story4/2.webp",
            "/uiux/stories/story4/3.webp",
            "/uiux/stories/story4/4.webp",
            "/uiux/stories/story4/5.webp",
            "/uiux/stories/story4/6.webp",
            "/uiux/stories/story4/7.webp",
            "/uiux/stories/story4/8.webp",
            "/uiux/stories/story4/9.webp",
        ],
    },

]
const GrowthStories = () => {
    return (
        <div className='max-w-[90%] mx-auto w-full flex flex-col gap-10 mt-10'>
            {
                growthStories?.map((item, index) => (
                    <div className={`${item.bgColor1} p-6 3xl:p-10 rounded-3xl 3xl:rounded-4xl w-full`} key={index}>
                        <div
                            className={`${item.bgColor2} flex w-full rounded-3xl 3xl:rounded-4xl items-stretch`}
                        >

                            <div className='p-6 3xl:p-10 w-[40%] h-full flex flex-col'>
                                <span className='text-sm 3xl:text-base uppercase'>{item.name}</span>
                                <h5 className='font-semibold my-6 3xl:my-8 text-3xl 3xl:text-4xl'>{item.title}</h5>

                                <RatingStars rating={item.rating} size="size-5 3xl:size-5.5" />

                                <p className="text-xl 3xl:text-2xl mt-5 mb-8">&ldquo;{item.message}&rdquo;</p>

                                <div className="flex items-center gap-4 3xl:gap-5">
                                    <div>
                                        <Image width={84} height={84} className="size-16 3xl:size-21 rounded-full object-contain" alt="profile" src={'/ecom/profile/profile1.webp'} />
                                    </div>
                                    <div className="flex flex-col justify-center h-full gap-1 3xl:gap-2">
                                        <p className="font-semibold text-lg 3xl:text-xl">{item.clientName}</p>
                                        <span className="text-sm 3xl:text-base">{item.position}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[60%] pl-10 flex items-stretch">

                                <GrowthStoriesSliderContent images={item.images} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GrowthStories