import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = { title: "Durable Medical Equipment | Express Pharmacy & DME" };
export default function DMEPage() {
  return <ServiceDetail title={servicesPageContent.dme.title} description={servicesPageContent.dme.description} features={servicesPageContent.dme.features} icon="wheelchair" imageSrc="/images/DME.png" />;
}
