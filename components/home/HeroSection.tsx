import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Printer, Wrench } from 'lucide-react';
import { HeroBrands } from './HeroBrands';
import { HeroServices } from './HeroServices';

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="hero-section" aria-label="Sección Principal Digital Copy">
      {/* 1. Capa Fotográfica Protagonista (56% derecha, edge-to-edge con desvanecimiento) */}
      <div className="hero-photo-wrapper">
        <motion.img
          src="/imgs/mantenimiento_c360i.jpg"
          alt="Técnico especialista de Digital Copy realizando mantenimiento a una impresora multifuncional corporativa"
          className="hero-photo"
          loading="eager"
          initial={reduce ? false : { opacity: 0, scale: 1.02 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Desvanecimiento con gradiente de fusión hacia el fondo oscuro */}
        <div className="hero-photo-overlay" aria-hidden="true" />
      </div>

      {/* 2. Forma Diagonal Central Decorativa en Verde Corporativo */}
      <div className="hero-diagonal-shape" aria-hidden="true" />

      {/* 3. Contenedor de Contenido del Lado Izquierdo */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          {/* Título Principal de 3 líneas con acento en verde #6EBF4A */}
          <motion.h1
            className="hero-title"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            ¿Buscas una impresora
            <br />
            o <span className="hero-title-accent">soporte técnico</span>
            <br />
            especializado?
          </motion.h1>

          {/* Párrafo descriptivo (máximo 3 líneas, ancho óptimo de lectura) */}
          <motion.p
            className="hero-description"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            En Digital Copy proveemos equipos, repuestos y suministros Konica Minolta y Ricoh con atención inmediata.
          </motion.p>

          {/* Pequeña línea horizontal de acento verde #6EBF4A */}
          <motion.div
            className="hero-accent-line"
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.22, ease: 'easeOut' }}
          />

          {/* Mini Servicios (Fila horizontal de 4 círculos con icono + etiqueta) */}
          <motion.div
            className="hero-services-block"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroServices />
          </motion.div>

          {/* Marcas Especializadas (Konica Minolta & Ricoh) */}
          <motion.div
            className="hero-brands-container"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroBrands />
          </motion.div>

          {/* Botones Inferiores CTAs en Fila */}
          <motion.div
            className="hero-cta-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20necesito%20servicio%20t%C3%A9cnico%20especializado."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              <Wrench size={19} strokeWidth={2} aria-hidden="true" />
              <span>Necesito servicio técnico</span>
            </a>

            <a
              href="#equipos"
              className="hero-btn-secondary"
            >
              <Printer size={19} strokeWidth={1.8} aria-hidden="true" />
              <span>Quiero comprar un equipo</span>
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}