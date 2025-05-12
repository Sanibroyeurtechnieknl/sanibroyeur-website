import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { promises as fs } from "fs";
import path from "path";

// Define the structure of your geographical data
interface Place {
  name: string;
}

interface Municipality {
  name: string;
  places: Place[];
}

interface Province {
  name: string;
  municipalities: Municipality[];
}

async function getGeoData(): Promise<Province[]> {
  const filePath = path.join(process.cwd(), "src", "lib", "data", "dutch_geographical_data.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as Province[];
  } catch (error) {
    console.error("Failed to read or parse geo data for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const geoData = await getGeoData();
  const werkgebiedenUrls: MetadataRoute.Sitemap = [];

  if (!geoData) return [];

  for (const province of geoData) {
    if (!province || !province.name || !province.municipalities) continue;
    const provincieSlug = province.name.toLowerCase().replace(/\s+/g, "-");
    werkgebiedenUrls.push({
      url: `${siteConfig.url}/werkgebieden/${provincieSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    for (const municipality of province.municipalities) {
      if (!municipality || !municipality.name || !municipality.places) continue;
      const gemeenteSlug = municipality.name.toLowerCase().replace(/\s+/g, "-");
      werkgebiedenUrls.push({
        url: `${siteConfig.url}/werkgebieden/${provincieSlug}/${gemeenteSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });

      for (const place of municipality.places) {
        if (!place || !place.name) continue;
        const plaatsSlug = place.name.toLowerCase().replace(/\s+/g, "-");
        werkgebiedenUrls.push({
          url: `${siteConfig.url}/werkgebieden/${provincieSlug}/${gemeenteSlug}/${plaatsSlug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.5,
        });
      }
    }
  }

  const staticPages = [
    "", // Homepage
    "/contact",
    "/diensten",
    "/privacybeleid",
    "/algemene-voorwaarden",
    "/werkgebieden", // Main werkgebieden overview page
    // Add other static pages like /over-ons, /faq, /blog if they exist
  ];

  const staticPageUrls = staticPages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8, // Homepage highest priority
  }));

  return [...staticPageUrls, ...werkgebiedenUrls];
}

