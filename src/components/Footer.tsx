"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Printer, MessageCircle, Share2, Send } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1f14 0%, #0f3320 30%, #1a5c30 70%, #2a7a40 100%)", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(76, 201, 102, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <Image src="/images/logo-nav.png" alt="ExpressRX Pharmacy" width={160} height={58} className="h-14 w-auto object-contain" />
            </Link>
            <p className="mb-4 leading-relaxed text-sm" style={{ color: "rgba(255, 255, 255, 0.75)" }}>Your trusted partner for personalized pharmacy services, compounding, and healthcare solutions across Ohio.</p>
          <div className="flex gap-2">
              {[MessageCircle, Share2, Send].map((SocialIcon, i) => (
                <motion.a key={i} href="#" className="w-9 h-9 rounded-lg border flex items-center justify-center hover:bg-[rgba(76,201,102,0.2)] transition-colors" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }} whileHover={{ scale: 1.05 }}>
                  <SocialIcon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          <div><h3 className="text-base font-semibold mb-4" style={{ color: "white" }}>Services</h3><ul className="space-y-2">{footerLinks.services.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{link.label}</Link></li>))}</ul></div>
          <div><h3 className="text-base font-semibold mb-4" style={{ color: "white" }}>Company</h3><ul className="space-y-2">{footerLinks.company.map((link) => (<li key={link.href}><Link href={link.href} className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{link.label}</Link></li>))}</ul></div>
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: "white" }}>Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#4cc966" }} /><span style={{ color: "rgba(255,255,255,0.7)" }}>{siteConfig.address}</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#4cc966" }} /><a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} style={{ color: "rgba(255,255,255,0.7)" }}>{siteConfig.phone}</a></li>
              <li className="flex items-center gap-3"><Printer className="w-4 h-4 flex-shrink-0" style={{ color: "#4cc966" }} /><span style={{ color: "rgba(255,255,255,0.7)" }}>{siteConfig.fax}</span></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#4cc966" }} /><a href={`mailto:${siteConfig.email}`} style={{ color: "rgba(255,255,255,0.7)" }}>{siteConfig.email}</a></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#4cc966" }} /><div style={{ color: "rgba(255,255,255,0.7)" }}><p className="text-xs">{siteConfig.hours.weekdays}</p><p className="text-xs">{siteConfig.hours.sunday}</p></div></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>&copy; {new Date().getFullYear()} ExpressRX Pharmacy & DME. All rights reserved.</p>
            <div className="flex gap-4 flex-wrap justify-center">{footerLinks.legal.map((link) => (<Link key={link.href} href={link.href} className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{link.label}</Link>))}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
