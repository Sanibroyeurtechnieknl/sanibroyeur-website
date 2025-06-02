// Mega-SEO Data Structuur voor Sanibroyeur Diensten
// 25+ diensten × 12 provincies × 200+ steden = 60.000+ pagina's

const diensten = [
  // Acute Problemen
  { id: 'sanibroyeur-verstopt', naam: 'Sanibroyeur Verstopt', categorie: 'problemen' },
  { id: 'sanibroyeur-lekt', naam: 'Sanibroyeur Lekt', categorie: 'problemen' },
  { id: 'sanibroyeur-werkt-niet', naam: 'Sanibroyeur Werkt Niet', categorie: 'problemen' },
  { id: 'sanibroyeur-maakt-lawaai', naam: 'Sanibroyeur Maakt Lawaai', categorie: 'problemen' },
  { id: 'sanibroyeur-stinkt', naam: 'Sanibroyeur Stinkt', categorie: 'problemen' },
  { id: 'sanibroyeur-start-niet', naam: 'Sanibroyeur Start Niet', categorie: 'problemen' },
  { id: 'water-loopt-niet-weg', naam: 'Water Loopt Niet Weg', categorie: 'problemen' },
  { id: 'toilet-loopt-over', naam: 'Toilet Loopt Over', categorie: 'problemen' },
  
  // Technische Symptomen
  { id: 'sanibroyeur-rood-lampje', naam: 'Sanibroyeur Rood Lampje', categorie: 'symptomen' },
  { id: 'sanibroyeur-motor-problemen', naam: 'Sanibroyeur Motor Problemen', categorie: 'symptomen' },
  { id: 'sanibroyeur-blijft-draaien', naam: 'Sanibroyeur Blijft Draaien', categorie: 'symptomen' },
  { id: 'sanibroyeur-zoemt', naam: 'Sanibroyeur Zoemt Maar Pompt Niet', categorie: 'symptomen' },
  { id: 'sanibroyeur-slaat-af', naam: 'Sanibroyeur Slaat Steeds Af', categorie: 'symptomen' },
  
  // Spoeddiensten
  { id: 'sanibroyeur-spoeddienst', naam: 'Sanibroyeur Spoeddienst', categorie: 'spoed' },
  { id: 'sanibroyeur-24-uur', naam: 'Sanibroyeur 24 Uur Service', categorie: 'spoed' },
  { id: 'sanibroyeur-weekend', naam: 'Sanibroyeur Weekend Service', categorie: 'spoed' },
  { id: 'sanibroyeur-avond', naam: 'Sanibroyeur Avond Service', categorie: 'spoed' },
  
  // Standaard Diensten
  { id: 'sanibroyeur-reparatie', naam: 'Sanibroyeur Reparatie', categorie: 'diensten' },
  { id: 'sanibroyeur-installatie', naam: 'Sanibroyeur Installatie', categorie: 'diensten' },
  { id: 'sanibroyeur-onderhoud', naam: 'Sanibroyeur Onderhoud', categorie: 'diensten' },
  { id: 'sanibroyeur-ontstopping', naam: 'Sanibroyeur Ontstopping', categorie: 'diensten' },
  { id: 'sanibroyeur-vervanging', naam: 'Sanibroyeur Vervanging', categorie: 'diensten' },
  { id: 'sanibroyeur-revisie', naam: 'Sanibroyeur Revisie', categorie: 'diensten' },
  
  // Locatie-specifiek
  { id: 'sanibroyeur-kelder', naam: 'Sanibroyeur Kelder Installatie', categorie: 'locatie' },
  { id: 'sanibroyeur-toilet', naam: 'Sanibroyeur Toilet Installatie', categorie: 'locatie' },
  { id: 'sanibroyeur-badkamer', naam: 'Sanibroyeur Badkamer Service', categorie: 'locatie' },
  { id: 'sanibroyeur-kantoor', naam: 'Sanibroyeur Kantoor Installatie', categorie: 'locatie' },
  
  // Merk-specifiek
  { id: 'sfa-sanibroyeur', naam: 'SFA Sanibroyeur Service', categorie: 'merken' },
  { id: 'grundfos-sanibroyeur', naam: 'Grundfos Sanibroyeur Service', categorie: 'merken' },
  { id: 'saniflo-sanibroyeur', naam: 'Saniflo Sanibroyeur Service', categorie: 'merken' },
  { id: 'dab-sanibroyeur', naam: 'DAB Sanibroyeur Service', categorie: 'merken' }
];

