import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our Columbus Pharmacy Team",
  description:
    "Meet the physician-led team behind ExpressRx Pharmacy in Columbus, Ohio — serving patients, long-term care facilities, and providers across Ohio.",
  path: "/about",
  keywords: [
    "about ExpressRx Pharmacy",
    "Columbus Ohio pharmacist",
    "compounding pharmacy team",
    "physician led pharmacy",
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
