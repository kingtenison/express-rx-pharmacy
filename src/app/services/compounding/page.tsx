import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compounding Pharmacy in Columbus, Ohio",
  description:
    "Custom compounded medications prepared by licensed pharmacists — pediatric liquids, allergen-free formulations, creams, and veterinary compounds in Ohio.",
  path: "/services/compounding",
  keywords: ["compounding pharmacy Columbus", "custom medication", "pediatric compounding Ohio"],
});
export default function CompoundingPage() {
  return <ServiceDetail title={servicesPageContent.compounding.title} description={servicesPageContent.compounding.description} features={servicesPageContent.compounding.features} icon="flask" imageSrc="/images/compounding.png" />;
}
