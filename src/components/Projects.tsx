import easyplay from "../assets/projects/easyplay.png";
import msextension from "../assets/projects/msextension.png";
import msscraper from "../assets/projects/msscraper.png";
import keyscraper from "../assets/projects/keyscraper.png";
import chatlogs from "../assets/projects/chatlogs.png";
import dashboard from "../assets/projects/dashboard.png";
import firebase from "../assets/skills/firebase.png";
import nextjs from "../assets/skills/nextjs.png";
import python from "../assets/skills/python.png";
import reactjs from "../assets/skills/reactjs.png";
import mongodb from "../assets/skills/mongodb.png";
import javascript from "../assets/skills/javascript.png";
import figma from "../assets/skills/figma.png";

const projects = [
  {
    name: "Bachelor Prosjekt",
    tools: [firebase, nextjs],
    image: easyplay,
    description:
      "Vi utviklet et intuitivt dashboard som gir baneadministratorer full oversikt over baneutnyttelsen. Ved hjelp av avansert algoritme og klare visualiseringer, som stolpediagrammer og tabeller, får brukerne raskt innsikt i aktivitetsdata. Designet er optimalisert for enkel navigasjon og følger EasyPlays visuelle identitet. Målet vårt var å skape et brukervennlig verktøy som forenkler administrasjonen og gir datadrevet beslutningsgrunnlag.",
    challenges: [
      "Å utvikle en algoritme for å beregne faktisk baneutnyttelse basert på areal, tid og tilgjengelighet.",
      "Å visualisere dataene på en måte som var både informativ, men samtidig ikke vise for mye data på en gang.",
      "Å sikre at dashbordet var intuitivt for brukere med varierende teknisk kompetanse var viktig.",
    ],
  },
  {
    name: "Database over alle spillere",
    tools: [javascript, python],
    image: msscraper,
    description:
      "Jeg utviklet en Python-basert webskraper hvor jeg kunne definere spesifikke kriterier for å samle inn data. Skriptet gikk systematisk gjennom alle registrerte brukere på mafiaspillet.no, formaterte informasjonen på en ryddig måte og lastet den automatisk opp til en GitHub-repository. For å visualisere dataene, opprettet jeg en nettside som hentet informasjonen direkte fra GitHub og presenterte den på en brukervennlig måte.",
    challenges: [
      "Jeg brukte mest tid på å finne ut hvordan jeg kunne identifisere alle registrerte brukere. Etter mye undersøkelser og analyser av nettverkstrafikken oppdaget jeg at når nettsiden oppdateres, blir det sendt en GET-forespørsel som returnerer en liste over alle brukernavn i ren tekst. Til slutt automatiserte jeg prosessen ved å hente denne listen direkte, og lot programmet gå gjennom hver enkelt profil for å samle inn den nødvendige informasjonen.",
    ],
    link: "https://scrap-beta.vercel.app/",
    github: "https://github.com/biroman/scraper",
  },
  {
    name: "Dashboard",
    tools: [figma, javascript],
    image: dashboard,
    description:
      "Jeg har utviklet en prototyp for et dashboard som visualiserer omfattende datasett hentet fra en nettside uten tilgjengelig API. Ved å bygge en egen datainnsamlingsløsning basert på web skraping, klarte jeg å samle inn og strukturere dataene før de ble lagret i MongoDB. Det resulterende dashbordet tilbyr en intuitiv og minimalistisk brukergrensesnitt som gjør det enkelt for brukeren å utforske og forstå den innhentede informasjonen.",
    challenges: [
      "Finne en god måten å presentere all data på, slik at det både ble intuitivt for brukerne og unngikk unødvendig visuell støy.",
      "Å utvikle en effektiv web skraping-løsning som kunne håndtere den ønskede datainnsamlingen.",
      "Å designe et minimalistisk grensesnitt som fortsatt formidlet all nødvendig informasjon.",
    ],
    figma:
      "https://www.figma.com/design/t4jakd4vShdmTx2AgvZSuV/Untitled?node-id=0-1&t=afTyfj9rinNLLZkT-1",
  },
  {
    name: "Key Scraper",
    tools: [python],
    image: keyscraper,
    description:
      "Jeg har utviklet en Python-basert bot som kontinuerlig skanner opptil 20 Twitch-chat'er og nye Reddit-innlegg for å identifisere produktnøkler til spillet Path Of Exile 2. Ved å bruke avanserte tekstbehandlingsteknikker, oppdager boten potensielle nøkler i sanntid. Når en nøkkel er funnet, forsøker boten umiddelbart å innløse den. Ved mislykkede innløsninger logger boten feilen og fortsetter søket. Boten er designet for å være robust og effektiv.",
    challenges: [
      "Å automatisere innløsningsprosessen med bruk av cookies og session-ID.",
      "Å sikre at boten kunne håndtere ulike formater og plasseringer av produktnøkler i tekst.",
      "Å filtrere ut Reddit poster som mest sannsynlig ikke ville inneholde nøkler",
      "Å opprettholde høy ytelse og stabilitet i boten var viktig for å sikre kontinuerlig søk etter nøkler.",
    ],
  },
  {
    name: "Chat Logs",
    tools: [reactjs, mongodb],
    image: chatlogs,
    description:
      "Jeg utviklet en nettside der brukere kunne søke opp brukernavnene sine og se alle meldingene de hadde sendt i chatten til en spesifikk live streamer. Funksjonaliteten inkluderte støtte for emotes, brukerns personlige brukernavnfarger, emotes, dato-valg og en tydelig indikasjon på hvilke meldinger som var svar ('replies') til andre. Målet mitt var å skape en visuelt pen meldingslogg som gjenskaper følelsen av Twitch-chat. Dette skulle gjøre det enkelt for brukerne å forstå og navigere i loggene sine.",
    challenges: [
      "Å håndtere datainnsamling med 15-40 meldinger per sekund i sanntid og lagre over én million meldinger effektivt i databasen.",
      "Å integrere emotes fra flere tredjepartsleverandører sømløst på tvers av plattformene.",
      "Å gjenskape en tilsvarende Twitch-chat opplevelsen med brukerfarger og chat funksjoner.",
    ],
  },
  {
    name: "Nettleserutvidelse",
    tools: [javascript],
    image: msextension,
    description:
      "Det er et nettleserspill som har et problem der mange innstillinger og informasjon er skjult, og det kan være vanskelig å finne. Denne utvidelsen gjør det lettere ved å hente frem relevant informasjon, slik at du alltid har den lett tilgjengelig. Den er plassert utenfor skjermen, men har en liten indikatorsirkel som du kan klikke på. Når du gjør det, glir informasjonen inn som en sidebar på siden av skjermen.",
  },
];

