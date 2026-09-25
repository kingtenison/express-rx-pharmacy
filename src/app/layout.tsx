import type { Metadata } from "next";
import { Afacad, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { JsonLd, pharmacySchema, webSiteSchema } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const homeTitle = `${siteConfig.name} | Columbus Compounding, DME & Long-Term Care Pharmacy`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: homeTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [
    "Columbus Ohio pharmacy",
    "compounding pharmacy Columbus",
    "durable medical equipment Ohio",
    "long-term care pharmacy",
    "specialty pharmacy Columbus",
    "24/7 pharmacist",
    "prescription delivery Ohio",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: "ExpressRx Clinical Team" }],
  // `./` resolves to the current pathname -> self-referencing canonical sitewide
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: homeTitle,
    description: siteConfig.description,
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.description,
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/images/logo-nav.png",
    apple: "/images/logo-nav.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${afacad.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={pharmacySchema()} />
        <JsonLd data={webSiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
