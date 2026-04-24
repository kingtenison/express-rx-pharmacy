import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = { title: "Compounding Pharmacy | Express Pharmacy & DME" };
export default function CompoundingPage() {
  return <ServiceDetail title={servicesPageContent.compounding.title} description={servicesPageContent.compounding.description} features={servicesPageContent.compounding.features} icon="flask" imageSrc="/images/compounding.png" />;
}
