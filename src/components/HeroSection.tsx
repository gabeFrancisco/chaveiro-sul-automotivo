"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
      alt: "Luxury sports car",
      title: "Professional Key Replacement",
      subtitle: "For all luxury and standard vehicles",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=1200&q=80",
      alt: "Modern car keys",
      title: "Advanced Key Programming",
      subtitle: "State-of-the-art technology for modern vehicles",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
      alt: "Emergency lockout service",
      title: "24/7 Emergency Services",
      subtitle: "We're there when you need us most",
    },
  ],
  logoSrc = "/chaveiro-sul-logo.png",
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
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-48 h-16 md:w-64 md:h-20">
          {/* Placeholder for logo - in a real implementation, you would use the actual logo */}
          <div className="w-full h-full flex items-center justify-center bg-black/70 rounded-lg">
            <span className="text-white text-2xl font-bold">CHAVEIRO SUL</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
        <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-md text-lg font-bold transition-colors">
          Emergency Assistance
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
