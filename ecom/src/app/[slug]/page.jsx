
// import { agencyPages } from "@/data/agencyPages";
// import { googlePages } from "@/data/googlePages";
// import { metaPages } from "@/data/metaPages";
// import { seoPages } from "@/data/seoPages";

// import { createMeta, Meta } from "@/lib/metadata";

// import dynamic from "next/dynamic";

// const EcomLayout = dynamic(() =>
//     import("@/layouts/EcomAgency")
// );

// const GoogleAgencyLayout = dynamic(() =>
//     import("@/layouts/GoogleAgency")
// );

// const MetaAgencyLayout = dynamic(() =>
//     import("@/layouts/MetaAgency")
// )
// const SeoLayout = dynamic(() =>
//     import("@/layouts/SeoAgency")
// )


// const pageConfig = [
//     {
//         source: agencyPages,
//         component: EcomLayout,
//     },
//     {
//         source: googlePages,
//         component: GoogleAgencyLayout,
//     },
//     {
//         source: metaPages,
//         component: MetaAgencyLayout,
//     },
//     {
//         source: seoPages,
//         component: SeoLayout,
//     },
// ];


// export default async function Page({ params }) {
//     const { slug } = await params;

//     if (!slug) {
//         return <div>Invalid URL</div>;
//     }

//     for (const page of pageConfig) {
//         const data = page.source?.[slug];

//         if (data) {
//             const Component = page.component;
//             return <Component data={data} />;
//         }
//     }

//     notFound();
// }

// export async function generateMetadata({ params }) {
//     const { slug } = await params;

//     if (!slug) {
//         return {
//             title: "Invalid Page",
//         };
//     }

//     if (Meta[slug]) {
//         return Meta[slug];
//     }

//     for (const page of pageConfig) {
//         const data = page.source?.[slug];

//         if (data) {
//             return createMeta({
//                 title: data.title,
//                 description: data.description,
//                 path: data.path,
//                 keywords: data.keywords,
//                 image: data.image,
//             });
//         }
//     }

//     return {
//         title: "Page Not Found",
//     };
// }


// app/[slug]/page.jsx

import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import { createMeta } from "@/lib/metadata";

const EcomLayout = dynamic(() => import("@/layouts/EcomAgency"));
const GoogleAgencyLayout = dynamic(() => import("@/layouts/GoogleAgency"));
const MetaAgencyLayout = dynamic(() => import("@/layouts/MetaAgency"));
const SeoLayout = dynamic(() => import("@/layouts/SeoAgency"));
const PerformanceAgencyLayout = dynamic(() => import("@/layouts/PerformanceAgency"));
const CreativeLayout = dynamic(() => import("@/layouts/CreativeAgency"));

// Decide layout from parent page
const layoutMap = {
    "d2c-marketing-agency": EcomLayout,
    "google-ad-agency": GoogleAgencyLayout,
    "meta-ad-agency": MetaAgencyLayout,
    "seo-agency": SeoLayout,
    "performance-marketing-agency": PerformanceAgencyLayout,
    "creative-agency": CreativeLayout
};


async function getPageData(slug) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/copy-pages/${slug}`,
            {
                cache: "no-store",
            }
        );


        if (!response.ok) {
            return null;
        }

        const result = await response.json();

        console.log("API Data:", result.data);

        return result.data;

    } catch (error) {
        console.log("API Error:", error);
        return null;
    }
}


export default async function Page({ params }) {

    const { slug } = await params;

    const data = await getPageData(slug);

    if (!data) {
        notFound();
    }



    const parentType =
        data.parentPage?.url;

    const Component =
        layoutMap[parentType];

    return <Component data={data} />;
}



// export async function generateMetadata({ params }) {

//     const { slug } = await params;

//     const data = await getPageData(slug);

//     if (!data) {
//         return {
//             title: "Page Not Found",
//         };
//     }

//     return createMeta({
//         title: data.title,
//         description:
//             data.additionalFields?.description || "",
//         keywords:
//             data.additionalFields?.keywords || [],
//         image:
//             data.additionalFields?.image || "",
//         path: `/${slug}`,
//     });
// }



export async function generateMetadata({ params }) {
    const { slug } = await params;

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
                path: data.canonical || `/${slug}`,
                robots: data.robots || { index: true, follow: true },

                // Pass the full OG object — createMeta spreads it into openGraph
                openGraph: {
                    title: data.openGraph?.title || data.title || "",
                    description: data.openGraph?.description || data.description || "",
                    url: data.openGraph?.url || `https://upthrust.agency/${slug}`,
                    siteName: data.openGraph?.siteName || "Upthrust",
                    images: data.openGraph?.image
                        ? [{ url: data.openGraph.image, width: 1200, height: 630, alt: data.openGraph.title || data.title }]
                        : undefined,
                    type: data.openGraph?.type || "website",
                },

                // Pass the full Twitter object
                twitter: {
                    card: data.twitter?.card || "summary_large_image",
                    title: data.twitter?.title || data.title || "",
                    description: data.twitter?.description || data.description || "",
                    images: data.twitter?.image ? [data.twitter.image] : undefined,
                },
            });
        }
    } catch (_) { }

    // Fallback to copy page data if no dedicated meta record exists
    const data = await getPageData(slug);
    if (!data) return { title: "Page Not Found" };

    return createMeta({
        title: data.additionalFields?.title || data.title || "",
        path: `/${slug}`,
    });
}