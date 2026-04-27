export function createMeta({ title, description, keywords, image, path = "", ...overrides }) {
    const base = {
        title,
        description,
        keywords,
        metadataBase: new URL("https://upthrust.agency"),
        alternates: {
            canonical: path ? `https://upthrust.agency${path}` : "",
        },
        openGraph: {
            title,
            description,
            url: path ? `https://upthrust.agency${path}` : "",
            siteName: "Upthrust",
            images: [
                {
                    url: image ?? "/ogimage/default-og.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image ?? "/ogimage/default-og.png"],
        },
        robots: {
            index: true,
            follow: true,
        },
    };


    return {
        ...base,
        ...overrides,
        alternates: { ...base.alternates, ...overrides.alternates },
        openGraph: { ...base.openGraph, ...overrides.openGraph },
        twitter: { ...base.twitter, ...overrides.twitter },
    };
}


export const Meta = {
    "d2c-marketing-agency": createMeta({
        title: "D2C Ecommerce Marketing Agency | Scale Profitable Brands – Upthrust",

        description: "Scale your D2C brand with proven ads, CRO, and retention systems. Upthrust helps ecommerce brands grow profitably with data-driven execution.",

        keywords: [
            "ecommerce marketing agency",
        ],

        // authors: [{ name: "Upthrust" }],
        // creator: "Upthrust",
        // publisher: "Upthrust",

        metadataBase: new URL("https://upthrust.agency"),

        alternates: {
            canonical: "https://upthrust.agency/d2c-marketing-agency",
        },

        openGraph: {
            title: "Scale Your D2C Brand Profitably with Upthrust",
            description: "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
            url: "https://upthrust.agency",
            siteName: "Upthrust",
            images: [
                {
                    url: "/ogimage/ecom-opengraph-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Upthrust – D2C Ecommerce Marketing Agency",
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Scale Your D2C Brand Profitably with Upthrust",
            description: "From Meta & Google Ads to CRO and retention, we help D2C brands scale revenue without killing ROAS.",
            images: ["/ogimage/ecom-opengraph-image.png"],
        },

        robots: {
            index: true,
            follow: true,
        }
    }),

    "seo-agency": createMeta({
        title: "SEO Agency That Gets You Found Everywhere | Upthrust",

        description: "SEO agency helping brands get discovered across Google, AI search and modern discovery channels through structured content systems.",

        keywords: [
            "SEO Agency",
        ],

        metadataBase: new URL("https://upthrust.agency"),

        alternates: {
            canonical: "https://upthrust.agency/seo-agency",
        },

        openGraph: {
            title: "SEO Agency That Gets You Found Everywhere",
            description: "Build content systems that rank on Google and appear in AI answers across ChatGPT, Claude and Perplexity.",
            url: "https://upthrust.agency",
            siteName: "Upthrust",
            images: [
                {
                    url: "/ogimage/seo-og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Upthrust – D2C Ecommerce Marketing Agency",
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Google Ads Agency That Scales Profitably",
            description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
            images: ["/ogimage/seo-og-image.png"],
        },

        robots: {
            index: true,
            follow: true,
        }
    }),

    "google-ad-agency": createMeta({
        title: "Google Ads Agency for Predictable Growth | Upthrust",

        description: "Scale your D2C brand with proven ads, CRO, and retention systems. Upthrust helps ecommerce brands grow profitably with data-driven execution.",

        keywords: [
            "Google Ads Agency",
        ],

        metadataBase: new URL("https://www.upthrust.agency"),

        alternates: {
            canonical: "/google-ad-agency",
        },

        openGraph: {
            title: "Google Ads Agency That Scales Profitably",
            description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
            url: "https://www.upthrust.agency",
            siteName: "Upthrust",
            images: [
                {
                    url: "/google-ads/ogimg.png",
                    width: 1200,
                    height: 630,
                    alt: "Upthrust – D2C Ecommerce Marketing Agency",
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Google Ads Agency That Scales Profitably",
            description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
            images: ["/google-ads/ogimg.png"],
        },

        robots: {
            index: true,
            follow: true,
        }
    }),

    "meta-ad-agency": createMeta({
        title: "Meta Ads Agency for Scalable Growth | Upthrust",

        description: "Meta Ads agency optimizing 6Cr+ in monthly spend. Creative testing, structured scaling, and profitable growth across Facebook & Instagram",

        keywords: [
            "Google Ads Agency",
        ],

        metadataBase: new URL("https://www.upthrust.agency"),

        alternates: {
            canonical: "/meta-ad-agency",
        },

        openGraph: {
            title: "Meta Ads Agency Built for Profitable Scaling",
            description: "We optimize 6Cr+ in monthly Meta ad spend using creative testing and structured scaling systems that drive measurable revenue.",
            url: "https://www.upthrust.agency",
            siteName: "Upthrust",
            images: [
                {
                    url: "/meta-ads/meta-opengraph-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Upthrust – Meta Ads Agency",
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: "Google Ads Agency That Scales Profitably",
            description: "We manage $12M+ in Google Ads spend with structured PPC systems built for predictable scaling and real ROI",
            images: ["/google-ads/ogimg.png"],
        },

        robots: {
            index: true,
            follow: true,
        }
    }),

    "performance-marketing-agency": createMeta({
        title: "Performance Marketing Agency That Drives Profit | Upthrust",

        description: "Performance marketing agency focused on profitable growth. Audit your ad account, fix wasted spend, and scale campaigns with measurable ROI.",

        keywords: [
            "Performance Marketing Agency",
        ],

        metadataBase: new URL("https://www.upthrust.agency"),

        alternates: {
            canonical: "https://www.upthrust.agency/performance-marketing-agency",
        },

        openGraph: {
            title: "Performance Marketing Agency Built for Real Revenue Growth",
            description: "Stop guessing with ads. Our performance marketing team audits your ad account, fixes wasted spend, and builds scalable revenue campaigns.",
            url: "https://www.upthrust.agency/performance-marketing-agency",
            siteName: "Upthrust",
            // images: [
            //     {
            //         url: "/meta-ads/meta-opengraph-image.png",
            //         width: 1200,
            //         height: 630,
            //         alt: "Upthrust – Meta Ads Agency",
            //     },
            // ],
            type: "website",
        },

        // twitter: {
        //     card: "summary_large_image",
        //     title: "Performance Marketing Agency That Scales Profitably",
        //     description: "We manage $12M+ in Performance Marketing Agency spend with structured PPC systems built for predictable scaling and real ROI",
        //     images: ["/google-ads/ogimg.png"],
        // },

        robots: {
            index: true,
            follow: true,
        }
    }),
};
