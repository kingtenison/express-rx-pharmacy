"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/lib/data";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    return (
    <header className="fixed top-0 left-0 right-0 z-50 glass py-3" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
              <Image src="/images/logo-nav.png" alt="ExpressRX Pharmacy" width={160} height={58} className="h-14 w-auto object-contain" />
            </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                {item.dropdown ? (
                  <>
                    <Link href={item.href} className="flex items-center gap-1 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-[var(--primary-dim)] transition-colors" style={{ color: "var(--text-2)" }}>{item.label}<ChevronDown className="w-4 h-4" /></Link>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-56 glass rounded-xl overflow-hidden z-50 shadow-lg"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropItem) => (
                              <Link key={dropItem.href} href={dropItem.href} onClick={() => setActiveDropdown(null)} className="flex items-center justify-between px-4 py-3 text-sm hover:bg-[var(--primary-dim)] hover:text-[var(--primary-dark)] transition-colors" style={{ color: "var(--text-2)" }}><span>{dropItem.label}</span></Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href} className="px-4 py-2.5 rounded-lg font-medium text-sm hover:text-[var(--primary-dark)] hover:bg-[var(--primary-dim)] transition-colors" style={{ color: "var(--text-2)" }}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-sm font-medium hover:text-[var(--primary-dark)] transition-colors font-display" style={{ color: "var(--text-2)" }}><Phone className="w-4 h-4" /><span>{siteConfig.phone}</span></a>
            <Link href="/contact" className="btn-primary">Get Started</Link>
          </div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-[var(--primary-dim)] transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">{isOpen ? <X className="w-6 h-6" style={{ color: "var(--text-1)" }} /> : <Menu className="w-6 h-6" style={{ color: "var(--text-1)" }} />}</button>
        </div>
      </div>
        <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden bg-white border-t" style={{ borderColor: "var(--border)" }}>
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.label} className="border-b" style={{ borderColor: "var(--border)" }}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center justify-between w-full py-3">
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="font-medium" style={{ color: "var(--text-1)" }}>{item.label}</Link>
                        <button onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} style={{ color: "var(--text-1)" }} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-4 space-y-1">
                            {item.dropdown.map((dropItem) => (
                              <Link key={dropItem.href} href={dropItem.href} onClick={() => { setIsOpen(false); setActiveDropdown(null); }} className="block py-2.5 text-sm" style={{ color: "var(--text-2)" }}>{dropItem.label}</Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="block py-3 font-medium" style={{ color: "var(--text-1)" }}>{item.label}</Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 py-3 text-sm font-medium" style={{ color: "var(--text-2)" }}><Phone className="w-4 h-4" style={{ color: "var(--primary)" }} />{siteConfig.phone}</a>
                <Link href="/contact" className="btn-primary w-full block text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
