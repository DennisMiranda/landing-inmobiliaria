
"use client"
import Button from '@/components/shared/Button';
import { useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToProperties = () => {
    const element = document.getElementById('propiedades-venta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative section-container text-center py-12 sm:py-16 space-y-6"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          <span className="text-sm font-medium text-primary">Tu inmobiliaria de confianza</span>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-heading">
          <span className="text-gradient">Amira</span>{' '}
          <span>Inmobiliaria</span>
        </h1>

        {/* Slogan */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-lg mx-auto font-medium">
          Encuentra tu nuevo hogar
        </p>

        {/* CTA */}
        <div className="pt-4">
          <Button variant="hero" size="lg" onClick={scrollToProperties}>
            Ver propiedades
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-8 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-primary font-heading">500+</p>
            <p className="text-sm text-muted-foreground">Propiedades</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-primary font-heading">1000+</p>
            <p className="text-sm text-muted-foreground">Clientes felices</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-primary font-heading">10+</p>
            <p className="text-sm text-muted-foreground">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
