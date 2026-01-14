import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PropertiesSection from '@/components/sections/PropertiesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import RentalsSection from '@/components/sections/RentalsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <PropertiesSection />
        <ProjectsSection />
        <RentalsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
