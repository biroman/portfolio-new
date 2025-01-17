import Projects from "../components/Projects";
import { useTranslation } from "react-i18next";

function Portfolio(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="container flex mt-4 h-full flex-col">
      <span className="text-5xl font-black">{t("projects.title")}</span>
      <Projects />
    </div>
  );
}

export default Portfolio;
