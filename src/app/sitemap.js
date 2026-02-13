const BASE_URL = "https://azconinfra.com";

export default function sitemap() {
  const routes = [
    "/en",
    "/en/about",      // ⭐ add this
    "/en/services",
    "/en/blog",
    "/en/contact",
    "/en/gallery",

    "/ar",
    "/ar/about",      // ⭐ add this
    "/ar/services",
    "/ar/blog",
    "/ar/contact",
    "/ar/gallery",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority:
      route === "/en" || route === "/ar"
        ? 1
        : route.includes("/services") || route.includes("/about")
        ? 0.95
        : 0.9,
  }));
}
