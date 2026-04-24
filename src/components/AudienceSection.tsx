"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audienceCards } from "@/lib/data";
export default function AudienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-12 md:py-20" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute inset-0 mesh-light opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
          <span className="section-label mb-3">Who We Serve</span>
          <h2 className="display-lg mb-4" style={{ color: "var(--text-1)" }}>Healthcare for Everyone</h2>
          <p className="section-subtitle mx-auto" style={{ color: "var(--text-2)" }}>Whether you&apos;re a patient, family member, or healthcare provider, we&apos;re here to meet your unique needs.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
          {audienceCards.map((card, i) => (
            <motion.div key={card.id} initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} className="card-bento group">
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4" style={{ color: "var(--text-1)" }}>{card.title}</h3>
                <p className="mb-4 md:mb-6 leading-relaxed text-sm md:text-base" style={{ color: "var(--text-2)" }}>{card.description}</p>
                <Link href={card.href} className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">{card.cta}<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
