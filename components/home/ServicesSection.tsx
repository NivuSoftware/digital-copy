import { ArrowUpRight } from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'venta',
    number: '01',
    title: 'Venta de equipos',
    shortDesc:
      'Equipos multifuncionales de alta gama Konica Minolta y Ricoh para alta productividad.',
    fullDesc:
      'Asesoría técnica para seleccionar el equipo que tu empresa necesita: equipos monocromáticos y a color, nuevos y seminuevos garantizados de marcas líderes como Konica Minolta (bizhub C224 / C360i) y Ricoh (IM C300 / IM C3500).',
    image: '/imgs/mantenimiento_c360i.jpg',
  },
  {
    id: 'alquiler',
    number: '02',
    title: 'Alquiler corporativo',
    shortDesc:
      'Planes de outsourcing de impresión a tu medida. Reduce costos fijos de operación.',
    fullDesc:
      'Modelos de renting corporativo y costo por página todo incluido: equipos multifuncionales de última generación, mantenimiento programado, repuestos y tóner garantizados sin inversión inicial de capital.',
    image: '/imgs/alquiler_corporativo.jpg',
  },
  {
    id: 'soporte',
    number: '03',
    title: 'Soporte técnico',
    shortDesc:
      'Soporte técnico especializado Técnicos calificados para resolver cualquier falla en tu equipo',
    fullDesc:
      'Atención técnica especializada en sitio para Konica Minolta y Ricoh. Diagnóstico de tarjetas lógicas, sistemas de fusor, unidades de imagen, calibración de color y resolución de fallas de red.',
    image: '/imgs/reparacion_dual_konica_ricoh.jpg',
  },
  {
    id: 'suministros',
    number: '04',
    title: 'Suministros',
    shortDesc:
      'Tóners, repuestos y consumibles originales y compatibles con stock permanente.',
    fullDesc:
      'Tóneres certificados de alto rendimiento para Konica Minolta (TN-216, TN-321, TN-328), tambores, cuchillas de limpieza y reveladores. Despacho inmediato para evitar paradas en tu flujo de trabajo.',
    image: '/imgs/toners.png',
  },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="servicios" className="services-section">
      <div className="section-header-center">
        <span className="lower-tag" style={{ justifyContent: 'center' }}>
          NUESTROS SERVICIOS
        </span>
        <h2>Soluciones integrales para tu empresa</h2>
        <p>
          Equipamiento, soporte inmediato y consumibles de máxima durabilidad para que tu flujo
          corporativo nunca se detenga.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((srv) => (
          <article key={srv.id} className="service-card">
            <div className="service-card-image">
              <img src={srv.image} alt={srv.title} loading="lazy" />
              <span className="service-card-badge">{srv.number}</span>
            </div>
            <div className="service-card-body">
              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-text">{srv.shortDesc}</p>
              <button
                type="button"
                className="service-card-btn"
                onClick={() => onSelectService(srv)}
              >
                <span>Conocer más</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
