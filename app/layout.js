import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent"; 

export const metadata = {
  title: "VgoGenius | Δημιουργία με Αξιοπιστία και Όραμα",
  description:
    "Η VgoGenius δημιουργεί επαγγελματικά websites με Next.js και Tailwind CSS. Σύγχρονη αισθητική, ταχύτητα και πλήρες SEO για κάθε επιχείρηση.",
  keywords: [
    "VgoGenius",
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
        url: "https://vgogenius.gr/images/og-home.jpg",
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
    images: ["https://vgogenius.gr/images/og-home.jpg"],
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
  return (
    <html lang="el">
      <head>
        {/* Προφόρτωση Google Fonts για ταχύτερο LCP */}
        <Script
          id="preload-font"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const link1 = document.createElement('link');
              link1.rel = 'preconnect';
              link1.href = 'https://fonts.googleapis.com';
              document.head.appendChild(link1);

              const link2 = document.createElement('link');
              link2.rel = 'preconnect';
              link2.href = 'https://fonts.gstatic.com';
              link2.crossOrigin = 'true';
              document.head.appendChild(link2);
            `,
          }}
        />
      </head>

      <body
        id="vgobody"
        style={{
          color: "#fff",
          position: "relative",
          zIndex: 0,
          opacity: 1,
          transition: "opacity 0.4s ease",
          fontFamily: "Poppins, sans-serif",
        }}
      >
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
