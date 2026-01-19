export default function VerticalMarquee() {
    return (
        <div className="h-[300px] overflow-hidden bg-[#F7F8F4]">
            <div className="animate-marquee-y flex flex-col gap-20">
                {[...brands, ...brands].map((b, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center opacity-70 grayscale"
                    >
                        <img src={b.src} alt={b.name} className="h-10" />
                    </div>
                ))}
            </div>
        </div>
    )
}
