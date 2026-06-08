import CaseStudy from "@/layouts/CaseStudy";

/* ─── Biba demo data — mirrors the Figma wireframe exactly ───────────────── */
const DEMO_DATA = {
  additionalFields: {
    /* Booking CTA */
    formUrl: "#",

    /* ── Hero ── */
    heroImage:
      "https://cdn.upthrust.agency/images/general/1780628413144-vx7dqt.png",
    clientName: "Biba",
    heroSubtitle: "India's Ethnic Heritage",
    tags: ["Branding", "Website"],

    /* ── Overview ── */
    overviewHeadline:
      "BIBA is India's ethnic heritage brand established by Meena Bindra, with 150+ outlets.",
    overviewBody:
      "Hand-block prints, vegetable dyes, and Bollywood partnerships (Devdas) define the brand. The first film celebrates the artisanal process and visual richness of traditional hand-block printing.\nThe approach emphasizes warm, saturated colors and the celebratory energy of Indian ethnic wear. This is not minimalism; this is cultural abundance and richness made visual.",
    client: "Multiple Emerging Brands",
    industry: "Property",
    duration: "12 Weeks",

    /* ── Media Gallery — Set 1 ── */
    mediaItems: [
      {
        imageUrl:
          "https://www.figma.com/api/mcp/asset/367c904f-f7d6-486b-bea2-eabbb241d299",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        hasVideo: true,
      },
      {
        imageUrl:
          "https://www.figma.com/api/mcp/asset/f6dc20fa-e184-483a-887a-bf8dae877cc2",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        hasVideo: true,
      },
    ],
    fullWidthImage1:
      "https://www.figma.com/api/mcp/asset/4def294e-e3e0-4441-8d5a-d3625ae1e38d",

    /* ── Showcases ── */
    showcases: [
      {
        label: "Showcase 1",
        title: "Artisanal Process",
        description:
          "The hand-block printing process is shown in detail—blocks dipped in dye, pressed onto fabric, pattern repeating with subtle variations. This process becomes the hero, celebrating the craftspeople and tradition.",
      },
      {
        label: "Showcase 2",
        title: "Pattern Richness & Color Celebration",
        description:
          "As printed patterns multiply on fabric, colors bloom—reds, golds, indigos, greens. The visual richness builds, celebrating the abundance and vibrancy of Indian textile tradition.",
      },
      {
        label: "Showcase 3",
        title: "Finished Garment Celebration",
        description:
          "The completed hand-block printed garment appears on model with celebratory energy and confidence. The color and pattern richness creates visual joy—not minimalist, but abundant.",
      },
    ],

    /* ── Standalone full-width image ── */
    fullWidthImage2:
      "https://www.figma.com/api/mcp/asset/09d7ef7b-03a1-4930-b915-7e7cd933685b",

    /* ── Design Thinking ── */
    designThinkingLabel: "Extending the brand",
    designThinkingHeading: "Design Thinking",
    designThinkingBody:
      "BIBA's visual direction focused on joyful ethnic richness—celebrating cultural warmth over luxury minimalism. We highlighted real hand-block printing processes to reinforce authenticity and traditional craftsmanship. Warm, saturated colors and evolving patterns created a narrative of heritage and artisanal accumulation. The model embodied cultural confidence and joy, making the brand feel relatable, wearable, and rooted in tradition.",

    /* ── Media Gallery — Set 2 ── */
    galleryImages: [
      "https://www.figma.com/api/mcp/asset/4809fb92-d96d-4a37-a851-a846c2a9011c",
      "https://www.figma.com/api/mcp/asset/e78ffc93-598b-4f48-941b-5770e443a526",
    ],
    fullWidthImage3:
      "https://www.figma.com/api/mcp/asset/9183d31b-639c-4747-868e-3b21be282e2c",

    /* ── Results ── */
    resultsHeading: "The Finished Product",
    resultsBody:
      "BIBA Film 1 achieved strong cultural resonance, particularly among audiences aged 25–45 seeking authentic Indian ethnic wear. The celebration of artisanal process and traditional pattern-making became the differentiator—BIBA wasn't just selling garments, but cultural authenticity and tradition. The film's warm, saturated aesthetic aligned with Bollywood styling and cultural celebrations, positioning BIBA as the premium ethnic heritage choice.",

    /* ── Testimonial ── */
    testimonialQuote:
      '"BIBA has always been about celebrating Indian textile tradition, not copying it. This film did exactly that—it showed our commitment to hand-block printing and artisanal methods as core brand identity. Our customers felt it immediately."',
    testimonialAttribution: "- BIBA Brand Director, 2023",

    /* ── Next Projects ── */
    nextProjects: [
      {
        thumbnail:
          "https://www.figma.com/api/mcp/asset/ed11ecf4-b258-4d7c-984f-838868c383e3",
        title: "Smokey Cocktail",
        slug: "smokey-cocktail",
      },
      {
        thumbnail:
          "https://www.figma.com/api/mcp/asset/aacf27a6-1895-4193-89bf-9b5b2466e2d2",
        title: "Mini Cooper",
        slug: "mini-cooper",
      },
    ],
  },
};

export const metadata = {
  title: "Biba Case Study — Demo | Upthrust",
  description: "Demo preview of the Biba case study page.",
  robots: { index: false, follow: false },
};

export default function CaseStudyDemoPage() {
  return <CaseStudy data={DEMO_DATA} />;
}
