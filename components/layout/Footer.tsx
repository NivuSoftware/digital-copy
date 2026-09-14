import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BrandLogo } from '../ui/BrandLogo';

const phone = '+593982264416';
const wa = 'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Suministros', href: '#suministros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="footer-main-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <a href="#inicio" aria-label="Volver al inicio de Digital Copy">
            <BrandLogo footer />
          </a>
          <p>
            Soluciones integrales de impresión corporativa, venta y alquiler de multifuncionales,
            suministros y soporte técnico especializado en Ecuador.
          </p>
          <div className="footer-social-row" aria-label="Redes sociales">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook Digital Copy"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram Digital Copy"
            >
              <FaInstagram size={15} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Digital Copy"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="WhatsApp Digital Copy"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="footer-col-title">Navegación</h4>
          <div className="footer-links-list">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-col-title">Contacto Directo</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <Phone size={17} />
              <a href={`tel:${phone}`}>+593 98 226 4416</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={17} />
              <a href="mailto:digitalcopy@gmail.com">digitalcopy@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>
                Av. 10 de Agosto y Rumipamba
                <br />
                Quito, Ecuador
              </span>
            </div>
            <div style={{ color: '#64748b', fontSize: '12px', marginTop: '6px' }}>
              Lun – Vie: 8:30 a 17:30
              <br />
              Sáb: 8:30 a 13:00
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div>
          <h4 className="footer-col-title">Ubicación en Quito</h4>
          <div className="footer-map-container">
            <iframe
              title="Ubicación de Digital Copy en Quito, Ecuador"
              src="https://www.google.com/maps?q=Av.%2010%20de%20Agosto%20y%20Rumipamba%2C%20Quito%2C%20Ecuador&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} Digital Copy. Todos los derechos reservados.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
