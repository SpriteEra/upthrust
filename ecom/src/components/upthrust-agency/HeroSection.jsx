// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const panelRef         = useRef(null);
//   const navRef           = useRef(null);
//   const navLogoRef       = useRef(null);
//   const centerLogoRef    = useRef(null);
//   const navLinksLeftRef  = useRef(null);
//   const navLinksRightRef = useRef(null);
//   const scrollBannerRef  = useRef(null);
//   const heroSectionRef   = useRef(null);
//   const textSectionRef   = useRef(null);
//   const bgVideoRef       = useRef(null);

//   useEffect(() => {
//     let lenis;

//     const init = async () => {
//       const { default: Lenis } = await import('lenis');

//       lenis = new Lenis({
//         duration: 1.4,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       });
//       lenis.on('scroll', ScrollTrigger.update);
//       gsap.ticker.add((time) => { lenis.raf(time * 1000); });
//       gsap.ticker.lagSmoothing(0);

//       const panel        = panelRef.current;
//       const navLogo      = navLogoRef.current;
//       const centerLogo   = centerLogoRef.current;
//       const scrollBanner = scrollBannerRef.current;
//       const bgVideo      = bgVideoRef.current;

//       // ── measure where the logo needs to travel TO (nav center) ──
//       // We calculate at runtime so it works on any screen size
//       const getNavLogoTarget = () => {
//         const panelRect  = panel.getBoundingClientRect();
//         const logoRect   = centerLogo.getBoundingClientRect();
//         const navLogoRect = navLogo.getBoundingClientRect();

//         // Target: center of navLogo slot relative to current logo position
//         const targetX = (navLogoRect.left + navLogoRect.width / 2) - (logoRect.left + logoRect.width / 2);
//         const targetY = (navLogoRect.top  + navLogoRect.height / 2) - (logoRect.top  + logoRect.height / 2);
//         const targetScale = navLogoRect.height / logoRect.height;

//         return { targetX, targetY, targetScale };
//       };

//       // Initial states
//       gsap.set(navLogo, { opacity: 0 }); // placeholder in nav, invisible

//       // ── Main scroll timeline ──
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroSectionRef.current,
//           start: 'top top',
//           end: '+=130%',
//           scrub: 1.2,
//           pin: true,
//           pinSpacing: true,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             // Hide nav logo placeholder always — real logo does the animation
//             gsap.set(navLogo, { opacity: 0 });
//           },
//         },
//       });

//       // Video: unblur slightly as panel expands
//       tl.to(bgVideo, {
//         filter: 'blur(0px) brightness(0.5)',
//         duration: 0.8,
//         ease: 'power2.inOut',
//       }, 0);

//       // Panel expands to fill viewport
//       tl.to(panel, {
//         width: '100vw',
//         height: '100vh',
//         borderRadius: 0,
//         duration: 1,
//         ease: 'power2.inOut',
//       }, 0);

//       // Scroll banner slides down and fades out (inside panel, goes away)
//       tl.to(scrollBanner, {
//         opacity: 0,
//         y: 20,
//         duration: 0.25,
//         ease: 'power2.out',
//       }, 0);

//       // Logo travels: moves up + shrinks toward nav center position
//       const { targetX, targetY, targetScale } = getNavLogoTarget();

//       tl.to(centerLogo, {
//         x: targetX,
//         y: targetY,
//         scale: targetScale,
//         transformOrigin: 'center center',
//         duration: 1,
//         ease: 'power2.inOut',
//       }, 0);

//       // ── Text section reveal ──
//       const textEls = textSectionRef.current.querySelectorAll('.reveal-text');
//       gsap.set(textEls, { opacity: 0, y: 55 });
//       gsap.to(textEls, {
//         opacity: 1,
//         y: 0,
//         duration: 1.1,
//         stagger: 0.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: textSectionRef.current,
//           start: 'top 78%',
//         },
//       });
//     };

//     init();

//     return () => {
//       if (lenis) lenis.destroy();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const LogoImg = ({ height, style = {} }) => (
//     <>
//       <img
//         src="/logo.png"
//         alt="Upthrust"
//         style={{ height, width: 'auto', objectFit: 'contain', display: 'block', ...style }}
//         onError={(e) => {
//           e.target.style.display = 'none';
//           e.target.nextSibling.style.display = 'flex';
//         }}
//       />
//       {/* Fallback */}
//       <div className="items-center gap-3" style={{ display: 'none' }}>
//         <svg width={height} height={height} viewBox="0 0 80 80" fill="none">
//           <g transform="translate(40,40) rotate(-30) translate(-40,-40)">
//             <ellipse cx="40" cy="30" rx="14" ry="24" fill="#111"/>
//             <circle cx="40" cy="26" r="6" fill="white"/>
//             <path d="M26 48 L16 66 L30 57 Z" fill="#111"/>
//             <path d="M54 48 L64 66 L50 57 Z" fill="#111"/>
//             <ellipse cx="40" cy="58" rx="7" ry="10" fill="#111" opacity="0.6"/>
//           </g>
//         </svg>
//         <span className="font-black text-black" style={{ fontSize: height * 0.9, letterSpacing: '-0.03em', lineHeight: 1 }}>
//           Upthrust
//         </span>
//       </div>
//     </>
//   );

