import { siteConfig } from "@/lib/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacybeleid - ${siteConfig.name}`,
  description: `Privacybeleid van ${siteConfig.name}. Lees hoe wij omgaan met uw persoonsgegevens.`,
  alternates: {
    canonical: `${siteConfig.url}/privacybeleid`,
  },
  robots: { // Add robots meta tag for legal pages
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const { name, contactInfo, url } = siteConfig;
  const { email, telefoon, adres, kvk, btw } = contactInfo;

  return (
    <main className="flex-1 bg-background">
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-primary">
            Privacybeleid
          </h1>
          <p className="text-muted-foreground">
            Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}
          </p>

          <h2 className="mt-6 text-2xl font-semibold">1. Wie zijn wij?</h2>
          <p>
            {name}, gevestigd te {adres?.straat} {adres?.postcode} {adres?.plaats}, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
          </p>
          <p>
            <strong>Contactgegevens:</strong><br />
            {name}<br />
            {adres?.straat}, {adres?.postcode} {adres?.plaats}<br />
            Telefoon: {telefoon}<br />
            E-mail: {email}<br />
            Website: <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{url}</a><br />
            KVK-nummer: {kvk}<br />
            BTW-nummer: {btw}
          </p>

          <h2 className="mt-6 text-2xl font-semibold">2. Persoonsgegevens die wij verwerken</h2>
          <p>
            {name} verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij (mogelijk) verwerken:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Voor- en achternaam</li>
            <li>Adresgegevens</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>IP-adres (via websitebezoek)</li>
            <li>Gegevens over uw activiteiten op onze website</li>
            <li>Internetbrowser en apparaat type (via websitebezoek)</li>
            <li>Overige persoonsgegevens die u actief verstrekt bijvoorbeeld in correspondentie en telefonisch</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold">3. Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h2>
          <p>
            {name} verwerkt uw persoonsgegevens voor de volgende doelen:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Het afhandelen van uw betaling (indien van toepassing)</li>
            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
            <li>U te informeren over wijzigingen van onze diensten en producten</li>
            <li>Om goederen en diensten bij u af te leveren</li>
            <li>{name} analyseert uw gedrag op de website om daarmee de website te verbeteren en het aanbod van producten en diensten af te stemmen op uw voorkeuren. (Indien cookies geaccepteerd)</li>
            <li>{name} verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn, zoals gegevens die nodig zijn voor onze belastingaangifte.</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold">4. Hoe lang we persoonsgegevens bewaren</h2>
          <p>
            {name} bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de wettelijke bewaartermijnen voor de betreffende gegevens.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">5. Delen van persoonsgegevens met derden</h2>
          <p>
            {name} verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">6. Cookies, of vergelijkbare technieken, die wij gebruiken</h2>
          <p>
            {name} gebruikt functionele, analytische en tracking cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. {name} gebruikt cookies met een puur technische functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden. Deze cookies worden ook gebruikt om de website goed te laten werken en deze te kunnen optimaliseren. Voor analytische en tracking cookies vragen wij uw toestemming.
          </p>
          <p>
            U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">7. Gegevens inzien, aanpassen of verwijderen</h2>
          <p>
            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door {name} en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen.
          </p>
          <p>
            U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar {email}. Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
          </p>
          <p>
            {name} wil u er tevens op wijzen dat u de mogelijkheid heeft om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://autoriteitpersoonsgegevens.nl</a>
          </p>

          <h2 className="mt-6 text-2xl font-semibold">8. Hoe wij persoonsgegevens beveiligen</h2>
          <p>
            {name} neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op via {email}.
          </p>
        </div>
      </section>
    </main>
  );
}

