"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ctaSection } from "@/lib/data";
export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent 0%, var(--primary-dim) 100%)", opacity: 0.5 }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "var(--primary-dim)", color: "var(--primary)" }} animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkles className="w-4 h-4" /><span className="text-sm font-medium">Ready to Get Started?</span>
          </motion.div>
          <h2 className="display-lg mb-6" style={{ color: "var(--text-1)" }}>{ctaSection.title}</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>{ctaSection.subtitle}</p>
          <Link href={ctaSection.href}>
            <motion.button className="btn-primary group text-lg px-10 py-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              {ctaSection.cta}<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }} className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          {["No commitment", "Free consultation", "Same-day service"].map((item, i) => (
            <motion.div key={i} className="flex items-center gap-2" style={{ color: "var(--text-2)" }} whileHover={{ color: "var(--primary-dark)" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--primary)" }} />{item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
