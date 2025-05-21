import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const destinos = {
    España: ['Madrid', 'Barcelona', 'Sevilla'],
    Italia: ['Roma', 'Venecia', 'Milán'],
    Francia: ['París', 'Lyon', 'Marsella'],
    Japón: ['Tokio', 'Kioto', 'Osaka'],
    México: ['Ciudad de México', 'Cancún', 'Guadalajara'],
    Canadá: ['Toronto', 'Vancouver', 'Montreal'],
    Australia: ['Sídney', 'Melbourne', 'Brisbane'],
};


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDestinosOpen, setIsDestinosOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsDestinosOpen(false); // cierra destinos si se abre menú móvil
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDestinosOpen(false);
    };

    return (
        <nav className="nav">
            {/* Botón hamburguesa */}
            <div
                className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Lista de navegación */}
            <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <NavLink to="/" onClick={closeMobileMenu}>Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/nosotros" onClick={closeMobileMenu}>Sobre nosotros</NavLink>
                </li>

                {/* Dropdown destinos */}
                <li
                    className="nav-item dropdown-toggle"
                    onMouseEnter={() => window.innerWidth > 768 && setIsDestinosOpen(true)}
                    onMouseLeave={() => window.innerWidth > 768 && setIsDestinosOpen(false)}
                    onClick={() => window.innerWidth <= 768 && setIsDestinosOpen(!isDestinosOpen)}
                >
                    <span>Destinos</span>

                    {/* Mega menú */}
                    <div className={`destinos-menu ${isDestinosOpen ? 'open' : ''}`}>
                        {Object.entries(destinos).map(([pais, ciudades]) => (
                            <div className="country-block" key={pais}>
                                <span className="country-name">{pais}</span>
                                <ul className="cities-list">
                                    {ciudades.map(ciudad => (
                                        <li key={ciudad}>
                                            <NavLink
                                                to={`/destinos/${ciudad.toLowerCase()}`}
                                                className="city-link"
                                                onClick={closeMobileMenu}
                                            >
                                                {ciudad}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </li>

                <li className="nav-item">
                    <NavLink to="/servicios" onClick={closeMobileMenu}>Servicios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacto" onClick={closeMobileMenu}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
