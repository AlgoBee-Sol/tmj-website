import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import MobileActionBar from "@/components/layout/MobileActionBar";
import StructuredData from "@/components/seo/StructuredData";
import { site, siteUrl } from "@/lib/site";

// Self-hosted at build time — no runtime request to a font CDN.
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const homeTitle =
  "Physiotherapy Clinic in Islamabad | The Muscular Junction, River Gardens";
const homeDescription =
  "Evidence-based physiotherapy in Zone V, River Gardens, Islamabad. Manual therapy, sports injury, orthopedic, neuro and pediatric rehabilitation — rated 5.0 by 60+ patients on Google. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  applicationName: site.name,
  keywords: [
    "physiotherapy Islamabad",
    "physiotherapist Islamabad",
    "physiotherapy clinic Islamabad",
    "physiotherapy River Gardens",
    "rehabilitation center Islamabad",
    "physiotherapy near me",
    "Dr. Syed Mozaffar",
    "The Muscular Junction",
    "manual therapy Islamabad",
    "sports injury rehabilitation Islamabad",
    "neuro rehabilitation Islamabad",
    "orthopedic physiotherapy Islamabad",
    "pediatric physiotherapy Islamabad",
    "dry needling Islamabad",
    "cupping therapy Islamabad",
    "physiotherapy workshops Islamabad",
    "physiotherapy Rawalpindi",
    "physiotherapy Bahria Town",
    "physiotherapy DHA Islamabad",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: site.name,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo-tmj.png",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060e18" },
  ],
};

// Runs before paint so the correct theme is applied without a flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-background pb-[4.25rem] text-foreground lg:pb-0">
        <StructuredData />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <Header />
        <SocialSidebar />

        <main id="main" className="flex-grow">
          {children}
        </main>

        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
