import { Clock3, ShieldCheck, Star, Users } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Equipos confiables',
    desc: 'Trabajamos con marcas reconocidas.',
  },
  {
    icon: Clock3,
    title: 'Respuesta oportuna',
    desc: 'Tu operación no se detiene.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    desc: 'Te asesoramos en cada paso.',
  },
  {
    icon: Star,
    title: 'Experiencia y respaldo',
    desc: 'Servicio profesional para empresas.',
  },
];

export function TrustBar() {
  return (
    <section className="value-band-section" aria-label="Propuesta de valor y garantías">
      <div className="value-band-grid">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="value-band-item">
              <div className="value-band-icon-wrap" aria-hidden="true">
                <Icon size={34} strokeWidth={1.8} />
              </div>
              <h3 className="value-band-title">{item.title}</h3>
              <p className="value-band-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
