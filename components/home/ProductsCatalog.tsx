import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Gauge, Palette, FileText } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { ProductModal } from './ProductModal';

export type ProductBrand = 'Konica Minolta' | 'Ricoh';
export type ProductCategory = 'color' | 'mono';

export interface ProductItem {
  id: string;
  brand: ProductBrand;
  model: string;
  name: string;
  category: ProductCategory;
  speed: string;
  format: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  bestFor: string;
  img: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'km-4050i',
    brand: 'Konica Minolta',
    model: 'bizhub 4050i',
    name: 'Konica Minolta 4050i',
    category: 'mono',
    speed: '40 ppm',
    format: 'A3 / A4',
    tagline: 'Rendimiento y confiabilidad en tu escritorio',
    description:
      'Multifuncional monocromática de la serie i, pensada para oficinas que imprimen documentos a diario y necesitan un equipo estable, rápido y con panel táctil.',
    keyFeatures: ['Copia, impresión y escaneo', 'Panel táctil a color', 'Ideal para alto volumen en B/N'],
    bestFor: 'Oficinas, áreas administrativas y departamentos con alto volumen de documentos.',
    img: '/imgs/products/KONICA_MINOLTA_4050i.png',
  },
  {
    id: 'km-c360i',
    brand: 'Konica Minolta',
    model: 'bizhub C360i',
    name: 'Konica Minolta C360i',
    category: 'color',
    speed: '36 ppm',
    format: 'A3 / A4',
    tagline: 'Rendimiento y calidad en cada impresión',
    description:
      'Multifuncional a color y B/N con múltiples bandejas de papel y panel táctil. Combina velocidad y fidelidad de color para presentaciones y documentación corporativa.',
    keyFeatures: ['Color y monocromo', 'Hasta 4 bandejas de papel', 'Panel táctil a color'],
    bestFor: 'Empresas que necesitan material a color de calidad profesional y flujo de trabajo ágil.',
    img: '/imgs/products/KONICA_MINOLTA_C360i.png',
  },
  {
    id: 'km-c454',
    brand: 'Konica Minolta',
    model: 'bizhub C454',
    name: 'Konica Minolta C454',
    category: 'color',
    speed: '45 ppm',
    format: 'A3 / A4',
    tagline: 'Rendimiento y calidad en cada impresión',
    description:
      'Equipo robusto a color y B/N de alta velocidad, con gran capacidad de papel. Una opción probada para entornos de producción y volumen medio-alto.',
    keyFeatures: ['Color y monocromo', 'Alta velocidad: 45 ppm', 'Gran capacidad de papel'],
    bestFor: 'Centros de copiado, imprentas pequeñas y oficinas con demanda constante.',
    img: '/imgs/products/KONICA_MINOLTA_C454.png',
  },
  {
    id: 'ricoh-im-c300',
    brand: 'Ricoh',
    model: 'IM C300',
    name: 'Ricoh IM C300',
    category: 'color',
    speed: '30 ppm',
    format: 'A4',
    tagline: 'Multifuncional color para tu empresa',
    description:
      'Multifuncional compacta a color y B/N con pantalla táctil inteligente. Ocupa poco espacio y es ideal para equipos de trabajo pequeños y medianos.',
    keyFeatures: ['Color y monocromo', 'Diseño compacto', 'Pantalla táctil inteligente'],
    bestFor: 'Pequeñas y medianas empresas y consultorios que buscan color sin ocupar mucho espacio.',
    img: '/imgs/products/RICOH_IM_C300.png',
  },
  {
    id: 'ricoh-im-c4500',
    brand: 'Ricoh',
    model: 'IM C4500',
    name: 'Ricoh IM C4500',
    category: 'color',
    speed: '45 ppm',
    format: 'A3 / A4',
    tagline: 'Alto rendimiento para tu empresa',
    description:
      'Multifuncional a color y B/N de alta velocidad con varias bandejas y pantalla táctil. Diseñada para trabajo intensivo y ambientes corporativos exigentes.',
    keyFeatures: ['Color y monocromo', 'Alta velocidad: 45 ppm', 'Múltiples bandejas de papel'],
    bestFor: 'Corporaciones y departamentos con alta demanda de impresión a color.',
    img: '/imgs/products/RICOH_IM_C4500.png',
  },
  {
    id: 'ricoh-mp-4055',
    brand: 'Ricoh',
    model: 'MP 4055',
    name: 'Ricoh MP 4055',
    category: 'mono',
    speed: '40 ppm',
    format: 'A3 / A4',
    tagline: 'Rendimiento y confiabilidad para tu empresa',
    description:
      'Multifuncional monocromática reconocida por su durabilidad. Excelente relación costo por página para oficinas que imprimen grandes volúmenes en blanco y negro.',
    keyFeatures: ['Monocromática (B/N)', 'Panel táctil', 'Bajo costo por página'],
    bestFor: 'Oficinas, instituciones educativas y empresas con alto volumen en blanco y negro.',
    img: '/imgs/products/RICOH_MP_4055.png',
  },
];