function Projects() {
  const listProjects = projects.map((project) => (
    <div className="container flex flex-col md:flex-row mt-8 divide-y md:divide-y-0 md:divide-x divide-[#313235]">
      <div className=" w-full p-4 justify-center">
        <img
          className="shadow-xl rounded-lg object-contain mx-auto"
          src={project.image}
          alt={project.name}
          title={project.name}
        />
      </div>
      <div className="flex flex-col md:ml-8 p-4 md:pl-8 justify-center w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <h1 className="font-bold text-2xl md:text-3xl">{project.name}</h1>
          <div className="flex mt-2 md:mt-0">
            {project.tools.map((tool, index) => (
              <img
                className="mr-4 md:ml-4 md:mr-0 h-6 md:h-8 object-contain max-h-[300px]"
                key={index}
                src={tool}
                alt={`Tool ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[#5d5d60]">{project.description}</p>
          {project.challenges ? (
            <p className="font-bold mt-4">Utfordringer</p>
          ) : (
            ""
          )}
          <ul className="list-disc">
            {project.challenges?.map((challenge, index) => (
              <li className="ml-8" key={index}>
                <span className="text-[#5d5d60]">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          {project.link ? (
            <a href={project.link} target="_blank">
              <div className="mt-8 w-32 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group ">
                Åpne nettside
              </div>
            </a>
          ) : (
            ""
          )}

          {project.github ? (
            <a href={project.github} target="_blank">
              <div className="mt-8 w-20 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group ">
                Github
              </div>
            </a>
          ) : (
            ""
          )}

          {project.figma ? (
            <a href={project.figma} target="_blank">
              <div className="mt-8 w-20 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group ">
                Figma
              </div>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  ));
  return <div>{listProjects}</div>;
}

export default Projects;
