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
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/imgs/c224.jpg"
            alt="Técnico especialista realizando calibración y servicio a multifuncional Konica Minolta bizhub C224"
          />

          <div className="lower-card-overlay">
            <div>
              <span className="lower-card-badge">BIZHUB C224 HD</span>
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#cbd5e1' }}>
                Calibración técnica y durabilidad para tu flujo de trabajo
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
