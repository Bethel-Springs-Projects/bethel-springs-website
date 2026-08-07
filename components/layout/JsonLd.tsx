import Script from "next/script";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bethel Springs",
    image: "https://bethelspringsgroup.com/og-image.png",
    description:
      "Professional domiciliary care services for adults with autism and learning disabilities across the UK.",
    address: {
      "@type": "PostalAddress",
      // streetAddress: "76 The Brent",
      addressLocality: "Dartford",
      addressRegion: "Dartford",
      postalCode: "DA1 1YW",
      addressCountry: "GB",
    },
    telephone: "+44-7974-369-854",
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "££",
    // todo
    sameAs: [
      "https://twitter.com/bethelsprings",
      "https://linkedin.com/company/bethelsprings",
    ],
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
