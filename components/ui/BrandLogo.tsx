interface BrandLogoProps {
  footer?: boolean;
}

export function BrandLogo({ footer = false }: BrandLogoProps) {
  return (
    <div
      className="brand-logo-container"
      aria-label="Digital Copy - Tu aliado en impresión"
    >
      <div className="brand-isotype" aria-hidden="true">
        <div className="brand-isotype-inner" />
      </div>
      <div className="brand-text-block">
        <span
          className="brand-name"
          style={{ fontSize: footer ? '23px' : '21px' }}
        >
          Digital<span>Copy</span>
        </span>
        <span className="brand-motto">TU ALIADO EN IMPRESIÓN</span>
      </div>
    </div>
  );
}
