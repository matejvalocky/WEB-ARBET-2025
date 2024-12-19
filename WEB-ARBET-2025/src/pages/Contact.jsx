import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const Contact = () => {
  const { currentLang, lang } = useLanguage(); // Prístup k aktuálnemu jazyku a textom

  return (
    <div>
      <h1>{lang[currentLang]["nav-contact"]}</h1> {/* Dynamický nadpis pre "Kontakt" */}
      <p>
        {currentLang === "SK" &&
          "Toto je stránka s kontaktnými informáciami. Môžete nás kontaktovať cez email alebo telefonicky."}
        {currentLang === "EN" &&
          "This is a contact page. You can reach us via email or phone."}
        {currentLang === "PL" &&
          "To strona kontaktowa. Możesz się z nami skontaktować za pośrednictwem e-maila lub telefonu."}
        {currentLang === "NL" &&
          "Dit is een contactpagina. Je kunt ons bereiken via e-mail of telefoon."}
      </p>
    </div>
  );
};

export default Contact;

