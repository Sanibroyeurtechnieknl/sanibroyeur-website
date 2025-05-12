import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createSlug = (name: string): string => {
  if (typeof name !== "string") return "";

  // Handle specific province name aliases to ensure consistent slugs.
  // This maps the name as found in the primary data source (dutch_geographical_data.json)
  // to the desired slug used in URLs and siteConfig.
  const provinceNameAliasToSlug: { [key: string]: string } = {
    "Fryslân": "friesland", // Ensures "Fryslân" (from data) maps to "friesland" slug
    // Add other province aliases here if needed, e.g.:
    // "Noord-Brabant": "noordbrabant", // if a different slug like "noordbrabant" is preferred over "noord-brabant"
  };

  // Check if the input name matches a key in the alias map (case-insensitive)
  const trimmedLowerName = name.trim().toLowerCase();
  for (const dataNameKey in provinceNameAliasToSlug) {
    if (dataNameKey.trim().toLowerCase() === trimmedLowerName) {
      return provinceNameAliasToSlug[dataNameKey];
    }
  }

  // Default slug generation for names not in aliases, or for non-province names (gemeente, plaats)
  return name
    .normalize("NFD") // Decompose accented characters (e.g., 'é' to 'e' + '´')
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/gi, ""); // Remove any remaining non-alphanumeric characters except hyphens
};

