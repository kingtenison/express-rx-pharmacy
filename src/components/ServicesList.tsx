"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, Accessibility, Building2, Stethoscope, Pill, ArrowRight, Clock, Users, Check } from "lucide-react";
const iconMap: Record<string, React.ComponentType<{className?: string}>> = { flask: FlaskConical, wheelchair: Accessibility, building: Building2, stethoscope: Stethoscope, pill: Pill };
interface ServicesListProps { services: Array<{id: string; title: string; description: string; icon: string; features: string[]}> }
const metaInfo: Record<string, { time: string; patients: string }> = {
  compounding: { time: "Custom Formulation", patients: "2,000+ patients" },
  dme: { time: "Fast Delivery", patients: "5,000+ patients" },
  "long-term-care": { time: "24/7 Support", patients: "1,500+ patients" },
  "for-providers": { time: "Same-Day Response", patients: "300+ partners" },
};
export default function ServicesList({ services }: ServicesListProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  return (
    <section ref={ref} className="relative w-full pt-6 md:pt-10 lg:pt-14 pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-white">
      <div className="relative w-full px-6 md:px-12 lg:px-16">
        <motion.div style={{ y: headerY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-[#00A300] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Our Premium
            <span className="block text-[#00A300] mt-2">Services</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-2)" }}>
            Comprehensive{'\u00A0'}Pharmacy{'\u00A0'}Care &mdash; from compounding to long-term care, we provide the full spectrum of pharmacy services tailored to your needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Pill;
            const isEven = i % 2 === 0;
            const meta = metaInfo[service.id] || { time: "", patients: "" };
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-full shadow-lg hover:shadow-xl transition-shadow duration-500 ${
                  isEven
                    ? "bg-white border border-white/5"
                    : "bg-gradient-to-br from-[#007A00] via-[#005C00] to-[#00A300]"
                }`}
              >
                <div className={`relative w-full md:w-1/2 h-48 md:h-auto group overflow-hidden ${isEven ? "" : "md:order-2"}`}>
                  <Image src={`/images/${service.id}.png`} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority={i < 2} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 text-white/40 text-5xl font-black tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className={`w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${isEven ? "" : "md:order-1"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEven ? "bg-[#00A300]/10" : "bg-white/20"}`}>
                      <Icon className={`w-5 h-5 ${isEven ? "text-[#00A300]" : "text-white"}`} />
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isEven ? "text-black" : "text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`h-1 w-12 rounded-full mb-5 ${isEven ? "bg-gradient-to-r from-[#00A300] to-[#00CC00]" : "bg-gradient-to-r from-white/60 to-white/20"}`} />
                  <p className={`hidden md:block text-sm sm:text-base leading-relaxed mb-5 ${isEven ? "text-black" : "text-white/80"}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((f, j) => (
                      <li key={j} className={`flex items-start gap-3 ${j === 2 ? "hidden md:flex" : ""}`}>
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isEven ? "bg-[#00A300]" : "bg-white/90"}`}>
                          <Check className={`w-3 h-3 ${isEven ? "text-white" : "text-[#007A00]"}`} />
                        </div>
                        <span className={`text-sm sm:text-base font-medium ${isEven ? "text-black" : "text-white/80"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {meta.time && (
                    <div className={`hidden md:flex flex-wrap items-center gap-5 mb-8 ${isEven ? "" : ""}`}>
                      <span className={`flex items-center gap-2 text-sm font-medium ${isEven ? "text-black" : "text-white/60"}`}>
                        <Clock className={`w-4 h-4 ${isEven ? "text-[#00A300]" : "text-white/80"}`} />
                        {meta.time}
                      </span>
                      <span className={`flex items-center gap-2 text-sm font-medium ${isEven ? "text-black" : "text-white/60"}`}>
                        <Users className={`w-4 h-4 ${isEven ? "text-[#00A300]" : "text-white/80"}`} />
                        {meta.patients}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-auto">
                    <Link href={`/services/${service.id}`} className={`flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl ${
                      isEven
                        ? "bg-[#00A300] text-white hover:bg-[#007A00]"
                        : "bg-white text-[#007A00] hover:bg-gray-100"
                    }`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link href="/contact" className={`flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                      isEven
                        ? "border-[#00A300] text-[#00A300] hover:bg-[#00A300] hover:text-white"
                        : "border-white/70 text-white hover:bg-white hover:text-[#007A00]"
                    }`}>
                      Contact Us
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
