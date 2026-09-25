import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Express Pharmacy & DME collects, uses, and protects personal information on the Express Pharmacy & DME website, and the choices available to you.",
  path: "/privacy",
});

function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 mb-10">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A300] mb-3">On this page</p>
      <ul className="space-y-1.5 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:text-[#00A300] transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function PrivacyPage() {
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
                <li aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-gray-500">Last updated: September 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="rounded-xl border border-[#00A300]/20 bg-[#00A300]/5 p-4 text-sm text-gray-600 mb-10">
              This policy describes how Express Pharmacy &amp; DME (&quot;ExpressRx,&quot; &quot;we,&quot; &quot;us&quot;) handles
              information collected through the Express Pharmacy & DME website. It is provided for transparency and should be reviewed by
              legal counsel before it is treated as final.
            </p>

            <Toc
              items={[
                { id: "information-we-collect", label: "Information we collect" },
                { id: "how-we-use", label: "How we use information" },
                { id: "sharing", label: "When we share information" },
                { id: "hipaa", label: "Health information and HIPAA" },
                { id: "cookies", label: "Cookies and analytics" },
                { id: "choices", label: "Your choices and rights" },
                { id: "security", label: "Data security and retention" },
                { id: "children", label: "Children's privacy" },
                { id: "changes", label: "Changes and contact" },
              ]}
            />

            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2 id="information-we-collect" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Information we collect
                </h2>
                <p className="mb-3">
                  You provide information directly when you contact us — by phone at {siteConfig.phone}, by fax at{" "}
                  {siteConfig.fax}, by email at {siteConfig.email}, or through a form on this website. That may include
                  your name, phone number, email address, the service you are asking about, and the content of your
                  message or referral.
                </p>
                <p className="mb-3">
                  When you visit the Express Pharmacy & DME website, our hosting provider may automatically receive standard technical
                  information such as your IP address, browser type, device type, the pages you visit, and the time of
                  your visit, stored in server logs.
                </p>
                <p>
                  We do not ask for payment card details through this website. Pharmacy purchases and billing are
                  handled separately through our pharmacy operations.
                </p>
              </section>

              <section>
                <h2 id="how-we-use" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  How we use information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your questions, referrals, and service requests.</li>
                  <li>To schedule, deliver, and support the products and services you ask for.</li>
                  <li>To operate, maintain, and improve this website.</li>
                  <li>To protect the security of our systems and comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 id="sharing" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  When we share information
                </h2>
                <p className="mb-3">
                  We do not sell your personal information. We share information only where needed to provide what you
                  asked for — for example with a prescriber, an insurer or benefit manager processing a claim, a
                  supplier fulfilling an order, or a delivery service — or where required by law, court order, or
                  regulation.
                </p>
                <p>
                  If we ever use a service provider to process information on our behalf (for example website hosting
                  or secure messaging), we require them to handle it consistently with this policy.
                </p>
              </section>

              <section>
                <h2 id="hipaa" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Health information and HIPAA
                </h2>
                <p>
                  If you are our patient or a facility we serve, health information we hold is protected under the
                  HIPAA Privacy Rule. Our{" "}
                  <Link href="/hipaa" className="text-[#00A300] font-semibold hover:underline">
                    Notice of Privacy Practices
                  </Link>{" "}
                  explains how we may use and disclose protected health information and how you can get access to it.
                  That notice controls over anything in this policy when the two differ.
                </p>
                <p className="mt-3">
                  Please do not send urgent or sensitive health details through this website&apos;s forms. Call{" "}
                  {siteConfig.phone} instead.
                </p>
              </section>

              <section>
                <h2 id="cookies" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Cookies and analytics
                </h2>
                <p>
                  This website may use cookies or similar technologies that are required for it to function, and
                  analytics tools that help us understand which pages are useful. You can control cookies through your
                  browser settings; disabling some cookies may affect how the site works.
                </p>
              </section>

              <section>
                <h2 id="choices" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Your choices and rights
                </h2>
                <p className="mb-3">
                  You can ask us to correct or delete personal information you have given us, or to stop contacting
                  you about non-clinical matters, by calling {siteConfig.phone} or emailing {siteConfig.email}.
                </p>
                <p>
                  Depending on where you live, you may have additional rights under state or international privacy
                  laws. We will not discriminate against you for exercising any right available to you.
                </p>
              </section>

              <section>
                <h2 id="security" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Data security and retention
                </h2>
                <p>
                  We use administrative, technical, and physical safeguards appropriate to the information we hold,
                  and we retain it only as long as needed for the purposes described here, our legal obligations, and
                  pharmacy recordkeeping requirements. No method of transmission over the Internet is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 id="children" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Children&apos;s privacy
                </h2>
                <p>
                  This website is not directed to children under 13, and we do not knowingly collect personal
                  information from children through it. Information about a minor&apos;s care is handled through our
                  pharmacy processes and protected under HIPAA.
                </p>
              </section>

              <section>
                <h2 id="changes" className="text-2xl font-bold text-gray-900 mb-3 scroll-mt-28">
                  Changes and contact
                </h2>
                <p className="mb-3">
                  We may update this policy from time to time. The &quot;last updated&quot; date at the top of this page
                  reflects the most recent revision.
                </p>
                <p>
                  Questions about this policy: call {siteConfig.phone}, email {siteConfig.email}, or write to Express
                  Pharmacy &amp; DME, Columbus, Ohio. For questions about your health information, see our{" "}
                  <Link href="/hipaa" className="text-[#00A300] font-semibold hover:underline">
                    HIPAA notice
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
