"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
  rating: number;
}

// Placeholder testimonials - replace with real ones or generate more diverse ones
const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Familie de Vries",
    location: "Amsterdam",
    text: "Uitstekende service! Onze Sanibroyeur was snel en vakkundig gerepareerd. Zeer tevreden over de professionaliteit en de duidelijke communicatie.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Dhr. Jansen",
    location: "Rotterdam",
    text: "Na lang sukkelen met een oude Sanibroyeur, heeft Sanibroyeur Techniek NL een nieuwe perfect geïnstalleerd. Werkt als een zonnetje!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Mevr. Pietersen",
    location: "Utrecht",
    text: "Vriendelijke monteur en het probleem was zo opgelost. Ik raad dit bedrijf zeker aan voor iedereen met Sanibroyeur problemen.",
    rating: 4,
  },
  {
    id: "t4",
    name: "J. Bakker",
    location: "Haarlem",
    text: "Snelle reactie en goede service. De monteur dacht goed mee en gaf nuttige tips voor onderhoud. Top!",
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  pageLocation?: string; // Optional: to tailor testimonials or heading
}

export function TestimonialsSection({ pageLocation }: TestimonialsSectionProps) {
  // Potentially filter or select testimonials based on pageLocation if needed
  const displayedTestimonials = testimonialsData.slice(0, 3); // Show first 3 for this example

  return (
    <section className="py-16 bg-muted/30 dark:bg-muted/50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Wat Klanten Zeggen {pageLocation ? `over ons in ${pageLocation}` : "over Ons"}
        </h2>
        {displayedTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card text-card-foreground rounded-lg border shadow-lg p-6 flex flex-col">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 flex-grow">\"{testimonial.text}\"</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Nog geen testimonials beschikbaar.</p>
        )}
      </div>
    </section>
  );
}

