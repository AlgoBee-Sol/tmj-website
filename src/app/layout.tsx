import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import StructuredData from "@/components/seo/StructuredData";
import siteData from "@/data/site.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const homeTitle =
  "Best Physiotherapy Clinic in Islamabad | The Muscular Junction";
const homeDescription =
  "The Muscular Junction is a leading physiotherapy & rehabilitation center in Islamabad. Expert manual therapy, sports & neuro rehab, and certified physiotherapy workshops by Dr. Syed Mozaffar. Book your appointment today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteData.name}`,
  },
  description: homeDescription,
  applicationName: siteData.name,
  keywords: [
    "physiotherapy Islamabad",
    "best physiotherapist Islamabad",
    "physiotherapy clinic Islamabad",
    "rehabilitation center Islamabad",
    "physiotherapy near me",
    "Dr. Syed Mozaffar",
    "The Muscular Junction",
    "manual therapy",
    "sports rehabilitation",
    "neuro rehabilitation",
    "orthopedic physiotherapy",
    "pediatric physiotherapy",
    "dry needling",
    "cupping therapy",
    "physiotherapy workshops",
    "physiotherapy Rawalpindi",
    "physiotherapy Bahria Town",
    "physiotherapy DHA Islamabad",
  ],
  authors: [{ name: siteData.name, url: siteUrl }],
  creator: siteData.name,
  publisher: siteData.name,
  category: "Health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: siteData.name,
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
    title: siteData.name,
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
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// Runs before paint to set the theme class, preventing a flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <StructuredData />
        <Header />
        <SocialSidebar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
