"use client";
import Button from "@/components/shared/Button";
import PropertyCard from "@/components/shared/PropertyCard";
import PropertyModal from "@/components/shared/PropertyModal";
import { propertiesForSale } from "@/data/properties";
import { Property, PropertyFilter } from "@/models/property";
import { useMemo, useRef, useState } from "react";

interface PropertiesSectionProps {
  searchFilters?: PropertyFilter;
}

const PropertiesSection = ({ searchFilters }: PropertiesSectionProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const filteredProperties = useMemo(() => {
    return propertiesForSale.filter((property) => {
      // Apply search filters if provided
      if (searchFilters) {
        if (
          searchFilters.province &&
          property.province !== searchFilters.province
        )
          return false;
        if (searchFilters.type && property.type !== searchFilters.type)
          return false;
        if (searchFilters.minPrice && property.price < searchFilters.minPrice)
          return false;
        if (searchFilters.maxPrice && property.price > searchFilters.maxPrice)
          return false;
        if (
          searchFilters.category &&
          property.category !== searchFilters.category
        )
          return false;
      }
      return true;
    });
  }, [searchFilters]);

  // Show only first 6 properties
  const displayProperties = filteredProperties.slice(0, 6);

  return (
    <section
      id="propiedades-venta"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="section-container space-y-6 sm:space-y-8">
        {/* Header */}
        <div ref={titleRef} className="space-y-2">
          <h2 className="heading-primary">Propiedades en Venta</h2>
          <p className="text-muted-foreground">
            Descubre las mejores oportunidades inmobiliarias
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard
                property={property}
                onClick={() => setSelectedProperty(property)}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {propertiesForSale.length > 6 && (
          <div className="text-center pt-4">
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = "/propiedades?category=venta";
              }}
            >
              Ver más ({propertiesForSale.length - 6} más)
            </Button>
          </div>
        )}

        {/* Empty State */}
        {displayProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No se encontraron propiedades con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
};

export default PropertiesSection;
