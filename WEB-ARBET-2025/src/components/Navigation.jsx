import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/nav-logo.avif";
import { useLanguage } from "../../src/LanguageContext";

import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { currentLang, lang } = useLanguage();

  return (
    <nav className="navbar box-shadow">
      <div className="nav-wrapper">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">{lang[currentLang]["nav-home"]}</NavLink>
          </li>
          <li>
            <NavLink to="/buildings" activeClassName="active">{lang[currentLang]["nav-buildings"]}</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">{lang[currentLang]["nav-projects"]}</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">{lang[currentLang]["nav-about"]}</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">{lang[currentLang]["nav-contact"]}</NavLink>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
