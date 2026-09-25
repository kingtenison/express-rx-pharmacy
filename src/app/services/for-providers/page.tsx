import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pharmacy Services for Healthcare Providers",
  description:
    "e-Rx, fax, and online prescription referrals with prior authorization support and a dedicated liaison for your Ohio practice or facility.",
  path: "/services/for-providers",
  keywords: ["pharmacy provider referrals", "e-prescribe pharmacy Ohio", "prior authorization support"],
});
export default function ForProvidersPage() {
  return <ServiceDetail title={servicesPageContent.forProviders.title} description={servicesPageContent.forProviders.description} features={servicesPageContent.forProviders.features} icon="stethoscope" imageSrc="/138953.jpg" />;
}
