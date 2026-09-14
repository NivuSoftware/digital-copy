import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  ctaHref: string;
  activeSection: string;
}

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Suministros', href: '#suministros' },
  { label: 'Contacto', href: '#contacto' },
];

export function MobileMenu({ isOpen, onClose, ctaHref, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-nav-drawer"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-label="Menú de navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '16px', textAlign: 'center' }}
            onClick={onClose}
          >
            <span>Solicita una cotización</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
