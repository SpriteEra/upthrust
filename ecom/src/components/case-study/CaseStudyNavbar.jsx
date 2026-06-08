import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Case Study", href: "/case-studies" },
];

export default function CaseStudyNavbar({ formUrl }) {
  const ctaHref = formUrl || "#";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[20px] md:pt-[30px] pointer-events-none">
      {/* ── Mobile navbar ── */}
      <nav className="md:hidden pointer-events-auto w-[calc(100%-40px)] backdrop-blur-[3px] bg-white/50 border border-white/26 rounded-[16px] flex items-center justify-between px-5 py-5">
        <Link href="/" aria-label="Upthrust home">
          <Image
            src="/logo.png"
            width={103}
            height={24}
            alt="Upthrust"
            priority
            className="h-[24px] w-auto object-contain"
          />
        </Link>
        <Link
          href={ctaHref}
          className="bg-black border-[3px] border-[#ff3b00] rounded-full px-6 py-4 text-white text-[16px] font-medium leading-6 whitespace-nowrap hover:bg-[#ff3b00] transition-colors duration-200"
        >
          Book A Demo Call
        </Link>
      </nav>

      {/* ── Desktop navbar ── */}
      <nav className="hidden md:flex pointer-events-auto w-[1284px] max-w-[calc(100vw-80px)] backdrop-blur-[25px] bg-[rgba(255,253,253,0.5)] rounded-[20px] items-center justify-between px-8 h-[105px]">
        {/* Logo */}
        <Link href="/" aria-label="Upthrust home" className="shrink-0">
          <Image
            src="/logo.png"
            width={133}
            height={30}
            alt="Upthrust"
            priority
            className="h-[30px] w-auto object-contain"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-[42px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#1a1a1a] text-[18px] tracking-[-0.36px] leading-[1.5] flex items-center gap-[5px] hover:opacity-70 transition-opacity duration-150"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4.75 7.125L9.5 11.875L14.25 7.125"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={ctaHref}
          className="bg-black border-[2px] border-[#ff3b00] rounded-full px-[26px] py-4 text-white text-[13px] font-medium tracking-[-0.26px] leading-[1.5] capitalize whitespace-nowrap hover:bg-[#ff3b00] transition-colors duration-200"
        >
          Show Us how to scale
        </Link>
      </nav>
    </header>
  );
}
