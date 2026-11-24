import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpecialDishesSection } from './components/SpecialDishesSection';
import { MenuSection } from './components/MenuSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0D] text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpecialDishesSection />
        <MenuSection />
        <ServicesSection onSelectService={setSelectedService} />
        <WhyChooseUsSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
