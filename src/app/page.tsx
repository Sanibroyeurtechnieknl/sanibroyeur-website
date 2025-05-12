import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle, Phone, MessageSquare, MapPin, Star } from "lucide-react";
import ProminentCallButton from "@/components/ProminentCallButton";

// Data arrays - moved outside of metadata and component for clarity
const blogPosts = [
  {
    title: "5 Tips om uw Sanibroyeur in Topconditie te Houden",
    slug: "/blog/sanibroyeur-onderhoud-tips",
    excerpt: "Leer hoe u met eenvoudig onderhoud de levensduur van uw Sanibroyeur kunt verlengen en problemen kunt voorkomen."
  },
  {
    title: "Wanneer een Sanibroyeur Vervangen? Tekenen en Advies",
    slug: "/blog/wanneer-sanibroyeur-vervangen",
    excerpt: "Is uw Sanibroyeur aan vervanging toe? Herken de signalen en krijg deskundig advies voor de juiste keuze."
  },
  {
    title: "De Voordelen van Professioneel Sanibroyeur Onderhoud",
    slug: "/blog/voordelen-professioneel-onderhoud",
    excerpt: "Ontdek waarom regelmatig professioneel onderhoud essentieel is voor de optimale werking en levensduur van uw Sanibroyeur."
  }
];

const reviews = [
  {
    quote: "Super snelle service en het probleem was direct opgelost! Top!",
    author: "Anja, Amsterdam"
  },
  {
    quote: "Vriendelijke monteur en duidelijke uitleg. Zeer tevreden.",
    author: "Peter, Utrecht"
  },
  {
    quote: "Eindelijk een betrouwbaar bedrijf voor mijn Sanibroyeur.",
    author: "Familie de Vries, Rotterdam"
  }
];

