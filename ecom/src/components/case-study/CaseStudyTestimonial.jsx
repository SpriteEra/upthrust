/*
 * Desktop Figma (1920px):
 *   Full-bleed black section: bg-black w-full h-[323px] px-[126px]
 *   Inner: max-w-[1680px] py-[100px] h-[323px] flex items-start justify-center flex-col
 *   Quote: text-[30px] font-semibold leading-[1.5] tracking-[-0.6px] text-white w-[1674px]
 *   Attribution: text-[18px] leading-[1.5] tracking-[-0.36px] text-white/80
 *
 * Mobile Figma (390px):
 *   bg-black h-[528px] p-[40px] flex items-center justify-center
 *   Inner: flex-col gap-[31px] w-[310px]
 *   Quote: text-[24px] font-semibold leading-[1.5] tracking-[-0.48px] w-[281px] h-[379px]
 *   Attribution: text-[16px] tracking-[-0.32px] text-white/80 w-[309px]
 */
export default function CaseStudyTestimonial({
  quote = "",
  attribution = "",
}) {
  if (!quote) return null;

  return (
    <div className="w-full bg-[#010202]">

      {/* ── Desktop ── */}
      <div
        className="hidden md:flex md:flex-col md:justify-center"
        style={{ height: 323, padding: "0 126px" }}
      >
        <div
          className="flex flex-col max-w-[1680px] w-full mx-auto"
          style={{ gap: 31 }}
        >
          <p
            className="text-white font-semibold m-0"
            style={{
              fontSize: 30,
              lineHeight: 1.5,
              letterSpacing: "-0.6px",
              width: "100%",
            }}
          >
            {quote}
          </p>
          {attribution && (
            <span
              className="text-white/80"
              style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.36px" }}
            >
              {attribution}
            </span>
          )}
        </div>
      </div>

      {/* ── Mobile ── */}
      <div
        className="md:hidden flex items-center justify-center"
        style={{ height: 528, padding: 40 }}
      >
        <div className="flex flex-col" style={{ gap: 31, width: 310 }}>
          <p
            className="text-white font-semibold m-0"
            style={{
              fontSize: 24,
              lineHeight: 1.5,
              letterSpacing: "-0.48px",
              width: 281,
            }}
          >
            {quote}
          </p>
          {attribution && (
            <span
              className="text-white/80"
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: "-0.32px",
                width: 309,
              }}
            >
              {attribution}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
