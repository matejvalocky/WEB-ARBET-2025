import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Slideshow.css";
import "./SlideshowQueries.css"
import { useLanguage } from "../../src/LanguageContext";

// Import obrázkov
import image1 from "../assets/slideshow-images/arbet-slideshow1.jpg";
import image2 from "../assets/slideshow-images/arbet-slideshow2.jpeg";
import image3 from "../assets/slideshow-images/arbet-slideshow3.jpeg";

const Slideshow = () => {
  const { lang, currentLang } = useLanguage();

  const images = [
    { src: image1, title: lang[currentLang]["slideshow1-heading"] },
    { src: image2, title: lang[currentLang]["slideshow2-heading"] },
    { src: image3, title: lang[currentLang]["slideshow3-heading"] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Nastavenie trvania na 8 sekúnd

    return () => clearInterval(interval);
  }, [isPaused, currentIndex, images.length]);

  const handleDragStart = (e) => {
    setIsPaused(true);
    slideshowRef.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    const endX = e.touches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - slideshowRef.current.startX;

    if (delta > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (delta < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
    setIsPaused(false);
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
      <motion.div
        className="slideshow-image"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <motion.h1
          className="slideshow-title"
          key={`title-${currentIndex}`}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 3 }}
        >
          {images[currentIndex].title}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Slideshow;
