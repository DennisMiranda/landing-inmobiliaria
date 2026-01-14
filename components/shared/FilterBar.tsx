import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { PROVINCES, PROPERTY_TYPES, PRICE_RANGES } from '@/data/properties';
import { PropertyFilter, PropertyType } from '@/models/property';

interface FilterBarProps {
  onFilterChange: (filters: PropertyFilter) => void;
  showTypeFilter?: boolean;
}

const FilterBar = ({ onFilterChange, showTypeFilter = true }: FilterBarProps) => {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleFilterChange = (key: keyof PropertyFilter, value: string | undefined) => {
    const newFilters = { ...filters };
    
    if (key === 'minPrice' || key === 'maxPrice') {
      const range = PRICE_RANGES.find(r => r.value === value);
      if (range) {
        newFilters.minPrice = range.min;
        newFilters.maxPrice = range.max;
      } else {
        delete newFilters.minPrice;
        delete newFilters.maxPrice;
      }
    } else if (value) {
      (newFilters as Record<string, unknown>)[key] = value;
    } else {
      delete newFilters[key];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

  const getPriceLabel = () => {
    if (filters.minPrice !== undefined) {
      const range = PRICE_RANGES.find(r => r.min === filters.minPrice);
      return range?.label || 'Precio';
    }
    return 'Precio';
  };

  return (
    <div className="w-full">
      {/* Mobile: Horizontal scrollable */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {/* Province Filter */}
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'province' ? null : 'province')}
            className={`filter-chip flex items-center gap-1.5 whitespace-nowrap ${filters.province ? 'filter-chip-active' : ''}`}
          >
            {filters.province || 'Ubicación'}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {activeDropdown === 'province' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              <button
                onClick={() => handleFilterChange('province', undefined)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
              >
                Todas las ubicaciones
              </button>
              {PROVINCES.map(province => (
                <button
                  key={province}
                  onClick={() => handleFilterChange('province', province)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                >
                  {province}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'price' ? null : 'price')}
            className={`filter-chip flex items-center gap-1.5 whitespace-nowrap ${filters.minPrice !== undefined ? 'filter-chip-active' : ''}`}
          >
            {getPriceLabel()}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {activeDropdown === 'price' && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50">
              <button
                onClick={() => handleFilterChange('minPrice', undefined)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
              >
                Todos los precios
              </button>
              {PRICE_RANGES.map(range => (
                <button
                  key={range.value}
                  onClick={() => handleFilterChange('minPrice', range.value)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Type Filter */}
        {showTypeFilter && (
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
              className={`filter-chip flex items-center gap-1.5 whitespace-nowrap ${filters.type ? 'filter-chip-active' : ''}`}
            >
              {PROPERTY_TYPES.find(t => t.value === filters.type)?.label || 'Tipo'}
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {activeDropdown === 'type' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
                <button
                  onClick={() => handleFilterChange('type', undefined)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                >
                  Todos los tipos
                </button>
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => handleFilterChange('type', type.value as PropertyType)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="filter-chip flex items-center gap-1.5 whitespace-nowrap text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="w-4 h-4" />
            Limpiar
          </button>
        )}
      </div>

      {/* Click outside to close */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default FilterBar;
