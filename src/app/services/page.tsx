"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, servicesPageContent } from "@/lib/data";
import ServicesList from "@/components/ServicesList";

const serviceImages = [
  { id: "compounding", src: "/images/compounding.png", label: "Compounding" },
  { id: "dme", src: "/images/dme.png", label: "DME" },
  { id: "long-term-care", src: "/images/long-term-care.png", label: "Long-Term Care" },
  { id: "for-providers", src: "/images/for-providers.png", label: "For Providers" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ServicesPage() {
  const [items, setItems] = useState(serviceImages);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setItems(shuffleArray);
    }, 3000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/services-bg.svg)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(0,163,0,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, transparent 100%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-10 md:pb-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
                Services
              </span>
              <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-black mb-5">
                {servicesPageContent.hero.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg mb-8" style={{ color: "var(--text-2)" }}>
                {servicesPageContent.hero.subtitle}
              </p>
              <Link href="/contact">
                <motion.button className="group relative px-10 py-5 rounded-full text-white font-semibold text-base tracking-wide inline-flex items-center gap-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-3 md:gap-4 aspect-square max-w-md lg:max-w-lg mx-auto"
              >
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500 ${
                      i === 0 ? "row-span-2" : ""
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white text-sm font-semibold drop-shadow-sm">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <ServicesList services={services} />
    </>
  );
}
