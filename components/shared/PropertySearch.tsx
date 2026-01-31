"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PRICE_RANGES_FOR_RENTAL,
  PRICE_RANGES_FOR_SALE,
  PROPERTY_TYPES as PROPERTY_TYPES_DATA,
  PROVINCES,
} from "@/data/properties";
import { cn } from "@/lib/utils";
import {
  PROPERTY_CATEGORIES,
  PROPERTY_TYPES,
  PropertyCategory,
  PropertyFilter,
  PropertyType,
} from "@/models/property";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import Button from "./Button";

interface PropertySearchProps {
  onSearch?: (
    filters: PropertyFilter & { searchType: PropertyCategory }
  ) => void;
  defaultLocation?: string;
  defaultPropertyType?: PropertyType;
  defaultPriceRange?: string;
  defaultSearchType?: PropertyCategory;
  showSale?: boolean;
  variant?: "tabs" | "buttons";
}

const PropertySearch = ({
  onSearch,
  defaultLocation = "Tacna",
  defaultPropertyType = PROPERTY_TYPES.house,
  defaultPriceRange = "0-50000",
  defaultSearchType = PROPERTY_CATEGORIES.buy,
  showSale = true,
  variant = "tabs",
}: PropertySearchProps) => {
  const router = useRouter();
  const [searchType, setSearchType] =
    useState<PropertyCategory>(defaultSearchType);
  const [location, setLocation] = useState(defaultLocation);
  const [propertyType, setPropertyType] =
    useState<PropertyType>(defaultPropertyType);
  const [selectedPriceRange, setSelectedPriceRange] =
    useState(defaultPriceRange);

  const [priceRanges, setPriceRanges] = useState<
    { value: string; label: string; min: number; max: number }[]
  >([]);

  const updatePriceRanges = useEffectEvent(() => {
    setPriceRanges(
      searchType === PROPERTY_CATEGORIES.buy
        ? PRICE_RANGES_FOR_SALE
        : PRICE_RANGES_FOR_RENTAL
    );

    setSelectedPriceRange(
      searchType === PROPERTY_CATEGORIES.buy
        ? PRICE_RANGES_FOR_SALE[0].value
        : PRICE_RANGES_FOR_RENTAL[0].value
    );
  });

  useEffect(() => {
    updatePriceRanges();
  }, [searchType]);

  const handleSearch = () => {
    // Parse price range
    const priceRange = priceRanges.find(
      (range) => range.value === selectedPriceRange
    );

    const filters: PropertyFilter & { searchType: PropertyCategory } = {
      searchType: searchType,
      category:
        searchType === PROPERTY_CATEGORIES.buy
          ? PROPERTY_CATEGORIES.sale
          : PROPERTY_CATEGORIES.rent,
      province: location || undefined,
      type: propertyType || undefined,
      minPrice: priceRange?.min,
      maxPrice: priceRange?.max,
    };

    if (onSearch) {
      onSearch(filters);
    } else {
      // Build URL parameters and redirect
      const params = new URLSearchParams();
      if (filters.category) params.set("category", filters.category);

      if (filters.province) params.set("province", filters.province);
      if (filters.type) params.set("type", filters.type);
      if (filters.minPrice) params.set("minPrice", filters.minPrice.toString());
      if (filters.maxPrice) params.set("maxPrice", filters.maxPrice.toString());

      // Navigate to search results page
      router.push(`/propiedades?${params.toString()}`);
    }
  };

  const handleSale = () => {
    router.push("/vender-propiedad");
  };

  const handleRent = () => {
    setSearchType(PROPERTY_CATEGORIES.rent);
  };

  const handleBuy = () => {
    setSearchType(PROPERTY_CATEGORIES.buy);
  };

  const handleSearchTypeChange = (value: string) => {
    setSearchType(value as PropertyCategory);
  };

  const handlePropertyTypeChange = (value: string) => {
    setPropertyType(value as PropertyType);
  };

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
  };

  return (
    <motion.div variants={searchBarVariants}>
      {/* Type Buttons */}
      {variant === "tabs" && (
        <div className="w-max mx-auto flex gap-1">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleBuy}
            className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
              searchType === PROPERTY_CATEGORIES.buy
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Comprar
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleRent}
            className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
              searchType === PROPERTY_CATEGORIES.rent
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Alquilar
          </motion.button>
          {showSale && (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleSale}
              className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
                searchType === PROPERTY_CATEGORIES.sale
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Vender
            </motion.button>
          )}
        </div>
      )}

      {/* Search Fields */}
      <div
        className={cn(
          "bg-white/95 backdrop-blur-sm rounded-2xl  p-6 sm:p-8 grid grid-cols-1 gap-4",
          variant === "buttons"
            ? "md:grid-cols-5 shadow-sm"
            : "md:grid-cols-4 shadow-2xl"
        )}
      >
        {/* Buttons Variant */}
        {variant === "buttons" && (
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Acción</label>
            <div className="flex flex-1 items-end gap-2">
              <Button
                onClick={() => handleSearchTypeChange(PROPERTY_CATEGORIES.buy)}
                variant="outline"
                size="sm"
                fullWidth
                className={cn(
                  "flex-1 h-10 border-gray-300 text-gray-700",
                  searchType === PROPERTY_CATEGORIES.buy &&
                    "bg-primary text-white border-primary"
                )}
              >
                Comprar
              </Button>
              <Button
                onClick={() => handleSearchTypeChange(PROPERTY_CATEGORIES.rent)}
                variant="outline"
                size="sm"
                fullWidth
                className={cn(
                  "flex-1 h-10 border-gray-300 text-gray-700",
                  searchType === PROPERTY_CATEGORIES.rent &&
                    "bg-primary text-white border-primary"
                )}
              >
                Alquilar
              </Button>
            </div>
          </div>
        )}

        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Ubicación</label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar ubicación" />
            </SelectTrigger>
            <SelectContent>
              {PROVINCES.map((province) => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Tipo de propiedad
          </label>
          <Select value={propertyType} onValueChange={handlePropertyTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTY_TYPES_DATA.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Precio</label>
          <Select
            value={selectedPriceRange}
            onValueChange={setSelectedPriceRange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar precio" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleSearch}
            className="w-full bg-primary text-white px-6 py-3 cursor-pointer rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Buscar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertySearch;
