import Skills from "../components/Skills";

function About(): JSX.Element {
  return (
    <div className="container flex ml-4 mt-4 h-full flex-col">
      <div className="grow">
        {" "}
        <h1>
          <span className="text-3xl font-extralight">Jeg er</span>{" "}
          <span className="text-6xl font-black">Eivind Buodd</span>
        </h1>
        <h1 className="text-3xl font-extralight">
          UX Designer & Front-End Utvikler
        </h1>
        <div className="container max-w-screen-lg mt-4">
          {" "}
          <p className="mb-3">
            Jeg er en nyutdannet interaktiv designer med en stor interesse for
            UX-design. Gjennom studiene har jeg fått solid erfaring med reelle
            prosjekter for ulike bedrifter, noe som har gitt meg en god
            forståelse for brukerens behov og designprosessen. Jeg trives med
            utfordrende oppgaver som bidrar til min faglige utvikling og setter
            stor pris på å være en del av et kreativt team.
          </p>
        </div>
      </div>
      <div className="grow">
        <span className="text-4xl font-black">Mine Ferdigheter</span>
        <Skills />
      </div>
    </div>
  );
}

export default About;
