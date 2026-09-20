import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { BrandLogo } from '../ui/BrandLogo';

const phoneDisplay = '098 226 4416';
const phoneRaw = '+593982264416';
const email = 'digitalcopy@gmail.com';
const address = 'Av. 10 de Agosto y Rumipamba';
const city = 'Quito, Ecuador';
const mapUrl = 'https://maps.google.com/?q=Av.+10+de+Agosto+y+Rumipamba%2C+Quito%2C+Ecuador';
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
              <a href={`mailto:${email}`} className="footer-info-val">
                {email}
              </a>
            </div>
          </div>
          <div className="footer-info-item">
            <div className="footer-info-icon-box">
              <MapPin size={17} />
            </div>
            <div>
              <span className="footer-info-label">Oficina matriz</span>
              <span className="footer-info-val">
                {address}
                <br />
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>{city}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mapa interactivo embebido (OpenStreetMap, sin API key); el enlace "Abrir" lleva a Google Maps */}
        <div className="footer-consult-map-card">
          <div className="footer-map-header">
            <div className="footer-map-header-left">
              <span className="footer-map-status-dot" aria-hidden="true" />
              <span className="footer-map-header-title">Quito · Oficina Matriz</span>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-ext-link"
              title="Abrir ubicación en Google Maps"
            >
              <span>Abrir</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-map-frame-wrapper">
            <iframe
              title="Ubicación de Digital Copy - Av. 10 de Agosto y Rumipamba, Quito"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.4960%2C-0.1850%2C-78.4820%2C-0.1740&layer=mapnik&marker=-0.17939%2C-78.48927"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="footer-map-iframe"
            />
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-bottom-bar"
            title="Ver ubicación exacta en Google Maps"
          >
            <MapPin size={13} style={{ color: '#6EBF4A', flexShrink: 0 }} aria-hidden="true" />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Av. 10 de Agosto y Rumipamba
            </span>
          </a>
        </div>

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
