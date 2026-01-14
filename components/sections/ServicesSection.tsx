"use client"
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/data/properties';
import { useRef } from 'react';

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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
