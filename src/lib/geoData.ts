import path from "path";
import { promises as fs } from "fs";

export interface MunicipalityFromData {
  name: string;
  places: string[];
}

export interface ProvinceFromData {
  name: string;
  municipalities: MunicipalityFromData[];
}

export async function getGeoData(): Promise<ProvinceFromData[]> {
  const filePath = path.join(process.cwd(), "src", "lib", "data", "dutch_geographical_data.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as ProvinceFromData[];
  } catch (error) {
    console.error("getGeoData: Failed to read or parse geo data:", error);
    return []; // Return empty array on error to prevent build failures
  }
}

