export const currency = {
  PEN: "S/.",
  USD: "$",
};

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  province: string;
  district?: string;
  address?: string;
  type: PropertyType;
  category: PropertyCategory;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  features?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: Date;
  updatedAt: Date;
  locationUrl?: string;
}

export type PropertyType =
  | "casa"
  | "departamento"
  | "lote"
  | "local"
  | "oficina"
  | "terreno";

export type PropertyCategory = "venta" | "alquiler" | "proyecto";

export interface PropertyFilter {
  province?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: PropertyType;
  category?: PropertyCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  province: string;
  images: string[];
  status: "en-venta" | "proximamente" | "agotado";
  units?: number;
  priceFrom?: number;
}

export type ProjectType = "habilitacion-urbana" | "construccion" | "desarrollo";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  intention: "comprar" | "vender" | "alquilar";
  province: string;
  propertyType: PropertyType;
  name: string;
  phone: string;
  email: string;
  message: string;
}
