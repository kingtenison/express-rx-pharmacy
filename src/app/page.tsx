import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServicesList from "@/components/ServicesList";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ServicesList services={services} />
      <AudienceSection />
      <CTASection />
    </>
  );
}
