import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createSlug } from "@/lib/utils"; 
import { getGeoData } from "@/lib/geoData"; 
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MapPin, Star } from "lucide-react";
import ProminentCallButton from "@/components/ProminentCallButton";

interface PlaatsPageProps {
  params: {
    provincie: string;
    gemeente: string;
    plaats: string;
  };
}

async function getPlaceDetails(provincieSlug: string, gemeenteSlug: string, plaatsSlug: string) {
  const provinces = await getGeoData();
  const provinceData = provinces.find(
    (p) => createSlug(p.name) === provincieSlug
  );

  if (!provinceData) return null;

  const municipalityData = provinceData.municipalities.find(
    (m) => createSlug(m.name) === gemeenteSlug
  );

  if (!municipalityData) return null;

  const placeName = municipalityData.places.find(
    (pl) => createSlug(pl) === plaatsSlug
  );

  if (!placeName) return null;

  return {
    provincieName: provinceData.name,
    gemeenteName: municipalityData.name,
    plaatsName: placeName,
  };
}

export async function generateStaticParams() {
  const provinces = await getGeoData();
  const params = [];

  for (const province of provinces) {
    const provinceSlug = createSlug(province.name); 
    for (const municipality of province.municipalities) {
      const municipalitySlug = createSlug(municipality.name); 
      for (const place of municipality.places) {
        const placeSlug = createSlug(place); 
        if (provinceSlug && municipalitySlug && placeSlug) {
            params.push({
                provincie: provinceSlug,
                gemeente: municipalitySlug,
                plaats: placeSlug,
            });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PlaatsPageProps): Promise<Metadata> {
  const details = await getPlaceDetails(params.provincie, params.gemeente, params.plaats);

  if (!details) {
    return {
      title: "Plaats Niet Gevonden",
      description: "Deze plaats kon niet worden gevonden.",
    };
  }

  const { provincieName, gemeenteName, plaatsName } = details;
  const title = `${plaatsName} (${gemeenteName}, ${provincieName}) - ${siteConfig.name}`;
  const description = `Sanibroyeur expert in ${plaatsName}, gemeente ${gemeenteName}, provincie ${provincieName}. ${siteConfig.description}`;

  return {
    title,
    description,
    keywords: ["Sanibroyeur", plaatsName, gemeenteName, provincieName, "service", siteConfig.name],
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/werkgebieden/${params.provincie}/${params.gemeente}/${params.plaats}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Sanibroyeur service in ${plaatsName}`,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/werkgebieden/${params.provincie}/${params.gemeente}/${params.plaats}`,
    },
  };
}

export default async function PlaatsPage({ params }: PlaatsPageProps) {
  const details = await getPlaceDetails(params.provincie, params.gemeente, params.plaats);

  if (!details) {
    notFound();
  }

  const { provincieName, gemeenteName, plaatsName } = details;
  
  // Dynamically generate content based on plaatsName, gemeenteName, and provincieName
  const commonProblems = [
    { name: `Sanibroyeur verstopt in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Sanibroyeur maakt lawaai in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Sanibroyeur lekt water in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Sanibroyeur start niet in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Sanibroyeur stinkt in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Water loopt niet weg in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
    { name: `Motor blijft draaien in ${plaatsName}`, icon: <MapPin className="h-8 w-8 text-red-500" /> },
  ];

  const uspData = [
      {
          title: `Snel ter Plaatse in ${plaatsName}`,
          description: `Spoed? Onze monteurs zijn snel ter plaatse in ${plaatsName} en omgeving!`,
          icon: <CheckCircle className="h-10 w-10 text-green-500" />
      },
      {
          title: "Ervaren & Vakkundige Monteurs",
          description: `Gecertificeerde specialisten met jarenlange ervaring in ${plaatsName}.`,
          icon: <CheckCircle className="h-10 w-10 text-green-500" />
      },
      {
          title: "Duidelijke & Transparante Prijzen",
          description: `Geen verrassingen voor uw klus in ${plaatsName}, altijd een heldere offerte vooraf.`,
          icon: <CheckCircle className="h-10 w-10 text-green-500" />
      },
      {
          title: "Garantie op Werkzaamheden",
          description: `Kwaliteit en zekerheid voor Sanibroyeur service in ${plaatsName}.`,
          icon: <CheckCircle className="h-10 w-10 text-green-500" />
      }
  ];

  const servicesOverview = [
    {
      title: `Sanibroyeur Installatie ${plaatsName}`,
      description: `Vakkundige installatie van alle merken en modellen Sanibroyeurs in ${plaatsName}. Advies op maat en perfecte afwerking.`,
      image: "/images/service_installation.jpg",
      link: "/diensten#installatie"
    },
    {
      title: `Sanibroyeur Reparatie ${plaatsName}`,
      description: `Snelle en effectieve reparatie van alle Sanibroyeur storingen in ${plaatsName}. 24/7 spoedservice beschikbaar.`,
      image: "/images/service_repair.jpg",
      link: "/diensten#reparatie"
    },
    {
      title: `Sanibroyeur Onderhoud ${plaatsName}`,
      description: `Preventief onderhoud voor een langere levensduur en optimale werking van uw Sanibroyeur in ${plaatsName}.`,
      image: "/images/service_maintenance.jpg",
      link: "/diensten#onderhoud"
    }
  ];

  const blogPosts = [
    {
      title: `Sanibroyeur Tips voor ${plaatsName}`,
      slug: "/blog/sanibroyeur-onderhoud-tips", 
      excerpt: `Essentiële onderhoudstips om uw Sanibroyeur in ${plaatsName} optimaal te laten functioneren.`,
      image: "/images/blog_placeholder.jpg"
    },
    {
      title: `Problemen met Sanibroyeur in ${plaatsName}?`,
      slug: "/blog/wanneer-sanibroyeur-vervangen",
      excerpt: `Herkent u problemen met uw Sanibroyeur in ${plaatsName}? Lees ons advies.`,
      image: "/images/blog_placeholder.jpg"
    },
    {
      title: `Professioneel Onderhoud in ${plaatsName}`,
      slug: "/blog/voordelen-professioneel-onderhoud",
      excerpt: `De voordelen van professioneel Sanibroyeur onderhoud in de plaats ${plaatsName}.`,
      image: "/images/blog_placeholder.jpg"
    }
  ];

  const reviews = [
    {
      quote: `Uitstekende en snelle service in ${plaatsName}! Mijn Sanibroyeur werkt weer perfect.`,
      author: `Mevr. de Wit, ${plaatsName}`,
      stars: 5
    },
    {
      quote: `Vriendelijke monteur, heeft het probleem in ${plaatsName} vakkundig opgelost. Aanrader!`,
      author: `Dhr. Bakker, ${plaatsName}`,
      stars: 4
    },
    {
      quote: `Zeer tevreden over de expertise van ${siteConfig.name} in ${plaatsName}.`,
      author: `Familie Pietersen, ${plaatsName}`,
      stars: 5
    }
  ];

  return (
    <main className="flex-1 bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {siteConfig.name}: Uw Sanibroyeur Expert in {plaatsName}!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Snelle installatie, vakkundige reparatie en betrouwbaar onderhoud voor alle Sanibroyeur systemen in {plaatsName}, gemeente {gemeenteName} (provincie {provincieName}). Direct hulp nodig? Bel ons nu!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="xl" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <a href={`tel:${siteConfig.contactInfo.telefoon?.replace(/\s+/g, "")}`}>
                <Phone className="mr-2 h-6 w-6" /> Bel Direct: {siteConfig.contactInfo.telefoon}
              </a>
            </Button>
            <Button size="xl" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link href={`/contact?locatie=${encodeURIComponent(plaatsName)},${encodeURIComponent(gemeenteName)},${encodeURIComponent(provincieName)}#offerte`}>
                Vraag Nu Uw Offerte Aan (Regio {plaatsName})
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:underline">Home</Link> &gt; 
          <Link href="/werkgebieden" className="hover:underline"> Werkgebieden</Link> &gt; 
          <Link href={`/werkgebieden/${params.provincie}`} className="hover:underline"> {provincieName}</Link> &gt; 
          <Link href={`/werkgebieden/${params.provincie}/${params.gemeente}`} className="hover:underline"> {gemeenteName}</Link> &gt; 
          <span className="font-semibold"> {plaatsName}</span>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Veelvoorkomende Sanibroyeur Problemen in {plaatsName}
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
              Heeft u één van deze problemen in {plaatsName}? Of een ander defect aan uw Sanibroyeur? Neem direct contact op met {siteConfig.name} voor een snelle en vakkundige oplossing in de regio {plaatsName}!
            </p>
            <ProminentCallButton phoneNumber={siteConfig.contactInfo.telefoon || "0612345678"} buttonText={`Bel voor Hulp in ${plaatsName}`} />
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Waarom Kiezen Voor {siteConfig.name} in {plaatsName}?
          </h2>
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
            Onze Sanibroyeur Diensten in {plaatsName}
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
              <Link href="/diensten">Bekijk Alle Diensten (voor {plaatsName})</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Laatste Nieuws & Sanibroyeur Tips (Gerelateerd aan {plaatsName})
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300">
                 <div className="relative h-48 w-full">
                  <Image src={post.image || "/images/blog_placeholder.jpg"} alt={post.title} layout="fill" objectFit="cover" />
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
            Wat Klanten in {plaatsName} Zeggen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-3">
                    {[...Array(review.stars || 5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
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
            Klaar om uw Sanibroyeur-problemen in {plaatsName} op te lossen?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Wacht niet langer! Bel {siteConfig.name} nu voor direct advies of een afspraak in {plaatsName}!
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

