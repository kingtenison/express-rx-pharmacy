"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Minus, ThumbsUp, ThumbsDown, Phone, Mail, MessageSquare, ChevronRight, Sparkles, Lightbulb, Flame, Trophy, ArrowRight, CheckCircle, Zap, Star, Award, BookOpen, HelpCircle } from "lucide-react";
import { faqPatientQuestions, faqProviderQuestions, siteConfig } from "@/lib/data";
import Link from "next/link";

const categories = [
  { id: "general", label: "General", icon: HelpCircle },
  { id: "prescriptions", label: "Prescriptions", icon: BookOpen },
  { id: "delivery", label: "Delivery", icon: Zap },
  { id: "compounding", label: "Compounding", icon: Star },
  { id: "insurance", label: "Insurance", icon: Award },
  { id: "dme", label: "DME", icon: Award },
  { id: "support", label: "24/7 Support", icon: Flame },
];

function categorize(q: string): string {
  const qLower = q.toLowerCase();
  if (qLower.includes("transfer") || qLower.includes("prescription")) return "prescriptions";
  if (qLower.includes("delivery")) return "delivery";
  if (qLower.includes("compound")) return "compounding";
  if (qLower.includes("insurance") || qLower.includes("plan")) return "insurance";
  if (qLower.includes("dme") || qLower.includes("equipment") || qLower.includes("mobility")) return "dme";
  if (qLower.includes("24/7") || qLower.includes("after hours") || qLower.includes("outside regular")) return "support";
  return "general";
}

