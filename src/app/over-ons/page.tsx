import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Over Ons - ${siteConfig.name}`,
  description: `Leer meer over ${siteConfig.name}, uw toegewijde partner voor alle Sanibroyeur-gerelateerde behoeften in heel Nederland. Ontdek onze missie, waarden en klantgerichte aanpak.`,
  keywords: ["Over Ons", siteConfig.name, "Sanibroyeur specialist", "missie", "waarden", "klantgerichtheid"],
  openGraph: {
    title: `Over Ons - ${siteConfig.name}`,
    description: `Leer meer over ${siteConfig.name}, uw toegewijde partner voor alle Sanibroyeur-gerelateerde behoeften in heel Nederland.`,
    url: `${siteConfig.url}/over-ons`,
    images: [
      {
        url: siteConfig.ogImage, // Consider a specific OG image for About Us page
        width: 1200,
        height: 630,
        alt: `Over ${siteConfig.name}`,
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/over-ons`,
  },
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Over {siteConfig.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Uw toegewijde partner voor alle Sanibroyeur-gerelateerde behoeften in heel Nederland.
        </p>
      </header>

      <section className="mb-16 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Onze Missie</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Bij {siteConfig.name} is onze missie eenvoudig: het leveren van snelle, betrouwbare en vakkundige Sanibroyeur-oplossingen, zodat u zich geen zorgen hoeft te maken over de functionaliteit van uw sanitaire voorzieningen. Wij streven ernaar om de nummer één keuze te zijn voor Sanibroyeur service in Nederland door consequent superieure dienstverlening en klanttevredenheid te bieden.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-8 text-center">Onze Kernwaarden</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "Klantgerichtheid",
            description: "Uw tevredenheid staat centraal. We luisteren, bieden oplossingen op maat en zorgen voor transparante communicatie."
          }, {
            title: "Vakmanschap",
            description: "Ons team van ervaren, gecertificeerde monteurs is gespecialiseerd in alle Sanibroyeur modellen en de nieuwste technieken."
          }, {
            title: "Betrouwbaarheid",
            description: "We komen afspraken na, werken efficiënt en zijn 24/7 beschikbaar voor spoedgevallen in onze werkgebieden."
          }, {
            title: "Snelheid",
            description: "Dankzij onze landelijke dekking en efficiënte planning zijn we snel ter plaatse om problemen op te lossen."
          }, {
            title: "Transparantie",
            description: "U ontvangt altijd een heldere prijsopgave vooraf, zonder verborgen kosten of verrassingen achteraf."
          }].map((value, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-blue-600 dark:bg-blue-700 text-white p-10 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Waarom Kiezen Voor {siteConfig.name}?</h2>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Landelijke Dekking</li>
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Expertise in Alle Modellen</li>
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Spoedservice Beschikbaar</li>
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Garantie op Werkzaamheden</li>
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Preventief Onderhoud</li>
          <li className="flex items-start"><span className="text-green-400 dark:text-green-300 mr-2">✔</span> Duidelijke, Eerlijke Prijzen</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Neem Vandaag Nog Contact Op</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Klaar om de expertise van {siteConfig.name} zelf te ervaren? Of u nu een dringende reparatie nodig heeft, een nieuwe installatie plant, of advies zoekt, ons team staat voor u klaar.
        </p>
        <Button size="xl" asChild className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 text-lg">
          <Link href="/contact">Contacteer Ons Nu</Link>
        </Button>
      </section>
    </div>
  );
}

