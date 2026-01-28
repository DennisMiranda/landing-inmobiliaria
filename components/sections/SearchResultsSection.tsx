"use client";
import Button from "@/components/shared/Button";
import PropertyCard from "@/components/shared/PropertyCard";
import PropertyModal from "@/components/shared/PropertyModal";
import { propertiesForRent, propertiesForSale } from "@/data/properties";
import { Property, PropertyFilter } from "@/models/property";
import { useMemo, useRef, useState } from "react";

interface SearchResultsSectionProps {
  searchFilters: PropertyFilter;
}

const SearchResultsSection = ({ searchFilters }: SearchResultsSectionProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProperties = useMemo(() => {
    const allProperties = [...propertiesForSale, ...propertiesForRent];
    return allProperties.filter((property) => {
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
      return true;
    });
  }, [searchFilters]);

  // Show only first 6 properties
  const displayProperties = filteredProperties.slice(0, 6);

  // Build URL query parameters
  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (searchFilters.province) params.set("province", searchFilters.province);
    if (searchFilters.type) params.set("type", searchFilters.type);
    if (searchFilters.category) params.set("category", searchFilters.category);
    if (searchFilters.minPrice)
      params.set("minPrice", searchFilters.minPrice.toString());
    if (searchFilters.maxPrice)
      params.set("maxPrice", searchFilters.maxPrice.toString());
    return params.toString();
  };

  if (displayProperties.length === 0) {
    return (
      <section
        id="search-results"
        ref={sectionRef}
        className="section-padding bg-muted/30"
      >
        <div className="section-container space-y-6 sm:space-y-8">
          <div className="text-center py-12">
            <h2 className="heading-primary mb-4">Resultados de Búsqueda</h2>
            <p className="text-muted-foreground">
              No se encontraron propiedades con los filtros seleccionados.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="search-results"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="section-container space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="heading-primary">Resultados de Búsqueda</h2>
          <p className="text-muted-foreground">
            {filteredProperties.length} propiedades encontradas
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

        {/* View More Results Button */}
        {filteredProperties.length > 6 && (
          <div className="text-center pt-4">
            <Button
              variant="outline"
              onClick={() => {
                const queryParams = buildQueryParams();
                window.location.href = `/properties?${queryParams}`;
              }}
            >
              Ver más resultados ({filteredProperties.length - 6} más)
            </Button>
          </div>
        )}

        {/* Property Modal */}
        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </section>
  );
};

export default SearchResultsSection;
