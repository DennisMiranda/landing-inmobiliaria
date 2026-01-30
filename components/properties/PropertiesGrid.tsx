"use client";
import PropertiesResultsSection from "@/components/sections/PropertiesResultsSection.tsx";
import Button from "@/components/shared/Button";
import { PRICE_RANGES_FOR_SALE } from "@/data/properties";
import { PropertyFilter } from "@/models/property";
import { ArrowLeft, DollarSign, Home, MapPin, Tag, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  params:PropertyFilter
};

export default function SearchResultsPage({params}:Props) {
  const router = useRouter();
  const pathname = usePathname();

  // Parse URL parameters into search filters
  const [searchFilters, setSearchFilters] = useState<PropertyFilter>(() => ({
    province,
    type,
    category,
    minPrice,
    maxPrice,
  }));

  // Local form state for filters
  const [searchType, setSearchType] = useState<"comprar" | "alquilar">(
    searchFilters.category === "venta" ? "comprar" : "alquilar"
  );
  const [location, setLocation] = useState(searchFilters.province || "");
  const [propertyType, setPropertyType] = useState(searchFilters.type || "");
  const [priceRange, setPriceRange] = useState("");

  // Update URL when filters change
  const updateFilters = (newFilters: Partial<PropertyFilter>) => {
    const updatedFilters = { ...searchFilters, ...newFilters };
    setSearchFilters(updatedFilters);

    // Update URL
    const params = new URLSearchParams();
    if (updatedFilters.province)
      params.set("province", updatedFilters.province);
    if (updatedFilters.type) params.set("type", updatedFilters.type);
    if (updatedFilters.category)
      params.set("category", updatedFilters.category);
    if (updatedFilters.minPrice)
      params.set("minPrice", updatedFilters.minPrice.toString());
    if (updatedFilters.maxPrice)
      params.set("maxPrice", updatedFilters.maxPrice.toString());

    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.push(newUrl, { scroll: false });
  };

  const handleSearch = () => {
    const filters: PropertyFilter = {
      category: searchType === "comprar" ? "venta" : "alquiler",
      province: location || undefined,
      type: (propertyType as any) || undefined,
    };

    // Parse price range
    if (priceRange) {
      const range = PRICE_RANGES_FOR_SALE.find((r) => r.value === priceRange);
      if (range) {
        filters.minPrice = range.min;
        filters.maxPrice = range.max;
      }
    }

    updateFilters(filters);
  };

  const clearFilters = () => {
    setSearchType("comprar");
    setLocation("");
    setPropertyType("");
    setPriceRange("");
    setSearchFilters({});
    router.push(pathname, { scroll: false });
  };

  // Get active filter pills
  const getFilterPills = () => {
    const pills = [];
    if (searchFilters.category) {
      pills.push({
        key: "category",
        icon: <Tag className="w-4 h-4" />,
        text: searchFilters.category === "venta" ? "En Venta" : "En Alquiler",
        onRemove: () => updateFilters({ category: undefined }),
      });
    }
    if (searchFilters.province) {
      pills.push({
        key: "province",
        icon: <MapPin className="w-4 h-4" />,
        text: searchFilters.province,
        onRemove: () => updateFilters({ province: undefined }),
      });
    }
    if (searchFilters.type) {
      pills.push({
        key: "type",
        icon: <Home className="w-4 h-4" />,
        text: searchFilters.type,
        onRemove: () => updateFilters({ type: undefined }),
      });
    }
    if (searchFilters.minPrice || searchFilters.maxPrice) {
      const priceText =
        (searchFilters.minPrice
          ? `Desde S/. ${searchFilters.minPrice.toLocaleString()}`
          : "") +
        (searchFilters.minPrice && searchFilters.maxPrice ? " - " : "") +
        (searchFilters.maxPrice
          ? `Hasta S/. ${searchFilters.maxPrice.toLocaleString()}`
          : "");

      if (priceText) {
        pills.push({
          key: "price",
          icon: <DollarSign className="w-4 h-4" />,
          text: priceText,
          onRemove: () =>
            updateFilters({ minPrice: undefined, maxPrice: undefined }),
        });
      }
    }
    return pills;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section with Filters */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/10 border-b">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Back to Home */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => router.push("/")}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Button>
            </div>

            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="heading-primary">Buscar Propiedades</h1>
              <p className="text-muted-foreground text-lg">
                Encuentra la propiedad perfecta para ti
              </p>
            </div>

            {/* Search Form */}

            {/* Active Filters */}
            {getFilterPills().length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">
                    Filtros activos:
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Limpiar todos
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {getFilterPills().map((pill) => (
                    <div
                      key={pill.key}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {pill.icon}
                      <span>{pill.text}</span>
                      <button
                        onClick={pill.onRemove}
                        className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <PropertiesResultsSection searchFilters={searchFilters} />
    </main>
  );
}
