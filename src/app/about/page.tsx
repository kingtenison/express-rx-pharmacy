import { Metadata } from "next";
import Image from "next/image";
import { aboutSection, siteConfig } from "@/lib/data";
export const metadata: Metadata = { title: "About Us | ExpressRX Pharmacy" };
export default function AboutPage() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <span className="section-label mb-3">About Us</span>
            <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>{aboutSection.title}</h1>
            <p className="text-lg md:text-xl" style={{ color: "var(--text-2)" }}>Dedicated to providing exceptional pharmacy care to the Columbus, Ohio community.</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text-1)" }}>Our Story</h2>
              <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-2)" }}>{aboutSection.content.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}</div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-bento"><p className="font-semibold text-lg mb-1" style={{ color: "var(--text-1)" }}>{aboutSection.founder.name}</p><p className="text-sm" style={{ color: "var(--primary)" }}>{aboutSection.founder.title}</p></div>
                <div className="card-bento"><p className="font-semibold text-lg mb-1" style={{ color: "var(--text-1)" }}>{aboutSection.director.name}</p><p className="text-sm" style={{ color: "var(--primary)" }}>{aboutSection.director.title}</p></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image src="/images/about.png" alt="ExpressRX Pharmacy" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl p-6 shadow-md" style={{ background: "var(--primary-dim)" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-1)" }}>Get in Touch</h3>
                <ul className="space-y-3 text-sm">
                  <li style={{ color: "var(--text-1)" }}>{siteConfig.address}</li>
                  <li><a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="link-medical">{siteConfig.phone}</a></li>
                  <li><a href={`mailto:${siteConfig.email}`} className="link-medical">{siteConfig.email}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
