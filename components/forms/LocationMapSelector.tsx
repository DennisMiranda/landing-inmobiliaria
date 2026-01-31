"use client";
import { LatLngExpression } from "leaflet";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import for Map component to avoid SSR issues
const Map = dynamic(() => import("@/components/shared/Map"), { ssr: false });

interface LocationMapSelectorProps {
  onLocationSelect: (coordinates: { lat: number; lng: number } | null) => void;
}

const LocationMapSelector = ({
  onLocationSelect,
}: LocationMapSelectorProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LatLngExpression | null>(null);

  // Default center (Tacna, Peru)
  const defaultCenter: LatLngExpression = [-18.0146, -70.2533];

  const handleMapClick = (lat: number, lng: number) => {
    const newLocation: LatLngExpression = [lat, lng];
    setSelectedLocation(newLocation);
    onLocationSelect({ lat, lng });
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border">
        {selectedLocation ? (
          <div className="relative w-full h-full">
            <Map center={selectedLocation} />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Ubicación seleccionada</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Lat: {(selectedLocation as [number, number])[0].toFixed(6)},
                Lng: {(selectedLocation as [number, number])[1].toFixed(6)}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Map center={defaultCenter} />
          </div>
        )}

        {/* Click overlay for map interaction */}
        <div
          className="absolute inset-0 cursor-crosshair"
          onClick={(e) => {
            // This is a simplified approach - in a real implementation,
            // you'd want to use the map's click events
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Convert pixel coordinates to lat/lng (simplified)
            // In production, you'd use the map library's built-in methods
            const lat = defaultCenter[0] + (y - rect.height / 2) * 0.0001;
            const lng = defaultCenter[1] + (x - rect.width / 2) * 0.0001;

            handleMapClick(lat, lng);
          }}
        />
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Haz clic en el mapa para seleccionar la ubicación</span>
        </div>
        {selectedLocation && (
          <button
            type="button"
            onClick={() => {
              setSelectedLocation(null);
              onLocationSelect(null);
            }}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Limpiar selección
          </button>
        )}
      </div>
    </div>
  );
};

export default LocationMapSelector;
