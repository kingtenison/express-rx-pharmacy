"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { ctaSection } from "@/lib/data";
export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute inset-0 mesh-light opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent 0%, var(--primary-dim) 100%)", opacity: 0.3 }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{ background: "var(--primary-dim)", color: "var(--primary)" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            <span className="text-sm font-semibold">Ready to Get Started?</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--text-1)" }}>{ctaSection.title}</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>{ctaSection.subtitle}</p>
          <Link href={ctaSection.href}>
            <motion.button 
              className="btn-primary group text-lg px-12 py-4 rounded-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center gap-2">
                {ctaSection.cta}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { text: "No commitment", icon: CheckCircle },
            { text: "Free consultation", icon: CheckCircle },
            { text: "Same-day service", icon: CheckCircle }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i === 0 ? -20 : i === 1 ? 0 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-2 p-4 rounded-xl"
              style={{ color: "var(--text-2)" }}
              whileHover={{ 
                backgroundColor: "var(--primary-dim)",
                color: "var(--primary)",
                y: -3
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
