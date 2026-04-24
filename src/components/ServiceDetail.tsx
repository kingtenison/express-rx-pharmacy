"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, Accessibility, Building2, Stethoscope, Pill, ArrowLeft, Check } from "lucide-react";
import { siteConfig } from "@/lib/data";
const iconMap: Record<string, React.ComponentType<{className?: string}>> = { flask: FlaskConical, wheelchair: Accessibility, building: Building2, stethoscope: Stethoscope, pill: Pill };
export default function ServiceDetail({ title, description, features, icon, imageSrc }: { title: string; description: string; features: string[]; icon: string; imageSrc?: string }) {
  const Icon = iconMap[icon] || Pill;
  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 mb-6 text-sm link-medical">
            <ArrowLeft className="w-4 h-4" />Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--primary-dim)" }}>
                <span style={{ color: "var(--primary)" }}><Icon className="w-7 h-7" /></span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}>{title}</h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-2)" }}>{description}</p>
            </div>
            {imageSrc && (
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--border)" }}>
                  <Image src={imageSrc} alt={title} width={600} height={400} className="w-full h-auto" priority />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}>What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }} className="flex items-start gap-3 p-4 rounded-xl bg-white border" style={{ borderColor: "var(--border)" }}>
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="rounded-2xl p-6 md:p-8 shadow-lg" style={{ background: "var(--primary-dim)" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-1)" }}>Get Started Today</h3>
              <p className="mb-6 leading-relaxed text-sm md:text-base" style={{ color: "var(--text-2)" }}>Ready to learn more about our {title.toLowerCase()} services? Contact us to discuss your needs.</p>
              <div className="space-y-3">
                <Link href="/contact" className="btn-primary w-full block text-center">Contact Us</Link>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="btn-secondary w-full block text-center">Call {siteConfig.phone}</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
