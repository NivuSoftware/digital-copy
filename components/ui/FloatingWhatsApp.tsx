import { motion, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingWhatsAppProps {
  href?: string;
}

export function FloatingWhatsApp({
  href = 'https://wa.me/593982264416?text=Hola%20Digital%20Copy%2C%20deseo%20consultar%20sobre%20sus%20servicios%20y%20equipos.',
}: FloatingWhatsAppProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Contactar a Digital Copy por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={reduce ? undefined : { scale: 0.95 }}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
