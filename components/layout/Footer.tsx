import { Mail, MapPin, Phone } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { BrandLogo } from '../ui/BrandLogo';

const phoneDisplay = '099 123 4567';
const phoneRaw = '+593982264416';
const wa =
  'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20tengo%20una%20consulta%20sobre%20sus%20servicios.';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="site-footer">
      {/* 1. Banner Superior de Consulta Directa */}
      <div className="footer-consultation-banner">
        <div className="footer-consult-left">
          <h2 className="footer-consult-title">¿Tienes alguna consulta?</h2>
          <p className="footer-consult-desc">
            Estamos listos para ayudarte. Escríbenos o llámanos.
          </p>
          <div className="footer-consult-buttons">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-wa"
            >
              <FaWhatsapp size={18} />
              <span>Escríbenos por WhatsApp</span>
            </a>
            <a href={`tel:${phoneRaw}`} className="footer-btn-call">
              <Phone size={16} />
              <span>Llámanos</span>
            </a>
          </div>
        </div>

        {/* Información de Contacto Directo */}
        <div className="footer-consult-info">
          <div className="footer-info-item">
            <div className="footer-info-icon-box">
              <Phone size={17} />
            </div>
            <div>
              <span className="footer-info-label">Teléfono</span>
              <a href={`tel:${phoneRaw}`} className="footer-info-val">
                {phoneDisplay}
              </a>
            </div>
          </div>
          <div className="footer-info-item">
            <div className="footer-info-icon-box">
              <Mail size={17} />
            </div>
            <div>
              <span className="footer-info-label">Email corporativo</span>
              <a href="mailto:info@digitalcopy.com.ec" className="footer-info-val">
                info@digitalcopy.com.ec
              </a>
            </div>
          </div>
          <div className="footer-info-item">
            <div className="footer-info-icon-box">
              <MapPin size={17} />
            </div>
            <div>
              <span className="footer-info-label">Oficina matriz</span>
              <span className="footer-info-val">Quito, Ecuador</span>
            </div>
          </div>
        </div>

        {/* Mini Mapa Estilizado de Quito con Enlace Directo */}
        <a
          href="https://maps.google.com/?q=Quito%2C+Ecuador"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-consult-map-card"
          title="Ver ubicación de Digital Copy en Google Maps"
        >
          <div className="footer-map-graphic">
            <div className="footer-map-grid" />
            <div className="footer-map-pin">
              <div className="footer-map-pin-pulse" />
              <MapPin size={24} className="footer-map-pin-icon" />
            </div>
            <span className="footer-map-label">Quito</span>
          </div>
          <span className="footer-map-cta">Ver en Google Maps ↗</span>
        </a>

        {/* Redes Sociales */}
        <div className="footer-consult-social">
          <span className="footer-social-title">Síguenos en redes</span>
          <div className="footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="TikTok"
            >
              <FaTiktok size={13} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="YouTube"
            >
              <FaYoutube size={14} />
            </a>
          </div>
          <span className="footer-social-tagline">Tecnología que impulsa tu negocio</span>
        </div>
      </div>

      {/* 2. Barra Inferior con Logo, Enlaces, Copyright y Volver Arriba */}
      <div className="footer-bottom-bar-v2">
        <div className="footer-bottom-brand">
          <BrandLogo footer />
        </div>

        <nav className="footer-bottom-links" aria-label="Navegación pie de página">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-bottom-right">
          <span className="footer-copyright-text">
            © 2026 Digital Copy. Todos los derechos reservados.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-top"
            aria-label="Volver arriba"
          >
            ↑ Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
