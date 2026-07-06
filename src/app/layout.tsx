import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import StructuredData from "@/components/seo/StructuredData";
import siteData from "@/data/site.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteData.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteData.name} | ${siteData.tagline}`,
    template: `%s | ${siteData.name}`,
  },
  description:
    "The Muscular Junction is a premier physiotherapy & rehabilitation center in Islamabad offering manual therapy, sports rehab, neuro rehab and professional physiotherapy workshops led by Dr. Syed Mozaffar.",
  keywords: [
    "physiotherapy Islamabad",
    "rehabilitation center",
    "manual therapy",
    "sports rehabilitation",
    "dry needling workshop",
    "kinesio taping",
    "Mulligan techniques",
    "HVLA chiropractic",
    "physiotherapy workshops",
    "Dr. Syed Mozaffar",
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteData.name,
    title: `${siteData.name} | ${siteData.tagline}`,
    description:
      "Advanced physiotherapy, rehabilitation and professional therapy workshops in Islamabad, Pakistan.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.tagline}`,
    description:
      "Advanced physiotherapy, rehabilitation and professional therapy workshops in Islamabad, Pakistan.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
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
