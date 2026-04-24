"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroSection } from "@/lib/data";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1f14 0%, #0f3320 30%, #1a5c30 70%, #2a7a40 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(78, 201, 102, 0.15) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(76, 201, 102, 0.08) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 80%, rgba(76, 201, 102, 0.1) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(76, 201, 102, 0.5)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6" style={{ background: "rgba(76, 201, 102, 0.2)", color: "#4cc966" }} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
              <span className="text-xs font-medium uppercase tracking-wider">Ohio&apos;s Trusted Pharmacy</span>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
            </motion.div>
             <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: "white", letterSpacing: "0.02em" }}>
               Beyond Prescriptions.<br />
               <span style={{ color: "#4cc966" }}>Complete Care.</span>
             </h1>
             <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
               {heroSection.subtitle}
             </p>
            <motion.div className="flex flex-col sm:flex-row gap-3 mb-8" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }}>
              <Link href="/services">
                <motion.button
                  className="btn-primary w-full sm:w-auto group relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(22, 163, 74, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 14px rgba(22, 163, 74, 0.25)",
                      "0 8px 24px rgba(22, 163, 74, 0.35)",
                      "0 4px 14px rgba(22, 163, 74, 0.25)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    {heroSection.ctaPrimary}
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary w-full sm:w-auto relative overflow-hidden"
                  whileHover={{ scale: 1.05, backgroundColor: "var(--primary-dim)" }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    borderColor: [
                      "var(--primary)",
                      "var(--primary-light)",
                      "var(--primary)"
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="relative z-10">{heroSection.ctaSecondary}</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }} className="relative order-first lg:order-none mb-8 lg:mb-0">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white shadow-xl md:shadow-2xl" style={{ boxShadow: "0 20px 60px rgba(22, 163, 74, 0.2)" }}>
              <Image src="/images/logo.jpeg" alt="ExpressRX Pharmacy" width={600} height={600} className="w-full h-auto object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,163,74,0.1)] to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
