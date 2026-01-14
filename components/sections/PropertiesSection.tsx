"use client"
import FilterBar from '@/components/shared/FilterBar';
import PropertyCard from '@/components/shared/PropertyCard';
import PropertyModal from '@/components/shared/PropertyModal';
import { propertiesForSale } from '@/data/properties';
import { Property, PropertyFilter } from '@/models/property';
import { useMemo, useRef, useState } from 'react';

const PropertiesSection = () => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const filteredProperties = useMemo(() => {
    return propertiesForSale.filter(property => {
      if (filters.province && property.province !== filters.province) return false;
      if (filters.type && property.type !== filters.type) return false;
      if (filters.minPrice && property.price < filters.minPrice) return false;
      if (filters.maxPrice && property.price > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

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

        {/* Filters */}
        <FilterBar onFilterChange={setFilters} />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProperties.map((property, index) => (
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

        {/* Empty State */}
        {filteredProperties.length === 0 && (
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
