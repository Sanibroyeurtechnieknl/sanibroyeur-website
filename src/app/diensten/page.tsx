import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle, Phone, Wrench, ShieldCheck, LifeBuoy } from "lucide-react";
import ProminentCallButton from "@/components/ProminentCallButton";

export const metadata: Metadata = {
  title: `Sanibroyeur Diensten: Installatie, Reparatie & Onderhoud - ${siteConfig.name}`,
  description: `Professionele Sanibroyeur diensten in heel Nederland. ${siteConfig.name} biedt vakkundige installatie, snelle reparatie en preventief onderhoud voor alle Sanibroyeur systemen.`,
  keywords: [
    "Sanibroyeur diensten",
    "Sanibroyeur installatie",
    "Sanibroyeur reparatie",
    "Sanibroyeur onderhoud",
    "Sanibroyeur specialist",
    "Sanibroyeur service",
    siteConfig.name,
  ],
  alternates: {
    canonical: `${siteConfig.url}/diensten`,
  },
  openGraph: {
    title: `Uitgebreide Sanibroyeur Diensten | ${siteConfig.name}`,
    description: "Van installatie tot reparatie en onderhoud, uw Sanibroyeur is bij ons in goede handen.",
    url: `${siteConfig.url}/diensten`,
    images: [
      {
        url: siteConfig.ogImage, // Consider a specific OG image for services page
        width: 1200,
        height: 630,
        alt: `Sanibroyeur Diensten - ${siteConfig.name}`,
      },
    ],
  },
};

const services = [
  {
    id: "installatie",
    title: "Sanibroyeur Installatie",
    shortDescription: "Vakkundige installatie van alle merken en modellen Sanibroyeurs. Advies op maat en perfecte afwerking.",
    longDescription: [
      "Wilt u een extra toilet, badkamer of keuken realiseren op een plek zonder directe rioolaansluiting? De installatie van een Sanibroyeur biedt de perfecte oplossing. Onze experts adviseren u over het meest geschikte model, rekening houdend met uw wensen en de technische mogelijkheden.",
      "Wij installeren alle bekende merken en modellen, waaronder SFA Sanibroyeur en Grundfos. Onze monteurs zorgen voor een correcte en nette installatie volgens de fabrieksvoorschriften, minimaliseren hak- en breekwerk, en testen het systeem grondig. U ontvangt duidelijke instructies voor gebruik en onderhoud.",
      "Toepassingen zijn eindeloos: zolders, kelders, garages, aanbouwen, tijdelijke voorzieningen, of aanpassingen voor minder validen."
    ],
    icon: <LifeBuoy className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    image: "/images_new/pexels-max-vakhtbovych-6782567.jpg",
    features: [
      "Advies op maat voor uw situatie",
      "Installatie van alle merken en modellen",
      "Minimaal hak- en breekwerk",
      "Grondige test en duidelijke uitleg",
      "Flexibele oplossingen voor elke ruimte"
    ]
  },
  {
    id: "reparatie",
    title: "Sanibroyeur Reparatie",
    shortDescription: "Snelle en effectieve reparatie van alle Sanibroyeur storingen. 24/7 spoedservice beschikbaar.",
    longDescription: [
      "Een defecte Sanibroyeur kan voor veel ongemak zorgen. ${siteConfig.name} biedt snelle en effectieve reparatieservice in heel Nederland. Bij acute problemen zoals verstoppingen, lekkages, of een unit die niet meer werkt, kunt u rekenen op onze spoedservice, vaak nog dezelfde dag.",
      "Onze ervaren monteurs diagnosticeren en verhelpen alle soorten Sanibroyeur problemen: verstoppingen, lekkages, motorproblemen, defecte vlotters, membranen, of terugslagkleppen, overmatig lawaai, en geurproblemen. Wij gebruiken zoveel mogelijk originele vervangingsonderdelen.",
      "U ontvangt altijd vooraf een duidelijke indicatie van de reparatiekosten. Na de reparatie geven wij u advies om toekomstige problemen te voorkomen."
    ],
    icon: <Wrench className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    image: "/images_new/pexels-curtis-adams-3990359.jpg",
    features: [
      "24/7 Spoedservice beschikbaar",
      "Diagnose van alle Sanibroyeur problemen",
      "Gebruik van originele onderdelen",
      "Transparante reparatiekosten",
      "Preventief advies na reparatie"
    ]
  },
  {
    id: "onderhoud",
    title: "Sanibroyeur Onderhoud",
    shortDescription: "Preventief onderhoud voor een langere levensduur en optimale werking van uw Sanibroyeur.",
    longDescription: [
      "Regelmatig en vakkundig onderhoud is essentieel voor een lange levensduur en probleemloze werking van uw Sanibroyeur. Wij bieden onderhoudscontracten en losse onderhoudsbeurten aan om onverwachte storingen en dure reparaties te voorkomen.",
      "Een onderhoudsbeurt omvat grondige reiniging, professionele ontkalking (kalkaanslag is een grote vijand!), inspectie van alle cruciale onderdelen (motor, vermaler, vlotter, membraan, terugslagklep, afdichtingen), controle van de werking, en advies voor dagelijks gebruik.",
      "De voordelen zijn duidelijk: langere levensduur, minimale kans op storingen, hygiënische werking, behoud van prestaties, en voorkoming van hoge reparatiekosten."
    ],
    icon: <ShieldCheck className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />,
    image: "/images_new/pexels-daria-shevtsova-704569.jpg",
    features: [
      "Verlengt levensduur van uw Sanibroyeur",
      "Minimaliseert kans op storingen",
      "Grondige reiniging en ontkalking",
      "Inspectie van alle vitale onderdelen",
      "Zorgt voor hygiënische en geurvrije werking"
    ]
  }
];

