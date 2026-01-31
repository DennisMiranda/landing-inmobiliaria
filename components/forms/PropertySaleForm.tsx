"use client";

import Button from "@/components/shared/Button";
import { PROPERTY_TYPES, PROVINCES } from "@/data/properties";
import { FileText, Home, MapPin, Square, Star, User } from "lucide-react";
import { useState } from "react";
import LocationMapSelector from "./LocationMapSelector";

interface PropertySaleFormProps {
  onSubmit: () => void;
}

interface FormData {
  // Inmueble
  propertyType: string;
  title: string;
  price: string;
  landArea: string;
  isConstructed: boolean;
  constructedArea: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  description: string;

  // Ubicación
  province: string;
  district: string;
  address: string;
  coordinates: { lat: number; lng: number } | null;

  // Documentación
  documentation: string[];

  // Servicios e infraestructura
  services: string[];
  infrastructure: string[];
  zoning: string[];

  // Características
  features: string[];
  nearbyPlaces: string[];

  // Propietario
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  contactSchedule: string;
}

const PropertySaleForm = ({ onSubmit }: PropertySaleFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    title: "",
    price: "",
    landArea: "",
    isConstructed: false,
    constructedArea: "",
    bedrooms: "",
    bathrooms: "",
    floor: "",
    description: "",
    province: "",
    district: "",
    address: "",
    coordinates: null,
    documentation: [],
    services: [],
    infrastructure: [],
    zoning: [],
    features: [],
    nearbyPlaces: [],
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    contactSchedule: "",
  });

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleValue = (
    field:
      | "documentation"
      | "services"
      | "infrastructure"
      | "zoning"
      | "features"
      | "nearbyPlaces",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* ================= 1. INFORMACIÓN DEL INMUEBLE ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <Home className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Información del inmueble</h2>
        </header>

        <p className="text-sm text-muted-foreground">
          Cuéntanos los datos principales de tu propiedad.
        </p>

        <select
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.propertyType}
          onChange={(e) => handleChange("propertyType", e.target.value)}
          required
        >
          <option value="">Tipo de propiedad</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        <input
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Precio estimado (S/.)"
          type="number"
          value={formData.price}
          onChange={(e) => handleChange("price", e.target.value)}
          required
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Área total (m²)"
            type="number"
            value={formData.landArea}
            onChange={(e) => handleChange("landArea", e.target.value)}
            required
          />

          {/* Ask if is constructed */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isConstructed}
              onChange={(e) => handleChange("isConstructed", e.target.checked)}
            />
            <span>¿Tiene construcción?</span>
          </label>

          {formData.isConstructed && (
            <>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Área construida (m²)"
                value={formData.constructedArea}
                onChange={(e) =>
                  handleChange("constructedArea", e.target.value)
                }
                required
              />

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Dormitorios"
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleChange("bedrooms", e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Baños"
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => handleChange("bathrooms", e.target.value)}
                />
                <input
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Piso (si aplica)"
                  type="number"
                  value={formData.floor}
                  onChange={(e) => handleChange("floor", e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <textarea
          className="w-full px-4 py-2 border rounded-lg resize-none"
          rows={4}
          placeholder="Descripción del inmueble"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </section>

      {/* ================= 2. UBICACIÓN ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Ubicación</h2>
        </header>

        <p className="text-sm text-muted-foreground">
          La ubicación es clave para evaluar el valor de tu propiedad.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={formData.province}
            onChange={(e) => handleChange("province", e.target.value)}
            required
          >
            <option value="">Provincia</option>
            {PROVINCES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Distrito"
            value={formData.district}
            onChange={(e) => handleChange("district", e.target.value)}
            required
          />
        </div>

        <input
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Dirección o referencia"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          required
        />

        <LocationMapSelector
          onLocationSelect={(coords) => handleChange("coordinates", coords)}
        />
      </section>

      {/* ================= 3. DOCUMENTACIÓN ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Documentación del predio</h2>
        </header>

        <p className="text-sm text-muted-foreground">
          Indique qué documentos tiene actualmente el predio.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Título inscrito en SUNARP",
            "Título de propiedad independiente",
            "Minuta de compra-venta",
            "Escritura pública",
            "Partida registral independiente",
            "Posesión",
            "Constancia de posesión",
            "Acciones y derechos",
            "En trámite",
            "No cuenta con documentos",
          ].map((doc) => (
            <label key={doc} className="flex gap-2">
              <input
                type="checkbox"
                checked={formData.documentation.includes(doc)}
                onChange={() => toggleValue("documentation", doc)}
              />
              {doc}
            </label>
          ))}
        </div>
      </section>

      {/* ================= 4. SERVICIOS E INFRAESTRUCTURA ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <Square className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Servicios e infraestructura</h2>
        </header>

        <div>
          <h3 className="font-medium mb-2">Servicios básicos</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {["Agua", "Luz", "Desagüe", "Gas", "Internet"].map((s) => (
              <label key={s} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.services.includes(s)}
                  onChange={() => toggleValue("services", s)}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Infraestructura y entorno</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Pistas y veredas",
              "Alumbrado público",
              "Acceso vehicular",
              "Transporte público cercano",
            ].map((i) => (
              <label key={i} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.infrastructure.includes(i)}
                  onChange={() => toggleValue("infrastructure", i)}
                />
                {i}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Zonificación</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Habilitación urbana",
              "Zonificación urbana",
              "Zonificación agrícola",
            ].map((z) => (
              <label key={z} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.zoning.includes(z)}
                  onChange={() => toggleValue("zoning", z)}
                />
                {z}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. CARACTERÍSTICAS Y BENEFICIOS ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            Características y beneficios
          </h2>
        </header>

        <div>
          <h3 className="font-medium mb-2">Características</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Esquina",
              "En avenida",
              "Zona residencial",
              "Zona comercial",
              "Frente amplio",
              "Vista panorámica",
              "Área verde cercana",
              "Seguridad / rejas",
              "Portón / cochera",
            ].map((f) => (
              <label key={f} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.features.includes(f)}
                  onChange={() => toggleValue("features", f)}
                />
                {f}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Cercanías</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              "Colegios",
              "Universidades",
              "Mercados",
              "Centros comerciales",
              "Hospitales / clínicas",
              "Parques",
              "Playas",
            ].map((p) => (
              <label key={p} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.nearbyPlaces.includes(p)}
                  onChange={() => toggleValue("nearbyPlaces", p)}
                />
                {p}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. DATOS DEL PROPIETARIO ================= */}
      <section className="bg-card border rounded-xl p-6 space-y-6">
        <header className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Datos del propietario</h2>
        </header>

        <p className="text-sm text-muted-foreground">
          Datos de contacto para coordinar una asesoría sin compromiso.
        </p>

        <input
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Nombre completo"
          value={formData.ownerName}
          required
          onChange={(e) => handleChange("ownerName", e.target.value)}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Teléfono"
            type="number"
            value={formData.ownerPhone}
            required
            onChange={(e) => handleChange("ownerPhone", e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Email"
            type="email"
            value={formData.ownerEmail}
            required
            onChange={(e) => handleChange("ownerEmail", e.target.value)}
          />
        </div>
      </section>

      {/* ================= SUBMIT ================= */}
      <div className="flex justify-center pt-6">
        <Button type="submit" size="lg" variant="hero">
          Enviar propiedad
        </Button>
      </div>
    </form>
  );
};

export default PropertySaleForm;
