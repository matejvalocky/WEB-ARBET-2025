import React, { useState, useEffect, useRef } from "react";
import "./Slideshow.css";

// Import obrázkov
import image1 from "../assets/slideshow-images/arbet-slideshow1.jpg";
import image2 from "../assets/slideshow-images/arbet-slideshow2.jpeg";
import image3 from "../assets/slideshow-images/arbet-slideshow3.jpeg";

const Slideshow = () => {
  const images = [image1, image2, image3]; // Pole obrázkov

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
    }, 6000); // Nastavenie intervalu na 6 sekúnd

    return () => clearInterval(interval); // Vyčisti interval pri odchode
  }, [isPaused, currentIndex, images.length]);

  // Funkcie na detekciu pohybu myšou/swipe
  const handleDragStart = (e) => {
    setIsPaused(true); // Zastavenie slideshow pri ťahaní
    slideshowRef.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    const endX = e.touches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - slideshowRef.current.startX;

    // Urč smer posunutia na základe delta
    if (delta > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (delta < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
    setIsPaused(false); // Pokračovanie slideshow po ťahaní
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
