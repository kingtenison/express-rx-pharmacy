import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Storefront — Cash-Pay Pharmacy Essentials",
  description:
    "Shop the ExpressRx storefront — everyday medications, wellness, and DME essentials with clear cash pricing, no insurance required, delivered across Ohio.",
  path: "/storefront",
  keywords: ["cash pay pharmacy", "pharmacy essentials online", "OTC pharmacy Columbus"],
});

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return children;
}
