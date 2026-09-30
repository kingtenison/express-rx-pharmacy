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
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileText,
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

const pageSections = [
  { id: "our-commitment", label: "Our Commitment", icon: Sparkles, num: "01" },
  { id: "measures-implemented", label: "Measures Implemented", icon: FileCheck2, num: "02" },
  { id: "core-standards", label: "Core Standards & Testing", icon: ShieldCheck, num: "03" },
  { id: "third-party", label: "Third-Party Services", icon: AlertCircle, num: "04" },
  { id: "report-barrier", label: "Assistance & Support", icon: HelpCircle, num: "05" },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#F8FCF9] text-neutral-900 w-full overflow-hidden">
      {/* Full-Width Immersive Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#00A300]/15 bg-white w-full">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none"
          style={{ backgroundImage: "url(/services-bg.svg)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 1200px 500px at 50% 0%, rgba(0,163,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/60">
                  <li>
                    <Link href="/" className="hover:text-[#00A300] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="opacity-40">/</li>
                  <li aria-current="page" className="text-[#00A300]">Accessibility</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00A300]/25 bg-[#00A300]/8 text-[#00A300]">
                <Accessibility className="w-4 h-4 text-[#00A300]" />
                <span>Inclusive Healthcare Experience</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black mb-5 leading-[1.05]">
                Accessibility Statement
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Our commitment to providing an accessible, barrier-free digital healthcare experience for all patients, caregivers, and providers across Ohio.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A300]" />
                WCAG 2.2 Level AA Target
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#00A300]/20 shadow-sm text-xs font-semibold text-neutral-700">
                <Shield className="w-3.5 h-3.5 text-[#00A300]" />
                ADA &amp; Section 508 Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Main Content Layout */}
      <section className="py-12 md:py-20 w-full">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">
            {/* Sticky Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
              <div className="rounded-[2rem] border border-[#00A300]/15 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#00A300] mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>On This Page</span>
                </p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1 text-sm">
                    {pageSections.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-neutral-600 hover:text-black hover:bg-neutral-50 transition-all group font-medium"
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon className="w-4 h-4 text-neutral-400 group-hover:text-[#00A300] transition-colors" />
                              <span className="leading-snug">{item.label}</span>
                            </span>
                            <span className="text-[11px] font-mono text-neutral-400 group-hover:text-[#00A300]">
                              {item.num}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Immediate Assistance Card */}
              <div className="rounded-[2rem] border border-[#00A300]/20 bg-gradient-to-br from-[#00A300]/10 via-[#00A300]/5 to-transparent p-6 shadow-sm">
                <h3 className="text-base font-bold text-black mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#00A300]" />
                  Need Accessibility Help?
                </h3>
                <p className="text-xs text-neutral-600 mb-5 leading-relaxed">
                  Call our 24/7 clinical team for live phone assistance or large print orders.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#00A300] hover:bg-[#007A00] transition-all shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Accessibility%20Assistance`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#007A00] bg-white border border-[#00A300]/25 hover:bg-neutral-50 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </aside>

            {/* Expansive Main Body */}
            <main className="space-y-8 order-1 lg:order-2 w-full">
              {/* Commitment Card */}
              <section
                id="our-commitment"
                className="rounded-[2rem] border border-[#00A300]/15 bg-white p-7 sm:p-10 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300]">Section 01</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">Our Commitment to Accessibility</h2>
                  </div>
                </div>
                <div className="space-y-4 text-neutral-700 leading-relaxed text-base">
                  <p>
                    At <strong>Express Pharmacy &amp; DME</strong>, we believe every individual deserves equal, barrier-free access to healthcare services, prescription information, compounding consultation, and durable medical equipment.
                  </p>
                  <p>
                    We continuously design, develop, and test our digital interfaces to align with the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>, as well as the Americans with Disabilities Act (ADA) Title III and Section 508 of the Rehabilitation Act.
                  </p>
                </div>
              </section>

              {/* Accessibility Features Grid */}
              <section
                id="measures-implemented"
                className="rounded-[2rem] border border-[#00A300]/15 bg-white p-7 sm:p-10 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300]">Section 02</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">Measures Implemented</h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {accessibilityFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-[#00A300]/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-[#00A300]/10 text-[#00A300] flex items-center justify-center mb-4">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold text-black mb-2">{feat.title}</h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Technical Checklist */}
              <section
                id="core-standards"
                className="rounded-[2rem] border border-[#00A300]/15 bg-white p-7 sm:p-10 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#00A300]/10 flex items-center justify-center text-[#00A300]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300]">Section 03</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">Core Standards &amp; Continuous Testing</h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {[
                    "Semantic HTML5 structure with landmark regions (header, main, nav, aside, footer)",
                    "Meaningful alternative text (alt text) for all informative and clinical imagery",
                    "High-contrast visible focus indicators for all interactive buttons and links",
                    "Rigorous heading hierarchy (H1 through H4) without skipped heading levels",
                    "Form inputs accompanied by explicitly paired labels and screen reader error hints",
                    "Zero automated flashing, strobing, or seizure-inducing animations",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#00A300] shrink-0 mt-0.5" />
                      <span className="font-medium text-neutral-800">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Third Party Notice */}
              <section
                id="third-party"
                className="rounded-[2rem] border border-neutral-200 bg-neutral-50/80 p-6 sm:p-7 flex items-start gap-4 shadow-sm scroll-mt-28"
              >
                <div className="w-10 h-10 rounded-2xl bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div className="text-sm text-neutral-600 leading-relaxed">
                  <p className="font-bold text-black text-base mb-1">External Links &amp; Third-Party Portals</p>
                  <p>
                    Some external resources (such as manufacturer PDF spec sheets or partner clinical portals) may be operated by third parties. When barriers are identified, our staff actively collaborates with partners to provide equivalent information in accessible formats upon request.
                  </p>
                </div>
              </section>

              {/* Assistance & Barrier Reporting Card */}
              <section
                id="report-barrier"
                className="rounded-[2rem] border-2 border-[#00A300]/30 bg-gradient-to-br from-emerald-50/70 via-white to-white p-7 sm:p-10 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#00A300] text-white flex items-center justify-center shadow-md">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00A300]">Direct Support</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">Need Alternative Formats or Hit a Barrier?</h2>
                  </div>
                </div>

                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                  If you experience any difficulty accessing content on this website or require prescription information in an alternative format (such as large print, verbal reading, or plain text), our clinical and support team is ready to assist you immediately.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white border border-[#00A300]/25 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00A300] block mb-1">
                        24/7 Pharmacist Hotline
                      </span>
                      <p className="text-base font-bold text-black mb-4">
                        Speak with our pharmacist for immediate verbal assistance
                      </p>
                    </div>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#00A300] hover:bg-[#007A00] transition-all shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call {siteConfig.phone}
                    </a>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#00A300]/25 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00A300] block mb-1">
                        Email Accessibility Team
                      </span>
                      <p className="text-base font-bold text-black mb-4">
                        We acknowledge feedback within two business days
                      </p>
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}?subject=Accessibility%20Feedback`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#007A00] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#00A300]" />
                    Statement last reviewed: September 25, 2026
                  </span>
                  <Link href="/privacy" className="text-[#00A300] font-bold hover:underline inline-flex items-center gap-1">
                    <span>View Privacy Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      {/* Full-Width Bottom CTA Banner */}
      <section className="w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div
          className="relative w-full overflow-hidden rounded-[2.5rem] px-8 py-12 md:py-16 text-center text-white"
          style={{ background: "linear-gradient(135deg, #007A00 0%, #005C00 50%, #00A300 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Dedicated to Accessible Healthcare for Everyone
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              Reach our friendly team at any time for customized orders, specialized dosage needs, or equipment delivery.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#007A00] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-102 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/25 hover:bg-white/20 transition-all"
              >
                Contact Us Online
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
