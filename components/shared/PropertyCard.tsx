"use client";

import { Property } from "@/models/property";
import {
  Bath,
  Bed,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const formatPrice = (price: number, category: string) => {
    if (category === "alquiler") {
      return `S/. ${price.toLocaleString()}/mes`;
    }
    return `S/. ${price.toLocaleString()}`;
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

  return (
    <article className="card-property cursor-pointer group" onClick={onClick}>
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Images */}
        <Link href={`/propiedades/${property.id}`}>
          <div className="relative w-full h-full">
            {property.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${property.title} - Imagen ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                width={400}
                height={300}
              />
            ))}
          </div>
        </Link>

        {/* Navigation Buttons - Only show if multiple images */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
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

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Price */}
        <p className="text-xl sm:text-2xl font-bold text-primary font-heading">
          {formatPrice(property.price, property.category)}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 font-heading">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">
            {property.district
              ? `${property.district}, ${property.province}`
              : property.province}
          </span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
