interface Brand {
  name: string;
  src: string;
}

const brands: Brand[] = [
  { name: 'Konica Minolta', src: '/imgs/brands/konicalogo.jpg' },
  { name: 'Ricoh', src: '/imgs/brands/ricoh.png' },
  { name: 'Kyocera', src: '/imgs/brands/Kyocera-Logo.png' },
  { name: 'Canon', src: '/imgs/brands/canonlogo.png' },
  { name: 'HP', src: '/imgs/brands/hplog.png' },
  { name: 'Xerox', src: '/imgs/brands/Xerox-Logo.png' },
];

export function BrandsSection() {
  return (
    <section id="marcas" className="brands-section" aria-label="Marcas que trabajamos">
      <div className="section-header-center" style={{ marginBottom: '38px' }}>
        <span className="lower-tag" style={{ justifyContent: 'center' }}>
          MARCAS QUE TRABAJAMOS
        </span>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>Las mejores marcas, un solo lugar</h2>
      </div>

      <div className="brands-bar-wrapper">
        <div className="brands-bar-white">
          {brands.map((brand) => (
            <div key={brand.name} className="brands-white-item" title={brand.name}>
              <img src={brand.src} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
