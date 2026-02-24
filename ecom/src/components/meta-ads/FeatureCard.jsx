import Image from "next/image";

const cards = [
    {
        image: "/meta-ads/slidecard/one1.png",
        title: (
            <>
                Most talented <span className="font-instrument italic">Meta</span> teams
            </>
        ),
    },
    {
        image: "/meta-ads/slidecard/one.png",
        title: (
            <>
                <span className="font-instrument italic">Ultra-fast</span> turnaround times
            </>
        ),
    },
    {
        image: "/meta-ads/slidecard/two.png",
        title: <>Flexible contracts</>,
    },
];

export default function FeatureCards() {
    return (

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden group"
                >
                    {/* Image */}
                    <div className="relative w-full h-[420px]">
                        <Image
                            src={card.image}
                            alt=""
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-black text-white px-6 py-6">
                        <h3 className="text-[18px] md:text-[20px] font-medium">
                            {card.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>

    );
}