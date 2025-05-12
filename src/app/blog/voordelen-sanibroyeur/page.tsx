import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "De Voordelen van een Sanibroyeur: Meer Mogelijkheden in Huis - Blog | " + siteConfig.name,
  description: "Ontdek de vele voordelen van een Sanibroyeur, zoals flexibele plaatsing, kostenbesparing en snelle installatie. Meer mogelijkheden voor uw woning.",
  keywords: ["Sanibroyeur voordelen", "flexibele sanitaire oplossing", "kostenbesparing Sanibroyeur", "snelle installatie toilet", "extra badkamer plaatsen", "blog", siteConfig.name],
  openGraph: {
    title: "De Voordelen van een Sanibroyeur: Meer Mogelijkheden in Huis",
    description: "Ontdek hoe een Sanibroyeur u meer flexibiliteit en mogelijkheden in huis kan bieden.",
    url: `${siteConfig.url}/blog/voordelen-sanibroyeur`,
    images: [
      {
        url: `${siteConfig.url}/images_new/homepage_hero_modern_bathroom.jpeg`, // Updated to existing image
        width: 1200,
        height: 630,
        alt: "Voordelen van een Sanibroyeur",
      },
    ],
    type: "article",
    publishedTime: new Date().toISOString(), // Should be set to the actual publication date
    authors: [siteConfig.name],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/voordelen-sanibroyeur`,
  },
};

export default function BlogPostVoordelenSanibroyeur() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            De Voordelen van een Sanibroyeur: Meer Mogelijkheden in Huis
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gepubliceerd op: {new Date().toLocaleDateString("nl-NL", { year: 'numeric', month: 'long', day: 'numeric' })} door {siteConfig.name}
          </p>
        </header>

        <Image 
            src="/images_new/homepage_hero_modern_bathroom.jpeg" // Updated to existing image
            alt="Moderne badkamer met Sanibroyeur mogelijkheden"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover shadow-md"
        />

        <p className="lead text-lg mb-6">
          Steeds meer mensen ontdekken de flexibiliteit en het gemak van een Sanibroyeur. Dit ingenieuze systeem maakt het mogelijk om een toilet, badkamer, of zelfs een complete keuken te installeren op plekken waar dit voorheen ondenkbaar was, zonder ingrijpende en kostbare verbouwingen aan het bestaande leidingwerk. Laten we de belangrijkste voordelen van een Sanibroyeur eens nader bekijken.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Flexibiliteit in Plaatsing</h2>
          <p>
            Het grootste voordeel is ongetwijfeld de vrijheid die een Sanibroyeur biedt bij het kiezen van een locatie. Wilt u een extra toilet op zolder, in de kelder, in een aanbouw, of in een tuinhuis? Met een Sanibroyeur is dit vaak eenvoudig te realiseren. Omdat het afvalwater wordt vermalen en via een smalle pijp (vaak slechts 22-32mm) kan worden afgevoerd, bent u niet gebonden aan de locatie van de bestaande hoofdafvoer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kostenbesparend</h2>
          <p>
            Vergeleken met het aanleggen van traditioneel leidingwerk, kan de installatie van een Sanibroyeur aanzienlijk goedkoper zijn. Het breken van vloeren en muren om dikke afvoerbuizen te plaatsen is niet nodig. Dit scheelt niet alleen in materiaal- en arbeidskosten, maar ook in de duur van de installatie en de overlast.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Snelle en Eenvoudige Installatie</h2>
          <p>
            De installatie van een Sanibroyeur is over het algemeen sneller en minder ingrijpend dan traditionele methoden. Een ervaren installateur kan een Sanibroyeur vaak binnen enkele uren operationeel hebben. Dit betekent minimale verstoring van uw dagelijkse routine.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ideaal voor Renovatie en Herbestemming</h2>
          <p>
            Bij renovatieprojecten of het herbestemmen van ruimtes (bijvoorbeeld een kantoor aan huis ombouwen tot gastenverblijf met eigen sanitair) biedt de Sanibroyeur een uitkomst. Het stelt u in staat om functionaliteit toe te voegen zonder de structuur van het gebouw drastisch te hoeven aanpassen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Verschillende Modellen voor Diverse Toepassingen</h2>
          <p>
            Sanibroyeur-systemen zijn er in vele soorten en maten. Er zijn compacte modellen die direct achter een toilet passen, krachtigere units die meerdere sanitaire toestellen (toilet, wastafel, douche) aankunnen, en zelfs speciale modellen voor keukens die heet water en vet kunnen verwerken. Er is dus altijd een Sanibroyeur die past bij uw specifieke behoeften.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Verhoogt Woningwaarde</h2>
          <p>
            Het toevoegen van extra sanitaire voorzieningen, zoals een extra badkamer of toilet, kan de waarde van uw woning verhogen. Een Sanibroyeur maakt dit een toegankelijke en relatief betaalbare manier om uw woning te verbeteren.
          </p>
        </section>

        <section className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Overwegingen</h3>
          <p className="mb-4">
            Hoewel de voordelen talrijk zijn, is het belangrijk om te onthouden dat een Sanibroyeur correct geïnstalleerd en onderhouden moet worden. Het is geen alleskunner; het doorspoelen van ongeschikte materialen kan tot problemen leiden. Kies daarom altijd voor een kwaliteitsmerk en laat de installatie en het onderhoud over aan een gespecialiseerd bedrijf zoals {siteConfig.name}.
          </p>
        </section>

        <section className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Interesse?</h3>
          <p className="mb-4">
            Bent u geïnteresseerd in de mogelijkheden van een Sanibroyeur voor uw woning of bedrijf? Neem contact op met {siteConfig.name} voor deskundig advies en een vrijblijvende offerte.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">Vraag Advies Aan</Link>
          </Button>
        </section>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">Terug naar Blog Overzicht</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}

