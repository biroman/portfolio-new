import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 flex-col">
      <button
        className={`px-2 py-1 rounded h-8 w-18 ${
          i18n.language === "en" ? "bg-white text-black" : "text-[#5a5a5a]"
        }`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className={`px-2 py-1 rounded h-8 w-18${
          i18n.language === "nb" ? "bg-white text-black" : "text-[#5a5a5a]"
        }`}
        onClick={() => changeLanguage("nb")}
      >
        Norwegian
      </button>
    </div>
  );
};

export default LanguageSwitcher;
