import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function MetaPixelTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      // Registrar PageView estándar en cada cambio de ruta (esto suplementa al index.html para comportamiento SPA)
      window.fbq('track', 'PageView');

      // Eventos de visualización de contenido clave (Precios y Partner)
      if (pathname === '/precios') {
        window.fbq('track', 'ViewContent', { content_name: 'Precios' });
      } else if (pathname.includes('partner')) {
        window.fbq('track', 'ViewContent', { content_name: 'Partner' });
      }
    }
  }, [pathname]);

  return null;
}
