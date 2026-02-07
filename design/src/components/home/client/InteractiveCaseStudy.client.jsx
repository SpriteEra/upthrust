"use client";

import dynamic from "next/dynamic";

const InteractiveCaseStudy = dynamic(
    () => import("@/components/home/InteractiveCaseStudy"),
    { ssr: false }
);

export default function InteractiveCaseStudyClient() {
    return <InteractiveCaseStudy />;
}
