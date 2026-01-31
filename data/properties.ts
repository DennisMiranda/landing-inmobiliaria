import { currency, Project, Property, Service } from "@/models/property";

export const PROVINCES = ["Tacna"];

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
      "Lote de 200 m² ubicado en el km 23, a solo 10 minutos de playa Los Palos. Ideal para inversión. Lotes desde S/. 20,000 soles.",
    price: 20000,
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
    features: [
      "Título por Acciones y derechos",
      "Luz y agua",
      "Postes instalados",
      "Parques con plantas frutales",
      "Zona de juego infantil",
      "Cancha de fútbol y voley",
      "Zona de parrillas",
    ],
    locationUrl:
      "https://www.google.com/maps/@-18.1638331,-70.4759805,17.63z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Lote en Girasoles - Magollo",
    description:
      "Lotes de 152 m² y 160 m² en excelente ubicación, a la altura del km 11 de la carretera Costanera, cerca del Bosque Municipal. Zona con gran proyección de crecimiento. Precios desde S/ 15,500.",
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
    features: ["Título por Acciones y derechos", "Postes instalados", "Parque"],
    locationUrl:
      "https://www.google.com/maps/@-18.1232809,-70.3727227,17.99z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Lote en Asoc. San Martín de Porres",
    description:
      "Lotes desde 127 m² hasta 164 m² ubicados en la Asociación San Martín, cerca de la Cantera, en una zona con alto potencial de crecimiento. Precios desde S/ 10,500.",
    price: 10500,
    currency: currency.PEN,
    province: "Tacna",
    district: "Gregorio Albarracín",
    type: "lote",
    category: "venta",
    area: 127,
    images: [
      "/San Martin/sanmartin-1.jpeg",
      "/San Martin/sanmartin-2.jpeg",
      "/San Martin/sanmartin-3.jpeg",
    ],
    features: [
      "Título por Acciones y derechos",
      "Agua para jalar",
      "Luz para jalar",
    ],
    locationUrl:
      "https://www.google.com/maps/@-18.0466303,-70.2086578,17.36z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Lote de 500 m2 en Viñani",
    description:
      "Amplio lote de 500 m² cerca al paradero 14, con título de propiedad independiente. Antes del puente de Valle 2000.",
    price: 80000,
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
    features: ["Título de propiedad independiente  ", "Agua y luz para jalar"],
    locationUrl:
      "https://www.google.com/maps/@-18.0863384,-70.2480352,17.89z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "8",
    title: "Terreno de 1.5 Ha en Magollo",
    description:
      "Terreno en esquina de 1.5 hectáreas cerca al bosque municipal, ideal para proyecto agrícola o inversión.",
    price: 286000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Magollo",
    type: "terreno",
    category: "venta",
    area: 15000,
    images: ["/Magollo/magollo-1.jpg"],
    features: [
      "Título de propiedad independiente",
      "En esquina",
      "Luz para jalar",
    ],
    locationUrl:
      "https://www.google.com/maps/@-18.121711,-70.3717959,15.71z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    title: "Lote Comercial frente al Óvalo Viñani",
    description:
      "Lotes comerciales de 120 m² en zona estratégica de alto tránsito. Al frente de Óvalo de Viñani, precios desde S/. 88,000.",
    price: 88000,
    currency: currency.PEN,
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
    features: [
      "Título por acciones y derechos",
      "Agua, luz y desagüe para jalar",
      "Cerca a principales avenidas.",
    ],
    locationUrl:
      "https://www.google.com/maps/@-18.0692313,-70.2606456,17.67z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "10",
    title: "Lote en Promuvi Señor de los Milagros – II Etapa",
    description:
      "Lote ubicado en la segunda etapa del Promuvi Señor de los Milagros, a pocos metros de la plaza de la II Etapa. Área de 128 m² (8 × 16 m).",
    price: 85000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Crnel. Gregorio Albarracín Lanchipa",
    type: "lote",
    category: "venta",
    area: 128,
    images: [
      "/Sr Milagros/milagros-1.jpg",
      "/Sr Milagros/milagros-2.jpg",
      "/Sr Milagros/milagros-3.jpg",
    ],
    features: ["Título de propiedad independiente", "Luz, agua y desagüe"],
    locationUrl:
      "https://www.google.com/maps/place/18%C2%B005'01.4%22S+70%C2%B017'21.7%22W/@-18.0837275,-70.2919212,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-18.0837275!4d-70.2893463?hl=es&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "t11",
    title: "Lote en Calle Rázuri",
    description:
      "Amplio lote de 202.5 m² (9 × 22.5 m), con título de propiedad independiente y excelente ubicación. Cerca del Mercadillo Bolognesi y de las 100 Casas.",
    price: 330000,
    currency: currency.PEN,
    province: "Tacna",
    district: "Tacna",
    type: "lote",
    category: "venta",
    area: 202.5,
    images: ["/Razuri/razuri-1.jpg", "/Razuri/razuri-2.jpg"],
    features: [
      "Título de propiedad independiente",
      "Luz, agua y desagüe",
      "Lote cercado, con construcción definitiva",
    ],
    locationUrl:
      "https://www.google.com/maps/@-18.0002123,-70.2324614,18.7z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const propertiesForRent: Property[] = [
  {
    id: "1",
    title: "Local Comercial cerca de paradero 14",
    description:
      "Local comercial de 40 m² en Av. La Cultura, amplio e iluminado, cerca de paradero 14.",
    price: 2500,
    currency: currency.PEN,
    province: "Tacna",
    district: "Crnel. Gregorio Albarracín Lanchipa",
    type: "local",
    category: "alquiler",
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    images: ["/Girasoles/girasoles-1.webp"],
    features: ["1 ambiente amplio", "Baño completo"],
    locationUrl:
      "https://www.google.com/maps/@-12.0753001,-77.0433029,17z?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
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
