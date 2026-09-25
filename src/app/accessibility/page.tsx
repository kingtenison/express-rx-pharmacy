import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "Express Pharmacy & DME's commitment to an accessible website for every visitor, the standards we work toward, and how to report a barrier.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(160deg, #f8fdf8 0%, #e8f5e8 40%, #f0f9f0 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 800px 400px at 30% 50%, rgba(0,163,0,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-5 text-xs text-gray-400">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#00A300] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Accessibility Statement</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              Accessibility Statement
            </h1>
            <p className="mt-4 text-sm text-gray-500">Last updated: September 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our commitment</h2>
                <p>
                  Express Pharmacy &amp; DME wants everyone — patients, caregivers, providers, and visitors — to be
                  able to use the Express Pharmacy & DME website. We work toward conformance with the Web Content Accessibility
                  Guidelines (WCAG) 2.2, Level AA, and with applicable requirements of the Americans with Disabilities
                  Act and Section 508 where they apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">What we do</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Structure pages with semantic headings, landmarks, and descriptive link text.</li>
                  <li>Provide text alternatives for meaningful images and interface icons.</li>
                  <li>Maintain keyboard access for navigation, forms, and interactive controls.</li>
                  <li>Design focus states and contrast that remain visible on our brand colors.</li>
                  <li>Support browser zoom and reflow without loss of content or function.</li>
                  <li>Review new pages and components for accessibility before release.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Known limitations</h2>
                <p>
                  Some third-party content we link to — such as external catalogs or documents supplied by partners —
                  may not fully meet these guidelines. When we become aware of such a barrier, we will work to address
                  it or provide the information in another format on request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Need help or hit a barrier?</h2>
                <p className="mb-3">
                  If any part of this site is difficult to use, tell us — your feedback drives the fix. And if you need
                  information from this site in another format (large print, plain text, or read aloud over the
                  phone), we will provide it.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Phone: {siteConfig.phone} (24/7 pharmacist line)</li>
                  <li>Fax: {siteConfig.fax}</li>
                  <li>Email: {siteConfig.email}</li>
                </ul>
                <p className="mt-3">
                  We aim to acknowledge accessibility feedback within two business days and to resolve issues as
                  quickly as we can.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Standards and review</h2>
                <p>
                  This statement is reviewed as this website is updated. It was last reviewed on September 25, 2026.
                  For how we handle information you share with us, see our{" "}
                  <Link href="/privacy" className="text-[#00A300] font-semibold hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
