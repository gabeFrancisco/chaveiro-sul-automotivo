"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      rating: 5,
      text: "Chaveiro Sul saved me when I was locked out of my BMW at 2 AM. They arrived within 20 minutes and had me back in my car without any damage. Exceptional service!",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80",
    },
    {
      id: 2,
      name: "Ana Ferreira",
      rating: 5,
      text: "I needed a replacement key for my Mercedes and Chaveiro Sul provided a perfect solution at half the dealer's price. The new key works flawlessly!",
      image:
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500&q=80",
    },
    {
      id: 3,
      name: "Roberto Mendes",
      rating: 4,
      text: "Professional key programming service for my Audi. They were knowledgeable, efficient, and much more affordable than the dealership.",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80",
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Real stories from satisfied customers",
}: TestimonialsSectionProps) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`}
        />
      ));
  };

  return (
    <section className="w-full py-16 bg-black text-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-300">{subtitle}</p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={(api) => {
            api?.on("select", () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col md:flex-row gap-8 p-6 bg-zinc-900 rounded-xl">
                  {/* Before/After Images */}
                  <div className="flex-1 flex flex-col md:flex-row gap-4">

                    <div className="relative">
                      <img
                        src={testimonial.image}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>


                  {/* Testimonial Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-200 italic mb-4">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="font-semibold text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselPrevious className="-left-4 md:-left-12 bg-zinc-800 text-white border-none hover:bg-zinc-700" />
          <CarouselNext className="-right-4 md:-right-12 bg-zinc-800 text-white border-none hover:bg-zinc-700" />
        </Carousel>
      </div>
    </section>
  );
}
