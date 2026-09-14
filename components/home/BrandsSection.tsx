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
  { name: 'Canon', src: '/imgs/brands/canonlogo.png' },
  { name: 'Xerox', src: '/imgs/brands/Xerox-Logo.png' },
  { name: 'HP', src: '/imgs/brands/hplog.png' },
];

export function BrandsSection() {
  const reduce = useReducedMotion();

  // Repetimos los logos 3 veces para garantizar un carrusel continuo e infinito fluido
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="brands-section" aria-label="Marcas con las que trabajamos">
      <div className="brands-container">
        <motion.span
          className="brands-label"
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          Trabajamos con marcas líderes
        </motion.span>

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
                  loading={idx < 6 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
