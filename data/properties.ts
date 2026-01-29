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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    features: ["Agua para jalar", "Luz para jalar", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Lote en Urbanización Portales",
    description:
      "Lote de 100 m² en urbanización Planicie, frente a Zofratacna.",
    price: 53000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Tacna",
    type: "lote",
    category: "venta",
    area: 100,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    features: ["Servicios básicos", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Lote en Aeronova",
    description: "Lote de 120 m² ubicado en la zona alta del aeropuerto.",
    price: 30000,
    currency: currency.USD,
    province: "Tacna",
    district: "Alto de la Alianza",
    type: "lote",
    category: "venta",
    area: 120,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    features: ["Servicios básicos", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "Casa en San Juan del Olivo – Calana",
    description:
      "Casa con techo propio y construcción de 40 m², ideal para familia pequeña.",
    price: 60000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Calana",
    type: "casa",
    category: "venta",
    area: 90,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    ],
    features: ["Servicios básicos", "Techo propio"],
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
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
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
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
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
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
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    features: ["Servicios básicos", "Título independiente"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const propertiesForRent: Property[] = [
  {
    id: "r1",
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    features: ["Amoblado", "Jardín", "Cochera", "Servicio incluido"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "r2",
    title: "Departamento Ejecutivo",
    description: "Moderno departamento amoblado, perfecto para profesionales.",
    price: 1200,
    currency: currency.PEN,
    province: "Lima",
    district: "Miraflores",
    type: "departamento",
    category: "alquiler",
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    features: ["Amoblado", "Internet", "Gimnasio", "Lavandería"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "r3",
    title: "Local Comercial Céntrico",
    description:
      "Excelente local en zona comercial de alto tráfico, ideal para retail.",
    price: 3500,
    currency: currency.PEN,
    province: "Lima",
    district: "Centro de Lima",
    type: "local",
    category: "alquiler",
    area: 150,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    ],
    features: ["Alto tráfico", "Vitrina amplia", "Depósito"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "r4",
    title: "Departamento Económico",
    description:
      "Departamento cómodo y económico en zona tranquila de Arequipa.",
    price: 600,
    currency: currency.PEN,
    province: "Arequipa",
    type: "departamento",
    category: "alquiler",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    ],
    features: ["Agua incluida", "Cocina equipada"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Residencial Los Álamos",
    description:
      "Proyecto de habilitación urbana con 150 lotes residenciales, áreas verdes y parques.",
    type: "habilitacion-urbana",
    province: "Lima",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"],
    status: "en-venta",
    units: 150,
    priceFrom: 45000,
  },
  {
    id: "p2",
    title: "Torres del Sol",
    description:
      "Edificio residencial de 20 pisos con departamentos de 1, 2 y 3 dormitorios.",
    type: "construccion",
    province: "Arequipa",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    ],
    status: "en-venta",
    units: 80,
    priceFrom: 75000,
  },
  {
    id: "p3",
    title: "Urbanización Vista Verde",
    description:
      "Desarrollo integral con casas, áreas comerciales y zonas recreativas.",
    type: "desarrollo",
    province: "Trujillo",
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
    ],
    status: "proximamente",
    units: 200,
    priceFrom: 85000,
  },
];

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
