import React, { createContext, useState, useContext } from "react";
import lang from "../src/lang";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("SK");

  const switchLanguage = (language) => {
    setCurrentLang(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
