"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { aboutSection } from "@/lib/data";
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-12 md:py-20" style={{ background: "var(--bg-elevated)" }}>
      <div className="absolute inset-0 mesh-light opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="section-label mb-3">About Us</span>
            <h2 className="display-lg mb-6">{aboutSection.title}</h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-2)" }}>{aboutSection.content.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}</div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div className="card-bento" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}>
                <p className="font-semibold text-lg mb-1" style={{ color: "var(--text-1)" }}>{aboutSection.founder.name}</p>
                <p className="text-sm" style={{ color: "var(--primary)" }}>{aboutSection.founder.title}</p>
              </motion.div>
              <motion.div className="card-bento" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.5 }}>
                <p className="font-semibold text-lg mb-1" style={{ color: "var(--text-1)" }}>{aboutSection.director.name}</p>
                <p className="text-sm" style={{ color: "var(--primary)" }}>{aboutSection.director.title}</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--border)" }}>
              <Image src="/images/about.png" alt="ExpressRX Pharmacy About" width={400} height={400} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
