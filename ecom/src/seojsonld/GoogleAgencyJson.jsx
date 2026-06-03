export default function GoogleAgencyJson({ faqs = [] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://upthrust.agency/#organization",
        "name": "Upthrust", "url": "https://upthrust.agency",
        "logo": "https://upthrust.agency/logo.png",
        "sameAs": ["https://www.linkedin.com/company/upthrust", "https://clutch.co/profile/upthrust"] },
      { "@type": "WebPage", "@id": "https://upthrust.agency/google-ad-agency#webpage",
        "url": "https://upthrust.agency/google-ad-agency",
        "name": "Google Ads Agency for Predictable Growth | Upthrust",
        "about": { "@id": "https://upthrust.agency/#organization" } },
      { "@type": "Service", "serviceType": "Google Ads / PPC Management",
        "name": "Google Ads & PPC Management",
        "provider": { "@id": "https://upthrust.agency/#organization" },
        "areaServed": "Worldwide", "url": "https://upthrust.agency/google-ad-agency" },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upthrust.agency" },
        { "@type": "ListItem", "position": 2, "name": "Google Ads Agency", "item": "https://upthrust.agency/google-ad-agency" }
      ] },
      ...(faqs?.length ? [{ "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }] : [])
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
