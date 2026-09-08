"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aboutSection, siteConfig } from "@/lib/data";
import { Shield, ArrowRight, Phone, Heart, Award, Check, Mail, Sparkles, Target, Leaf, Stethoscope, Trophy } from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded in Columbus", desc: "ExpressRx opened its doors with a mission to transform community pharmacy through clinical excellence." },
  { year: "2016", title: "Compounding Expansion", desc: "Launched full-scale compounding services with state-of-the-art equipment and trained specialists." },
  { year: "2019", title: "Long-Term Care Division", desc: "Began serving skilled nursing facilities, group homes, and assisted living communities across Ohio." },
  { year: "2021", title: "DME & Provider Services", desc: "Expanded into durable medical equipment and direct provider partnerships for seamless patient care." },
  { year: "2024+", title: "Community Growth", desc: "Continuing to innovate with new services, technology, and a growing team dedicated to Ohio communities." },
];


export default function AboutPage() {
  return (
    <>
      <style>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)" }} />

        <div className="absolute top-1/4 right-[10%] w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#00A300]/5 pointer-events-none" style={{ animation: "spin-slow 30s linear infinite" }} />
        <div className="absolute bottom-1/4 left-[5%] w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#00A300]/5 pointer-events-none" style={{ animation: "spin-slow 40s linear infinite reverse" }} />

        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to top, #070707 0%, transparent 100%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#00A300]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">About ExpressRx</span>
              </motion.div>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white mb-6">
                Your Health,<br />
                <span className="text-[#00A300]">Our Purpose.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-white max-w-lg mb-10">
                Dedicated to providing exceptional pharmacy care to the Columbus, Ohio community — where expertise meets compassion.
              </p>
              <div className="flex flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <motion.button className="w-full group relative px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <span className="relative z-10 flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
                <Link href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex-1 sm:flex-none">
                  <motion.button className="w-full px-6 sm:px-10 py-3.5 sm:py-4.5 rounded-full font-semibold text-sm sm:text-base tracking-wide inline-flex items-center justify-center gap-2 border border-white/15 transition-all duration-300" style={{ background: "rgba(255,255,255,0.06)", color: "white" }} whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.12)" }} whileTap={{ scale: 0.98 }}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    {siteConfig.phone}
                  </motion.button>
                </Link>
              </div>
            </motion.div>


          </div>
        </div>
      </section>



      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,163,0,0.04) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 100%, rgba(0,163,0,0.03) 0%, transparent 60%)" }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border border-white/5">
                <Image src="/images/about.png" alt="ExpressRX Pharmacy" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden md:block">
                <div className="backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/10 shadow-xl" style={{ background: "rgba(0,163,0,0.1)" }}>
                  <div className="flex items-center gap-2 text-white">
                    <Stethoscope className="w-5 h-5 text-[#00A300]" />
                    <span className="text-sm font-semibold">Dual MD & RPh Leadership</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Our Story</span>
              <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-4 mb-6" style={{ color: "var(--text-1)" }}>
                Beyond Prescriptions.<br />
                <span className="text-[#00A300]">Complete Care.</span>
              </h2>
              <div className="space-y-5 leading-relaxed text-base md:text-lg" style={{ color: "var(--text-2)" }}>
                {aboutSection.content.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative mt-8 pl-6 border-l-2 border-[#00A300] py-3"
              >
                <p className="text-base md:text-lg italic font-medium leading-relaxed" style={{ color: "var(--text-1)" }}>
                  &ldquo;Our mission is simple: provide the highest quality pharmacy care with the personal touch that only a community pharmacy can deliver.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div className="absolute top-1/2 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00A300]/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-[#00A300]/10 to-transparent" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14 md:mb-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">What We Believe</span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-4 mb-4" style={{ color: "var(--text-1)" }}>
              Our Core Values
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
              The principles that guide everything we do, every single day.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: Heart, title: "Patient-Centered Care", desc: "Every decision we make starts with what's best for the patient. Your health drives everything we do.", accent: "#00A300" },
              { icon: Award, title: "Clinical Excellence", desc: "Dual MD & RPh leadership ensures the highest standard of care in everything we touch.", accent: "#00CC00" },
              { icon: Target, title: "Community Focused", desc: "Proudly serving Ohio with local pharmacists who know your name and your story.", accent: "#009900" },
              { icon: Leaf, title: "Always Available", desc: "24/7 pharmacist support because health concerns don't follow a schedule — and neither do we.", accent: "#00B300" },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:shadow-xl cursor-default"
                style={{ background: "var(--bg-base)", borderColor: "var(--border)" }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(ellipse 300px 150px at 50% 0%, ${v.accent}08 0%, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border" style={{ background: "var(--primary-dim)", borderColor: `${v.accent}20` }}>
                    <v.icon className="w-5 h-5" style={{ color: v.accent }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-1)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-36 md:py-48 relative overflow-hidden" style={{ backgroundImage: "url(/images/pills.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,163,0,0.04) 0%, transparent 60%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-24 md:mb-36">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 border border-[#00A300]/20" style={{ background: "rgba(0,163,0,0.06)" }}>
              <div className="w-2 h-2 rounded-full bg-[#00A300] animate-pulse" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Our Journey</span>
            </div>
            <h2 className="text-[clamp(3rem,7.5vw,5.25rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-7 text-white">
              A Decade of <span className="text-[#00A300]">Trusted Care</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-xl mx-auto leading-relaxed text-white/40">
              From a single pharmacy to Ohio's trusted healthcare partner.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[33px] md:left-1/2 top-0 bottom-0 w-px bg-white/[0.04] md:-translate-x-px" />
            <motion.div
              className="absolute left-[33px] md:left-1/2 top-0 w-px origin-top md:-translate-x-px"
              style={{ background: "linear-gradient(180deg, #00A300 0%, rgba(0,163,0,0.1) 100%)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="relative flex flex-col gap-24 md:gap-0">
              {milestones.map((m, i) => {
                const delay = 0.15 + i * 0.12;
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex items-center gap-0 md:gap-18 ${i !== milestones.length - 1 ? "md:mb-24" : ""} ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-[33px] md:left-1/2 z-10 -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: delay + 0.15, type: "spring", stiffness: 260, damping: 14 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-[#00A300]/20 blur-lg scale-150" />
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)", boxShadow: "0 0 20px rgba(0,163,0,0.25), 0 0 40px rgba(0,163,0,0.1)" }}>
                          {i === milestones.length - 1 ? (
                            <Sparkles className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-[10px] font-bold text-white">{i + 1}</span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                      className={`relative ml-[72px] md:ml-0 md:w-[calc(50%-4rem)] lg:w-[calc(50%-5rem)] group ${isLeft ? "md:flex-row-reverse" : ""}`}
                    >

                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ delay: delay + 0.1, duration: 0.5 }}
                        className="relative rounded-2xl p-9 md:p-12 border border-white/[0.06] overflow-hidden group-hover:border-[#00A300]/15 transition-colors duration-500"
                        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                      >
                        <div className={`flex items-center gap-4 mb-5 relative z-10 ${isLeft ? "md:justify-end" : ""}`}>
                          <span className="text-sm font-bold uppercase tracking-widest text-[#00A300]">{m.year}</span>
                          <div className="w-10 h-px bg-[#00A300]/30" />
                          <span className="text-xs font-medium text-white/20">{i + 1} / {milestones.length}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors duration-300 relative z-10">{m.title}</h3>
                        <p className="text-base md:text-lg leading-relaxed text-white/70 relative z-10">{m.desc}</p>

                        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A300]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-24"
            >
              <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/[0.06] hover:border-[#00A300]/15 transition-colors duration-500 cursor-default" style={{ background: "rgba(255,255,255,0.02)" }}>
                <Sparkles className="w-5 h-5 text-[#00A300]" />
                <span className="text-sm font-medium text-white/35">The journey continues</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A300]/20 to-transparent" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14 md:mb-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A300]">Our Leadership</span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.03em] mt-4 mb-4" style={{ color: "var(--text-1)" }}>
              Meet the Team
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
              Experienced professionals dedicated to your health.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[aboutSection.founder, aboutSection.director].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)", background: "var(--bg-base)" }}
              >
                <div className="absolute -inset-x-20 -inset-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,163,0,0.06) 0%, transparent 50%)" }} />
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full border border-[#00A300]/10 transition-all duration-700 group-hover:scale-[2] group-hover:border-[#00A300]/20" />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border text-xl font-bold text-[#00A300]" style={{ background: "var(--primary-dim)", borderColor: "var(--primary)/20" }}>
                    {person.name.charAt(0)}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
                    <Shield className="w-3 h-3" />
                    {person.title}
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text-1)" }}>{person.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                    Dedicated to advancing community pharmacy through clinical expertise and compassionate patient care.
                  </p>
                </div>
                <div className="relative z-10 border-t px-6 md:px-8 py-4" style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-2)" }}>
                    <Mail className="w-4 h-4 text-[#00A300]" />
                    <span>Contact {person.name.split(" ").pop()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 relative overflow-hidden" style={{ background: "var(--bg-base)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 900px 400px at 50% 100%, rgba(0,163,0,0.05) 0%, transparent 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A300]/20 to-transparent" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 text-center">
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
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] tracking-[-0.03em] mb-6" style={{ color: "var(--text-1)" }}>
              We&apos;re Here to Help
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-2)" }}>
              Speak with our team today to learn how we can serve you, your family, or your facility.
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
