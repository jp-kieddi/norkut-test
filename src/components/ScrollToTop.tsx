import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Para evitar que interfiera el 'scroll-behavior: smooth' definido en el index.css, 
    // desactivamos temporalmente el comportamiento de scroll suave, nos movemos al 
    // principio, y volvemos a restaurarlo.
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    }, 0);
  }, [pathname]);

  return null;
}
