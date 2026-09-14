import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { AboutSection } from '../components/home/AboutSection';
import { BrandsSection } from '../components/home/BrandsSection';
import { HeroSection } from '../components/home/HeroSection';
import { ServiceModal } from '../components/home/ServiceModal';
import { ServicesSection, type ServiceItem } from '../components/home/ServicesSection';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { SuppliesSection } from '../components/home/SuppliesSection';
import { TrustBar } from '../components/home/TrustBar';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <main>
      {/* Scroll Progress Bar in #6EBF4A */}
      <motion.div className="progress" style={{ scaleX: progressScaleX }} />

      {/* 1. Header / Navbar */}
      <Header />

      {/* 2. Hero Principal (55% texto / 45% visual) */}
      <HeroSection />

      {/* 3. Banda de Confianza (Fondo blanco, 4 columnas compacta) */}
      <TrustBar />

      {/* 4. Sección Soluciones de Impresión ("Tecnología que impulsa tu negocio") */}
      <SolutionsSection />

      {/* 4b. Marcas con las que trabajamos (Carrusel de marcas líderes) */}
      <BrandsSection />

      {/* 5. Catálogo de Servicios con Cards Minimalistas */}
      <ServicesSection onSelectService={setSelectedService} />

      {/* 6. Sobre Digital Copy / Respaldo Corporativo */}
      <AboutSection />

      {/* 7. Suministros y Consumibles */}
      <SuppliesSection />

      {/* 8. Pie de Página */}
      <Footer />

      {/* Modal Accesible de Detalle de Servicio */}
      <ServiceModal
        selectedService={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
