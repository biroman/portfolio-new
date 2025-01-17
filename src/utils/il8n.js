import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      no: {
        translation: {
          sidebar: {
            about: "Om",
            portfolio: "Portefølje",
            contact: "Kontakt",
            footer: "GitHub link for denne siden",
          },
          about: {
            title1: "Jeg er ",
            title2: "UX Designer & Front-End Utvikler",
            description:
              "Jeg er en nyutdannet interaktiv designer med en stor interesse for UX-design. Gjennom studiene har jeg fått solid erfaring med reelle prosjekter for ulike bedrifter, noe som har gitt meg en god forståelse for brukerens behov og designprosessen. Jeg trives med utfordrende oppgaver som bidrar til min faglige utvikling og setter stor pris på å være en del av et kreativt team.",
            skills: "Mine Ferdigheter",
          },
          projects: {
            title: "Noen Av Mine Prosjekter",
            viewWebsite: "Åpne nettside",
            challenges: "Utfordringer",
            easyplay: {
              name: "Bachelor Prosjekt",
              description:
                "Vi utviklet et intuitivt dashboard som gir baneadministratorer full oversikt over baneutnyttelsen. Ved hjelp av avansert algoritme og klare visualiseringer, som stolpediagrammer og tabeller, får brukerne raskt innsikt i aktivitetsdata. Designet er optimalisert for enkel navigasjon og følger EasyPlays visuelle identitet. Målet vårt var å skape et brukervennlig verktøy som forenkler administrasjonen og gir datadrevet beslutningsgrunnlag.",
              challenges: [
                "Å utvikle en algoritme for å beregne faktisk baneutnyttelse basert på areal, tid og tilgjengelighet.",
                "Å visualisere dataene på en måte som var både informativ, men samtidig ikke vise for mye data på en gang.",
                "Å sikre at dashbordet var intuitivt for brukere med varierende teknisk kompetanse var viktig.",
              ],
              tools: ["figma", "firebase", "nextjs"],
            },
            msScraper: {
              name: "Database av Alle Spillere",
              description:
                "Jeg utviklet en Python-basert webskraper hvor jeg kunne definere spesifikke kriterier for å samle inn data. Skriptet gikk systematisk gjennom alle registrerte brukere på mafiaspillet.no, formaterte informasjonen på en ryddig måte og lastet den automatisk opp til en GitHub-repository. For å visualisere dataene, opprettet jeg en nettside som hentet informasjonen direkte fra GitHub og presenterte den på en brukervennlig måte.",
              challenges: [
                "Jeg brukte mest tid på å finne ut hvordan jeg kunne identifisere alle registrerte brukere. Etter mye undersøkelser og analyser av nettverkstrafikken oppdaget jeg at når nettsiden oppdateres, blir det sendt en GET-forespørsel som returnerer en liste over alle brukernavn i ren tekst. Til slutt automatiserte jeg prosessen ved å hente denne listen direkte, og lot programmet gå gjennom hver enkelt profil for å samle inn den nødvendige informasjonen.",
              ],
              tools: ["javascript", "python"],
            },
            unity: {
              name: "Goblin Hunter",
              description:
                'Jeg hadde valgfaget "Spilldesign" hvor vi skulle utvikle et spill i Unity, programmert i C#. Sammen med en studiekamerat laget vi et spill inspirert av Vampire Survivor. I spillet beveger du deg rundt, bekjemper monstre, finner nye våpen og levler opp for å bli sterkere.',
              challenges: [
                "Eksporterte animasjoner fra et animasjonsverktøy vi brukte fungerte dårlig i Unity, noe som førte til at vi måtte lage animasjoner via kode, en litt tidkrevende prosess",
                "Manglende kollisjon mellom ulike actors i spillet førte til situasjoner der spillfiguren kunne havne oppå fiender.",
                "Å lage egendefinerte 3D-modeller og teksturer tok lengre tid, men ga oss bedre kontroll over spillets design.",
              ],
              tools: ["csharp"],
            },
            dashboard: {
              name: "Dashboard",
              description:
                "Jeg har utviklet en prototype for et dashboard som visualiserer omfattende datasett hentet fra en nettside uten tilgjengelig API. Ved å bygge en egen datainnsamlingsløsning basert på web skraping, klarte jeg å samle inn og strukturere dataene før de ble lagret i MongoDB. Det resulterende dashbordet tilbyr en intuitiv og minimalistisk brukergrensesnitt som gjør det enkelt for brukeren å utforske og forstå den innhentede informasjonen.",
              challenges: [
                "Finne en god måten å presentere all data på, slik at det både ble intuitivt for brukerne og unngikk unødvendig visuell støy.",
                "Å utvikle en effektiv web skraping-løsning som kunne håndtere den ønskede datainnsamlingen.",
                "Å designe et minimalistisk grensesnitt som fortsatt formidlet all nødvendig informasjon.",
              ],
              tools: ["figma", "javascript"],
            },
            keyScraper: {
              name: "Key Scraper",
              description:
                "Jeg har utviklet en Python-basert bot som kontinuerlig skanner opptil 20 Twitch-chat'er og nye Reddit-innlegg for å identifisere produktnøkler til spillet Path Of Exile 2. Ved å bruke avanserte tekstbehandlingsteknikker, oppdager boten potensielle nøkler i sanntid. Når en nøkkel er funnet, forsøker boten umiddelbart å innløse den. Ved mislykkede innløsninger logger boten feilen og fortsetter søket. Boten er designet for å være robust og effektiv.",
              challenges: [
                "Å automatisere innløsningsprosessen med bruk av cookies og session-ID.",
                "Å sikre at boten kunne håndtere ulike formater og plasseringer av produktnøkler i tekst.",
                "Å filtrere ut Reddit poster som mest sannsynlig ikke ville inneholde nøkler.",
              ],
              tools: ["python", "javascript"],
            },
            chatLogs: {
              name: "Chat Logs",
              description:
                "Jeg utviklet en nettside der brukere kunne søke opp brukernavnene sine og se alle meldingene de hadde sendt i chatten til en spesifikk live streamer. Funksjonaliteten inkluderte støtte for emotes, brukerns personlige brukernavnfarger, emotes, dato-valg og en tydelig indikasjon på hvilke meldinger som var svar ('replies') til andre. Målet mitt var å skape en visuelt pen meldingslogg som gjenskaper følelsen av Twitch-chat. Dette skulle gjøre det enkelt for brukerne å forstå og navigere i loggene sine.",
              challenges: [
                "Å håndtere datainnsamling med 15-40 meldinger per sekund i sanntid og lagre over én million meldinger effektivt i databasen.",
                "Å integrere emotes fra flere tredjepartsleverandører sømløst på tvers av plattformene.",
                "Å gjenskape en tilsvarende Twitch-chat opplevelsen med brukerfarger og chat funksjoner.",
              ],
              tools: ["reactjs", "mongodb"],
            },
            msExtension: {
              name: "Browser Extension",
              description:
                "Det er et nettleserspill som har et problem der mange innstillinger og informasjon er skjult, og det kan være vanskelig å finne. Denne utvidelsen gjør det lettere ved å hente frem relevant informasjon, slik at du alltid har den lett tilgjengelig. Den er plassert utenfor skjermen, men har en liten indikatorpil som du kan klikke på. Når du gjør det, glir informasjonen inn som en sidebar på siden av skjermen.",
              tools: ["javascript"],
            },
          },
        },
      },
      en: {
        translation: {
          sidebar: {
            about: "About",
            portfolio: "Portfolio",
            contact: "Contact",
            footer: "GitHub link for this page",
          },
          about: {
            title1: "I am ",
            title2: "UX Designer & Front-End Developer",
            description:
              "I am a recent graduate interactive designer with a strong interest in UX design. Through my studies, I gained solid experience with real projects for various companies, which gave me a good understanding of user needs and the design process. I enjoy challenging tasks that contribute to my professional development and greatly appreciate being part of a creative team.",
            skills: "My Skills",
          },
          projects: {
            title: "Some of My Projects",
            viewWebsite: "Open Website",
            challenges: "Challenges",
            easyplay: {
              name: "Bachelor Project",
              description:
                "We developed an intuitive dashboard that gives court administrators a complete overview of court utilization. Using an advanced algorithm and clear visualizations such as bar charts and tables, users quickly gain insight into activity data. The design is optimized for easy navigation and follows EasyPlay's visual identity. Our goal was to create a user-friendly tool that simplifies administration and provides data-driven decision-making.",
              challenges: [
                "Developing an algorithm to calculate actual court utilization based on area, time, and availability.",
                "Visualizing the data in a way that was both informative but also did not overwhelm users with too much data at once.",
                "Ensuring that the dashboard was intuitive for users with varying levels of technical expertise.",
              ],
              tools: ["figma", "firebase", "nextjs"],
            },
            msScraper: {
              name: "Database of All Players",
              description:
                "I developed a Python-based web scraper where I could define specific criteria to collect data. The script systematically went through all registered users on mafiaspillet.no, formatted the information in an organized manner, and automatically uploaded it to a GitHub repository. To visualize the data, I created a website that fetched the information directly from GitHub and presented it in a user-friendly way.",
              challenges: [
                "I spent most of the time figuring out how to identify all registered users. After much research and analysis of network traffic, I discovered that when the website updates, a GET request is sent that returns a list of all usernames in plain text. Eventually, I automated the process by fetching this list directly and letting the program go through each profile to collect the necessary information.",
              ],
              tools: ["javascript", "python"],
            },
            unity: {
              name: "Goblin Hunter",
              description:
                'I had the elective course "Game Design" where we were tasked with developing a game in Unity, programmed in C#. Together with a classmate, we created a game inspired by Vampire Survivor. In the game, you move around, fight monsters, find new weapons, and level up to become stronger.',
              challenges: [
                "Exported animations from an animation tool we used worked poorly in Unity, which forced us to create animations via code, a time-consuming process.",
                "Lack of collision between different actors in the game led to situations where the player character could end up on top of enemies.",
                "Creating custom 3D models and textures took longer, but gave us better control over the game's design.",
              ],
              tools: ["csharp"],
            },
            dashboard: {
              name: "Dashboard",
              description:
                "I developed a prototype for a dashboard that visualizes extensive datasets collected from a website without an available API. By building my own data collection solution based on web scraping, I was able to gather and structure the data before storing it in MongoDB. The resulting dashboard offers an intuitive and minimalist user interface that makes it easy for the user to explore and understand the gathered information.",
              challenges: [
                "Finding a good way to present all the data so that it was both intuitive for users and avoided unnecessary visual clutter.",
                "Developing an efficient web scraping solution that could handle the desired data collection.",
                "Designing a minimalist interface that still communicated all the necessary information.",
              ],
              tools: ["figma", "javascript"],
            },
            keyScraper: {
              name: "Key Scraper",
              description:
                "I developed a Python-based bot that continuously scans up to 20 Twitch chats and new Reddit posts to identify product keys for the game Path Of Exile 2. Using advanced text processing techniques, the bot detects potential keys in real-time. When a key is found, the bot immediately attempts to redeem it. If the redemption fails, the bot logs the error and continues the search. The bot is designed to be robust and efficient.",
              challenges: [
                "Automating the redemption process using cookies and session ID.",
                "Ensuring that the bot could handle different formats and placements of product keys in text.",
                "Filtering out Reddit posts that were unlikely to contain keys.",
              ],
              tools: ["python", "javascript"],
            },
            chatLogs: {
              name: "Chat Logs",
              description:
                "I developed a website where users could search for their usernames and see all the messages they had sent in the chat of a specific live streamer. The functionality included support for emotes, users' personal username colors, emotes, date selection, and a clear indication of which messages were replies to others. My goal was to create a visually appealing message log that recreated the feeling of a Twitch chat. This was intended to make it easy for users to understand and navigate their logs.",
              challenges: [
                "Handling data collection with 15-40 messages per second in real-time and efficiently storing over a million messages in the database.",
                "Integrating emotes from multiple third-party providers seamlessly across platforms.",
                "Recreating the Twitch chat experience with user colors and chat features.",
              ],
              tools: ["reactjs", "mongodb"],
            },
            msExtension: {
              name: "Browser Extension",
              description:
                "It is a browser game that has a problem where many settings and information are hidden, making it difficult to find. This extension makes it easier by retrieving relevant information so that you always have it readily available. It is placed off-screen but has a small indicator arrow that you can click. When you do, the information slides in as a sidebar on the side of the screen.",
              tools: ["javascript"],
            },
          },
        },
      },
    },
  });

export default i18n;
