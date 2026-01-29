"use client";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PropertiesResultsSection from "@/components/sections/PropertiesResultsSection.tsx";
import PropertiesSection from "@/components/sections/PropertiesSection";
import RentalsSection from "@/components/sections/RentalsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { PropertyFilter } from "@/models/property";
import { useState } from "react";

export default function Home() {
  const [searchFilters, setSearchFilters] = useState<PropertyFilter | null>(
    null
  );

  const handleSearch = (
    filters: PropertyFilter & { searchType: "comprar" | "alquilar" }
  ) => {
    // Set filters for the appropriate section
    setSearchFilters(filters);

    // Scroll to search results section
    setTimeout(() => {
      const element = document.getElementById("search-results");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="md:pt-16">
      <HeroSection onSearch={handleSearch} />

      {/* Search Results - Only show when filters are active */}
      {searchFilters && (
        <PropertiesResultsSection searchFilters={searchFilters} />
      )}

      {/* Properties Sections - Show when no search is active */}
      {!searchFilters && (
        <>
          <PropertiesSection />
          <RentalsSection />
        </>
      )}

      <ServicesSection />
      <ContactSection />
    </main>
  );
}
