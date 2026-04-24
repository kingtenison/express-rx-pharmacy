import { Metadata } from "next";
import Image from "next/image";
import { services, servicesPageContent } from "@/lib/data";
import ServicesList from "@/components/ServicesList";
export const metadata: Metadata = { title: "Our Services | ExpressRX Pharmacy" };
export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <span className="section-label mb-3">Services</span>
              <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>{servicesPageContent.hero.title}</h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-2)" }}>{servicesPageContent.hero.subtitle}</p>
            </div>
            <div className="relative z-10 hidden lg:block">
              <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: "var(--border)" }}>
                <Image src="/images/services.png" alt="ExpressRX Pharmacy Services" width={600} height={400} className="w-full h-auto" priority />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesList services={services} />
    </>
  );
}
