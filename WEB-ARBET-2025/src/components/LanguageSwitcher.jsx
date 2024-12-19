import React from "react";
import { useLanguage } from "../../src/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { switchLanguage, currentLang } = useLanguage();

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">Zvoľ jazyk:</label>
      <select
        id="language-select"
        value={currentLang}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        <option value="SK">Slovenský</option>
        <option value="EN">English</option>
        <option value="PL">Polski</option>
        <option value="NL">Nederlands</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
