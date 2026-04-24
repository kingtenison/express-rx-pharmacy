import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = { title: "Long-Term Care Pharmacy | Express Pharmacy & DME" };
export default function LongTermCarePage() {
  return <ServiceDetail title={servicesPageContent.longTermCare.title} description={servicesPageContent.longTermCare.description} features={servicesPageContent.longTermCare.features} icon="building" imageSrc="/images/Long-Term Care.png" />;
}
