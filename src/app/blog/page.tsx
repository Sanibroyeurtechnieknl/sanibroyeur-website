import React from 'react';
import Link from 'next/link';
import ProminentCallButton from '@/components/ProminentCallButton'; 
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image"; // Added for potential image use in listing

// Updated blog posts to reflect actual content files
const blogPosts = [
  {
    id: 1,
    title: 'De Voordelen van een Sanibroyeur: Meer Mogelijkheden in Huis',
    slug: 'voordelen-sanibroyeur',
    excerpt: 'Ontdek de vele voordelen van een Sanibroyeur, zoals flexibele plaatsing, kostenbesparing en snelle installatie.',
    image: '/images_new/homepage_hero_modern_bathroom.jpeg' // Placeholder, will be updated in individual page
  },
  {
    id: 2,
    title: '5 Veelvoorkomende Sanibroyeur Problemen en Hoe Ze Te Voorkomen',
    slug: 'veelvoorkomende-sanibroyeur-problemen',
    excerpt: 'Leer over de 5 meest voorkomende Sanibroyeur problemen zoals verstoppingen en lawaai, en ontdek hoe u ze kunt voorkomen.',
    image: '/images_new/pexels-curtis-adams-3990359.jpg' // Placeholder, will be updated in individual page
  },
  {
    id: 3,
    title: 'Sanibroyeur Onderhoud: Essentiële Tips voor een Lange Levensduur',
    slug: 'sanibroyeur-onderhoud-tips',
    excerpt: 'Leer hoe u met eenvoudig onderhoud de levensduur van uw Sanibroyeur kunt verlengen en problemen kunt voorkomen.',
    image: '/images_new/pexels-max-vakhtbovych-6782567.jpg' // Placeholder, will be updated in individual page
  }
];

const BlogPage: React.FC = () => {
  return (
    <main className="flex-1 bg-background">
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Sanibroyeur Blog & Tips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-card rounded-lg shadow-lg flex flex-col">
              {post.image && (
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                </Link>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-primary mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline mt-auto self-start">
                  Lees Meer &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prominent Call Button - Bottom of page */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 border-t border-border">
        <ProminentCallButton phoneNumber={siteConfig.contactInfo.telefoon || "0852033172"} buttonText={`Direct Advies Nodig? Bel Ons!`}/>
      </div>
    </main>
  );
};

export default BlogPage;

