"use client";
import Button from "@/components/shared/Button";
import PropertyMap from "@/components/shared/PropertyMap";
import { propertiesForRent, propertiesForSale } from "@/data/properties";
import { Property } from "@/models/property";
import {
  ArrowLeft,
  Bath,
  Bed,
  Check,
  Mail,
  MapPin,
  Maximize,
  Phone,
  Send,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Find property by ID
    const allProperties = [...propertiesForSale, ...propertiesForRent];
    const foundProperty = allProperties.find((p) => p.id === params.id);

    if (foundProperty) {
      setProperty(foundProperty);
      // Pre-fill message with property info
      setFormData((prev) => ({
        ...prev,
        message: `Estoy interesado(a) en esta propiedad.\n\n--- Información de la Propiedad ---\nTítulo: ${
          foundProperty.title
        }\nPrecio: ${formatPrice(
          foundProperty.price,
          foundProperty.category
        )}\nUbicación: ${
          foundProperty.district ? `${foundProperty.district}, ` : ""
        }${foundProperty.province}\nTipo: ${foundProperty.type}\n${
          foundProperty.area ? `Área: ${foundProperty.area} m²` : ""
        }\n${
          foundProperty.bedrooms ? `Dormitorios: ${foundProperty.bedrooms}` : ""
        }\n${
          foundProperty.bathrooms ? `Baños: ${foundProperty.bathrooms}` : ""
        }`,
      }));
    }
  }, [params.id]);

  const formatPrice = (price: number, category: string) => {
    if (category === "alquiler") {
      return `S/.${price.toLocaleString()}/mes`;
    }
    return `S/.${price.toLocaleString()}`;
  };

  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      casa: "Casa",
      departamento: "Departamento",
      lote: "Lote",
      local: "Local Comercial",
      oficina: "Oficina",
      terreno: "Terreno",
    };
    return types[type] || type;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Propiedad no encontrada</h1>
          <Button onClick={() => router.push("/propiedades")}>
            Volver a buscar propiedades
          </Button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-md mx-auto text-center space-y-6 p-8">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="heading-primary">¡Mensaje enviado!</h1>
          <p className="text-muted-foreground">
            Mensaje enviado, un asesor se contactará contigo muy pronto.
          </p>
          <div className="space-y-3">
            <Button onClick={() => router.push("/propiedades")}>
              Buscar más propiedades
            </Button>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="section-container">
          <div className="flex items-center gap-4 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.back()}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <div className="flex items-center gap-2">
              <span
                className={`tag-badge ${
                  property.category === "venta" ? "tag-sale" : "tag-rent"
                }`}
              >
                {property.category === "venta" ? "Venta" : "Alquiler"}
              </span>
              <span className="tag-badge bg-foreground/80 text-background">
                {getTypeLabel(property.type)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          {/* Property Details */}
          <div className="space-y-6">
            {/* Images */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Property Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(property.price, property.category)}
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>
                  {property.district ? `${property.district}, ` : ""}
                  {property.province}
                </span>
              </div>

              {/* Features */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                {property.bedrooms && (
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span>{property.bedrooms} Dormitorios</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" />
                    <span>{property.bathrooms} Baños</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5" />
                  <span>{property.area} m²</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Características</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Map Placeholder */}
              {property.locationUrl && (
                <PropertyMap url={property.locationUrl} />
              )}
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl border p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Contactar por esta propiedad
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y un asesor se pondrá en contacto
                  contigo.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Celular *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+51 999999999"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field min-h-[120px] resize-none"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>También puedes llamarnos al +51 982 743 773</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>o escribir a info@amira.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
