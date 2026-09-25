import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact ExpressRx Pharmacy",
  description:
    "Reach ExpressRx Pharmacy in Columbus, Ohio — call (614) 495-9097, fax, email, or send a referral. Serving patients and facilities statewide across Ohio.",
  path: "/contact",
  keywords: ["contact Columbus pharmacy", "pharmacy phone number", "prescription referral Ohio"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
