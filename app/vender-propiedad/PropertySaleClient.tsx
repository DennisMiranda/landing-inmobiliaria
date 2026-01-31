"use client";
import { ArrowLeft, Home, MapPin, User, Mail, Phone, FileText, Check } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import PropertySaleForm from "@/components/forms/PropertySaleForm";

export default function PropertySaleClient() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => {
    router.push("/");
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="heading-primary">¡Propiedad enviada con éxito!</h1>
              <p className="text-lg text-muted-foreground">
                Hemos recibido tu información. Nos pondremos en contacto contigo muy pronto para evaluar tu propiedad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button onClick={() => router.push("/")} className="gap-2">
                  <Home className="w-4 h-4" />
                  Volver al inicio
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="gap-2">
                  <FileText className="w-4 h-4" />
                  Enviar otra propiedad
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/10 border-b">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Back Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleBack}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Button>
            </div>

            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="heading-primary">Vende tu propiedad con nosotros</h1>
              <p className="text-muted-foreground text-lg">
                Completa el formulario y recibe la mejor asesoría para vender tu propiedad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <PropertySaleForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>
    </main>
  );
}
