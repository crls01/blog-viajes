import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CountryPage() {
    const { countryId } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        import(`../data/destinos/${countryId}.json`)
            .then(module => {
                setCountryData(module.default);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar los datos del país:', error);
                setLoading(false);
            });
    }, [countryId]);

    if (loading) return <p>Cargando...</p>;
    if (!countryData) return <p>No se encontró información para este país.</p>;

    const { name, img, content } = countryData;

    return (
        <div className="country-page">
            <h1>{name}</h1>
            <img src={img} alt={name} className="main-country-img" />

            <section>
                <p>{content.intro}</p>
                <p>{content.presentacion}</p>
            </section>

            <section>
                <h2>{content.comoLlegar.titulo}</h2>
                <p>{content.comoLlegar.texto}</p>
                <h4>Principales aeropuertos:</h4>
                <ul>
                    {content.comoLlegar.aeropuertos.map((aero, i) => (
                        <li key={i}>{aero}</li>
                    ))}
                </ul>
                <h4>Otros medios:</h4>
                <ul>
                    {content.comoLlegar.otrosMedios.map((medio, i) => (
                        <li key={i}>{medio}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>{content.dondeDormir.titulo}</h2>
                <p>{content.dondeDormir.texto}</p>
                <h4>Zonas populares:</h4>
                <ul>
                    {content.dondeDormir.zonasPopulares.map((zona, i) => (
                        <li key={i}>{zona}</li>
                    ))}
                </ul>
                <h4>Tipos de alojamiento:</h4>
                <ul>
                    {content.dondeDormir.tipos.map((tipo, i) => (
                        <li key={i}>{tipo}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>{content.itinerarios.titulo}</h2>
                <p>{content.itinerarios.texto}</p>
                <ul>
                    {content.itinerarios.enlacesCTA.map((cta, i) => (
                        <li key={i}>
                            <Link to={cta.link}>{cta.texto}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>{content.restaurantes.titulo}</h2>
                <p>{content.restaurantes.texto}</p>
                <ul>
                    {content.restaurantes.recomendaciones.map((rest, i) => (
                        <li key={i}>{rest}</li>
                    ))}
                </ul>
                <Link to={content.restaurantes.masInfo.link}>
                    {content.restaurantes.masInfo.texto}
                </Link>
            </section>

            <section>
                <h2>{content.consejos.titulo}</h2>
                <p>{content.consejos.texto}</p>
                <h4>Mejor época para visitar:</h4>
                <ul>
                    {content.consejos.epocas.map((epoca, i) => (
                        <li key={i}>{epoca}</li>
                    ))}
                </ul>
                <h4>Transporte:</h4>
                <ul>
                    {content.consejos.transporte.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
                <p><strong>Idioma:</strong> {content.consejos.idioma}</p>
                <p><strong>Moneda:</strong> {content.consejos.moneda}</p>
            </section>

            <section>
                <h2>{content.masTiempo.titulo}</h2>
                <p>{content.masTiempo.texto}</p>
                <h4>Actividades recomendadas:</h4>
                <ul>
                    {content.masTiempo.actividades.map((act, i) => (
                        <li key={i}>{act}</li>
                    ))}
                </ul>
                <h4>Otros itinerarios:</h4>
                <ul>
                    {content.masTiempo.otrosItinerarios.map((it, i) => (
                        <li key={i}>
                            <Link to={it.link}>{it.texto}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Conclusión</h2>
                <p>{content.conclusion}</p>
            </section>
        </div>
    );
}
