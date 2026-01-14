"use client"
import Button from '@/components/shared/Button';
import { PROPERTY_TYPES, PROVINCES } from '@/data/properties';
import { ContactFormData, PropertyType } from '@/models/property';
import { ArrowLeft, ArrowRight, Check, Send } from 'lucide-react';
import { useRef, useState } from 'react';


type StepKey = 'intention' | 'province' | 'propertyType' | 'contact';

const steps: { key: StepKey; title: string }[] = [
  { key: 'intention', title: '¿Qué deseas hacer?' },
  { key: 'province', title: '¿En qué provincia?' },
  { key: 'propertyType', title: '¿Qué tipo de propiedad?' },
  { key: 'contact', title: 'Tus datos de contacto' },
];

const intentions = [
  { value: 'comprar', label: 'Comprar', icon: '🏠' },
  { value: 'vender', label: 'Vender', icon: '💰' },
  { value: 'alquilar', label: 'Alquilar', icon: '🔑' },
];

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (steps[currentStep].key) {
      case 'intention':
        return !!formData.intention;
      case 'province':
        return !!formData.province;
      case 'propertyType':
        return !!formData.propertyType;
      case 'contact':
        return formData.name && formData.phone && formData.email;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contacto"
        ref={sectionRef}
        className="section-padding bg-primary/5"
      >
        <div className="section-container max-w-xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="heading-primary">¡Gracias por contactarnos!</h2>
          <p className="text-muted-foreground">
            Hemos recibido tu mensaje. Un asesor se pondrá en contacto contigo muy pronto.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setFormData({});
            }}
          >
            Enviar otro mensaje
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="section-padding bg-primary/5"
    >
      <div className="section-container max-w-xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div ref={titleRef} className="space-y-2 text-center">
          <h2 className="heading-primary">Contáctanos</h2>
          <p className="text-muted-foreground">
            Cuéntanos qué necesitas y te ayudaremos
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  index <= currentStep
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-1 mx-1 rounded transition-colors ${
                    index < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 font-heading">
            {steps[currentStep].title}
          </h3>

          {/* Step Content */}
          <div className="space-y-4">
            {/* Step 1: Intention */}
            {currentStep === 0 && (
              <div className="grid grid-cols-1 gap-3">
                {intentions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, intention: option.value as ContactFormData['intention'] })}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      formData.intention === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                    {formData.intention === option.value && (
                      <Check className="w-5 h-5 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Province */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 gap-3">
                {PROVINCES.map(province => (
                  <button
                    key={province}
                    onClick={() => setFormData({ ...formData, province })}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      formData.province === province
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{province}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Property Type */}
            {currentStep === 2 && (
              <div className="grid grid-cols-2 gap-3">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => setFormData({ ...formData, propertyType: type.value as PropertyType })}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      formData.propertyType === type.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Celular *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field min-h-[100px] resize-none"
                    placeholder="Cuéntanos más sobre lo que buscas..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack} className="flex-1 sm:flex-none">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Atrás
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1"
              >
                Siguiente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                variant="hero"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
