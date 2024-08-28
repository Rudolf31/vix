"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as img from "../images.js";

// Image data array
const images = [
  {
    src: img.slider_1,
  },
  {
    src: img.slider_1,
  }
];

export default function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);
  

    const [isHovered, setIsHovered] = useState(false);
  

    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }

    const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


  useEffect(() => {

    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative w-full mt-6">
      <div
        className="relative"
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="responsive"
          objectFit="contain"
          className="transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex gap-7 justify-end mt-6">
        <button><Image src={img.prev_slide} alt="" onClick={prevSlide}/></button>
        <button><Image src={img.next_slide} alt="" onClick={nextSlide}/></button>
      </div>
    </div>
  );
}