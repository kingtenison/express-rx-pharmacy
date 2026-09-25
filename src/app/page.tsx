import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServicesList from "@/components/ServicesList";
import CategorySection from "@/components/CategorySection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import { services, storefront } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

// Title/description inherit from the root layout; add absolute social/canonical URLs.
export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl("/") },
  openGraph: { url: absoluteUrl("/") },
};

const categoryListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Care by Category",
  description: "Browse the Express Pharmacy catalog by care category — clinician-reviewed treatments compounded by licensed U.S. pharmacies.",
  itemListElement: storefront.categories.map((cat, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cat.title,
    description: cat.tagline,
    url: cat.href,
  })),
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ServicesList services={services} />
      <CategorySection />
      <AudienceSection />
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryListSchema) }} />
    </>
  );
}