const provincies = [
  {
    id: 'noord-holland',
    naam: 'Noord-Holland',
    aanrijtijd: '25-45 min',
    steden: [
      // Grote steden
      { id: 'amsterdam', naam: 'Amsterdam', inwoners: 872000, aanrijtijd: '25 min', populair: true },
      { id: 'haarlem', naam: 'Haarlem', inwoners: 162000, aanrijtijd: '30 min', populair: true },
      { id: 'zaanstad', naam: 'Zaanstad', inwoners: 156000, aanrijtijd: '30 min', populair: true },
      { id: 'alkmaar', naam: 'Alkmaar', inwoners: 109000, aanrijtijd: '35 min' },
      { id: 'hilversum', naam: 'Hilversum', inwoners: 92000, aanrijtijd: '35 min' },
      { id: 'amstelveen', naam: 'Amstelveen', inwoners: 91000, aanrijtijd: '30 min' },
      { id: 'hoorn', naam: 'Hoorn', inwoners: 73000, aanrijtijd: '40 min' },
      { id: 'purmerend', naam: 'Purmerend', inwoners: 81000, aanrijtijd: '35 min' },
      { id: 'hoofddorp', naam: 'Hoofddorp', inwoners: 76000, aanrijtijd: '30 min' },
      { id: 'heerhugowaard', naam: 'Heerhugowaard', inwoners: 57000, aanrijtijd: '40 min' },
      
      // Middelgrote steden
      { id: 'beverwijk', naam: 'Beverwijk', inwoners: 41000, aanrijtijd: '35 min' },
      { id: 'nieuw-vennep', naam: 'Nieuw-Vennep', inwoners: 32000, aanrijtijd: '35 min' },
      { id: 'castricum', naam: 'Castricum', inwoners: 35000, aanrijtijd: '40 min' },
      { id: 'heiloo', naam: 'Heiloo', inwoners: 24000, aanrijtijd: '40 min' },
      { id: 'volendam', naam: 'Volendam', inwoners: 22000, aanrijtijd: '45 min' },
      { id: 'edam', naam: 'Edam', inwoners: 7500, aanrijtijd: '45 min' },
      { id: 'monnickendam', naam: 'Monnickendam', inwoners: 9500, aanrijtijd: '45 min' },
      { id: 'diemen', naam: 'Diemen', inwoners: 30000, aanrijtijd: '30 min' },
      { id: 'ouder-amstel', naam: 'Ouder-Amstel', inwoners: 14000, aanrijtijd: '35 min' },
      { id: 'uithoorn', naam: 'Uithoorn', inwoners: 30000, aanrijtijd: '35 min' },
      
      // Kleinere plaatsen
      { id: 'weesp', naam: 'Weesp', inwoners: 19000, aanrijtijd: '35 min' },
      { id: 'muiden', naam: 'Muiden', inwoners: 7000, aanrijtijd: '40 min' },
      { id: 'naarden', naam: 'Naarden', inwoners: 17000, aanrijtijd: '40 min' },
      { id: 'bussum', naam: 'Bussum', inwoners: 33000, aanrijtijd: '40 min' },
      { id: 'huizen', naam: 'Huizen', inwoners: 41000, aanrijtijd: '45 min' },
      { id: 'blaricum', naam: 'Blaricum', inwoners: 11000, aanrijtijd: '45 min' },
      { id: 'laren', naam: 'Laren', inwoners: 11000, aanrijtijd: '45 min' },
      { id: 'enkhuizen', naam: 'Enkhuizen', inwoners: 18000, aanrijtijd: '50 min' },
      { id: 'medemblik', naam: 'Medemblik', inwoners: 45000, aanrijtijd: '55 min' },
      { id: 'den-helder', naam: 'Den Helder', inwoners: 56000, aanrijtijd: '60 min' }
    ]
  },
  
  {
    id: 'zuid-holland',
    naam: 'Zuid-Holland',
    aanrijtijd: '25-50 min',
    steden: [
      // Grote steden
      { id: 'rotterdam', naam: 'Rotterdam', inwoners: 651000, aanrijtijd: '30 min', populair: true },
      { id: 'den-haag', naam: 'Den Haag', inwoners: 548000, aanrijtijd: '35 min', populair: true },
      { id: 'leiden', naam: 'Leiden', inwoners: 125000, aanrijtijd: '40 min', populair: true },
      { id: 'dordrecht', naam: 'Dordrecht', inwoners: 119000, aanrijtijd: '35 min' },
      { id: 'zoetermeer', naam: 'Zoetermeer', inwoners: 125000, aanrijtijd: '40 min' },
      { id: 'alphen-aan-den-rijn', naam: 'Alphen aan den Rijn', inwoners: 111000, aanrijtijd: '45 min' },
      { id: 'delft', naam: 'Delft', inwoners: 103000, aanrijtijd: '35 min' },
      { id: 'spijkenisse', naam: 'Spijkenisse', inwoners: 74000, aanrijtijd: '35 min' },
      { id: 'capelle-aan-den-ijssel', naam: 'Capelle aan den IJssel', inwoners: 67000, aanrijtijd: '30 min' },
      { id: 'gouda', naam: 'Gouda', inwoners: 73000, aanrijtijd: '40 min' },
      
      // Middelgrote steden
      { id: 'rijswijk', naam: 'Rijswijk', inwoners: 54000, aanrijtijd: '35 min' },
      { id: 'voorburg', naam: 'Voorburg', inwoners: 39000, aanrijtijd: '35 min' },
      { id: 'leidschendam', naam: 'Leidschendam', inwoners: 27000, aanrijtijd: '40 min' },
      { id: 'wassenaar', naam: 'Wassenaar', inwoners: 26000, aanrijtijd: '40 min' },
      { id: 'barendrecht', naam: 'Barendrecht', inwoners: 48000, aanrijtijd: '35 min' },
      { id: 'krimpen-aan-den-ijssel', naam: 'Krimpen aan den IJssel', inwoners: 29000, aanrijtijd: '35 min' },
      { id: 'nieuwkoop', naam: 'Nieuwkoop', inwoners: 28000, aanrijtijd: '45 min' },
      { id: 'waddinxveen', naam: 'Waddinxveen', inwoners: 29000, aanrijtijd: '45 min' },
      { id: 'bodegraven', naam: 'Bodegraven', inwoners: 20000, aanrijtijd: '45 min' },
      { id: 'katwijk', naam: 'Katwijk', inwoners: 65000, aanrijtijd: '45 min' },
      
      // Kleinere plaatsen
      { id: 'noordwijk', naam: 'Noordwijk', inwoners: 43000, aanrijtijd: '45 min' },
      { id: 'sassenheim', naam: 'Sassenheim', inwoners: 15000, aanrijtijd: '45 min' },
      { id: 'lisse', naam: 'Lisse', inwoners: 23000, aanrijtijd: '45 min' },
      { id: 'hillegom', naam: 'Hillegom', inwoners: 22000, aanrijtijd: '45 min' },
      { id: 'voorhout', naam: 'Voorhout', inwoners: 15000, aanrijtijd: '45 min' },
      { id: 'oegstgeest', naam: 'Oegstgeest', inwoners: 24000, aanrijtijd: '45 min' },
      { id: 'rijnsburg', naam: 'Rijnsburg', inwoners: 15000, aanrijtijd: '45 min' },
      { id: 'monster', naam: 'Monster', inwoners: 13000, aanrijtijd: '40 min' },
      { id: 'naaldwijk', naam: 'Naaldwijk', inwoners: 18000, aanrijtijd: '40 min' },
      { id: 'maassluis', naam: 'Maassluis', inwoners: 33000, aanrijtijd: '35 min' },
      { id: 'vlaardingen', naam: 'Vlaardingen', inwoners: 73000, aanrijtijd: '30 min' },
      { id: 'schiedam', naam: 'Schiedam', inwoners: 78000, aanrijtijd: '30 min' },
      { id: 'hellevoetsluis', naam: 'Hellevoetsluis', inwoners: 40000, aanrijtijd: '45 min' },
      { id: 'brielle', naam: 'Brielle', inwoners: 17000, aanrijtijd: '45 min' },
      { id: 'ridderkerk', naam: 'Ridderkerk', inwoners: 46000, aanrijtijd: '35 min' }
    ]
  },
  
  {
    id: 'utrecht',
    naam: 'Utrecht',
    aanrijtijd: '20-40 min',
    steden: [
      // Grote steden
      { id: 'utrecht', naam: 'Utrecht', inwoners: 357000, aanrijtijd: '25 min', populair: true },
      { id: 'amersfoort', naam: 'Amersfoort', inwoners: 157000, aanrijtijd: '30 min', populair: true },
      { id: 'nieuwegein', naam: 'Nieuwegein', inwoners: 63000, aanrijtijd: '25 min' },
      { id: 'zeist', naam: 'Zeist', inwoners: 64000, aanrijtijd: '30 min' },
      { id: 'veenendaal', naam: 'Veenendaal', inwoners: 66000, aanrijtijd: '35 min' },
      { id: 'houten', naam: 'Houten', inwoners: 50000, aanrijtijd: '30 min' },
      { id: 'ijsselstein', naam: 'IJsselstein', inwoners: 34000, aanrijtijd: '30 min' },
      { id: 'soest', naam: 'Soest', inwoners: 46000, aanrijtijd: '35 min' },
      { id: 'baarn', naam: 'Baarn', inwoners: 25000, aanrijtijd: '40 min' },
      { id: 'bunnik', naam: 'Bunnik', inwoners: 15000, aanrijtijd: '25 min' },
      
      // Middelgrote steden
      { id: 'de-bilt', naam: 'De Bilt', inwoners: 43000, aanrijtijd: '30 min' },
      { id: 'vianen', naam: 'Vianen', inwoners: 20000, aanrijtijd: '30 min' },
      { id: 'woudenberg', naam: 'Woudenberg', inwoners: 13000, aanrijtijd: '35 min' },
      { id: 'leusden', naam: 'Leusden', inwoners: 30000, aanrijtijd: '35 min' },
      { id: 'montfoort', naam: 'Montfoort', inwoners: 14000, aanrijtijd: '35 min' },
      { id: 'woerden', naam: 'Woerden', inwoners: 52000, aanrijtijd: '35 min' },
      { id: 'lopik', naam: 'Lopik', inwoners: 14000, aanrijtijd: '40 min' },
      { id: 'oudewater', naam: 'Oudewater', inwoners: 10000, aanrijtijd: '40 min' },
      { id: 'rhenen', naam: 'Rhenen', inwoners: 20000, aanrijtijd: '40 min' },
      { id: 'renswoude', naam: 'Renswoude', inwoners: 5000, aanrijtijd: '40 min' },
      
      // Kleinere plaatsen
      { id: 'driebergen', naam: 'Driebergen', inwoners: 19000, aanrijtijd: '35 min' },
      { id: 'doorn', naam: 'Doorn', inwoners: 10000, aanrijtijd: '35 min' },
      { id: 'leersum', naam: 'Leersum', inwoners: 3000, aanrijtijd: '40 min' },
      { id: 'amerongen', naam: 'Amerongen', inwoners: 3000, aanrijtijd: '40 min' },
      { id: 'elst', naam: 'Elst', inwoners: 4000, aanrijtijd: '40 min' }
    ]
  },
  
  {
    id: 'noord-brabant',
    naam: 'Noord-Brabant',
    aanrijtijd: '30-60 min',
    steden: [
      // Grote steden
      { id: 'eindhoven', naam: 'Eindhoven', inwoners: 234000, aanrijtijd: '45 min', populair: true },
      { id: 'tilburg', naam: 'Tilburg', inwoners: 219000, aanrijtijd: '40 min', populair: true },
      { id: 'breda', naam: 'Breda', inwoners: 184000, aanrijtijd: '35 min', populair: true },
      { id: 's-hertogenbosch', naam: "'s-Hertogenbosch", inwoners: 155000, aanrijtijd: '35 min', populair: true },
      { id: 'helmond', naam: 'Helmond', inwoners: 92000, aanrijtijd: '50 min' },
      { id: 'roosendaal', naam: 'Roosendaal', inwoners: 77000, aanrijtijd: '40 min' },
      { id: 'oss', naam: 'Oss', inwoners: 92000, aanrijtijd: '40 min' },
      { id: 'bergen-op-zoom', naam: 'Bergen op Zoom', inwoners: 67000, aanrijtijd: '45 min' },
      { id: 'oosterhout', naam: 'Oosterhout', inwoners: 56000, aanrijtijd: '35 min' },
      { id: 'etten-leur', naam: 'Etten-Leur', inwoners: 44000, aanrijtijd: '35 min' },
      
      // Middelgrote steden
      { id: 'veldhoven', naam: 'Veldhoven', inwoners: 45000, aanrijtijd: '45 min' },
      { id: 'geldrop-mierlo', naam: 'Geldrop-Mierlo', inwoners: 39000, aanrijtijd: '50 min' },
      { id: 'nuenen', naam: 'Nuenen', inwoners: 23000, aanrijtijd: '50 min' },
      { id: 'son-en-breugel', naam: 'Son en Breugel', inwoners: 17000, aanrijtijd: '50 min' },
      { id: 'goirle', naam: 'Goirle', inwoners: 24000, aanrijtijd: '40 min' },
      { id: 'hilvarenbeek', naam: 'Hilvarenbeek', inwoners: 15000, aanrijtijd: '45 min' },
      { id: 'berkel-enschot', naam: 'Berkel-Enschot', inwoners: 13000, aanrijtijd: '40 min' },
      { id: 'zundert', naam: 'Zundert', inwoners: 22000, aanrijtijd: '40 min' },
      { id: 'waalwijk', naam: 'Waalwijk', inwoners: 48000, aanrijtijd: '35 min' },
      { id: 'uden', naam: 'Uden', inwoners: 42000, aanrijtijd: '45 min' },
      
      // Kleinere plaatsen
      { id: 'veghel', naam: 'Veghel', inwoners: 39000, aanrijtijd: '45 min' },
      { id: 'schijndel', naam: 'Schijndel', inwoners: 24000, aanrijtijd: '45 min' },
      { id: 'sint-michielsgestel', naam: 'Sint-Michielsgestel', inwoners: 29000, aanrijtijd: '40 min' },
      { id: 'vught', naam: 'Vught', inwoners: 26000, aanrijtijd: '40 min' },
      { id: 'boxtel', naam: 'Boxtel', inwoners: 31000, aanrijtijd: '40 min' },
      { id: 'best', naam: 'Best', inwoners: 30000, aanrijtijd: '45 min' },
      { id: 'oirschot', naam: 'Oirschot', inwoners: 19000, aanrijtijd: '45 min' },
      { id: 'eersel', naam: 'Eersel', inwoners: 19000, aanrijtijd: '50 min' },
      { id: 'bladel', naam: 'Bladel', inwoners: 20000, aanrijtijd: '50 min' },
      { id: 'reusel-de-mierden', naam: 'Reusel-De Mierden', inwoners: 13000, aanrijtijd: '55 min' }
    ]
  },
  
  {
    id: 'gelderland',
    naam: 'Gelderland',
    aanrijtijd: '35-65 min',
    steden: [
      // Grote steden
      { id: 'nijmegen', naam: 'Nijmegen', inwoners: 177000, aanrijtijd: '50 min', populair: true },
      { id: 'arnhem', naam: 'Arnhem', inwoners: 161000, aanrijtijd: '45 min', populair: true },
      { id: 'apeldoorn', naam: 'Apeldoorn', inwoners: 163000, aanrijtijd: '40 min', populair: true },
      { id: 'ede', naam: 'Ede', inwoners: 117000, aanrijtijd: '35 min' },
      { id: 'doetinchem', naam: 'Doetinchem', inwoners: 58000, aanrijtijd: '60 min' },
      { id: 'zutphen', naam: 'Zutphen', inwoners: 48000, aanrijtijd: '55 min' },
      { id: 'tiel', naam: 'Tiel', inwoners: 42000, aanrijtijd: '45 min' },
      { id: 'wageningen', naam: 'Wageningen', inwoners: 39000, aanrijtijd: '40 min' },
      { id: 'harderwijk', naam: 'Harderwijk', inwoners: 48000, aanrijtijd: '45 min' },
      { id: 'barneveld', naam: 'Barneveld', inwoners: 59000, aanrijtijd: '40 min' },
      
      // Middelgrote steden
      { id: 'beuningen', naam: 'Beuningen', inwoners: 26000, aanrijtijd: '50 min' },
      { id: 'wijchen', naam: 'Wijchen', inwoners: 41000, aanrijtijd: '50 min' },
      { id: 'berg-en-dal', naam: 'Berg en Dal', inwoners: 35000, aanrijtijd: '55 min' },
      { id: 'oosterbeek', naam: 'Oosterbeek', inwoners: 23000, aanrijtijd: '45 min' },
      { id: 'velp', naam: 'Velp', inwoners: 17000, aanrijtijd: '45 min' },
      { id: 'duiven', naam: 'Duiven', inwoners: 26000, aanrijtijd: '50 min' },
      { id: 'beekbergen', naam: 'Beekbergen', inwoners: 6000, aanrijtijd: '45 min' },
      { id: 'loenen', naam: 'Loenen', inwoners: 8000, aanrijtijd: '45 min' },
      { id: 'hoenderloo', naam: 'Hoenderloo', inwoners: 2000, aanrijtijd: '45 min' },
      { id: 'rheden', naam: 'Rheden', inwoners: 44000, aanrijtijd: '45 min' },
      
      // Kleinere plaatsen
      { id: 'ermelo', naam: 'Ermelo', inwoners: 27000, aanrijtijd: '45 min' },
      { id: 'putten', naam: 'Putten', inwoners: 24000, aanrijtijd: '45 min' },
      { id: 'nunspeet', naam: 'Nunspeet', inwoners: 28000, aanrijtijd: '45 min' },
      { id: 'elburg', naam: 'Elburg', inwoners: 23000, aanrijtijd: '50 min' },
      { id: 'oldebroek', naam: 'Oldebroek', inwoners: 23000, aanrijtijd: '50 min' },
      { id: 'hattem', naam: 'Hattem', inwoners: 12000, aanrijtijd: '50 min' },
      { id: 'heerde', naam: 'Heerde', inwoners: 19000, aanrijtijd: '50 min' },
      { id: 'epe', naam: 'Epe', inwoners: 33000, aanrijtijd: '50 min' },
      { id: 'voorst', naam: 'Voorst', inwoners: 24000, aanrijtijd: '50 min' },
      { id: 'lochem', naam: 'Lochem', inwoners: 34000, aanrijtijd: '60 min' }
    ]
  },
  
  {
    id: 'overijssel',
    naam: 'Overijssel',
    aanrijtijd: '40-70 min',
    steden: [
      // Grote steden
      { id: 'enschede', naam: 'Enschede', inwoners: 159000, aanrijtijd: '60 min', populair: true },
      { id: 'zwolle', naam: 'Zwolle', inwoners: 130000, aanrijtijd: '50 min', populair: true },
      { id: 'hengelo', naam: 'Hengelo', inwoners: 81000, aanrijtijd: '65 min' },
      { id: 'almelo', naam: 'Almelo', inwoners: 73000, aanrijtijd: '65 min' },
      { id: 'deventer', naam: 'Deventer', inwoners: 100000, aanrijtijd: '55 min' },
      { id: 'oldenzaal', naam: 'Oldenzaal', inwoners: 32000, aanrijtijd: '70 min' },
      { id: 'losser', naam: 'Losser', inwoners: 22000, aanrijtijd: '70 min' },
      { id: 'kampen', naam: 'Kampen', inwoners: 54000, aanrijtijd: '55 min' },
      { id: 'hardenberg', naam: 'Hardenberg', inwoners: 61000, aanrijtijd: '65 min' },
      { id: 'steenwijkerland', naam: 'Steenwijkerland', inwoners: 44000, aanrijtijd: '60 min' },
      
      // Middelgrote steden
      { id: 'dalfsen', naam: 'Dalfsen', inwoners: 29000, aanrijtijd: '55 min' },
      { id: 'raalte', naam: 'Raalte', inwoners: 38000, aanrijtijd: '55 min' },
      { id: 'olst-wijhe', naam: 'Olst-Wijhe', inwoners: 18000, aanrijtijd: '55 min' },
      { id: 'hellendoorn', naam: 'Hellendoorn', inwoners: 36000, aanrijtijd: '60 min' },
      { id: 'wierden', naam: 'Wierden', inwoners: 24000, aanrijtijd: '60 min' },
      { id: 'rijssen-holten', naam: 'Rijssen-Holten', inwoners: 38000, aanrijtijd: '60 min' },
      { id: 'borne', naam: 'Borne', inwoners: 23000, aanrijtijd: '65 min' },
      { id: 'haaksbergen', naam: 'Haaksbergen', inwoners: 24000, aanrijtijd: '65 min' },
      { id: 'tubbergen', naam: 'Tubbergen', inwoners: 21000, aanrijtijd: '70 min' },
      { id: 'dinkelland', naam: 'Dinkelland', inwoners: 26000, aanrijtijd: '70 min' }
    ]
  },
  
  {
    id: 'groningen',
    naam: 'Groningen',
    aanrijtijd: '60-90 min',
    steden: [
      // Grote steden
      { id: 'groningen', naam: 'Groningen', inwoners: 233000, aanrijtijd: '70 min', populair: true },
      { id: 'assen', naam: 'Assen', inwoners: 68000, aanrijtijd: '60 min', populair: true },
      { id: 'emmen', naam: 'Emmen', inwoners: 107000, aanrijtijd: '75 min' },
      { id: 'haren', naam: 'Haren', inwoners: 19000, aanrijtijd: '70 min' },
      { id: 'ten-boer', naam: 'Ten Boer', inwoners: 7000, aanrijtijd: '75 min' },
      { id: 'eelde', naam: 'Eelde', inwoners: 11000, aanrijtijd: '70 min' },
      { id: 'hoogezand-sappemeer', naam: 'Hoogezand-Sappemeer', inwoners: 34000, aanrijtijd: '75 min' },
      { id: 'stadskanaal', naam: 'Stadskanaal', inwoners: 31000, aanrijtijd: '80 min' },
      { id: 'veendam', naam: 'Veendam', inwoners: 27000, aanrijtijd: '80 min' },
      { id: 'winschoten', naam: 'Winschoten', inwoners: 18000, aanrijtijd: '85 min' },
      
      // Middelgrote steden
      { id: 'delfzijl', naam: 'Delfzijl', inwoners: 25000, aanrijtijd: '80 min' },
      { id: 'appingedam', naam: 'Appingedam', inwoners: 12000, aanrijtijd: '80 min' },
      { id: 'coevorden', naam: 'Coevorden', inwoners: 36000, aanrijtijd: '75 min' },
      { id: 'hoogeveen', naam: 'Hoogeveen', inwoners: 56000, aanrijtijd: '65 min' },
      { id: 'meppel', naam: 'Meppel', inwoners: 34000, aanrijtijd: '60 min' }
    ]
  },
  
  {
    id: 'friesland',
    naam: 'Friesland',
    aanrijtijd: '60-90 min',
    steden: [
      { id: 'leeuwarden', naam: 'Leeuwarden', inwoners: 124000, aanrijtijd: '70 min', populair: true },
      { id: 'sneek', naam: 'Sneek', inwoners: 33000, aanrijtijd: '75 min' },
      { id: 'heerenveen', naam: 'Heerenveen', inwoners: 51000, aanrijtijd: '70 min' },
      { id: 'drachten', naam: 'Drachten', inwoners: 45000, aanrijtijd: '75 min' },
      { id: 'franeker', naam: 'Franeker', inwoners: 13000, aanrijtijd: '75 min' },
      { id: 'harlingen', naam: 'Harlingen', inwoners: 16000, aanrijtijd: '80 min' },
      { id: 'dokkum', naam: 'Dokkum', inwoners: 13000, aanrijtijd: '80 min' },
      { id: 'bolsward', naam: 'Bolsward', inwoners: 10000, aanrijtijd: '80 min' },
      { id: 'workum', naam: 'Workum', inwoners: 4500, aanrijtijd: '80 min' },
      { id: 'ijlst', naam: 'IJlst', inwoners: 3500, aanrijtijd: '80 min' },
      { id: 'sloten', naam: 'Sloten', inwoners: 700, aanrijtijd: '85 min' },
      { id: 'stavoren', naam: 'Stavoren', inwoners: 1000, aanrijtijd: '85 min' },
      { id: 'hindeloopen', naam: 'Hindeloopen', inwoners: 900, aanrijtijd: '85 min' },
      { id: 'lemmer', naam: 'Lemmer', inwoners: 11000, aanrijtijd: '75 min' },
      { id: 'joure', naam: 'Joure', inwoners: 13000, aanrijtijd: '75 min' }
    ]
  },
  
  {
    id: 'drenthe',
    naam: 'Drenthe',
    aanrijtijd: '60-80 min',
    steden: [
      { id: 'assen', naam: 'Assen', inwoners: 68000, aanrijtijd: '60 min', populair: true },
      { id: 'emmen', naam: 'Emmen', inwoners: 107000, aanrijtijd: '75 min', populair: true },
      { id: 'hoogeveen', naam: 'Hoogeveen', inwoners: 56000, aanrijtijd: '65 min' },
      { id: 'meppel', naam: 'Meppel', inwoners: 34000, aanrijtijd: '60 min' },
      { id: 'coevorden', naam: 'Coevorden', inwoners: 36000, aanrijtijd: '75 min' },
      { id: 'noordenveld', naam: 'Noordenveld', inwoners: 31000, aanrijtijd: '65 min' },
      { id: 'tynaarlo', naam: 'Tynaarlo', inwoners: 34000, aanrijtijd: '65 min' },
      { id: 'aa-en-hunze', naam: 'Aa en Hunze', inwoners: 25000, aanrijtijd: '70 min' },
      { id: 'borger-odoorn', naam: 'Borger-Odoorn', inwoners: 25000, aanrijtijd: '75 min' },
      { id: 'de-wolden', naam: 'De Wolden', inwoners: 24000, aanrijtijd: '70 min' }
    ]
  },
  
  {
    id: 'flevoland',
    naam: 'Flevoland',
    aanrijtijd: '30-50 min',
    steden: [
      { id: 'almere', naam: 'Almere', inwoners: 214000, aanrijtijd: '35 min', populair: true },
      { id: 'lelystad', naam: 'Lelystad', inwoners: 78000, aanrijtijd: '40 min', populair: true },
      { id: 'dronten', naam: 'Dronten', inwoners: 42000, aanrijtijd: '45 min' },
      { id: 'emmeloord', naam: 'Emmeloord', inwoners: 26000, aanrijtijd: '50 min' },
      { id: 'urk', naam: 'Urk', inwoners: 21000, aanrijtijd: '55 min' },
      { id: 'zeewolde', naam: 'Zeewolde', inwoners: 23000, aanrijtijd: '40 min' },
      { id: 'swifterbant', naam: 'Swifterbant', inwoners: 7000, aanrijtijd: '45 min' },
      { id: 'biddinghuizen', naam: 'Biddinghuizen', inwoners: 5000, aanrijtijd: '45 min' },
      { id: 'nagele', naam: 'Nagele', inwoners: 3000, aanrijtijd: '50 min' },
      { id: 'tollebeek', naam: 'Tollebeek', inwoners: 1500, aanrijtijd: '50 min' }
    ]
  },
  
  {
    id: 'zeeland',
    naam: 'Zeeland',
    aanrijtijd: '50-80 min',
    steden: [
      { id: 'middelburg', naam: 'Middelburg', inwoners: 48000, aanrijtijd: '60 min', populair: true },
      { id: 'vlissingen', naam: 'Vlissingen', inwoners: 44000, aanrijtijd: '65 min', populair: true },
      { id: 'terneuzen', naam: 'Terneuzen', inwoners: 54000, aanrijtijd: '70 min' },
      { id: 'goes', naam: 'Goes', inwoners: 38000, aanrijtijd: '55 min' },
      { id: 'zierikzee', naam: 'Zierikzee', inwoners: 11000, aanrijtijd: '60 min' },
      { id: 'hulst', naam: 'Hulst', inwoners: 27000, aanrijtijd: '75 min' },
      { id: 'sluis', naam: 'Sluis', inwoners: 23000, aanrijtijd: '80 min' },
      { id: 'kapelle', naam: 'Kapelle', inwoners: 13000, aanrijtijd: '60 min' },
      { id: 'reimerswaal', naam: 'Reimerswaal', inwoners: 23000, aanrijtijd: '55 min' },
      { id: 'borsele', naam: 'Borsele', inwoners: 23000, aanrijtijd: '65 min' }
    ]
  },
  
  {
    id: 'limburg',
    naam: 'Limburg',
    aanrijtijd: '60-90 min',
    steden: [
      { id: 'maastricht', naam: 'Maastricht', inwoners: 121000, aanrijtijd: '70 min', populair: true },
      { id: 'heerlen', naam: 'Heerlen', inwoners: 87000, aanrijtijd: '75 min', populair: true },
      { id: 'sittard-geleen', naam: 'Sittard-Geleen', inwoners: 92000, aanrijtijd: '75 min' },
      { id: 'venlo', naam: 'Venlo', inwoners: 102000, aanrijtijd: '65 min' },
      { id: 'roermond', naam: 'Roermond', inwoners: 58000, aanrijtijd: '60 min' },
      { id: 'kerkrade', naam: 'Kerkrade', inwoners: 45000, aanrijtijd: '80 min' },
      { id: 'brunssum', naam: 'Brunssum', inwoners: 28000, aanrijtijd: '80 min' },
      { id: 'landgraaf', naam: 'Landgraaf', inwoners: 37000, aanrijtijd: '80 min' },
      { id: 'weert', naam: 'Weert', inwoners: 50000, aanrijtijd: '65 min' },
      { id: 'valkenburg', naam: 'Valkenburg', inwoners: 16000, aanrijtijd: '75 min' },
      { id: 'simpelveld', naam: 'Simpelveld', inwoners: 11000, aanrijtijd: '80 min' },
      { id: 'gulpen-wittem', naam: 'Gulpen-Wittem', inwoners: 14000, aanrijtijd: '80 min' },
      { id: 'vaals', naam: 'Vaals', inwoners: 10000, aanrijtijd: '85 min' },
      { id: 'meerssen', naam: 'Meerssen', inwoners: 19000, aanrijtijd: '75 min' },
      { id: 'eijsden-margraten', naam: 'Eijsden-Margraten', inwoners: 26000, aanrijtijd: '80 min' },
      { id: 'stein', naam: 'Stein', inwoners: 25000, aanrijtijd: '75 min' },
      { id: 'beek', naam: 'Beek', inwoners: 16000, aanrijtijd: '75 min' },
      { id: 'nuth', naam: 'Nuth', inwoners: 15000, aanrijtijd: '80 min' },
      { id: 'schinnen', naam: 'Schinnen', inwoners: 13000, aanrijtijd: '80 min' },
      { id: 'onderbanken', naam: 'Onderbanken', inwoners: 8000, aanrijtijd: '80 min' }
    ]
  }
];

// Bereken totaal aantal pagina's
const totalDiensten = diensten.length;
const totalProvincies = provincies.length;
const totalSteden = provincies.reduce((sum, provincie) => sum + provincie.steden.length, 0);
const totalPaginas = totalDiensten * totalSteden;

console.log(`Totaal: ${totalDiensten} diensten × ${totalSteden} steden = ${totalPaginas} pagina's`);

module.exports = {
  diensten,
  provincies,
  stats: {
    totalDiensten,
    totalProvincies,
    totalSteden,
    totalPaginas
  }
};

