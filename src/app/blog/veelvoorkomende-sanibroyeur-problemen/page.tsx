import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "5 Veelvoorkomende Sanibroyeur Problemen en Hoe Ze Te Voorkomen - Blog | " + siteConfig.name,
  description: "Leer over de 5 meest voorkomende Sanibroyeur problemen zoals verstoppingen en lawaai, en ontdek hoe u ze kunt voorkomen voor een langere levensduur van uw apparaat.",
  keywords: ["Sanibroyeur problemen", "verstopping Sanibroyeur", "Sanibroyeur lawaai", "Sanibroyeur lekt", "Sanibroyeur motor start niet", "Sanibroyeur geur", "Sanibroyeur voorkomen", "blog", siteConfig.name],
  openGraph: {
    title: "5 Veelvoorkomende Sanibroyeur Problemen en Preventie",
    description: "Ontdek de top 5 Sanibroyeur problemen en hoe u ze effectief kunt voorkomen.",
    url: `${siteConfig.url}/blog/veelvoorkomende-sanibroyeur-problemen`,
    images: [
      {
        url: `${siteConfig.url}/images_new/pexels-curtis-adams-3990359.jpg`, // Updated to existing image
        width: 1200,
        height: 630,
        alt: "Veelvoorkomende Sanibroyeur Problemen",
      },
    ],
    type: "article",
    publishedTime: new Date().toISOString(), 
    authors: [siteConfig.name],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/veelvoorkomende-sanibroyeur-problemen`,
  },
};

export default function BlogPostVeelvoorkomendeProblemen() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            5 Veelvoorkomende Sanibroyeur Problemen en Hoe Ze Te Voorkomen
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gepubliceerd op: {new Date().toLocaleDateString("nl-NL", { year: 'numeric', month: 'long', day: 'numeric' })} door {siteConfig.name}
          </p>
        </header>

        <Image 
            src="/images_new/pexels-curtis-adams-3990359.jpg" // Updated to existing image
            alt="Sanibroyeur problemen illustratie"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover shadow-md"
        />

        <p className="lead text-lg mb-6">
          Een Sanibroyeur is een fantastische oplossing voor het creëren van extra sanitaire voorzieningen op plekken waar traditioneel leidingwerk lastig is. Echter, net als elk ander apparaat, kan een Sanibroyeur problemen ondervinden. In deze blogpost bespreken we 5 veelvoorkomende problemen en geven we tips om ze te voorkomen, zodat uw Sanibroyeur jarenlang probleemloos meegaat.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verstoppingen: De Nummer Één Vijand</h2>
          <p>
            <strong>Oorzaak:</strong> Het doorspoelen van ongeschikte materialen zoals vochtige doekjes, tampons, maandverband, te veel toiletpapier, of harde objecten.
          </p>
          <p>
            <strong>Preventie:</strong> Gebruik uw Sanibroyeur uitsluitend voor het afvoeren van menselijke ontlasting en toiletpapier (met mate). Plaats een prullenbakje naast het toilet voor ander afval. Regelmatig gebruik van een Sanibroyeur-specifieke ontkalker kan ook helpen kleine ophopingen te voorkomen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Lawaaierige Werking: Irritante Geluiden</h2>
          <p>
            <strong>Oorzaak:</strong> Trillingen door onjuiste installatie, een vreemd object in de vermaler, of slijtage van de motor of lagers.
          </p>
          <p>
            <strong>Preventie:</strong> Zorg voor een correcte installatie met trillingsdempende materialen. Controleer of er geen losse voorwerpen in de toiletpot zijn gevallen. Bij aanhoudend lawaai, laat een professional de motor en lagers inspecteren. Regelmatig onderhoud kan slijtage vroegtijdig signaleren.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Lekkages: Water Waar Het Niet Hoort</h2>
          <p>
            <strong>Oorzaak:</strong> Versleten afdichtingen, beschadigde leidingen, een overvolle opvangbak, of een scheur in de behuizing.
          </p>
          <p>
            <strong>Preventie:</strong> Controleer regelmatig de aansluitingen en leidingen op tekenen van slijtage of schade. Zorg ervoor dat de Sanibroyeur niet overbelast wordt. Laat bij de minste tekenen van lekkage direct een specialist kijken om grotere schade te voorkomen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Motor Start Niet of Slaat Af: Stroom- of Motorproblemen</h2>
          <p>
            <strong>Oorzaak:</strong> Problemen met de stroomtoevoer (zekering, stopcontact), een oververhitte motor, een vastgelopen vermaler, of een defecte condensator of motor.
          </p>
          <p>
            <strong>Preventie:</strong> Controleer de stroomtoevoer. Zorg ervoor dat de Sanibroyeur niet continu draait (wat kan wijzen op een ander probleem zoals een terugslagklep). Bij een vastgelopen vermaler, probeer deze niet zelf te forceren. Schakel een professional in. Regelmatig onderhoud kan oververhitting helpen voorkomen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Onaangename Geuren: Een Stinkend Probleem</h2>
          <p>
            <strong>Oorzaak:</strong> Ophoping van afvalresten in de unit of leidingen, een defecte ontluchting, of een probleem met de terugslagklep waardoor afvalwater terugstroomt.
          </p>
          <p>
            <strong>Preventie:</strong> Gebruik regelmatig een Sanibroyeur-reiniger om afvalresten te verwijderen. Zorg voor een correct werkende ontluchting. Laat de terugslagklep controleren tijdens periodiek onderhoud.
          </p>
        </section>

        <section className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Conclusie</h3>
          <p className="mb-4">
            Door uw Sanibroyeur correct te gebruiken en regelmatig te (laten) onderhouden, kunt u de meeste van deze problemen voorkomen. Mocht u toch een probleem ervaren, neem dan contact op met {siteConfig.name}. Onze experts staan klaar om u snel en vakkundig te helpen.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">Neem Contact Op</Link>
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

