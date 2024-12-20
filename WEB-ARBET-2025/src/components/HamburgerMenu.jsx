import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../src/LanguageContext";
import "./HamburgerMenu.css";
import "./HamburgerMenuMediaQueries.css"



const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { currentLang, lang } = useLanguage();
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fullPageMenu ${isOpen ? "active" : ""}`} id="nav">

        <div className="nav">
          <ul>
            <li>
              <a href="#" data-text={lang[currentLang]["nav-home"]}>
              {lang[currentLang]["nav-home"]}
              </a>
            </li>
            <li>
              <a href="#" data-text= {lang[currentLang]["nav-buildings"]}>
              {lang[currentLang]["nav-buildings"]}
              </a>
            </li>
            <li>
              <a href="#" data-text= {lang[currentLang]["nav-projects"]}>
              {lang[currentLang]["nav-projects"]}
              </a>
            </li>
            <li>
              <a href="#" data-text= {lang[currentLang]["nav-about"]}>
              {lang[currentLang]["nav-about"]}
              </a>
            </li>
            <li>
              <a href="#" data-text= {lang[currentLang]["nav-contact"]}>
              {lang[currentLang]["nav-contact"]}
              </a>
            </li>
  
          </ul>
        </div>
      </div>
      <span
        className={`menuicon ${isOpen ? "active" : ""}`}
        id="toggle"
        onClick={menuToggle}
      ></span>
    </>
  );
};

export default HamburgerMenu;