//   return (
//     <main>
//       {/* ── HERO ── */}
//       <section
//         ref={heroSectionRef}
//         className="relative w-full h-screen flex items-center justify-center overflow-hidden"
//       >
//         {/* Background video */}
//         <video
//           ref={bgVideoRef}
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ filter: 'blur(3px) brightness(0.65)', zIndex: 0 }}
//           autoPlay muted loop playsInline
//         >
//           <source
//             src="https://cdn.sanity.io/files/f609sqh5/production/072fc2290f1bd8d570894141c1bc3f5087ae5e49.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* ── White expanding panel ── */}
//         <div
//           ref={panelRef}
//           className="relative flex w-[62vw] h-[72vh] z-10 flex-col bg-white overflow-hidden"
          
//         >
//           {/* ── NAV — links always visible, center logo slot is target ── */}
//           <nav
//             ref={navRef}
//             className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-5"
//           >
//             {/* Left links */}
//             <div ref={navLinksLeftRef} className="flex items-center gap-1.5">
//               {['About', 'Services', 'Case Studies'].map((item) => (
//                 <button
//                   key={item}
//                   className="px-3.5 py-1.5 text-[12px] lg:text-[14px] 3xl:text-[16px] leading-[150%]  rounded-full bg-black text-white transition-all duration-200 "
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>

//             {/* Center: invisible nav logo placeholder — used only for position measurement */}
//             <div
//               ref={navLogoRef}
//               className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none"
//               style={{ opacity: 0, height: '32px' }}
//             >
//               <div style={{ width: '140px', height: '32px' }} />
//             </div>

//             {/* Right links */}
//             <div ref={navLinksRightRef} className="flex items-center gap-1.5">
//               {['Creative Library', 'Contact Us'].map((item) => (
//                 <button
//                   key={item}
//                   className="px-3.5 py-1.5 text-[12px] lg:text-[14px] 3xl:text-[16px]  rounded-full bg-black text-white transition-all duration-200 tracking-wide"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </nav>

//           {/* ── Center logo — BIG, bottom area, physically moves to nav ── */}
//           <div className="flex-1 flex items-end justify-center pb-16">
//             <div
//               ref={centerLogoRef}
//               className="flex items-center justify-center"
//               style={{ transformOrigin: 'center center' }}
//             >
//               <LogoImg height="100px" />
//             </div>
//           </div>

//           {/* ── Scroll down banner — INSIDE the panel at the bottom ── */}
//           <div
//             ref={scrollBannerRef}
//             className="w-full flex-shrink-0 overflow-hidden"
//             style={{ height: '38px', background: '#111' }}
//           >
//             <div className="flex items-center h-full">
//               <div className="scroll-ticker flex items-center whitespace-nowrap">
//                 {Array(40).fill(null).map((_, i) => (
//                   <span key={i} className="text-white text-[11px] tracking-[0.22em] uppercase px-4">
//                     scroll down <span className="opacity-30 ml-3">·</span>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TEXT SECTION ── */}
//       <section ref={textSectionRef} className="bg-white" style={{ minHeight: '100vh' }}>
//         <div className="max-w-6xl mx-auto px-16 py-32 flex gap-16">
//           <div className="shrink-0 w-44 pt-3">
//             <p
//               className="reveal-text text-[10.5px] text-gray-400 leading-8"
//               style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.04em' }}
//             >
//               Ads · Creative · Films · SEO · Design · B2B · Retention
//             </p>
//           </div>
//           <div className="flex-1 max-w-3xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
//             <h1
//               className="reveal-text text-black font-bold leading-[1.06] mb-10"
//               style={{ fontSize: 'clamp(38px, 4.8vw, 60px)' }}
//             >
//               We <em>build brands</em> That<br />People Actually Buy From.
//             </h1>
//             <h2
//               className="reveal-text text-black font-bold leading-[1.1]"
//               style={{ fontSize: 'clamp(28px, 3.4vw, 46px)' }}
//             >
//               The Growth System<br />
//               Behind <em>Dell, Shark Tank<br />Winners, And 60+ Brands.</em><br />
//               One Team Runs The Full<br />Machine.
//             </h2>
//           </div>
//         </div>
//       </section>

