"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Printer, MessageCircle, Share2, Send } from "lucide-react";
import { siteConfig, footerLinks, navigation } from "@/lib/data";
export default function Footer() {
  const servicePages = navigation.find(n => n.label === "Services")?.dropdown || [];
  const mainPages = navigation.filter(n => n.label !== "Services" && n.label !== "Home");
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/footer-bg.png)" }} />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A300]/60 to-transparent" />
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="mb-12 md:mb-0 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-10 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo-nav.png" alt="ExpressRX Pharmacy" width={800} height={800} className="w-52 sm:w-56 md:w-64 h-auto object-contain brightness-0 invert" priority />
            </Link>
            <p className="mb-6 leading-relaxed text-base text-white/70 max-w-sm">
              Your trusted partner for personalized pharmacy services, compounding, and healthcare solutions across Ohio.
            </p>
            <div className="flex gap-3">
              {[MessageCircle, Share2, Send].map((SocialIcon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00A300] hover:bg-[#00A300]/20 transition-all duration-300">
                  <SocialIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00A300] mb-5">Sitemap</h3>
            <ul className="space-y-3.5">
              <li><Link href="/" className="text-base text-white/70 hover:text-white transition-colors duration-300">Home</Link></li>
              {mainPages.map((page) => (
                <li key={page.href}><Link href={page.href} className="text-base text-white/70 hover:text-white transition-colors duration-300">{page.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00A300] mb-5">Services</h3>
            <ul className="space-y-3.5">
              {servicePages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-white/70 hover:text-white transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 lg:col-start-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00A300] mb-5">Contact</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#00A300]" />
                <span className="text-white/70 leading-tight">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[#00A300]" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="text-white/70 hover:text-white transition-colors duration-300">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-5 h-5 shrink-0 text-[#00A300]" />
                <span className="text-white/70">{siteConfig.fax}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#00A300]" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white transition-colors duration-300">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 shrink-0 text-[#00A300]" />
                <div className="text-white/70 leading-tight">
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} ExpressRX Pharmacy & DME. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-300">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
