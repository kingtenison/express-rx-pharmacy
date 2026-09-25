import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

/** Absolute URL for a path, based on the canonical origin in `siteConfig.url`. */
export function absoluteUrl(path: string = "/"): string {
  const url = new URL(path, siteConfig.url);
  // Site uses no trailing slash — keep the root canonical identical to it.
  return url.pathname === "/" && !url.search && !url.hash ? url.origin : url.toString();
}

/**
 * Renders a JSON-LD block. Next.js docs recommend a native <script> tag
 * (not next/script) for structured data; `<` is escaped to avoid XSS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

type BreadcrumbItem = { name: string; path: string };

/**
 * Convenience builder for per-page metadata that always emits a
 * self-referencing canonical + social image + description.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero-bg.jpg",
  type = "website",
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  // Keep SERP meta descriptions under ~160 characters (truncate on a word boundary).
  const metaDescription =
    description.length > 160 ? `${description.slice(0, 157).replace(/\s+\S*$/, "")}…` : description;
  return {
    title,
    description: metaDescription,
    keywords,
    alternates: { canonical: absoluteUrl(path) },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description: metaDescription,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [image],
    },
  };
}

/** Organization / local business — the pharmacy itself (site-wide). */
export function pharmacySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${absoluteUrl("/")}#pharmacy`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/logo-nav.png"),
    logo: absoluteUrl("/images/logo-nav.png"),
    telephone: "+16144959097",
    faxNumber: "+16144483757",
    email: siteConfig.email,
    description: siteConfig.description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Columbus",
      addressRegion: "OH",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "13:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Columbus" },
      { "@type": "State", name: "Ohio" },
    ],
    availableService: [
      { "@type": "MedicalTherapy", name: "Medication compounding" },
      { "@type": "MedicalTherapy", name: "Long-term care pharmacy services" },
      { "@type": "MedicalTherapy", name: "Specialty pharmacy services" },
    ],
  };
}

/** WebSite node — pairs with the Pharmacy node via `publisher`. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": `${absoluteUrl("/")}#pharmacy` },
  };
}

/** FAQPage — drives rich results and answer-engine extraction. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** BreadcrumbList — hierarchy for search results and AI context. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** BlogPosting with author, publisher, dates and image. */
export function blogPostingSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author,
  category,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author: string;
  category?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(path),
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    image: image ? [absoluteUrl(image)] : undefined,
    datePublished,
    dateModified: dateModified ?? datePublished,
    articleSection: category,
    keywords: keywords?.join(", "),
    inLanguage: "en-US",
    author: { "@type": "Organization", name: author, url: absoluteUrl("/about") },
    publisher: {
      "@type": "Pharmacy",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo-nav.png") },
    },
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  };
}
