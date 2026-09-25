import type { Metadata } from "next";
import { faqPageSchema, buildMetadata, JsonLd } from "@/lib/seo";
import { faqPatientQuestions, faqProviderQuestions } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ExpressRx Pharmacy — insurance and billing, prescription transfers, delivery, compounding, and provider referrals in Ohio.",
  path: "/faq",
  keywords: [
    "pharmacy FAQ",
    "prescription transfer questions",
    "pharmacy insurance billing",
    "compounding questions",
  ],
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqPageSchema([...faqPatientQuestions, ...faqProviderQuestions])} />
      {children}
    </>
  );
}
