import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import ServicesList from "@/components/ServicesList";
import StatsBar from "@/components/StatsBar";
import FeatureGrid from "@/components/FeatureGrid";
import AudienceSection from "@/components/AudienceSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesList services={services} />
      <StatsBar />
      <FeatureGrid />
      <ServiceSection />
      <AudienceSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
