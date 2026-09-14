import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import type { ServiceItem } from './ServicesSection';

interface ServiceModalProps {
  selectedService: ServiceItem | null;
  onClose: () => void;
}

const serviceWa = (serviceTitle: string) =>
  `https://wa.me/593982264416?text=${encodeURIComponent(
    `Hola Digital Copy, deseo más información sobre el servicio de ${serviceTitle}.`,
  )}`;

export function ServiceModal({ selectedService, onClose }: ServiceModalProps) {
  const reduce = useReducedMotion();
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedService) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    modalCloseRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService, onClose]);

  return (
    <AnimatePresence>
      {selectedService && (
        <motion.div
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 70,
            backgroundColor: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.dialog
            open
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: 'min(860px, 100%)',
              backgroundColor: '#0c121e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              color: '#ffffff',
            }}
          >
            <button
              type="button"
              ref={modalCloseRef}
              onClick={onClose}
              aria-label="Cerrar detalle del servicio"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ height: '340px', position: 'relative', overflow: 'hidden' }}>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'var(--accent)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                {selectedService.number}
              </span>
            </div>

            <div
              style={{
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span className="lower-tag" style={{ marginBottom: '8px' }}>
                SOLUCIÓN DIGITAL COPY
              </span>
              <h3
                id="service-dialog-title"
                style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 14px' }}
              >
                {selectedService.title}
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 28px' }}>
                {selectedService.fullDesc}
              </p>
              <a
                href={serviceWa(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: 'fit-content' }}
              >
                <span>Consultar por WhatsApp</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
