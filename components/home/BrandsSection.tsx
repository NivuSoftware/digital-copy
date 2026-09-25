import { motion, useReducedMotion } from 'framer-motion';

interface Brand {
  name: string;
  src: string;
  needsLightBg?: boolean;
}

const brands: Brand[] = [
  { name: 'Konica Minolta', src: '/imgs/brands/konicalogo.jpg', needsLightBg: true },
  { name: 'Ricoh', src: '/imgs/brands/ricoh.png' },
  { name: 'Kyocera', src: '/imgs/brands/Kyocera-Logo.png', needsLightBg: true },
  { name: 'Xerox', src: '/imgs/brands/Xerox-Logo.png' },
];

export function BrandsSection() {
  const reduce = useReducedMotion();

  // Repetimos los logos 3 veces para garantizar un carrusel continuo e infinito fluido en escritorio
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="marcas" className="brands-section" aria-label="Marcas con las que trabajamos">
      <div className="brands-container">
        <motion.span
          className="brands-label"
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          TRABAJAMOS CON MARCAS LÍDERES
        </motion.span>

        {/* 1. Carrusel Infinito para Pantallas Grandes (Desktop > 900px) */}
        <div className="brands-carousel-wrapper">
          <div
            className={`brands-carousel-track ${reduce ? 'brands-carousel-track--reduced' : ''}`}
          >
            {repeatedBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className={`brands-logo-item ${brand.needsLightBg ? 'brands-logo-item--light-bg' : ''}`}
                title={brand.name}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  loading={idx < 4 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Rueda / Órbita Circular Animada para Teléfonos y Pantallas Medianas (<= 900px) */}
        <div className="brands-orbit-wrapper" aria-label="Marcas aliadas en órbita circular">
          <div className="brands-orbit-ring" aria-hidden="true" />
          <div className="brands-orbit-ring-outer" aria-hidden="true" />

          {/* Núcleo central con Digital Copy */}
          <div className="brands-orbit-center" title="Digital Copy">
            <div className="brands-orbit-center-glow" aria-hidden="true" />
            <img
              src="/imgs/logo.webp"
              alt="Digital Copy"
              className="brands-orbit-center-img"
            />
          </div>

          {/* Pista circular rotatoria con los 4 logos */}
          <div
            className={`brands-orbit-track ${reduce ? 'brands-orbit-track--reduced' : ''}`}
          >
            {brands.map((brand, idx) => (
              <div
                key={brand.name}
                className={`brands-orbit-slot brands-orbit-slot--${idx}`}
              >
                <div className="brands-orbit-badge" title={brand.name}>
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="brands-orbit-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="brands-orbit-hint" aria-hidden="true">
          Toca cualquier marca para pausar la rotación
        </span>
      </div>
    </section>
  );
}
