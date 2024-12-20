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
                <Link to="/"> {lang[currentLang]["nav-home"]}</Link>
            </li>
            <li>
                <Link to="/buildings">  {lang[currentLang]["nav-buildings"]}</Link>
            </li>
            <li>
            <Link to="/projects">  {lang[currentLang]["nav-projects"]}</Link>
            
             
            </li>
            <li>
                <Link to="/about">  {lang[currentLang]["nav-about"]}</Link>
            </li>
            <li>
            <Link to="/contact">  {lang[currentLang]["nav-contact"]}</Link>
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
