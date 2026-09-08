"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { navigation, siteConfig } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setIsVisible(true);
      } else if (currentY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current) {
        setIsVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .menu-icon-bar { display: block; width: 18px; height: 2px; border-radius: 1px; background: white; transition: all 0.3s ease; position: absolute; left: 0; }
        .menu-icon-bar:nth-child(1) { top: 3px; }
        .menu-icon-bar:nth-child(2) { top: 9px; }
        .menu-icon-bar:nth-child(3) { top: 15px; }
        .menu-icon-active .menu-icon-bar:nth-child(1) { top: 9px; transform: rotate(45deg); }
        .menu-icon-active .menu-icon-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .menu-icon-active .menu-icon-bar:nth-child(3) { top: 9px; transform: rotate(-45deg); }
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 py-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <Image src="/images/logo-nav.png" alt="ExpressRX Pharmacy" width={80} height={29} className="h-7 w-auto object-contain" />
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.label} className="relative" onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                  {item.dropdown ? (
                    <>
                      <Link href={item.href} className="flex items-center gap-1 px-4 py-2.5 rounded-full font-medium text-sm hover:bg-[var(--primary-dim)] transition-colors" style={{ color: "var(--text-2)" }}>{item.label}<ChevronDown className="w-4 h-4" /></Link>
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
                    <Link href={item.href} className="px-4 py-2.5 rounded-full font-medium text-sm hover:text-[var(--primary-dark)] hover:bg-[var(--primary-dim)] transition-colors" style={{ color: "var(--text-2)" }}>{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-sm font-medium hover:text-[var(--primary-dark)] transition-colors font-display" style={{ color: "var(--text-2)" }}><Phone className="w-4 h-4" /><span>{siteConfig.phone}</span></a>
              <Link href="/contact" className="btn-primary">Get Started</Link>
            </div>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <div className="menu-holder flex items-center gap-1.5 rounded-full py-1.5 pl-3 pr-1.5 transition-all duration-300" style={{ background: isOpen ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.25)" }}>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Menu</span>
                <div className={`relative w-[18px] h-[18px] ${isOpen ? "menu-icon-active" : ""}`} style={{ flexShrink: 0 }}>
                  <span className="menu-icon-bar" />
                  <span className="menu-icon-bar" />
                  <span className="menu-icon-bar" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm z-50 lg:hidden overflow-y-auto"
              style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)" }}
            >
              <div className="relative h-1 w-full bg-[#00A300]" />
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <div>
                  <Image src="/images/logo-nav.png" alt="ExpressRX Pharmacy" width={130} height={47} className="h-11 w-auto object-contain brightness-0 invert" />
                  <p className="text-[11px] text-white/30 mt-1.5 tracking-wider uppercase font-medium">Your Health, Our Priority</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <nav className="px-4 pt-2 pb-4">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="mb-0.5">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl transition-all duration-200 ${activeDropdown === item.label ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white/90"}`}
                        >
                          <span className="text-[15px] font-medium tracking-wide">{item.label}</span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${activeDropdown === item.label ? "bg-[#00A300]/20 rotate-180" : ""}`}>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-[#00A300]" : ""}`} />
                          </div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 pl-3 py-1 space-y-0.5 border-l-2 border-[#00A300]/20">
                                {item.dropdown.map((dropItem) => (
                                  <Link key={dropItem.href} href={dropItem.href} onClick={() => { setIsOpen(false); setActiveDropdown(null); }} className="block relative pl-4 py-2.5 text-sm text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                                    {dropItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium tracking-wide text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 mb-0.5"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mx-4 my-2 border-t border-white/5" />
              <div className="px-6 py-4 space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-semibold">Contact</p>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3.5 py-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-[#00A300]/10 flex items-center justify-center group-hover:bg-[#00A300]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[#00A300]" />
                  </span>
                  <span className="font-medium tracking-wide">{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3.5 py-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-[#00A300]/10 flex items-center justify-center group-hover:bg-[#00A300]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#00A300]" />
                  </span>
                  <span className="font-medium tracking-wide truncate">{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3.5 py-2.5 text-sm text-white/60 group">
                  <span className="w-8 h-8 rounded-lg bg-[#00A300]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#00A300]" />
                  </span>
                  <span className="font-medium tracking-wide leading-snug">{siteConfig.address}</span>
                </div>
              </div>
              <div className="px-6 pb-8 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #00A300 0%, #007A00 100%)", color: "white" }}
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
