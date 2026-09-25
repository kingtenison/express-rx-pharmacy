"use client";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Scale,
  FlaskConical,
  ShieldCheck,
  Dumbbell,
  HeartPulse,
  Activity,
  Sparkles,
  Microscope,
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

export default function CategorySection() {
  return (
    <section id="catalog" aria-labelledby="catalog-heading" className="relative w-full py-16 md:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="relative w-full px-6 md:px-12 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-[#00A300] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">Browse the Catalog</span>
          <h2 id="catalog-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Care by
            <span className="block text-[#00A300] mt-2">Category</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
            Every treatment is clinician-reviewed, compounded by licensed U.S. pharmacies, and delivered to your door.
          </p>
        </motion.div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {storefront.categories.map((cat, i) => {
            const Icon = categoryIcons[cat.icon] || Sparkles;
            return (
              <li key={cat.id} className="flex">
                <motion.a
                  href={cat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-[1.75rem] bg-white border p-6 flex flex-col w-full h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  style={{ borderColor: "var(--primary-dim)" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5">
                    <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-[#00A300]/15 to-[#00A300]/5 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#00A300]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 leading-snug">{cat.title}</h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-2)" }}>{cat.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A300] group-hover:gap-3 transition-all duration-300">
                    View treatments
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">at the Express Pharmacy storefront (opens in a new tab)</span>
                  </span>
                </motion.a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
