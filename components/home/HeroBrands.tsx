export function HeroBrands() {
  return (
    <div className="hero-brands-block" aria-label="Especialistas en marcas líderes">
      <span className="hero-brands-label">Especialistas en</span>
      <div className="hero-brands-items">
        <div className="hero-brand-logo-wrap">
          <img
            src="/imgs/brands/konicalogo.jpg"
            alt="Konica Minolta"
            className="hero-brand-img"
            loading="eager"
          />
        </div>

        <span className="hero-brand-pipe" aria-hidden="true" />

        <div className="hero-brand-logo-wrap">
          <img
            src="/imgs/brands/ricoh.png"
            alt="Ricoh"
            className="hero-brand-img"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
