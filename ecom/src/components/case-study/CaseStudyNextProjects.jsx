/*
 * Desktop Figma (1920px):
 *   Outer: flex-col gap-[86.875px] w-[1668px]
 *   Header row: flex-col gap-[17.375px]
 *     Title: text-[52.125px] font-semibold leading-[1.3] tracking-[-1.0425px] capitalize
 *     "View all": flex items-center, text-[17.375px] leading-[1.5] tracking-[-0.3475px]
 *   Cards row: flex gap-[27.601px] h-[677px]
 *     Each card: flex-col gap-[30px] w-[820.199px]
 *       Thumb: aspect-[824/618] rounded-[7.763px] overflow-hidden
 *       Title: text-[20.85px] font-semibold leading-[1.5] tracking-[-0.417px] capitalize
 *
 * Mobile Figma (390px):
 *   Outer: flex-col gap-[60px] w-[350px]
 *   Header: title text-[32px], "View all" text-[16px]
 *   Cards: flex-col gap-[27.601px]
 *     Each: flex-col gap-[12.802px] w-[350px]
 *       Thumb: aspect-[824/618] rounded-[3.313px]
 *       Title: text-[16px] font-normal leading-[1.5] tracking-[-0.32px] capitalize
 */
import Link from "next/link";

export default function CaseStudyNextProjects({ projects = [] }) {
  if (!projects.length) return null;

  return (
    <div className="w-full px-5 xl:px-[126px]">
      <div className="w-full max-w-[1668px] mx-auto">
        {/* ── Desktop ── */}
        <div className="hidden md:flex md:flex-col" style={{ gap: 86.875 }}>
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 17.375 }}>
            <h2
              className="text-black font-semibold m-0 capitalize"
              style={{
                fontSize: 52.125,
                lineHeight: 1.3,
                letterSpacing: "-1.0425px",
              }}
            >
              Next Projects
            </h2>
            <Link
              href="/case-studies"
              className="flex items-center no-underline hover:opacity-70 transition-opacity"
              style={{ gap: 0 }}
            >
              <span
                className="text-[#0f1014]"
                style={{
                  fontSize: 17.375,
                  lineHeight: 1.5,
                  letterSpacing: "-0.3475px",
                }}
              >
                View all here
              </span>
              {/* Arrow line — matches Figma "Img" element */}
              <span className="flex items-center ml-3">
                <img
                  src="/ecom/curves/Vector.svg"
                  alt="-->"
                  className="w-[41px] h-auto block"
                />
              </span>
            </Link>
          </div>

          {/* Cards */}
          <div className="flex" style={{ gap: 27.601 }}>
            {projects.map((p, i) => (
              <Link
                key={i}
                href={p.slug ? `/case-studies/${p.slug}` : "#"}
                className="flex flex-col no-underline group"
                style={{ gap: 30, flex: "1 0 0" }}
              >
                <div
                  className="overflow-hidden bg-[#f9faff]"
                  style={{ borderRadius: 7.763, aspectRatio: "824/618" }}
                >
                  {p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f5f5f5]" />
                  )}
                </div>
                <p
                  className="text-[#0f1014] font-semibold m-0 capitalize"
                  style={{
                    fontSize: 20.85,
                    lineHeight: 1.5,
                    letterSpacing: "-0.417px",
                  }}
                >
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex flex-col" style={{ gap: 60 }}>
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 17.375 }}>
            <h2
              className="text-black font-semibold m-0 capitalize"
              style={{
                fontSize: 32,
                lineHeight: 1.3,
                letterSpacing: "-0.64px",
              }}
            >
              Next Projects
            </h2>
            <Link
              href="/case-studies"
              className="flex items-center no-underline hover:opacity-70 transition-opacity"
            >
              <span
                className="text-[#0f1014]"
                style={{
                  fontSize: 16,
                  lineHeight: 1.5,
                  letterSpacing: "-0.32px",
                }}
              >
                View all here
              </span>
              <span
                className="inline-block bg-[#0f1014]"
                style={{ width: 41.402, height: 1, marginLeft: 12 }}
              />
            </Link>
          </div>

          {/* Cards */}
          <div className="flex flex-col" style={{ gap: 27.601 }}>
            {projects.map((p, i) => (
              <Link
                key={i}
                href={p.slug ? `/case-studies/${p.slug}` : "#"}
                className="flex flex-col no-underline group"
                style={{ gap: 12.802 }}
              >
                <div
                  className="overflow-hidden bg-[#f9faff]"
                  style={{ borderRadius: 3.313, aspectRatio: "824/618" }}
                >
                  {p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f5f5f5]" />
                  )}
                </div>
                <p
                  className="text-[#0f1014] font-normal m-0 capitalize"
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: "-0.32px",
                  }}
                >
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
