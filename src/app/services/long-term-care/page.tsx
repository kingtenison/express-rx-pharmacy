import { Metadata } from "next";
import { servicesPageContent } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Long-Term Care Pharmacy Services",
  description:
    "Unit-dose packaging, medication management, and reliable delivery for assisted living and skilled nursing facilities across Ohio.",
  path: "/services/long-term-care",
  keywords: ["long term care pharmacy", "nursing home pharmacy Ohio", "facility medication management"],
});
export default function LongTermCarePage() {
  return <ServiceDetail title={servicesPageContent.longTermCare.title} description={servicesPageContent.longTermCare.description} features={servicesPageContent.longTermCare.features} icon="building" imageSrc="/images/Long-Term Care.png" />;
}