export default function DienstenPage() {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <header className="bg-blue-600 dark:bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Sanibroyeur Diensten</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Deskundige installatie, snelle reparaties en preventief onderhoud voor al uw Sanibroyeur systemen. {siteConfig.name} staat voor u klaar in heel Nederland.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`mb-16 md:mb-24 scroll-mt-20 ${index % 2 === 1 ? "bg-gray-100 dark:bg-slate-800/50" : "bg-white dark:bg-slate-800"} p-6 md:p-10 rounded-xl shadow-xl`}>
            <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}>
              <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-md">
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white ml-3">{service.title}</h2>
                </div>
                {service.longDescription.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {paragraph.replace(/\$\{siteConfig.name\}/g, siteConfig.name)}
                  </p>
                ))}
                <ul className="space-y-2 my-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700 dark:text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white mt-4 w-full sm:w-auto" asChild>
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}#offerte`}>
                    Vraag Offerte Aan voor {service.title}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ))}

        <section className="mt-16 md:mt-24 text-center py-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 mb-6">Waarom Kiezen Voor {siteConfig.name}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 text-left">
            {[ "Landelijke Dekking", "Gecertificeerde Specialisten", "Snelle Service (ook spoed)", "Expertise in Alle Merken", "Transparante Prijzen", "Garantie op Werkzaamheden"].map(reason => (
                <div key={reason} className="flex items-center p-3 bg-white dark:bg-slate-700 rounded-md shadow">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{reason}</span>
                </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Voor al uw Sanibroyeur installaties, reparaties en onderhoud, neem vandaag nog contact op. Wij staan klaar om u te helpen met een snelle, betrouwbare en professionele service.
          </p>
          <ProminentCallButton phoneNumber={siteConfig.contactInfo.telefoon || "0612345678"} buttonText={`Bel Ons Nu: ${siteConfig.contactInfo.telefoon}`} />
          <Button size="xl" variant="outline" className="mt-4" asChild>
             <Link href="/contact">Of Stuur Ons een Bericht</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}