//       <style>{`
       
//         html, body { overflow-x: hidden; }
//         .scroll-ticker {
//           animation: tickerScroll 22s linear infinite;
//         }
//         @keyframes tickerScroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </main>
//   );
// }

// export default HeroSection;


'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const panelRef         = useRef(null);
  const navRef           = useRef(null);
  const navLogoRef       = useRef(null);
  const centerLogoRef    = useRef(null);
  const navLinksLeftRef  = useRef(null);
  const navLinksRightRef = useRef(null);
  const scrollBannerRef  = useRef(null);
  const heroSectionRef   = useRef(null);
  const textSectionRef   = useRef(null);
  const bgVideoRef       = useRef(null);

  useEffect(() => {
    let lenis;

    const init = async () => {
      const { default: Lenis } = await import('lenis');

      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);

      const panel        = panelRef.current;
      const navLogo      = navLogoRef.current;
      const centerLogo   = centerLogoRef.current;
      const scrollBanner = scrollBannerRef.current;
      const bgVideo      = bgVideoRef.current;

      // ── Calculate logo target after panel has FULLY expanded ──
      // We simulate the expanded state by reading nav/logo positions
      // relative to the viewport center (where panel will be 100vw/100vh)
      const getNavLogoTarget = () => {
        // Force a fresh measurement with no transforms applied
        gsap.set(centerLogo, { x: 0, y: 0, scale: 1 });

        const logoRect    = centerLogo.getBoundingClientRect();
        const navLogoRect = navLogo.getBoundingClientRect();

        // When panel is fully expanded (100vw/100vh), the nav stays at top
        // of the panel. The navLogo placeholder is absolutely centered in nav.
        // We need the delta from logo's FINAL position (after panel expands)
        // to the navLogo placeholder.

        // Panel starts centered on screen. After expansion it fills viewport.
        // The panel top moves to 0, left to 0. We account for that shift.
        const panelRect = panel.getBoundingClientRect();

        // How much will the panel's top-left corner shift when it goes 100vw/100vh?
        const panelShiftX = panelRect.left; // panel left edge moves to 0
        const panelShiftY = panelRect.top;  // panel top edge moves to 0

        // Logo's final position (after panel expands) in viewport coords:
        const logoFinalLeft = logoRect.left - panelShiftX;
        const logoFinalTop  = logoRect.top  - panelShiftY;

        // navLogo placeholder stays at same position relative to panel
        // but panel top-left shifts, so its final viewport pos:
        const navLogoFinalLeft = navLogoRect.left - panelShiftX;
        const navLogoFinalTop  = navLogoRect.top  - panelShiftY;

        const targetX = (navLogoFinalLeft + navLogoRect.width / 2) - (logoFinalLeft + logoRect.width / 2);
        const targetY = (navLogoFinalTop  + navLogoRect.height / 2) - (logoFinalTop  + logoRect.height / 2);
        const targetScale = navLogoRect.height / logoRect.height;

        return { targetX, targetY, targetScale };
      };

      // Initial states
      gsap.set(navLogo, { opacity: 0 }); // placeholder in nav, invisible

      // ── Main scroll timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top top',
          end: '+=130%',
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: () => {
            gsap.set(navLogo, { opacity: 0 });
          },
        },
      });

      // Video: unblur slightly as panel expands
      tl.to(bgVideo, {
        filter: 'blur(0px) brightness(0.5)',
        duration: 0.8,
        ease: 'power2.inOut',
      }, 0);

      // Panel expands to fill viewport
      tl.to(panel, {
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      // Scroll banner slides down and fades out
      tl.to(scrollBanner, {
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: 'power2.out',
      }, 0);

      // Logo travels: moves up + shrinks toward nav center position
      const { targetX, targetY, targetScale } = getNavLogoTarget();

      tl.to(centerLogo, {
        x: targetX,
        y: targetY,
        scale: targetScale,
        transformOrigin: 'center center',
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      // ── Text section reveal — triggered AFTER the pinned section ends ──
      const textEls = textSectionRef.current.querySelectorAll('.reveal-text');
      gsap.set(textEls, { opacity: 0, y: 55 });
      gsap.to(textEls, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: 'top 78%',
        },
      });
    };

    init();

    return () => {
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const LogoImg = ({ height, style = {} }) => (
    <>
      <img
        src="/logo.png"
        alt="Upthrust"
        style={{ height, width: 'auto', objectFit: 'contain', display: 'block', ...style }}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback */}
      <div className="items-center gap-3" style={{ display: 'none' }}>
        <svg width={height} height={height} viewBox="0 0 80 80" fill="none">
          <g transform="translate(40,40) rotate(-30) translate(-40,-40)">
            <ellipse cx="40" cy="30" rx="14" ry="24" fill="#111"/>
            <circle cx="40" cy="26" r="6" fill="white"/>
            <path d="M26 48 L16 66 L30 57 Z" fill="#111"/>
            <path d="M54 48 L64 66 L50 57 Z" fill="#111"/>
            <ellipse cx="40" cy="58" rx="7" ry="10" fill="#111" opacity="0.6"/>
          </g>
        </svg>
        <span className="font-black text-black" style={{ fontSize: height * 0.9, letterSpacing: '-0.03em', lineHeight: 1 }}>
          Upthrust
        </span>
      </div>
    </>
  );

  return (
    // FIX 2: Wrap everything in a block container — hero and text are siblings,
    // never nested. The text section is completely outside the pinned hero.
    <div style={{ position: 'relative' }}>
      {/* ── HERO ── */}
      <section
        ref={heroSectionRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background video */}
        <video
          ref={bgVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(3px) brightness(0.65)', zIndex: 0 }}
          autoPlay muted loop playsInline
        >
          <source
            src="https://cdn.sanity.io/files/f609sqh5/production/072fc2290f1bd8d570894141c1bc3f5087ae5e49.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── White expanding panel ── */}
        <div
          ref={panelRef}
          className="relative flex w-[62vw] h-[72vh] z-10 flex-col bg-white overflow-hidden"
        >
          {/* ── NAV ── */}
          <nav
            ref={navRef}
            className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-5"
          >
            {/* Left links */}
            <div ref={navLinksLeftRef} className="flex items-center gap-1.5">
              {['About', 'Services', 'Case Studies'].map((item) => (
                <button
                  key={item}
                  className="px-3.5 py-1.5 text-[12px] lg:text-[14px] 3xl:text-[16px] leading-[150%] rounded-full bg-black text-white transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Center: invisible nav logo placeholder — used only for position measurement */}
            <div
              ref={navLogoRef}
              className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none"
              style={{ opacity: 0, height: '32px' }}
            >
              <div style={{ width: '140px', height: '32px' }} />
            </div>

            {/* Right links */}
            <div ref={navLinksRightRef} className="flex items-center gap-1.5">
              {['Creative Library', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  className="px-3.5 py-1.5 text-[12px] lg:text-[14px] 3xl:text-[16px] rounded-full bg-black text-white transition-all duration-200 tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* ── Center logo — BIG, bottom area, physically moves to nav ── */}
          <div className="flex-1 flex items-end justify-center pb-16">
            <div
              ref={centerLogoRef}
              className="flex items-center justify-center"
              style={{ transformOrigin: 'center center' }}
            >
              <LogoImg height="100px" />
            </div>
          </div>

          {/* ── Scroll down banner ── */}
          <div
            ref={scrollBannerRef}
            className="w-full flex-shrink-0 overflow-hidden"
            style={{ height: '38px', background: '#111' }}
          >
            <div className="flex items-center h-full">
              <div className="scroll-ticker flex items-center whitespace-nowrap">
                {Array(40).fill(null).map((_, i) => (
                  <span key={i} className="text-white text-[11px] tracking-[0.22em] uppercase px-4">
                    scroll down <span className="opacity-30 ml-3">·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEXT SECTION — completely separate sibling, never inside hero ── */}
      <section
        ref={textSectionRef}
        className="bg-white"
        style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto px-16 py-32 flex gap-16">
          <div className="shrink-0 w-44 pt-3">
            <p
              className="reveal-text text-[10.5px] text-gray-400 leading-8"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '0.04em' }}
            >
              Ads · Creative · Films · SEO · Design · B2B · Retention
            </p>
          </div>
          <div className="flex-1 max-w-3xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <h1
              className="reveal-text text-black font-bold leading-[1.06] mb-10"
              style={{ fontSize: 'clamp(38px, 4.8vw, 60px)' }}
            >
              We <em>build brands</em> That<br />People Actually Buy From.
            </h1>
            <h2
              className="reveal-text text-black font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(28px, 3.4vw, 46px)' }}
            >
              The Growth System<br />
              Behind <em>Dell, Shark Tank<br />Winners, And 60+ Brands.</em><br />
              One Team Runs The Full<br />Machine.
            </h2>
          </div>
        </div>
      </section>

      <style>{`
        html, body { overflow-x: hidden; }
        .scroll-ticker {
          animation: tickerScroll 22s linear infinite;
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;