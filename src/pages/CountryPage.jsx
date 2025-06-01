import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CountryPage.css';

export default function CountryPage() {
    const { countryId } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        import(`../data/destinos/${countryId}.json`)
            .then((module) => {
                setCountryData(module.default);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al cargar los datos del país:', error);
                setCountryData(null);
                setLoading(false);
            });
    }, [countryId]);

    if (loading) return <p>Cargando...</p>;
    if (!countryData) return <p>No se encontró información para este país.</p>;

    const { titulo, img, secciones, ciudades_destacadas } = countryData;

    return (
        <div className="country-page-wrapper">
            <div className="country-page">
                <h1>{titulo}</h1>
                {img && <img src={img} alt={titulo} className="main-country-img" />}

                {secciones.map((seccion, i) => (
                    <section key={i} className="section-html">
                        <h2>{seccion.titulo}</h2>
                        {seccion.subsecciones ? (
                            <div className="subsections">
                                {seccion.subsecciones.map((sub, j) => (
                                    <article key={j}>
                                        <h3>{sub.ciudad}</h3>
                                        <div
                                            className="city-html"
                                            dangerouslySetInnerHTML={{ __html: sub.html }}
                                        />
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="section-html"
                                dangerouslySetInnerHTML={{ __html: seccion.html }}
                            />
                        )}
                    </section>
                ))}
            </div>

            {ciudades_destacadas?.length > 0 && (
                <aside className="sidebar-right">
                    {ciudades_destacadas.map((ciudad, i) => (
                        <Link
                            key={i}
                            to={`/country/${countryId}/${ciudad}`}
                            className="city-image-link"
                        >
                            <img
                                src={`/img/cities/${countryId}/${ciudad}1.jpg`}
                                alt={ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}
                                title={ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}
                            />
                        </Link>
                    ))}
                </aside>
            )}
        </div>
    );
}
