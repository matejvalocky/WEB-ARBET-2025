import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const About = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-about"]}</h1> {/* Dynamický nadpis pre "O nás" */}
      <p>
        {currentLang === "SK" &&
          "Toto je stránka, kde sa dozviete viac o našej spoločnosti a jej histórii."}
        {currentLang === "EN" &&
          "This is a page where you can learn more about our company and its history."}
        {currentLang === "PL" &&
          "To strona, na której dowiesz się więcej o naszej firmie i jej historii."}
        {currentLang === "NL" &&
          "Dit is een pagina waar je meer kunt leren over ons bedrijf en onze geschiedenis."}
      </p>
    </div>
  );
};

export default About;

