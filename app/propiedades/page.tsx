import { getProperties } from "@/components/properties/actions/property-actions";
import Pagination from "@/components/shared/Pagination";
import PropertyCard from "@/components/shared/PropertyCard";
import PropertySearch from "@/components/shared/PropertySearch";
import { PropertyFilter } from "@/models/property";

interface Props {
  searchParams: PropertyFilter; // searchParams is used to get query parameters from the URL
}

export default async function PropertiesPage({ searchParams }: Props) {
  const searchParamsValue = await searchParams;
  const { properties, total, page, limit, totalPages } = await getProperties(
    searchParamsValue
  );
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section with Filters */}
      <section className="section-padding pb-4 bg-gradient-to-br from-primary/5 to-primary/10 border-b">
        <div className="section-container">
          <PropertySearch showSale={false} variant="buttons" />
        </div>
      </section>

      {properties.length === 0 ? (
        <section id="search-results" className="py-4 bg-muted/30">
          <div className="section-container space-y-6 sm:space-y-8">
            <div className="text-center py-12">
              <h2 className="heading-primary mb-4">Resultados de Búsqueda</h2>
              <p className="text-muted-foreground">
                No se encontraron propiedades con los filtros seleccionados.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section id="search-results" className="py-4 bg-muted/30">
          <div className="section-container space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="heading-primary">Resultados de Búsqueda</h2>
              <p className="text-muted-foreground">
                {total} propiedades encontradas
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {properties.map((property, index) => (
                <div
                  key={property.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              total={total}
              limit={limit}
              searchParams={
                searchParamsValue as Record<
                  string,
                  string | number | undefined | null
                >
              }
            />
          </div>
        </section>
      )}
    </main>
  );
}
