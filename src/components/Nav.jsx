import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

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
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsDestinosOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDestinosOpen(false);
    };

    return (
        <nav className="nav">
            <div
                className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <NavLink to="/" onClick={closeMobileMenu}>Inicio</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/nosotros" onClick={closeMobileMenu}>Sobre nosotros</NavLink>
                </li> */}

                <li
                    className="nav-item dropdown-toggle"
                    onMouseEnter={() => window.innerWidth > 768 && setIsDestinosOpen(true)}
                    onMouseLeave={() => window.innerWidth > 768 && setIsDestinosOpen(false)}
                    onClick={() => window.innerWidth <= 768 && setIsDestinosOpen(!isDestinosOpen)}
                >
                    <span>Destinos</span>

                    <div className={`destinos-menu ${isDestinosOpen ? 'open' : ''}`}>
                        {Object.entries(destinos).map(([paisId, { nombre, ciudades }]) => (
                            <div className="country-block" key={paisId}>
                                <span className="country-name">{nombre}</span>
                                <ul className="cities-list">
                                    {ciudades.map(({ nombre: nombreCiudad, slug }) => (
                                        <li key={slug}>
                                            <NavLink
                                                to={`/country/${paisId}/${slug}`}
                                                className="city-link"
                                                onClick={closeMobileMenu}
                                            >
                                                {nombreCiudad}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </li>

                {/* <li className="nav-item">
                    <NavLink to="/servicios" onClick={closeMobileMenu}>Servicios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacto" onClick={closeMobileMenu}>Contacto</NavLink>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
