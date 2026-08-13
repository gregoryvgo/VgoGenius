// lib/seo.js
export const seoDefaults = {
  siteName: "VgoGenius",
  baseUrl: "https://vgogenius.gr",
  defaultDescription: "Υπηρεσίες κατασκευής ιστοσελίδων, SEO και ψηφιακού σχεδιασμού από την VgoGenius.", // Default description
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

  const finalDescription = description || seoDefaults.defaultDescription;

  // Μετατροπή της εικόνας ΠΑΝΤΑ σε absolute URL
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${seoDefaults.baseUrl}${image}`
    : `${seoDefaults.baseUrl}${seoDefaults.defaultImage}`;

  return {
    title: fullTitle,
    description: finalDescription,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    alternates: { canonical: fullUrl },
    // SEO: OpenGraph metadata for social media sharing
    openGraph: {
      title: fullTitle,
      description: finalDescription,
      url: fullUrl,
      siteName: seoDefaults.siteName,
      images: [
        {
          url: imageUrl,
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
      description: finalDescription,
      images: [imageUrl],
      creator: seoDefaults.creator,
    },
    // SEO: Robots metadata for search engines
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
}