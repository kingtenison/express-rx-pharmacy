import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Specialty Pharmacy in Columbus, Ohio",
  description:
    "Specialty pharmacy support for complex therapies — copay assistance, prior authorization, therapy management, and statewide delivery across Ohio.",
  path: "/services/specialty",
  keywords: [
    "specialty pharmacy Columbus",
    "copay assistance pharmacy",
    "prior authorization pharmacy Ohio",
    "limited distribution drugs",
  ],
});

export default function SpecialtyPage() {
  return (
    <ServiceDetail
      title={servicesPageContent.specialty.title}
      description={servicesPageContent.specialty.description}
      features={servicesPageContent.specialty.features}
      icon="pill"
      imageSrc="/images/specialty.png"
    />
  );
}
