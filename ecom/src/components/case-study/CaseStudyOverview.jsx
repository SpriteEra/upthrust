/*
 * Desktop Figma (1920px):
 *   Container: flex items-start justify-between w-[1668px]
 *   Left:  w-[707px] text-[48px] font-semibold leading-[1.3] tracking-[-0.96px]
 *   Right: w-[681px] flex-col gap-[40px]
 *     Body: text-[20px] leading-[1.5] tracking-[-0.4px] w-[684px]
 *     Metadata row: flex items-center justify-between
 *       Each chip: flex-col gap-[10px]
 *         Label: text-[16px] text-[#343535] tracking-[-0.32px]
 *         Value: text-[24px] font-semibold tracking-[-0.48px] capitalize
 *
 * Mobile Figma (390px):
 *   Container: flex-col gap-[69px] w-[350px]
 *   Headline: text-[32px] font-semibold leading-[1.3] tracking-[-0.64px]
 *   Body: text-[18px] leading-[1.5] tracking-[-0.36px]
 *   Metadata: flex-col gap-[30px]
 *     Row 1: flex items-start – Client (w-[221px] pr-[32px]) + Industry
 *     Row 2: Duration standalone
 */
export default function CaseStudyOverview({
  overviewHeadline = "",
  overviewBody = "",
  client = "",
  industry = "",
  duration = "",
}) {
  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div className="w-full
    max-w-[1668px]
    mx-auto
    flex
    flex-col
    md:flex-row
    md:items-start
    md:gap-[170px]" style={{ gap: undefined }}>

        {/* ── Left: bold headline ── */}
        <div className="md:w-[707px] mb-[69px] md:mb-0">
          <h2
            className="text-[#010202] font-semibold"
            style={{
              fontSize: "48px",
              lineHeight: 1.3,
              letterSpacing: "clamp(-0.64px, -0.05vw, -0.96px)",
            }}
          >
            {overviewHeadline}
          </h2>
        </div>

        {/* ── Right: body + metadata ── */}
        <div className="md:w-[684px] flex flex-col" style={{ gap: 40 }}>
          {/* Body paragraphs */}
          <div className="flex flex-col" style={{ gap: "1em" }}>
            {(overviewBody || "").split("\n").filter(Boolean).map((para, i) => (
              <p
                key={i}
                className="text-[#010202] m-0"
                style={{
                  fontSize: "clamp(18px, 1.04vw, 20px)",
                  lineHeight: 1.5,
                  letterSpacing: "clamp(-0.36px, -0.02vw, -0.4px)",
                  width: "100%",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* ── Metadata chips ── */}
          {/* Desktop: single row, space-between */}
          <div className="hidden md:flex md:items-center md:justify-between w-full">
            <MetaChip label="Client" value={client} extraPr={32} />
            <MetaChip label="Industry" value={industry} />
            <MetaChip label="Duration" value={duration} extraPr={32} />
          </div>

          {/* Mobile: first row (Client + Industry), then Duration below */}
          <div className="md:hidden flex flex-col" style={{ gap: 30 }}>
            <div className="flex items-start">
              <div style={{ width: 221, paddingRight: 32 }}>
                <MetaChip label="Client" value={client} />
              </div>
              <MetaChip label="Industry" value={industry} />
            </div>
            <MetaChip label="Duration" value={duration} />
          </div>
        </div>

      </div>
    </div>
  );
}

function MetaChip({ label, value, extraPr }) {
  return (
    <div
      className="flex flex-col"
      style={{ gap: 10, paddingRight: extraPr || 0 }}
    >
      <span
        className="text-[#343535]"
        style={{ fontSize: 16, lineHeight: 1.5, letterSpacing: "-0.32px" }}
      >
        {label}
      </span>
      <span
        className="text-[#010202] font-semibold capitalize"
        style={{ fontSize: 24, lineHeight: 1.5, letterSpacing: "-0.48px" }}
      >
        {value}
      </span>
    </div>
  );
}
