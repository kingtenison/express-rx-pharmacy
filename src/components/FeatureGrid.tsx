"use client";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Zap, CreditCard, UserCheck, FlaskConical, MapPin, Pill, Clock, MapPin as MapPinIcon, GraduationCap, Users } from "lucide-react";
import { featureGrid, stats } from "@/lib/data";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { heart: Heart, zap: Zap, "credit-card": CreditCard, "user-check": UserCheck, "flask-conical": FlaskConical, "map-pin": MapPin };
const statIcons = [Pill, Clock, MapPinIcon, GraduationCap, Users];
const itemVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };
export default function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/green-abstract-bg.jpg)" }} />
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, var(--bg-surface), transparent)" }} />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-3">
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Why Choose Us</span>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.5 }} className="text-[17px] text-black text-center mb-10 md:mb-14">
          Personalized Care &middot; Expert Team &middot; Whole Family Service
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-4 md:mb-6">
              Exceptional{'\u00A0'}Pharmacy<br className="hidden md:block" />Care for Your<br />Whole{'\u00A0'}<span className="text-[#00A300]">Health.</span>
            </h2>
            <p className="text-base md:text-xl lg:text-[1.4rem] leading-relaxed text-black max-w-md mb-6 md:mb-8">
              At ExpressRX, we combine expert pharmacists, personalized service, and a patient-first approach to deliver comprehensive pharmacy care you can trust.
            </p>
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-2 md:gap-3">
              {featureGrid.slice(0, 3).map((stat, i) => {
                const Icon = iconMap[stat.icon] || Heart;
                return (
                  <motion.div key={`f-${i}`} variants={itemVariants} className="flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#00A300]" />
                    <span className="text-sm md:text-base font-medium text-black">{stat.title}</span>
                  </motion.div>
                );
              })}
              {stats.map((s, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div key={`s-${i}`} variants={itemVariants} className="flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#00A300]" />
                    <span className="text-sm md:text-base font-medium text-black">{s.value} {s.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-5"
          >
            {featureGrid.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Heart;
              return (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm">
                  <span className="text-lg md:text-2xl lg:text-4xl font-bold leading-[1.1] text-[#00A300]/20 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1.5">
                      <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#00A300] shrink-0" />
                      <h3 className="font-semibold text-black" style={{ fontSize: "clamp(0.8125rem,1.375vw,1.25rem)" }}>{feature.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm lg:text-base leading-relaxed text-black">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
