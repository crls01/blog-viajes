import { Link } from 'react-router-dom';
import './Home.css';
import { countries } from '../data/countries.js';

// Datos de tips, rutas desde /public/img
const tips = [
    {
        title: 'Activa tu eSIM antes de viajar',
        text: 'Asegúrate de activar tu eSIM en casa y verificar la cobertura en tu destino.',
        image: '/img/tips/tip1.jpg',
        ctaText: 'Ver eSIMs recomendadas →',
        ctaLink: '/esim-info',
    },
    {
        title: 'Contrata un seguro de viaje adecuado',
        text: 'Protege tu viaje con un seguro que cubra emergencias médicas y cancelaciones.',
        image: '/img/tips/tip2.jpg',
        ctaText: 'Consulta seguros de viaje →',
        ctaLink: '/seguros',
    },
    {
        title: 'Elige la forma de pago correcta',
        text: 'Usa tarjetas sin comisiones en el extranjero o efectivo según el destino.',
        image: '/img/tips/tip3.jpg',
        ctaText: 'Más sobre formas de pago →',
        ctaLink: '/formas-pago',
    },
    {
        title: 'Planifica excursiones y actividades',
        text: 'Descubre las mejores excursiones y actividades para aprovechar tu viaje al máximo.',
        image: '/img/tips/tip4.jpg',
        ctaText: 'Explora excursiones →',
        ctaLink: '/excursiones',
    },
];

export default function Home() {
    return (
        <main className="home-container">
            <h1 className="home-title">Guía de países</h1>

            {/* Lista de países */}
            <section className="country-list">
                {countries.map((country) => (
                    <Link
                        key={country.id}
                        to={`/country/${country.id}`}
                        className="country-item"
                        aria-label={`Explora ${country.name}`}
                    >
                        <div className="country-image-wrapper">
                            <img
                                src={country.img}
                                alt={country.name}
                                className="country-image"
                                loading="lazy"
                            />
                            <div className="country-name-overlay">{country.name}</div>
                        </div>
                    </Link>
                ))}
            </section>

            {/* Sección de consejos */}
            <section className="tips-section">
                <h2 className="section-title">Consejos para tu viaje</h2>
                <div className="tips-grid">
                    {tips.map((tip, index) => (
                        <div key={index} className="tip-card">
                            <img src={tip.image} alt={tip.title} loading="lazy" />
                            <div className="tip-content">
                                <h3>{tip.title}</h3>
                                <p>{tip.text}</p>
                                <Link to={tip.ctaLink} className="cta-link">
                                    {tip.ctaText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
