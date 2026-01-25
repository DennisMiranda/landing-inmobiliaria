"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRICE_RANGES, PROPERTY_TYPES, PROVINCES } from "@/data/properties";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [searchType, setSearchType] = useState<
    "comprar" | "alquilar" | "vender"
  >("comprar");
  const [location, setLocation] = useState("Tacna");
  const [propertyType, setPropertyType] = useState("casa");
  const [priceRange, setPriceRange] = useState("0-50000");

  const handleSearch = () => {
    // Apply filter options - for now just scroll to properties
    const element = document.getElementById("propiedades-venta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          className="w-full object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div className="mb-12" variants={titleVariants}>
          <h1 className="flex flex-col items-start text-5xl sm:text-6xl lg:text-8xl font-bold font-heading mb-4">
            <span className="text-primary drop-shadow-lg">Encuentra</span>
            <span className="text-white drop-shadow-lg">tu nuevo hogar</span>
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="p-6 sm:p-8 max-w-4xl mx-auto"
          variants={searchBarVariants}
        >
          {/* Type Buttons */}
          <div className="w-max mx-auto flex gap-1">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSearchType("comprar")}
              className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
                searchType === "comprar"
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
              onClick={() => setSearchType("alquilar")}
              className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
                searchType === "alquilar"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Alquilar
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setSearchType("vender");
                const element = document.getElementById("contacto");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex-1 px-4 md:px-6 py-3 rounded-t-lg cursor-pointer font-semibold transition-all duration-300 ${
                searchType === "vender"
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              Vender
            </motion.button>
          </div>

          {/* Search Fields */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ubicación
              </label>
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
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Precio
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar precio" />
                </SelectTrigger>
                <SelectContent>
                  {PRICE_RANGES.map((range) => (
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
      </motion.div>
    </section>
  );
};

export default HeroSection;