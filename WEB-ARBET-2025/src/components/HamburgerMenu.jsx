import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../src/LanguageContext";
import "./HamburgerMenu.css";
import "./HamburgerMenuMediaQueries.css";

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
              <Link to="/buildings"> {lang[currentLang]["nav-buildings"]}</Link>
            </li>
            <li>
              <Link to="/projects"> {lang[currentLang]["nav-projects"]}</Link>
            </li>
            <li>
              <Link to="/about"> {lang[currentLang]["nav-about"]}</Link>
            </li>
            <li>
              <Link to="/products"> {lang[currentLang]["nav-products"]}</Link>
            </li>
            <li>
              <Link to="/contact"> {lang[currentLang]["nav-contact"]}</Link>
            </li>
          </ul>
        </div>
      </div>

      <button
        id="toggle"
        className={`menu ${isOpen ?  "" : "opened"}`}
        onClick={menuToggle}
        aria-label="Main Menu"
        aria-expanded={isOpen}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </>
  );
};

export default HamburgerMenu;
