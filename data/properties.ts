import { currency, Project, Property, Service } from "@/models/property";

export const PROVINCES = [
  "Lima",
  "Arequipa",
  "Cusco",
  "Trujillo",
  "Piura",
  "Chiclayo",
  "Ica",
  "Tacna",
];

export const PROPERTY_TYPES = [
  { value: "casa", label: "Casa", id: "1" },
  { value: "departamento", label: "Departamento", id: "2" },
  { value: "lote", label: "Lote", id: "3" },
  { value: "local", label: "Local Comercial", id: "4" },
  { value: "oficina", label: "Oficina", id: "5" },
  { value: "terreno", label: "Terreno", id: "6" },
  { value: "chacra", label: "Chacra", id: "7" },
];

export const PRICE_RANGES_FOR_SALE = [
  { value: "0-50000", label: "Hasta S/. 50,000", min: 0, max: 50000 },
  {
    value: "50000-100000",
    label: "S/. 50,000 - S/. 100,000",
    min: 50000,
    max: 100000,
  },
  {
    value: "100000-200000",
    label: "S/. 100,000 - S/. 200,000",
    min: 100000,
    max: 200000,
  },
  {
    value: "200000-500000",
    label: "S/. 200,000 - S/. 500,000",
    min: 200000,
    max: 500000,
  },
  { value: "500000+", label: "Más de S/. 500,000", min: 500000, max: Infinity },
];
export const PRICE_RANGES_FOR_RENTAL = [
  { value: "0-500", label: "Hasta S/. 500", min: 0, max: 500 },
  { value: "500-1000", label: "S/. 500 - S/. 1,000", min: 500, max: 1000 },
  { value: "1000-2000", label: "S/. 1,000 - S/. 2,000", min: 1000, max: 2000 },
  { value: "2000-5000", label: "S/. 2,000 - S/. 5,000", min: 2000, max: 5000 },
  { value: "5000+", label: "Más de S/. 5,000", min: 5000, max: Infinity },
];

