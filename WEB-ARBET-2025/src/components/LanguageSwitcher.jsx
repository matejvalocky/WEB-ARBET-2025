import React from "react";
import { useLanguage } from "../../src/LanguageContext";

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage("SK")}>SK</button>
      <button onClick={() => switchLanguage("EN")}>EN</button>
      <button onClick={() => switchLanguage("PL")}>PL</button>
      <button onClick={() => switchLanguage("NL")}>NL</button>
    </div>
  );
};

export default LanguageSwitcher;
