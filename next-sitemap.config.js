/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vgogenius.gr", // domain σου
  generateRobotsTxt: true, // δημιουργεί robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404"], // προαιρετικά
  robotsTxtOptions: {
    additionalSitemaps: ["https://vgogenius.gr/sitemap.xml"],
  },
};
