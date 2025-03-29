"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import GoogleMapReact from 'google-map-react';
import Image from "next/image";
import MarkerPoint from '../app/favicon.ico'

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

const ContactSection = ({
  title = "Contact Us",
  subtitle = "Have questions or need emergency locksmith services? Reach out to us today.",
  contactInfo = {
    phone: "+55 (51) 9999-9999",
    email: "contato@chaveirosul.com.br",
    address: "Porto Alegre, RS, Brazil",
  },
}: ContactSectionProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(
      "Form submitted! In a real implementation, this would send your message.",
    );
  };

  const defaultProps = {
    center: {
      lat: -30.017638085136873,
      lng: -51.20840844673378,
    },
    zoom: 17
  }

  const Marker = ({ lat, lng }: { lat: number, lng: number }) => {
    return <Image className="w-9" src={MarkerPoint} alt="Localização" />

  }
  return (
    <section className="w-full py-20 bg-black text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="w-full">
            <Card className="bg-zinc-900 text-gray-200 border-zinc-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Nome"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Celular"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Escreva sua mensagem aqui!"
                      className="bg-zinc-800 border-zinc-700 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Send className="mr-2 h-4 w-4" /> Enviar!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="w-full flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contato</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Horário comercial
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Iremos responser o mais rápido possível!
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
                <p className="text-sm text-gray-400 mt-1">
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Horário de serviço</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <div>Segunda à Sexta</div>
                <div>8:30 - 18:30 (não fecha ao meio-dia)</div>
                <div>Sábado</div>
                <div>8:30 - 12:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 rounded-lg w-screen h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAdEGfW9O423TZ0Qpegn30VshgpqZiFts8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          draggable={false}
          options={{
            draggable: false,
            panControl: false,
            fullscreenControl: false,
            zoomControl: false,
            scaleControl: false,
            rotateControl: false,
            disableDefaultUI: true,
          }}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={-30.017500085136873} lng={-51.20850844673378} />
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default ContactSection;
