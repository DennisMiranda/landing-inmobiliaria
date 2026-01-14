import { Property } from '@/models/property';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  const formatPrice = (price: number, category: string) => {
    if (category === 'alquiler') {
      return `$${price.toLocaleString()}/mes`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      casa: 'Casa',
      departamento: 'Departamento',
      lote: 'Lote',
      local: 'Local Comercial',
      oficina: 'Oficina',
      terreno: 'Terreno',
    };
    return types[type] || type;
  };

  return (
    <article
      className="card-property cursor-pointer group"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`tag-badge ${property.category === 'venta' ? 'tag-sale' : 'tag-rent'}`}>
            {property.category === 'venta' ? 'Venta' : 'Alquiler'}
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
            {property.district ? `${property.district}, ${property.province}` : property.province}
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
