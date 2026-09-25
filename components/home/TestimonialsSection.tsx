import { Star } from 'lucide-react';

interface TestimonialItem {
  company: string;
  sector: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    company: 'Corporación Logística Andina',
    sector: 'Sector Logístico & Transporte',
    quote:
      'Excelente servicio y muy buena atención. Los equipos funcionan perfecto y siempre están pendientes.',
    avatar: '/imgs/avatars/empresa2.jpg',
  },
  {
    company: 'Grupo Comercial del Norte',
    sector: 'Sector Retail & Distribución',
    quote:
      'Rápidos, responsables y con muy buenos precios. 100% recomendados.',
    avatar: '/imgs/avatars/empresa1.jpg',
  },
  {
    company: 'Consultora & Servicios Integrales',
    sector: 'Servicios Profesionales',
    quote:
      'El soporte técnico es de primera. Siempre que tenemos un problema, lo solucionan de inmediato.',
    avatar: '/imgs/avatars/empresa3.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-label="Lo que dicen nuestros clientes">
      <div className="section-header-center">
        <span className="lower-tag" style={{ justifyContent: 'center' }}>
          LO QUE DICEN NUESTROS CLIENTES
        </span>
        <h2>Empresas que ya confían en nosotros</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.company} className="testimonial-card">
            {/* 5 Estrellas verdes */}
            <div className="testimonial-stars" aria-label="Calificación: 5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#6EBF4A" color="#6EBF4A" />
              ))}
            </div>

            {/* Cita */}
            <p className="testimonial-quote">“{item.quote}”</p>

            {/* Empresa con imagen */}
            <div className="testimonial-author">
              <img
                src={item.avatar}
                alt={item.company}
                className="testimonial-avatar"
              />
              <div className="testimonial-author-info">
                <h3 className="testimonial-name">{item.company}</h3>
                <span className="testimonial-role">{item.sector}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
