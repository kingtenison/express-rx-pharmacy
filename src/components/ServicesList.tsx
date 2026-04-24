"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, Accessibility, Building2, Stethoscope, Pill, ArrowRight } from "lucide-react";
const iconMap: Record<string, React.ComponentType<{className?: string}>> = { flask: FlaskConical, wheelchair: Accessibility, building: Building2, stethoscope: Stethoscope, pill: Pill };
interface ServicesListProps { services: Array<{id: string; title: string; description: string; icon: string; features: string[]}> }
export default function ServicesList({ services }: ServicesListProps) {
  const itemVariants: Variants = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };
  return (
    <section className="py-12 md:py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10 md:space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Pill;
            const isEven = i % 2 === 0;
            return (
              <motion.div key={service.id} variants={itemVariants} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--primary-dim)" }}>
                    <span style={{ color: "var(--primary)" }}><Icon className="w-7 h-7" /></span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}>{service.title}</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                        <span style={{ color: "var(--text-2)" }} className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 font-medium link-medical">Learn More<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="rounded-2xl overflow-hidden border shadow-md" style={{ borderColor: "var(--border)" }}>
                    <Image src={`/images/${service.id}.png`} alt={service.title} className="w-full h-auto" width={400} height={300} priority={i === 0} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
