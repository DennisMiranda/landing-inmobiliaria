"use client";
import PropertySearch from "@/components/shared/PropertySearch";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/hero.webp"
          alt="Hero background"
          fill
          className="w-full object-cover"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/50 via-black/20 to-transparent" />
      </div>

{/* Person */}
<motion.div className="hidden md:block absolute bottom-0 right-12 z-10" initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}>
  <Image
    src="/Hero/person.png"
    alt="Asesor inmobiliario"
    width={420}
    height={620}
    className="hero-person drop-shadow-2xl max-h-full w-70"
    priority
  />

</motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div className="mb-12" variants={titleVariants}>
          <h1 className="flex flex-col items-start text-5xl sm:text-6xl lg:text-8xl leading-tight font-[var(--font-heading)] font-bold">
            <span className="text-blue-700 font-semibold drop-shadow-xl">
             Encuentra
            </span>
            <span className="text-white font-semibold drop-shadow-xl">
             tu nuevo hogar
            </span>
          </h1>
        </motion.div>

        {/* Search Bar */}
        <PropertySearch />
      </motion.div>
    </section>
  );
};

export default HeroSection;
