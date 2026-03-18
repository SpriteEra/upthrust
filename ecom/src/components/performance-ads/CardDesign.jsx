import Image from "next/image";

export default function CardDesign() {
    const features = [
        {
            title: "Not Set And Forget",
            desc: "Daily campaign management. We actually work on your account.",
            icon: "/performance-agency/icons/icon1.png",
        },
        {
            title: "Not Guesswork",
            desc: "20+ ad variants tested monthly. Data decides, not egos.",
            icon: "/performance-agency/icons/icon2.png",
        },
        {
            title: "Not Manual",
            desc: "AI-powered bidding and research. Faster, cheaper, smarter.",
            icon: "/performance-agency/icons/icon3.png",
        },
        {
            title: "Not A Black Box",
            desc: "Live dashboards. Weekly calls. You always know what's happening.",
            icon: "/performance-agency/icons/icon4.png",
        },
        {
            title: "Not Vanity Metrics",
            desc: "We optimize for profit. Not impressions, not likes, revenue.",
            icon: "/performance-agency/icons/icon5.png",
        },
        {
            title: "Not Locked In",
            desc: "Month-to-month. Fire us anytime. (You won't want to.)",
            icon: "/performance-agency/icons/icon6.png",
        },
    ];

    return (
        <section className="max-w-[90%] mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-3">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`
              flex flex-col items-center text-center px-8 py-10
              border-gray-300
              ${index % 3 !== 2 ? "md:border-r" : ""}
              ${index < 3 ? "border-b" : ""}
            `}
                    >
                        {/* Icon */}
                        <Image
                            width={70}
                            height={70}
                            src={item.icon}
                            alt={item.title}
                            className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-15 3xl:h-15 mb-4"
                        />

                        {/* Title */}
                        <h3 className="font-semibold leading-[150%] tracking-[-0.02em] text-2xl mb-2">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-black max-w-sm text-lg leading-[150%] tracking-[-0.02em]  font-normal">
                            {item.desc}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}