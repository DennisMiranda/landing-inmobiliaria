import { Property } from '@/models/property';
import { X, MapPin, Bed, Bath, Maximize, Check } from 'lucide-react';
import Button from './Button';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

const PropertyModal = ({ property, onClose }: PropertyModalProps) => {
  const formatPrice = (price: number, category: string) => {
    if (category === 'alquiler') {
      return `$${price.toLocaleString()}/mes`;
    }
    return `$${price.toLocaleString()}`;
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contacto');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-2xl max-h-[90vh] bg-card rounded-t-2xl sm:rounded-2xl overflow-hidden animate-slide-in-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image */}
          <div className="aspect-[16/10] relative">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Price & Title */}
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                {formatPrice(property.price, property.category)}
              </p>
              <h3 className="text-xl font-semibold text-foreground font-heading mt-1">
                {property.title}
              </h3>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>
                {property.district ? `${property.district}, ${property.province}` : property.province}
              </span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 py-3 border-y border-border">
              {property.bedrooms && (
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-primary" />
                  <span>{property.bedrooms} Dormitorios</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-primary" />
                  <span>{property.bathrooms} Baños</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Maximize className="w-5 h-5 text-primary" />
                <span>{property.area} m²</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Descripción</h4>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            {property.features && property.features.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Características</h4>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              <MapPin className="w-8 h-8 mr-2" />
              <span>Mapa de ubicación</span>
            </div>

            {/* CTA */}
            <Button variant="hero" fullWidth onClick={scrollToContact}>
              Contactar por esta propiedad
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
