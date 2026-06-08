import Link from "next/link";
import Image from "next/image";

const LEARN_LINKS = [
  "About",
  "Culture",
  "Testimonials",
  "Processes",
  "FAQs",
  "Blog",
];
const EXPLORE_LINKS = ["Home", "Work", "Case Study", "Services", "Contact"];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/upthrust.agency",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/upthrust",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/upthrustagency",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zM17.083 19.77h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/upthrust",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@upthrust",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* Corner notch for the footer CTA pill decorations */
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

export default function CaseStudyFooter({ formUrl }) {
  const ctaHref = formUrl || "#";

  return (
    <footer className="bg-[#010202] w-full overflow-hidden relative">
      {/* ── Social icons column (left edge) ── */}
      <div className="absolute top-0 left-0 z-10">
        {/* White corner block behind social icons */}
        <div className="relative bg-white pt-[8px] pr-[22px] pb-[22px] pl-[10px]">
          <div className="flex flex-col gap-[6px]">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="bg-[#ff3b00] rounded-full flex items-center justify-center"
                style={{ width: 34, height: 34 }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          {/* Bottom-right corner cut */}
          <CornerNotch
            rotate={90}
            size={60}
            color="#010202"
            className="absolute bottom-0 right-0"
          />
          {/* Bottom-left external cut (bg block overlapping left edge) */}
          {/* <div className="absolute bottom-[-57px] left-0 w-[57px] h-[57px] bg-white" />
          <CornerNotch
            rotate={90}
            size={57}
            color="#010202"
            className="absolute bottom-[-57px] left-0"
          /> */}
        </div>
      </div>

      {/* ── "We build growth systems" pill (top-right) ── */}
      <div className="absolute top-0 right-0 z-10">
        <div className="relative bg-white flex items-center pl-[17px] pr-8 py-[6px] rounded-bl-[25px]">
          <p className="text-[#010202] text-[14px] md:text-[16px] leading-[1.5] tracking-[-0.32px] whitespace-nowrap">
            We build growth systems that actually scale.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="w-full px-5 xl:px-[100px] pt-[80px] pb-[20px]">
        <div className="max-w-[1720px] mx-auto">
          {/* ── Top row: CTA + columns + contact ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-0 pt-[40px] md:pt-[67px]">
            {/* CTA block */}
            <div className="flex flex-col gap-[22px] md:w-[519px] shrink-0">
              <div className="space-y-3">
                <h2 className="text-white font-semibold text-[24px] md:text-[48px] leading-[1.5] tracking-[-0.48px] md:tracking-[-0.96px] whitespace-pre-line">
                  {`Still here? \nSay something then.`}
                </h2>
                <p className="text-white/80 text-[16px] leading-[1.5] tracking-[-0.32px]">
                  {`Tell us what's broken. We'll tell you exactly what we'd do.`}
                </p>
              </div>
              <div className="flex flex-col gap-[11px]">
                <a
                  href={ctaHref}
                  className="bg-black border-[2.5px] border-[#ff3b00] rounded-full px-[30px] py-[18px] text-white text-[15px] font-medium tracking-[-0.3px] capitalize leading-[1.5] whitespace-nowrap hover:bg-[#ff3b00] transition-colors duration-200 self-start"
                >
                  Show Us how to scale
                </a>
                {/* Google Review Badge placeholder */}
                <div className="h-[34px] w-[100px] bg-white/10 rounded-sm" />
              </div>
            </div>

            {/* Learn + Explore columns */}
            <div className="flex gap-16 md:gap-[87px] shrink-0">
              <div className="flex flex-col gap-5">
                <p className="text-[#999a9a] text-[14px] uppercase tracking-[-0.28px] leading-[1.5]">
                  Learn
                </p>
                <ul className="flex flex-col gap-[16px]">
                  {LEARN_LINKS.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.32px] md:tracking-[-0.36px] hover:text-[#ff3b00] transition-colors duration-150"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-[#999a9a] text-[14px] uppercase tracking-[-0.28px] leading-[1.5]">
                  Explore
                </p>
                <ul className="flex flex-col gap-[16px]">
                  {EXPLORE_LINKS.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.32px] md:tracking-[-0.36px] hover:text-[#ff3b00] transition-colors duration-150"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact block */}
            <div className="flex flex-col gap-5 shrink-0 md:max-w-[260px]">
              <p className="text-[#999a9a] text-[14px] uppercase tracking-[-0.28px] leading-[1.5]">
                Get in touch
              </p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href="tel:+16095668224"
                  className="flex items-center gap-4 text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.32px] md:tracking-[-0.36px] hover:text-[#ff3b00] transition-colors duration-150"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +1 (609)-566-8224
                </a>
                <a
                  href="mailto:hello@upthrust.io"
                  className="flex items-center gap-4 text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.32px] hover:text-[#ff3b00] transition-colors duration-150"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@upthrust.io
                </a>
                <div className="flex items-start gap-4">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-white text-[16px] md:text-[18px] leading-[1.5] tracking-[-0.32px] w-[230px]">
                    5th Floor, DLF Two Horizon Centre, DLF Phase 5, Sector 43,
                    Gurugram, Haryana 122002
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── "Leading since 2021" large text ── */}
          <div className="mt-[60px] md:mt-[80px] overflow-hidden">
            <p
              className="text-white font-normal text-center leading-none p-2"
              style={{
                fontSize: "200px",
                letterSpacing: "-0.08em",
              }}
            >
              Leading since 2021
            </p>
          </div>

          {/* ── Copyright bar ── */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-6 pb-4">
            <div className="flex flex-wrap items-center gap-x-[8px] text-[#999a9a] text-[11px] md:text-[15px] leading-[1.5]">
              <span>© Upthrust 2026</span>
              <span>|</span>
              <span>Company Reg Number 10529058</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-[8px] text-[#999a9a] text-[11px] md:text-[15px] leading-[1.5]">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
              <span>|</span>
              <span>All Rights Reserved</span>
              <span>|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
