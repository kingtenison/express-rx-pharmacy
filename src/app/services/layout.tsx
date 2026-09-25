import type { Metadata } from "next";
export const metadata: Metadata = {
  // Explicit template so service pages keep the brand suffix (a plain-string
  // title here would shadow the root template for all /services/* children).
  title: {
    default: "Our Services | Express Pharmacy & DME",
    template: "%s | Express Pharmacy & DME",
  },
  description:
    "Explore compounding, durable medical equipment, long-term care, specialty pharmacy, and provider referral services from ExpressRx in Columbus, Ohio.",
};
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
