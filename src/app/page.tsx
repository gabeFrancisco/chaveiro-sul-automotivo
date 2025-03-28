import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import EmergencyContact from "@/components/EmergencyContact";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Carousel */}
      <HeroSection
        carouselItems={[
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
        ]}
        autoRotateInterval={5000}
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Specialized Services"
        subtitle="Professional automotive locksmith solutions for all your vehicle security needs"
        services={[
          {
            title: "Key Replacement",
            description:
              "Lost or damaged your car keys? We provide fast and reliable key cutting and replacement services for all vehicle makes and models.",
            icon: null, // Will use default Key icon
            imageUrl:
              "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80",
          },
          {
            title: "Emergency Lockout Assistance",
            description:
              "Locked out of your vehicle? Our 24/7 emergency service ensures you're never stranded for long with quick and damage-free entry solutions.",
            icon: null, // Will use default Car icon
            imageUrl:
              "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
          },
          {
            title: "Key Programming",
            description:
              "We specialize in programming transponder keys, key fobs, and smart keys for modern vehicles with advanced security systems.",
            icon: null, // Will use default Smartphone icon
            imageUrl:
              "https://images.unsplash.com/photo-1563391017873-9c658d045c95?w=800&q=80",
          },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real stories from satisfied customers"
        testimonials={[
          {
            id: 1,
            name: "Carlos Silva",
            rating: 5,
            text: "Chaveiro Sul saved me when I was locked out of my BMW at 2 AM. They arrived within 20 minutes and had me back in my car without any damage. Exceptional service!",
            beforeImage:
              "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80",
          },
          {
            id: 2,
            name: "Ana Ferreira",
            rating: 5,
            text: "I needed a replacement key for my Mercedes and Chaveiro Sul provided a perfect solution at half the dealer's price. The new key works flawlessly!",
            beforeImage:
              "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&q=80",
          },
          {
            id: 3,
            name: "Roberto Mendes",
            rating: 4,
            text: "Professional key programming service for my Audi. They were knowledgeable, efficient, and much more affordable than the dealership.",
            beforeImage:
              "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80",
          },
        ]}
      />

      {/* Contact Section */}
      <ContactSection
        title="Contact Us"
        subtitle="Have questions or need emergency locksmith services? Reach out to us today."
        contactInfo={{
          phone: "+55 (51) 9999-9999",
          email: "contato@chaveirosul.com.br",
          address: "Porto Alegre, RS, Brazil",
        }}
      />

      {/* Fixed Position Emergency Contact */}
      {/* <EmergencyContact
        phoneNumber="+55 (51) 9999-9999"
        label="24/7 Emergency"
      /> */}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}
