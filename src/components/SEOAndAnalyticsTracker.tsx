import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}

const routeSEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Norkut - Donde tu operación se convierte en decisiones automáticas',
    description: 'Norkut es la plataforma cloud que automatiza la operación de tu retail. Punto de venta híbrido, gestión de inventario, finanzas y control de tiendas en tiempo real.'
  },
  '/gestion-inteligente': {
    title: 'Norkut - Gestión Inteligente y Melé IA',
    description: 'Donde la operación se convierte en decisiones automáticas. Norkut conecta proveedores, tiendas y operaciones en un solo flujo continuo impulsado por Inteligencia Artificial.'
  },
  '/funcionalidades': {
    title: 'Norkut - Ecosistema Operacional y Funcionalidades',
    description: 'Descubre las funcionalidades técnicas de Norkut: POS, compras, inventario, marketing, franquicias y finanzas con inferencia neural en el Edge.'
  },
  '/quiero-ser-partner': {
    title: 'Norkut - Portal de Partners e Integradores',
    description: 'Construye con nosotros el ecosistema del retail inteligente. Integra, implementa y genera ingresos recurrentes escalando la tecnología Norkut.'
  },
  '/solicitar-partner': {
    title: 'Norkut - Solicitar Ser Partner',
    description: 'Aplica para formar parte del programa de partners de Norkut y haz crecer tu modelo de negocio de integración y ventas B2B.'
  },
  '/precios': {
    title: 'Norkut - Planes y Precios Escalables',
    description: 'Conoce los planes de Norkut diseñados para retail real. Incluyen todos los módulos, usuarios ilimitados y escalabilidad mediante tokens adicionales.'
  },
  '/empresa': {
    title: 'Norkut - Sobre Nosotros y Nuestra Visión',
    description: 'Conoce la historia detrás de Norkut, nuestro paso de la operación real a una plataforma basada en AI, innovación tecnológica y visión de futuro.'
  },
  '/privacidad': {
    title: 'Norkut - Políticas de Privacidad',
    description: 'Políticas de privacidad y manejo de datos en la plataforma Norkut.'
  },
  '/terminos': {
    title: 'Norkut - Términos y Condiciones',
    description: 'Términos de servicio para la utilización de la infraestructura Norkut.'
  }
};

export default function SEOAndAnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Dynamic SEO update
    const seo = routeSEO[pathname] || {
      title: 'Norkut - El gestor inteligente de tu negocio',
      description: 'Norkut - La plataforma que centraliza la complejidad operativa de tu negocio'
    };
    
    document.title = seo.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', seo.description);
      document.head.appendChild(metaDesc);
    }

    // 2. Tracking events
    if (typeof window !== 'undefined') {
      // Meta Pixel standard tracking
      if (window.fbq) {
        window.fbq('track', 'PageView');
        
        if (pathname === '/precios') {
          window.fbq('track', 'ViewContent', { content_name: 'Precios' });
        } else if (pathname.includes('partner')) {
          window.fbq('track', 'ViewContent', { content_name: 'Partner' });
        }
      }
      
      // Google Analytics 4 tracking
      if (window.gtag) {
        window.gtag('config', 'G-H5473XVCNF', {
          page_path: pathname,
          page_title: seo.title
        });
        
        if (pathname === '/precios') {
          window.gtag('event', 'view_item', { item_name: 'Precios' });
        } else if (pathname.includes('partner')) {
          window.gtag('event', 'view_item', { item_name: 'Partner' });
        }
      }
    }
  }, [pathname]);

  return null;
}
