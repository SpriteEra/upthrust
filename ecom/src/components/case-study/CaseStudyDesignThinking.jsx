/*
 * Desktop Figma (1920px):
 *   flex items-start justify-between w-[1668px]
 *   Left: flex-col gap-[20px]
 *     Badge: h-[32px] px-[16px] pb-[6px] pt-[8px] rounded-[9999px] text-[16px] bg-[#f5f5f5]
 *     Heading: text-[48px] font-semibold leading-[1.3] tracking-[-0.96px] whitespace-nowrap
 *   Right: pt-[40px] w-[681px]
 *     Body: text-[20px] leading-[1.5] tracking-[-0.4px] w-[684px]
 *
 * Mobile Figma (390px):
 *   flex-col gap-[50px] w-[350px]
 *   Badge + Heading: text-[32px] tracking-[-0.64px]
 *   Body pt-[40px]: text-[18px] tracking-[-0.36px]
 */
export default function CaseStudyDesignThinking({
  label = "",
  heading = "",
  body = "",
}) {
  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div className="w-full max-w-[1668px] mx-auto">

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex md:items-start md:justify-between">
          {/* Left */}
          <div className="flex flex-col shrink-0" style={{ gap: 20 }}>
            {label && (
              <span
                className="bg-[#f5f5f5] text-[#010202] self-start"
                style={{
                  height: 32, padding: "8px 16px 6px", borderRadius: 9999,
                  fontSize: 16, lineHeight: 1.5, letterSpacing: "-0.32px",
                  display: "flex", alignItems: "center", whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            )}
            <h2
              className="text-[#010202] font-semibold m-0 whitespace-nowrap"
              style={{ fontSize: 48, lineHeight: 1.3, letterSpacing: "-0.96px" }}
            >
              {heading}
            </h2>
          </div>
          {/* Right */}
          <div style={{ width: 681, paddingTop: 40 }}>
            <p
              className="text-[#010202] m-0"
              style={{ fontSize: 20, lineHeight: 1.5, letterSpacing: "-0.4px", width: 684 }}
            >
              {body}
            </p>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden flex flex-col" style={{ gap: 50 }}>
          <div className="flex flex-col" style={{ gap: 20 }}>
            {label && (
              <span
                className="bg-[#f5f5f5] text-[#010202] self-start"
                style={{
                  height: 32, padding: "8px 16px 6px", borderRadius: 9999,
                  fontSize: 16, lineHeight: 1.5, letterSpacing: "-0.32px",
                  display: "flex", alignItems: "center", whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            )}
            <h2
              className="text-[#010202] font-semibold m-0 whitespace-nowrap"
              style={{ fontSize: 32, lineHeight: 1.3, letterSpacing: "-0.64px" }}
            >
              {heading}
            </h2>
          </div>
          <div style={{ paddingTop: 40 }}>
            <p
              className="text-[#010202] m-0"
              style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.36px" }}
            >
              {body}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
