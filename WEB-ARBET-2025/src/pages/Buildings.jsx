import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const Buildings = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-buildings"]}</h1> {/* Dynamický nadpis pre "Stavby" */}
      <p>
        {currentLang === "SK" &&
          "Toto je stránka, ktorá obsahuje informácie o našich stavbách."}
        {currentLang === "EN" &&
          "This is a page containing information about our buildings."}
        {currentLang === "PL" &&
          "To strona zawierająca informacje o naszych budynkach."}
        {currentLang === "NL" &&
          "Dit is een pagina met informatie over onze gebouwen."}
      </p>
    </div>
  );
};

export default Buildings;
