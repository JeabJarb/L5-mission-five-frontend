import React, { useState } from "react";
import style from "./ImageDisplay.module.css";

export default function ImageDisplay({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className={style.imageDisplay}>
      <div className={style.displayContainer}>
        <img
          className={style.image}
          src={images[currentIndex]}
          alt={name}
        />
        <button className={style.zoomBtn} onClick={toggleOverlay}>
          <img src="/assets/icons/zoom-in.svg" alt="zoom" />
        </button>
        {isOverlayVisible && (
          <div className={style.overlay} onClick={toggleOverlay}>
            <img src={images[currentIndex]} alt={name} />
          </div>
        )}
      </div>

      <button className={style.prev} onClick={prevImage}>
        ❮
      </button>
      <button className={style.next} onClick={nextImage}>
        ❯
      </button>
    </div>
  );
}
