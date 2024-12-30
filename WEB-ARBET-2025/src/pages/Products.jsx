import React from "react";
import { useLanguage } from "../../src/LanguageContext";

import Footer from "../components/Footer";

const Products = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-products"]}</h1> {/* Dynamický nadpis pre "Produkty" */}
      <p>
        {currentLang === "SK" &&
          "Toto je stránka, kde sú produkty SK"}
        {currentLang === "EN" &&
          "Toto je stránka, kde sú produkty EN" }
        {currentLang === "PL" &&
          "Toto je stránka, kde sú produkty PL"}
        {currentLang === "NL" &&
          "Toto je stránka, kde sú produkty NL"}
      </p>
      <Footer/>
    </div>
  );
};

export default Products
