import React, { type ElementType } from 'react';
import { ArrowRight, ClipboardList, Layers, Package, Printer, Wrench } from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  icon: ElementType;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'venta',
    number: '01',
    title: 'Venta de impresoras y copiadoras',
    shortDesc: 'Copiadoras e impresoras nuevas y seminuevas de las mejores marcas.',
    fullDesc:
      'Asesoría técnica para seleccionar el equipo que tu empresa necesita: equipos monocromáticos y a color, nuevos y seminuevos garantizados de marcas líderes como Konica Minolta (bizhub C224 / C360i) y Ricoh (IM C300 / IM C2500).',
    image: '/imgs/equipos-multifuncionales.jpg',
    icon: Printer,
  },
  {
    id: 'alquiler',
    number: '02',
    title: 'Alquiler de impresoras y copiadoras',
    shortDesc: 'Soluciones flexibles y accesibles para tu negocio.',
    fullDesc:
      'Modelos de renting corporativo y costo por página todo incluido: equipos multifuncionales de última generación, mantenimiento programado, repuestos y tóner garantizados sin inversión inicial de capital.',
    image: '/imgs/alquiler-equipos-corporativo.jpg',
    icon: ClipboardList,
  },
  {
    id: 'soporte',
    number: '03',
    title: 'Servicio técnico de impresoras y copiadoras',
    shortDesc: 'Mantenimiento preventivo y correctivo. Técnicos expertos a tu servicio.',
    fullDesc:
      'Atención técnica especializada en sitio para Konica Minolta y Ricoh. Diagnóstico de tarjetas lógicas, sistemas de fusor, unidades de imagen, calibración de color y resolución de fallas de red con instrumental de precisión.',
    image: '/imgs/servicio_tecnico.png',
    icon: Wrench,
  },
  {
    id: 'suministros',
    number: '04',
    title: 'Repuestos y suministros',
    shortDesc: 'Tóners, repuestos y consumibles originales y compatibles de alta calidad.',
    fullDesc:
      'Tóneres certificados de alto rendimiento para Konica Minolta (TN-216, TN-321, TN-328), botellas Ricoh MP 301, tubos de color CMYK, tambores, cuchillas de limpieza y papel Crome A4 con entrega inmediata.',
    image: '/imgs/suministros-toners-tintas.jpg',
    icon: Package,
  },
  {
    id: 'impresiones',
    number: '05',
    title: 'Impresiones',
    shortDesc: 'Impresiones en blanco y negro y a color. Calidad profesional para cada necesidad.',
    fullDesc:
      'Servicio de copiado e impresión digital de alto volumen en formatos A4, A3 y tabloide. Calidad láser HD, acabado impecable y rapidez para planos, folletos y documentación empresarial.',
    image: '/imgs/impresoras-ricoh-oficina.jpg',
    icon: Layers,
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
        <h2>Todo lo que tu empresa necesita</h2>
        <p>
          Te ofrecemos soluciones completas de impresión en Quito: venta, alquiler, servicio técnico, repuestos y suministros para empresas.
        </p>
      </div>

      <div className="services-grid-5">
        {servicesData.map((srv) => {
          const Icon = srv.icon;
          return (
            <article
              key={srv.id}
              className="service-card-v2"
              onClick={() => onSelectService(srv)}
            >
              <div className="service-card-image-v2">
                <img src={srv.image} alt={srv.title} />
                <div className="service-icon-badge" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
              </div>
              <div className="service-card-body-v2">
                <h3 className="service-card-title-v2">{srv.title}</h3>
                <p className="service-card-text-v2">{srv.shortDesc}</p>
                <button
                  type="button"
                  className="service-card-btn-v2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(srv);
                  }}
                >
                  <span>Ver más</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
