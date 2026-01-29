"use client";
import Button from "@/components/shared/Button";
import PropertyCard from "@/components/shared/PropertyCard";
import { propertiesForRent, propertiesForSale } from "@/data/properties";
import { PropertyFilter } from "@/models/property";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";

interface PropertiesResultsSectionProps {
  searchFilters: PropertyFilter;
}

const PropertiesResultsSection = ({
  searchFilters,
}: PropertiesResultsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const propertiesPerPage = 10;

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

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const displayProperties = filteredProperties.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchFilters]);

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
                onClick={() => {
                  // Desktop: Open in new tab, Mobile: Navigate in same tab
                  const isMobile = window.innerWidth < 768;
                  const propertyUrl = `/propiedad/${property.id}`;

                  if (isMobile) {
                    window.location.href = propertyUrl;
                  } else {
                    window.open(propertyUrl, "_blank");
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 pt-6">
            <div className="text-sm text-muted-foreground">
              Mostrando {startIndex + 1}-
              {Math.min(endIndex, filteredProperties.length)} de{" "}
              {filteredProperties.length} resultados
            </div>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </Button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "primary" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-10 h-10 p-0"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="gap-1"
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesResultsSection;
