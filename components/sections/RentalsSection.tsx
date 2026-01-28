"use client";
import Button from "@/components/shared/Button";
import PropertyCard from "@/components/shared/PropertyCard";
import PropertyModal from "@/components/shared/PropertyModal";
import { propertiesForRent } from "@/data/properties";
import { Property } from "@/models/property";
import { useMemo, useRef, useState } from "react";

interface RentalsSectionProps {
  // No props needed - always shows preview
}

const RentalsSection = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const filteredProperties = useMemo(() => {
    return propertiesForRent.filter((property) => {
      // No filtering for preview section - show all rental properties
      return true;
    });
  }, []);

  // Show only first 6 properties
  const displayProperties = filteredProperties.slice(0, 6);

  return (
    <section
      id="alquiler"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="section-container space-y-6 sm:space-y-8">
        {/* Header */}
        <div ref={titleRef} className="space-y-2">
          <h2 className="heading-primary">Propiedades en Alquiler</h2>
          <p className="text-muted-foreground">
            Encuentra el espacio perfecto para ti o tu negocio
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
        {propertiesForRent.length > 6 && (
          <div className="text-center pt-4">
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = "/properties?type=rent";
              }}
            >
              Ver más ({propertiesForRent.length - 6} más)
            </Button>
          </div>
        )}

        {/* Empty State */}
        {displayProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No hay propiedades en alquiler disponibles.
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

export default RentalsSection;
