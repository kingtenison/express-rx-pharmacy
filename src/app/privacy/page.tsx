import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Cookie,
  UserCheck,
  Baby,
  RefreshCw,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Express Pharmacy & DME collects, uses, and protects personal information on the Express Pharmacy & DME website, and the choices available to you.",
  path: "/privacy",
});

const sections = [
  { id: "information-we-collect", label: "Information We Collect", icon: Eye },
  { id: "how-we-use", label: "How We Use Information", icon: FileText },
  { id: "sharing", label: "When We Share Information", icon: UserCheck },
  { id: "hipaa", label: "Health Information & HIPAA", icon: Shield },
  { id: "cookies", label: "Cookies & Analytics", icon: Cookie },
  { id: "choices", label: "Your Choices & Rights", icon: Lock },
  { id: "security", label: "Data Security & Retention", icon: Lock },
  { id: "children", label: "Children's Privacy", icon: Baby },
  { id: "changes", label: "Updates & Contact", icon: RefreshCw },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFCFA] text-neutral-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#00A300]/10 bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 900px 450px at 50% -10%, rgba(0,163,0,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
              <ol className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-3.5 py-1.5 rounded-full">
                <li>
                  <Link href="/" className="hover:text-[#00A300] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="opacity-40">/</li>
                <li aria-current="page" className="text-[#00A300]">Privacy Policy</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A300]/20 bg-[#00A300]/5 text-[#00A300]">
              <Shield className="w-4 h-4 text-[#00A300]" />
              <span>Legal & Transparency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-5">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
              How Express Pharmacy &amp; DME collects, safeguards, and respects your personal data.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-neutral-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                <RefreshCw className="w-3.5 h-3.5 text-[#00A300]" />
                Last updated: September 25, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A300]" />
                HIPAA &amp; State Law Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
              <div className="rounded-3xl border border-[#00A300]/15 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#00A300] mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>On This Page</span>
                </p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1.5 text-sm">
                    {sections.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-neutral-600 hover:text-black hover:bg-neutral-50 transition-all group font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#00A300] transition-colors" />
                          <span className="leading-snug">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="rounded-3xl border border-[#00A300]/20 bg-gradient-to-br from-[#00A300]/8 to-[#00A300]/2 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#00A300]" />
                  Have Questions?
                </h3>
                <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                  Our team is available 24/7 for privacy and medication questions.
                </p>
                <div className="space-y-2 text-xs font-semibold">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2 text-[#007A00] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-[#007A00] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <main className="space-y-8 order-1 lg:order-2">
              {/* Important Disclaimer Notice */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#00A300]/10 text-[#00A300] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="text-sm text-neutral-700 leading-relaxed">
                  <p className="font-semibold text-black mb-1">Notice of Scope &amp; Transparency</p>
                  <p>
                    This policy describes how Express Pharmacy &amp; DME (&quot;ExpressRx,&quot; &quot;we,&quot; &quot;us&quot;) handles
                    information collected through the Express Pharmacy &amp; DME website. Protected health information (PHI)
                    provided for prescriptions and patient care is governed by our{" "}
                    <Link href="/hipaa" className="text-[#00A300] font-semibold underline underline-offset-2 hover:text-[#007A00]">
                      Notice of Privacy Practices (HIPAA)
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Section 1: Information We Collect */}
              <section
                id="information-we-collect"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 01</span>
                    <h2 className="text-2xl font-bold text-black">Information We Collect</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    You provide information directly when you contact us — by phone at <strong>{siteConfig.phone}</strong>, by fax at{" "}
                    <strong>{siteConfig.fax}</strong>, by email at <strong>{siteConfig.email}</strong>, or through a form on this website. That may include
                    your name, phone number, email address, the service you are asking about, and the content of your message or referral.
                  </p>
                  <p>
                    When you visit the Express Pharmacy &amp; DME website, our hosting provider may automatically receive standard technical
                    information such as your IP address, browser type, device type, the pages you visit, and the time of
                    your visit, stored in server logs.
                  </p>
                  <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200 text-sm">
                    <strong>Payment Note:</strong> We do not ask for payment card details through this website. Pharmacy purchases and billing are
                    handled separately and securely through our licensed pharmacy management systems.
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Information */}
              <section
                id="how-we-use"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 02</span>
                    <h2 className="text-2xl font-bold text-black">How We Use Information</h2>
                  </div>
                </div>

                <div className="text-neutral-700 leading-relaxed text-base space-y-3">
                  <p>We use the information collected through our website strictly for legitimate business and healthcare purposes:</p>
                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "To respond promptly to your inquiries and prescription requests",
                      "To schedule, coordinate, and deliver medications across Ohio",
                      "To provide prior authorization and insurance billing assistance",
                      "To operate, maintain, and optimize website performance",
                      "To protect system security and comply with pharmacy regulations",
                      "To facilitate seamless physician and clinical provider referrals",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#00A300] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 3: When We Share Information */}
              <section
                id="sharing"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 03</span>
                    <h2 className="text-2xl font-bold text-black">When We Share Information</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p className="font-semibold text-black">
                    We do not sell, rent, or trade your personal information to third parties or data brokers.
                  </p>
                  <p>
                    We share information only where needed to provide what you requested — for example with your prescriber, an insurer or pharmacy benefit manager (PBM) processing a claim, a trusted medical equipment supplier fulfilling an order, or a courier delivery service — or where mandated by law, court order, or healthcare regulatory authorities.
                  </p>
                  <p>
                    If we use service providers to support our operations (such as HIPAA-compliant cloud hosting or secure messaging), they are legally bound to uphold data protection standards consistent with this policy.
                  </p>
                </div>
              </section>

              {/* Section 4: Health Information & HIPAA */}
              <section
                id="hipaa"
                className="rounded-3xl border-2 border-[#00A300]/30 bg-gradient-to-br from-emerald-50/50 to-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300] text-white flex items-center justify-center shadow-md">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 04</span>
                    <h2 className="text-2xl font-bold text-black">Health Information &amp; HIPAA</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    If you are our patient or a facility we serve, any medical or prescription information we hold is protected under the Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule.
                  </p>
                  <p>
                    Our dedicated{" "}
                    <Link href="/hipaa" className="text-[#00A300] font-bold underline hover:text-[#007A00]">
                      Notice of Privacy Practices
                    </Link>{" "}
                    explains how we use protected health information (PHI) and how you may exercise your legal rights regarding medical records.
                  </p>
                  <div className="rounded-xl bg-white p-4 border border-[#00A300]/20 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-black">Read the complete HIPAA Notice of Privacy Practices</span>
                    <Link
                      href="/hipaa"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A300] hover:bg-[#007A00] px-4 py-2 rounded-full transition-all shrink-0"
                    >
                      View HIPAA Notice
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 5: Cookies & Analytics */}
              <section
                id="cookies"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 05</span>
                    <h2 className="text-2xl font-bold text-black">Cookies &amp; Analytics</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    This website may use essential cookies to maintain site security, session integrity, and user preferences. We may also use privacy-respecting analytics tools to understand visitor interactions and improve accessibility.
                  </p>
                  <p>
                    You can manage or disable cookies via your browser preferences. Note that disabling essential cookies may impact certain interactive features of the website.
                  </p>
                </div>
              </section>

              {/* Section 6: Your Choices & Rights */}
              <section
                id="choices"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 06</span>
                    <h2 className="text-2xl font-bold text-black">Your Choices &amp; Rights</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    You can ask us to review, correct, or delete personal contact information you have provided through the website, or opt out of non-clinical communications, by calling <strong>{siteConfig.phone}</strong> or emailing <strong>{siteConfig.email}</strong>.
                  </p>
                  <p>
                    We uphold state and federal privacy protections and will never discriminate or penalize you for exercising your privacy rights.
                  </p>
                </div>
              </section>

              {/* Section 7: Data Security & Retention */}
              <section
                id="security"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 07</span>
                    <h2 className="text-2xl font-bold text-black">Data Security &amp; Retention</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    We employ rigorous technical, physical, and administrative safeguards — including SSL/TLS encryption, firewall architectures, and restricted access protocols — to protect information. Data is retained only as long as necessary to fulfill healthcare and legal statutory requirements.
                  </p>
                </div>
              </section>

              {/* Section 8: Children's Privacy */}
              <section
                id="children"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 08</span>
                    <h2 className="text-2xl font-bold text-black">Children&apos;s Privacy</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    This website is not designed for or directed to individuals under 13 years of age. Pediatric prescriptions and compounding inquiries must be submitted directly by a parent, legal guardian, or licensed healthcare provider.
                  </p>
                </div>
              </section>

              {/* Section 9: Updates & Contact */}
              <section
                id="changes"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 09</span>
                    <h2 className="text-2xl font-bold text-black">Policy Updates &amp; Contact</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    We periodically review and update this policy. Material updates will be published on this page with an updated revision date.
                  </p>
                  <div className="rounded-2xl bg-neutral-50 p-6 border border-neutral-200 mt-6 space-y-3">
                    <p className="font-bold text-black">Express Pharmacy &amp; DME</p>
                    <p className="text-sm">Columbus, Ohio &bull; Serving Patients &amp; Facilities Statewide</p>
                    <div className="flex flex-wrap gap-4 pt-2 text-sm">
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="font-semibold text-[#00A300] hover:underline flex items-center gap-1.5">
                        <Phone className="w-4 h-4" /> {siteConfig.phone}
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#00A300] hover:underline flex items-center gap-1.5">
                        <Mail className="w-4 h-4" /> {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
