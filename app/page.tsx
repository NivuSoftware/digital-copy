import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { AboutSection } from '../components/home/AboutSection';
import { BrandsSection } from '../components/home/BrandsSection';
import { CustomQuoteSection } from '../components/home/CustomQuoteSection';
import { HeroSection } from '../components/home/HeroSection';
import { ServiceModal } from '../components/home/ServiceModal';
import { ServicesSection, type ServiceItem } from '../components/home/ServicesSection';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { SuppliesSection } from '../components/home/SuppliesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
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

      {/* 2. Hero Principal (Especialistas en soporte y multifuncionales) */}
      <HeroSection />

      {/* 3. Sección Soluciones de Impresión ("Tecnología que impulsa tu negocio") */}
      <SolutionsSection />

      {/* 4. Catálogo de Servicios (5 Cards Blancas con Iconos Verdes) */}
      <ServicesSection onSelectService={setSelectedService} />

      {/* 5. Marcas con las que trabajamos ("Trabajamos con marcas líderes") */}
      <BrandsSection />

      {/* 6. Propuesta de Valor y Garantías */}
      <TrustBar />

      {/* 7. Banner Solución a Medida ("Tu equipo ideal, con el mejor respaldo") */}
      <CustomQuoteSection />

      {/* 8. Sobre Digital Copy ("Más de 15 años cuidando la productividad de tu empresa") */}
      <AboutSection />

      {/* 9. Lo que dicen nuestros clientes (3 Testimonios con 5 estrellas verdes) */}
      <TestimonialsSection />

      {/* 10. Suministros y Consumibles (Tóneres, tambores y repuestos) */}
      <SuppliesSection />

      {/* 11. Pie de Página con Banner de Consulta y Redes */}
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
