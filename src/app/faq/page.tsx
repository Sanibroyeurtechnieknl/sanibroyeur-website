import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: `Veelgestelde Vragen (FAQ) - ${siteConfig.name}`,
  description: `Vind antwoorden op veelgestelde vragen over Sanibroyeurs, installatie, onderhoud, reparatie en onze diensten bij ${siteConfig.name}.`,
  keywords: ["FAQ Sanibroyeur", "veelgestelde vragen Sanibroyeur", "Sanibroyeur problemen", "Sanibroyeur installatie", "Sanibroyeur onderhoud", siteConfig.name],
  openGraph: {
    title: `Veelgestelde Vragen over Sanibroyeurs | ${siteConfig.name}`,
    description: "Antwoorden op de meest gestelde vragen over Sanibroyeur systemen en onze diensten.",
    url: `${siteConfig.url}/faq`,
    images: [
      {
        url: siteConfig.ogImage, // Consider a specific OG image for FAQ page
        width: 1200,
        height: 630,
        alt: `FAQ - ${siteConfig.name}`,
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const faqData = [
  {
    question: "Wat is een Sanibroyeur precies?",
    answer: "Een Sanibroyeur is een vermaler en pomp die het mogelijk maakt om een toilet, wastafel, douche of zelfs een complete keuken te installeren op plaatsen waar geen directe toegang is tot de standaard riolering of waar de afvoer te klein is. Het apparaat vermaalt afvalwater en fecaliën tot een fijne pulp en pompt dit vervolgens via een smalle leiding (meestal 22mm, 28mm of 32mm) naar de dichtstbijzijnde afvoerbuis of het riool."
  },
  {
    question: "Waar kan ik een Sanibroyeur installeren?",
    answer: "Sanibroyeurs zijn extreem flexibel. Populaire locaties zijn: Zolders (extra badkamer), Kelders (hobbyruimte met toilet), Aanbouwen of tuinhuizen, Onder trappen, In garages, Als tijdelijke oplossing tijdens verbouwingen, In commerciële ruimtes waar extra sanitair nodig is."
  },
  {
    question: "Welke soorten Sanibroyeurs zijn er?",
    answer: "Er zijn diverse modellen, afhankelijk van de toepassing: Toiletvermalers (specifiek voor één toilet), Compacte units (toilet en vermaler in één), Units voor meerdere aansluitingen (kunnen een toilet, wastafel, douche en/of bidet aan), Keukenmodellen (Sanivite, Saniaccess Pump, geschikt voor heet water en vet), Condenswaterpompen (Sanicondens, voor CV-ketels en airco)."
  },
  {
    question: "Wat mag ik wel en niet doorspoelen in een Sanibroyeur toilet?",
    answer: "Wel: Menselijke ontlasting en normaal toiletpapier (gebruik met mate). Niet: Vochtige doekjes (ook geen \"doorspoelbare\" varianten), tampons, maandverband, condooms, wattenstaafjes, etensresten, vet, olie, chemicaliën, of andere harde/onoplosbare materialen. Deze kunnen de vermaler beschadigen of verstoppingen veroorzaken."
  },
  {
    question: "Hoeveel lawaai maakt een Sanibroyeur?",
    answer: "Moderne Sanibroyeurs zijn ontworpen om relatief stil te zijn (ca. 40-55 dB), vergelijkbaar met een moderne vaatwasser. Correcte installatie met trillingsdemping is belangrijk om geluidsoverlast te minimaliseren."
  },
  {
    question: "Hoe vaak heeft een Sanibroyeur onderhoud nodig?",
    answer: "Wij adviseren minimaal één keer per jaar preventief onderhoud. Regelmatig ontkalken (elke 3-6 maanden) met een Sanibroyeur-specifieke ontkalker wordt ook sterk aanbevolen."
  },
  {
    question: "Wat moet ik doen als mijn Sanibroyeur verstopt is?",
    answer: "Probeer niet zelf de verstopping te forceren met chemische ontstoppers. Schakel de stroomtoevoer uit en neem direct contact op met Sanibroyeur Techniek Nederland."
  },
  {
    question: "Mijn Sanibroyeur blijft draaien, wat is er aan de hand?",
    answer: "Dit kan duiden op een vastzittende vlotter, een defecte terugslagklep, of een lekkende kraan/toilet. Schakel de stroom uit en neem contact op met een specialist."
  },
  {
    question: "Kan ik zelf een Sanibroyeur installeren?",
    answer: "Wij raden sterk aan om de installatie over te laten aan een ervaren monteur. Onjuiste installatie kan problemen veroorzaken en de garantie ongeldig maken."
  },
  {
    question: "Wat zijn de kosten voor installatie, reparatie of onderhoud?",
    answer: "De kosten variëren. Bij Sanibroyeur Techniek Nederland ontvangt u altijd een duidelijke prijsopgave vooraf. Neem contact op voor een vrijblijvende offerte."
  },
  {
    question: "Bieden jullie garantie op jullie werkzaamheden?",
    answer: "Ja, wij bieden garantie op zowel geïnstalleerde Sanibroyeurs (fabrieksgarantie) als op onze uitgevoerde werkzaamheden."
  },
  {
    question: "Werken jullie in heel Nederland?",
    answer: "Ja, Sanibroyeur Techniek Nederland biedt landelijke dekking."
  },
  {
    question: "Hoe snel kunnen jullie ter plaatse zijn bij een spoedgeval?",
    answer: "Wij streven ernaar bij spoedgevallen zo snel mogelijk ter plaatse te zijn, vaak nog dezelfde dag. Neem direct telefonisch contact op."
  },
  {
    question: "Wat is het verschil tussen een Sanibroyeur en een gewone WC?",
    answer: "Een gewone WC gebruikt zwaartekracht en een brede afvoer. Een Sanibroyeur heeft een vermaler/pomp en kan afvalwater via een smalle leiding afvoeren, ook omhoog."
  },
  {
    question: "Kan een Sanibroyeur ook gebruikt worden voor een wasmachine of vaatwasser?",
    answer: "Ja, er zijn speciale modellen (zoals Sanivite) die geschikt zijn voor het grijze water van wasmachines, vaatwassers, etc. Een standaard toiletvermaler is hier niet geschikt voor."
  }
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Veelgestelde Vragen (FAQ)
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Antwoorden op uw vragen over Sanibroyeurs en onze diensten. Staat uw vraag er niet bij? Neem gerust contact op!
        </p>
      </header>

      <section className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b dark:border-gray-700">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center mt-16 py-10 bg-gray-100 dark:bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Nog Steeds Vragen?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Ons deskundige team staat klaar om al uw overige vragen te beantwoorden en u te voorzien van advies op maat.
        </p>
        <Button size="xl" asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 text-lg">
          <Link href="/contact">Neem Contact Met Ons Op</Link>
        </Button>
      </section>
    </div>
  );
}

