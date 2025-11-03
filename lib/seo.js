// lib/seo.js
export const seoDefaults = {
  siteName: "VgoGenius",
  baseUrl: "https://vgogenius.gr",
  defaultImage: "/images/og-home.jpg",
  locale: "el_GR",
  type: "website",
  creator: "@vgogenius",
};

export function generatePageMeta({
  title,
  description,
  path = "",
  image = null,
  keywords = [],
}) {
  const fullUrl = `${seoDefaults.baseUrl}${path}`;
  const fullTitle = title
    ? `${title} | ${seoDefaults.siteName}`
    : seoDefaults.siteName;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    alternates: { canonical: fullUrl },
    // SEO: OpenGraph metadata for social media sharing
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: seoDefaults.siteName,
      images: [
        {
          url: image || `${seoDefaults.baseUrl}${seoDefaults.defaultImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: seoDefaults.locale,
      type: seoDefaults.type,
    },
    // SEO: Twitter card metadata
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image || `${seoDefaults.baseUrl}${seoDefaults.defaultImage}`],
      creator: seoDefaults.creator,
    },
    // SEO: Robots metadata for search engines
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
