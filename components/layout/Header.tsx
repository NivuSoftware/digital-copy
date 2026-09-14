import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  ctaHref?: string;
}

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Suministros', href: '#suministros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header({
  ctaHref = 'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n.',
}: HeaderProps) {
  const reduce = useReducedMotion();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest: number) => {
    setNavScrolled(latest > 0.02);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`nav ${navScrolled ? 'nav-scrolled' : ''}`}>
        <a href="#inicio" aria-label="Ir al inicio de Digital Copy">
          <BrandLogo />
        </a>

        {/* Central Horizontal Navigation */}
        <nav className="nav-center" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
              aria-current={activeSection === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA and Mobile Hamburger Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="nav-divider nav-cta-desktop" aria-hidden="true" />

          <motion.a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-cta-desktop"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            <span>Cotiza con un especialista</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        ctaHref={ctaHref}
        activeSection={activeSection}
      />
    </>
  );
}
