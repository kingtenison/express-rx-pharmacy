import type { Metadata } from "next";
import { Afacad, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
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

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.tagline,
  icons: {
    icon: "/images/logo-nav.png",
    apple: "/images/logo-nav.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${afacad.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
