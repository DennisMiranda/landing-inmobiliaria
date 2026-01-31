"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/properties";
import { useRef } from "react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

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

        {/* Flex layout */}
        <div
          className="
            flex flex-wrap justify-center
            gap-6
          "
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="
                w-full
                sm:w-[calc(50%-0.75rem)]
                lg:w-[calc(33.333%-1rem)]
                flex justify-center
              "
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
