"use client";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FlaskConical, Accessibility, Building2, Stethoscope, Pill, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { flask: FlaskConical, wheelchair: Accessibility, building: Building2, stethoscope: Stethoscope, pill: Pill };
const itemVariants: Variants = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };
export default function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-12 md:py-20" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute inset-0 mesh-light opacity-50" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
          <span className="section-label mb-3">What We Offer</span>
          <h2 className="display-lg mb-4" style={{ color: "var(--text-1)" }}>Our Services</h2>
          <p className="section-subtitle mx-auto" style={{ color: "var(--text-2)" }}>Comprehensive pharmacy solutions tailored to your unique healthcare needs.</p>
        </motion.div>
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Pill;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services/${service.id}`}>
                  <motion.div className="card-bento h-full" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                    <div className="relative z-10 p-4 md:p-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4" style={{ background: "var(--primary-dim)" }}>
                        <span style={{ color: "var(--primary)" }}><Icon className="w-5 h-5 md:w-6 md:h-6" /></span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{ color: "var(--text-1)" }}>{service.title}</h3>
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3" style={{ color: "var(--text-2)" }}>{service.description}</p>
                      <div className="inline-flex items-center gap-1 font-medium text-sm" style={{ color: "var(--primary)" }}>Learn More<ArrowRight className="w-4 h-4" /></div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
