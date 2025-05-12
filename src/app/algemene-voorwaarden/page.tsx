import { siteConfig } from "@/lib/siteConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Algemene Voorwaarden - ${siteConfig.name}`,
  description: `Algemene Voorwaarden van ${siteConfig.name}. Lees onze voorwaarden voor dienstverlening.`,
  alternates: {
    canonical: `${siteConfig.url}/algemene-voorwaarden`,
  },
  robots: { // Add robots meta tag for legal pages
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const { name, contactInfo, url } = siteConfig;
  const { email, telefoon, adres, kvk, btw, iban } = contactInfo;

  return (
    <main className="flex-1 bg-background">
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-primary">
            Algemene Voorwaarden
          </h1>
          <p className="text-muted-foreground">
            Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 1 - Definities</h2>
          <p>
            In deze algemene voorwaarden wordt verstaan onder:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Opdrachtnemer:</strong> {name}, gevestigd te {adres?.straat}, {adres?.postcode} {adres?.plaats}, ingeschreven bij de Kamer van Koophandel onder nummer {kvk}.</li>
            <li><strong>Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die aan Opdrachtnemer opdracht heeft gegeven tot het verrichten van werkzaamheden.</li>
            <li><strong>Overeenkomst:</strong> Elke afspraak tussen Opdrachtgever en Opdrachtnemer tot het verrichten van werkzaamheden door Opdrachtnemer ten behoeve van Opdrachtgever.</li>
            <li><strong>Werkzaamheden:</strong> Alle werkzaamheden waartoe opdracht is gegeven, of die door Opdrachtnemer uit anderen hoofde worden verricht, direct verband houdend met de opdracht, alles in de ruimste zin des woords en in ieder geval omvattend de werkzaamheden zoals omschreven in de opdrachtbevestiging.</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 2 - Toepasselijkheid</h2>
          <p>
            2.1. Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, overeenkomsten en leveringen van diensten of goederen door of namens Opdrachtnemer.
          </p>
          <p>
            2.2. Afwijken van deze voorwaarden kan alleen als dat uitdrukkelijk én schriftelijk is afgesproken.
          </p>
          <p>
            2.3. De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 3 - Offertes en aanbiedingen</h2>
          <p>
            3.1. Alle offertes en aanbiedingen van Opdrachtnemer zijn vrijblijvend, tenzij daarin uitdrukkelijk anders is aangegeven.
          </p>
          <p>
            3.2. Een offerte of aanbieding is maximaal 30 dagen geldig, tenzij een andere aanvaardingstermijn in de offerte of aanbieding staat vermeld.
          </p>
          <p>
            3.3. Als de Opdrachtgever een offerte of aanbieding niet binnen de geldende termijn aanvaardt, dan vervalt de offerte of aanbieding.
          </p>
          <p>
            3.4. Aanbiedingen of offertes gelden niet automatisch voor vervolgopdrachten.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 4 - Prijzen</h2>
          <p>
            4.1. Alle prijzen die Opdrachtnemer hanteert zijn in euro’s, zijn inclusief btw en exclusief eventuele overige kosten zoals administratiekosten, heffingen en reis-, verzend- of transportkosten, tenzij uitdrukkelijk anders vermeld of anders overeengekomen.
          </p>
          <p>
            4.2. Opdrachtnemer mag de prijzen van zijn diensten en producten op zijn website en in andere uitingen altijd wijzigen.
          </p>
          <p>
            4.3. De prijs met betrekking tot een dienstverlening wordt door Opdrachtnemer vastgesteld op grond van de werkelijk bestede uren, tenzij een vaste prijs is overeengekomen.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 5 - Betaling en betalingstermijn</h2>
          <p>
            5.1. Opdrachtnemer mag bij het aangaan van de overeenkomst een aanbetaling tot 50% van het overeengekomen bedrag verlangen.
          </p>
          <p>
            5.2. Opdrachtgever dient betalingen achteraf binnen 14 dagen na factuurdatum te hebben voldaan, tenzij partijen hierover andere afspraken hebben gemaakt of op de factuur een andere betaaltermijn vermeld staat.
          </p>
          <p>
            5.3. Betaalt Opdrachtgever niet binnen de overeengekomen termijn, dan is Opdrachtnemer gerechtigd de wettelijke rente van 2% per maand voor niet-handelstransacties en de wettelijke rente van 8% per maand voor handelstransacties in rekening te brengen vanaf de dag dat Opdrachtgever in verzuim is, waarbij een gedeelte van een maand voor een hele maand wordt gerekend.
          </p>
          <p>
            5.4. Wanneer Opdrachtgever in verzuim is, is hij bovendien buitengerechtelijke incassokosten en eventuele schadevergoeding verschuldigd aan Opdrachtnemer.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 6 - Uitvoering van de overeenkomst</h2>
          <p>
            6.1. Opdrachtnemer voert de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uit.
          </p>
          <p>
            6.2. Opdrachtnemer heeft het recht om de overeengekomen dienstverlening (gedeeltelijk) te laten verrichten door derden.
          </p>
          <p>
            6.3. De uitvoering van de overeenkomst geschiedt in onderling overleg en na schriftelijke akkoord en betaling van het eventueel afgesproken voorschot.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 7 - Informatieverstrekking door Opdrachtgever</h2>
          <p>
            7.1. Opdrachtgever stelt alle informatie, gegevens en bescheiden die relevant zijn voor de correcte uitvoering van de overeenkomst tijdig en in gewenste vorm en op gewenste wijze beschikbaar aan Opdrachtnemer.
          </p>
          <p>
            7.2. Opdrachtgever staat in voor de juistheid, volledigheid en betrouwbaarheid van de ter beschikking gestelde informatie, gegevens en bescheiden, ook indien deze van derden afkomstig zijn, voor zover uit de aard van de overeenkomst niet anders voortvloeit.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 8 - Garantie</h2>
          <p>
            8.1. Opdrachtnemer garandeert dat de door hem verrichte werkzaamheden beantwoorden aan de overeenkomst en worden uitgevoerd met goed vakmanschap en met gebruikmaking van deugdelijk materiaal.
          </p>
          <p>
            8.2. De garantie met betrekking tot werkzaamheden is beperkt tot het kosteloos herstellen van een gebrek binnen een redelijke termijn, mits het gebrek binnen 3 maanden na oplevering is gemeld.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 9 - Aansprakelijkheid</h2>
          <p>
            9.1. Opdrachtnemer is uitsluitend aansprakelijk voor directe schade. Onder directe schade wordt uitsluitend verstaan de redelijke kosten ter vaststelling van de oorzaak en de omvang van de schade, voor zover de vaststelling betrekking heeft op schade in de zin van deze voorwaarden, de eventuele redelijke kosten gemaakt om de gebrekkige prestatie van Opdrachtnemer aan de overeenkomst te laten beantwoorden, voor zoveel deze aan Opdrachtnemer toegerekend kunnen worden en redelijke kosten, gemaakt ter voorkoming of beperking van schade, voor zover Opdrachtgever aantoont dat deze kosten hebben geleid tot beperking van directe schade als bedoeld in deze algemene voorwaarden.
          </p>
          <p>
            9.2. Opdrachtnemer is nooit aansprakelijk voor indirecte schade, zoals gevolgschade, gederfde winst, gemiste besparingen of schade aan derden.
          </p>
          <p>
            9.3. Indien Opdrachtnemer aansprakelijk is, is deze aansprakelijkheid beperkt tot het bedrag dat door een gesloten (beroeps)aansprakelijkheidsverzekering wordt uitbetaald en bij gebreke van (volledige) uitkering door een verzekeringsmaatschappij van het schadebedrag is de aansprakelijkheid beperkt tot het (gedeelte van het) factuurbedrag waarop de aansprakelijkheid betrekking heeft.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 10 - Klachten</h2>
          <p>
            10.1. Opdrachtgever dient een door Opdrachtnemer verrichte werkzaamheid of geleverd product zo spoedig mogelijk te onderzoeken op eventuele tekortkomingen.
          </p>
          <p>
            10.2. Beantwoordt een verrichte werkzaamheid of geleverd product niet aan hetgeen Opdrachtgever redelijkerwijs van de overeenkomst mocht verwachten, dan dient Opdrachtgever Opdrachtnemer daarvan zo spoedig mogelijk, doch in ieder geval binnen 14 dagen na constatering van de tekortkomingen, op de hoogte te stellen.
          </p>
          <p>
            10.3. Opdrachtgever geeft daarbij een zo gedetailleerd mogelijke omschrijving van de tekortkoming, zodat Opdrachtnemer in staat is hierop adequaat te reageren.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 11 - Toepasselijk recht en bevoegde rechter</h2>
          <p>
            11.1. Op iedere overeenkomst tussen partijen is uitsluitend het Nederlands recht van toepassing.
          </p>
          <p>
            11.2. De Nederlandse rechter in het arrondissement waar {name} is gevestigd / praktijk houdt / kantoor houdt is exclusief bevoegd om kennis te nemen van eventuele geschillen tussen partijen, tenzij de wet dwingend anders voorschrijft.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">Artikel 12 - Wijziging algemene voorwaarden</h2>
          <p>
            12.1. Opdrachtnemer is gerechtigd deze algemene voorwaarden te wijzigen of aan te vullen.
          </p>
          <p>
            12.2. Wijzigingen van ondergeschikt belang kunnen te allen tijde worden doorgevoerd.
          </p>
          <p>
            12.3. Grote inhoudelijke wijzigingen zal Opdrachtnemer zoveel mogelijk vooraf met Opdrachtgever bespreken.
          </p>

          <p className="mt-8">
            Voor vragen over deze algemene voorwaarden kunt u contact opnemen via:
            <br />
            {name}<br />
            {adres?.straat}, {adres?.postcode} {adres?.plaats}<br />
            Telefoon: {telefoon}<br />
            E-mail: {email}
          </p>
        </div>
      </section>
    </main>
  );
}

