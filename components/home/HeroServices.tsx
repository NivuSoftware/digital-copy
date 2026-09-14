import { Layers3, Printer, Settings, Wrench } from 'lucide-react';

const heroServices = [
  {
    icon: Printer,
    label: 'Venta de equipos',
    href: '#equipos',
  },
  {
    icon: Wrench,
    label: 'Servicio técnico',
    href: '#servicios',
  },
  {
    icon: Settings,
    label: 'Mantenimiento',
    href: '#servicios',
  },
  {
    icon: Layers3,
    label: 'Suministros',
    href: '#suministros',
  },
];

export function HeroServices() {
  return (
    <nav className="hero-pills-row" aria-label="Accesos directos de servicios">
      {heroServices.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} href={item.href} className="hero-pill-item">
            <div className="hero-pill-icon-circle">
              <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <span className="hero-pill-label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
