import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileCheck2,
  Lock,
  Stethoscope,
  CreditCard,
  Building,
  Scale,
  UserCheck,
  AlertTriangle,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FileText,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "HIPAA Notice of Privacy Practices",
  description:
    "How Express Pharmacy & DME may use and disclose your protected health information, your privacy rights, and how to file a complaint.",
  path: "/hipaa",
});

const hipaaSections = [
  { id: "who-is-covered", label: "Who Is Covered", icon: Building },
  { id: "uses-disclosures", label: "Uses & Disclosures of PHI", icon: FileText },
  { id: "your-rights", label: "Your Privacy Rights", icon: Shield },
  { id: "our-duties", label: "Our Legal Duties", icon: FileCheck2 },
  { id: "complaints-contact", label: "Complaints & Contact", icon: Scale },
];

export default function HipaaPage() {
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
                <li aria-current="page" className="text-[#00A300]">HIPAA Notice</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A300]/20 bg-[#00A300]/5 text-[#00A300]">
              <Shield className="w-4 h-4 text-[#00A300]" />
              <span>Patient Privacy &amp; Federal Law</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-5">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
              How your protected medical information is safeguarded and how you can exercise your health privacy rights.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-neutral-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                <FileCheck2 className="w-3.5 h-3.5 text-[#00A300]" />
                Effective: September 25, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A300]" />
                45 CFR Parts 160 &amp; 164 Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
            {/* Sticky Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
              <div className="rounded-3xl border border-[#00A300]/15 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#00A300] mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>On This Page</span>
                </p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1.5 text-sm">
                    {hipaaSections.map((item) => (
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

              {/* Privacy Officer Contact */}
              <div className="rounded-3xl border border-[#00A300]/20 bg-gradient-to-br from-[#00A300]/8 to-[#00A300]/2 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#00A300]" />
                  Privacy Questions?
                </h3>
                <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                  Reach our Clinical Director or Pharmacist-in-Charge anytime.
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

            {/* Document Content */}
            <main className="space-y-8 order-1 lg:order-2">
              {/* Mandatory Notice Header */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#00A300]/10 text-[#00A300] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="text-sm text-neutral-700 leading-relaxed">
                  <p className="font-semibold text-black mb-1">
                    Notice of Privacy Practices Summary
                  </p>
                  <p>
                    This notice describes how medical information about you may be used and disclosed, and how you can get access to that information under the HIPAA Privacy Rule (45 CFR Parts 160 and 164). Please review it carefully.
                  </p>
                </div>
              </div>

              {/* Section 1: Who is Covered */}
              <section
                id="who-is-covered"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 01</span>
                    <h2 className="text-2xl font-bold text-black">Who is Covered by This Notice</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    This notice applies to <strong>Express Pharmacy &amp; DME</strong> (&quot;we,&quot; &quot;us&quot;), a licensed Ohio pharmacy and durable medical equipment supplier, and to all clinical and operational workforce members who handle your health information.
                  </p>
                  <p>
                    It protects all Protected Health Information (PHI) created, received, maintained, or transmitted regarding current and former patients, as well as residents of long-term care and assisted living facilities we support throughout Ohio.
                  </p>
                </div>
              </section>

              {/* Section 2: Uses and Disclosures */}
              <section
                id="uses-disclosures"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 02</span>
                    <h2 className="text-2xl font-bold text-black">How We May Use &amp; Disclose Your Health Information</h2>
                  </div>
                </div>

                <p className="text-neutral-700 mb-5">
                  We use and share protected health information for the following essential healthcare purposes without requiring prior written authorization:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Stethoscope,
                      title: "Treatment & Clinical Care",
                      desc: "Dispensing customized medications, verifying prescriptions with your doctor, conducting drug-interaction checks, and counseling you on proper dosage.",
                    },
                    {
                      icon: CreditCard,
                      title: "Payment & Insurance Billing",
                      desc: "Billing Medicare Part B, Medicaid, or private commercial insurers, obtaining prior authorizations, and coordinating copay assistance programs.",
                    },
                    {
                      icon: Building,
                      title: "Health Care Operations",
                      desc: "Conducting clinical quality assessments, USP compounding compliance reviews, pharmacist staff training, and continuous safety audits.",
                    },
                    {
                      icon: Scale,
                      title: "Mandated by Law & Public Health",
                      desc: "Reporting adverse drug events to the FDA, reporting to the Ohio Board of Pharmacy/OARRS, or complying with valid judicial subpoenas.",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col">
                        <div className="w-9 h-9 rounded-xl bg-[#00A300]/10 text-[#00A300] flex items-center justify-center mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-black text-base mb-1.5">{item.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-emerald-50/60 border border-emerald-200 p-5 mt-5 text-sm text-neutral-700">
                  <strong>Written Authorization Required:</strong> For marketing, commercial sale of PHI, or most purposes not described above, we will always obtain your written permission first. You can revoke authorization at any time in writing.
                </div>
              </section>

              {/* Section 3: Your Privacy Rights */}
              <section
                id="your-rights"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 03</span>
                    <h2 className="text-2xl font-bold text-black">Your Privacy Rights Under HIPAA</h2>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      title: "Right to Inspect & Copy Records",
                      desc: "You can request an electronic or paper copy of your medical and prescription records. We respond within statutory timelines.",
                    },
                    {
                      title: "Right to Request Amendments",
                      desc: "If you believe health information is inaccurate or incomplete, you may submit a written request to amend your record.",
                    },
                    {
                      title: "Right to an Accounting of Disclosures",
                      desc: "You have the right to request a list of certain disclosures we made of your PHI for the six years prior to your request.",
                    },
                    {
                      title: "Right to Request Restrictions",
                      desc: "You may ask us not to use or share certain PHI for treatment, payment, or operations. If you pay out-of-pocket in full, you can restrict sharing with your insurer.",
                    },
                    {
                      title: "Right to Confidential Communications",
                      desc: "You can request that we contact you at a specific phone number, alternative address, or via confidential delivery protocols.",
                    },
                    {
                      title: "Right to Paper Copy of This Notice",
                      desc: "You can ask for a paper copy of this notice at any time, even if you previously agreed to receive it electronically.",
                    },
                  ].map((right, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                      <CheckCircle2 className="w-5 h-5 text-[#00A300] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-black text-sm">{right.title}</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Our Duties */}
              <section
                id="our-duties"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 04</span>
                    <h2 className="text-2xl font-bold text-black">Our Legal Duties &amp; Breach Notification</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    We are required by federal law to maintain the privacy and security of your protected health information. If a breach occurs that may have compromised the privacy or security of your unsecured PHI, we will notify you promptly in accordance with federal regulations.
                  </p>
                  <p>
                    We must abide by the terms of this notice currently in effect. We reserve the right to modify our privacy practices, and any changes will apply to all PHI in our possession.
                  </p>
                </div>
              </section>

              {/* Section 5: Complaints & Contact */}
              <section
                id="complaints-contact"
                className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Section 05</span>
                    <h2 className="text-2xl font-bold text-black">Filing a Complaint &amp; Contact Information</h2>
                  </div>
                </div>

                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    If you believe your privacy rights have been violated, you may file a complaint with us directly or with the U.S. Department of Health and Human Services (HHS) Office for Civil Rights. <strong>We will never retaliate against you for filing a complaint.</strong>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <h3 className="font-bold text-black text-sm mb-2">Express Pharmacy Privacy Officer</h3>
                      <p className="text-xs text-neutral-600 mb-3">Columbus, Ohio &bull; Serving all of Ohio</p>
                      <div className="space-y-1.5 text-xs font-semibold">
                        <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-1.5 text-[#007A00] hover:underline">
                          <Phone className="w-3.5 h-3.5" /> {siteConfig.phone}
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 text-[#007A00] hover:underline">
                          <Mail className="w-3.5 h-3.5" /> {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <h3 className="font-bold text-black text-sm mb-2">U.S. Dept. of Health &amp; Human Services</h3>
                      <p className="text-xs text-neutral-600 mb-3">Office for Civil Rights (OCR) Regional Office</p>
                      <a
                        href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#007A00] hover:underline"
                      >
                        HHS Complaint Portal
                        <ExternalLink className="w-3.5 h-3.5" />
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
