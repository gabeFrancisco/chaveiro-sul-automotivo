import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import EmergencyContact from "@/components/EmergencyContact";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import Bg from '../../public/bg.jpg';
import Mb from '../../public/mb.jpg'
import Scanner from '../../public/scanner.jpg'
import Hb from '../../public/hb.jpg'
import Opening from '../../public/Opening.webp'
import Alarm from '../../public/alarm.webp'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Carousel */}
      <HeroSection
        carouselItems={[
         {
              id: 1,
              image:
                Mb.src,
              alt: "Carro de luxo",
              title: "Chaves inteligentes",
              subtitle: "Para todos os tipos de veículos",
            },
            {
              id: 2,
              image:
                Bg.src,
              alt: "Modern car keys",
              title: "Serviços de Chaveiro em Geral",
              subtitle: "Diversos serviços de chaveiro para sua casa e seu negócio em qualquer lugar",
            },
            {
              id: 3,
              image: Scanner.src,
              alt: "Emergency lockout service",
              title: "Serviços e Reparos em veículos",
              subtitle: "Reparo de fechaduras, alarmes e centrais eletrônicas",
            },
        ]}
        autoRotateInterval={5000}
      />

      {/* Services Section */}
      <ServicesSection
        title="Nós amamos oque fazemos!"
        subtitle="Prestamos serviços automotivos com qualidade há mais de 20 anos!"
        services={[
          {
            title: "Cópia e confecção de chaves automotivas",
            description:
              "Perdeu ou danificou sua chave? Nós resolvemos para você!.",
            icon: null, // Will use default Key icon
            imageUrl:
              Hb.src,
          },
          {
            title: "Abertura de veículos",
            description:
              "Abrimos seu carro da forma mais segura e moderna",
            icon: null, // Will use default Car icon
            imageUrl:
              Opening.src,
          },
          {
            title: "Alarmes e Controles",
            description:
              "Fazemos cópias e reparos em alarmes automotivos e residenciais, bem como controles para portões eletrônicos",
            icon: null, // Will use default Smartphone icon
            imageUrl:
              Alarm.src,
          },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="O que nossos clientes estão dizendo..."
        subtitle="História reais de nossos clientes satisfeitos!"
        testimonials={[
          {
            id: 1,
            name: "Carlos Silva",
            rating: 5,
            text: "",
            beforeImage:
              "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&q=80",
          },
          {
            id: 2,
            name: "Ana Ferreira",
            rating: 5,
            text: "",
            beforeImage:
              "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&q=80",
          },
          {
            id: 3,
            name: "Roberto Mendes",
            rating: 4,
            text: "",
            beforeImage:
              "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80",
            afterImage:
              "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80",
          },
        ]}
      />

      {/* Contact Section */}
      <ContactSection
        title="Entre em contato"
        subtitle="Agilize seu atendimento preenchendo o formulário ou entrando em contato atraveś do WhatsApp"
        contactInfo={{
          phone: "(51) 984184141 (WhatsApp)",
          email: "chaveirosul@hotmail.com",
          address: "Av. Farrapos, 1549 (esquina Câncio Gomes), Floresta, Porto Alegre",
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
