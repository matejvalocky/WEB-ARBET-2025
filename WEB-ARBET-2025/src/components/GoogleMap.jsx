import React from "react";
import "./GoogleMap.css"

const GoogleMap = () => {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2606.60379861349!2d19.254448962776046!3d49.20807517126231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sarbet!5e0!3m2!1ssk!2ssk!4v1735574408531!5m2!1ssk!2ssk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
    