import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, FileText, Layers, Palette, Phone, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import type { ProductItem } from './ProductsCatalog';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const reduce = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  const quoteWaUrl = product
    ? `https://wa.me/593979305325?text=${encodeURIComponent(
        `Hola Digital Copy, deseo solicitar una cotización y asesoría técnica para el equipo ${product.brand} ${product.model}.`,
      )}`
    : '';

  return (
    <AnimatePresence>
      {product && (
      <motion.div
        key={product.id}
        role="presentation"
        className="product-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.dialog
          open
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="product-modal-container"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.95, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Botón de Cierre */}
          <button
            type="button"
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Cerrar ficha técnica"
            className="product-modal-close-btn"
          >
            <X size={20} />
          </button>

          {/* Columna Izquierda: Imagen y Pedestal */}
          <div className="product-modal-media">
            <div className="product-modal-media-pedestal">
              <img
                src={product.img}
                alt={`${product.brand} ${product.model}`}
                className="product-modal-img"
              />
            </div>

            <div className="product-modal-brand-tag">
              <span className={`brand-pill ${product.brand === 'Konica Minolta' ? 'brand-km' : 'brand-ricoh'}`}>
                {product.brand}
              </span>
              <span className="product-modal-type-badge">
                {product.category === 'color' ? 'Color & Monocromo' : 'Monocromática (B&N)'}
              </span>
            </div>

            <div className="product-modal-guarantee-box">
              <ShieldCheck size={20} className="modal-guarantee-icon" />
              <div>
                <strong>Garantía Digital Copy</strong>
                <p>Soporte técnico certificado, repuestos y tóner garantizados.</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información Técnica y Ficha */}
          <div className="product-modal-content">
            <div className="product-modal-header">
              <span className="lower-tag" style={{ marginBottom: '6px' }}>
                FICHA TÉCNICA CORPORATIVA
              </span>
              <h2 id="product-modal-title" className="product-modal-title">
                {product.name}
              </h2>
              <p className="product-modal-tagline">{product.tagline}</p>
            </div>

            <p className="product-modal-desc">{product.description}</p>

            {/* Puntos Destacados */}
            <div className="product-modal-highlights">
              <h3 className="product-modal-subtitle">
                <Sparkles size={16} className="modal-subtitle-icon" />
                Características Principales
              </h3>
              <ul className="product-modal-features-list">
                {product.keyFeatures.map((feat) => (
                  <li key={feat} className="product-modal-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tabla de Especificaciones Clave */}
            <div className="product-modal-specs-section">
              <h3 className="product-modal-subtitle">
                <FileText size={16} className="modal-subtitle-icon" />
                Especificaciones Técnicas
              </h3>
              <div className="product-modal-specs-table">
                <div className="spec-table-row">
                  <span className="spec-table-label">
                    <Zap size={14} /> Velocidad
                  </span>
                  <span className="spec-table-val">{product.speed}</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">
                    <Palette size={14} /> Tipo de impresión
                  </span>
                  <span className="spec-table-val">
                    {product.category === 'color' ? 'Color y blanco y negro' : 'Blanco y negro'}
                  </span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">
                    <Layers size={14} /> Formato de papel
                  </span>
                  <span className="spec-table-val">{product.format}</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">
                    <FileText size={14} /> Funciones
                  </span>
                  <span className="spec-table-val">Copia, impresión y escaneo</span>
                </div>
              </div>
              <p className="product-modal-note">
                Especificaciones referenciales. Solicita la ficha completa con un asesor.
              </p>
            </div>

            {/* Ideal Para */}
            <div className="product-modal-suitability">
              <strong>Recomendado para:</strong> {product.bestFor}
            </div>

            {/* Botones de Acción */}
            <div className="product-modal-actions">
              <motion.a
                href={quoteWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary modal-action-primary"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <FaWhatsapp size={19} />
                <span>Cotizar este equipo por WhatsApp</span>
              </motion.a>

              <a href="tel:+593979305325" className="btn-secondary modal-action-secondary">
                <Phone size={16} />
                <span>Llamar a un asesor (+593 97 930 5325)</span>
              </a>
            </div>
          </div>
        </motion.dialog>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
