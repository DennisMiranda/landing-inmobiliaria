import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, TrendingUp } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Vista aérea de La Yarada Los Palos, Tacna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/80 to-primary-dark/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">

          {/* Headline */}
         

          {/* Brand Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-heading">
            <span className="text-accent">Amira</span>{' '}
            <span>Inmobiliaria</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Encuentra casas, departamentos, lotes y chacras con asesoría integral, 
            respaldo legal y las mejores oportunidades de rentabilidad en el sur del Perú.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="lg" className="group">
              Compra tu propiedad hoy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Solicita Información
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Venta Segura</p>
                <p className="text-primary-foreground/60 text-sm">Documentación garantizada</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cta/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cta" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Alta Rentabilidad</p>
                <p className="text-primary-foreground/60 text-sm">Inversión con crecimiento</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Ubicación Premium</p>
                <p className="text-primary-foreground/60 text-sm">Mejores zonas de Tacna</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
