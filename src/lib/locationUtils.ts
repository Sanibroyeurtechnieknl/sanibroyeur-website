// src/lib/locationUtils.ts
import geoData from "@/lib/data/dutch_geographical_data.json";
import { slugify } from "@/lib/utils"; // Importeer de slugify functie

interface Municipality {
  name: string;
  places: string[];
}

interface Province {
  name: string;
  municipalities: Municipality[];
}

const provinces: Province[] = geoData as Province[];

export interface LocationInfo {
  provincieNaam?: string;
  gemeenteNaam?: string;
  plaatsNaam?: string;
  isValid: boolean; // Om te weten of de combinatie geldig is
}

export function getLocationInfoFromSlugs(slugParts: string[]): LocationInfo {
  const info: LocationInfo = { isValid: false };

  if (slugParts.length === 0) return info;

  const provincieSlug = slugParts[0];
  const targetProvincie = provinces.find(p => slugify(p.name) === provincieSlug);

  if (!targetProvincie) return info;
  info.provincieNaam = targetProvincie.name;
  if (slugParts.length === 1) {
    info.isValid = true;
    return info;
  }

  const gemeenteSlug = slugParts[1];
  const targetGemeente = targetProvincie.municipalities.find(m => slugify(m.name) === gemeenteSlug);

  if (!targetGemeente) return info;
  info.gemeenteNaam = targetGemeente.name;
  if (slugParts.length === 2) {
    info.isValid = true;
    return info;
  }

  const plaatsSlug = slugParts[2];
  const targetPlaats = targetGemeente.places.find(pl => slugify(pl) === plaatsSlug);

  if (!targetPlaats) return info;
  info.plaatsNaam = targetPlaats; // targetPlaats is de naam string
  info.isValid = true;

  return info;
}

// Functie om alle mogelijke paden te genereren voor generateStaticParams (optioneel, voor performance)
export function getAllWerkgebiedPaths() {
  const paths: { slug: string[] }[] = [];
  provinces.forEach(provincie => {
    const provincieSlug = slugify(provincie.name);
    paths.push({ slug: [provincieSlug] });
    provincie.municipalities.forEach(gemeente => {
      const gemeenteSlug = slugify(gemeente.name);
      paths.push({ slug: [provincieSlug, gemeenteSlug] });
      gemeente.places.forEach(plaats => {
        paths.push({ slug: [provincieSlug, gemeenteSlug, slugify(plaats)] });
      });
    });
  });
  return paths;
}
