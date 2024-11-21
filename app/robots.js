export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://www.codetrainafrica.com/sitemap.xml",
  };
}
