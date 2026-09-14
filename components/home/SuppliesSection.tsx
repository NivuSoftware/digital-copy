import { Package } from 'lucide-react';

const suppliesWa = `https://wa.me/593982264416?text=${encodeURIComponent(
  'Hola Digital Copy, necesito consultar el precio y disponibilidad de tóner o suministros.',
)}`;

export function SuppliesSection() {
  return (
    <section
      id="suministros"
      className="services-section"
      style={{ background: '#0b1626', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="section-header-center">
        <span className="lower-tag" style={{ justifyContent: 'center' }}>
          CONSUMIBLES ORIGINALES Y COMPATIBLES
        </span>
        <h2>Tóneres, tambores y repuestos de alto rendimiento</h2>
        <p>
          Mantén la nitidez de tus impresiones al mejor costo por página con consumibles
          certificados para Konica Minolta, Ricoh, Canon, HP y Kyocera.
        </p>
      </div>

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 14px' }}>
            ¿Necesitas tóner para tu oficina hoy mismo?
          </h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: '0 0 24px' }}>
            Dinos el modelo de tu impresora y te indicamos disponibilidad inmediata, rendimiento
            estimado en páginas y cotización con entrega directa en tu empresa.
          </p>
          <a
            href={suppliesWa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Package size={18} aria-hidden="true" />
            <span>Consultar suministros por WhatsApp</span>
          </a>
        </div>

        <div style={{ borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src="/imgs/toners.png"
            alt="Cartuchos de tóner de alta capacidad para impresoras y multifuncionales láser"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
