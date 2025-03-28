"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Logo from '../../public/logo.svg'
import LogoSmall from '../../public/logo-small.png'

interface CarouselItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface HeroSectionProps {
  carouselItems?: CarouselItem[];
  logoSrc?: string;
  autoRotateInterval?: number;
}

const HeroSection = ({
  carouselItems = [

  ],
  autoRotateInterval = 5000,
}: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [carouselItems.length, autoRotateInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="relative w-full h-[800px] bg-black overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            {/* Background Image with Overlay */}
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                {item.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="fixed top-0 px-8 md:px-10 py-4 bg-black bg-opacity-70 justify-between shadow-lg backdrop-blur-md z-50 w-full flex flex-row">
        {/* Placeholder for logo - in a real implementation, you would use the actual logo */}
        <div>
          <Image src={Logo} width={1000} height={1000} className="hidden md:block md:w-2/6" alt="Logo Chaveiro Sul" />
        </div>
        <div>
          <Image src={LogoSmall} width={1000} height={1000} className="block w-4/6 md:hidden" alt="Logo Chaveiro Sul" />
        </div>
        <ul className="flex flex-row justify-center items-center">
          <li className="text-sm mx-2 hover:text-gray-400 transition-all"><a href="#">Início</a></li>
          <li className="text-sm mx-2 hover:text-gray-400 transition-all"><a href="#">História</a></li>
          <li className="text-sm mx-2 hover:text-gray-400 transition-all"><a href="#">Serviços</a></li>
          <li className="text-sm mx-2 hover:text-gray-400 transition-all"><a href="#">Contato</a></li>
        </ul>
      </div>

      {/* Call to Action */}
    </section>
  );
};

export default HeroSection;
