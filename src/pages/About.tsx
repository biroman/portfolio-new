import Skills from "../components/Skills";
import "../il8n";
import { useTranslation } from "react-i18next";

function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="container flex ml-4 mt-4 h-full flex-col">
      <div className="grow">
        {" "}
        <h1>
          <span className="text-3xl font-extralight">{t("about.title1")}</span>{" "}
          <span className="text-6xl font-black">Eivind Buodd</span>
        </h1>
        <h1 className="text-3xl font-extralight">{t("about.title2")}</h1>
        <div className="container max-w-screen-lg mt-4">
          {" "}
          <p className="mb-3">{t("about.description")}</p>
        </div>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-black">{t("about.skills")}</span>
        <Skills />
      </div>
    </div>
  );
}

export default About;
