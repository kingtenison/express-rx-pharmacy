"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqPatientQuestions, faqProviderQuestions } from "@/lib/data";
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-xl overflow-hidden border bg-white" style={{ borderColor: "var(--border)" }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--bg-elevated)] transition-colors" aria-expanded={isOpen}>
        <span className="font-medium pr-4 text-sm md:text-base" style={{ color: "var(--text-1)" }}>{question}</span>
        {isOpen ? <Minus className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} /> : <Plus className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />}
      </button>
      <AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}><div className="p-4 pt-0 text-sm md:text-base" style={{ color: "var(--text-2)", background: "var(--bg-elevated)" }}>{answer}</div></motion.div>)}</AnimatePresence>
    </div>
  );
}
export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"patients" | "providers">("patients");
  const [openPatientIndex, setOpenPatientIndex] = useState<number | null>(null);
  const [openProviderIndex, setOpenProviderIndex] = useState<number | null>(null);
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="section-label mb-3">FAQ</span>
            <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>Frequently Asked Questions</h1>
            <p className="text-lg" style={{ color: "var(--text-2)" }}>Find answers to common questions about our services.</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg p-1" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <button onClick={() => setActiveTab("patients")} className={`px-5 py-2 rounded-md font-medium text-sm transition-colors ${activeTab === "patients" ? "bg-[var(--primary)] text-white" : "text-[var(--text-2)]"}`}>For Patients</button>
              <button onClick={() => setActiveTab("providers")} className={`px-5 py-2 rounded-md font-medium text-sm transition-colors ${activeTab === "providers" ? "bg-[var(--primary)] text-white" : "text-[var(--text-2)]"}`}>For Providers</button>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === "patients" && (
                <motion.div key="patients" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {faqPatientQuestions.map((item, i) => (<FAQItem key={i} question={item.question} answer={item.answer} isOpen={openPatientIndex === i} onToggle={() => setOpenPatientIndex(openPatientIndex === i ? null : i)} />))}
                </motion.div>
              )}
              {activeTab === "providers" && (
                <motion.div key="providers" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {faqProviderQuestions.map((item, i) => (<FAQItem key={i} question={item.question} answer={item.answer} isOpen={openProviderIndex === i} onToggle={() => setOpenProviderIndex(openProviderIndex === i ? null : i)} />))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
