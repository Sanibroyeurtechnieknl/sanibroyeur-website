import ProminentCallButton from "@/components/ProminentCallButton";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig"; // Corrected import path

export const metadata: Metadata = {
  title: `Alle Werkgebieden - ${siteConfig.name}`,
  description: `Overzicht van alle provincies en regio\'s waar ${siteConfig.name} Sanibroyeur installatie, reparatie en onderhoudsdiensten levert. Vind uw lokale specialist.`,
  keywords: [
    "Sanibroyeur werkgebieden",
    "Sanibroyeur service per provincie",
    "lokale Sanibroyeur specialist",
    "Sanibroyeur Nederland",
  ].concat(siteConfig.werkgebieden && Array.isArray(siteConfig.werkgebieden) ? siteConfig.werkgebieden.map(p => `Sanibroyeur ${p.name}`) : []),
  alternates: {
    canonical: `${siteConfig.url}/werkgebieden`,
  },
};

export default function WerkgebiedenOverzichtPage() {
  console.log("WerkgebiedenPage: siteConfig loaded:", siteConfig);
  console.log("WerkgebiedenPage: siteConfig.werkgebieden:", siteConfig.werkgebieden);
  console.log("WerkgebiedenPage: siteConfig.werkgebieden type:", typeof siteConfig.werkgebieden);
  console.log("WerkgebiedenPage: siteConfig.werkgebieden length:", siteConfig.werkgebieden ? siteConfig.werkgebieden.length : 'undefined');

  return (
    <main className="flex-1 bg-background">
      <ProminentCallButton phoneNumber="0852033172" />
      <section className="bg-secondary text-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Onze Werkgebieden in Nederland
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {siteConfig.name} is uw deskundige partner voor alle Sanibroyeur diensten in een groot deel van Nederland. Wij streven ernaar om onze snelle en vakkundige service zo toegankelijk mogelijk te maken. Hieronder vindt u een overzicht van de provincies waar wij voornamelijk actief zijn. Klik op een provincie om de specifieke plaatsen te bekijken waar wij u van dienst kunnen zijn.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {(siteConfig.werkgebieden && siteConfig.werkgebieden.length > 0) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.werkgebieden.map((provincie) => (
                <div key={provincie.slug} className="bg-card text-card-foreground rounded-lg border shadow-lg overflow-hidden flex flex-col">
                  <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                      {provincie.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Wij bieden Sanibroyeur installatie, reparatie en onderhoud in diverse plaatsen binnen {provincie.name}. Bekijk de mogelijkheden in uw regio.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/50 border-t">
                    <Link href={`/werkgebieden/${provincie.slug}`} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                        Bekijk plaatsen in {provincie.name}
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Er zijn momenteel geen werkgebieden gedefinieerd.</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-secondary text-foreground px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Staat uw regio er niet bij?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Neem gerust contact met ons op om de mogelijkheden te bespreken. Wij kijken graag of {siteConfig.name} u toch van dienst kan zijn met uw Sanibroyeur uitdaging.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Neem Contact Op
          </Link>
        </div>
      </section>
    </main>
  );
}

