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

export const PROPERTY_TYPES = {
  house: "casa",
  apartment: "departamento",
  lot: "lote",
  commercial: "local",
  office: "oficina",
  land: "terreno",
} as const;
export type PropertyType = (typeof PROPERTY_TYPES)[keyof typeof PROPERTY_TYPES];

export const PROPERTY_CATEGORIES = {
  sale: "venta",
  rent: "alquiler",
  buy: "comprar",
} as const;
export type PropertyCategory =
  (typeof PROPERTY_CATEGORIES)[keyof typeof PROPERTY_CATEGORIES];

export interface PropertyFilter {
  province?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: PropertyType;
  category?: PropertyCategory;
  page?: number;
  limit?: number;
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
