import React from 'react';
import tipsViajes from '../data/tipsViajes';
import './TipsGenerales.css';
import { Link } from 'react-router-dom';

// 🧠 Reusamos tips destacados del home
const tipsDestacados = [
  {
    id: 'esim-info',
    image: '/img/tips/tip1.jpg',
    title: 'eSIM recomendadas',
  },
  {
    id: 'seguros',
    image: '/img/tips/tip2.jpg',
    title: 'Seguro de viaje',
  },
  {
    id: 'formas-pago',
    image: '/img/tips/tip3.jpg',
    title: 'Formas de pago',
  },

];

export default function TipsGenerales() {
  return (
    <div className="tips-generales-wrapper">
      <main className="tip-page">
        <div className="tip-hero">
          <img src={tipsViajes.img} alt={tipsViajes.titulo} loading="lazy" />
          <h1>{tipsViajes.titulo}</h1>
        </div>

        <div className="tip-content">
          {tipsViajes.secciones.map((seccion, index) => (
            <section key={index}>
              <h2>{seccion.titulo}</h2>
              <div dangerouslySetInnerHTML={{ __html: seccion.html }} />
            </section>
          ))}
        </div>
      </main>

      {/* ✅ Sidebar con tips destacados */}
      <aside className="sidebar-right no-scroll">
        {tipsDestacados.map((tip, index) => (
          <Link key={index} to={`/${tip.id}`} className="tip-image-link">
            <img
              src={tip.image}
              alt={tip.title}
              title={tip.title}
              loading="lazy"
            />
          </Link>
        ))}
      </aside>
    </div>
  );
}
