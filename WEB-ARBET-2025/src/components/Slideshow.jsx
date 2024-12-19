import React, { useState, useEffect, useRef } from "react";
import "./Slideshow.css";


// Import obrázku
import image1 from "../assets/slideshow-images/arbet-slideshow1.jpg"; // Cesta k obrázku
import image2 from "../assets/slideshow-images/arbet-slideshow2.jpeg"; // Cesta k obrázku
import image3 from "../assets/slideshow-images/arbet-slideshow3.jpeg"; // Cesta k obrázku


const Slideshow = () => {
    const images = [image1, image2, image3]; // Použitie obrázka v poli

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);

  // Automatické posúvanie obrázkov
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Vyčisti interval
  }, [isPaused, currentIndex, images.length]);

  // Funkcie na detekciu pohybu myšou/swipe
  const handleDragStart = (e) => {
    setIsPaused(true); // Zastavenie slideshow
    slideshowRef.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    const endX = e.touches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - slideshowRef.current.startX;

    // Urč smer posunutia na základe delta
    if (delta > 50) {
      // Posun doľava
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (delta < -50) {
      // Posun doprava
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
    setIsPaused(false); // Pokračovanie slideshow
  };

  return (
    <div
      className="slideshow"
      ref={slideshowRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="slideshow-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
    </div>
  );
};

export default Slideshow;