const facts = [
  { icon: Flame, text: "We answer 95% of calls within 30 seconds — day or night." },
  { icon: Lightbulb, text: "Our compounding lab creates over 200 custom formulas each month." },
  { icon: Trophy, text: "Proudly serving 10,000+ patients across Ohio." },
  { icon: Star, text: "Dual MD & RPh leadership — unmatched clinical expertise." },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"patients" | "providers">("patients");
  const [openPatientIndex, setOpenPatientIndex] = useState<number | null>(null);
  const [openProviderIndex, setOpenProviderIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [voted, setVoted] = useState<Record<string, "up" | "down">>({});
  const [helpfulCount, setHelpfulCount] = useState(147);
  const [factIndex, setFactIndex] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  const [showConfetti, setShowConfetti] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openIndex = activeTab === "patients" ? openPatientIndex : openProviderIndex;
  const setOpenIndex = activeTab === "patients" ? setOpenPatientIndex : setOpenProviderIndex;
  const items = activeTab === "patients" ? faqPatientQuestions : faqProviderQuestions;

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const s = search.toLowerCase();
    return items.filter((item) => item.question.toLowerCase().includes(s) || item.answer.toLowerCase().includes(s));
  }, [search, items]);

  const handleToggle = (originalIndex: number) => {
    const newIndex = openIndex === originalIndex ? null : originalIndex;
    setOpenIndex(newIndex);
    if (newIndex !== null) {
      const key = `${activeTab}-${originalIndex}`;
      if (!completedQuestions.has(key)) {
        const updated = new Set(completedQuestions);
        updated.add(key);
        setCompletedQuestions(updated);
        if (updated.size === items.length) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      }
    }
  };

  const handleVote = (key: string, type: "up" | "down") => {
    if (voted[key] === type) return;
    setVoted((prev) => ({ ...prev, [key]: type }));
    if (type === "up") setHelpfulCount((c) => c + 1);
  };

  const progress = items.length > 0 ? Math.round((completedQuestions.size / items.length) * 100) : 0;

  return (
    <>
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,163,0,0.1); }
          50% { box-shadow: 0 0 40px rgba(0,163,0,0.2); }
        }
      `}</style>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="absolute text-xl" style={{ left: `${Math.random() * 100}%`, top: `-10px`, animation: `confetti-fall ${1.5 + Math.random() * 2}s ease-out ${Math.random() * 0.5}s forwards`, color: ["#00A300", "#00CC00", "#FFD700", "#FF6B6B", "#4ECDC4"][i % 5] }}>
              {["🌟", "🎉", "✨", "🏆", "💚"][i % 5]}
            </div>
          ))}
        </div>
      )}

      <section className="relative min-h-[60vh] md:min-h-[50vh] flex items-center overflow-hidden" style={{ backgroundImage: "url(/images/faq-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: "linear-gradient(to top, var(--bg-surface) 0%, transparent 100%)" }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-black/10" style={{ background: "rgba(0,0,0,0.04)" }}>
              <HelpCircle className="w-3.5 h-3.5 text-[#00A300]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-black/60">FAQ</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="text-[clamp(3.75rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-black mb-4">
              Got Questions?<br />
              <span className="text-[#00A300]">We&apos;ve Got Answers.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-lg text-black/60 max-w-xl mx-auto mb-8">
              Everything you need to know about our pharmacy services, all in one place.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="relative max-w-xl mx-auto">
              <div className="relative" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30 pointer-events-none" />
                <input ref={inputRef} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search questions..." className="w-full pl-12 pr-4 py-4 rounded-2xl text-black placeholder-black/30 border border-black/10 outline-none transition-all duration-300 focus:border-[#00A300]/50 focus:shadow-[0_0_30px_rgba(0,163,0,0.1)]" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="mt-8 flex items-center justify-center gap-2 text-sm text-black/40">
              <Lightbulb className="w-4 h-4 text-[#00A300]" />
              <AnimatePresence mode="wait">
                <motion.span key={factIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }}>
                  {facts[factIndex].text}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-6">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const count = items.filter((i) => categorize(i.question) === cat.id).length;
              return (
                <button key={cat.id} onClick={() => { setSearch(""); inputRef.current?.focus(); }} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-300 hover:border-[#00A300]/40 hover:text-[#00A300]" style={{ background: "var(--bg-surface)", borderColor: "var(--border)", color: "var(--text-2)" }}>
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.label}
                  <span className="text-[10px] opacity-50">({count})</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-16" style={{ background: "var(--bg-base)" }}>
        <div className="w-full px-6 md:px-12 lg:px-16">
          {progress > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text-1)" }}>
                  <Trophy className="w-4 h-4 text-[#00A300]" />
                  Your progress
                  {progress === 100 && <span className="text-[#00A300] font-bold"> — Complete! 🎉</span>}
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>{progress}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-surface)" }}>
                <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} style={{ background: "linear-gradient(90deg, #00A300, #00CC00)" }} />
              </div>
            </motion.div>
          )}

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-2xl p-1.5 shadow-sm border" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
              <button onClick={() => { setActiveTab("patients"); setOpenPatientIndex(null); setSearch(""); }} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "patients" ? "text-white shadow-lg" : ""}`} style={activeTab === "patients" ? { background: "linear-gradient(135deg, #00A300, #007A00)" } : { color: "var(--text-2)" }}>
                <Star className="w-4 h-4" />
                For Patients
              </button>
              <button onClick={() => { setActiveTab("providers"); setOpenProviderIndex(null); setSearch(""); }} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "providers" ? "text-white shadow-lg" : ""}`} style={activeTab === "providers" ? { background: "linear-gradient(135deg, #00A300, #007A00)" } : { color: "var(--text-2)" }}>
                <Award className="w-4 h-4" />
                For Providers
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm" style={{ color: "var(--text-2)" }}>
                {search ? `${filteredItems.length} result${filteredItems.length !== 1 ? "s" : ""}` : `${items.length} question${items.length !== 1 ? "s" : ""}`}
              </p>
              {helpfulCount > 0 && (
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-2)" }}>
                  <ThumbsUp className="w-3.5 h-3.5 text-[#00A300]" />
                  <span>{helpfulCount} found this helpful</span>
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {filteredItems.length === 0 ? (
                <motion.div key="empty" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-20" style={{ color: "var(--text-2)" }} />
                  <p className="text-lg font-medium mb-2" style={{ color: "var(--text-1)" }}>No matches found</p>
                  <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Try a different search term</p>
                  <button onClick={() => setSearch("")} className="px-6 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #00A300, #007A00)" }}>
                    Clear search
                  </button>
                </motion.div>
              ) : (
                <motion.div key={activeTab + search} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                  {filteredItems.map((item, i) => {
                    const originalIndex = items.indexOf(item);
                    const isOpen = openIndex === originalIndex;
                    const catId = categorize(item.question);
                    const cat = categories.find((c) => c.id === catId);
                    const voteKey = `${activeTab}-${originalIndex}`;
                    const userVote = voted[voteKey];
                    return (
                      <motion.div
                        key={i}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        className="group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-md"
                        style={{ borderColor: isOpen ? "var(--primary)" : "var(--border)", background: "var(--bg-surface)" }}
                      >
                        <button onClick={() => handleToggle(originalIndex)} className="w-full flex items-start gap-4 p-5 text-left transition-colors" aria-expanded={isOpen}>
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${isOpen ? "text-white" : ""}`} style={{ background: isOpen ? "linear-gradient(135deg, #00A300, #007A00)" : "var(--primary-dim)" }}>
                            {cat && <cat.icon className="w-4 h-4" style={{ color: isOpen ? "white" : "var(--primary)" }} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              {cat && (
                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
                                  {cat.label}
                                </span>
                              )}
                            </div>
                            <span className="text-sm md:text-base font-medium leading-relaxed" style={{ color: "var(--text-1)" }}>{item.question}</span>
                          </div>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "rotate-45" : ""}`} style={{ background: isOpen ? "linear-gradient(135deg, #00A300, #007A00)" : "var(--primary-dim)" }}>
                            <Plus className="w-4 h-4" style={{ color: isOpen ? "white" : "var(--primary)" }} />
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                              <div className="px-5 pb-5 pt-0">
                                <div className="ml-12 pl-1">
                                  <div className="p-4 rounded-xl text-sm md:text-base leading-relaxed mb-4" style={{ background: "var(--bg-base)", color: "var(--text-2)" }}>
                                    {item.answer}
                                    {item.answer.endsWith(".") ? "" : "."}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs" style={{ color: "var(--text-2)" }}>Was this helpful?</span>
                                    <button onClick={() => handleVote(voteKey, "up")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${userVote === "up" ? "text-white" : "hover:bg-[var(--primary-dim)]"}`} style={{ background: userVote === "up" ? "linear-gradient(135deg, #00A300, #007A00)" : "var(--bg-elevated)", color: userVote === "up" ? "white" : "var(--text-2)" }}>
                                      <ThumbsUp className="w-3.5 h-3.5" />
                                      Yes
                                    </button>
                                    <button onClick={() => handleVote(voteKey, "down")} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${userVote === "down" ? "text-white" : "hover:bg-[var(--primary-dim)]"}`} style={{ background: userVote === "down" ? "linear-gradient(135deg, #666, #444)" : "var(--bg-elevated)", color: userVote === "down" ? "white" : "var(--text-2)" }}>
                                      <ThumbsDown className="w-3.5 h-3.5" />
                                      No
                                    </button>
                                    {userVote === "up" && (
                                      <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="text-xs text-[#00A300] font-medium flex items-center gap-1">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                        Thanks for your feedback!
                                      </motion.span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "var(--bg-surface)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 600px 300px at 50% 0%, rgba(0,163,0,0.03) 0%, transparent 60%)" }} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border" style={{ background: "var(--primary-dim)", borderColor: "var(--border)" }}>
                <MessageSquare className="w-4 h-4 text-[#00A300]" />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--primary)" }}>Still Need Help?</span>
              </div>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-3" style={{ color: "var(--text-1)" }}>
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-2)" }}>
                Our team is ready to help you with any question, big or small.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Phone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`, desc: "Speak with a pharmacist directly" },
                { icon: Mail, label: "Email Us", value: "reply@expressrx.biz", href: "mailto:reply@expressrx.biz", desc: "We respond within 1 hour" },
                { icon: MessageSquare, label: "Live Chat", value: "Chat with our team", href: "/contact", desc: "Available during business hours" },
              ].map((item, i) => (
                <Link key={i} href={item.href}>
                  <motion.div whileHover={{ y: -4 }} className="relative p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col items-center justify-center" style={{ background: "var(--bg-base)", borderColor: "var(--border)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--primary-dim)" }}>
                      <item.icon className="w-5 h-5 text-[#00A300]" />
                    </div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-1)" }}>{item.label}</h3>
                    <p className="text-sm font-medium text-[#00A300] mb-1">{item.value}</p>
                    <p className="text-xs" style={{ color: "var(--text-2)" }}>{item.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 text-center">
              <Link href="/contact">
                <motion.button className="group px-8 py-4 rounded-full text-white font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl" style={{ background: "linear-gradient(135deg, #00A300, #007A00)" }} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
                  Send Us a Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 text-xs" style={{ color: "var(--text-2)" }}>
                <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-[#00A300]" /> 24/7 pharmacist support</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-[#00A300]" /> Free consultation</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#00A300]" /> No commitment</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
