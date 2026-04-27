
import { agencyPages } from "@/data/agencyPages";
import { googlePages } from "@/data/googlePages";
import { metaPages } from "@/data/metaPages";
import { seoPages } from "@/data/seoPages";

import { createMeta, Meta } from "@/lib/metadata";

import dynamic from "next/dynamic";

const EcomLayout = dynamic(() =>
    import("@/layouts/EcomAgency")
);

const GoogleAgencyLayout = dynamic(() =>
    import("@/layouts/GoogleAgency")
);

const MetaAgencyLayout = dynamic(() =>
    import("@/layouts/MetaAgency")
)
const SeoLayout = dynamic(() =>
    import("@/layouts/SeoAgency")
)


const pageConfig = [
    {
        source: agencyPages,
        component: EcomLayout,
    },
    {
        source: googlePages,
        component: GoogleAgencyLayout,
    },
    {
        source: metaPages,
        component: MetaAgencyLayout,
    },
    {
        source: seoPages,
        component: SeoLayout,
    },
];


export default async function Page({ params }) {
    const { slug } = await params;

    if (!slug) {
        return <div>Invalid URL</div>;
    }

    for (const page of pageConfig) {
        const data = page.source?.[slug];

        if (data) {
            const Component = page.component;
            return <Component data={data} />;
        }
    }

    notFound();
}




export async function generateMetadata({ params }) {
    const { slug } = await params;

    if (!slug) {
        return {
            title: "Invalid Page",
        };
    }

    if (Meta[slug]) {
        return Meta[slug];
    }

    for (const page of pageConfig) {
        const data = page.source?.[slug];

        if (data) {
            return createMeta({
                title: data.title,
                description: data.description,
                path: data.path,
                keywords: data.keywords,
                image: data.image,
            });
        }
    }

    return {
        title: "Page Not Found",
    };
}


