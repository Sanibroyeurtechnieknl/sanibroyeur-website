import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sanibroyeur Onderhoud: Essentiële Tips voor een Lange Levensduur - Blog | " + siteConfig.name,
  description: "Leer hoe u met eenvoudig en regelmatig onderhoud de levensduur van uw Sanibroyeur kunt verlengen en veelvoorkomende problemen kunt voorkomen.",
  keywords: ["Sanibroyeur onderhoud", "Sanibroyeur tips", "levensduur Sanibroyeur", "onderhoudsplan Sanibroyeur", "Sanibroyeur schoonmaken", "blog", siteConfig.name],
  openGraph: {
    title: "Sanibroyeur Onderhoud: Essentiële Tips voor een Lange Levensduur",
    description: "Maximaliseer de levensduur van uw Sanibroyeur met deze essentiële onderhoudstips.",
    url: `${siteConfig.url}/blog/sanibroyeur-onderhoud-tips`,
    images: [
      {
        url: `${siteConfig.url}/images_new/pexels-max-vakhtbovych-6782567.jpg`, // Updated to existing image
        width: 1200,
        height: 630,
        alt: "Sanibroyeur Onderhoud Tips",
      },
    ],
    type: "article",
    publishedTime: new Date().toISOString(), // Should be set to the actual publication date
    authors: [siteConfig.name],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/sanibroyeur-onderhoud-tips`,
  },
};

export default function BlogPostSanibroyeurOnderhoud() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Sanibroyeur Onderhoud: Essentiële Tips voor een Lange Levensduur
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">            Gepubliceerd op: {new Date().toLocaleDateString("nl-NL", { year: 'numeric', month: 'long', day: 'numeric' })} door {siteConfig.name}
          </p>
        </header>

        <Image 
            src="/images_new/pexels-max-vakhtbovych-6782567.jpg" // Using existing image from blog listing
            alt="Sanibroyeur onderhoud en tips"
            width={800}
            height={450}
            className="rounded-lg mb-8 object-cover shadow-md"
        />

        <p className="lead text-lg mb-6">
          Een Sanibroyeur is een waardevolle toevoeging aan elk huis, die flexibiliteit biedt voor sanitaire installaties. Om ervoor te zorgen dat uw Sanibroyeur optimaal blijft functioneren en een lange levensduur heeft, is regelmatig en correct onderhoud essentieel. Met een paar eenvoudige stappen kunt u veelvoorkomende problemen voorkomen en de efficiëntie van uw systeem behouden.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Regelmatig Reinigen en Ontkalken</h2>
          <p>
            Net als een traditioneel toilet, heeft een Sanibroyeur baat bij regelmatige reiniging. Gebruik echter geen agressieve chemische reinigingsmiddelen die de interne componenten kunnen beschadigen. Kies voor een speciale Sanibroyeur reiniger en ontkalker. Deze producten zijn ontworpen om kalkaanslag en afvalresten effectief te verwijderen zonder de rubberen onderdelen en de motor aan te tasten. Een maandelijkse of tweemaandelijkse ontkalking, afhankelijk van de waterhardheid in uw regio, wordt sterk aanbevolen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Let op Wat U Doorspoelt</h2>
          <p>
            Dit is misschien wel de belangrijkste tip. Een Sanibroyeur is ontworpen om menselijke ontlasting en toiletpapier te verwerken. Spoel nooit andere materialen door, zoals:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Vochtige doekjes (ook die als doorspoelbaar worden bestempeld)</li>
            <li>Tampons, maandverband of andere hygiëneproducten</li>
            <li>Wattenstaafjes, tandenstokers of flosdraad</li>
            <li>Olie, vet of etensresten</li>
            <li>Harde objecten of chemicaliën</li>
          </ul>
          <p>Het doorspoelen van deze items kan leiden tot ernstige verstoppingen en schade aan de vermaler en motor.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Controleer op Lekkages</h2>
          <p>
            Inspecteer regelmatig de aansluitingen van en naar de Sanibroyeur op tekenen van lekkage. Kleine lekkages kunnen, indien onbehandeld, leiden tot grotere problemen en waterschade. Let op vochtplekken rond de unit of bij de leidingen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Luister naar Uw Sanibroyeur</h2>
          <p>
            Let op ongebruikelijke geluiden tijdens het functioneren van de Sanibroyeur. Een constant zoemend geluid, ratelende geluiden of een motor die moeite lijkt te hebben, kunnen wijzen op een beginnend probleem, zoals een vreemd object in de vermaler of slijtage van onderdelen. Schakel bij twijfel een professional in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Periodiek Professioneel Onderhoud</h2>
          <p>
            Overweeg om periodiek (bijvoorbeeld eens per 1-2 jaar) professioneel onderhoud te laten uitvoeren. Een specialist kan de unit grondig inspecteren, reinigen, en eventuele slijtageonderdelen preventief vervangen. Dit kan de levensduur van uw Sanibroyeur aanzienlijk verlengen en onverwachte storingen voorkomen.
          </p>
        </section>

        <section className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Uw Sanibroyeur in Topconditie</h3>
          <p className="mb-4">
            Door deze eenvoudige onderhoudstips te volgen, zorgt u ervoor dat uw Sanibroyeur betrouwbaar blijft werken. Goed onderhoud is de sleutel tot een lange en probleemloze levensduur. Heeft u vragen over het onderhoud van uw Sanibroyeur of vermoedt u een probleem? Neem dan gerust contact op met {siteConfig.name} voor deskundig advies of service.
          </p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/contact">Neem Contact Op voor Onderhoudsadvies</Link>
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

