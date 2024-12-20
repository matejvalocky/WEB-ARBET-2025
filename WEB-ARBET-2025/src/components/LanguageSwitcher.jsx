import React from "react";
import { useLanguage } from "../../src/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { switchLanguage, currentLang, lang } = useLanguage();

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">{lang[currentLang].langSelect}:</label>
      <select
        id="language-select"
        value={currentLang}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        <option value="SK">{lang.SK.langSelect}</option>
        <option value="EN">{lang.EN.langSelect}</option>
        <option value="PL">{lang.PL.langSelect}</option>
        <option value="NL">{lang.NL.langSelect}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
