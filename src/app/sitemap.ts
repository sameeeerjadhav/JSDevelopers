import type { MetadataRoute } from "next";
import { getAllProjectSlugs, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.siteUrl}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${siteConfig.siteUrl}/projects`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${siteConfig.siteUrl}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${siteConfig.siteUrl}/contact`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${siteConfig.siteUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${siteConfig.siteUrl}/projects/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes, ...projectRoutes];
}
