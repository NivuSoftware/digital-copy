import { Check } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="nosotros" className="lower-section" style={{ background: '#091220' }}>
      <div className="lower-container">
        <div className="lower-copy">
          <span className="lower-tag">SOBRE DIGITAL COPY</span>
          <h2 className="lower-title">
            Más de 15 años cuidando la productividad de tu empresa
          </h2>
          <p className="lower-desc">
            Somos una empresa ecuatoriana dedicada a la comercialización de impresoras,
            fotocopiadoras multifuncionales, repuestos y soporte técnico multimarca. Entendemos que
            un equipo detenido es una operación en riesgo; por eso, nuestro compromiso es la
            continuidad y la excelencia técnica.
          </p>

          <div className="lower-features-list">
            <div className="lower-feature-item">
              <Check size={18} aria-hidden="true" />
              <span>Cobertura en Quito y atención corporativa a nivel nacional</span>
            </div>
            <div className="lower-feature-item">
              <Check size={18} aria-hidden="true" />
              <span>Stock permanente de tóneres, piezas mecánicas y electrónicas</span>
            </div>
            <div className="lower-feature-item">
              <Check size={18} aria-hidden="true" />
              <span>Asesoría transparente sin letras chicas ni contratos restrictivos</span>
            </div>
          </div>
        </div>

        <div className="lower-visual-card">
          <img
            src="/imgs/alquilercorporativo.png"
            alt="Empresarios en oficina revisando impresiones de alta calidad junto a un equipo multifuncional"
            loading="lazy"
          />
          <div className="lower-card-overlay">
            <div>
              <span className="lower-card-badge">RESPALDO CORPORATIVO</span>
              <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#cbd5e1' }}>
                Atención personalizada para empresas, instituciones y despachos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
