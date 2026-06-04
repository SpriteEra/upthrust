/*
 * Section order matches Figma exactly:
 *   Hero (full-width, absolute-positioned)
 *   ── gap-[200px desktop / 120px mobile] container ──
 *   1. Overview
 *   2. Media Gallery Set 1  (portrait images + full-width image h-[1110/233px])
 *   3. Showcases            (3 bordered cards)
 *   4. fullWidthImage2      (sign image h-[1034/217px])
 *   5. Design Thinking
 *   6. Media Gallery Set 2  (square images + billboard h-[1021/214px])
 *   7. Results
 *   8. Testimonial          (full-bleed black h-[323/528px])
 *   9. Next Projects
 *   ─────────────────────────────────────────────────
 *   Footer (full-bleed dark)
 *
 * CMS additionalFields schema is documented inline below.
 */

import CaseStudyNavbar        from "@/components/case-study/CaseStudyNavbar";
import CaseStudyHero          from "@/components/case-study/CaseStudyHero";
import CaseStudyOverview      from "@/components/case-study/CaseStudyOverview";
import CaseStudyMediaGallery  from "@/components/case-study/CaseStudyMediaGallery";
import CaseStudyShowcases     from "@/components/case-study/CaseStudyShowcases";
import CaseStudyDesignThinking from "@/components/case-study/CaseStudyDesignThinking";
import CaseStudyResults       from "@/components/case-study/CaseStudyResults";
import CaseStudyTestimonial   from "@/components/case-study/CaseStudyTestimonial";
import CaseStudyNextProjects  from "@/components/case-study/CaseStudyNextProjects";
import CaseStudyFooter        from "@/components/case-study/CaseStudyFooter";

export default function CaseStudy({ data }) {
  const af = data?.additionalFields || {};

  /*
   * ── CMS additionalFields schema ────────────────────────────────────────────
   * formUrl              string   – NeetoCal / booking link for all CTAs
   *
   * heroImage            string   – main creative/flyer image URL
   * clientName           string   – e.g. "Biba"
   * heroSubtitle         string   – e.g. "India's Ethnic Heritage"
   * tags                 string[] – e.g. ["Branding", "Website"]
   *
   * overviewHeadline     string   – large left-column headline
   * overviewBody         string   – right-column body (use \n for paragraphs)
   * client               string   – metadata chip
   * industry             string   – metadata chip
   * duration             string   – metadata chip
   *
   * mediaItems           Array<{ imageUrl, videoUrl?, hasVideo? }>  — max 2
   * fullWidthImage1      string   – image below first gallery (h 1110/233px)
   *
   * showcases            Array<{ label, title, description }>        — max 3
   *
   * fullWidthImage2      string   – standalone image between showcases + design thinking
   *                                 (h 1034/217px)
   *
   * designThinkingLabel  string
   * designThinkingHeading string
   * designThinkingBody   string
   *
   * galleryImages        string[] – two square image URLs for gallery set 2
   * fullWidthImage3      string   – billboard at end of gallery set 2 (h 1021/214px)
   *
   * resultsHeading       string
   * resultsBody          string
   *
   * testimonialQuote     string
   * testimonialAttribution string – e.g. "- Brand Director, 2023"
   *
   * nextProjects         Array<{ thumbnail, title, slug }>           — max 2
   * ───────────────────────────────────────────────────────────────────────────
   */

  const gallerySet2 = (af.galleryImages || []).map((url) => ({
    imageUrl: url,
    hasVideo: false,
  }));

  return (
    <main className="bg-white overflow-x-hidden">

      {/* Navbar — fixed, z-50 */}
      <CaseStudyNavbar formUrl={af.formUrl} />

      {/* Hero — handles its own padding-top to clear the fixed nav */}
      <CaseStudyHero
        heroImage={af.heroImage || ""}
        clientName={af.clientName || ""}
        heroSubtitle={af.heroSubtitle || ""}
        tags={af.tags || []}
      />

      {/*
       * Body sections container.
       * gap-[200px] desktop / gap-[120px] mobile between each section.
       * mt pushes first section below the hero.
       *   Desktop: hero is 1302px from page top → body starts ~1302px
       *   Mobile:  hero is ~154 + 30 + 30 + 262 = ~476px → safe with mt-[120px]
       */}
      <div className="flex flex-col items-center w-full mt-[120px] md:mt-[200px] gap-[120px] md:gap-[200px]">

        {/* 1 ── Overview */}
        <CaseStudyOverview
          overviewHeadline={af.overviewHeadline || ""}
          overviewBody={af.overviewBody || ""}
          client={af.client || ""}
          industry={af.industry || ""}
          duration={af.duration || ""}
        />

        {/* 2 ── Media Gallery — Set 1 (portrait, with optional video) */}
        {(af.mediaItems?.length > 0 || af.fullWidthImage1) && (
          <CaseStudyMediaGallery
            mediaItems={af.mediaItems || []}
            fullWidthImage={af.fullWidthImage1 || ""}
            squareImages={false}
          />
        )}

        {/* 3 ── Showcases */}
        {af.showcases?.length > 0 && (
          <CaseStudyShowcases showcases={af.showcases} />
        )}

        {/* 4 ── Standalone full-width image (sign / brand image)
                 Desktop h-[1034px] / Mobile h-[217px] */}
        {af.fullWidthImage2 && (
          <div className="w-full px-5 xl:px-[126px]">
            <div className="w-full max-w-[1668px] mx-auto relative overflow-hidden h-[217px] md:h-[1034px]">
              <img
                src={af.fullWidthImage2}
                alt=""
                className="absolute w-full object-cover pointer-events-none"
                style={{ height: "107.39%", top: "-6.11%", left: 0 }}
              />
            </div>
          </div>
        )}

        {/* 5 ── Design Thinking */}
        {(af.designThinkingHeading || af.designThinkingBody) && (
          <CaseStudyDesignThinking
            label={af.designThinkingLabel || ""}
            heading={af.designThinkingHeading || ""}
            body={af.designThinkingBody || ""}
          />
        )}

        {/* 6 ── Media Gallery — Set 2 (square images + billboard) */}
        {(gallerySet2.length > 0 || af.fullWidthImage3) && (
          <CaseStudyMediaGallery
            mediaItems={gallerySet2}
            fullWidthImage={af.fullWidthImage3 || ""}
            squareImages={true}
          />
        )}

        {/* 7 ── Results */}
        {(af.resultsHeading || af.resultsBody) && (
          <CaseStudyResults
            heading={af.resultsHeading || ""}
            body={af.resultsBody || ""}
          />
        )}

        {/* 8 ── Testimonial — full-bleed black, own height */}
        {af.testimonialQuote && (
          <CaseStudyTestimonial
            quote={af.testimonialQuote}
            attribution={af.testimonialAttribution || ""}
          />
        )}

        {/* 9 ── Next Projects */}
        {af.nextProjects?.length > 0 && (
          <CaseStudyNextProjects projects={af.nextProjects} />
        )}

      </div>

      {/* Footer — full-bleed dark */}
      <div className="mt-[120px] md:mt-[200px]">
        <CaseStudyFooter formUrl={af.formUrl} />
      </div>

    </main>
  );
}
