import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://nishiborakan.com";

const paths = [
  "",
  "/accommodation",
  "/meals",
  "/facilities",
  "/access",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${BASE_URL}${path}/`,
  }));
}
