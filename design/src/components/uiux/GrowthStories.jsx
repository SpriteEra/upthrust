import Image from "next/image";
import { GrowthStoriesSliderContent } from "./GrowthStoriesSliderContent";
import RatingStars from "@/common/Rating";
import { CutCornerBackground2 } from "./CutBox2";

const growthStories = [
    {
        name: "PRODUCT DESIGN",
        title: "From ZERO brand awareness to 260% boost in lead gen. ",
        rating: 4.5,
        message:
            "From a company that had no experience in the entire marketing space to hitting benchmarks and getting engagement was a success for us. Regular discussions provided reassurance & showcased Upthrust's efforts to keep the ball rolling.",
        clientName: "Vaibhav Vashisht",
        position: "Co-Founder at Acadly",
        profile: "/uiux/profile/vaibhav-vashisht.webp",
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
        name: "AD CAMPAIGNS & LANDING PAGES",
        title:
            "200% Increase in Organic Traffic with Targeted Outreach & Domain Specific Campaigns.",
        rating: 4.25,
        message:
            "I'm impressed with how well Upthrust’s solution is working. I'm confident that we can continue to achieve great results as we grow.",
        clientName: "Pranath Sisodiya",
        position: "CEO,  Rescribe",
        profile: "/uiux/profile/prasanth-sisodiya.webp",
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
        name: "BRAND IDENTITY",
        title: "The redesign gave the brand the right brand identity & emotion.",
        rating: 4.75,
        message:
            "We had Upthrust basically for all that part and I really appreciated everybody's input in terms of conversion. I loved it. Everything fell into place and  I definitely appreciated Upthrust and everything they did.",
        clientName: "Gabriela",
        position: "Founder- AudioArt",
        profile: "/uiux/profile/gabriela.webp",
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
        name: "SOCIAL MEDIA & UI/UX DESIGN",
        title:
            "Beyond had to establish itself in a market & stand out from competition.",
        rating: 5.0,
        message:
            "I'm impressed with how well Upthrust’s solution is working. The lead quality has exceeded my expectations. I'm confident that we can continue to achieve great results as we grow.”",
        clientName: "Iti Dubey",
        position: "CMarketing Head at - Mukunda Foods",
        profile: "/uiux/profile/iti-dubey.webp",
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
];
const GrowthStories = () => {
    return (
        <div className="max-sm:w-full sm:max-w-[90%] sm:mx-auto w-full flex flex-col gap-6 lg:gap-10 3xl:gap-12 mt-10">
            {growthStories?.map((item, index) => (
                <div
                    className={`${item.bgColor1} p-4 sm:p-6 3xl:p-12.5 rounded-xl lg:rounded-3xl 3xl:rounded-4xl w-full`}
                    key={index}
                >
                    <div
                        className={`${item.bgColor2} max-lg:bg-transparent! flex w-full max-lg:flex-col-reverse lg:rounded-3xl 3xl:rounded-4xl items-stretch`}
                    >
                        <div className={`${item.bgColor2} lg:bg-none! p-4 sm:p-6 max-2xl:pr-0 3xl:p-12.5 lg:w-[40%] h-full flex flex-col lg:rounded-l-3xl 3xl:rounded-l-4xl`}>
                            <div className="max-w-[510px]">

                                <span className="lg:text-sm 3xl:text-base uppercase">
                                    {item.name}
                                </span>
                                <p className="font-semibold my-4 2xl:my-6 3xl:my-8 3xl:mb-10 text-4xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:leading-11 tracking-[-0.02em]">
                                    {item.title}
                                </p>

                                <RatingStars
                                    rating={item.rating}
                                    size="size-5.5 lg:size-5 3xl:size-6"
                                />

                                <p className="text-lg 2xl:text-xl 3xl:text-2xl mt-3 2xl:mt-5 3xl:mt-7 mb-5 2xl:mb-8 3xl:mb-10 tracking-[-0.02em]">
                                    &ldquo;{item.message}&rdquo;
                                </p>

                                <div className="flex items-center gap-4 3xl:gap-5">
                                    <div>
                                        <Image
                                            width={84}
                                            height={84}
                                            className="size-16 lg:size-14 2xl:size-16 3xl:size-19 rounded-full object-cover bg-white"
                                            alt={item.clientName}
                                            src={item.profile}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center h-full gap-1 3xl:gap-2">
                                        <p className="font-semibold text-xl lg:text-lg 3xl:text-xl leading-[-0.02em]">
                                            {item.clientName}
                                        </p>
                                        <span className="lg:text-sm 3xl:text-base">
                                            {item.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[60%] max-md:aspect-5/4 max-lg:aspect-video lg:pl-10 flex items-stretch">
                            <CutCornerBackground2 bgColor="none" mirror={true} cutWidth={15} cutHeight={20} cutRadius={2}>
                                <GrowthStoriesSliderContent images={item.images} />
                            </CutCornerBackground2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GrowthStories;