export const propertiesForSale: Property[] = [
  {
    id: "1",
    title: "Lote en Paraíso – Km 23",
    description:
      "Lote de 200 m² ubicado en el km 23, cerca a Los Palos, a solo 10 minutos. Ideal para inversión.",
    price: 23000,
    currency: currency.PEN,
    province: "Tacna",
    district: "La Yarada - Los Palos",
    type: "lote",
    category: "venta",
    area: 200,
    images: [
      "/Paraiso/paraiso-1.jpg",
      "/Paraiso/paraiso-2.jpg",
      "/Paraiso/paraiso-3.jpg",
    ],
    features: ["Luz", "Agua de pozo", "Acciones y derechos"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Lote en Girasoles – Magollo",
    description:
      "Lote de 152 m² cerca a la carretera costanera y bosque municipal.",
    price: 15500,
    currency: currency.PEN,
    province: "Tacna",
    district: "Tacna",
    type: "lote",
    category: "venta",
    area: 152,
    images: [
      "/Girasoles/girasoles-1.webp",
      "/Girasoles/girasoles-2.webp",
      "/Girasoles/girasoles-3.webp",
    ],
    features: ["Luz", "Postes instalados", "Acciones y derechos"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Lote en Arunta – San Martín",
    description: "Lote de 127 m² ubicado por la Cantera, zona en crecimiento.",
    price: 10500,
    currency: currency.PEN,
    province: "Tacna",
    district: "Gregorio Albarracín",
    type: "lote",
    category: "venta",
    area: 127,
    images: [
      "/Girasoles/girasoles-1.webp",
      "/Girasoles/girasoles-2.webp",
      "/Girasoles/girasoles-3.webp",
    ],
    features: ["Agua para jalar", "Luz para jalar", "Acciones y derechos"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Lote con Título en Viñani",
    description:
      "Amplio lote de 500 m² cerca al paradero 14, con título de propiedad.",
    price: 23000,
    currency: currency.USD,
    province: "Tacna",
    district: "Gregorio Albarracín",
    type: "lote",
    category: "venta",
    area: 500,
    images: [
      "/Viñani/viñani-1.jpg",
      "/Viñani/viñani-2.jpg",
      "/Viñani/viñani-3.jpg",
    ],
    features: ["Agua para jalar", "Luz para jalar", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "8",
    title: "Terreno en Magollo – 1.5 Ha",
    description:
      "Terreno de 1.5 hectáreas cerca al bosque municipal, ideal para proyecto agrícola o inversión.",
    price: 85000,
    currency: currency.USD,
    province: "Tacna",
    district: "Pocollay",
    type: "terreno",
    category: "venta",
    area: 15000,
    images: [
      "/Girasoles/girasoles-1.webp",
      "/Girasoles/girasoles-2.webp",
      "/Girasoles/girasoles-3.webp",
    ],
    features: ["Poste cercano", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    title: "Local Comercial en Óvalo Viñani",
    description:
      "Local comercial de 120 m² en zona estratégica de alto tránsito.",
    price: 26000,
    currency: currency.USD,
    province: "Tacna",
    district: "Gregorio Albarracín",
    type: "local",
    category: "venta",
    area: 120,
    images: [
      "/Mercado/mercado-1.jpg",
      "/Mercado/mercado-2.jpg",
      "/Mercado/mercado-3.jpg",
    ],
    features: ["Servicios para jalar", "Acciones y derechos"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "10",
    title: "Casa Señor de los Milagros – II Etapa",
    description: "Casa ubicada en segunda etapa, cerca a la tercera etapa.",
    price: 85000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Ciudad Nueva",
    type: "casa",
    category: "venta",
    area: 128,
    images: [
      "/Sr Milagros/milagros-1.jpg",
      "/Sr Milagros/milagros-2.jpg",
      "/Sr Milagros/milagros-3.jpg",
    ],
    features: ["Servicios básicos", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "t11",
    title: "Lote en Calle Rázuri",
    description:
      "Amplio lote de 330 m² con título independiente y excelente ubicación.",
    price: 330000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Tacna",
    type: "lote",
    category: "venta",
    area: 330,
    images: [
      "/Girasoles/girasoles-1.webp",
      "/Girasoles/girasoles-2.webp",
      "/Girasoles/girasoles-3.webp",
    ],
    features: ["Servicios básicos", "Título independiente"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const propertiesForRent: Property[] = [
  {
    id: "1",
    title: "Casa Familiar en San Isidro",
    description:
      "Amplia casa familiar ideal para ejecutivos, completamente amoblada con jardín.",
    price: 2500,
    currency: currency.PEN,
    province: "Lima",
    district: "San Isidro",
    type: "casa",
    category: "alquiler",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    images: ["/Girasoles/girasoles-1.webp"],
    features: ["Amoblado", "Jardín", "Cochera", "Servicio incluido"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const projects: Project[] = [];

export const services: Service[] = [
  {
    id: "s1",
    title: "Asesoría Legal Inmobiliaria",
    description:
      "Acompañamiento legal completo en compra, venta y alquiler de propiedades. Revisión de contratos y documentación.",
    icon: "Scale",
  },
  {
    id: "s2",
    title: "Saneamiento de Predios",
    description:
      "Regularización de títulos de propiedad, inscripción en registros públicos y trámites municipales.",
    icon: "FileCheck",
  },
  {
    id: "s3",
    title: "Construcción de Propiedades",
    description:
      "Diseño y construcción de viviendas a medida con los mejores materiales y acabados.",
    icon: "Hammer",
  },
  {
    id: "s4",
    title: "Desarrollo de Proyectos",
    description:
      "Gestión integral de proyectos inmobiliarios desde la conceptualización hasta la entrega.",
    icon: "Building2",
  },
  {
    id: "s5",
    title: "Vende tu Propiedad",
    description:
      "Te ayudamos a vender tu propiedad al mejor precio con marketing profesional y asesoría personalizada.",
    icon: "BadgeDollarSign",
  },
  {
    id: "s6",
    title: "Alquila tu Propiedad",
    description:
      "Gestionamos el alquiler de tu propiedad, desde la promoción hasta la administración del contrato.",
    icon: "Key",
  },
];
