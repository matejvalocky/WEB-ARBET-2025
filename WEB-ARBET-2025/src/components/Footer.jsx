import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import GoogleMap from "./GoogleMap";

import { useLanguage } from "../../src/LanguageContext";

const Footer = () => {
  const { currentLang, lang } = useLanguage();
  return (
    <footer>
      <section className="logo_contacts-section">
        <div className="logo">
          <div className="logo-inner"></div>
        </div>

        <div className="contact_info">
          <div className="contact_info_sector sector">
            <h4>Adresa spoločnosti</h4>
            <p>
              Arbet s. r. o., <br />
              Veličná 305 <br />
              027 54 Veličná <br />
              Slovensko{" "}
            </p>
          </div>

          <div className="contact_info_sector sector">
            <h4>Faktúračné údaje</h4>
            <p>
              IČO: 44346891
              <br />
              DIČ: 2022662345 <br />
              IČ DPH: SK2022662345 <br />
            </p>
          </div>

          <div className="contact_info_sector sector">
            <h4>Telefonický kontakt</h4>

            <p>
              <span>Žumpy, stavebniny:</span>{" "}
              <b>
                <a href="tel:+421917979744">0917 979 744</a>
              </b>{" "}
              <br />
              <span>Stavby:</span>{" "}
              <b>
                <a href="tel:+421918808988">0918 808 988</a>
              </b>{" "}
              <br />
              <span>Servis:</span>{" "}
              <b>
                <a href="tel:+421918999959">0918 999 959</a>
              </b>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="fast-navigation-section">
        <h4>Rýchla navigácia</h4>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
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
            {" "}
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-products"]}
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")} // Dynamické nastavenie aktívnej triedy
            >
              {lang[currentLang]["nav-contact"]}
            </NavLink>
          </li>
        </ul>
      </section>

      <section className="map-section">
        <GoogleMap />
      </section>
    </footer>
  );
};

export default Footer;
