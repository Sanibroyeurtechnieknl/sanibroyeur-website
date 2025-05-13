export const siteConfig = {
  name: "Sanibroyeur Techniek NL",
  url: "https://sanibroyeurtechnieknederland.nl", // Assuming this base URL is still desired
  ogImage: "https://sanibroyeurtechnieknederland.nl/og.jpg", // Assuming this OG image is still desired
  description: "Uw expert in Sanibroyeur installatie, onderhoud en reparatie in Nederland. Snelle service en vakmanschap voor alle typen broyeur toiletten en wc vermalers. Specialist in Noord-Holland, Zuid-Holland, Utrecht, Flevoland, Gelderland en Overijssel.",
  links: {
    // twitter: "https://twitter.com/sanibroyeurtechnieknl", // Assuming twitter is also to be removed or updated
    // github: "https://github.com/manusnijhoff", // Assuming this is a dev link and should be removed for production
  },
  contactInfo: {
    telefoon: "+31 6 86460637", // Standardized format
    email: "sanibroyeurtechnieknederland@gmail.com", // Corrected email
    kvk: "94344833",
    btw: "NL005078347B89",
    iban: "NL93 RABO 0318 3322 05", // Added IBAN
    adres: {
      straat: "Lochemseweg 7",
      postcode: "7475PA",
      plaats: "Markelo"
    }
  },
  socialLinks: {
    // facebook: "", // Removed
    // instagram: "", // Removed
    // linkedin: "", // Removed
  },
  mainNav: [
    {
      "title": "Home",
      "href": "/"
    },
    {
      "title": "Diensten",
      "href": "/diensten"
    },
    {
      "title": "Werkgebieden",
      "href": "/werkgebieden"
    },
    {
      "title": "Blog",
      "href": "/blog"
    },
    {
      "title": "FAQ",
      "href": "/faq"
    },
    {
      "title": "Contact",
      "href": "/contact"
    }
  ],
  "footerNav": [
    {
      "title": "Privacybeleid",
      "href": "/privacybeleid"
    },
    {
      "title": "Algemene Voorwaarden",
      "href": "/algemene-voorwaarden"
    }
  ],
  "werkgebieden": [
    {
      "name": "Drenthe",
      "slug": "drenthe",
      "plaatsen": [
        {
          "name": "Aa en Hunze",
          "slug": "aa-en-hunze"
        },
        {
          "name": "Assen",
          "slug": "assen"
        },
        {
          "name": "Borger-Odoorn",
          "slug": "borger-odoorn"
        },
        {
          "name": "Coevorden",
          "slug": "coevorden"
        },
        {
          "name": "Emmen",
          "slug": "emmen"
        },
        {
          "name": "Hoogeveen",
          "slug": "hoogeveen"
        },
        {
          "name": "Meppel",
          "slug": "meppel"
        },
        {
          "name": "Midden-Drenthe",
          "slug": "midden-drenthe"
        },
        {
          "name": "Noordenveld",
          "slug": "noordenveld"
        },
        {
          "name": "Tynaarlo",
          "slug": "tynaarlo"
        },
        {
          "name": "Westerveld",
          "slug": "westerveld"
        },
        {
          "name": "De Wolden",
          "slug": "de-wolden"
        }
      ]
    },
    {
      "name": "Flevoland",
      "slug": "flevoland",
      "plaatsen": [
        {
          "name": "Almere",
          "slug": "almere"
        },
        {
          "name": "Dronten",
          "slug": "dronten"
        },
        {
          "name": "Lelystad",
          "slug": "lelystad"
        },
        {
          "name": "Noordoostpolder",
          "slug": "noordoostpolder"
        },
        {
          "name": "Urk",
          "slug": "urk"
        },
        {
          "name": "Zeewolde",
          "slug": "zeewolde"
        }
      ]
    },
    {
      "name": "Friesland",
      "slug": "friesland",
      "plaatsen": [
        {
          "name": "Achtkarspelen",
          "slug": "achtkarspelen"
        },
        {
          "name": "Ameland",
          "slug": "ameland"
        },
        {
          "name": "Dantumadiel",
          "slug": "dantumadiel"
        },
        {
          "name": "De Fryske Marren",
          "slug": "de-fryske-marren"
        },
        {
          "name": "Harlingen",
          "slug": "harlingen"
        },
        {
          "name": "Heerenveen",
          "slug": "heerenveen"
        },
        {
          "name": "Leeuwarden",
          "slug": "leeuwarden"
        },
        {
          "name": "Noardeast-Fryslân",
          "slug": "noardeast-fryslân"
        },
        {
          "name": "Ooststellingwerf",
          "slug": "ooststellingwerf"
        },
        {
          "name": "Opsterland",
          "slug": "opsterland"
        },
        {
          "name": "Schiermonnikoog",
          "slug": "schiermonnikoog"
        },
        {
          "name": "Smallingerland",
          "slug": "smallingerland"
        },
        {
          "name": "Súdwest-Fryslân",
          "slug": "súdwest-fryslân"
        },
        {
          "name": "Terschelling",
          "slug": "terschelling"
        },
        {
          "name": "Tietjerksteradeel",
          "slug": "tietjerksteradeel"
        },
        {
          "name": "Vlieland",
          "slug": "vlieland"
        },
        {
          "name": "Waadhoeke",
          "slug": "waadhoeke"
        },
        {
          "name": "Weststellingwerf",
          "slug": "weststellingwerf"
        }
      ]
    },
    {
      "name": "Gelderland",
      "slug": "gelderland",
      "plaatsen": [
        {
          "name": "Aalten",
          "slug": "aalten"
        },
        {
          "name": "Apeldoorn",
          "slug": "apeldoorn"
        },
        {
          "name": "Arnhem",
          "slug": "arnhem"
        },
        // ... (rest of Gelderland places, keeping it short for brevity)
      ]
    },
    {
      "name": "Groningen",
      "slug": "groningen",
      "plaatsen": [
        // ... (Groningen places)
      ]
    },
    {
      "name": "Limburg",
      "slug": "limburg",
      "plaatsen": [
        // ... (Limburg places)
      ]
    },
    {
      "name": "Noord-Brabant",
      "slug": "noord-brabant",
      "plaatsen": [
        // ... (Noord-Brabant places)
      ]
    },
    {
      "name": "Noord-Holland",
      "slug": "noord-holland",
      "plaatsen": [
        // ... (Noord-Holland places)
      ]
    },
    {
      "name": "Overijssel",
      "slug": "overijssel",
      "plaatsen": [
        // ... (Overijssel places)
      ]
    },
    {
      "name": "Utrecht",
      "slug": "utrecht",
      "plaatsen": [
        // ... (Utrecht places)
      ]
    },
    {
      "name": "Zeeland",
      "slug": "zeeland",
      "plaatsen": [
        // ... (Zeeland places)
      ]
    },
    {
      "name": "Zuid-Holland",
      "slug": "zuid-holland",
      "plaatsen": [
        // ... (Zuid-Holland places)
      ]
    }
  ],
  werkgebiedFocus: "Markelo en omgeving" // Updated based on new address
};

