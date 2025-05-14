// src/app/werkgebieden/[...slug]/page.tsx
import { Metadata } from 'next';
import { getLocationInfoFromSlugs, LocationInfo, getAllWerkgebiedPaths } from '@/lib/locationUtils'; // Pas pad aan indien nodig
import { siteConfig } from "@/lib/siteConfig";
import Link from 'next/link';

// Optioneel: voor betere performance bij veel pagina's, pre-genereert Next.js de paden.
// export async function generateStaticParams() {
//   return getAllWerkgebiedPaths();
// }

type Props = {
  params: { slug: string[] }; // slug is een array van slug-onderdelen, bijv. ['noord-holland', 'amsterdam', 'centrum']
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locationInfo = getLocationInfoFromSlugs(params.slug);

  let title = `${siteConfig.name} - Sanibroyeur Specialist`; // Fallback titel
  let description = `Vind uw lokale Sanibroyeur expert. ${siteConfig.name} biedt vakkundige installatie, reparatie en onderhoud.`;
  let pageSpecificKeywords: string[] = [];

  if (!locationInfo.isValid) {
    // Optioneel: redirect of toon 404 als de slug-combinatie niet geldig is
    // Voor nu, generieke metadata
    return {
      title: `Werkgebied niet gevonden - ${siteConfig.name}`,
      description: "Deze specifieke locatiepagina kon niet worden gevonden.",
    };
  }

  if (locationInfo.plaatsNaam && locationInfo.gemeenteNaam && locationInfo.provincieNaam) {
    // Plaats-specifiek (meest gedetailleerd)
    title = `Sanibroyeur Expert ${locationInfo.plaatsNaam} | Service in ${locationInfo.gemeenteNaam}`;
    description = `Snelle Sanibroyeur service in ${locationInfo.plaatsNaam} (${locationInfo.gemeenteNaam}, ${locationInfo.provincieNaam}). Bel ${siteConfig.name} voor installatie, reparatie en onderhoud. Vakkundig en betrouwbaar. Sanibroyeur verstopt ${locationInfo.plaatsNaam}? Wij helpen!`;
    pageSpecificKeywords = [`Sanibroyeur ${locationInfo.plaatsNaam}`, `Sanibroyeur verstopt ${locationInfo.plaatsNaam}`, `Sanibroyeur stuk ${locationInfo.plaatsNaam}`, `reparatie ${locationInfo.plaatsNaam}`];
  } else if (locationInfo.gemeenteNaam && locationInfo.provincieNaam) {
    // Gemeente-specifiek
    title = `Sanibroyeur ${locationInfo.gemeenteNaam} | Specialist in ${locationInfo.provincieNaam}`;
    description = `${siteConfig.name}: uw Sanibroyeur specialist in de gemeente ${locationInfo.gemeenteNaam} (${locationInfo.provincieNaam}). Betrouwbare service voor installatie, reparatie en onderhoud.`;
    pageSpecificKeywords = [`Sanibroyeur ${locationInfo.gemeenteNaam}`, `Sanibroyeur service ${locationInfo.gemeenteNaam}`];
  } else if (locationInfo.provincieNaam) {
    // Provincie-specifiek
    title = `Sanibroyeur ${locationInfo.provincieNaam} | ${siteConfig.name}`;
    description = `Alle Sanibroyeur diensten in de provincie ${locationInfo.provincieNaam}. ${siteConfig.name} helpt u met installatie, onderhoud en reparaties.`;
    pageSpecificKeywords = [`Sanibroyeur ${locationInfo.provincieNaam}`, `Sanibroyeur expert ${locationInfo.provincieNaam}`];
  }

  return {
    title: `${title} | ${siteConfig.name}`.slice(0, 60), // Titel afkappen op ~60 tekens
    description: description.slice(0, 155), // Beschrijving afkappen op ~155 tekens
    keywords: [`Sanibroyeur`, `broyeur toilet`, `wc vermaler`, ...pageSpecificKeywords].join(', '),
    alternates: {
      canonical: `${siteConfig.url}/werkgebieden/${params.slug.join('/')}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `${siteConfig.url}/werkgebieden/${params.slug.join('/')}`,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image-werkgebied.jpg`, // Zorg dat deze afbeelding bestaat in uw public map
          width: 1200,
          height: 630,
          alt: `Sanibroyeur service in ${locationInfo.plaatsNaam || locationInfo.gemeenteNaam || locationInfo.provincieNaam}`,
        },
      ],
      locale: 'nl_NL',
      type: 'website',
    },
  };
}

