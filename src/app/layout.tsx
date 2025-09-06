import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Greenway Interiors - Premium Interior Design Services",
  description: "Transform your space with our premium interior design services. We create beautiful, functional living spaces that reflect your unique style and personality.",
  keywords: ["interior design", "home decor", "luxury design", "residential design", "commercial design", "Greenway Interiors"],
  authors: [{ name: "Greenway Interiors Team" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Greenway Interiors - Premium Interior Design",
    description: "Transform your space with our premium interior design services",
    url: "https://greenwayinteriors.com",
    siteName: "Greenway Interiors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenway Interiors - Premium Interior Design",
    description: "Transform your space with our premium interior design services",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Greenway Interiors",
    "application-name": "Greenway Interiors",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#A8B5A0",
    "msapplication-tap-highlight": "no",
  },
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${montserrat.variable} ${raleway.variable} antialiased bg-background text-foreground font-sans`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <SplashScreenWrapper>
          <main id="main-content">
            {children}
          </main>
          <ServiceWorkerRegister />
          <Toaster />
        </SplashScreenWrapper>
      </body>
    </html>
  );
}
