import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const Home = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-home"]}</h1> {/* Dynamický nadpis pre "Domov" */}
      <p>
        {currentLang === "SK" &&
          "Vitajte na našej domovskej stránke! Toto je slovenský obsah."}
        {currentLang === "EN" &&
          "Welcome to our homepage! This is English content."}
        {currentLang === "PL" &&
          "Witamy na naszej stronie głównej! To jest polska treść."}
        {currentLang === "NL" &&
          "Welkom op onze startpagina! Dit is Nederlandse inhoud."}
      </p>
    </div>
  );
};

export default Home;


  