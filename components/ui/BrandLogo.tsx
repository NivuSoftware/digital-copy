interface BrandLogoProps {
  footer?: boolean;
}

export function BrandLogo({ footer = false }: BrandLogoProps) {
  return (
    <div
      className={`brand-logo-container ${footer ? 'brand-logo-container--footer' : ''}`}
      aria-label="Digital Copy - Tu aliado en impresión"
    >
      <div className="brand-logo-badge">
        <img
          src="/imgs/logo.webp"
          alt="Digital Copy - Tu aliado en impresión"
          className="brand-logo-img"
        />
      </div>
    </div>
  );
}
