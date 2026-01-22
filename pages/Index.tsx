import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import RentalsSection from '@/components/sections/RentalsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <PropertiesSection />
        <RentalsSection />
        <ServicesSection />
        <ContactSection />
        <FloatingWhatsApp />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
