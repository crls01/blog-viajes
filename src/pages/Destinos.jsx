// src/pages/Destinos.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Destinos.css';

const destinos = {
  espana: {
    nombre: 'España',
    ciudades: [
      { nombre: 'Madrid', slug: 'madrid' },
      { nombre: 'Barcelona', slug: 'barcelona' },
      { nombre: 'Sevilla', slug: 'sevilla' }
    ]
  },
  italia: {
    nombre: 'Italia',
    ciudades: [
      { nombre: 'Roma', slug: 'roma' },
      { nombre: 'Venecia', slug: 'venecia' },
      { nombre: 'Milán', slug: 'milan' }
    ]
  },
  francia: {
    nombre: 'Francia',
    ciudades: [
      { nombre: 'París', slug: 'paris' },
      { nombre: 'Lyon', slug: 'lyon' },
      { nombre: 'Marsella', slug: 'marsella' }
    ]
  },
  japon: {
    nombre: 'Japón',
    ciudades: [
      { nombre: 'Tokio', slug: 'tokio' },
      { nombre: 'Kioto', slug: 'kioto' },
      { nombre: 'Osaka', slug: 'osaka' }
    ]
  },
  mexico: {
    nombre: 'México',
    ciudades: [
      { nombre: 'Ciudad de México', slug: 'cdmx' },
      { nombre: 'Cancún', slug: 'cancun' },
      { nombre: 'Guadalajara', slug: 'guadalajara' }
    ]
  },
  canada: {
    nombre: 'Canadá',
    ciudades: [
      { nombre: 'Toronto', slug: 'toronto' },
      { nombre: 'Vancouver', slug: 'vancouver' },
      { nombre: 'Montreal', slug: 'montreal' }
    ]
  },
  australia: {
    nombre: 'Australia',
    ciudades: [
      { nombre: 'Sídney', slug: 'sydney' },
      { nombre: 'Melbourne', slug: 'melbourne' },
      { nombre: 'Brisbane', slug: 'brisbane' }
    ]
  }
};

const Destinos = () => {
  const ciudadesConPais = Object.entries(destinos).flatMap(([paisId, { nombre: paisNombre, ciudades }]) =>
    ciudades.map(ciudad => ({ ...ciudad, paisId, paisNombre }))
  );

  return (
    <main className="home-container">
      <h1 className="home-title">Explora todas las ciudades</h1>
      <section className="country-list">
        {ciudadesConPais.map(({ nombre, slug, paisId, paisNombre }) => (
          <NavLink
            key={slug}
            to={`/country/${paisId}/${slug}`}
            className="country-item"
            aria-label={`Explora ${nombre}, ${paisNombre}`}
          >
            <div className="country-image-wrapper">
              <img
                src={`/img/cities/${paisId}/${slug}1.jpg`}
                alt={`${nombre} - ${paisNombre}`}
                className="country-image"
                loading="lazy"
              />
              <div className="country-name-overlay">{nombre}, {paisNombre}</div>
            </div>
          </NavLink>
        ))}
      </section>
    </main>
  );
};

export default Destinos;
