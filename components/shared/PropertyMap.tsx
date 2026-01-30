"use client";
import { LatLngExpression } from "leaflet";

import dynamic from "next/dynamic";
import { useMemo } from "react";
const Map = dynamic(() => import("./Map"), { ssr: false });

interface PropertyMapProps {
  url: string;
}

const extractCoordsFromUrl = (url: string): LatLngExpression | null => {
  try {
    // Try to extract coordinates from URL path (new format)
    const pathMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (pathMatch) {
      const [, lat, lng] = pathMatch;
      return [parseFloat(lat), parseFloat(lng)];
    }

    // Try to extract from query parameters (old format)
    const urlObj = new URL(url);
    const ll = urlObj.searchParams.get("ll");
    if (ll) {
      const [lat, lng] = ll.split(",").map(Number);
      if (!isNaN(lat) && !isNaN(lng)) {
        return [lat, lng];
      }
    }

    // Try to extract from 3d param (3D view)
    const dParam = urlObj.searchParams.get("3d");
    if (dParam) {
      const coords = dParam.split("!").find((p) => p.startsWith("1d"));
      if (coords) {
        const [, lat, lng] = coords.match(/1d([\d.-]+)!2d([\d.-]+)/) || [];
        if (lat && lng) {
          return [parseFloat(lat), parseFloat(lng)];
        }
      }
    }

    return null;
  } catch (e) {
    console.error("Error parsing coordinates from URL:", e);
    return null;
  }
};

const PropertyMap = ({ url }: PropertyMapProps) => {
  // Extract coordinates from locationUrl and useMemo to avoid recalculating
  const center = useMemo(() => {
    if (url) {
      const coords = extractCoordsFromUrl(url);
      console.log("coords", coords);
      return coords;
    }
    return null;
  }, [url]);

  if (!center) return null;

  return (
    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
      <Map center={center} />
    </div>
  );
};

export default PropertyMap;
