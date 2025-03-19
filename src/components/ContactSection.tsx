"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      className="bg-zinc-800 border-zinc-700"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-zinc-800 border-zinc-700 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="w-full flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Available 24/7 for emergencies
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
                <p className="text-sm text-gray-400 mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Serving the entire metropolitan area
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <div>Monday - Friday:</div>
                <div>8:00 AM - 8:00 PM</div>
                <div>Saturday:</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Sunday:</div>
                <div>Emergency Service Only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
