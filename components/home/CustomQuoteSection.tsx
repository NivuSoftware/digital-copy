import { Calendar, Headphones, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const quoteWa =
  'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20busco%20una%20soluci%C3%B3n%20a%20medida%20para%20mi%20empresa.';

export function CustomQuoteSection() {
  return (
    <section className="custom-quote-section" aria-label="Solución a medida">
      <div className="custom-quote-banner">
        {/* Columna Izquierda: Copy y CTA */}
        <div className="custom-quote-left">
          <span className="custom-quote-tag">¿BUSCAS UNA SOLUCIÓN A MEDIDA?</span>
          <h2 className="custom-quote-title">
            Tu equipo ideal,
            <br />
            con el mejor respaldo.
          </h2>
          <p className="custom-quote-desc">
            Te asesoramos sin compromiso, según tus necesidades y presupuesto.
          </p>
          <a
            href={quoteWa}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-quote-btn"
          >
            <FaWhatsapp size={18} />
            <span>Cotiza ahora</span>
          </a>
        </div>

        {/* Columna Centro: Foto de la multifuncional */}
        <div className="custom-quote-center">
          <img
            src="/imgs/imc300.jpg"
            alt="Multifuncional Ricoh IM C300 de alto rendimiento"
          />
        </div>

        {/* Columna Derecha: 3 Beneficios destacados con iconos verdes */}
        <div className="custom-quote-right">
          <div className="custom-quote-feature">
            <div className="custom-quote-icon-wrap" aria-hidden="true">
              <Headphones size={22} strokeWidth={2} />
            </div>
            <span>Asesoría gratuita</span>
          </div>

          <div className="custom-quote-feature">
            <div className="custom-quote-icon-wrap" aria-hidden="true">
              <Calendar size={22} strokeWidth={2} />
            </div>
            <span>Planes de alquiler flexibles</span>
          </div>

          <div className="custom-quote-feature">
            <div className="custom-quote-icon-wrap" aria-hidden="true">
              <ShieldCheck size={22} strokeWidth={2} />
            </div>
            <span>Garantía en todos nuestros equipos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
