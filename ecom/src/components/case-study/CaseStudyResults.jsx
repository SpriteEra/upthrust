/*
 * Desktop Figma (1920px):
 *   flex items-start justify-between w-[1668px]
 *   Left: text-[48px] font-semibold leading-[1.3] tracking-[-0.96px] whitespace-nowrap
 *   Right: w-[681px]
 *     Body: text-[20px] leading-[1.5] tracking-[-0.4px] w-[684px]
 *
 * Mobile Figma (390px):
 *   flex-col gap-[60px] w-[350px]
 *   Heading: text-[32px] font-semibold leading-[1.3] tracking-[-0.64px]
 *   Body: text-[18px] leading-[1.5] tracking-[-0.36px]
 */
export default function CaseStudyResults({ heading = "", body = "" }) {
  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div className="w-full max-w-[1668px] mx-auto">

        {/* ── Desktop ── */}
        <div className="hidden md:flex md:items-start md:justify-between">
          <div className="shrink-0">
            <h2
              className="text-[#010202] font-semibold m-0 whitespace-nowrap"
              style={{ fontSize: 48, lineHeight: 1.3, letterSpacing: "-0.96px" }}
            >
              {heading}
            </h2>
          </div>
          <div style={{ width: 681 }}>
            <p
              className="text-[#010202] m-0"
              style={{ fontSize: 20, lineHeight: 1.5, letterSpacing: "-0.4px", width: 684 }}
            >
              {body}
            </p>
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex flex-col" style={{ gap: 60 }}>
          <h2
            className="text-[#010202] font-semibold m-0 whitespace-nowrap"
            style={{ fontSize: 32, lineHeight: 1.3, letterSpacing: "-0.64px" }}
          >
            {heading}
          </h2>
          <p
            className="text-[#010202] m-0"
            style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.36px" }}
          >
            {body}
          </p>
        </div>

      </div>
    </div>
  );
}
