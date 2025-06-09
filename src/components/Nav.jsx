import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const destinos = {
  espana: {
    nombre: 'España', ciudades: [
      { nombre: 'Madrid', slug: 'madrid' },
      { nombre: 'Barcelona', slug: 'barcelona' },
      { nombre: 'Sevilla', slug: 'sevilla' }
    ]
  },
  italia: {
    nombre: 'Italia', ciudades: [
      { nombre: 'Roma', slug: 'roma' },
      { nombre: 'Venecia', slug: 'venecia' },
      { nombre: 'Milán', slug: 'milan' }
    ]
  },
  francia: {
    nombre: 'Francia', ciudades: [
      { nombre: 'París', slug: 'paris' },
      { nombre: 'Lyon', slug: 'lyon' },
      { nombre: 'Marsella', slug: 'marsella' }
    ]
  },
  japon: {
    nombre: 'Japón', ciudades: [
      { nombre: 'Tokio', slug: 'tokio' },
      { nombre: 'Kioto', slug: 'kioto' },
      { nombre: 'Osaka', slug: 'osaka' }
    ]
  },
  mexico: {
    nombre: 'México', ciudades: [
      { nombre: 'Ciudad de México', slug: 'cdmx' },
      { nombre: 'Cancún', slug: 'cancun' },
      { nombre: 'Guadalajara', slug: 'guadalajara' }
    ]
  },
  canada: {
    nombre: 'Canadá', ciudades: [
      { nombre: 'Toronto', slug: 'toronto' },
      { nombre: 'Vancouver', slug: 'vancouver' },
      { nombre: 'Montreal', slug: 'montreal' }
    ]
  },
  australia: {
    nombre: 'Australia', ciudades: [
      { nombre: 'Sídney', slug: 'sidney' },
      { nombre: 'Melbourne', slug: 'melbourne' },
      { nombre: 'Brisbane', slug: 'brisbane' }
    ]
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinosOpen, setIsDestinosOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsDestinosOpen(false);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDestinosOpen(false);
  };

  return (
    <nav className="nav">
      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <div></div><div></div><div></div>
      </div>
      <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
        <li className="nav-item"><NavLink to="/" onClick={closeMenus}>Inicio</NavLink></li>
        <li className="nav-item dropdown-wrapper"
            onMouseEnter={() => setIsDestinosOpen(true)}
            onMouseLeave={() => setIsDestinosOpen(false)}>
          
          <NavLink to="/destinos" onClick={closeMenus}>
  <span className="dropdown-toggle">Destinos</span>
</NavLink>
          
          {isDestinosOpen && (
            <div className="destinos-menu-wrapper">
              <div className="destinos-menu">
                {Object.entries(destinos).map(([paisId, { nombre, ciudades }]) => (
                  <div className="country-block" key={paisId}>
                    <span className="country-name">{nombre}</span>
                    <ul className="cities-list">
                      {ciudades.map(({ nombre: ciudad, slug }) => (
                        <li key={slug}>
                          <NavLink to={`/country/${paisId}/${slug}`} className="city-link" onClick={closeMenus}>{ciudad}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
        <li className="nav-item"><NavLink to="/tips" onClick={closeMenus}>Consejos</NavLink></li>
        <li className="nav-item"><NavLink to="/sobre-nosotros" onClick={closeMenus}>Sobre nosotros</NavLink></li>
        <li className="nav-item"><NavLink to="/contacto" onClick={closeMenus}>Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
