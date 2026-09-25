import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Durable Medical Equipment (DME) in Ohio",
  description:
    "Mobility, respiratory, and recovery equipment with insurance billing support, professional fitting, and delivery to your door across Ohio.",
  path: "/services/dme",
  keywords: ["durable medical equipment Ohio", "DME supplier Columbus", "CPAP wheelchairs Ohio"],
});
export default function DMEPage() {
  return <ServiceDetail title={servicesPageContent.dme.title} description={servicesPageContent.dme.description} features={servicesPageContent.dme.features} icon="wheelchair" imageSrc="/images/DME.png" />;
}
