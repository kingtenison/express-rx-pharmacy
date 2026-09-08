"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Stethoscope, Building2 } from "lucide-react";
import { audienceCards } from "@/lib/data";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { patients: Users, providers: Stethoscope, facilities: Building2 };
const cardStyles = [
  { bg: "bg-[#00A300]", text: "text-white", textMuted: "text-white/80", iconBg: "bg-white/20", iconColor: "text-white", border: "border-white/10", ctaColor: "text-white" },
  { bg: "bg-[#1a1a1a]", text: "text-white", textMuted: "text-white/70", iconBg: "bg-white/10", iconColor: "text-white", border: "border-white/10", ctaColor: "text-white" },
  { bg: "bg-white", text: "text-black", textMuted: "text-black", iconBg: "bg-[#00A300]", iconColor: "text-white", border: "border-[#e5e7eb]", ctaColor: "text-[#00A300]" },
];
export default function AudienceSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A300]/[0.02] to-transparent" />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <motion.div style={{ y: headerY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Who We Serve</span>
          <h2 className="text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black mt-3 mb-4">
            Comprehensive Care for<br />Every{'\u00A0'}<span className="text-[#00A300]">Community.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
            From individual patients to large care facilities, we tailor our pharmacy services to meet the unique needs of each community we serve across Ohio.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {audienceCards.map((card, i) => {
            const Icon = iconMap[card.id] || Users;
            const s = cardStyles[i];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className={`relative h-full rounded-2xl ${s.bg} ${s.border} border shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden`}>
                  <div className="relative p-6 md:p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${s.iconBg} shadow-lg shadow-black/10`}>
                      <Icon className={`w-7 h-7 ${s.iconColor}`} />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${s.text}`}>{card.title}</h3>
                    <p className={`text-sm md:text-base leading-relaxed mb-6 ${s.textMuted}`}>{card.description}</p>
                    <Link
                      href={card.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${s.ctaColor}`}
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
