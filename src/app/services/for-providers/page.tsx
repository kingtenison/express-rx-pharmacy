import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = { title: "For Providers | Express Pharmacy & DME" };
export default function ForProvidersPage() {
  return <ServiceDetail title={servicesPageContent.forProviders.title} description={servicesPageContent.forProviders.description} features={servicesPageContent.forProviders.features} icon="stethoscope" />;
}
