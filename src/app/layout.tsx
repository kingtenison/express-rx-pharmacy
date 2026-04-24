import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
