"use client";
import whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.link/sv4cbp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
      className="
        fixed bottom-20 right-4 z-50
        w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:bg-green-600
        transition-all duration-300
        animate-pulse
      "
    >
    <Image
        src={whatsapp}
        alt="WhatsApp"
        priority
        className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18"
      />   
    </a>
  );
};

export default FloatingWhatsApp;
