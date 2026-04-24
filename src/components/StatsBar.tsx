"use client";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";
const itemVariants: Variants = { hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };
export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-12 md:py-16 overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
      <div className="absolute inset-0 mesh-light opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center p-4 md:p-6 rounded-xl bg-white border" style={{ borderColor: "var(--border)" }}>
              <motion.div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color: "var(--primary)" }} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}>{stat.value}</motion.div>
              <div className="text-xs md:text-sm" style={{ color: "var(--text-2)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