type Filter = 'all' | ProductCategory | ProductBrand;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'color', label: 'Color y B/N' },
  { id: 'mono', label: 'Solo B/N' },
  { id: 'Konica Minolta', label: 'Konica Minolta' },
  { id: 'Ricoh', label: 'Ricoh' },
];

const matches = (p: ProductItem, f: Filter) =>
  f === 'all' || p.category === f || p.brand === f;

const quoteUrl = (p: ProductItem) =>
  `https://wa.me/593979305325?text=${encodeURIComponent(
    `Hola Digital Copy, deseo solicitar una cotización y asesoría técnica para el equipo ${p.brand} ${p.model}.`,
  )}`;

export function ProductsCatalog() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<ProductItem | null>(null);

  const visible = useMemo(() => productsData.filter((p) => matches(p, filter)), [filter]);

  return (
    <section id="catalogo" className="products-catalog">
      <div className="section-header-center">
        <span className="lower-tag" style={{ justifyContent: 'center' }}>
          CATÁLOGO DE EQUIPOS
        </span>
        <h2>Equipos de impresión para cada necesidad</h2>
        <p>
          Conoce algunos de los equipos más solicitados por nuestros clientes. Soluciones de
          impresión para oficinas, empresas e instituciones, con respaldo técnico y suministro.
        </p>
      </div>

      <div className="products-filters" role="group" aria-label="Filtrar equipos">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`products-filter-btn${filter === f.id ? ' is-active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout={!reduce} className="products-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.id}
              layout={!reduce}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{ duration: 0.25 }}
              className="product-card"
            >
              <button
                type="button"
                className="product-card-media"
                onClick={() => setSelected(p)}
                aria-label={`Ver ficha técnica de ${p.name}`}
              >
                <img src={p.img} alt={p.name} loading="lazy" />
              </button>

              <div className="product-card-body">
                <div className="product-card-meta">
                  <span className={`brand-pill ${p.brand === 'Konica Minolta' ? 'brand-km' : 'brand-ricoh'}`}>
                    {p.brand}
                  </span>
                  <span className="product-card-format">{p.format}</span>
                </div>

                <h3 className="product-name">{p.name}</h3>
                <p className="product-card-tagline">{p.tagline}</p>

                <div className="product-card-chips">
                  <span className="product-chip">
                    <Gauge size={14} /> {p.speed}
                  </span>
                  <span className="product-chip">
                    <Palette size={14} /> {p.category === 'color' ? 'Color y B/N' : 'Solo B/N'}
                  </span>
                  <span className="product-chip">
                    <FileText size={14} /> Copia · Imprime · Escanea
                  </span>
                </div>

                <div className="product-card-actions">
                  <button type="button" className="product-card-btn" onClick={() => setSelected(p)}>
                    Ver ficha técnica <ArrowRight size={15} />
                  </button>
                  <a
                    href={quoteUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-quote"
                    aria-label={`Cotizar ${p.name} por WhatsApp`}
                  >
                    <FaWhatsapp size={17} /> Cotizar
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="products-catalog-footer">
        Contamos con una amplia variedad de equipos de impresión para las necesidades de tu empresa.
      </p>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
