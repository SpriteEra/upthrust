export default function SeoAgencyJson({ faqs = [] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://upthrust.agency/#organization",
        "name": "Upthrust", "url": "https://upthrust.agency",
        "logo": "https://upthrust.agency/logo.png",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "50" },
        "sameAs": ["https://www.linkedin.com/company/upthrust", "https://clutch.co/profile/upthrust"] },
      { "@type": "WebPage", "@id": "https://upthrust.agency/seo-agency#webpage",
        "url": "https://upthrust.agency/seo-agency",
        "name": "SEO Agency That Gets You Found Everywhere | Upthrust",
        "about": { "@id": "https://upthrust.agency/#organization" } },
      { "@type": "Service", "serviceType": "Search Engine Optimization",
        "name": "SEO & AI Search (AEO/GEO) Services",
        "provider": { "@id": "https://upthrust.agency/#organization" },
        "areaServed": "Worldwide", "url": "https://upthrust.agency/seo-agency" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upthrust.agency" },
        { "@type": "ListItem", "position": 2, "name": "SEO Agency", "item": "https://upthrust.agency/seo-agency" }
      ] },
      ...(faqs?.length ? [{ "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }] : [])
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
