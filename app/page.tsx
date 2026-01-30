import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import RentalsSection from "@/components/sections/RentalsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="md:pt-16">
      <HeroSection />
      <PropertiesSection />
      <RentalsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
