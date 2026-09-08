"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Phone, CheckCircle } from "lucide-react";
import { heroSection, stats } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-stretch overflow-hidden">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_15%_50%,rgba(0,163,0,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, var(--bg-surface) 20%, transparent 100%)" }} />

      <div className="relative z-10 w-full px-5 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 flex flex-col justify-between">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/20" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A300]" />
              <span className="text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-[#00A300]">Ohio&apos;s Trusted Pharmacy</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h1 variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6">
              <span className="block text-[clamp(2.5rem,6.9vw,6.25rem)] font-bold leading-[1.04] tracking-[-0.03em] text-black">
                Beyond{'\u00A0'}Prescriptions.
              </span>
              <span className="block text-[clamp(2.5rem,6.9vw,6.25rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-0.5 sm:mt-1">
                Complete{'\u00A0'}<span className="text-[#00A300]">Care.</span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-xl md:text-2xl leading-relaxed text-black max-w-lg mb-6 sm:mb-8 md:mb-10" style={{ textShadow: "0 0 4px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)" }}>
              {heroSection.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4">
              <Link href="/services">
                <motion.button
                  className="group relative px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide inline-flex items-center gap-2 sm:gap-3 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)" }}
                  whileHover={{ scale: 1.02, boxShadow: "0 16px 40px -8px rgba(0,163,0,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    {heroSection.ctaPrimary}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-semibold text-sm sm:text-base tracking-wide inline-flex items-center gap-2 sm:gap-3 border border-white/20 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#000000" }}
                  whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.8)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {heroSection.ctaSecondary}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.12em] text-black mr-0.5 sm:mr-1">Trusted by</span>
              {stats.slice(0, 3).map((stat) => (
                <span key={stat.label} className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1 sm:py-2 rounded-lg border border-white/20 text-[11px] sm:text-sm" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "#000000" }}>
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#00A300]" />
                  <span className="font-semibold text-black">{stat.value}</span>
                  {stat.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
