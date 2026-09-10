import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  stagger,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const phone = '+593982264416';
const wa = `https://wa.me/593982264416?text=${encodeURIComponent('Hola Digital Copy, quiero recibir información sobre venta, alquiler o soporte técnico de impresoras.')}`;
const serviceWa = (service: string) =>
  `https://wa.me/593982264416?text=${encodeURIComponent(`Hola Digital Copy, me interesa recibir información sobre ${service}.`)}`;
const ease = [0.16, 1, 0.3, 1] as const;
const navLinks = [
  ['Servicios', '#servicios'],
  ['Equipos', '#equipos'],
  ['Marcas', '#marcas'],
  ['Nosotros', '#nosotros'],
  ['Contacto', '#contacto'],
];
type Service = {
  number: string;
  title: string;
  description: string;
  details: string;
  image: string;
};
const services: Service[] = [
  {
    number: '01',
    title: 'Venta de equipos',
    description:
      'Impresoras y multifuncionales para trabajar sin interrupciones.',
    details:
      'Encuentra equipos nuevos y seminuevos seleccionados según tu volumen de trabajo. Te asesoramos en capacidad, velocidad, conectividad y costo por página para que inviertas en la solución correcta.',
    image: '/imgs/printer.png',
  },
  {
    number: '02',
    title: 'Alquiler corporativo',
    description: 'Planes flexibles con equipos de alto rendimiento y respaldo.',
    details:
      'Reduce la inversión inicial con planes de alquiler adaptados a tu operación. Incluyen instalación, mantenimiento preventivo, soporte técnico y opciones flexibles según tu volumen mensual.',
    image: '/imgs/alquilercorporativo.png',
  },
  {
    number: '03',
    title: 'Soporte técnico',
    description: 'Mantenimiento preventivo y correctivo con respuesta rápida.',
    details:
      'Nuestro equipo diagnostica y resuelve fallas mecánicas, electrónicas y de configuración. Realizamos mantenimiento planificado para extender la vida útil del equipo y evitar interrupciones.',
    image: '/imgs/soportetecnico.png',
  },
  {
    number: '04',
    title: 'Suministros',
    description: 'Tóneres, repuestos y consumibles originales o compatibles.',
    details:
      'Disponemos de tóneres, tambores, unidades de imagen y repuestos para las principales marcas. Te ayudamos a mantener calidad constante y costos operativos bajo control.',
    image: '/imgs/toners.png',
  },
];
const brands = [
  { name: 'Konica Minolta', image: '/imgs/brands/konicalogo.jpg' },
  { name: 'Ricoh', image: '/imgs/brands/ricoh.png' },
  { name: 'Kyocera', image: '/imgs/brands/Kyocera-Logo.png' },
  { name: 'Canon', image: '/imgs/brands/canonlogo.png' },
  { name: 'HP', image: '/imgs/brands/hplog.png' },
  { name: 'Xerox', image: '/imgs/brands/Xerox-Logo.png' },
];
const testimonials = [
  {
    quote:
      'Digital Copy entendió nuestro volumen de impresión y nos propuso un plan que redujo costos sin sacrificar calidad. El soporte siempre responde.',
    name: 'María Fernanda Ruiz',
    role: 'Administradora, Grupo Andino',
  },
  {
    quote:
      'La instalación fue rápida y el equipo quedó configurado para toda la oficina. Ahora tenemos un solo proveedor para equipos y consumibles.',
    name: 'Carlos Mena',
    role: 'Gerente de Operaciones, Novatek',
  },
  {
    quote:
      'Cuando tuvimos una urgencia técnica, llegaron el mismo día. Esa continuidad es exactamente lo que necesitábamos para trabajar tranquilos.',
    name: 'Andrea Paredes',
    role: 'Directora, Estudio Norte',
  },
];
const promises = [
  [
    '01',
    'Asesoría que entiende tu negocio',
    'Te ayudamos a elegir la solución correcta desde el primer día.',
  ],
  [
    '02',
    'Soporte cuando lo necesitas',
    'Mantenimiento, repuestos y atención cercana para no detenerte.',
  ],
  [
    '03',
    'Costos claros y controlados',
    'Planes de alquiler y suministros que cuidan tu presupuesto.',
  ],
];

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand-logo${footer ? ' brand-logo-footer' : ''}`}>
      <img src="/imgs/logo.jpeg" alt="Digital Copy" />
    </span>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const imageY = useTransform(
    heroProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : ['0%', '14%'],
  );
  const imageScale = useTransform(
    heroProgress,
    [0, 1],
    reduce ? [1, 1] : [1.04, 1.12],
  );
  const copyY = useTransform(heroProgress, [0, 1], reduce ? [0, 0] : [0, 72]);
  const copyOpacity = useTransform(heroProgress, [0, 0.72], [1, 0.28]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setNavScrolled(value > 0.025);
  });

  useEffect(() => {
    if (!selectedService) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedService(null);
    };
    document.body.style.overflow = 'hidden';
    modalCloseRef.current?.focus();
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedService]);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />

      <motion.header
        className={`nav${navScrolled ? ' nav-scrolled' : ''}`}
        initial={{ y: reduce ? 0 : -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        <a
          className="logo"
          href="#inicio"
          aria-label="Digital Copy, ir al inicio"
        >
          <BrandLogo />
        </a>
        <nav aria-label="Navegación principal">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <motion.a
          className="nav-cta"
          href={wa}
          target="_blank"
          rel="noreferrer"
          whileHover={reduce ? undefined : { scale: 1.035 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          WhatsApp <ArrowUpRight size={15} />
        </motion.a>
        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.32, ease }}
          >
            {navLinks.map(([label, href], index) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.045, duration: 0.3, ease }}
              >
                <span>0{index + 1}</span>
                {label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="inicio" className="hero" ref={heroRef}>
        <motion.div
          className="hero-copy"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.55, ease }}
          >
            <span /> VENTA · ALQUILER · SOPORTE · SUMINISTROS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.72, ease }}
          >
            Imprime mejor.
            <br />
            <em>Crece sin límites.</em>
          </motion.h1>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Soluciones profesionales de impresión para empresas que necesitan
            eficiencia, continuidad y respaldo técnico.
          </motion.p>
          <motion.div
            className="actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.55, ease }}
          >
            <motion.a
              className="button green"
              href={wa}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Cotiza por WhatsApp <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              className="button ghost"
              href={`tel:${phone}`}
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              Llámanos <Phone size={17} />
            </motion.a>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.55 }}
          >
            <span>
              <strong>+15</strong> años de experiencia
            </span>
            <span>
              <strong>24h</strong> respuesta técnica
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
          transition={{ delay: 0.18, duration: 0.9, ease }}
        >
          <motion.img
            style={{ y: imageY, scale: imageScale }}
            src="/imgs/heroprinter.png"
            alt="Impresora multifunción profesional en una oficina"
          />
          <motion.div
            className="visual-tag"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.45, ease }}
          >
            <span className="dot" /> Equipos listos para tu operación
          </motion.div>
          <div className="hero-index" aria-hidden="true">
            DC / 01
          </div>
        </motion.div>
      </section>

      <motion.section
        className="trust"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          show: { transition: { delayChildren: stagger(0.075) } },
        }}
      >
        {[
          [ShieldCheck, 'Equipos originales', 'Garantía y respaldo'],
          [Wrench, 'Soporte especializado', 'Técnicos certificados'],
          [Zap, 'Respuesta rápida', 'Atención cuando importa'],
          [Clock3, 'Planes flexibles', 'Compra o alquiler'],
        ].map(([Icon, title, text]) => (
          <motion.div
            key={String(title)}
            variants={{
              hidden: { opacity: 0, x: -18 },
              show: { opacity: 1, x: 0, transition: { duration: 0.48, ease } },
            }}
          >
            <Icon />
            <span>
              <b>{String(title)}</b>
              <small>{String(text)}</small>
            </span>
          </motion.div>
        ))}
      </motion.section>

      <section id="servicios" className="section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease }}
        >
          <div>
            <p className="eyebrow dark">
              <span /> SOLUCIONES PARA TU EMPRESA
            </p>
            <h2>
              Todo lo que necesitas
              <br />
              <em>para imprimir mejor.</em>
            </h2>
          </div>
          <p>
            Un solo aliado para tus equipos, consumibles y soporte técnico.
            Diseñamos soluciones que se adaptan a tu ritmo.
          </p>
        </motion.div>
        <motion.div
          className="service-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { delayChildren: stagger(0.09) } },
          }}
        >
          {services.map((service) => (
            <motion.article
              className="service"
              key={service.number}
              variants={{
                hidden: { opacity: 0, y: 34 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.58, ease },
                },
              }}
              whileHover={reduce ? undefined : { y: -7 }}
            >
              <div className="service-image">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.55, ease }}
                />
                <span>{service.number}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  type="button"
                  className="service-more"
                  onClick={() => setSelectedService(service)}
                >
                  Conocer más <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="equipos" className="dark-section">
        <motion.div
          className="equipment-copy"
          initial={{ opacity: 0, x: -38 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow">
            <span /> EQUIPOS DE ALTO RENDIMIENTO
          </p>
          <h2>
            La potencia que tu negocio <em>necesita.</em>
          </h2>
          <p>
            Multifuncionales diseñados para imprimir, copiar y escanear con
            velocidad, precisión y bajo costo operativo.
          </p>
          <a
            className="button green"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar equipo <ArrowUpRight size={18} />
          </a>
        </motion.div>
        <motion.div
          className="equipment-image"
          whileInView={reduce ? undefined : { scale: [1.025, 1] }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.82, ease }}
        >
          <img
            src="/imgs/printer2.png"
            alt="Equipo multifunción en entorno corporativo"
          />
        </motion.div>
      </section>

      <section id="marcas" className="brands">
        <p className="eyebrow dark">
          <span /> TECNOLOGÍA EN LA QUE CONFÍAS
        </p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
        >
          Las mejores marcas, <em>un solo lugar.</em>
        </motion.h2>
        <div className="brand-marquee" aria-label="Marcas que comercializamos">
          <motion.div
            className="brand-track"
            animate={reduce ? undefined : { x: ['0%', '-50%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <span key={`${brand.name}-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="nosotros" className="promise">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className="eyebrow">
            <span /> TU OPERACIÓN, SIEMPRE ACTIVA
          </p>
          <h2>
            Más que impresoras.
            <br />
            <em>Un respaldo real.</em>
          </h2>
        </motion.div>
        <div className="promise-list">
          {promises.map(([number, title, text], index) => (
            <motion.p
              key={number}
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ delay: index * 0.08, duration: 0.52, ease }}
            >
              <b>{number}</b>
              <span>
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
            </motion.p>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact contact-split">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
        >
          <p className="eyebrow dark">
            <span /> HABLEMOS DE TU PROYECTO
          </p>
          <h2>
            ¿Listo para imprimir
            <br />
            <em>sin complicaciones?</em>
          </h2>
          <p>
            Cuéntanos qué necesitas. Nuestro equipo te responde con una
            recomendación clara y una cotización a tu medida.
          </p>
        </motion.div>
        <motion.div
          className="contact-printer"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="contact-bg" aria-hidden="true" />
          <span className="sr-only">
            Impresora multifunción disponible en Digital Copy
          </span>
          <span
            className="contact-diagonal contact-diagonal-left"
            aria-hidden="true"
          />
          <span
            className="contact-diagonal contact-diagonal-right"
            aria-hidden="true"
          />
        </motion.div>
        <motion.div
          className="contact-offer"
          initial={{ opacity: 0, rotate: reduce ? 0 : 1.5, y: 26 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.62, ease }}
        >
          <span className="contact-kicker">ASESORÍA SIN COSTO</span>
          <h3>Solicita tu cotización</h3>
          <p>
            Recibe una recomendación para tu volumen de impresión y presupuesto.
          </p>
          <a
            className="button green"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp <ArrowUpRight size={18} />
          </a>
          <a className="phone-link" href={`tel:${phone}`}>
            <Phone size={16} /> +593 98 226 4416
          </a>
        </motion.div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <motion.div
          className="testimonials-head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.62, ease }}
        >
          <p>EMPRESAS QUE SIGUEN OPERANDO</p>
          <h2 id="testimonials-title">
            Confianza construida <em>servicio a servicio.</em>
          </h2>
        </motion.div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease }}
            >
              <Quote aria-hidden="true" />
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              className="logo"
              href="#inicio"
              aria-label="Digital Copy, ir al inicio"
            >
              <BrandLogo footer />
            </a>
            <p>
              Tecnología que imprime confianza. Equipos, suministros y soporte
              técnico para mantener activa tu empresa.
            </p>
            <div
              className="social-links"
              aria-label="Síguenos en redes sociales"
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Digital Copy en Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Digital Copy en Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Digital Copy en LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Navegación</h3>
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <a href={`tel:${phone}`}>
              <Phone size={17} />
              <span>+593 98 226 4416</span>
            </a>
            <a href="mailto:digitalcopy@gmail.com">
              <Mail size={17} />
              <span>digitalcopy@gmail.com</span>
            </a>
            <span>
              <MapPin size={17} />
              <span>
                Av. 10 de Agosto y Rumipamba
                <br />
                Quito, Ecuador
              </span>
            </span>
            <small>Lun–Vie 8:30–17:30 · Sáb 8:30–13:00</small>
          </div>
          <div className="footer-map">
            <iframe
              title="Ubicación de Digital Copy en Quito, Ecuador"
              src="https://www.google.com/maps?q=Av.%2010%20de%20Agosto%20y%20Rumipamba%2C%20Quito%2C%20Ecuador&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Digital Copy. Todos los derechos reservados.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget)
                setSelectedService(null);
            }}
          >
            <motion.dialog
              open
              className="service-modal"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              initial={{
                opacity: 0,
                y: reduce ? 0 : 24,
                scale: reduce ? 1 : 0.97,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.38, ease }}
            >
              <button
                className="modal-close"
                type="button"
                ref={modalCloseRef}
                aria-label="Cerrar información del servicio"
                onClick={() => setSelectedService(null)}
              >
                <X />
              </button>
              <div className="modal-image">
                <img src={selectedService.image} alt={selectedService.title} />
                <span>{selectedService.number}</span>
              </div>
              <div className="modal-copy">
                <p>SOLUCIÓN DIGITAL COPY</p>
                <h2 id="service-modal-title">{selectedService.title}</h2>
                <p>{selectedService.details}</p>
                <a
                  className="button green"
                  href={serviceWa(selectedService.title)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por WhatsApp <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.dialog>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        className="float-wa"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4, ease }}
        whileHover={reduce ? undefined : { y: -4, scale: 1.05 }}
        whileTap={reduce ? undefined : { scale: 0.94 }}
      >
        <Phone size={22} />
      </motion.a>
    </main>
  );
}
