import type { MetadataRoute } from "next";
import { MTH_PRODUCT_PATH } from "@/lib/mth/constants";
import { seoPages } from "@/lib/mth/seo-pages";
import { resourcePages } from "@/lib/mth/resource-pages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${MTH_PRODUCT_PATH}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const seoLandingPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const resourceArticlePages: MetadataRoute.Sitemap = resourcePages.map(
    (page) => ({
      url: `${SITE_URL}/resources/${page.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...seoLandingPages, ...resourceArticlePages];
}
