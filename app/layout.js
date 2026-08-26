import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent"; 

// Ρύθμιση της γραμματοσειράς Poppins
const poppins = Poppins({
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "VgoGenius | Δημιουργία με Αξιοπιστία και Όραμα",
  description:
    "Η VgoGenius δημιουργεί επαγγελματικά websites με Next.js και Tailwind CSS. Σύγχρονη αισθητική, ταχύτητα και πλήρες SEO για κάθε επιχείρηση.",
  keywords: [
    // Brand Variations / Ορθογραφικά Λάθη
    "VgoGenius",
    "vgogenious",
    "bgogenius",
    "bgogenious",
    "vgotzinious",
    "ωγογενιθς",
    "vgo genius",
    "βγοτζινιους",
    // Core Keywords
    "κατασκευή ιστοσελίδων",
    "web design Ελλάδα",
    "Next.js",
    "Tailwind CSS",
    "SEO",
    "website development",
    "εταιρική ιστοσελίδα",
    "κατασκευή site",
    "φιλοξενία ιστοσελίδων",
    "Vercel",
  ],
  metadataBase: new URL("https://vgogenius.gr"),
  alternates: { canonical: "https://vgogenius.gr" },
  openGraph: {
    title: "VgoGenius | Δημιουργία με Αξιοπιστία και Όραμα",
    description:
      "Εταιρεία κατασκευής ιστοσελίδων με σύγχρονη αισθητική, ταχύτητα και απόδοση.",
    url: "https://vgogenius.gr",
    siteName: "VgoGenius",
    images: [
      {
        url: "https://vgogenius.gr/image.png", // Χρησιμοποιεί το image.png από το public
        width: 1200,
        height: 630,
        alt: "VgoGenius Website Design",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VgoGenius | Web Design & Development",
    description:
      "Επαγγελματικά websites με Next.js, Tailwind CSS και SEO για σύγχρονες επιχειρήσεις.",
    images: ["https://vgogenius.gr/image.png"], // Το ίδιο και εδώ για το Twitter
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e2841a",
};

export default function RootLayout({ children }) {
  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VgoGenius",
    "alternateName": [
      "vgogenious", 
      "bgogenius", 
      "bgogenious", 
      "vgotzinious", 
      "ωγογενιθς", 
      "Vgo Genius",
      "βγοτζινιους"
    ],
    "url": "https://vgogenius.gr",
    "logo": "https://vgogenius.gr/images/logo.webp", // Το λογότυπο που είδαμε στο φάκελο images
    "description": "Η VgoGenius δημιουργεί επαγγελματικά websites με Next.js και Tailwind CSS.",
    "serviceType": ["Web Design", "Website Development", "SEO"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece"
    },
    "email": "vgogenius@gmail.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "vgogenius@gmail.com",
      "availableLanguage": ["Greek", "English"]
    },
    "founder": {
      "@type": "Person",
      "name": "Γρηγόρης Βγόντζας",
      "jobTitle": "Web Developer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Αθήνα",
      "addressCountry": "GR"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61583187277864",
      "https://www.instagram.com/vgogenius/"
    ]
  };

  return (
    <html lang="el">
      <body
        id="vgobody"
        className={poppins.className}
        style={{
          color: "#fff",
          position: "relative",
          zIndex: 0,
          opacity: 1,
          transition: "opacity 0.4s ease",
        }}
      >
        {/* JSON-LD Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Φόρτωση Font Awesome */}
        <Script
          id="font-awesome-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
              document.head.appendChild(link);
            `,
          }}
        />

        <Header />
        <main style={{ position: "relative", zIndex: 10 }}>{children}</main>
        <Footer />
        <CookieConsent /> 
      </body>
    </html>
  );
}