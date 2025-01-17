import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    supportedLngs: ["en", "nb"],
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      caches: [],
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

// Log the detected language
i18n.on("initialized", () => {
  console.log("Current language:", i18n.language);
  console.log("Languages:", i18n.languages);
});

export default i18n;
