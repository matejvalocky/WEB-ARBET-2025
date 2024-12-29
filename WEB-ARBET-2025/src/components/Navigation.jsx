import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "./NavigationQueries.css"
import logo from "../assets/nav-logo.avif";
import { useLanguage } from "../../src/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const { currentLang, lang } = useLanguage();



  
  // táto funkcia je použitá aj v HamburgerMenu komponente, teda je tu 2x
  const closeMenu = () => {
    setIsOpen(true);
  };

  return (
    <nav className="navbar box-shadow">
      <div className="nav-wrapper">
      <NavLink to="/" onClick={closeMenu}> <img src={logo} className="main-logo" alt="Logo" /></NavLink>
       
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-home"]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buildings"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-buildings"]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-projects"]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-about"]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-products"]}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-contact"]}
            </NavLink>
          </li>
        </ul>
        <LanguageSwitcher />
        <HamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navigation;
