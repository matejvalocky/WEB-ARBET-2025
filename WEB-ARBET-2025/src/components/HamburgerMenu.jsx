import React, { useState } from "react";
import "./HamburgerMenu.css";
import "./HamburgerMenuMediaQueries.css"



const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fullPageMenu ${isOpen ? "active" : ""}`} id="nav">

        <div className="nav">
          <ul>
            <li>
              <a href="#" data-text="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-text="About">
                About
              </a>
            </li>
            <li>
              <a href="#" data-text="Services">
                Services
              </a>
            </li>
            <li>
              <a href="#" data-text="Team">
                Team
              </a>
            </li>
            <li>
              <a href="#" data-text="Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" data-text="Contact">
                Contact
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
