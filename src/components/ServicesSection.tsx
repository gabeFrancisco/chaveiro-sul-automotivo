import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Key, Car, Smartphone } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

import Keys from '../../public/key.svg'

const ServiceCard = ({
  title = "Service Title",
  description = "Detailed description of the service provided by Chaveiro Sul.",
  icon = <Key className="h-8 w-8 text-white" />,
  imageUrl = "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80",
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden border-0 bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="flex flex-row items-center gap-4 pt-6">
        <div className="rounded-full bg-zinc-800 p-3">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400 mb-4">
          {description}
        </CardDescription>
        <div className="flex items-center text-sm font-medium text-white hover:text-zinc-400 cursor-pointer transition-colors">
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
};

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceCardProps[];
}

const ServicesSection = ({
  title = "Our Specialized Services",
  subtitle = "Professional automotive locksmith solutions for all your vehicle security needs",
  services = [
    {
      title: "Key Replacement",
      description:
        "Lost or damaged your car keys? We provide fast and reliable key cutting and replacement services for all vehicle makes and models.",
      icon: <Key className="h-8 w-8 text-white" />,
      imageUrl:
        "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80",
    },
    {
      title: "Emergency Lockout Assistance",
      description:
        "Locked out of your vehicle? Our 24/7 emergency service ensures you're never stranded for long with quick and damage-free entry solutions.",
      icon: <Car className="h-8 w-8 text-white" />,
      imageUrl:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    },
    {
      title: "Key Programming",
      description:
        "We specialize in programming transponder keys, key fobs, and smart keys for modern vehicles with advanced security systems.",
      icon: <Smartphone className="h-8 w-8 text-white" />,
      imageUrl:
        "https://images.unsplash.com/photo-1563391017873-9c658d045c95?w=800&q=80",
    },
  ],
}: ServicesSectionProps) => {
  return (
    <section className="w-full py-20 bg-black" id="services">

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
