import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const Projects = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-projects"]}</h1> {/* Dynamický nadpis pre "Projekty" */}
      <p>
        {currentLang === "SK" &&
          "Toto je stránka s informáciami o našich projektoch."}
        {currentLang === "EN" &&
          "This is a page with information about our projects."}
        {currentLang === "PL" &&
          "To strona z informacjami o naszych projektach."}
        {currentLang === "NL" &&
          "Dit is een pagina met informatie over onze projecten."}
      </p>
    </div>
  );
};

export default Projects;

