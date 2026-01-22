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
  { value: "casa", label: "Casa" },
  { value: "departamento", label: "Departamento" },
  { value: "lote", label: "Lote" },
  { value: "local", label: "Local Comercial" },
  { value: "oficina", label: "Oficina" },
  { value: "terreno", label: "Terreno" },
];

export const PRICE_RANGES = [
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

export const propertiesForSale: Property[] = [
  {
    id: "1",
    title: "Casa Moderna en La Molina",
    description:
      "Hermosa casa de 3 pisos con acabados de lujo, amplio jardín y piscina. Ubicada en zona residencial exclusiva con seguridad 24/7.",
    price: 450000,
    currency: currency.PEN,
    province: "Lima",
    district: "La Molina",
    type: "casa",
    category: "venta",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    features: ["Piscina", "Jardín", "Cochera doble", "Seguridad 24/7"],
    coordinates: { lat: -12.0864, lng: -76.9417 },
    locationUrl:
      "https://www.google.com/maps/place/Asoc.+Arunta+sector+D-+20/@-18.0447329,-70.2279055,15z/data=!4m6!3m5!1s0x915ac59d43a4ec5d:0x68bb7912538e1900!8m2!3d-18.0379119!4d-70.212177!16s%2Fg%2F11kpl79qk6?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Departamento Vista al Mar",
    description:
      "Espectacular departamento con vista panorámica al mar, acabados premium y áreas comunes de lujo.",
    price: 285000,
    currency: currency.USD,
    province: "Lima",
    district: "Miraflores",
    type: "departamento",
    category: "venta",
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    features: ["Vista al mar", "Gimnasio", "Terraza", "Portería"],
    coordinates: { lat: -12.1191, lng: -77.03 },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Lote en Zona de Expansión",
    description:
      "Terreno ideal para proyecto residencial o comercial. Cuenta con todos los servicios y excelente ubicación.",
    price: 120000,
    currency: currency.PEN,
    province: "Arequipa",
    type: "lote",
    category: "venta",
    area: 500,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    ],
    features: ["Agua", "Luz", "Desagüe", "Título de propiedad"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Casa de Campo en Cusco",
    description:
      "Acogedora casa de campo con vista a las montañas, perfecta para escapar de la ciudad.",
    price: 180000,
    currency: currency.PEN,
    province: "Cusco",
    type: "casa",
    category: "venta",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    ],
    features: ["Vista panorámica", "Chimenea", "Jardín amplio"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Departamento Céntrico",
    description:
      "Moderno departamento en el corazón de Trujillo, cerca de centros comerciales y transporte.",
    price: 95000,
    currency: currency.PEN,
    province: "Trujillo",
    type: "departamento",
    category: "venta",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
    features: ["Ascensor", "Estacionamiento", "Áreas comunes"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Terreno Industrial",
    description:
      "Amplio terreno para uso industrial con acceso a carretera principal.",
    price: 350000,
    currency: currency.PEN,
    province: "Piura",
    type: "terreno",
    category: "venta",
    area: 2000,
    images: [
      "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=800",
    ],
    features: [
      "Acceso carretera",
      "Servicios básicos",
      "Zonificación industrial",
    ],
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
