import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  CheckCircle2,
  Phone,
  Mail,
  Keyboard,
  Eye,
  Monitor,
  Sparkles,
  FileCheck2,
  Layers,
  HelpCircle,
  AlertCircle,
  Clock,
  Shield,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "Express Pharmacy & DME's commitment to an accessible website for every visitor, the standards we work toward, and how to report a barrier.",
  path: "/accessibility",
});

const accessibilityFeatures = [
  {
    icon: Keyboard,
    title: "Full Keyboard Navigation",
    desc: "All interactive elements, navigation menus, and form inputs can be operated smoothly using standard keyboard commands without traps.",
  },
  {
    icon: Eye,
    title: "High Contrast & Legibility",
    desc: "Colors and text sizes are designed to meet WCAG AA contrast standards across both light themes and branded accents.",
  },
  {
    icon: Monitor,
    title: "Screen Reader Compatibility",
    desc: "Built with semantic HTML5 landmarks, ARIA labels, descriptive image alt text, and clear heading hierarchies for assistive technologies.",
  },
  {
    icon: Layers,
    title: "Zoom & Responsive Reflow",
    desc: "Supports browser zoom up to 200% without loss of content, functionality, or overlapping text on desktops, tablets, and smartphones.",
  },
];

export default function AccessibilityPage() {
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
                <li aria-current="page" className="text-[#00A300]">Accessibility</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A300]/20 bg-[#00A300]/5 text-[#00A300]">
              <Accessibility className="w-4 h-4 text-[#00A300]" />
              <span>Inclusive Healthcare Experience</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-5">
              Accessibility Statement
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Our commitment to providing an accessible, inclusive, and barrier-free digital experience for all patients, caregivers, and providers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-neutral-600">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A300]" />
                WCAG 2.2 Level AA Target
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                <Shield className="w-3.5 h-3.5 text-[#00A300]" />
                ADA &amp; Section 508 Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Commitment Card */}
            <div className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Our Guarantee</span>
                  <h2 className="text-2xl font-bold text-black">Our Commitment to Accessibility</h2>
                </div>
              </div>
              <p className="text-base text-neutral-700 leading-relaxed">
                At <strong>Express Pharmacy &amp; DME</strong>, we believe every individual deserves equal and seamless access to healthcare services, prescription information, and durable medical equipment. We continuously work toward compliance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>, as well as applicable mandates under the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act.
              </p>
            </div>

            {/* Accessibility Features Grid */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2 px-2">
                <FileCheck2 className="w-5 h-5 text-[#00A300]" />
                <span>Accessibility Measures Implemented</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {accessibilityFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl border border-[#00A300]/15 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 text-[#00A300] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{feat.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Checklist */}
            <div className="rounded-3xl border border-[#00A300]/15 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00A300]" />
                <span>Core Standards &amp; Practices</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                {[
                  "Semantic HTML structure with descriptive ARIA landmarks",
                  "Meaningful alternative text for all informative imagery",
                  "Clear visible focus indicators for all interactive controls",
                  "Consistent heading hierarchy (H1 through H4)",
                  "Form inputs accompanied by explicitly associated labels",
                  "Zero automated flashing or seizure-inducing content",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A300] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Party Notice */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 sm:p-6 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-neutral-200 text-neutral-600 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="text-sm text-neutral-600 leading-relaxed">
                <p className="font-semibold text-black mb-1">External Links &amp; Third-Party Services</p>
                <p>
                  Some external resources (such as manufacturer catalogs or partner clinical portals) may be operated by third parties. When barriers are identified, we actively collaborate with our partners to supply alternative formats upon request.
                </p>
              </div>
            </div>

            {/* Assistance & Barrier Reporting Card */}
            <div className="rounded-3xl border-2 border-[#00A300]/30 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00A300] text-white flex items-center justify-center shadow-md">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A300]">Direct Support</span>
                  <h2 className="text-2xl font-bold text-black">Need Alternative Formats or Hit a Barrier?</h2>
                </div>
              </div>

              <p className="text-base text-neutral-700 leading-relaxed mb-6">
                If you experience any difficulty accessing content on this website or require information in an alternative format (such as large print, plain text, or audio over the phone), our clinical and support team is ready to assist you immediately.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#00A300]/20 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300] block mb-1">
                      24/7 Pharmacist Hotline
                    </span>
                    <p className="text-sm font-semibold text-black mb-3">
                      Speak with our pharmacist for immediate assistance
                    </p>
                  </div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white bg-[#00A300] hover:bg-[#007A00] transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {siteConfig.phone}
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#00A300]/20 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300] block mb-1">
                      Email Accessibility Team
                    </span>
                    <p className="text-sm font-semibold text-black mb-3">
                      We acknowledge reports within two business days
                    </p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Accessibility%20Feedback`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-[#007A00] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00A300]" />
                  Statement last reviewed: September 25, 2026
                </span>
                <Link href="/privacy" className="text-[#00A300] font-semibold hover:underline">
                  View Privacy Policy &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
