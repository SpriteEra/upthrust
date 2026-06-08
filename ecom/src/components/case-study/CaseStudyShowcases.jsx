/*
 * Desktop Figma (1920px):
 *   Outer: flex-col gap-[100px]
 *   Each card: border border-[rgba(0,0,0,0.6)] h-[255px] flex items-center
 *              justify-between p-[50px] rounded-[20px] w-full
 *   Left col: w-[599px] flex-col gap-[20px] overflow-hidden
 *     Badge: h-[32px] px-[16px] pb-[6px] pt-[8px] rounded-[9999px] text-[16px] bg-[#f5f5f5]
 *     Title: text-[48px] font-semibold leading-[1.3] tracking-[-0.96px]
 *   Right col: w-[640px] pt-[30px]
 *     Text: text-[20px] leading-[1.5] tracking-[-0.4px]
 *
 * Mobile Figma (390px):
 *   Outer: flex-col gap-[100px]
 *   Each card: border h-[413px] flex-col justify-between px-[20px] py-[40px] rounded-[20px]
 *   Top: badge + title text-[32px] tracking-[-0.64px]
 *   Bottom: pt-[30px] text-[18px] tracking-[-0.36px]
 */
export default function CaseStudyShowcases({ showcases = [] }) {
  if (!showcases.length) return null;

  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div className="w-full max-w-[1668px] mx-auto flex flex-col" style={{ gap: 100 }}>
        {showcases.map((item, i) => (
          <div
            key={i}
            className="border rounded-[20px] w-full"
            style={{
              borderColor: "rgba(0,0,0,0.6)",
              /* Desktop: h-[255px] flex-row; Mobile: h-[413px] flex-col */
            }}
          >
            {/* ── Desktop card layout ── */}
            <div className="hidden md:flex md:items-center md:justify-between h-[255px] p-[50px]">
              {/* Left */}
              <div className="flex flex-col overflow-hidden" style={{ width: 599, gap: 20 }}>
                {item.label && (
                  <span
                    className="bg-[#f5f5f5] text-[#010202] self-start"
                    style={{
                      height: 32,
                      padding: "8px 16px 6px",
                      borderRadius: 9999,
                      fontSize: 16,
                      lineHeight: 1.5,
                      letterSpacing: "-0.32px",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.label}
                  </span>
                )}
                <h3
                  className="text-[#010202] font-semibold m-0"
                  style={{ fontSize: 48, lineHeight: 1.3, letterSpacing: "-0.96px" }}
                >
                  {item.title}
                </h3>
              </div>
              {/* Right */}
              <div style={{ width: 640, paddingTop: 30 }}>
                <p
                  className="text-[#010202] m-0"
                  style={{ fontSize: 20, lineHeight: 1.5, letterSpacing: "-0.4px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>

            {/* ── Mobile card layout ── */}
            <div className="md:hidden flex flex-col justify-between h-[413px] px-[20px] py-[40px]">
              {/* Top */}
              <div className="flex flex-col overflow-hidden" style={{ gap: 20 }}>
                {item.label && (
                  <span
                    className="bg-[#f5f5f5] text-[#010202] self-start"
                    style={{
                      height: 32, padding: "8px 16px 6px",
                      borderRadius: 9999, fontSize: 16,
                      lineHeight: 1.5, letterSpacing: "-0.32px",
                      display: "flex", alignItems: "center", whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                )}
                <h3
                  className="text-[#010202] font-semibold m-0"
                  style={{ fontSize: 32, lineHeight: 1.3, letterSpacing: "-0.64px" }}
                >
                  {item.title}
                </h3>
              </div>
              {/* Bottom */}
              <div style={{ paddingTop: 30 }}>
                <p
                  className="text-[#010202] m-0"
                  style={{ fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.36px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
