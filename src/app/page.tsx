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
import LogoSmall from '../../public/logo-small.png'

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
            name: "Luciano S. Vargas",
            rating: 5,
            text: "São 6 anos fazendo cópias com eles e nunca precisei voltar para fazer qualquer ajuste, incrivelmente excelentes! Parabéns!",
            image:
              "https://lh3.googleusercontent.com/geougc-cs/AIHozJIMQ3Nf3RNbgofP_JSKbr4wRrEiBsaFG6ILF04pjxehCPNmLXjz_SbekN73Eljv0Wgnoc50uIZX6FJ_VXAigt7fn-vwLc0b95TzUPqnMk2qksWYvb897p2njcgbDxxIVN5kx_Q=s125-p-k",
          },
          {
            id: 2,
            name: "Lauren Caleffi",
            rating: 5,
            text: "Minhas experiências com a ChaveiroSul foram bem satisfatórias. O atendimento, o preço, o resultado na prestação de serviços são positivas. Virei cliente ! Obrigada ao Gabriel e ao Leonardo. 👍",
            image:
              LogoSmall.src,
          },
          {
            id: 3,
            name: "João Pedro Silva",
            rating: 5,
            text: "Bom dia amigos ... Melhor chaveiro de Porto Alegre e não é mídia não hoje pela manhã ele me ajudou por telefone ☎️ só tenho a agradecer mesmo onesto de mais mesmo . Baaa nota 1.000 excelente serviço meus parabénsQue Deus te ilumine sempre parabéns... poucos que nem ele !!",
            image:
              LogoSmall.src,
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
