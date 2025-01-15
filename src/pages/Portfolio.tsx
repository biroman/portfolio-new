import Projects from "../components/Projects";

function Portfolio(): JSX.Element {
  return (
    <div className="container flex ml-4 mt-4 h-full flex-col">
      <span className="text-5xl font-black">Noen av mine Prosjekter</span>
      <Projects />
    </div>
  );
}

export default Portfolio;
