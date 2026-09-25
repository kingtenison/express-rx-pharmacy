"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Microscope,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import { storefront } from "@/lib/data";
import CategorySection from "@/components/CategorySection";

const trustIcons = [
  <ShieldCheck key="sh" className="w-5 h-5 text-[#00A300]" />,
  <Microscope key="mc" className="w-5 h-5 text-[#00A300]" />,
  <BadgeCheck key="bc" className="w-5 h-5 text-[#00A300]" />,
  <MapPin key="mp" className="w-5 h-5 text-[#00A300]" />,
];

export default function StorefrontPage() {
  const featured = [
    storefront.treatments[0],
    storefront.treatments[5],
    storefront.treatments[9],
  ];

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/services-bg.svg)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(0,163,0,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, transparent 100%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-10 md:pb-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
                Online Storefront
              </span>
              <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-black mb-5">
                Explore Treatments.
                <span className="block text-[#00A300]">Order Online.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg mb-8" style={{ color: "var(--text-2)" }}>
                Browse our provider-designed catalog &mdash; peptide therapy, weight loss programs, hormone health, and CLIA-certified lab panels &mdash; and order securely from the Express Pharmacy storefront.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href={storefront.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-full text-white font-semibold text-base tracking-wide inline-flex items-center gap-3 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Open the Storefront
                    <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.a>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-[#00A300] text-[#00A300] hover:bg-[#00A300] hover:text-white transition-all duration-300">
                  Pharmacy Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-2)" }}>
                <Sparkles className="w-4 h-4 text-[#00A300]" />
                Popular Treatments
              </div>
              {featured.map((t, i) => (
                <motion.a
                  key={t.href}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group block rounded-2xl border bg-white p-5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ borderColor: "var(--primary-dim)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <Image src={t.image} alt={t.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div className="flex items-center justify-between gap-4 flex-1">
                      <h3 className="font-bold text-black leading-snug group-hover:text-[#00A300] transition-colors">{t.name}</h3>
                      <span className="text-2xl font-bold text-[#00A300] shrink-0">{t.price}<span className="text-xs font-semibold block text-right" style={{ color: "var(--text-2)" }}>{t.cadence}</span></span>
                    </div>
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-2)" }}>{t.form} &middot; {t.category}</p>
                </motion.a>
              ))}
              <p className="text-xs px-2" style={{ color: "var(--text-2)" }}>
                Powered by <span className="font-semibold text-black">{storefront.name}</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 bg-white border-t" style={{ borderColor: "var(--primary-dim)" }}>
        <div className="relative w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {storefront.trust.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="flex items-center gap-3 rounded-2xl px-5 py-4" style={{ background: "var(--primary-dim)" }}>
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">{trustIcons[i]}</span>
                <span className="text-sm font-semibold text-black leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CategorySection />

      <section className="relative w-full py-16 md:py-24 bg-white">
        <div className="relative w-full px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-[#00A300] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">Featured Treatments</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
              Inside the
              <span className="block text-[#00A300] mt-2">Storefront</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
              A look at some of our most-requested programs and lab panels &mdash; all available to order directly online.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-6">
            {storefront.treatments.map((t, i) => (
              <motion.a
                key={t.href}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[1.75rem] bg-white border p-6 flex flex-col h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                style={{ borderColor: "var(--primary-dim)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <Image src={t.image} alt={t.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>{t.form}</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-2)" }}>{t.category}</span>
                </div>
                <h3 className="text-lg font-bold text-black leading-snug mb-6 group-hover:text-[#00A300] transition-colors">{t.name}</h3>
                <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--primary-dim)" }}>
                  <span className="text-2xl font-bold text-[#00A300]">{t.price}<span className="text-xs font-semibold" style={{ color: "var(--text-2)" }}> {t.cadence}</span></span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A300]">
                    View item
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="relative w-full overflow-hidden rounded-[2.5rem] px-8 py-14 md:py-20 text-center" style={{ background: "linear-gradient(135deg, #007A00 0%, #005C00 50%, #00A300 100%)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Care That Comes to You
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Review the full catalog, meet our clinicians, and place your first order &mdash; all from the Express Pharmacy storefront.
            </p>
            <motion.a
              href={storefront.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-[#007A00] font-semibold text-base tracking-wide overflow-hidden shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Visit the Storefront
              <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-4xl mx-auto text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
          <p>
            Treatments displayed on this page are representative of the Express Pharmacy &amp; Medical Supply storefront. Prescription treatments require a consultation with a licensed clinician and are dispensed by 503A/503B licensed U.S. compounding pharmacies. Lab panels are processed through CLIA-certified laboratories. Pricing shown reflects the storefront&apos;s public listing at the time of writing and is subject to change. For full details, eligibility, and current pricing, visit the storefront catalog.
          </p>
        </div>
      </section>
    </>
  );
}