"use client";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { Pill, Clock, MapPin, GraduationCap, Users } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap = [Pill, Clock, MapPin, GraduationCap, Users];

const itemVariants: Variants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-14 md:py-20" style={{ background: "var(--bg-elevated)" }}>
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-14 lg:gap-x-20"
        >
          {stats.map((stat, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div key={i} variants={itemVariants} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,163,0,0.1)" }}>
                  <Icon className="w-5 h-5 text-[#00A300]" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-black whitespace-nowrap">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