const commonProblems = [
  { name: "Sanibroyeur verstopt", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Sanibroyeur maakt lawaai", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Sanibroyeur lekt water", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Sanibroyeur start niet", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Sanibroyeur stinkt", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Water loopt niet weg", icon: <MapPin className="h-8 w-8 text-red-500" /> },
  { name: "Motor blijft draaien", icon: <MapPin className="h-8 w-8 text-red-500" /> },
];

const uspData = [
    {
        title: "Snel ter Plaatse",
        description: "Spoed? Onze monteurs zijn snel ter plaatse in heel Nederland!",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />
    },
    {
        title: "Ervaren & Vakkundige Monteurs",
        description: "Gecertificeerde specialisten met jarenlange ervaring.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />
    },
    {
        title: "Duidelijke & Transparante Prijzen",
        description: "Geen verrassingen, altijd een heldere offerte vooraf.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />
    },
    {
        title: "Garantie op Werkzaamheden",
        description: "Kwaliteit en zekerheid, daar staan wij voor.",
        icon: <CheckCircle className="h-10 w-10 text-green-500" />
    }
];

const servicesOverview = [
  {
    title: "Sanibroyeur Installatie",
    description: "Vakkundige installatie van alle merken en modellen Sanibroyeurs. Advies op maat en perfecte afwerking.",
    image: "/images/service_installation.jpg",
    link: "/diensten#installatie"
  },
  {
    title: "Sanibroyeur Reparatie",
    description: "Snelle en effectieve reparatie van alle Sanibroyeur storingen. 24/7 spoedservice beschikbaar.",
    image: "/images/service_repair.jpg",
    link: "/diensten#reparatie"
  },
  {
    title: "Sanibroyeur Onderhoud",
    description: "Preventief onderhoud voor een langere levensduur en optimale werking van uw Sanibroyeur.",
    image: "/images/service_maintenance.jpg",
    link: "/diensten#onderhoud"
  }
];

export const metadata: Metadata = {
  title: 'Sanibroyeur Service, Reparatie & Installatie | Sanibroyeur Techniek Nederland',
  description: 'Last van een verstopte sanibroyeur of een defect? Sanibroyeur Techniek Nederland biedt snelle, vakkundige service, reparatie en installatie. Neem direct contact op!',
  keywords: ["Sanibroyeur", "Sanibroyeur expert", "Sanibroyeur installatie", "Sanibroyeur reparatie", "Sanibroyeur onderhoud", "WC vermaler", "broyeur toilet", "loodgieter Sanibroyeur", siteConfig.name, "Nederland", "homepage", "service"],
  alternates: {
    canonical: siteConfig.url, // Assuming homepage is the canonical URL for itself
  },
  openGraph: {
    title: 'Sanibroyeur Service, Reparatie & Installatie | Sanibroyeur Techniek Nederland',
    description: "Direct hulp bij sanibroyeur problemen. Sanibroyeur Techniek Nederland: uw specialist voor snelle service, reparatie en installatie.",
    url: siteConfig.url, // URL of the homepage
    images: [
      {
        url: siteConfig.ogImage, // Use the general OG image, or a specific one for homepage if available
        width: 1200,
        height: 630,
        alt: 'Sanibroyeur Techniek Nederland - Homepage',
      },
    ],
  },
}; // CORRECTED: Properly closed metadata object and removed the second one.

export default function HomePage() {
  return (
    <main className="flex-1 bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Uw Nr. 1 Sanibroyeur Expert in Nederland!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Snelle installatie, vakkundige reparatie en betrouwbaar onderhoud voor alle Sanibroyeur systemen. Direct hulp nodig? Bel ons nu!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="xl" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <a href={`tel:${siteConfig.contactInfo.telefoon?.replace(/\s+/g, "")}`}>
                <Phone className="mr-2 h-6 w-6" /> Bel Direct: {siteConfig.contactInfo.telefoon}
              </a>
            </Button>
            <Button size="xl" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/contact#offerte">
                Vraag Nu Uw Offerte Aan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Veelvoorkomende Sanibroyeur Problemen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {commonProblems.map((problem, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-100 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                {problem.icon}
                <p className="mt-3 font-semibold text-gray-700 dark:text-gray-200">{problem.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Heeft u één van deze problemen? Of een ander defect aan uw Sanibroyeur? Neem direct contact op met {siteConfig.name} voor een snelle en vakkundige oplossing!
            </p>
            <ProminentCallButton phoneNumber={siteConfig.contactInfo.telefoon || "0612345678"} />
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uspData.map((usp, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {usp.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4 mb-2">{usp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Onze Sanibroyeur Diensten
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesOverview.map((service) => (
              <div key={service.title} className="bg-gray-50 dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-56 w-full">
                    <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-20 overflow-hidden">{service.description}</p>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900" asChild>
                    <Link href={service.link}>Meer Informatie</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/diensten">Bekijk Alle Diensten</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Laatste Nieuws & Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 w-full">
                  <Image src="/images/blog_placeholder.jpg" alt={post.title} layout="fill" objectFit="cover" />
                </div> 
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 h-14 overflow-hidden">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-20 overflow-hidden">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-blue-600 dark:text-blue-400 hover:underline" asChild>
                    <Link href={post.slug}>Lees Meer &rarr;</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Naar Alle Blogartikelen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Wat Onze Klanten Zeggen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{review.quote}"</p>
                <p className="font-semibold text-gray-700 dark:text-gray-200">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 md:py-32 bg-blue-700 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Klaar om uw Sanibroyeur-problemen op te lossen?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Wacht niet langer! Bel {siteConfig.name} nu voor direct advies of een afspraak!
          </p>
          <Button size="xl" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 text-xl shadow-xl transform hover:scale-105 transition-transform duration-300" asChild>
            <a href={`tel:${siteConfig.contactInfo.telefoon?.replace(/\s+/g, "")}`}>
              <Phone className="mr-3 h-7 w-7" /> Bel Nu: {siteConfig.contactInfo.telefoon}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

