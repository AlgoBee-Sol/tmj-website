import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import SocialSidebar from "@/components/layout/SocialSidebar";
import StructuredData from "@/components/seo/StructuredData";
import { site, siteUrl } from "@/lib/site";
const font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Physiotherapy in River Gardens, Islamabad | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.positioning,
  applicationName: site.name,
  category: "Health",
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.ico", apple: "/images/logo-tmj.png" },
  verification: {
    // Public ownership proof for the clinic's Search Console property.
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "l36SifjDS2hXSybTIhUct3aGcpKT4W_AM1sYpEP9sRM",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7faf9",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable} data-scroll-behavior="smooth">
      <body>
        <StructuredData />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <SocialSidebar />
        <MobileActionBar />
      </body>
    </html>
  );
}
