import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingCallButton from "@/components/FloatingCallButton";
import Script from "next/script"; // Added for JSON-LD

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {title: 'Sanibroyeur Service, Reparatie & Installatie | Sanibroyeur Techniek Nederland',
  description: 'Last van een verstopte sanibroyeur of een defect? Sanibroyeur Techniek Nederland biedt snelle, vakkundige service, reparatie en installatie. Neem direct contact op!',
    default: `${siteConfig.name} - Uw Sanibroyeur Specialist`,
    template: `%s - ${siteConfig.name}`,
  },
  description: `Zoek niet verder! ${siteConfig.name} is uw expert voor Sanibroyeur installatie, reparatie en onderhoud. Snelle service, vakmanschap en duidelijke prijzen. Neem vandaag contact op!`,
  keywords: [
    "Sanibroyeur",
    "Sanibroyeur installatie",
    "Sanibroyeur reparatie",
    "Sanibroyeur onderhoud",
    "WC vermaler",
    "broyeur toilet",
    "loodgieter Sanibroyeur",
    siteConfig.name,
    "toilet installeren zonder afvoer",
    "badkamer verbouwen",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    title: `${siteConfig.name} - Expert in Sanibroyeur Oplossingen`,
    description: `Professionele installatie, snelle reparatie en grondig onderhoud van uw Sanibroyeur. ${siteConfig.name} staat voor u klaar!`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo van ${siteConfig.name} - Sanibroyeur Specialist`,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Top Sanibroyeur Service`,
    description: `Hulp nodig met uw Sanibroyeur? ${siteConfig.name} biedt vakkundige installatie, reparatie en onderhoud. Bel ons nu!`,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(var(--background))" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(var(--background))" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "image": `${siteConfig.url}${siteConfig.ogImage}`,
  "@id": siteConfig.url,
  "url": siteConfig.url,
  "telephone": siteConfig.contactInfo.telefoon,
  "email": siteConfig.contactInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contactInfo.adres?.straat || "",
    "addressLocality": siteConfig.contactInfo.adres?.plaats || "",
    "postalCode": siteConfig.contactInfo.adres?.postcode || "",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    // Add latitude and longitude if available, otherwise remove or leave empty
    "latitude": "", 
    "longitude": ""
  },
  "description": siteConfig.description,
  "priceRange": "€€", // Optional: Adjust as needed
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00", // Assuming 24/7 for emergency service, adjust if needed
      "closes": "23:59"
    }
  ],
  "sameAs": [], // Add social media links here if they are re-added later
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/contact`,
      "inLanguage": "nl-NL",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Serviceafspraak maken"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingCallButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

