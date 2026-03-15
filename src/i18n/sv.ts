const sv = {
  translation: {
    nav: {
      home: "Hem",
      projects: "Projekt",
      services: "Tjänster",
      news: "Nyheter",
      about: "Om oss",
      contact: "Kontakt",
    },
    hero: {
      title: "Digitala upplevelser som definierar ditt varumärke",
      description:
        'Du har en vision. Vi har den kreativa och tekniska kompetensen att förverkliga den. Från minsta detalj ("Pixel") till det största systemet ("Plattform") bygger vi skalbara webb- och mobilappar, skapar kraftfulla varumärkesidentiteter och levererar fantastisk grafisk design som verkligen sticker ut.',
      cta: "Låt oss bygga det",
      images: {
        webApps: "Webbappar",
        graphicDesigning: "Grafisk design",
        mobileApps: "Mobilappar",
        uxDesign: "UX-design",
        itSupport: "IT-support & molntjänster",
      },
    },
    services: {
      title: "Vad vi erbjuder",
      description:
        "Vi samarbetar med företag som ditt för att designa, bygga och hantera högpresterande webbplatser, mobilappar och IT-system – allt skräddarsytt för att hjälpa dig växa.",
      pageTitle: "Det vi gör bäst",
      pageDescription:
        "Vi erbjuder kompletta digitala lösningar från varumärkesidentitet och professionell UI/UX-design till säker molnhantering som gör din väg till tillväxt tydlig och effektiv.",
      cta: "Låt oss diskutera",
      items: [
        {
          title: "Mobilappsutveckling",
          subtitle: "iOS & Android-excellens",
          price: "från 4 999 SEK",
          shortDescription:
            "Förvandla din vision till en felfri mobilapp. Vi bygger snabba och pålitliga applikationer för både iPhone och Android.",
          longDescription:
            "Vi designar och utvecklar högpresterande mobilapplikationer för iOS och Android. Från koncept till lansering ser vårt team till att din app är snabb, intuitiv och byggd för att skala.",
          details: [
            "Plattformsoberoende utveckling: Bygg en gång, distribuera överallt med React Native eller Flutter.",
            "Nativ prestanda: Optimerad för hastighet och smidig användarupplevelse.",
            "App Store-lansering: Vi hanterar inlämningar och regelefterlevnad för båda butikerna.",
            "Löpande support: Underhåll och funktionsuppdateringar efter lansering.",
          ],
        },
        {
          title: "Webbutveckling",
          subtitle: "Moderna & skalbara webbplatser",
          price: "från 3 800 SEK",
          shortDescription:
            "Snygga webbplatser och kraftfulla webbappar som driver leads och håller igång din verksamhet dygnet runt.",
          longDescription:
            "Från landningssidor till komplexa webbapplikationer bygger vi responsiva, SEO-optimerade webbplatser som omvandlar besökare till kunder.",
          details: [
            "Skräddarsydd utveckling: Anpassade lösningar byggda med moderna ramverk.",
            "SEO-optimerat: Inbyggda bästa praxis för synlighet i sökmotorer.",
            "Responsiv design: Pixelperfekt på alla enheter och skärmstorlekar.",
            "Prestanda först: Blixtsnabba laddningstider och Core Web Vitals.",
          ],
        },
        {
          title: "Varumärkesidentitet",
          subtitle: "Stick ut ur mängden",
          price: "från 499 SEK/timme",
          shortDescription:
            "Sluta smälta in i mängden. Vi hjälper dig att hitta ditt unika uttryck – logotyp, färger och en plan som gör att folk minns dig.",
          longDescription:
            "Ditt varumärke är mer än en logotyp. Vi skapar sammanhängande visuella identiteter som kommunicerar dina värderingar och resonerar med din målgrupp.",
          details: [
            "Logotypdesign: Minnesvärda märken som fångar ditt varumärkes essens.",
            "Varumärkesriktlinjer: Kompletta stilguider för konsekvent kommunikation.",
            "Färg & typografi: Strategiskt palett- och typsnittsval.",
            "Varumärkesstrategi: Positionering och budskap som når fram.",
          ],
        },
        {
          title: "UI/UX & Grafisk Design",
          subtitle: "Design som glädjer användare",
          price: "från 2 999 SEK",
          shortDescription:
            "Vi skapar intuitiva och snygga designer som användare älskar. Från appar till marknadsföringsmaterial som engagerar.",
          longDescription:
            "Bra design är osynlig – den bara fungerar. Vi skapar intuitiva gränssnitt och fantastiska visuella upplevelser som gör dina användare nöjda och dina siffror stiger.",
          details: [
            "Användarforskning: Datadrivna designbeslut baserade på verkligt användarbeteende.",
            "Wireframing & prototyper: Interaktiva prototyper före utveckling.",
            "Visuell design: Pixelperfekta gränssnitt som inspirerar förtroende.",
            "Marknadsföringsmaterial: Tryckt och digitalt material som konverterar.",
          ],
        },
        {
          title: "E-handel & Butikshantering",
          subtitle: "Sälj smartare online",
          price: "från 5 999 SEK",
          shortDescription:
            "Lansera din onlinebutik med högkonverterande lösningar i Shopify & WooCommerce. Enkel lagerhantering och säkra betalningar.",
          longDescription:
            "Vi bygger och hanterar onlinebutiker som driver intäkter. Från produktkonfiguration till betalningsintegration hanterar vi de tekniska detaljerna så att du kan fokusera på att sälja.",
          details: [
            "Plattformsuppsättning: Shopify, WooCommerce eller skräddarsydda lösningar.",
            "Betalningsintegration: Säker utcheckning med flera betalningsalternativ.",
            "Lagerhantering: Automatiserad lagerspårning och orderhantering.",
            "Konverteringsoptimering: A/B-testning och analys för tillväxt.",
          ],
        },
        {
          title: "IT-support & Molntjänster",
          subtitle: "Pålitlig teknik, noll stress",
          price: "från 299 SEK/månad",
          shortDescription:
            "Låt oss ta hand om tekniken. Vi hanterar säkerhet och molnhosting dygnet runt så att du kan fokusera på att driva ditt företag.",
          longDescription:
            "Teknologi ska stärka din verksamhet, inte bromsa den. Vi erbjuder proaktiv IT-support och molntjänster för att hålla din verksamhet igång smidigt.",
          details: [
            "Dygnet runt-övervakning: Säkerhets- och driftsövervakning dygnet runt.",
            "Molnhosting: Skalbar infrastruktur som växer med dig.",
            "Datasäkerhetskopiering: Automatiserade säkerhetskopior och katastrofåterställningsplaner.",
            "Teknikrådgivning: Strategisk vägledning för din teknikstack.",
          ],
        },
      ],
    },
    clients: {
      heading: "En portfölj definierad av kvalitet, inte skala",
      description: "Vi har haft förmånen att arbeta med några av de mest innovativa företagen",
    },
    portfolioGrid: {
      heading: "Upptäck vårt arbete",
      description: "Där idéer tar form och innovation blir verklighet.",
      cta: "Utforska mer",
    },
    footer: {
      heading: "LÅT OSS GÖRA\nDET MÖJLIGT.",
      socialMedia: "Sociala medier",
      contact: "Kontakt",
      copyright: "©2025 irozon. Alla rättigheter förbehållna.",
      orgNumber: "Organisationsnummer: 5595535658",
      marquee:
        "Mobilappar • iOS & Android-appar • Skräddarsydda webbplatser • Webbutveckling • Varumärkesidentitet • UI/UX-design • Shopify & WooCommerce • Bygg för att skala • Kod & färgfusion",
    },
    contact: {
      title: "Kontakta oss",
      description:
        "Låt oss förvandla din vision till digital verklighet. Oavsett om du har ett specifikt projekt redo eller bara vill utforska möjligheter, hör gärna av dig. Skicka ett snabbt meddelande – vi svarar alltid snabbt!",
      form: {
        name: "Namn",
        email: "E-post",
        subject: "Ämne",
        message: "Meddelande",
        placeholderName: "Ditt namn",
        placeholderEmail: "din.epost@exempel.se",
        placeholderSubject: "Hur kan vi hjälpa till?",
        placeholderMessage: "Berätta mer om ditt projekt...",
        send: "Skicka meddelande",
        sending: "Skickar...",
      },
      info: {
        title: "Kontaktinformation",
        email: "E-post",
        phone: "Telefon",
        location: "Plats",
        locationValue: "Stockholm, Sverige",
      },
      hours: {
        title: "Öppettider",
        weekdays: "Måndag - Fredag: 09:00 - 18:00",
        weekend: "Lördag - Söndag: Stängt",
      },
    },
    projects: {
      title: "Utvalda Projekt",
      description:
        "Vacker design. Iögonfallande interaktioner. Utveckling som levererar. Vi tror att kvalitet talar för sig själv. Utforska projekten där vi hjälpte våra klienter att uppnå verklig, mätbar framgång.",
      viewProject: "Visa projekt",
      visitSite: "Besök webbplats",
      filterAll: "Alla projekt",
      categories: {
        web: "Webbutveckling",
        mobile: "Mobilappar",
        design: "UI/UX Design",
      },
    },
    about: {
      helmet: {
        title: "Om irozon - Vår historia, vision och värderingar",
        description:
          "Upptäck historien bakom irozon och vårt uppdrag att skapa kraftfulla digitala upplevelser.",
      },
      hero: {
        title: "Om Oss",
        description:
          "Där design möter teknologi. Där kreativ vision möter teknisk excellens. Vi är irozon, din partner i att bygga digitala upplevelser som definierar ditt varumärke och driver verklig tillväxt.",
      },
      origin: {
        title: "Historien om irozon",
        subtitle: "Där Design Möter Teknologi",
        p1: "irozon började med en enkel idé: de bästa digitala upplevelserna skapas där kreativitet och ingenjörskonst möts. Vi ville ha ett namn som fångade båda världarna – något visuellt uttrycksfullt, men samtidigt strukturerat och målmedvetet.",
        japanese: {
          label: "Från japanskan,",
          text: "tog vi iro (いろ) — som betyder färg. Det representerar fantasi, design och den emotionella dimensionen av varje visuell upplevelse.",
        },
        greek: {
          label: "Från grekiskan,",
          text: "hämtade vi inspiration från zoni (ζώνη) — som betyder zon. Det symboliserar utrymme, struktur och de tekniska ramverken som gör bra idéer möjliga.",
        },
        conclusion:
          "Vi slog samman dessa koncept och förfinade dem till något som kändes helt rätt:",
      },
      values: {
        title: "Våra Värderingar",
        subtitle: "Principerna bakom varje pixel och varje rad kod",
        items: [
          {
            title: "Design med syfte",
            description:
              "Varje färg och varje interaktion tjänar ett syfte. Vi skapar inte bara för estetik – vi designar för effekt.",
          },
          {
            title: "Byggt för att hålla",
            description:
              "Vackra gränssnitt förtjänar solida grunder. Vi skapar upplevelser som är lika robusta i sin teknik som de är eleganta i sin design.",
          },
          {
            title: "Partnerskap före löften",
            description:
              "Ingen jargong. Vi tror på ärliga samtal, transparenta processer och resultat som talar för sig själva.",
          },
        ],
      },
      mission: {
        title: "Vårt Uppdrag",
        p1: "Vi anser att varje växande företag förtjänar tillgång till exceptionellt digitalt hantverk. Vårt uppdrag är att överbrygga klyftan mellan ambitiös vision och teknisk verklighet.",
        p2: "Oavsett om du börjar från noll eller är redo att skala upp, är vi med dig från koncept till lansering. Inget fluff, bara genomtänkt design och lösningar som driver verkliga resultat.",
      },
      cta: {
        title: "Redo att bygga något extraordinärt?",
        subtitle:
          "Du kommer med visionen. Vi står för hantverket. Låt oss skapa något som fungerar.",
        button: "Låt oss förverkliga det",
      },
    },
  },
};

export default sv;