export default async function WerkgebiedDynamischePage({ params }: Props) {
  const locationInfo = getLocationInfoFromSlugs(params.slug);

  if (!locationInfo.isValid) {
    // Toon een 404 pagina of een bericht dat de locatie niet is gevonden
    return (
      <main className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Locatie niet gevonden</h1>
        <p>De opgevraagde werkgebiedpagina kon niet worden gevonden. Controleer de URL of ga terug naar het <Link href="/werkgebieden" className="text-primary hover:underline">werkgebieden overzicht</Link>.</p>
      </main>
    );
  }

  // Hier bouwt u de daadwerkelijke pagina-inhoud op basis van locationInfo
  // en uw locatie_pagina_template_draft.md
  let pageTitle = "Sanibroyeur Service";
  if (locationInfo.plaatsNaam) {
    pageTitle = `Sanibroyeur Expert in ${locationInfo.plaatsNaam}`;
  } else if (locationInfo.gemeenteNaam) {
    pageTitle = `Sanibroyeur Diensten in Gemeente ${locationInfo.gemeenteNaam}`;
  } else if (locationInfo.provincieNaam) {
    pageTitle = `Sanibroyeur Diensten in Provincie ${locationInfo.provincieNaam}`;
  }

  return (
    <main className="container mx-auto py-8 px-4">
      {/* Broodkruimelpad */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/werkgebieden" className="hover:text-primary">Werkgebieden</Link>
            {params.slug.length > 0 && <span className="mx-2">/</span>}
          </li>
          {locationInfo.provincieNaam && (
            <li className="flex items-center">
              <Link href={`/werkgebieden/${params.slug[0]}`} className="hover:text-primary">{locationInfo.provincieNaam}</Link>
              {params.slug.length > 1 && <span className="mx-2">/</span>}
            </li>
          )}
          {locationInfo.gemeenteNaam && params.slug.length > 1 && (
            <li className="flex items-center">
              <Link href={`/werkgebieden/${params.slug[0]}/${params.slug[1]}`} className="hover:text-primary">{locationInfo.gemeenteNaam}</Link>
              {params.slug.length > 2 && <span className="mx-2">/</span>}
            </li>
          )}
          {locationInfo.plaatsNaam && params.slug.length > 2 && (
            <li className="flex items-center text-foreground">
              {locationInfo.plaatsNaam}
            </li>
          )}
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{pageTitle}</h1>
      
      {/* Hier implementeert u de content van uw locatie_pagina_template_draft.md */}
      {/* Voorbeeld voor plaats-specifieke content */}
      {locationInfo.plaatsNaam && (
        <section>
          <p className="text-lg mb-4">
            Sanibroyeur problemen in {locationInfo.plaatsNaam}? {siteConfig.name} is uw lokale expert! 
            Wij bieden snelle installatie, vakkundige reparatie en betrouwbaar onderhoud voor alle Sanibroyeur systemen 
            in {locationInfo.plaatsNaam} en de regio {locationInfo.gemeenteNaam}. Direct hulp nodig? Bel ons nu voor service in {locationInfo.plaatsNaam}!
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Veelvoorkomende problemen in {locationInfo.plaatsNaam}</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Sanibroyeur verstopt in {locationInfo.plaatsNaam}</li>
            <li>Sanibroyeur maakt lawaai in {locationInfo.plaatsNaam}</li>
            {/* ... meer problemen ... */}
          </ul>
          <p>Herkent u een van deze Sanibroyeur problemen in uw woning of bedrijf in {locationInfo.plaatsNaam}? Wacht niet langer! Neem direct contact op met {siteConfig.name}, uw specialist in {locationInfo.gemeenteNaam}, voor een snelle en vakkundige oplossing in {locationInfo.plaatsNaam}!</p>
        </section>
      )}
      {/* Voeg vergelijkbare secties toe voor gemeente- en provinciepagina's als er geen dieper niveau is */}

      {/* ... Implementeer de rest van uw template hier, dynamisch ingevuld met locationInfo ... */}
      
      <div className="mt-12 text-center">
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-3 text-lg">
          Neem Contact Op voor Service in {locationInfo.plaatsNaam || locationInfo.gemeenteNaam || locationInfo.provincieNaam}
        </Link>
      </div>
    </main>
  );
}
