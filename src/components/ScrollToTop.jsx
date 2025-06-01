// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambie la ruta, hace scroll al principio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // Este componente no renderiza nada
}
