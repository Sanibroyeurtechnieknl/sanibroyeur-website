"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PlaceDetail {
  name: string;
  slug: string;
  gemeenteSlug: string;
}

interface CollapsiblePlacesListProps {
  places: PlaceDetail[];
  provincieSlug: string;
  provincieName: string;
}

export default function CollapsiblePlacesList({ places, provincieSlug, provincieName }: CollapsiblePlacesListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  if (!places || places.length === 0) {
    return <p className="text-center text-gray-600 dark:text-gray-400">Geen plaatsen gevonden voor deze provincie.</p>;
  }

  return (
    <div className="mb-8">
      <Button
        onClick={toggleOpen}
        variant="outline"
        className="w-full flex justify-between items-center py-3 px-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-md shadow"
      >
        <span>Bekijk alle plaatsen in {provincieName} ({places.length})</span>
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-md shadow-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {places.map((place) => (
              <Link
                key={`${provincieSlug}-${place.gemeenteSlug}-${place.slug}`}
                href={`/werkgebieden/${provincieSlug}/${place.gemeenteSlug}/${place.slug}`}
                className="block p-4 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-blue-500"
              >
                <h3 className="text-md font-semibold text-blue-600 dark:text-blue-400 text-center">{place.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

