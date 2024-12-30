import React from "react";
import { useLanguage } from "../../src/LanguageContext";

// import komponentov
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";


const Home = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <Slideshow/>
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
      <Footer/>
    </div>
  );
};

export default Home;


  