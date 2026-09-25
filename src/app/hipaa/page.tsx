import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "HIPAA Notice of Privacy Practices",
  description:
    "How Express Pharmacy & DME may use and disclose your protected health information, your privacy rights, and how to file a complaint.",
  path: "/hipaa",
});

export default function HipaaPage() {
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
                <li aria-current="page">HIPAA Notice of Privacy Practices</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="mt-4 text-sm text-gray-500">Effective September 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="rounded-xl border border-[#00A300]/20 bg-[#00A300]/5 p-4 text-sm text-gray-600 mb-10">
              This notice describes how medical information about you may be used and disclosed, and how you can get
              access to that information. It is required by the HIPAA Privacy Rule (45 CFR Parts 160 and 164). Please
              review it carefully — this draft should be confirmed by your privacy officer or counsel before it is
              treated as final.
            </p>

            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Who is covered by this notice</h2>
                <p className="mb-3">
                  This notice applies to Express Pharmacy &amp; DME (&quot;we,&quot; &quot;us&quot;), a licensed Ohio
                  pharmacy, and to workforce members who handle your health information. It covers protected health
                  information (PHI) we create, receive, maintain, or transmit about current and former patients, as
                  well as residents of facilities we serve.
                </p>
                <p>
                  We are required by law to maintain the privacy of your health information, to provide this notice of
                  our legal duties and privacy practices, and to follow the practices described here.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">How we may use and disclose your information</h2>
                <p className="mb-4">We may use and share your health information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Treatment.</strong> Dispensing your prescriptions, coordinating with your prescriber,
                    counseling you about medications, and sharing information with other providers involved in your
                    care.
                  </li>
                  <li>
                    <strong>Payment.</strong> Billing your insurer, confirming coverage, requesting prior
                    authorizations, collecting copays, and processing claims.
                  </li>
                  <li>
                    <strong>Health care operations.</strong> Quality assessment, compliance reviews, staff training,
                    and other activities needed to run the pharmacy and improve care.
                  </li>
                  <li>
                    <strong>Required by law.</strong> When federal, state, or local law requires disclosure — such as
                    reporting to public health authorities, adverse drug reactions, or court orders.
                  </li>
                  <li>
                    <strong>Workers&apos; compensation, law enforcement, and other specific situations</strong> as
                    permitted by HIPAA where a specific basis applies.
                  </li>
                  <li>
                    <strong>With your written authorization.</strong> For marketing, sale of information, or most other
                    purposes not listed here, we will ask for your written authorization first. You may revoke an
                    authorization at any time in writing.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your privacy rights</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>The right to inspect and copy</strong> your health information, with limited exceptions.
                    Contact us to request records; we may charge a reasonable, cost-based fee.
                  </li>
                  <li>
                    <strong>The right to request an amendment</strong> to information you believe is incorrect. We may
                    deny the request if we did not create it or if it is accurate and complete.
                  </li>
                  <li>
                    <strong>The right to an accounting of disclosures</strong> of your health information for the six
                    years preceding your request, excluding those made for treatment, payment, and operations.
                  </li>
                  <li>
                    <strong>The right to request restrictions</strong> on how we use or disclose your information for
                    treatment, payment, or operations. We are not required to agree, but will consider every request.
                  </li>
                  <li>
                    <strong>The right to request confidential communications</strong> — for example, asking us to call
                    a specific phone number or mail to a certain address.
                  </li>
                  <li>
                    <strong>The right to receive a copy of this notice</strong> in paper form at any time, and to be
                    notified if a breach affects your information.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our duties</h2>
                <p>
                  We are required by law to protect the privacy of your health information, to notify you promptly if a
                  breach compromises that information, and to follow the terms of the notice currently in effect. We
                  may revise this notice, and the revised version will apply to all information we maintain. The new
                  notice will be available on this page and at our pharmacy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Complaints and contact</h2>
                <p className="mb-3">
                  If you believe your privacy rights have been violated, you may file a complaint with us at{" "}
                  {siteConfig.phone} or {siteConfig.email}. You will not be retaliated against for filing a complaint.
                </p>
                <p className="mb-3">
                  You may also file a complaint with the U.S. Department of Health and Human Services, Office for Civil
                  Rights, or contact their regional office. Details are available at hhs.gov/hipaa/filing-a-complaint.
                </p>
                <p>
                  Questions about this notice or your health information: call {siteConfig.phone}, fax {siteConfig.fax},
                  or email {siteConfig.email}. See also our{" "}
                  <Link href="/privacy" className="text-[#00A300] font-semibold hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for information this website collects.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
