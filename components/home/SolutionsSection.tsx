import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Phone } from 'lucide-react';

const phone = '+593982264416';
const quoteWa = 'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20quiero%20solicitar%20una%20propuesta%20de%20soluciones%20de%20impresi%C3%B3n.';

const features = [
  'Equipos multifuncionales con conectividad de red y bajo costo por página',
  'Mantenimientos programados y soporte técnico prioritario en tu oficina',
  'Suministro constante de tóneres y consumibles con entrega inmediata',
];

export function SolutionsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="equipos" className="lower-section">
      <div className="lower-ambient-glow" aria-hidden="true" />

      <div className="lower-container">
        {/* Left: Text & Features */}
        <motion.div
          className="lower-copy"
          initial={{ opacity: 0, x: reduce ? 0 : -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="lower-tag">SOLUCIONES DE IMPRESIÓN</span>

          <h2 className="lower-title">
            Tecnología que impulsa{' '}
            <span className="lower-title-highlight">tu negocio</span>
          </h2>

          <p className="lower-desc">
            No solo ofrecemos equipos de impresión. Te ayudamos a mantener tu operación
            funcionando con soluciones integrales adaptadas a tu empresa.
          </p>

          <div className="lower-features-list">
            {features.map((feat) => (
              <div key={feat} className="lower-feature-item">
                <Check size={18} aria-hidden="true" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href={quoteWa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              <span>Solicitar propuesta a medida</span>
              <ArrowRight size={17} aria-hidden="true" />
            </motion.a>

            <a href={`tel:${phone}`} className="btn-secondary">
              <Phone size={16} aria-hidden="true" />
              <span>Llamar a un asesor</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Output Tray Visual */}
        <motion.div
          className="lower-visual-card"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/imgs/printed_output_tray.jpg"
            alt="Primer plano de una pila de hojas impresas a todo color saliendo de la bandeja de salida de una multifuncional"
            loading="lazy"
          />
          <div className="lower-card-overlay">
            <div>
              <span className="lower-card-badge">CALIDAD LÁSER HD</span>
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#cbd5e1' }}>
                Nitidez profesional en documentos corporativos y catálogos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
