import { Star } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Henrique Altamirano',
    role: 'Gerente general',
    company: 'Pérez Altamirano Abogados',
    quote: 'Excelente servicio y muy buena atención. Los equipos funcionan perfecto y siempre están pendientes.',
    avatar: '/imgs/avatars/henrique-altamirano.jpeg',
  },
  {
    name: 'Rocío Fiallos',
    role: 'Sub-director/a',
    company: 'Unidad Educativa "Johann Strauss"',
    quote: 'Rápidos, responsables y con muy buenos precios. 100% recomendados.',
    avatar: '/imgs/avatars/rocio-fiallos.jpeg',
  },
  {
    name: 'Sofía Tapia',
    role: 'Área de logística',
    company: 'EmiMedic',
    quote: 'El soporte técnico es de primera. Siempre que tenemos un problema, lo solucionan de inmediato.',
    avatar: '/imgs/avatars/sofia-tapia.jpeg',
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
          <article key={item.name} className="testimonial-card">
            <div className="testimonial-stars" aria-label="Calificación: 5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#6EBF4A" color="#6EBF4A" />
              ))}
            </div>

            <p className="testimonial-quote">“{item.quote}”</p>

            <div className="testimonial-author">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-author-info">
                <h3 className="testimonial-name">{item.name}</h3>
                <span className="testimonial-role">{item.role}</span>
                <span className="testimonial-company">{item.company}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
