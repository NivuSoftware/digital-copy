import { Star } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'María Fernanda López',
    role: 'Gerente General',
    quote:
      'Excelente servicio y muy buena atención. Los equipos funcionan perfecto y siempre están pendientes.',
    avatar: '/imgs/avatars/maria.jpg',
  },
  {
    name: 'Carlos Méndez',
    role: 'Administrador',
    quote:
      'Rápidos, responsables y con muy buenos precios. 100% recomendados.',
    avatar: '/imgs/avatars/carlos.jpg',
  },
  {
    name: 'Daniela Castro',
    role: 'Jefe de Compras',
    quote:
      'El soporte técnico es de primera. Siempre que tenemos un problema, lo solucionan de inmediato.',
    avatar: '/imgs/avatars/daniela.jpg',
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
            {/* 5 Estrellas verdes */}
            <div className="testimonial-stars" aria-label="Calificación: 5 de 5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} fill="#6EBF4A" color="#6EBF4A" />
              ))}
            </div>

            {/* Cita */}
            <p className="testimonial-quote">“{item.quote}”</p>

            {/* Autor con avatar */}
            <div className="testimonial-author">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-author-info">
                <h3 className="testimonial-name">{item.name}</h3>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
