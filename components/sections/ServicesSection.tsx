"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/properties";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_DELAY = 3500; // más lento y elegante

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Detectar breakpoint */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const itemsPerView = isDesktop ? 3 : 1;
  const maxIndex = Math.max(services.length - itemsPerView, 0);
  const slidePercent = 100 / itemsPerView;

  /* Autoplay lento (1 por 1) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="section-container space-y-6 sm:space-y-8">
        {/* Header */}
        <div ref={titleRef} className="space-y-2 text-center">
          <h2 className="heading-primary">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
          </p>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * slidePercent}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="shrink-0 px-2"
                style={{ width: `${slidePercent}%` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 pt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`
                h-2.5 rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "w-6 bg-primary"
                    : "w-2.5 bg-muted"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
