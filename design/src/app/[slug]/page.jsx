
import { designPages } from "@/data/designPages";
import dynamic from "next/dynamic";

const DesignLayout = dynamic(() =>
    import("@/layouts/DesignLayout")
);


const pageConfig = [
    {
        source: designPages,
        component: DesignLayout,
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