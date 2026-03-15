import Image from "next/image";

export default function AdSpentSteps({ mobileImage = "/meta-ads/circular/adspent-graph-mobile.webp", desktopImage = "/meta-ads/circular/adspent-graph.webp" }) {
    return (
        <div className="bg-black text-white"
        >
            <div className="max-w-6xl 2xl:max-w-7xl 1600:max-w-340 1800:max-w-[1550px] mx-auto py-20 max-lg:px-2.5">
                <Image src={mobileImage} quality={100} width={1600} height={900} className="w-full h-full object-contain select-none pointer-events-none md:hidden " alt="Ad-Spent Graph" />
                <Image src={desktopImage} quality={100} width={1600} height={900} className="w-full h-full object-contain select-none pointer-events-none max-md:hidden" alt="Ad-Spent Graph" />
            </div>
        </div>
    );
}
