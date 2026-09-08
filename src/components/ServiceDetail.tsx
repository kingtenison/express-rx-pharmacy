"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FlaskConical, Accessibility, Building2, Stethoscope, Pill, ArrowLeft, Check, ArrowRight, Shield, Phone, Lightbulb, FileCheck2, ShieldCheck, Sparkles, Syringe, Baby, PawPrint, HeartPulse, Bandage, Wind, Home, Layers, Droplets, Package, Clock, GraduationCap, Send, ClipboardCheck, Headset, BookOpen, BadgeDollarSign, Radar, PhoneCall, Truck } from "lucide-react";
import { siteConfig, serviceInsights, serviceBenefits, serviceWorkflow } from "@/lib/data";
const iconMap: Record<string, React.ComponentType<{className?: string}>> = { flask: FlaskConical, wheelchair: Accessibility, building: Building2, stethoscope: Stethoscope, pill: Pill };
const promises: { title: string; line: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }> }[] = [
  { title: "Pharmacist-Reviewed", line: "Every order is checked by a licensed pharmacist before it leaves our building.", icon: Stethoscope },
  { title: "USP-Compliant Lab", line: "Compounding follows USP 795, 797, and 800 standards, with daily quality checks.", icon: FlaskConical },
  { title: "24/7 Pharmacist Access", line: "Need an answer at 2 a.m.? Our on-call pharmacist actually picks up.", icon: PhoneCall },
  { title: "Local Ohio Team", line: "You talk directly with our staff \u2014 no call centers, no runaround.", icon: Headset },
  { title: "Free Local Delivery", line: "Delivery across our region at no cost, with same-day service available.", icon: Truck },
  { title: "Paperwork, Handled", line: "Insurance, prior authorizations, and order tracking \u2014 we manage the details.", icon: ClipboardCheck },
];
function handleSpotlight(event: React.MouseEvent<HTMLDivElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}
const marqueeItems = [
  "Pharmacist-Led Care",
  "USP 795 \u00b7 797 \u00b7 800",
  "Free Local Delivery",
  "Same-Day Service",
  "No Call Centers",
  "Insurance & Prior Auths Handled",
  "Refill Reminders",
];
function TiltCard({ children, index, className, style }: { children: React.ReactNode; index: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 220, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 220, damping: 16 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width);
        my.set((e.clientY - rect.top) / rect.height);
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
const featureIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "custom dosage forms": Syringe,
  "allergen-free medications": ShieldCheck,
  "pediatric compounding": Baby,
  "veterinary compounding": PawPrint,
  "hormone replacement therapy": HeartPulse,
  "pain management": Bandage,
  "mobility aids": Accessibility,
  "respiratory equipment": Wind,
  "home safety equipment": Home,
  "compression therapy": Layers,
  "wound care supplies": Bandage,
  "diabetic supplies": Droplets,
  "medication management": Pill,
  "unit-dose packaging": Package,
  "24/7 emergency service": Clock,
  "consultant pharmacist": Stethoscope,
  "staff training": GraduationCap,
  "regulatory compliance": FileCheck2,
  "easy online referrals": Send,
  "prior authorization assistance": ClipboardCheck,
  "dedicated provider liaison": Headset,
  "patient education": BookOpen,
  "competitive pricing": BadgeDollarSign,
  "real-time tracking": Radar,
};
function getFeatureIcon(feature: string): React.ComponentType<{ className?: string; style?: React.CSSProperties }> {
  const key = Object.keys(featureIconMap).find(k => feature.toLowerCase().includes(k));
  return key ? featureIconMap[key] : Pill;
}
const defaultSteps = [
  { title: "Tell us what you need", desc: "A quick call, form, or prescription is all it takes to get started." },
  { title: "We prepare and verify", desc: "Our pharmacists check coverage, availability, and details before anything ships." },
  { title: "Pick up or get delivery", desc: "Same-day pickup at our location, or fast delivery right to your door." },
];
function getServiceSlug(title: string): string {
  const slugMap: Record<string, string> = {
    "Compounding Pharmacy": "compounding",
    "Durable Medical Equipment": "dme",
    "Long-Term Care Pharmacy": "long-term-care",
    "For Healthcare Providers": "for-providers",
  };
  return slugMap[title] || "";
}
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
export default function ServiceDetail({ title, description, features, icon, imageSrc }: { title: string; description: string; features: string[]; icon: string; imageSrc?: string }) {
  const Icon = iconMap[icon] || Pill;
  const slug = getServiceSlug(title);
  const insight = serviceInsights[slug];
  const benefits = serviceBenefits[slug] || [];
  const workflow = serviceWorkflow[slug] || { lead: "", steps: defaultSteps };
  const insightIcons = [Lightbulb, FileCheck2, ShieldCheck];
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt="" fill className="object-cover" priority />
        ) : (
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }} />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, transparent 100%)" }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-24">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={itemVariants}>
              <Link href="/services" className="inline-flex items-center gap-2 mb-8 text-sm text-white/60 hover:text-white transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6 border border-white/10" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
              <Icon className="w-4 h-4 text-[#00A300]" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">{title}</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-[clamp(2.8125rem,6.875vw,5.625rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white mb-5">
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl leading-relaxed text-white max-w-xl mb-10">
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="flex-1 sm:flex-none">
                <motion.button className="w-full group relative px-4 sm:px-10 py-3 sm:py-5 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact" className="flex-1 sm:flex-none">
                <motion.button className="w-full px-4 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-sm sm:text-base tracking-wide inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/20 transition-all duration-300" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", color: "white" }} whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.2)" }} whileTap={{ scale: 0.98 }}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  {siteConfig.phone}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {insight && (
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.025) 1px, transparent 0)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A300]/30 to-transparent" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(60rem 30rem at 10% 0%, rgba(0,163,0,0.05) 0%, transparent 60%), radial-gradient(50rem 28rem at 90% 100%, rgba(0,163,0,0.04) 0%, transparent 60%)" }} />
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mb-12 md:mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">{insight.eyebrow}</span>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-4 mb-4" style={{ color: "var(--text-1)" }}>
                {insight.title}
              </h2>
              <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-2)" }}>
                {insight.lead}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl border overflow-hidden mb-10 md:mb-14"
              style={{ background: "var(--bg-base)", borderColor: "var(--border)", boxShadow: "0 24px 60px -32px rgba(0,163,0,0.35)" }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 500px 220px at 0% 0%, rgba(0,163,0,0.06) 0%, transparent 70%)" }} />
              <motion.div
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00A300] to-[#00CC00]"
                style={{ width: "0%" }}
              />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center p-8 md:p-12">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.6, type: "spring", stiffness: 120, damping: 14 }}
                  className="text-center md:text-left"
                >
                  <div
                    className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-none tracking-[-0.03em] bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #00CC00 0%, #00A300 60%, #007A00 100%)", filter: "drop-shadow(0 6px 24px rgba(0,163,0,0.18))" }}
                  >
                    {insight.stats[0].value}
                  </div>
                </motion.div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-[11px] font-bold uppercase tracking-wider" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    Quick Facts
                  </div>
                  <p className="text-xl md:text-2xl font-semibold leading-snug mb-4" style={{ color: "var(--text-1)" }}>{insight.stats[0].label}</p>
                  <div className="flex flex-wrap gap-3">
                    {insight.stats.slice(1).map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
                        <span className="font-bold" style={{ color: "var(--primary-dark)" }}>{s.value}</span>
                        <span style={{ color: "var(--text-2)" }}>{s.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {insight.points.map((p, i) => {
                const PointIcon = insightIcons[i % insightIcons.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="relative rounded-2xl p-7 md:p-8 border overflow-hidden group cursor-default transition-shadow duration-300 hover:shadow-xl"
                    style={{ background: "var(--bg-base)", borderColor: "var(--border)", boxShadow: "0 12px 40px -28px rgba(0,163,0,0.25)" }}
                  >
                    <div className="absolute -top-3 -right-1 text-[6.5rem] font-black leading-none text-black/[0.03] select-none pointer-events-none">0{i + 1}</div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 350px 140px at 50% 0%, rgba(0,163,0,0.06) 0%, transparent 70%)" }} />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 300, damping: 12 }}
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-[#00A300]/20"
                      style={{ background: "var(--primary-dim)" }}
                    >
                      <PointIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    </motion.div>
                    <h3 className="relative text-lg font-bold mb-2" style={{ color: "var(--text-1)" }}>{p.title}</h3>
                    <p className="relative text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{p.text}</p>
                    <motion.div
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#00A300] to-[#00CC00]"
                      style={{ width: "0%" }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A300]/30 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(50rem 25rem at 100% 0%, rgba(0,163,0,0.06) 0%, transparent 60%)" }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:sticky lg:top-28">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">What We Offer</span>
              <h2 className="text-[clamp(2.2rem,5.5vw,3.85rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-4 mb-4 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #00CC00 0%, #00A300 60%, #007A00 100%)" }}>
                Everything You Need
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
                {workflow.lead || "Everything you need, explained in plain English \u2014 no jargon, no fine print."}
              </p>
              <div className="space-y-6">
                {workflow.steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm" style={{ background: "var(--primary-dim)", color: "var(--primary-dark)" }}>{i + 1}</div>
                    <div>
                      <h3 className="font-bold" style={{ color: "var(--text-1)" }}>{s.title}</h3>
                      <p className="text-sm leading-relaxed mt-0.5" style={{ color: "var(--text-2)" }}>{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex mt-10 group">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold">
                  Talk to a Pharmacist
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const FeatureIcon = getFeatureIcon(f);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="rounded-2xl p-6 border bg-white transition-shadow duration-300 hover:shadow-xl"
                    style={{ borderColor: "var(--border)", boxShadow: "0 10px 30px -24px rgba(0,163,0,0.3)" }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--primary-dim)" }}>
                      <FeatureIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 className="font-bold mb-1.5" style={{ color: "var(--text-1)" }}>{f}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                      {benefits[i] || "Clear, simple support from our team \u2014 no jargon, no surprises."}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {slug && (
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
          <div className="absolute inset-0 mesh-light opacity-20" />
          <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full pointer-events-none animate-blob-a" style={{ background: "radial-gradient(circle, rgba(0,163,0,0.10) 0%, transparent 70%)", filter: "blur(48px)" }} />
          <div className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] rounded-full pointer-events-none animate-blob-b" style={{ background: "radial-gradient(circle, rgba(0,204,0,0.09) 0%, transparent 70%)", filter: "blur(48px)" }} />
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Why Choose Us</span>
              <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] mt-4 mb-5">
                <span className="text-black">Why Patients </span>
                <span className="bg-clip-text text-transparent animate-shimmer" style={{ backgroundImage: "linear-gradient(110deg, #00CC00 0%, #00A300 35%, #007A00 50%, #00A300 65%, #00CC00 100%)", backgroundSize: "200% auto" }}>Choose Us</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
                No fine print, no call centers, no surprises. Just the things that matter most when your health depends on them.
              </p>
            </motion.div>
            <div className="marquee-mask relative overflow-hidden mb-14 md:mb-16">
              <div className="flex min-w-max items-center animate-marquee hover:[animation-play-state:paused]">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <div key={i} className="flex items-center shrink-0 px-6">
                    <Pill className="w-4 h-4 mr-3" style={{ color: "var(--primary)", opacity: 0.55 }} />
                    <span className="text-sm font-bold uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: "var(--primary-dark)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [perspective:1200px]">
              {promises.map((p, i) => {
                const PromiseIcon = p.icon;
                return (
                  <TiltCard
                    key={p.title}
                    index={i}
                    className="group relative rounded-2xl p-7 border transition-colors duration-300"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border)", boxShadow: "0 10px 30px -24px rgba(0,163,0,0.3)" }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0,163,0,0.10) 0%, transparent 70%)" }} />
                    <div className="absolute top-5 right-6 text-[2.6rem] font-black leading-none tracking-tight select-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6" style={{ color: "var(--primary)", opacity: 0.08 }}>{String(i + 1).padStart(2, "0")}</div>
                    <div className="relative" style={{ transform: "translateZ(28px)" }}>
                      <motion.div whileHover={{ scale: 1.12, rotate: -8 }} whileTap={{ scale: 0.92 }} transition={{ type: "spring", stiffness: 420, damping: 11 }} className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--primary-dim)" }}>
                        <PromiseIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                      </motion.div>
                      <h3 className="font-bold text-[1.05rem] mb-2" style={{ color: "var(--text-1)" }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{p.line}</p>
                      <div className="mt-5 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: "linear-gradient(90deg, #00CC00, #00A300)" }} />
                    </div>
                  </TiltCard>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 md:divide-x md:divide-[var(--border)] rounded-2xl border px-6 py-5"
              style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
            >
              {[
                { icon: PhoneCall, text: "24/7 pharmacist on call", live: true },
                { icon: Truck, text: "Free local delivery", live: false },
                { icon: Clock, text: "Same-day turnaround", live: false },
              ].map((g, i) => {
                const GIcon = g.icon;
                return (
                  <motion.div key={i} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="flex items-center gap-3 md:px-8">
                    <div className="relative shrink-0">
                      {g.live && <span className="absolute inset-0 animate-ping rounded-full bg-[#00A300] opacity-30" />}
                      <GIcon className="w-5 h-5 relative" style={{ color: "var(--primary)" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{g.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 text-center"
            >
              <Link href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="inline-flex group">
                <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold">
                  <PhoneCall className="w-4 h-4" />
                  Talk to a Pharmacist
                </motion.button>
              </Link>
              {now && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-medium" style={{ color: "var(--text-2)" }}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A300] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "var(--primary)" }} />
                  </span>
                  <span>Open now \u2014 {now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })}</span>
                  <span style={{ opacity: 0.6 }}>\u2022</span>
                  <span>Order by 4 PM for same-day service</span>
                </div>
              )}
              <p className="mt-2 text-sm" style={{ color: "var(--text-2)" }}>Questions? Call us at {siteConfig.phone} \u2014 a real person picks up.</p>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div className="absolute inset-0 mesh-light opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{ background: "var(--primary-dim)", color: "var(--primary)" }}
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold">Ready to Get Started?</span>
            </motion.div>
            <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-6" style={{ color: "var(--text-1)" }}>
              We&apos;re Here to Help
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
              Speak with our team today to learn how our {title.toLowerCase()} can make a difference for you or your facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button className="btn-primary group text-lg px-12 py-4 rounded-xl" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <span className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
              <Link href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}>
                <motion.button className="btn-secondary text-lg px-12 py-4 rounded-xl" style={{ color: "var(--text-2)" }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  Call {siteConfig.phone}
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[{ text: "No commitment" }, { text: "Free consultation" }, { text: "Same-day service" }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : i === 1 ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300"
                style={{ color: "var(--text-2)" }}
                whileHover={{ backgroundColor: "var(--primary-dim)", color: "var(--primary)", y: -3 }}
              >
                <Check className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
