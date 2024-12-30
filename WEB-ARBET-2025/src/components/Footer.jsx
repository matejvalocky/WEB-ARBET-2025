import React from "react";
import "./Footer.css";

import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <footer>




      
        <section className="logo_contacts-section">
            <div className="logo">
                <div className="logo-inner">

                </div>
            </div>

            <div className="contact_info">
                
                <div className="contact_info_sector sector">
                    <h4>Adresa spoločnosti</h4>
                    <p>Arbet s. r. o., <br />
                    Veličná 305 <br />
                    027 54 Veličná <br />
                    Slovensko </p>
                </div>

                <div className="contact_info_sector sector">
                    <h4>Faktúračné údaje</h4>
                    <p>IČO: 44346891<br />
                    DIČ: 2022662345 <br />
                    IČ DPH: SK2022662345 <br />
                    </p>
                </div>

                <div className="contact_info_sector sector">
                    <h4>Telefonický kontakt</h4>
                    <p>Žumpy, stavebniny: <b>0917 979 744</b>  <br />
                    Stavby: <b>0918 808 988</b>  <br />
                    Servis: <b>0918 999 959</b>  <br />
                    </p>
                </div>
             
             
            </div>
        </section>


       
        <section className="fast-navigation-section">
            <h4>Rýchla navigácia</h4>
            <ul>
                <li>Domov</li>
                <li>Stavby</li>
                <li>Projekty</li>
                <li>O nás</li>
                <li>Výrobky</li>
                <li>Kontakt</li>
            </ul>

        </section>


       
        <section className="map-section">
<GoogleMap/>
        </section>





    </footer>
  );
};

export default Footer;
