import { notFound } from "next/navigation";
import { createMeta } from "@/lib/metadata";
import CaseStudy from "@/layouts/CaseStudy";

async function getPageData(slug) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/copy-pages/${slug}`,
      { cache: "no-store" }
    );
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch {
    return null;
  }
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const data = await getPageData(slug);
  if (!data) notFound();
  return <CaseStudy data={data} />;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  /* Try dedicated meta record first */
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/page-meta/${slug}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const { data } = await res.json();
      return createMeta({
        title: data.title || "",
        description: data.description || "",
        keywords: data.keywords || [],
        path: data.canonical || `/case-studies/${slug}`,
        robots: data.robots || { index: true, follow: true },
        openGraph: {
          title: data.openGraph?.title || data.title || "",
          description: data.openGraph?.description || data.description || "",
          url:
            data.openGraph?.url ||
            `https://upthrust.agency/case-studies/${slug}`,
          siteName: data.openGraph?.siteName || "Upthrust",
          images: data.openGraph?.image
            ? [
                {
                  url: data.openGraph.image,
                  width: 1200,
                  height: 630,
                  alt: data.openGraph.title || data.title,
                },
              ]
            : undefined,
          type: data.openGraph?.type || "website",
        },
        twitter: {
          card: data.twitter?.card || "summary_large_image",
          title: data.twitter?.title || data.title || "",
          description: data.twitter?.description || data.description || "",
          images: data.twitter?.image ? [data.twitter.image] : undefined,
        },
      });
    }
  } catch {
    /* fall through to page data fallback */
  }

  /* Fallback: derive metadata from the page's additionalFields */
  const data = await getPageData(slug);
  if (!data) return { title: "Page Not Found" };

  const af = data.additionalFields || {};
  return createMeta({
    title:
      af.clientName
        ? `${af.clientName} Case Study | Upthrust`
        : data.title || "Case Study | Upthrust",
    description: af.overviewHeadline || af.overviewBody || "",
    path: `/case-studies/${slug}`,
  });
}
