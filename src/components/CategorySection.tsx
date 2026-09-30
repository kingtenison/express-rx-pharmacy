"use client";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  FlaskConical,
  ShieldCheck,
  Dumbbell,
  HeartPulse,
  Activity,
  Sparkles,
  Microscope,
  CheckCircle2,
} from "lucide-react";
import { storefront } from "@/lib/data";

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  scale: Scale,
  flask: FlaskConical,
  shield: ShieldCheck,
  dumbbell: Dumbbell,
  heart: HeartPulse,
  activity: Activity,
  sparkles: Sparkles,
  microscope: Microscope,
};

const categoryMetadata: Record<
  string,
  { tag: string; popular: string[]; highlight: string }
> = {
  "weight-loss-body-composition": {
    tag: "GLP-1 & Metabolic",
    popular: ["Tirzepatide", "Semaglutide", "Lipo-Mino"],
    highlight: "Most Popular",
  },
  "peptide-therapy": {
    tag: "Cellular Recovery",
    popular: ["Sermorelin", "GHK-Cu", "Glutathione"],
    highlight: "Clinical Grade",
  },
  "longevity-immunity": {
    tag: "Cellular Health",
    popular: ["NAD+ Injections", "Low-Dose Naltrexone"],
    highlight: "Anti-Aging",
  },
  "performance-recovery": {
    tag: "Athletic Optimization",
    popular: ["Amino Blends", "Performance Boost"],
    highlight: "Energy & Repair",
  },
  "sexual-health": {
    tag: "Hormone & Wellness",
    popular: ["PT-141", "Targeted Care"],
    highlight: "Confidential",
  },
  "men-s-hormonal-health": {
    tag: "Men's Health & TRT",
    popular: ["Testosterone Support", "Enclomiphene"],
    highlight: "Precision Dosing",
  },
  "women-s-hormonal-health": {
    tag: "Bio-Identical Care",
    popular: ["Vaginal Estradiol", "Progesterone"],
    highlight: "Specialized",
  },
  "comprehensive-health-panels": {
    tag: "CLIA-Certified Labs",
    popular: ["Men's Panel", "Women's Panel"],
    highlight: "At-Home Kit",
  },
};

export default function CategorySection() {
  return (
    <section
      id="catalog"
      aria-labelledby="catalog-heading"
      className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Subtle background ambient gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 163, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 border border-[#00A300]/20 bg-[#00A300]/5 text-[#00A300]">
            <Sparkles className="w-4 h-4 text-[#00A300]" />
            <span>Browse the Catalog</span>
          </div>
          <h2
            id="catalog-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight"
          >
            Care by
            <span className="block text-[#00A300] mt-1.5 sm:mt-2">Category</span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-neutral-600"
          >
            Every treatment is clinician-reviewed, compounded by licensed U.S.
            pharmacies, and delivered directly to your door.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {storefront.categories.map((cat, i) => {
            const Icon = categoryIcons[cat.icon] || Sparkles;
            const meta = categoryMetadata[cat.id] || {
              tag: "Specialized Care",
              popular: ["Clinician Reviewed"],
              highlight: "Licensed Rx",
            };

            return (
              <li key={cat.id} className="flex">
                <motion.a
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (i % 4) * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-[2rem] bg-white border border-[#00A300]/15 p-5 sm:p-5.5 flex flex-col w-full h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,163,0,0.12)] hover:border-[#00A300]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Card top-accent shine on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A300] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Visual Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] mb-5 bg-neutral-100 shadow-inner">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    {/* Top Left Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
                        {meta.tag}
                      </span>
                    </div>

                    {/* Top Right Category Number */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[11px] font-mono font-bold text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Floating Bottom Right Icon Badge */}
                    <div className="absolute bottom-3 right-3 z-10 w-11 h-11 rounded-xl flex items-center justify-center bg-white/95 backdrop-blur-md shadow-md text-[#00A300] group-hover:bg-[#00A300] group-hover:text-white transition-all duration-300 border border-white/80 group-hover:scale-105">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-bold text-black mb-2 leading-snug group-hover:text-[#00A300] transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 line-clamp-2">
                      {cat.tagline}
                    </p>
                  </div>

                  {/* Popular Treatments Pills */}
                  <div className="mt-auto pt-2 mb-5">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#00A300]" />
                      <span>Key Treatments</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {meta.popular.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#00A300]/8 text-[#007A00] border border-[#00A300]/15"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-600 group-hover:text-black transition-colors flex items-center gap-1.5">
                      View Treatments
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#00A300]/10 text-[#00A300] flex items-center justify-center group-hover:bg-[#00A300] group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shadow-sm">
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </motion.a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
