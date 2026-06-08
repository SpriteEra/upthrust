/*
 * Desktop Figma values (1920px canvas):
 *   Tags:        top=281px, left=126px
 *   Image:       top=364px, left=126px, width=1668px, height=938px, border-radius=25.5px
 *   White panel: top=255px, right=126px, width=1003px, min-height=986px, border-bottom-left-radius=24px
 *
 * All desktop "left / right" expressed as vw so layout scales proportionally:
 *   126px / 1920px = 6.5625vw
 *   1003px / 1920px = 52.24vw
 *
 * Mobile Figma values (390px canvas):
 *   Padding-top: 154px (to clear fixed navbar + gap)
 *   Container:   w-[350px] mx-auto, flex-col gap-[30px] items-end
 *   Title:       Instrument Serif italic 50px / Inter SemiBold 42px
 *   Image:       h-[262.5px] rounded-[15.6px]
 *   Tags overlay: top-right, bg-white rounded-bl-[23.5px]
 */

const CornerNotch = ({
  size = 48,
  color = "#B82828",
  rotate = 0,
  className = "",
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{
        display: "block",
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <path
        d="M47.0876 0H47.9996V24.9117H47.0876C47.0876 11.6639 36.3358 0.911991 23.0879 0.911991V0H47.0876Z"
        fill={color}
      />
    </svg>
  );
};



export default function CaseStudyHero({
  heroImage = "",
  clientName = "",
  heroSubtitle = "",
  tags = [],
}) {
  return (
    <section className="w-full">
      {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
      <div
        className="md:hidden "
        style={{ paddingTop: 154 }} /* clears fixed mobile navbar + gap */
      >
        <div
          className="mx-auto flex flex-col items-end"
          style={{ width: 350, gap: 30 }}
        >
          {/* ── Title box ── */}
          <div
            className="relative bg-white w-full"
            style={{ borderBottomLeftRadius: 16 }}
          >
            <h1 style={{ margin: 0, lineHeight: 0 }}>
              <span
                className="font-instrument italic text-[#010202]"
                style={{ fontSize: 50, lineHeight: 1.2, letterSpacing: "-2px" }}
              >
                {clientName}&nbsp;:&nbsp;
              </span>
              <span
                className="font-semibold not-italic text-[#010202] capitalize"
                style={{
                  fontSize: 42,
                  lineHeight: 1.2,
                  letterSpacing: "-1.68px",
                }}
              >
                {heroSubtitle}
              </span>
            </h1>
            {/* Bottom-left notch (rotate=90 → concave faces bottom-left) */}
            <div className="absolute" style={{ bottom: 0, left: -40 }}>
              <CornerNotch rotate={90} size={40} color="white" />
            </div>
            {/* Bottom-right notch */}
            <div className="absolute" style={{ bottom: -40, right: 0 }}>
              <CornerNotch rotate={0} size={40} color="white" />
            </div>
          </div>

          {/* ── Image + tags overlay ── */}
          <div className="relative w-full">
            {/* Image */}
            <div
              className="overflow-hidden bg-[#f5f5f5] w-full"
              style={{ height: 262.5, borderRadius: 15.6 }}
            >
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={clientName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#f5f5f5]" />
              )}
            </div>

            {/* Tags overlay — top-right corner of image */}
            {tags.length > 0 && (
              <div
                className="absolute top-0 right-[-1px] bg-white z-10"
                style={{
                  borderBottomLeftRadius: 23.5,
                  paddingLeft: 12,
                  paddingBottom: 4,
                }}
              >
                {/* Top-left notch of the tags pill */}
                <div className="absolute" style={{ top: -1, left: -39 }}>
                  <CornerNotch rotate={180} size={39} color="white" />
                </div>
                {/* Bottom-right notch of the tags pill */}
                <div className="absolute" style={{ bottom: -39, right: 0 }}>
                  <CornerNotch rotate={270} size={39} color="white" />
                </div>
                <div
                  className="flex flex-wrap"
                  style={{ gap: 8, paddingTop: 8, paddingRight: 8 }}
                >
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#f5f5f5] text-[#010202] uppercase"
                      style={{
                        fontSize: 12,
                        letterSpacing: "-0.24px",
                        lineHeight: 1.5,
                        padding: "5.866px 15.642px",
                        borderRadius: 9999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <div className="hidden md:block mt-[255px] ">
        {/*
         * Outer container top = where the white title panel starts (255px from page).
         * Title panel is absolutely positioned (out of flow) so its height never
         * shifts the image. Image Y = container-top + tags-height + gap — stable
         * at every viewport width.
         */}
        <div
          className="relative mx-auto"
          style={{ width: "86.875vw", marginTop: "clamp(160px, 13.28vw, 255px)" }}
        >
          {/* TAGS — normal flow, top-left */}
          <div className="relative z-20 flex gap-2 mt-7 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 h-[32px] flex items-center justify-center py-1.5 rounded-full bg-[#F5F5F5] text-[#010202] text-[16px] leading-6 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* IMAGE — stable position, unaffected by title panel height */}
          <div
            className="overflow-hidden rounded-[26px]"
            style={{ aspectRatio: "16 / 10" }}
          >
            <img
              src={heroImage}
              alt={clientName}
              className="w-full h-full object-contain"
            />
          </div>

          {/* TITLE PANEL — absolutely positioned top-right, does not affect image Y */}
          <div className="absolute top-0 right-0 z-10 flex flex-col">
            <div
              className="bg-white rounded-bl-4xl px-10 py-7"
              style={{ width: "52.24vw" }}
            >
              <h1 className="leading-[0.95]">
                <span
                  className="font-instrument italic text-[#010202]"
                  style={{ fontSize: "clamp(52px,5vw,96px)", letterSpacing: "-0.02em" }}
                >
                  {clientName}:{" "}
                </span>
                <span
                  className="font-semibold text-[#010202]"
                  style={{ fontSize: "clamp(48px,4.5vw,86px)", letterSpacing: "-0.04em" }}
                >
                  {heroSubtitle}
                </span>
              </h1>
            </div>
            <CornerNotch rotate={0} size={40} color="white" className="ml-auto z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
