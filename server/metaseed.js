// scripts/seedPageMeta.js
// Run once: node scripts/seedPageMeta.js
// Seeds all existing static metadata into the PageMeta collection.

import mongoose from "mongoose";
import PageMeta from "./models/pageMeta.js";
import dotenv from "dotenv";
dotenv.config();

const seeds = [
  {
    slug: "d2c-marketing-agency",
    label: "D2C Marketing Agency",
    title:
      "D2C Ecommerce Marketing Agency | Scale Profitable Brands – Upthrust",
    description:
      "Scale your D2C brand with proven ads, CRO, and retention systems. Upthrust helps ecommerce brands grow profitably with data-driven execution.",
    keywords: ["ecommerce marketing agency"],
    canonical: "https://upthrust.agency/d2c-marketing-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Scale Your D2C Brand Profitably with Upthrust",
      description:
        "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
      url: "https://upthrust.agency",
      siteName: "Upthrust",
      image: "/ogimage/ecom-opengraph-image.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Scale Your D2C Brand Profitably with Upthrust",
      description:
        "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
      image: "/ogimage/ecom-opengraph-image.png",
    },
  },
  {
    slug: "seo-agency",
    label: "SEO Agency",
    title: "SEO Agency That Gets You Found Everywhere | Upthrust",
    description:
      "SEO agency helping brands get discovered across Google, AI search and modern discovery channels through structured content systems.",
    keywords: ["SEO Agency"],
    canonical: "/seo-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "SEO Agency That Gets You Found Everywhere",
      description:
        "Build content systems that rank on Google and appear in AI answers across ChatGPT, Claude and Perplexity.",
      url: "https://upthrust.agency",
      siteName: "Upthrust",
      image: "/ogimage/seo-og-image.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Google Ads Agency That Scales Profitably",
      description:
        "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
      image: "/ogimage/seo-og-image.png",
    },
  },
  {
    slug: "google-ad-agency",
    label: "Google Ad Agency",
    title: "Google Ads Agency for Predictable Growth | Upthrust",
    description:
      "Scale your D2C brand with proven ads, CRO, and retention systems. Upthrust helps ecommerce brands grow profitably with data-driven execution.",
    keywords: ["Google Ads Agency"],
    canonical: "/google-ad-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Google Ads Agency That Scales Profitably",
      description:
        "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
      url: "https://upthrust.agency",
      siteName: "Upthrust",
      image: "/google-ads/ogimg.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Google Ads Agency That Scales Profitably",
      description:
        "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
      image: "/google-ads/ogimg.png",
    },
  },
  {
    slug: "meta-ad-agency",
    label: "Meta Ad Agency",
    title: "Meta Ads Agency for Scalable Growth | Upthrust",
    description:
      "Meta Ads agency optimizing 6Cr+ in monthly spend. Creative testing, structured scaling, and profitable growth across Facebook & Instagram",
    keywords: ["Google Ads Agency"],
    canonical: "https://upthrust.agency/meta-ad-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Meta Ads Agency Built for Profitable Scaling",
      description:
        "We optimize 6Cr+ in monthly Meta ad spend using creative testing and structured scaling systems that drive measurable revenue.",
      url: "https://upthrust.agency",
      siteName: "Upthrust",
      image: "/meta-ads/meta-opengraph-image.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Google Ads Agency That Scales Profitably",
      description:
        "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
      image: "/google-ads/ogimg.png",
    },
  },
  {
    slug: "performance-marketing-agency",
    label: "Performance Marketing Agency",
    title: "Performance Marketing Agency That Drives Profit | Upthrust",
    description:
      "Performance marketing agency focused on profitable growth. Audit your ad account, fix wasted spend, and scale campaigns with measurable ROI.",
    keywords: ["Performance Marketing Agency"],
    canonical: "https://upthrust.agency/performance-marketing-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Performance Marketing Agency Built for Real Revenue Growth",
      description:
        "Stop guessing with ads. Our performance marketing team audits your ad account, fixes wasted spend, and builds scalable revenue campaigns.",
      url: "https://upthrust.agency/performance-marketing-agency",
      siteName: "Upthrust",
      image: "",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "",
      description: "",
      image: "",
    },
  },
  {
    slug: "creative-agency",
    label: "Creative Agency",
    title: "Creative Ads Agency for Scalable Growth | Upthrust",
    description:
      "Creative ads agency specializing in performance creatives, UGC ads and structured creative testing systems that drive scalable revenue growth.",
    keywords: ["Creative Ads Agency"],
    canonical: "https://upthrust.agency/creative-agency",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Creative Ads Agency Built for Performance",
      description:
        "High-converting ad creatives, structured creative testing systems and UGC ads built to scale paid acquisition profitably.",
      url: "https://upthrust.agency/creative-agency",
      siteName: "Upthrust",
      image: "/ogimage/creative-og-image.png",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Creative Ads Agency That Scales Profitably",
      description:
        "We manage $12M+ in Creative Ads spend with structured PPC systems built for predictable scaling and real ROI",
      image: "/google-ads/ogimg.png",
    },
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Connected to MongoDB");

    let created = 0;
    let skipped = 0;

    for (const entry of seeds) {
      const existing = await PageMeta.findOne({ slug: entry.slug });
      if (existing) {
        console.log(`  skip  /${entry.slug}  (already exists)`);
        skipped++;
        continue;
      }
      await PageMeta.create(entry);
      console.log(`  ✓ created  /${entry.slug}`);
      created++;
    }

    console.log(`\nDone — ${created} created, ${skipped} skipped`);
  } catch (err) {
    console.error("Seed failed:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
