/**
 * StructuredData — Datos estructurados Schema.org inyectados desde React.
 *
 * Complementa el JSON-LD estático de `index.html` con los nodos que dependen
 * de datos de componentes (reseñas de clientes y migas de pan de secciones).
 *
 * IMPORTANTE: este componente NO renderiza ningún elemento visible. Emite
 * únicamente etiquetas <script type="application/ld+json">, que los
 * navegadores no pintan. El diseño visual del sitio permanece intacto.
 */

const SITE = 'https://digitalcopyec.com';

interface ReviewSeed {
  author: string;
  jobTitle: string;
  company: string;
  body: string;
}

/** Reseñas reales publicadas en la sección de testimonios. */
const reviewSeeds: ReviewSeed[] = [
  {
    author: 'Henrique Altamirano',
    jobTitle: 'Gerente general',
    company: 'Pérez Altamirano Abogados',
    body:
      'Excelente servicio y muy buena atención. Los equipos funcionan perfecto y siempre están pendientes.',
  },
  {
    author: 'Rocío Fiallos',
    jobTitle: 'Sub-directora',
    company: 'Unidad Educativa "Johann Strauss"',
    body: 'Rápidos, responsables y con muy buenos precios. 100% recomendados.',
  },
  {
    author: 'Sofía Tapia',
    jobTitle: 'Área de logística',
    company: 'EmiMedic',
    body:
      'El soporte técnico es de primera. Siempre que tenemos un problema, lo solucionan de inmediato.',
  },
];

const organizationRef = { '@id': `${SITE}/#organization` };

/**
 * Reseñas + calificación agregada.
 * `reviewCount` refleja exactamente las 3 reseñas publicadas en la página,
 * cada una con 5 estrellas, tal como se muestran en los testimonios.
 */
const reviewGraph = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE}/#organization`,
  name: 'Digital Copy',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: reviewSeeds.length,
    itemReviewed: organizationRef,
  },
  review: reviewSeeds.map((r) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: r.author,
      jobTitle: r.jobTitle,
      worksFor: { '@type': 'Organization', name: r.company },
    },
    reviewBody: r.body,
    inLanguage: 'es-EC',
    itemReviewed: organizationRef,
  })),
};

/**
 * Migas de pan por secciones ancladas: ayuda a Google a generar
 * enlaces directos a secciones ("jump to") en los resultados.
 */
const breadcrumbGraph = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE}/#breadcrumb`,
  itemListElement: [
    { name: 'Inicio', url: `${SITE}/` },
    { name: 'Soluciones de impresión', url: `${SITE}/#equipos` },
    { name: 'Catálogo de equipos', url: `${SITE}/#catalogo` },
    { name: 'Servicios', url: `${SITE}/#servicios` },
    { name: 'Marcas', url: `${SITE}/#marcas` },
    { name: 'Nosotros', url: `${SITE}/#nosotros` },
    { name: 'Suministros', url: `${SITE}/#suministros` },
    { name: 'Contacto', url: `${SITE}/#contacto` },
  ].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewGraph) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbGraph) }}
      />
    </>
  );
}
